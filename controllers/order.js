
const {Order} = require('../models/order') 

//create order function
const createOrder = async (customer, data) => {
    const Items = [JSON.parse(customer.metadata.cart)];
    // console.log(Items);
  
    const products = Items.map((item) => {
      return {
        productId: item.id,
        quantity: item.quantity,
      };
    });
  
    const newOrder = new Order({
      userId: customer.id,
      customerId: data.customer,
      paymentIntentId: data.payment_intent,
      products,
      subtotal: data.amount_subtotal,
      total: data.amount_total,
      shipping: data.customer_details,
      payment_status: data.payment_status,
    });
  
    try {
      const savedOrder = await newOrder.save();
      console.log("Processed Order:", savedOrder);
    } catch (err) {
      console.log(err);
    }
  };
  
  module.exports =createOrder;