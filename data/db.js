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

  getProjectActions: id => {

    return db.select().from('actions').where('project_id', id);

  },

  addAction: action => {

    return db.insert(action).into('actions');

  },

  removeProject: id => {

    return db.delete().from('projects').where({ id });

  },

  removeProjectActions: id => {

    return db.delete().from('actions').where('project_id', id);

  }

}
