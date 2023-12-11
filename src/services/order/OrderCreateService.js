const AppError = require("../../utils/AppError");

class OrderCreateService{
    constructor(orderRepository){
        this.orderRepository = orderRepository;
    }

    async execute({status, orderedItem, user_id}){
       
        orderedItem = orderedItem.map(item => {
            return{
                plate_id: item.data.id,
                amount: item.qtde
            }
        })
        console.log("aaaaaaaaa", orderedItem);
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

        // const order = await this.orderRepository.createOrder({status, qtdeOfItems, totalOrderValue, user_id});
        // let order_id = order.id;
        // console.log(order_id)
        // const ord = await knex('order').where({"id": order.id});
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
     //const selectOrderedItem = await this.orderRepository.findByOrderedItem(plate_id);

    let order_id;
    let insertOrderedItem;
    let insertOrderedItem2;  
    let promotions = await this.orderRepository.findByPromotion(plate_id)//platos com promoção

    
    const promotions_id = promotions.map( promotion => promotion.plate_id)
    
    let plate_idWithOutPromotion = plate_id.filter( a => !promotions_id.includes( a ) );//compara os platos adicionados com os platos com promoção
    const plateWithOutPromotion = await this.orderRepository.findByPlatesWithOutPromotion(plate_idWithOutPromotion);//platos sem promoção
            const a = promotions.map(d =>d.discount)
            const b = parseInt(a)
        
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

            let amounts = orderedItem.map(a =>a)
            
            if(d1<=d2&&d1>=d3) {
               insertOrderedItem = promotions.map(OrderItens => {
                   const handleAmount = amounts.filter(amount =>amount.plate_id ===OrderItens.plate_id);
                   const value = ((parseInt(OrderItens.value)*(100 - parseInt(a)))/100)*handleAmount.map(a =>a.amount).toString();//valorTotalComDesconto
                   const valueWithDiscount = ((OrderItens.value*(100 - parseInt(a)))/100)
                        return{
                            order_id,
                            plate_id: OrderItens.id,
                            unitary_value: valueWithDiscount,
                            total_value: value,
                            amount: handleAmount.map(a =>a.amount).toString(),
                            discount: parseInt(a)
                        }
                    });
            }
         
        insertOrderedItem2 = plateWithOutPromotion.map(OrderItens => {//sem promoção
            const handleAmount = amounts.filter(amount =>amount.plate_id ===OrderItens.id)
            const value = parseInt(OrderItens.value)*handleAmount.map(a =>a.amount).toString();
            return{
                order_id,
                plate_id: OrderItens.id,
                unitary_value: OrderItens.value,
                total_value: value,
                amount: handleAmount.map(a =>a.amount).toString(),
            }
        });
    })
    let amounts = orderedItem.map(a =>a)
    insertOrderedItem2 = plateWithOutPromotion.map(OrderItens => {//sem promoção
        const handleAmount = amounts.filter(amount =>amount.plate_id ===OrderItens.id)
        const value = parseInt(OrderItens.value)*handleAmount.map(a =>a.amount).toString();
        return{
            order_id,
            plate_id: OrderItens.id,
            unitary_value: OrderItens.value,
            total_value: value,
            amount: handleAmount.map(a =>a.amount).toString(),
        }
    });

    const order = await this.orderRepository.createOrder({status, qtdeOfItems, totalOrderValue, user_id, insertOrderedItem, insertOrderedItem2});
    return order    
}
}

module.exports = OrderCreateService;