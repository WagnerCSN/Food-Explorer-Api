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

    async findByOrderedItem(orderedItem){
        const selectOrderedItem = await knex("plates").where({"id": orderedItem});

        return selectOrderedItem ;
    }

    async findByQtdeOfItems(order_id){
        const handleQtdeOfItems = await knex("orderedItem").where({order_id}).count('id');

        return handleQtdeOfItems;
    }

    async createOrder({status, user_id}){
        const order_id = await knex("order").where({user_id}).insert({status, user_id});

        return order_id;
    }

    async findByPromotion(orderedItem){
        const promotion = await knex("promotionItem").where({"plate_id": orderedItem}).join("promotion", "promotion.id", "=", "promotionItem.promotion_id").select('*');

        return promotion;
    }

    async insertOrderItem(insertOrderedItem){
        const orderItemCreated = await knex("orderedItem").insert(insertOrderedItem);

        return orderItemCreated;
    }

    // async updateOrder(order_id, qtdeOfItems, totalOrderValue ){
    //     const orderUpdate = await knex("order").where({"id": order_id}).insert({qtdeOfItems, totalOrderValue});

    //     return orderUpdate;
    // }

    
}

module.exports = OrderRepository;

