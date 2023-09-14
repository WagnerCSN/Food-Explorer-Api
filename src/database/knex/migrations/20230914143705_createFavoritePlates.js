exports.up = knex => knex.shema.createTable("favoritePlates", table => {
    table.increments("id");
    table.integer("client_id").references("id").inTable("clients");
    table.integer("plate_id").references("id").inTable("plates");
})
exports.down = knex => knex.shema.dropTable("favoritePlates");