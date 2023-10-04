exports.up = knex => knex.schema.createTable("promotionItem", table => {
    table.increments("id");
    table.text("discount").notNullable();
    table.integer("promotion_id").references("id").inTable("promotion").onDelete("CASCADE");
    table.integer("plate_id").references("id").inTable("plates").onDelete("CASCADE");
})
  
exports.down = knex => knex.schema.dropTable("promotionItem");
  

