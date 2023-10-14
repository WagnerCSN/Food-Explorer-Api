const AppError = require("../../utils/AppError");
const knex = require("../../database/knex");

class OrderCreateService{
    constructor(orderRepository){
        this.orderRepository = orderRepository;
    }

    async execute({status, orderedItem, amount, user_id}){
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

        try{
        await knex.transaction(async (trx) => {

            const [order_id] = await knex('order').insert({status, qtdeOfItems,
                     totalOrderValue,user_id}).returning('id').transacting(trx);
                const id = order_id
                const ord = await knex('order').where({"id": order_id}).transacting(trx);
                console.log(ord.map(a =>a))
                ord.status = status;
                ord.qtdeOfItems = qtdeOfItems; 
                ord.totalOrderValue = totalOrderValue; 
                ord.user_id = user_id;
            const update = await knex('order').where({"id": order_id}).update({status: 'concluido'}).transacting(trx);
        // const [order_id] = await this.orderRepository.createOrder({
        //     status, 
        //     qtdeOfItems,
        //     totalOrderValue,
        //     user_id
        // })

       console.log(update);
       await trx.commit();
    })
}catch(error) {
        console.error(error);
        // Rollback em caso de erro
       // knex.rollback(err);
      }
      
       
        //dentro do orderedItem terá um array com o id dos platos a serem adicionados;
        
        //verificar se usuário está autenticado
        //verificar se o plato existe
        //somar a quantidade de itens no order
        //somar a o valor total da nota => fazer um array com todos os totais e usar o metodo reduce() para somar
        //comocar mais de um plato no order
        
        //XXXXXXXXXXconsultar se o plato está em promoção, se estiver retorna o valor da promoção
        //xxxxxxxxxxconsultar o valor do prato
        
       /* const selectOrderedItem = await this.orderRepository.findByOrderedItem(orderedItem);
       
        const promotions = await this.orderRepository.findByPromotion(orderedItem)
        const a = promotions.map(d =>d.discount)
        const b = parseInt(a)
      
        
       // const checkPlateExist = await this.promotionRepository.findByPlate(plate_id);
      
        var insertOrderedItem;
        const checkDish = promotions.map(promotion => {

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
               //throw new AppError("este plato já está em promoção");
               insertOrderedItem = selectOrderedItem.map(OrderItens => {
                   const value = ((OrderItens.value*(100 - parseInt(a)))/100)*amount;//valorTotalComDesconto
                   const valueWithDiscount = ((OrderItens.value*(100 - parseInt(a)))/100)
                   console.log(value)
                return{
                    order_id,
                    plate_id: OrderItens.id,
                    unitary_value: valueWithDiscount,
                    total_value: value,
                    amount,
                    discount: parseInt(a)
                }
                
            });
            }
        })
      
        const insertOrderedItem2 = selectOrderedItem.map(OrderItens => {
            const value = OrderItens.value*amount;
            return{
                order_id,
                plate_id: OrderItens.id,
                unitary_value: OrderItens.value,
                total_value: value,
                amount,
            }
        });
        
        if(insertOrderedItem){
            await this.orderRepository.insertOrderItem(insertOrderedItem)
        }else{
            await this.orderRepository.insertOrderItem(insertOrderedItem2)
        }
        
        handleQtdeOfItems = await this.orderRepository.findByQtdeOfItems(order_id);//consultar a quantidade de intens no pedido
       const u = handleQtdeOfItems.map(a =>a.sum)
        console.log(u.toString())

        const order = await this.orderRepository.findByOrder(order_id)
        console.log(order)

        order.status = status;
        order.user_id = user_id; 
        order.qtdeOfItems= u.toString(); 
        console.log(order.qtdeOfItems)
        order.totalOrderValue=totalOrderValue;
        
       
        // const updateOrder =  await this.orderRepository.updateOrder({
        //     id: order_id,
        //     status: order.status,
        //     user_id: order.user_id,
        //     qtdeOfItems: order.qtdeOfItems, 
        //     totalOrderValue: order.totalOrderValue,
           
        // })  
        //  console.log("a",updateOrder)
        // return updateOrder
   */
        
    }
}

module.exports = OrderCreateService;