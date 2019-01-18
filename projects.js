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

server.post('/', async (req, res) => {

  let { name, description, completed } = req.body;

  if (!name) {

    res.status(statusCodes.bad_req).json({message: 'No name provided'});
    return;

  }

  if (completed === undefined) {

    completed = false;

  }

  try {

    const id = await db.addProject({ name, description, completed });

    const data = await db.getProject(id[0]);

    res.status(statusCodes.ok).json(data);

  }

  catch (err) {

    console.log(err);
    genericErr(err, res);

  }

});

module.exports = server;
