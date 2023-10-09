const knex = require("../../database/knex");

class OrderRepository{
    async findByOrderedItem(orderedItem_id){
        const checkOrderedItemExist = await knex("orderedItem").where({orderedItem_id}).first();

        return checkOrderedItemExist ;
    }
    async findByUser(user_id){
        const checkUserExist = await knex("users").where({"id": user_id}).first();

        return checkUserExist ;
    }

    async findByOrderedItem(orderedItem){
        const selectOrderedItem = await knex("plates").where({"id": orderedItem});

        return selectOrderedItem ;
    }

    async findByQtdeOfItems(order_id){
        const handleQtdeOfItems = await knex("orderedItem").where({order_id}).count({sum: 'id'});

        return handleQtdeOfItems;
    }

    async createOrder({status, qtdeOfItems, totalOrderValue, user_id}){
        const order_id = await knex("order").where({user_id}).insert({status, qtdeOfItems, totalOrderValue, user_id});

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

    async findByOrder(order_id){
        const order = await knex("order").where({"id": order_id});

        return order;
    }

    async updateOrder(order_id, qtdeOfItems, totalOrderValue){
        const orderUpdate = await knex("order").where({"id": order_id}).update({qtdeOfItems, totalOrderValue});

        return orderUpdate;
    }

    
}

module.exports = OrderRepository;

