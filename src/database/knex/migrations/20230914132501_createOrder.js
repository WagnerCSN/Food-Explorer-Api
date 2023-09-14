exports.up = knex => knex.shema.createTable("order", table => {
    table.increments("id");
    table.text("status").notNullable();
    table.integer("qtdeOfItems");
    table.text("totalOrderValue");

    table.timestamp("created_at").default(knex.fn.now());
    table.integer("client_id").references("id").inTable("clients");
});


exports.down = knex => knex.shema.dropTable("order");


