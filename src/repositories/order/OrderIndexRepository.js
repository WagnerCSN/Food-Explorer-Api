const knex = require("../../database/knex");

class OrderIndexRepository{
    async indexByName(name_user){
        const orderIndexNameUser = await knex("order").join("users", "users.id", "=", "order.user_id").join("orderedItem", "orderedItem.order_id", "=", "order.id").join("plates", "plates.id", "=", "orderedItem.plate_id").whereLike("users.name", `%${name_user}%`).select('*');

        return orderIndexNameUser;
    }

    async indexByUser_id(user_id){
        const orderIndexUser = await knex("order").innerJoin("orderedItem", "orderedItem.order_id", "=", "order.id").join("plates", "plates.id", "=", "orderedItem.plate_id").where("order.user_id", user_id).select('*');

        return orderIndexUser;
    }

    async bestSellingDish(){
        const orderBestSellingDish = await knex("orderedItem").select('*').count('plate_id',{as: 'total '}).groupBy('plate_id').orderBy('total', 'desc').limit(4).join("plates", "plates.id", "=", "orderedItem.plate_id");

        return orderBestSellingDish;
    }
}
module.exports = OrderIndexRepository;