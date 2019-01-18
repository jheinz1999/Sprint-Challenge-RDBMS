const knex = require('knex');
const knexfile = require('../knexfile');

const db = knex(knexfile.development);

module.exports = {

  getProjects: () => {

    return db.select().from('projects');

  },

  getProject: id => {

    return db.select().from('projects').where({ id });

  },

  addProject: project => {

    return db.insert(project).into('projects');

  },

  getActions: () => {

    return db.select().from('actions');

  },

  getAction: id => {

    return db.select().from('actions').where({ id });

  },

  addAction: action => {

    return db.insert(action).into('actions');

  },

}
