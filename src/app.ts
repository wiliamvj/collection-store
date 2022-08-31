import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();

app.use(express.json());

export { app };
