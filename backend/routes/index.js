import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  const response = {
    message: "Hello From The API"
  };
  res.send(response);
});

export default router;