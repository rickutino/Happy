import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/index';
import errorHandler from './errors/handle';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);
app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('🚀 Server started on port 3333!');
});
