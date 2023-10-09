const AppError = require("../../utils/AppError");

class PromotionUpdateService {
  constructor(promotionUpdateRepository) {
    this.promotionUpdateRepository = promotionUpdateRepository;
  }

  async execute({ name, promotionItens, id }) {
    const promotion = await this.promotionUpdateRepository.findByPromotion(id);

    if (!promotion) {
      throw new AppError("Type Of Plates not found!");
    }

    promotion.name = name;
 
    const promotionUpdated = await this.promotionUpdateRepository.update({
      name: promotion.name,
      id
    });

    const promotion_id = promotion.id;
    const searchPromotionItem = await this.promotionUpdateRepository.findByItem(promotion_id)
 
    if(promotionItens){
        const promotionItemUpdated = await this.promotionUpdateRepository.updateItem({
            discount: promotionItens,
            promotion_id
      }); 

    return promotionItemUpdated;}
  } 
}

module.exports = PromotionUpdateService;