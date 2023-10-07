exports.up = knex => knex.schema.createTable("orderedItem", table => {
    table.increments("id");
    table.integer("amount");
    table.integer("discount");
    table.text("unitary_value");
    table.integer("order_id").references("id").inTable("order").onDelete("CASCADE");
    table.integer("plate_id").references("id").inTable("plates");
});
  
exports.down = knex => knex.schema.dropTable("orderedItem");
  

