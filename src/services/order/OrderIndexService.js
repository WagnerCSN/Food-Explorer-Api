const AppError = require("../../utils/AppError");

class OrderIndexService{
    constructor(orderIndexRepository){
        this.orderIndexRepository = orderIndexRepository;
    }

    async execute({name_user, user_id}){
        
        if(name_user || user_id){
            if(name_user){
                const orderIndexNameUser = await this.orderIndexRepository.indexByName(name_user);
                if(orderIndexNameUser.length ===0){
                    throw new AppError("Enter a valid user name!");
                }
                return orderIndexNameUser;
            }
            if(user_id){
                const orderIndexUser = await this.orderIndexRepository.indexByUser_id(user_id);

                const orderitem = await this.orderIndexRepository.indexByUser_id(user_id);
                console.log(orderIndexUser)
                if(orderIndexUser.length ===0){
                    throw new AppError("User not found!");
                }
                return orderIndexUser;
    
            }
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