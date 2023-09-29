exports.up = knex => knex.schema.createTable("favoritePlates", table => {
    table.increments("id");
    table.boolean("favorite");
    table.integer("client_id").references("id").inTable("clients");
    table.integer("plate_id").references("id").inTable("plates");
})
exports.down = knex => knex.schema.dropTable("favoritePlates");