require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');

// Import routes
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const storyRoutes = require('./routes/story.routes');
const subscriptionRoutes = require('./routes/subscription.routes');
const aiRoutes = require('./routes/ai.routes');
const adminRoutes = require('./routes/admin.routes');

// Import middleware
const { errorHandler } = require('./middleware/errorHandler');
const { authenticate } = require('./middleware/authenticate');

// Initialize express app
const app = express();

// Set up rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.NODE_ENV === 'production' ? 100 : 1000, // Higher limit in development
  message: 'Too many requests from this IP, please try again after 15 minutes',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json({ limit: '100mb' })); // Parse JSON bodies with increased limit
app.use(express.urlencoded({ extended: true, limit: '100mb' })); // Parse URL-encoded bodies with increased limit
app.use(morgan('dev')); // HTTP request logger

// Apply rate limiting to API routes
app.use('/api/', apiLimiter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/users', authenticate, userRoutes);
app.use('/api/stories', storyRoutes); // Some story routes may be public
app.use('/api/subscriptions', authenticate, subscriptionRoutes);
app.use('/api/ai', authenticate, aiRoutes);
app.use('/api/admin', authenticate, adminRoutes);

// Error handling middleware
app.use(errorHandler);

// Handle 404 routes
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Database connection
const connectDB = async () => {
  if (process.env.NODE_ENV === 'development' && process.env.SKIP_DB === 'true') {
    console.log('Skipping MongoDB connection in development mode');
    return;
  }
  
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    if (process.env.NODE_ENV === 'development') {
      console.log('Continuing without database in development mode');
    } else {
      process.exit(1);
    }
  }
};

// Start server
const PORT = process.env.PORT || 5000;
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

// Start the server
startServer();