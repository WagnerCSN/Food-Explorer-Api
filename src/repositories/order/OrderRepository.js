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

    async findByOrderedItem(plate_id){
        const selectOrderedItem = await knex("plates").whereIn('id', plate_id).select('*');

        return selectOrderedItem ;
    }

    async findByQtdeOfItems(order_id){
        const handleQtdeOfItems = await knex("orderedItem").where({order_id}).count({sum: 'id'});

        return handleQtdeOfItems;
    }

    

    async findByPromotion(plate_id){
        const promotion = await knex("promotionItem").whereIn('plate_id', plate_id).join("promotion", "promotion.id", "=", "promotionItem.promotion_id").select('*');

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

    async createOrder({status, qtdeOfItems, totalOrderValue, user_id}){
        let order;
    try{
                 await knex.transaction(async trans => {
                        
        
                        [order] = await trans("order").insert({status, qtdeOfItems, totalOrderValue, user_id}).returning('id');
                        
                        
                       
                        
                       await trans.commit();
                        
    });
}catch(err) {
        console.log(err);
        // Rollback em caso de erro
        knex.rollback(err);
      }
      return(order);
    }
    // async updateOrder(id, status, user_id, qtdeOfItems, totalOrderValue){
    //     const orderUpdate = await knex("order").insert({status, user_id, qtdeOfItems, totalOrderValue}).onConflict('id')
    //     .merge();
       

    //     return orderUpdate;
    // }
}
    


module.exports = OrderRepository;

