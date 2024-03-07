const express = require("express");
const Stripe = require('stripe');
const AppError = require("../../utils/AppError");
require("dotenv/config");

class CheckoutSessionCreateService{
    constructor(checkoutSessionRepository){
        this.checkoutSessionRepository = checkoutSessionRepository;
    }

    async execute({cartItems, order_id, user_id}){
    const stripe = Stripe(process.env.STRIPE_KEY);
    const customer = await stripe.customers.create({
      metadata: {
        userId: user_id.toString(),
        cart: JSON.stringify(cartItems.toString()),
        orderId: order_id
      }
    })

    
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
      line_items,
      mode: 'payment',
      customer: customer.id,
        success_url: `http://foodexplorer-wagner.netlify.app`,
        cancel_url: `https://foodexplorer-wagner.netlify.app/Pagamento`
        
      });
      
    
    return {url: session.url};
    } 
}

module.exports = CheckoutSessionCreateService;