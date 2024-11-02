import express from 'express';
const router = express.Router();

// POST /api/posts
router.post('/post', upload.single('image'), async (req, res) => {
  try {
    const { userId, text } = req.body;
    
    const postData = {
      user: userId,
      text: text,
    };

    // If an image was uploaded, add it to the post data
    if (req.file) {
      postData.image = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
        name: req.file.originalname
      };
    }

    // Create the new post
    const newPost = await Post.create(postData);

    // Add the post reference to the user's posts array
    await User.findByIdAndUpdate(
      userId,
      { $push: { posts: newPost._id } }
    );

    // Fetch the complete post with user details
    const populatedPost = await Post.findById(newPost._id).populate('user', 'firstName lastName');

    res.status(201).json(populatedPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Error creating post', error: error.message });
  }
});

router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Find all posts by user ID, sorted by creation date (newest first)
    const posts = await Post.find({ user: userId })
      .populate('user', 'firstName lastName') // Get user details
      .sort({ createdAt: -1 });
    
    // Convert image buffers to base64 strings for transmission
    const postsWithImages = posts.map(post => {
      const postObject = post.toObject();
      if (postObject.image && postObject.image.data) {
        postObject.image.data = postObject.image.data.toString('base64');
      }
      return postObject;
    });

    res.json(postsWithImages);
  } catch (error) {
    console.error('Error fetching user posts:', error);
    res.status(500).json({ message: 'Error fetching posts', error: error.message });
  }
});

export default router;