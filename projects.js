const express = require('express');

const db = require('./data/db');
const genericErr = require('./common/err');
const statusCodes = require('./common/statusCodes');

const server = express.Router();

server.get('/', async (req, res) => {

  try {

    const data = await db.getProjects();

    res.status(statusCodes.ok).json(data);

  }

  catch (err) {

    genericErr(err, res);

  }

});

module.exports = server;
