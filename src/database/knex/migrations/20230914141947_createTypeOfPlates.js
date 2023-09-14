exports.up = knex => knex.schema.createTable("typeOfPlates", table => {
    table.increments("id");
    table.text("name").notNullable().unique();
});


exports.down = knex => knex.schema.dropTable("typeOfPlates");
