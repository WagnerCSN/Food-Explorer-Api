exports.up = knex => knex.schema.createTable("promotion", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.date("initialDate");
    table.date("finalDate").notNullable();
});

exports.down = knex => knex.schema.dropTable("promotion");
  