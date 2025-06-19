// solve flow control of async functions with callbacks
// asynchronous blocking behavior


function takeOrder(customer,callback) {
  console.log(`Take order from customer 1`);
  callback(customer);
}

function processOrder(customer,callback) {
  console.log(`Processing order for customer 1`);

  // blocking 3s delay
  setTimeout(() => {
    console.log("Cooking done!");
    console.log(`Processed order for customer 1`);
    callback(customer);
  }, 3000);

}


function completeOrder(customer) {
  console.log(`Completed order for customer 1`);
}

// callback pattern
takeOrder("customer 1", (customer) => {
  processOrder(customer, () => {
    completeOrder(customer);
  });
  
  
});