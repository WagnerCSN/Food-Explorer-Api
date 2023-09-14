exports.up = knex => knex.schema.createTable("ingredients", table => {
    table.increments("id");
    table.text("name").notNullable().unique();
    table.text("image").Null;
});


exports.down = knex => knex.schema.dropTable("ingredients");
