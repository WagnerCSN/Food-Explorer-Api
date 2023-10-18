// class OrderedItemController{
//     async create(request, response){
//         const {value, amount} = request.body;
//         const {platesId, orderId} = request.params;

//         orderedItemRepository = new OrderedItemRepository();
//         orderedItemCreateService = new OrderedItemCreateService(orderedItemRepository);
//         await orderedItemCreateService.execute({value, amount, platesId, orderId});

//         response.json();

//     }

//     async update(request, response) {
//         const { name, email, password, old_password } = request.body;
//         // const id = request.user.id;
//         const { id } = request.params;
//         const usersUpdateRepository = new UsersUpdateRepository();
//         const usersUpdateService = new UsersUpdateService(usersUpdateRepository);
//         await usersUpdateService.execute({
//           name,
//           email,
//           password,
//           old_password,
//           id,
//         });
    
//         response.json();
//       }
      
//       async delete(request, response){
//         const {id} = request.params;
    
//         const usersDeleteRepository = new UsersDeleteRepository();
//         const usersDeleteService = new UsersDeleteService(usersDeleteRepository);
//         await usersDeleteService.execute({id});
    
//         return response.json();
//       }
// }

// module.exports = OrderedItemController;