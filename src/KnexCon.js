const KnexFile = require('./db/knexfile')
const knex = require('knex')(KnexFile.development)

module.exports  = knex