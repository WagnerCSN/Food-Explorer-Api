const express = require("express");
const Stripe = require('stripe');
require("dotenv/config");

class CheckoutSessionCreateService{
    constructor(checkoutSessionRepository){
        this.checkoutSessionRepository = checkoutSessionRepository;
    }

    async execute({cartItems}){
    const stripe = Stripe(process.env.STRIPE_KEY)

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

    const line_items= cartItems.map((item) => {
        return{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.data.name,
                        image: [item.data.image],
                        description: item.data.description,
                        metadata:{
                            id: item.data.id
                        }
                    },
                    unit_amount: item.data.value * 100,
                },
                //price: '{{PRICE_ID}}',
                quantity: item.qtde,            
                
                //table.text("totalOrderValue");
              };
    });

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/checkout-success`,
        cancel_url: `${process.env.CLIENT_URL}/cart`,
      });
      
    const response= res.send({url: session.url});

    return response;
    }    
}

module.exports = CheckoutSessionCreateService;