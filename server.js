const express = require('express');

const projectRouter = require('./projects');
const actionRouter = require('./actions');

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

module.exports = server;
