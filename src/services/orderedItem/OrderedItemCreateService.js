const AppError = require("../../utils/AppError");

class OrderedItemCreateService {
  constructor(orderedItemRepository) {
    this.orderedItemRepository = orderedItemRepository;
  }

  async execute({ value, amount, platesId, orderId }) {
    const checkExistPlate = await this.orderedItemRepository.findByName(platesId);
    const discount = await this.orderedItemRepository.findByPromotion(platesId); //consultar se o plato esta em promoção, se estiver retorna o valor do desconto
    const valueOfPlate = await this.orderedItemRepository.findByValueOfPlate(platesId);//consultar o valor do plato
   

    if (!checkExistPlate) {
      throw new AppError("Plate does not exist!"); //plato inexistente
    }

    if(!valueOfPlate){
      throw new AppError("The dish has no unit value"); //plato sem valor unitário
    }

    //verifica se o prato está em promoção
    if (discount) {
      value = ((valueOfPlate*(100 - discount))/100)*amount; //amount=quantidade (valordoproduto*(100-desconto))/100
    } else {
      value = valueOfPlate*amount;
    }

    const createdOrderedItem = await this.orderedItemRepository.create({
      value,
      amount,
      platesId,
      orderId,
    });

    return createdOrderedItem;
  }
}

module.exports = OrderedItemCreateService;
