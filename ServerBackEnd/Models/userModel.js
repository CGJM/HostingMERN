const db = require('../database');

const user=db.Model.extend({
  tableName: 'login',
  hasSecurePassword: true
});

module.exports=user;
