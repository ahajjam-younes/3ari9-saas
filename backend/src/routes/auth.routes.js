const express = require('express');
const { asyncHandler } = require('../middleware/errorHandler');
const { authenticate } = require('../middleware/authenticate');
const authController = require('../controllers/auth.controller');

const router = express.Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
router.post('/register', asyncHandler(authController.register));

/**
 * @route POST /api/auth/login
 * @desc Login user and return JWT token
 * @access Public
 */
router.post('/login', asyncHandler(authController.login));

/**
 * @route POST /api/auth/logout
 * @desc Logout user (client-side)
 * @access Public
 */
router.post('/logout', asyncHandler(authController.logout));

/**
 * @route POST /api/auth/refresh-token
 * @desc Refresh JWT token
 * @access Public
 */
router.post('/refresh-token', asyncHandler(authController.refreshToken));

/**
 * @route POST /api/auth/forgot-password
 * @desc Send password reset email
 * @access Public
 */
router.post('/forgot-password', asyncHandler(authController.forgotPassword));

/**
 * @route POST /api/auth/reset-password/:token
 * @desc Reset password with token
 * @access Public
 */
router.post('/reset-password/:token', asyncHandler(authController.resetPassword));

/**
 * @route GET /api/auth/verify-email/:token
 * @desc Verify email address
 * @access Public
 */
router.get('/verify-email/:token', asyncHandler(authController.verifyEmail));

/**
 * @route POST /api/auth/resend-verification
 * @desc Resend email verification
 * @access Private
 */
router.post('/resend-verification', authenticate, asyncHandler(authController.resendVerification));

/**
 * @route POST /api/auth/change-password
 * @desc Change user password
 * @access Private
 */
router.post('/change-password', authenticate, asyncHandler(authController.changePassword));

/**
 * @route GET /api/auth/me
 * @desc Get current user profile
 * @access Private
 */
router.get('/me', authenticate, asyncHandler(authController.getCurrentUser));

/**
 * @route POST /api/auth/social/google
 * @desc Google OAuth login/register
 * @access Public
 */
router.post('/social/google', asyncHandler(authController.googleAuth));

/**
 * @route POST /api/auth/social/facebook
 * @desc Facebook OAuth login/register
 * @access Public
 */
router.post('/social/facebook', asyncHandler(authController.facebookAuth));

module.exports = router;