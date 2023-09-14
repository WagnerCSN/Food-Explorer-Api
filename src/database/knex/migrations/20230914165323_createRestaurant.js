exports.up = knex => knex.shema.createTable("restaurant", table => {
    table.increments("id");
    table.text("name");
    table.text("fone");
    table.text("email");
    table.text("address");
    table.text("image");
    table.text("cnpj");
    table.text("city");
    table.text("state");
 
});
exports.down = knex => knex.shema.dropTable("restaurant");