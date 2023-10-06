const AppError = require("../../utils/AppError");

class PromotionCreateService{
    constructor(promotionRepository){
        this.promotionRepository = promotionRepository;
    }

    async execute({initialDate, finalDate, name, promotionItens, plate_id}){
        const checkPromotionActive = await this.promotionRepository.findByDishWithPromotion(plate_id);
        const checkPlateExist = await this.promotionRepository.findByPlate(plate_id);
        const checkDish = checkPromotionActive.map(promotion => {

            let Date_1 = initialDate;  
            let Date_2 = promotion.finalDate;
            let Date_3 = new Date();
            let Date_to_check = Date_3.toLocaleDateString()
            
            let D_1 = Date_1.split("/");
            let D_2 = Date_2.split("/");
            let D_3 = Date_to_check.split("/");
                  
            let d1 = new Date(D_1[2], parseInt(D_1[1]) - 1, D_1[0]);
            let d2 = new Date(D_2[2], parseInt(D_2[1]) - 1, D_2[0]);
            let d3 = new Date(D_3[2], parseInt(D_3[1]) - 1, D_3[0]);
                  
            if(d1<=d2&&d1>=d3) {
               throw new AppError("este plato já está em promoção");
            }
        })

        if(!checkPlateExist){
            throw new AppError("Dish not found!")
        }

        // Format - MM/DD/YYYY
        let Date_4 = initialDate;
        let Date_5 = finalDate;
        let Date_6 = new Date();
        let Date_to_check = Date_6.toLocaleDateString()
        
        let D_4 = Date_4.split("/");
        let D_5 = Date_5.split("/");
        let D_6 = Date_to_check.split("/");
              
        let d4 = new Date(D_4[2], parseInt(D_4[1]) - 1, D_4[0]);
        let d5 = new Date(D_5[2], parseInt(D_5[1]) - 1, D_5[0]);
        let d6 = new Date(D_6[2], parseInt(D_6[1]) - 1, D_6[0]);
              
        if (d4>=d6 && d5 >=d6&& d4<=d5) {
            
            const [promotion_id] = await this.promotionRepository.create({
                initialDate, 
                finalDate, 
                name
            });
    
            const handlePromotionItens = promotionItens.split();
            
            const insertPromotionItem = handlePromotionItens.map(promotionItens => {
                return{
                    promotion_id,
                    plate_id,
                    discount: promotionItens
                }
            });
    
            await this.promotionRepository.insertPromotionItem(insertPromotionItem)
        }else {
            throw new AppError("Fill in the dates correctly!")
        }
    }
}

module.exports = PromotionCreateService;