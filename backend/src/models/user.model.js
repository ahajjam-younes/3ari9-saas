const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [50, 'Name cannot be more than 50 characters']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters'],
      select: false // Don't return password in queries by default
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    profilePicture: {
      type: String,
      default: ''
    },
    subscriptionStatus: {
      type: String,
      enum: ['none', 'active', 'canceled', 'expired'],
      default: 'none'
    },
    subscriptionTier: {
      type: String,
      enum: ['free', 'pro'],
      default: 'free'
    },
    subscriptionExpiresAt: {
      type: Date
    },
    stripeCustomerId: {
      type: String
    },
    stripeSubscriptionId: {
      type: String
    },
    credits: {
      type: Number,
      default: 0
    },
    preferences: {
      language: {
        type: String,
        enum: ['en', 'ua', 'ru', 'es', 'de', 'fr'],
        default: 'en'
      },
      theme: {
        type: String,
        enum: ['light', 'dark', 'system'],
        default: 'system'
      },
      notifications: {
        email: {
          type: Boolean,
          default: true
        },
        marketing: {
          type: Boolean,
          default: false
        }
      }
    },
    children: [{
      name: {
        type: String,
        required: true,
        trim: true
      },
      age: {
        type: Number,
        min: 0,
        max: 18
      },
      interests: [{
        type: String,
        trim: true
      }],
      avatar: {
        type: String
      }
    }],
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    emailVerificationToken: String,
    emailVerified: {
      type: Boolean,
      default: false
    },
    lastLogin: Date,
    passwordChangedAt: Date
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Virtual for user's stories
userSchema.virtual('stories', {
  ref: 'Story',
  localField: '_id',
  foreignField: 'user',
  justOne: false
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  // Only hash the password if it's modified
  if (!this.isModified('password')) return next();
  
  try {
    // Generate salt
    const salt = await bcrypt.genSalt(10);
    // Hash password with salt
    this.password = await bcrypt.hash(this.password, salt);
    
    // Update passwordChangedAt field if not a new user
    if (!this.isNew) {
      this.passwordChangedAt = Date.now() - 1000; // Subtract 1 second to ensure token is created after password change
    }
    
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Method to check if user has enough credits
userSchema.methods.hasEnoughCredits = function(requiredCredits) {
  return this.credits >= requiredCredits;
};

// Method to deduct credits
userSchema.methods.deductCredits = function(amount) {
  this.credits -= amount;
  return this.save();
};

// Method to add credits
userSchema.methods.addCredits = function(amount) {
  this.credits += amount;
  return this.save();
};

const User = mongoose.model('User', userSchema);

module.exports = User;