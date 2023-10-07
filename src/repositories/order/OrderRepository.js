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

    async createOrder({status, qtdeOfItems, totalOrderValue, user_id}){
        const order_id = await knex("order").insert({status, qtdeOfItems, totalOrderValue, user_id});

        return order_id;
    }

    async insertOrderItem(insertOrderedItem){
        const orderItemCreated = await knex(insertOrderedItem);

        return orderItemCreated;
    }
}

module.exports = OrderRepository;