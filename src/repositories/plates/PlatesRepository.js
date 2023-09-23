const knex = require("../../database/knex");

class PlatesRepository{
    async findByName(name){
        const checkExistPlate = await knex("plates").where({name}).first();

        return checkExistPlate;
    }
    
    async findByTypePlate(typeOfPlate_id){
        const checkExistTypeOfPlate = await knex("typeOfPlate").where(typeOfPlate_id).firt();

        return checkExistTypeOfPlate;
    }    
        
    async findByIngredient(ingredient_id){
        const checkExistIngredient = await knex("ingredients").where({ingredients_id})

        return checkExistIngredient;
    }
    
    // async create({name, description, cost, image})
    //     const plateCreated = await knex("")

    //     return plateCreated;
}