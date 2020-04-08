const db = require('../database');

const user=db.Model.extend({
  tableName: 'User',
  hasSecurePassword: true
});

module.exports=user;
