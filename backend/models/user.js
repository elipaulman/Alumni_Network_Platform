import mongoose, { Schema } from 'mongoose';

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
  location: {
    state: { type: String },
    city: { type: String }
  },
  description: { 
    type: String 
  },
  category: { 
    type: String, required: true
   },
  locatison_alum: { 
    type: String, required: true
  },
  artCategory: { 
    type: String 
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;