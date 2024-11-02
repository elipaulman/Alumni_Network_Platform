import express from 'express';
import Post from '../models/post.js';
import Opportunity from '../models/opportunity.js';
import alumniRoutes from './alumniRoutes.js';


const router = express.Router();

// Add a comment to a post
router.post('/posts/:postId/comments', async (req, res) => {
  try {
    const { postId } = req.params;
    const { user, content } = req.body;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    post.comments.push({ user, content });
    await post.save();

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error adding comment', error: error.message });
  }
});

// Create a new post
router.post('/posts', async (req, res) => {
  try {
    const { userEmail, text, image, tags, category } = req.body;

    // Validate required fields
    if (!userEmail || !text || !image || !category) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: userEmail, text, image, and category'
      });
    }

    const post = await Post.create(req.body);

    return res.status(201).json({
      success: true,
      message: 'Post created successfully',
      data: post
    });

  } catch (error) {
    console.error('Error creating post:', error);
    return res.status(500).json({
      success: false,
      message: 'Error creating post',
      error: error.message
    });
  }
});

// Get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error: error.message });
  }
});

// Create a new opportunity
router.post('/opportunity', async (req, res) => {
  try {
    const { opportunityName, description, location, category, artCategory } = req.body;

    // Validate required fields
    if (!opportunityName || !description || !location || !category) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: opportunityName, description, location, and category'
      });
    }

    const opportunity = await Opportunity.create(req.body);

    return res.status(201).json({
      success: true,
      message: 'Opportunity created successfully',
      data: opportunity
    });

  } catch (error) {
    console.error('Error creating opportunity:', error);
    return res.status(500).json({
      success: false,
      message: 'Error creating opportunity',
      error: error.message
    });
  }
});

// Get all opportunities
router.get('/opportunity', async (req, res) => {
  try {
    const opportunities = await Opportunity.find({});
    res.status(200).json(opportunities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching opportunities", error: error.message });
  }
});

router.use('/alumni', alumniRoutes);


///auth
router.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, password, interests, location } = req.body;
    console.error(req.body)
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create new user
    const newUser = new User({
      firstName: firstName, lastName: lastName, email: email, password: password, interests: interests, location: location
      // lastName,
      // email,
      // password,
      // interests,
      // location,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
});

export default router;


