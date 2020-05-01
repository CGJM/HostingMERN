
exports.up = function(knex) {
  return knex.schema.createTable('User',t=>{
    t.increments('id').unsigned().primary();
    t.string('Nombre').notNull();
    t.string('Apellido').notNull();
    t.string('Correo').notNull();
    t.dateTime('FechaNac').notNull();
    t.string('usuario').notNull();
    t.string('password_digest').notNull();
    t.string('database').notNull();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('login');
};
