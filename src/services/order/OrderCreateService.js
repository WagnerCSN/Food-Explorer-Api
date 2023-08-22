class OrderCreateService{
    constructor(orderRepository){
        this.orderRepository = orderRepository;
    }

    async execute({status, qtdeOfItems, orderedItemId, clientsId}){
        const checkOrderedItemExist = await this.orderRepository.findByOrderedItem(orderedItemId);
        const checkEmailExist = await this.orderRepository.findByClients(clientsId);
        const handleQtdeOfItems = await this.orderRepository.findByQtdeOfItems(qtdeOfItems);

        if(!checkOrderedItemExist){
            throw new AppError("There is no plate on the ordered item!");
        }

        if(!checkEmailExist){
            throw new AppError("Unregistered customer!");
        }

        if(handleQtdeOfItems>1){
            const totalOrderValue =  totalOrderValue+valueOrderItem //somar todos os itens
        }

        const orderCreated = await this.orderRepository.create({
            status, 
            qtdeOfItems,
            totalOrderValue
        })

        return orderCreated;

    }
}

module.exports = OrderCreateService;