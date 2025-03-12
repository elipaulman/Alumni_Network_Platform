import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  location: { 
    type: String 
  },
  password: {
    type: String,
    required: true
  },
  interests: {
    type: String
  },
  description: { 
    type: String 
  },
  category: { 
    type: String
  },
  artCategory: { 
    type: String 
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
}, { timestamps: true });

// Pre-save hook to hash the password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', userSchema);
export default User;
