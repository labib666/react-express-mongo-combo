#!/usr/bin/env node

/**
 * Module dependencies.
 */

import dotenv from 'dotenv';
import {} from 'dotenv/config';
import mongoose from 'mongoose';
import debugModule from 'debug';
import { createServer } from 'http';

import app from '../app';

/**
 * Parse Env variables
 */
const dotenvParsed = dotenv.config({ silent: process.env.NODE_ENV === 'production' });
if (dotenvParsed.error) {
  console.error('.env file not found!');
}
console.log('Environment variables from .env:', JSON.stringify(dotenvParsed.parsed, null, 2));

const debug = debugModule('server:server');

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  console.log(`Server started at ${process.env.PORT}`);
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}

function connect() {
  const dbUrl = `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  console.log('Connecting to', dbUrl);
  mongoose.connect(`mongodb://${dbUrl}`, {
    useNewUrlParser: true,
  });
  return mongoose.connection;
}

/**
 * Listen on provided port, on all network interfaces.
 */
function listen() {
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
}

/**
 * Connect to database before starting server
 */
connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);
