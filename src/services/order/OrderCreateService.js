class OrderCreateService{
    constructor(orderRepository){
        this.orderRepository = orderRepository;
    }

    async execute({status, qtdeOfItems, totalOrderValue, date, orderedItem_id, users_id}){
        const checkOrderedItemExist = await this.orderRepository.findByOrderedItem(orderedItem_id);
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