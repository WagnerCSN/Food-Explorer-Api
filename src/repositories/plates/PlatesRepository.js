const knex = require("../../database/knex");

class PlatesRepository{
    async findByName(name){
        const checkExistPlate = await knex("plates").where({name}).first();

        return checkExistPlate;
    }
    
    async findByTypePlate(typeOfPlate_id){
        const checkExistTypeOfPlate = await knex("typeOfPlates").select("*").where("id", typeOfPlate_id).first();

        return checkExistTypeOfPlate;
    }    
        
    async findByIngredient(ingredient_id){
        const checkExistIngredient = await knex("ingredients").select("*").where("id", ingredient_id).first();

        return checkExistIngredient;
    }
    
    async create({name, description, cost, image, typeOfPlate_id, ingredient_id}){
        const plateCreated = await knex("plates").insert({name, description, cost, image, typeOfPlate_id, ingredient_id})

        return plateCreated;
   }
}
module.exports = PlatesRepository;
