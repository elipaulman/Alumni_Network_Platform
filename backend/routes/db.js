import express from 'express';
import Opportunity from '../models/opportunity.js';
import multer from 'multer';
import alumniRoutes from './alumniRoutes.js';
import User from '../models/user.js';
import Post from '../models/post.js';
import bcrypt from 'bcrypt';


const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
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


// Create a new post
router.post('/posts', async (req, res) => {
  try {
    // Verify user exists first
    const user = await User.findOne({ email: req.body.userEmail });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const post = await Post.create(req.body);
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
    const posts = await Post.find({ userEmail: req.params.email }).sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user posts' });
  }
});

// Add a comment to a post
router.post('/posts/:postId/comments', async (req, res) => {
  const { postId } = req.params;
  const { user, content } = req.body;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const newComment = { user, content };
    post.comments.push(newComment);
    await post.save();

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error adding comment', error });
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

// User signup
router.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, password, interests, location } = req.body;
    console.log("Received signup data:", req.body);

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create new user; password will be hashed in the pre-save hook
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      interests,
      location
    });
    console.log("Creating new user:", newUser);

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: error.message || 'Error registering user' });
  }
});


router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Look up the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    // Optionally, remove the password field before sending user data back
    const userResponse = user.toObject();
    delete userResponse.password;

    // Successful login – send back user data (or a token, if using JWT)
    res.status(200).json(userResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;