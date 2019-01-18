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

server.get('/:id/actions', async (req, res) => {

  const { id } = req.params;

  try {

    const actions = await db.getProjectActions(id);

    if (actions.length)
      res.status(statusCodes.ok).json(actions);

    else
      res.status(statusCodes.not_found).json({message: 'No actions exist for that project'});

  }

  catch (err) {

    console.log(err);
    genericErr(err, res);

  }

});

server.get('/:id', async (req, res) => {

  const { id } = req.params;

  try {

    const data = await db.getProject(id);

    const actions = await db.getProjectActions(id);

    data[0].actions = actions;

    console.log(data);

    res.status(statusCodes.ok).json(data[0]);

  }

  catch (err) {

    console.log(err);
    res.status(statusCodes.not_found).json({message: 'Project not found'});

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

    res.status(statusCodes.created).json(data);

  }

  catch (err) {

    console.log(err);
    genericErr(err, res);

  }

});

module.exports = server;
