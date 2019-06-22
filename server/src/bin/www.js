#!/usr/bin/env node

/**
 * Parsed Env variables
 */
// eslint-disable-next-line import/order
import {} from './dotenv';

/**
 * Module dependencies.
 */

import mongoose from 'mongoose';
import debugModule from 'debug';
import { createServer } from 'http';

import app from '../app';

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
  console.log('Connecting to database at', process.env.DB_URI);
  mongoose.connect(process.env.DB_URI, {
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
