import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

import routes from './routes.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}...`));
