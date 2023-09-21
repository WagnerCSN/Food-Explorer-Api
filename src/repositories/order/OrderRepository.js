const knex = require("../../database/knex");

class OrderRepository{
    async findByOrderedItem(orderedItem_id){
        const checkOrderedItemExist = await knex("orderedItem").where({orderedItem_id}).first();

        return checkOrderedItemExist ;
    }
    async findByClients(users_id){
        const checkEmailExist = await knex("users").where({users_id}).first();

        return checkEmailExist ;
    }

    async findByQtdeOfItems(order_id){
        const handleQtdeOfItems = await knex("orderedItem").where({order_id}).count('id');

        return handleQtdeOfItems;
    }

    async create({status, qtdeOfItems, totalOrderValue, date, users_id}){
        const orderCreated = await knex("order").where({users_id})
                                    .insert({status, qtdeOfItems,totalOrderValue, date, users_id});

        return orderCreated;
    }
}

module.exports = OrderRepository;