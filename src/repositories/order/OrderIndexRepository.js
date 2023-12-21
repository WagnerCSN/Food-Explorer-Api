const knex = require("../../database/knex");

class OrderIndexRepository{
    async indexByName(name_user){
        const orderIndexNameUser = await knex("order").join("users", "users.id", "=", "order.user_id").join("orderedItem", "orderedItem.order_id", "=", "order.id").join("plates", "plates.id", "=", "orderedItem.plate_id").whereLike("users.name", `%${name_user}%`).select('*');

        return orderIndexNameUser;
    }

    async indexByUser_id(user_id){
        const orderIndexUser = await knex("order").where({user_id}).select('*');

        return orderIndexUser;
    }

    async indexByItems(){
        const indexByItems = await knex("orderedItem").innerJoin("plates", "plates.id", "=", "orderedItem.plate_id").select('*');

        return indexByItems;
    }

    async bestSellingDish(){
        const orderBestSellingDish = await knex("orderedItem").select('*').groupBy('plate_id').count('amount',{as: 'total '}).orderBy('total', 'desc').limit(8).innerJoin("plates", "plates.id", "=", "orderedItem.plate_id");

        return orderBestSellingDish;
    }
}
module.exports = OrderIndexRepository;