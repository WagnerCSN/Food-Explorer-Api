class OrderCreateService{
    constructor(orderRepository){
        this.orderRepository = orderRepository;
    }

    async execute({status, qtdeOfItems, totalOrderValue, orderedItem, plate_id, user_id}){
       // const checkOrderedItemExist = await this.orderRepository.findByOrderedItem(orderedItem_id);
        //const checkEmailExist = await this.orderRepository.findByClients(user_id);
       // const handleQtdeOfItems = await this.orderRepository.findByQtdeOfItems(orderedItem_id);//consultar a quantidade de intens no pedido

        // if(!checkOrderedItemExist){
        //     throw new AppError("There is no plate on the ordered item!");
        // }

        // //status: em processamento, enviado, entregue

        // if(!checkEmailExist){
        //     throw new AppError("Unregistered customer!");
        // }

        // if(!handleQtdeOfItems){
        //     throw new AppError("There are no items in the order!");
        // }

        const [order_id] = await this.orderRepository.createOrder({
            status, 
            qtdeOfItems,
            totalOrderValue,
            user_id
        })

        //dentro do orderedItem terá um array com o id dos platos a serem adicionados;
        
        //verificar se usuário está autenticado
        //verificar se o plato existe
        //consultar se o plato está em promoção, se estiver retorna o valor da promoção
        //consultar o valor do prato
        
        console.log(orderedItem);
        const selectOrderedItem = await this.orderRepository.findByOrderedItem(orderedItem)
        const insertOrderedItem = orderedItem.map(OrderItens => {
            return{
                order_id,
                plate_id: OrderItens.id,
                unitary_value: OrderItens.value,
                amount: OrderItens.amount,
            }
        });
    
        await this.orderRepository.insertOrderItem(insertOrderedItem)
        
        
        
        
        
        return orderCreated;

    }
}

module.exports = OrderCreateService;