exports.up = knex => knex.schema.createTable("restaurant", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("fone").notNullable();
    table.text("email").notNullable();
    table.text("address").notNullable();
    table.text("image").Null;
    table.text("cnpj").notNullable();
    table.text("city").notNullable();
    table.text("state").notNullable();
 
});
exports.down = knex => knex.schema.dropTable("restaurant");