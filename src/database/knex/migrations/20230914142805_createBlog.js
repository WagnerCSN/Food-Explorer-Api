exports.up = knex => knex.schema.createTable("blog", table => {
    table.increments("id_blog");
    table.text("title").notNullable();
    table.text("comments").notNullable();
    table.text("rating").notNullable();
    table.integer("plate_id").references("id").inTable("plates").onDelete("CASCADE");
    table.integer("user_id").references("id").inTable("users");
    table.timestamp("created_at").default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("blog");