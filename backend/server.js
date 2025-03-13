import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import indexRouter from './routes/index.js';
import dbRouter from './routes/db.js';
import dbTestRouter from './routes/dbTest.js';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

// Allow both your production domain and localhost:3000 for development
app.use(cors({
  origin: [
    'https://alumni-network-platform-9aov.onrender.com',
    'http://localhost:3000'
  ],
  methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
  // You can also set credentials if needed:
  // credentials: true
}));

app.use(morgan('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/db', dbRouter);
app.use('/test', dbTestRouter);

// Serve static files from the React app
app.use(express.static(path.join(path.resolve(), 'front-end/build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'front-end/build', 'index.html'));
});

const PORT = process.env.PORT || 5050;
const URI = process.env.ATLAS_URI || '';

mongoose.connect(URI)
  .then(() => {
    console.log('Connected to mongodb');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });