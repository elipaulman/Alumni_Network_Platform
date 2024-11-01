import express from 'express';
import Test from '../models/test.js';

const router = express.Router();

// get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Test.find({});
    res.status(200).json(todos);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
});

// create new test
router.post('/', async (req, res) => {
  try {
    const todo = await Test.create(req.body);
    res.status(200).json(todo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message});
  }
});

export default router;