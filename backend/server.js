import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './routes/index.js';
import * as dotenv from 'dotenv';
dotenv.config()

const app = express();
app.use(cors());
app.use(morgan());
app.use(express.json());
app.use('/', indexRouter);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// 