import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import createError from 'http-errors';
import logger from 'morgan';

import { initialize as passportInit } from './utils/passport';

import indexRouter from './routes/index';

const app = express();
passportInit();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use('/', (req, res, next) => next(createError(404)));

// error handler
app.use((err, req, res, next) => {
  res.error = req.app.get('env') === 'development' ? err : {};

  // render the error
  res.status(err.status || 500);

  if (err.status !== 404) {
    return res.json({
      message: err.message,
    });
  }

  return res.json({
    message: 'resourse not found',
  });
});

export default app;
