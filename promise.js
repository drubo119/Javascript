let promise = new Promise((resolve, reject) => {
  console.log("I am a promise");
  // resolve("Promise resolved successfully");
  reject("Promise rejected with an error");
})

// 3 states of a promise
// 1. pending
// 2. fulfilled (resolved)
// 3. rejected

function getData(dataId) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data:", dataId);
      resolve();
    }, 2000);
  });
}

// promise chaining
getData(1)
  .then(() => {
    console.log("getting data 2");
    return getData(2);
  })
  .then(() => { 
    console.log("getting data 3");
    return getData(3);
  })
  .then(() => {
    console.log("getting data 4");
    return getData(4);
  })
  .then(() => {
    console.log("getting data 5");
    return getData(5);
  })