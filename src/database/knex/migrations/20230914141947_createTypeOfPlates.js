exports.up = knex => knex.shema.createTable("typeOfPlates", table => {
    table.increments("id");
    table.text("name").notNullable().unique();
});


exports.down = knex => knex.shema.dropTable("typeOfPlates");
