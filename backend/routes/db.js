import express from 'express';
import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv';
dotenv.config()

const router = express.Router();
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLIC_KEY);

router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('test')
      .select('*')
    
    console.log(error)
    if (error) throw error
    console.log(data)
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
});

export default router;



