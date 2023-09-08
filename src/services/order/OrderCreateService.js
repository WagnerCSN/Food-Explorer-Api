class OrderCreateService{
    constructor(orderRepository){
        this.orderRepository = orderRepository;
    }

    async execute({status, qtdeOfItems, totalOrderValue, date, orderedItemId, clientsId}){
        const checkOrderedItemExist = await this.orderRepository.findByOrderedItem(orderedItemId);
        const checkEmailExist = await this.orderRepository.findByClients(clientsId);
        const handleQtdeOfItems = await this.orderRepository.findByQtdeOfItems(qtdeOfItems);//consultar a quantidade de intens no pedido

        if(!checkOrderedItemExist){
            throw new AppError("There is no plate on the ordered item!");
        }

        //status: em processamento, enviado, entregue

        if(!checkEmailExist){
            throw new AppError("Unregistered customer!");
        }

        if(handleQtdeOfItems>1){
            const totalOrderValue =  totalOrderValue+valueOrderItem //somar todos os itens
        }

        const orderCreated = await this.orderRepository.create({
            status, 
            qtdeOfItems: handleQtdeOfItems,
            totalOrderValue,
            date,
        })

        return orderCreated;

    }
}

module.exports = OrderCreateService;