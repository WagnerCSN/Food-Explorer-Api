/*const knex = require('knex')({
    client: 'seu_cliente_de_banco_de_dados',
    connection: {
      host: 'seu_host',
      user: 'seu_usuario',
      password: 'sua_senha',
      database: 'seu_banco_de_dados'
    }
  });
  
  // Dados do pedido
  const order = {
    status, 
    qtdeOfItems,
    totalOrderValue,
    user_id
  };
  
  // Itens do pedido => [id]= cada id retornara o objeto contendo todas as informaçoes
  const itensPedido = [
    { produto_id: 1, quantidade: 2, preco_unitario: 10 },
    { produto_id: 2, quantidade: 3, preco_unitario: 15 },
    // Outros itens do pedido
  ];
  
  // Passo 1: Inserir o pedido e obter o ID inserido
  knex.transaction(async (trx) => {
    const [order_id] = await trx('order').insert(order).returning('id');
  
    // Passo 2: Inserir os itens do pedido relacionados ao ID do pedido
    const itensInseridos = await trx('itens_pedido').insert(
      itensPedido.map((item) => ({
        pedido_id: pedidoId,
        ...item,
      }))
    );
  
    // Passo 3: Calcular o valor total dos itens do pedido
    const total = itensPedido.reduce((acc, item) => {
      return acc + item.quantidade * item.preco_unitario;
    }, 0);
  
    console.log('Pedido inserido com ID:', pedidoId);
    console.log('Itens do pedido inseridos:', itensInseridos);
    console.log('Valor total do pedido:', total);
  
    // Commit da transação
    await trx.commit();
  })
    .catch((err) => {
      console.error('Erro ao realizar a transação:', err);
      // Rollback em caso de erro
      knex.rollback(err);
    })
    .finally(() => {
      knex.destroy(); // Feche a conexão com o banco de dados quando terminar
    });

    ********************************************************************
    knex.transaction(function(t) {
        return knex('foo')
        .transacting(t)
        .insert({id:"asdfk", username:"barry", email:"barry@bar.com"})
        .then(function() {
             return knex('foo')
                .where('username','=','bob')
                .update({email:"bob@foo.com"});
        })
        .then(t.commit)
        .catch(function(e) {
             t.rollback();
             throw e;
        })
     })
     .then(function() {
      // it worked
     })
     .catch(function(e) {
      // it failed
     });*/



//      try{
//       await knex.transaction(async trans => {
//           const [order_id] = await trans('order').insert({qtdeOfItems,
//                    totalOrderValue,user_id});
//               const id = order_id
//               const order = await trans('order').where({id});
//               console.log("Order", order.map(a =>a));
//               order.qtdeOfItems = qtdeOfItems; 
//               order.totalOrderValue = totalOrderValue; 
//               order.user_id = user_id;
//           const update = await trans('order').where({"id": order_id}).update({qtdeOfItems: 2, totalOrderValue: '10' });
//           const orderUpdate = await trans('order').where({"id": order_id});
//      console.log("OrderUpdate", orderUpdate.map(a =>a));
//      await trans.commit();
//   });
// }catch(err) {
//       console.log(err);
//       knex.rollback(err);
//     }