class OrderedItemCreateService{
    constructor(orderedItemRepository){
        this.orderedItemRepository = orderedItemRepository;
    }

    async execute({value, discount, amount, platesId, orderId}){
        const checkExistPlate = await this.orderedItemRepository.findByName(platesId);
        const checkPlatePromotion = await this.orderedItemRepository.findByPromotion(platesId)//verificar se o plato esta em promoção

        //pegar o valor do plato
        //pegar o valor do desconto
        
        if(!checkExistPlate){
            throw new AppError("Plate does not exist!");
        }

        if(checkPlatePromotion){
           value = (valueOfPlate-discount)*amount; 
        }else{
            value = amount*valueOfPlate
        }


    }
}