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
            const promo = await this.promotionIndexRepository.searchPromotionItem()
            if(promotionIndexPromotion.length ===0){
                throw new AppError("Enter a valid type Of Plate!");
            }

          console.log(promotionIndexPromotion)
            const result = promotionIndexPromotion.map(promotion => {
                const a = promo.filter(b => b.promotion_id===promotion.promotion_id)
                
                return{
                    id: a.map(id => id.id).toString(),
                    namePromotion: a.map(name => name.name).toString(),
                    nameDish: promotion.name,
                    discount: a.map(discount => discount.discount).toString(),
                    initialDate: a.map(initialDate => initialDate.initialDate).toString(),
                    finalDate: a.map(finalDate => finalDate.finalDate).toString(),
                    descriptionDish: promotion.description,
                    costDish: promotion.cost,
                    imageDish: promotion.image,
                }
            })
           
             return result;
        }

        
    }
}

module.exports = PromotionIndexService;