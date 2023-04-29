import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// Setup middlewares
import morgan from 'morgan';
import cors from 'cors';
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(helmet());
app.use(express.urlencoded());
app.use(express.json());

// DB connection
import { dbConnection } from './src/config/db.js';
dbConnection();

// Load Router
import userRouter from './src/routers/userRouter.js';

// User Routers

app.use('/api/v1/user', userRouter);

app.get('*', (req, res) => {
  res.status(404).send('<h1>404 NOT FOUND</h1>');
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Server is running at ${PORT}`);
});
