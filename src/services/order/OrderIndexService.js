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
                const items = await this.orderIndexRepository.indexByItems();//todos items
                const handleItems = items.map(i => {
                    return{ 
                        amount: i.amount,
                        name: i.name,
                        order_id: i.order_id,
                        id: i.id
                    }
                   })
                   
                const data = orderIndexUser.map(order => {
                    let allItemsByOrder = handleItems.filter(item => item.order_id ===order.id);
                       return{
                            order,
                            items: allItemsByOrder.map( item => `${item.amount}` + ' x ' + `${item.name}`).join(', ')
                        }
              })

            if(orderIndexUser.length ===0){
                  throw new AppError("User not found!");
            }

            return data;
                
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