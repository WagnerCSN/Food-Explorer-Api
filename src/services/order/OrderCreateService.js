const AppError = require("../../utils/AppError");
const knex = require("../../database/knex");

class OrderCreateService{
    constructor(orderRepository){
        this.orderRepository = orderRepository;
    }

    async execute({status, orderedItem, user_id}){
       // const checkOrderedItemExist = await this.orderRepository.findByOrderedItem(orderedItem_id);
        const checkUserExist = await this.orderRepository.findByUser(user_id);
        var handleQtdeOfItems;
       
        // if(!checkOrderedItemExist){
        //     throw new AppError("There is no plate on the ordered item!");
        // }

        // //status: em processamento, enviado, entregue

        if(!checkUserExist){
            throw new AppError("Unregistered customer!");
        }

        // if(!handleQtdeOfItems){
        //     throw new AppError("There are no items in the order!");
        // }
        let qtdeOfItems = 0;
        let totalOrderValue = '0';

       

//         try{
//         await knex.transaction(async trans => {

//             const [order_id] = await trans('order').insert({status, qtdeOfItems,
//                      totalOrderValue,user_id});
                
//                 const ord = await trans('order').where({"id": order_id});
//                 console.log(ord.map(a =>a))
//                 ord.status = status;
//                 ord.qtdeOfItems = qtdeOfItems; 
//                 ord.totalOrderValue = totalOrderValue; 
//                 ord.user_id = user_id;
//             const update = await trans('order').where({"id": order_id}).update({status: 'concluido', qtdeOfItems: 2, totalOrderValue: '10' });
//             const ord2 = await trans('order').where({"id": order_id});
        

//        console.log("u", ord2.map(a =>a));
//        await trans.commit();
//     });
// }catch(err) {
//         console.log(err);
//         // Rollback em caso de erro
//         knex.rollback(err);
//       }



        const order = await this.orderRepository.createOrder({status, qtdeOfItems, totalOrderValue, user_id});
        let order_id = order.id;
        const ord = await knex('order').where({"id": order.id});
       /// console.log(ord.map(a =>a))
        
       
        //dentro do orderedItem terá um array com o id dos platos a serem adicionados;
        
        //verificar se usuário está autenticado
        //verificar se o plato existe
        //somar a quantidade de itens no order
        //somar a o valor total da nota => fazer um array com todos os totais e usar o metodo reduce() para somar
        //comocar mais de um plato no order
        
        //XXXXXXXXXXconsultar se o plato está em promoção, se estiver retorna o valor da promoção
        //xxxxxxxxxxconsultar o valor do prato


        const plate_id = orderedItem.map(a =>a.plate_id)
       
        
     const selectOrderedItem = await this.orderRepository.findByOrderedItem(plate_id);
     console.log("platos adicionados", selectOrderedItem)
    
    
    //  let t = orderedItem.map(g =>{
    //     const x = selectOrderedItem.filter(h =>h.id === g)
    //     return{
    //         id: x.map(x => x.id).toString(),
    //         name: x.map(x => x.name).toString(),
    //         description: x.map(x => x.description).toString(),
    //         cost: x.map(x => x.cost).toString(),
    //         value:x.map(x => x.value).toString(),
    //         image: x.map(x => x.image).toString()
    //     }
    // })
    // const result = t.map(t =>t)
    // console.log(result)
    let result;
    let result2;
    let insertOrderedItem;
    let insertOrderedItem2;  
    let promotions = await this.orderRepository.findByPromotion(plate_id)//platos com promoção
    console.log("platos com promoção ", promotions);

    const promotions_id = promotions.map( promotion => promotion.plate_id)
    
    let plate_idWithOutPromotion = plate_id.filter( a => !promotions_id.includes( a ) );//compara os platos adicionados com os platos com promoção
    const plateWithOutPromotion = await this.orderRepository.findByPlatesWithOutPromotion(plate_idWithOutPromotion);//platos sem promoção
  
    console.log("plato sem promoção", plateWithOutPromotion.map(a =>a))
          
    //         if(promotions){
    //         const a = promotions.map(d =>d.discount)
    //         const b = parseInt(a)
        
    //    // const checkPlateExist = await this.promotionRepository.findByPlate(plate_id);
      
        
         const checkDish = promotions.map(async promotion => {
            
            let Date_1 = promotion.initialDate;  
            let Date_2 = promotion.finalDate;
            let Date_3 = new Date();
            let Date_to_check = Date_3.toLocaleDateString()
            
            let D_1 = Date_1.split("/");
            let D_2 = Date_2.split("/");
            let D_3 = Date_to_check.split("/");
                  
            let d1 = new Date(D_1[2], parseInt(D_1[1]) - 1, D_1[0]);
            let d2 = new Date(D_2[2], parseInt(D_2[1]) - 1, D_2[0]);
            let d3 = new Date(D_3[2], parseInt(D_3[1]) - 1, D_3[0]);
          
        
            if(d1<=d2&&d1>=d3) {
               result = "este plato está em promoção";
               console.log("id do plato em promoção:", promotion.plate_id)
            //    insertOrderedItem = promotions.map(OrderItens => {
            //        const value = ((OrderItens.value*(100 - parseInt(a)))/100)*amount;//valorTotalComDesconto
            //        const valueWithDiscount = ((OrderItens.value*(100 - parseInt(a)))/100)
                  
            //     return{
            //         order_id,
            //         plate_id: OrderItens.id,
            //         unitary_value: valueWithDiscount,
            //         total_value: value,
            //         amount,
            //         discount: parseInt(a)
            //     }
                
            }
            
        
      
            result2 = "este plato está sem promoção";
           
        // insertOrderedItem2 = k.map(OrderItens => {//sem promoção
            // const value = OrderItens.value*amount;
            // return{
            //     order_id,
            //     plate_id: OrderItens.id,
            //     unitary_value: OrderItens.value,
            //     total_value: value,
            //     amount,
            // }
        // });
        
        if(result){
            console.log(result)
            //await this.orderRepository.insertOrderItem(insertOrderedItem)
        }else{
            
            console.log(result2)
            //await this.orderRepository.insertOrderItem(insertOrderedItem2)
        }
    });//});

    //console.log("platos sem promoção", sempromotion)
    //     handleQtdeOfItems = await this.orderRepository.findByQtdeOfItems(order_id);//consultar a quantidade de intens no pedido
    //    const u = handleQtdeOfItems.map(a =>a.sum)
    //     console.log(u.toString())

    //     const order = await this.orderRepository.findByOrder(order_id)
    //     console.log(order)

    //     order.status = status;
    //     order.user_id = user_id; 
    //     order.qtdeOfItems= u.toString(); 
    //     console.log(order.qtdeOfItems)
    //     order.totalOrderValue=totalOrderValue;
        
       
    //     const updateOrder =  await this.orderRepository.updateOrder({
    //         id: order_id,
    //         status: order.status,
    //         user_id: order.user_id,
    //         qtdeOfItems: order.qtdeOfItems, 
    //         totalOrderValue: order.totalOrderValue,
           
    //     })  
    //      console.log("a",updateOrder)
    //     return updateOrder
   
   
    }
}

module.exports = OrderCreateService;