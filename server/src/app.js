import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { initialize as passportInit, authenticate } from './middlewares/passport';

import indexRouter from './routes/index';

const app = express();
passportInit();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

export default app;
