const AppError = require("../../utils/AppError");
const express = require("express");
const Stripe = require('stripe');
require("dotenv/config");
const knex = require("../../database/knex");


class WebhookCreateService {
    constructor(webhookRepository) {
        this.webhookRepository = webhookRepository;
    }
    async execute({ sig, endpointSecret, request }) {
        // This is your Stripe CLI webhook secret for testing your endpoint locally.
        const stripe = Stripe(process.env.STRIPE_KEY);
        
        
        let data;
         let eventType;
        //console.log(request.body);//.data.object.last_payment_error.code
        
         if (endpointSecret) {

             let event;
            // if(buf.body.data.object.object==='checkout.session' && buf.body.data.object.status=== 'complete'){//payment_intent.succeeded
            //     console.log('pagamento efetuado');
            //     //console.log("Dados do cliente:", buf.body.data.object.customer_details);
            //     //console.log("dados da transação:", buf.body.data.object.payment_method_types);
            //     //console.log("resultado da transação:", buf.body.data.object.outcome);
                
            //    console.log("aaaaaaaaaaaa", buf.body.data.object.metadata)
            //     const customerId= buf.body.data.object.customer;
            //     const paymentIntentId =  buf.body.data.object.payment_intent;
                
            //     const subtotal =  buf.body.data.object.amount_subtotal;
            //     const total =  buf.body.data.object.amount_total;
            //     const shipping =  buf.body.data.object.customer_details;
            //     const payment_status =  buf.body.data.object.payment_status;

                
            //     const result = {
            //         customerId, paymentIntentId, subtotal, total, shipping, payment_status
            //     }

            //     await knex("order").insert({status: payment_status , qtdeOfItems: 1, totalOrderValue: total, user_id: 1});
            //     //const stado = await knex("order").where()
            //     return console.log(result)
            // }else{
            //     //const user =  buf.body.data.object.last_payment_error.payment_method.billing_details;
            //     const card =  buf.body.data.object.last_payment_error.payment_method.card;
            //     const code =  buf.body.data.object.last_payment_error.code;
            //     const message =  buf.body.data.object.last_payment_error.message;

            //     const result = {
            //         card, code, message
            //     }
            //     await knex("order").insert({status: code , qtdeOfItems: 0, totalOrderValue: 0, user_id: 1});
            //     return console.log(result);
            // }
//type: 'payment_intent.payment_failed'
//type: 'checkout.session.completed'            
    
            try {
                event = await stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
                console.log("evento", event)
            } catch (error) {
                console.log(`Webhook Error: ${error.message}`);
            }
            data = event.data.object;
            eventType = event.type;
        }else{
            data = request.body.data.object;
            eventType = request.body.type;
            }

        if(eventType === "checkout.session.completed"){
            stripe.customers.retrieve(data.customer)
            .then(async (customer) => {
                
                    await knex("order").where({id: customer.metadata.orderId}).update({status: "Preparando"});
            })
            .catch((error) => console.log(error.message));
         }
         const code = request.body.data.object.failure_code;
         if(code!=='undefined'){
          return code
         }
        }
}
module.exports = WebhookCreateService;