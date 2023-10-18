// const AppError = require("../../utils/AppError");

// class PromotionItemCreateService{
//     constructor(promotionItemRepository){
//         this.promotionItemRepository = promotionItemRepository;
//     }

//     async execute({discount, platesId, promotionId}){
//         //consultar se na tabela item_promoção tem o codigo do produto
//         const checkPlateAndPromotionExist = await this.promotionItemRepository.findBy(platesId, promotionId);
//         //consultar se a data atual é antes da promoção(se a promoção está ativa)
//         const checkPromotionActive = await this.promotionRepository.findByActive(finalDate);
        
        
//         //aplicar o desconto ao valor unitário do produto
//         if(checkPlateAndPromotionExist && checkPromotionActive){
//             const discountCreated = await this.promotionItemRepository.create({discount});
//         }
//         return discountCreated;
//     }
// }

// module.exports = PromotionItemCreateService;