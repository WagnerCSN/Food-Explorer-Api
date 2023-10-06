const AppError = require("../../utils/AppError");

class PromotionIndexService{
    constructor(promotionIndexRepository){
        this.promotionIndexRepository = promotionIndexRepository;
    }

    async execute({id, name_promotion, name_dish}){

        if(name_promotion){
            const promotionIndexName = await this.promotionIndexRepository.indexByNamePromotion(name_promotion);
            if(promotionIndexName.length ===0){
                throw new AppError("Enter a valid name!");
            }
 
            return promotionIndexName
        }
            
       
        if(name_dish){
            const promotionIndexPromotion = await this.promotionIndexRepository.indexByPromotion(name_dish);
           
            if(promotionIndexPromotion.length ===0){
                throw new AppError("Enter a valid type Of Plate!");
            }

            
           
             return promotionIndexPromotion;
        }

        
    }
}

module.exports = PromotionIndexService;