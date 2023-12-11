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

    // async findByOrderedItem(plate_id){
    //     const selectOrderedItem = await knex("plates").whereIn('id', plate_id).select('*');

    //     return selectOrderedItem ;
    // } 

    async findByPlatesWithOutPromotion(plate_idWithOutPromotion){
        const plateWithOutPromotion = await knex("plates").whereIn("id", plate_idWithOutPromotion).select('*')

        return plateWithOutPromotion ;
    }

    // async findByQtdeOfItems(order_id){
    //     const handleQtdeOfItems = await knex("orderedItem").where({order_id}).count({sum: 'id'});

    //     return handleQtdeOfItems;
    // }

    

    async findByPromotion(plate_id){
        const promotion = await knex("promotionItem").whereIn('plate_id', plate_id).join("promotion", "promotion.id", "=", "promotionItem.promotion_id").join("plates", "plates.id", "=", "promotionItem.plate_id").select('*');

        return promotion;
    }

    // async insertOrderItem(insertOrderedItem){
    //     const orderItemCreated = await knex("orderedItem").insert(insertOrderedItem);

    //     return orderItemCreated;
    // }

    // async insertOrderItem2(insertOrderedItem2){
    //     const orderItemCreated2 = await knex("orderedItem").insert(insertOrderedItem2);

    //     return orderItemCreated2;
    // }

    async findByOrder(order_id){
        const order = await knex("order").where({"id": order_id});

        return order;
    }

    async createOrder({status, qtdeOfItems, totalOrderValue, user_id, insertOrderedItem, insertOrderedItem2}){
        let order;
        try{
            await knex.transaction(async trans => {
                    [order] = await trans("order").insert({status, qtdeOfItems, totalOrderValue, user_id}).returning('id');
                    const order_id = order.id;
                    
                    
                     if(insertOrderedItem===undefined){
                        console.log("deu certo")
                     }else{
                            if(insertOrderedItem.length>=1){
                                const item1 = insertOrderedItem.map(a => {
                                    return{
                                        ...a,
                                        order_id: order_id
                                    }
                                });
                                await trans("orderedItem").insert(item1);
                            }
                        }
                    if(insertOrderedItem2.length>=1){
                        const item2 = insertOrderedItem2.map(a => {
                            return{
                                ...a,
                                order_id: order_id
                            }
                        })
                        await trans("orderedItem").insert(item2);
                    }
                        
                    const ord = await trans('order').where({"id": order_id});
                    const handleItems = await trans("orderedItem").where({order_id}).count({sum: 'id'});
                    const handleTotalOrderValue = await trans("orderedItem").where({order_id});
                    const qtdeOfItem = handleItems.map(handleItem =>handleItem.sum).toString();
                        
                    const totalOrder = handleTotalOrderValue.reduce((acc, item) => {
                        return acc + parseInt(item.total_value);
                        }, 0);
                       
                    ord.status = status;
                    ord.qtdeOfItems = qtdeOfItems; 
                    ord.totalOrderValue = totalOrderValue; 
                    ord.user_id = user_id;
                    const update = await trans('order').where({"id": order_id}).update({status: 'concluido', qtdeOfItems: qtdeOfItem, totalOrderValue: totalOrder })
                    await trans.commit();
            });
        }catch(err) {
            console.log(err);
            // Rollback em caso de erro
            knex.rollback(err);
      }
      return(order);
    }
}
module.exports = OrderRepository;

