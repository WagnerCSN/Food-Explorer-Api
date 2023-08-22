class OrderedItemController{
    async create(request, response){
        const {value, discount, amount} = request.body;

        orderedItemRepository = new OrderedItemRepository();
        orderedItemCreateService = new OrderedItemCreateService(orderedItemRepository);
        await orderedItemCreateService.execute({value, discount, amount});

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