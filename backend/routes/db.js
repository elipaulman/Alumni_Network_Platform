import express from 'express';
import Opportunity from '../models/opportunity.js';
const router = express.Router();

// POST /api/posts
// Create a new user
router.post('/users', async (req, res) => {
  try {
    const { firstName, lastName, email, location } = req.body;
    const user = new User({
      firstName,
      lastName,
      email,
      location
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    if (error.code === 11000) { // Duplicate email error
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Error creating user' });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// Get a specific user by email
router.get('/users/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user' });
  }
});

// Post Routes

// Create a new post
router.post('/posts', async (req, res) => {
  try {
    const { userEmail, text, image, tags, category } = req.body;
    
    // Verify user exists
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const post = new Post({
      userEmail,
      text,
      image,
      tags,
      category
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error creating post' });
  }
});

// Get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
});

// Get all posts from a specific user
router.get('/posts/user/:email', async (req, res) => {
  try {
    const posts = await Post.find({ userEmail: req.params.email })
                           .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user posts' });
  }
});


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
      message: 'opportunity created successfully',
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

router.get('/opportunity', async (req, res) => {
  try {
    const opportunities = await Opportunity.find({});
    res.status(200).json(opportunities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching opportunities", error: error.message });
  }
});

export default router;