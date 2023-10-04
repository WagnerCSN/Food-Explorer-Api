class PromotionCreateService{
    constructor(promotionRepository){
        this.promotionRepository = promotionRepository;
    }

    async execute({initialDate, finalDate, name, promotionItens, plate_id}){
        //const checkPromotionActive = await this.promotionRepository.findByActive(finalDate);
        //const checkPromotionNameExist = await this.promotionRepository.findByName(name);
        
        // if(checkPromotionActive && checkPromotionNameExist){
        //     throw new AppError("There is a promotion with that name active!")
        // }
        //precisa verificar se o plato existe

        // converterdatai = datai.split('/');
// var arraydatai = converterdatai[1]+'-'+converterdatai[0]+'-'+converterdatai[2]
// var date = new Date(arraydatai);
// var result = date.toLocaleDateString()

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