class PromotionCreateService{
    constructor(promotionRepository){
        this.promotionRepository = promotionRepository;
    }

    async execute({initialDate, finalDate, name}){
        const checkPromotionActive = await this.promotionRepository.findByActive(finalDate);
        const checkPromotionNameExist = await this.promotionRepository.findByName(name);

        if(checkPromotionActive && checkPromotionNameExist){
            throw new AppError("There is a promotion with that name active!")
        }

        const promotionCreated = await this.promotionRepository.create({
            initialDate, 
            finalDate, 
            name
        });

        return promotionCreated;
    }
}

module.exports = PromotionCreateService;