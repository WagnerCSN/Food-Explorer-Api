const AppError = require("../../utils/AppError");

class OrderDeleteService{
    constructor(orderDeleteRepository){
        this.orderDeleteRepository = orderDeleteRepository;
    }

    async execute({id}){
        const checkOrderExist = await this.orderDeleteRepository.findByOrder(id);
        console.log(checkOrderExist)

        if(!checkOrderExist){
            throw new AppError("This order does not have!");
        }

        await this.orderDeleteRepository.deleteOrder(id);

        

    }
}
module.exports = OrderDeleteService;