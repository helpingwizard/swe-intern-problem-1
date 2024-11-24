import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Middleware to parse x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const commandRoutes = require('./routes/commandRoutes');
app.use('/api/v1', commandRoutes);

export default app;
