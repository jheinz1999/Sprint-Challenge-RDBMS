const express = require('express');

const db = require('./data/db');
const genericErr = require('./common/err');
const statusCodes = require('./common/statusCodes');

const server = express.Router();

server.get('/', async (req, res) => {

  try {

    const data = await db.getActions();

    res.status(statusCodes.ok).json(data);

  }

  catch (err) {

    genericErr(err, res);

  }

});

server.get('/:id', async (req, res) => {

  const { id } = req.params;

  try {

    const data = await db.getAction(id);

    data[0].contexts = await db.getActionContexts(id);

    res.status(statusCodes.ok).json(data[0]);

  }

  catch (err) {

    console.log(err);
    res.status(statusCodes.not_found).json({message: 'Action not found'});

  }

});

server.post('/', async (req, res) => {

  let { description, notes, completed, project_id } = req.body;

  if (!description) {

    res.status(statusCodes.bad_req).json({message: 'No description provided'});
    return;

  }

  if (completed === undefined) {

    completed = false;

  }

  if (!project_id) {

    res.status(statusCodes.bad_req).json({message: 'No project ID provided'});
    return;

  }

  try {

    const id = await db.addAction({ description, notes, completed, project_id });

    const data = await db.getAction(id[0]);

    res.status(statusCodes.created).json(data);

  }

  catch (err) {

    console.log(err);
    genericErr(err, res);

  }

});

module.exports = server;
