const AppError = require("../../utils/AppError");

class PromotionCreateService{
    constructor(promotionRepository){
        this.promotionRepository = promotionRepository;
    }

    async execute({initialDate, finalDate, name, promotionItens, plate_id}){

        const checkPromotionNameExist = await this.promotionRepository.findByName(name);
        const checkPlateExist = await this.promotionRepository.findByPlate(plate_id);

        if(checkPromotionNameExist){
            throw new AppError("There is a promotion with that name active!")
        }

        if(!checkPlateExist){
            throw new AppError("Dish not found!")
        }
        
        // Format - MM/DD/YYYY
        let Date_1 = initialDate;
        let Date_2 = finalDate;
        let Date_3 = new Date();
        let Date_to_check = Date_3.toLocaleDateString()
        
        let D_1 = Date_1.split("/");
        let D_2 = Date_2.split("/");
        let D_3 = Date_to_check.split("/");
              
        let d1 = new Date(D_1[2], parseInt(D_1[1]) - 1, D_1[0]);
        let d2 = new Date(D_2[2], parseInt(D_2[1]) - 1, D_2[0]);
        let d3 = new Date(D_3[2], parseInt(D_3[1]) - 1, D_3[0]);
              
        if (d1>=d3 && d2 >=d3&& d1<=d2) {
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