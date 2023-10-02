exports.up = knex => knex.schema.createTable("favorites", table => {
    table.increments("id");
    table.integer("user_id").references("id").inTable("users");
    table.integer("plate_id").references("id").inTable("plate");
});


exports.down = knex => knex.schema.dropTable("favorite");