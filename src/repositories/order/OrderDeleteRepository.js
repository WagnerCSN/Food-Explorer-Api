const knex = require("../../database/knex")

class OrderDeleteRepository{
    async findByOrder(id){
        const checkOrderExist = await knex("order").where({id}).first();

        return checkOrderExist;
    }

    async deleteOrder(id){
        const deletedOrder = await knex("order").where({id}).delete();

        return deletedOrder;
    }
}

module.exports = OrderDeleteRepository