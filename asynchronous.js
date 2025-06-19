// asynchronous blocking behaviour
console.log(`Take order from customer 1`);

function processOrder() {
  console.log(`Processing order for customer 1`);

  // blocking 3s delay
  setTimeout(() => {
    console.log("Cooking done!");
  }, 3000);

  console.log(`Processed order for customer 1`);
}
processOrder();

console.log(`Completed order for customer 1`);