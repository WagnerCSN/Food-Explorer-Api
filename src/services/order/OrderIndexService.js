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
                const orderIndexUser = await this.orderIndexRepository.indexByUser_id(user_id);//todas ordem
                const items = await this.orderIndexRepository.indexByItems();
                const a = items.map(i => {
                    return{ 
                        amount: i.amount,
                        name: i.name,
                        order_id: i.order_id,
                        id: i.id
                    }
                   })
                const array = orderIndexUser.map(order => {
                       const item = a.filter(item => item.order_id ===order.id) 

                        return{
                            order,
                            items: item
                        }
              })
              if(orderIndexUser.length ===0){
                  throw new AppError("User not found!");
                }
                console.log(array)  
                //console.log(array.items)
                return array;
                
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