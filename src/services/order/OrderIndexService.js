const AppError = require("../../utils/AppError");

class OrderIndexService{
    constructor(orderIndexRepository){
        this.orderIndexRepository = orderIndexRepository;
    }

    async execute({name_user}){
        if(name_user){
            const orderIndexNameUser = await this.orderIndexRepository.indexByName(name_user);
            if(orderIndexNameUser.length ===0){
                throw new AppError("Enter a valid user name!");
            }
            return orderIndexNameUser;
        }else{
            const orderBestSellingDish = await this.orderIndexRepository.bestSellingDish();
            if(orderBestSellingDish.length ===0){
                throw new AppError("Enter a valid dish name!");
            }
            return orderBestSellingDish;
        }
    }
}

module.exports = OrderIndexService;