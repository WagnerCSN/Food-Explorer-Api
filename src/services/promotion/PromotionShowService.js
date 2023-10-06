const AppError = require("../../utils/AppError");

class PromotionShowService{
    constructor(promotionShowRepository){
        this.promotionShowRepository = promotionShowRepository;
    }

    async execute({id}){
        const checkPromotionWithId = await this.promotionShowRepository.show(id);

        if(!checkPromotionWithId){
            throw new AppError("There is no promotion with this id!");
        }

        return checkPromotionWithId;
    }

}

module.exports = PromotionShowService;