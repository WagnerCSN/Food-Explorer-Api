const AppError = require("../../utils/AppError");

class OrderDeleteService{
    constructor(orderDeleteRepository){
        this.orderDeleteRepository = orderDeleteRepository;
    }

    async execute({id}){
        const checkOrderExist = await this.orderDeleteRepository.findByOrder(id);

        if(!checkOrderExist){
            throw new AppError("This order does not have!");
        }

        const deletedOrder = await this.orderDeleteRepository.deleteOrder(id);

        if(deletedOrder){
            throw new AppError("Successfully deleted");
        }

    }
}
module.exports = OrderDeleteService;