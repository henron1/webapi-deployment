const knex = require('knex');

const config = require('../knexfile.js').development;

const db = process.env.DB || "development";
const config = require('../knexfile.js')[db];

module.exports = knex(config);
