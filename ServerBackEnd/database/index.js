const knex = require('knex');
const knexDb=knex({  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'Esnafer19#',
    database: 'HostingUPT'
  }});
const bookshelf = require('bookshelf');
const secure = require('bookshelf-secure-password');
const db=bookshelf(knexDb);
db.plugin(secure);

module.exports=db;
