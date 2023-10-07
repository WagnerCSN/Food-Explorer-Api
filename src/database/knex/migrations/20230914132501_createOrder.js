exports.up = knex => knex.schema.createTable("order", table => {
    table.increments("id");
    table.text("status").notNullable();
    table.integer("qtdeOfItems");
    table.text("totalOrderValue");

    table.timestamp("created_at").default(knex.fn.now());
    table.integer("client_id").references("id").inTable("clients").onDelete("CASCADE");
});


exports.down = knex => knex.schema.dropTable("order");


