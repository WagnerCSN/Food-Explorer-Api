class OrderedItemController{
    async create(request, response){
        const {value, amount} = request.body;
        const {platesId, orderId} = request.params;

        orderedItemRepository = new OrderedItemRepository();
        orderedItemCreateService = new OrderedItemCreateService(orderedItemRepository);
        await orderedItemCreateService.execute({value, amount, platesId, orderId});

        response.json();

    }

    async index(request, response){

    }

    async show(request, response){

    }

    async delete(request, response){

    }
}

mocule.exports = OrderedItemController;