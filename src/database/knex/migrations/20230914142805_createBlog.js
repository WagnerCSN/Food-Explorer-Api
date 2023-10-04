exports.up = knex => knex.schema.createTable("blog", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("email").notNullable();
    table.text("comments").notNullable();
    table.text("rating").notNullable();
    table.integer("plate_id").references("id").inTable("plates").onDelete("CASCADE");
    table.timestamp("created_at").default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("blog");