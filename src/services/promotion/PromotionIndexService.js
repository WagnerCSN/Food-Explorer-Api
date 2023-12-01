const AppError = require("../../utils/AppError");

class PromotionIndexService{
    constructor(promotionIndexRepository){
        this.promotionIndexRepository = promotionIndexRepository;
    }

    async execute({name_promotion, name_dish}){

        const findPromotionWithPromotionItems = await this.promotionIndexRepository.searchPromotionItem()
        if(name_promotion || name_dish){
            if(name_promotion){
                const promotionIndexPromotionWithName_promotion = await this.promotionIndexRepository.indexByNamePromotion(name_promotion);
                if(promotionIndexPromotionWithName_promotion.length ===0){
                    throw new AppError("Enter a valid name!");
                }

                const result = promotionIndexPromotionWithName_promotion.map(promotion => {
                    const handlePromotionWithPromotionItem = findPromotionWithPromotionItems.filter(findPromotionWithPromotionItem => findPromotionWithPromotionItem.promotion_id===promotion.promotion_id)
                    
                    return{
                        id: handlePromotionWithPromotionItem.map(id => id.id).toString(),
                        namePromotion: handlePromotionWithPromotionItem.map(name => name.name).toString(),
                        nameDish: promotion.name,
                        discount: handlePromotionWithPromotionItem.map(discount => discount.discount).toString(),
                        descriptionDish: promotion.description,
                        costDish: promotion.cost,
                        imageDish: promotion.image,
                        initialDate: handlePromotionWithPromotionItem.map(initialDate => initialDate.initialDate).toString(),
                        finalDate: handlePromotionWithPromotionItem.map(finalDate => finalDate.finalDate).toString()
                    }
                })
    
                return result
            }
                
            if(name_dish){
                const promotionIndexPromotion = await this.promotionIndexRepository.indexByPromotion(name_dish);
                
                if(promotionIndexPromotion.length ===0){
                    throw new AppError("Enter a valid name of dish!");
                }
        
                const result = promotionIndexPromotion.map(promotion => {
                    const handlePromotionWithPromotionItem = findPromotionWithPromotionItems.filter(findPromotionWithPromotionItem => findPromotionWithPromotionItem.promotion_id===promotion.promotion_id)
                    
                    return{
                        id: handlePromotionWithPromotionItem.map(id => id.id).toString(),
                        namePromotion: handlePromotionWithPromotionItem.map(name => name.name).toString(),
                        nameDish: promotion.name,
                        discount: handlePromotionWithPromotionItem.map(discount => discount.discount).toString(),
                        descriptionDish: promotion.description,
                        costDish: promotion.cost,
                        imageDish: promotion.image,
                        initialDate: handlePromotionWithPromotionItem.map(initialDate => initialDate.initialDate).toString(),
                        finalDate: handlePromotionWithPromotionItem.map(finalDate => finalDate.finalDate).toString()
                    }
                })
            
                return result;
            }
        }else{
            const viewProductsWithPromotion = await this.promotionIndexRepository.viewProductsWithPromotion();
            return viewProductsWithPromotion
        }
    }
}

module.exports = PromotionIndexService;