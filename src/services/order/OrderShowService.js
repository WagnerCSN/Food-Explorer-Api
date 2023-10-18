const AppError = require("../../utils/AppError");

class OrderShowService{
    constructor(orderShowRepository){
        this.orderShowRepository = orderShowRepository;
    }

    async execute({id}){
        const checkOrderWithId = await this.orderShowRepository.show(id);

        if(!checkOrderWithId){
            throw new AppError("There is no order with this id!");
        }

        return checkOrderWithId;
    }

}

module.exports = OrderShowService;