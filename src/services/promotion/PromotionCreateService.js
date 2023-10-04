const AppError = require("../../utils/AppError");

class PromotionCreateService{
    constructor(promotionRepository){
        this.promotionRepository = promotionRepository;
    }

    async execute({initialDate, finalDate, name, promotionItens, plate_id}){
        //const checkPromotionActive = await this.promotionRepository.findByActive(finalDate);
        const checkPromotionNameExist = await this.promotionRepository.findByName(name);
        const checkPlateExist = await this.promotionRepository.findByPlate(plate_id);
        if(checkPromotionNameExist){
            throw new AppError("There is a promotion with that name active!")
        }
    //verificar se a data de criação está antes de initialDate e finalDate && initialDate está antes de finalDate
        // Format - MM/DD/YYYY
        var D1 = initialDate;
        var D2 = finalDate;
        var D3 = '20/10/2023';
  
       
            D1 = new Date(D1);
            D2 = new Date(D2);
            D3 = new Date(D3);
              
            if (D3.getTime() <= D2.getTime()
                && D3.getTime() >= D1.getTime()) {
                console.log("Date is in between"
                        + " the Date 1 and Date 2"); 
            } else {
                console.log("Date is not in"
                    + " between the Date 1 and Date 2");
            }









       //************************************************************************************************************ */
        // converterdatai = datai.split('/');
// var arraydatai = converterdatai[1]+'-'+converterdatai[0]+'-'+converterdatai[2]
// var date = new Date(arraydatai);
// var result = date.toLocaleDateString()

        if(!checkPlateExist){
            throw new AppError("Dish not found!")
        }

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
    }
}

module.exports = PromotionCreateService;