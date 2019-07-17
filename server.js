const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(helmet());
server.use(logger('dev'));

server.use(express.json());

server.use('/api/schemes', SchemeRouter);

module.exports = server;