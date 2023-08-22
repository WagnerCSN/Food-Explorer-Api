exports.up = knex => knex.schema.createTable("clients", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("email").notNullable().unique();
    table.text("fone");
    table.text("password").notNullable().unique();
    table.text("avatar").Null;
    table.text("date_of_birth");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
}); 

exports.down = knex => knex.schema.dropTable("clients");
