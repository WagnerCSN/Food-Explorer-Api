exports.up = knex => knex.shema.createTable("orderedItem", table => {
    table.increments("id");
    table.integer("amount");
    table.text("value");
    table.integer("client_id").references("id").inTable("clients");
    table.integer("plate_id").references("id").inTable("plates");
});
  
exports.down = knex => knex.schema.dropTable("orderedItem");
  

