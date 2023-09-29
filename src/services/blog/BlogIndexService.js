const AppError = require("../../utils/AppError");

class BlogIndexService{
    constructor(blogIndexRepository){
        this.blogIndexRepository = blogIndexRepository;
    }

    async execute({rating, plate_name}){

        const typeid = await this.blogIndexRepository.selectByTypeOfblog();
        const ingredient = await this.blogIndexRepository.selectByIngredients(); 

        if(rating){
            const blogIndexName = await this.blogIndexRepository.indexByRating(rating);
            if(blogIndexName.length ===0){
                throw new AppError("Enter a valid rating!");
            }
            
            const blogWithName = blogIndexName.map(plate => {
                const blogWithType = typeid.filter(type => type.id ===plate.typeOfPlate_id);
                const blogWithIngredient = ingredient.filter(ingredient => ingredient.id ===plate.ingredient_id);
                return{
                    name: plate.name, 
                    description: plate.description, 
                    cost: plate.cost, 
                    image: plate.image,
                    typeOfPlate: blogWithType.map(blogWithType => blogWithType.name).toString(),
                    ingredients: blogWithIngredient.map(blogWithIngredient => blogWithIngredient.name).toString()
                }
            });
           
             return blogWithName;
        }
            
       
        if(typeOfPlate_name){
            const blogIndexTypeOfPlate = await this.blogIndexRepository.indexByTypeOfblog(typeOfPlate_name);
           
            if(blogIndexTypeOfPlate.length ===0){
                throw new AppError("Enter a valid type Of Plate!");
            }

            const blogWithType = blogIndexTypeOfPlate.map(plate => {
                const blogType = typeid.filter(type => type.id ===plate.typeOfPlate_id);
                const blogIngredient = ingredient.filter(ingredient => ingredient.id ===plate.ingredient_id);
            return{
                name: plate.name, 
                description: plate.description, 
                cost: plate.cost, 
                image: plate.image,
                typeOfPlate: blogType.map(blogType => blogType.name).toString(),
                ingredients: blogIngredient.map(blogIngredient => blogIngredient.name).toString()
            }
            });
           
             return blogWithType;
        }

        if(ingredients_name){
            const blogIndexIngredient = await this.blogIndexRepository.indexByIngredients(ingredients_name);
            if(blogIndexIngredient.length ===0){
                throw new AppError("Enter a valid ingredient!");
            }

            const blogWithIngredients = blogIndexIngredient.map(plate => {
                const blogType = typeid.filter(type => type.id ===plate.typeOfPlate_id);
                const blogIngredient = ingredient.filter(ingredient => ingredient.id ===plate.ingredient_id);
                return{
                    name: plate.name, 
                    description: plate.description, 
                    cost: plate.cost, 
                    image: plate.image,
                    typeOfPlate: blogType.map(blogType => blogType.name).toString(),
                    ingredients: blogIngredient.map(blogIngredient => blogIngredient.name).toString()
                }
            });
           
             return blogWithIngredients;
        }
    }
}

module.exports = BlogIndexService;