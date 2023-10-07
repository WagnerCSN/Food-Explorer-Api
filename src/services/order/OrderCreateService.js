class OrderCreateService{
    constructor(orderRepository){
        this.orderRepository = orderRepository;
    }

    async execute({status, qtdeOfItems, totalOrderValue, orderedItem, plate_id, users_id}){
       // const checkOrderedItemExist = await this.orderRepository.findByOrderedItem(orderedItem_id);
        const checkEmailExist = await this.orderRepository.findByClients(users_id);
        const handleQtdeOfItems = await this.orderRepository.findByQtdeOfItems(orderedItem_id);//consultar a quantidade de intens no pedido

        if(!checkOrderedItemExist){
            throw new AppError("There is no plate on the ordered item!");
        }

        //status: em processamento, enviado, entregue

        if(!checkEmailExist){
            throw new AppError("Unregistered customer!");
        }

        if(!handleQtdeOfItems){
            throw new AppError("There are no items in the order!");
        }

        const [order_id] = await this.orderRepository.create({
            status, 
            qtdeOfItems: handleQtdeOfItems,
            totalOrderValue,
        })

        const handleOrderedItens = orderedItem.split();

        //verificar se usuário está autenticado
        //verificar se o plato existe
        //consultar se o plato está em promoção, se estiver retorna o valor da promoção
        //consultar o valor do prato
            
        const insertOrderedItem = handleOrderedItens.map(OrderItens => {
            return{
                order_id,
                plate_id,
                value,
                amount,
            }
        });
    
        await this.promotionRepository.insertPromotionItem(insertPromotionItem)
        
        
        
        
        
        return orderCreated;

    }
}

module.exports = OrderCreateService;