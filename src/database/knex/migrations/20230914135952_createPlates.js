exports.up = knex => knex.schema.createTable("plates", table => {
    table.increments("id");
    table.text("name");
    table.text("description");
    table.text("cost");
    table.text("image").Null;
    table.integer("typeOfPlate_id").references("id").inTable("typeOfPlates");
    table.integer("ingredient_id").references("id").inTable("ingredients");
});


exports.down = knex => knex.schema.dropTable("plates");
