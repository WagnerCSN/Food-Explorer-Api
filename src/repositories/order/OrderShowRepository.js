const knex = require("../../database/knex");

class OrderShowRepository{
    async show(id){
        const checkOrderWithId = await knex("order").select('*').where("order.id", id).join("orderedItem", "orderedItem.order_id", "=", "order.id").join("plates", "plates.id", "=", "orderedItem.plate_id");

        return checkOrderWithId;
    }
    
}

module.exports = OrderShowRepository;