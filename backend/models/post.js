// backend/models/post.js

import mongoose from 'mongoose';
const { Schema } = mongoose;

const commentSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const postSchema = new Schema({
  userEmail: {
    type: String,
    required: true,
    trim: true,
  },
  text: {
    type: String,
    required: true,
    trim: true,
  },
  image: String,
  tags: [{
    type: String,
    trim: true,
  }],
  category: {
    type: String,
    trim: true,
  },
  comments: [commentSchema],
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);
export default Post;