// helper to initialize knex when needed
const knex = require('knex');
const cfg = require('./knexfile');
module.exports = knex(cfg[process.env.NODE_ENV || 'production']);
