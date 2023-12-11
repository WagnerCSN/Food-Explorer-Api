const express = require("express");
const Stripe = require('stripe');
const AppError = require("../../utils/AppError");
require("dotenv/config");

class CheckoutSessionCreateService{
    constructor(checkoutSessionRepository){
        this.checkoutSessionRepository = checkoutSessionRepository;
    }

    async execute({cartItems, user_id}){
    
    const stripe = Stripe(process.env.STRIPE_KEY);

    const customer = await stripe.customers.create({
      metadata: {
        userId: user_id,
        cart: JSON.stringify(cartItems)
      }
    })

    //"orderedItem": [ {"plate_id":5, "amount": 3}, {"plate_id":5, "amount": 3}] 
 
    //fazer uma pesquisa para retornar os produtos e as respectivas quantidades
    // const selectProducts = await this.checkoutSessionRepository.selectProducts()
    // orderedItem.map(item => {
    //     const cartItems = selectProducts.filter( product => product.id ===item.plate_id);

    //     return{
    //           amount: item.amount,
    //           cartItems
    //     }
    // })
    if(cartItems.length===0){
        throw new AppError("There are no items in the cart!");
    }
    const line_items= cartItems.map((item) => {

        return{
                price_data: {
                    currency: 'brl',
                    product_data: {
                        name: item.data.name,
                        //image: item.data.image,
                        description: item.data.description,
                        metadata:{
                             id: item.data.id
                         }
                    },
                    unit_amount: item.data.value * 100,
                },
                //price: '{{PRICE_ID}}',
                quantity: item.qtde,            
                
                
              };
    });

    const session = await stripe.checkout.sessions.create({
        customer: customer.id,
        line_items,
        mode: 'payment',
        success_url: `http://localhost:5173/checkout-success`,
        cancel_url: `http://localhost:5173/Pagamento`
        
      });
      
    
    return {url: session.url};
    } 
}

module.exports = CheckoutSessionCreateService;