const AppError = require("../../utils/AppError");

class PromotionItemCreateService{
    constructor(promotionItemRepository){
        this.promotionItemRepository = promotionItemRepository;
    }

    async execute({discount, platesId}){
        const checkPlateExist = await this.promotionItemRepository.findBy(platesId);

        if(!checkPlateExist){
            throw new AppError("This plate does not exist!");
        }

        const discountCreated = await this.promotionItemRepository.create({discount});

        return discountCreated;
    }
}

module.exports = PromotionItemCreateService;