import mongoose, { Schema } from 'mongoose';

// Create the Post schema
const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  text: {
    type: String,
    trim: true
  },
  image: {
    data: Buffer,         // Store the actual image data
    contentType: String,  // Store the image type (e.g., 'image/jpeg', 'image/png')
    name: String         // Original filename
  },
  tags: [{
    type: String,
    trim: true
  }],
  category: {
    type: String,
    trim: true
  }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);
export default Post;