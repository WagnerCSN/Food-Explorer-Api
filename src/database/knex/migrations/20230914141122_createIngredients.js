exports.up = knex => knex.shema.createTable("ingredients", table => {
    table.increments("id");
    table.text("name").notNullable().unique();
    table.text("image").Null;
});


exports.down = knex => knex.shema.dropTable("ingredients");
