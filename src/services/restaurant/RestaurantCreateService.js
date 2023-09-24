class RestaurantCreatService{
    constructor(restaurantRepository){
        this.restaurantRepository = restaurantRepository;
    }

    async execute({name, fone, email, address, image, cnpj, city, state}){
        const restaurantCreated = await this.restaurantRepository.create({
            name, 
            fone, 
            email, 
            address, 
            image, 
            cnpj, 
            city, 
            state
        });

        return restaurantCreated;
    }
}

module.exports = RestaurantCreatService;