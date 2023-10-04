const AppError = require("../../utils/AppError");

class PromotionDeleteService{
    constructor(promotionDeleteRepository){
        this.promotionDeleteRepository = promotionDeleteRepository;
    }

    async execute({id}){
        const checkPromotionExist = await this.promotionDeleteRepository.findByPromotion(id);

        if(!checkPromotionExist){
            throw new AppError("This promotion does not have!");
        }

        const deletedPromotion = await this.promotionDeleteRepository.deletePromotion(id);

        if(deletedPromotion){
            throw new AppError("Successfully deleted");
        }

    }
}
module.exports = PromotionDeleteService;