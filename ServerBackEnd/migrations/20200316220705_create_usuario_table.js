
exports.up = function(knex) {
  return knex.schema.createTable('login',t=>{
    t.increments('id').unsigned().primary();
    t.string('Nombre').notNull();
    t.string('Apellido').notNull();
    t.string('usuario').notNull();
    t.string('password_digest').notNull();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('login');
};
