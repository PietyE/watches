import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { Endpoints } from './constants/endpoints.js';
import router from './config/router.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || '5000';
const DB_URL = process.env.DB_URL;
const CLIENT_URL = process.env.CLIENT_URL;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: CLIENT_URL,
  }),
);

// Maybe we can move these endpoints to file initialize for example and make it a function ?

app.get(Endpoints.WATCHES, router);
app.get(`${Endpoints.WATCHES}/${Endpoints.ID}`, router);
app.post(Endpoints.WATCHES, router);

const startServer = async () => {
  try {
    await mongoose.connect(DB_URL).then(() => {
      console.log('connected to mongo');
    });
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

void startServer();
