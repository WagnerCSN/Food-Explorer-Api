exports.up = knex => knex.schema.createTable("promotion", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("initialDate").notNullable();
    table.text("finalDate").notNullable();
});

exports.down = knex => knex.schema.dropTable("promotion");
  