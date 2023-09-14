exports.up = knex => knex.schema.createTable("blog", table => {
    table.increments("id");
    table.text("name");
    table.text("email").unique();
    table.text("comments").notNullable();
    table.text("rating").notNullable();
    table.integer("plate_id").references("id").inTable("plates");
});


exports.down = knex => knex.schema.dropTable("blog");