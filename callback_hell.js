function sum(a, b) {
 console.log(a + b);
}
function  calculator(a, b, callback) {
  
    callback(a, b);
}

calculator(5, 10, sum); // 15


function getData(dataId, getNextData) {
  
  // console.log(`data:${dataId}`);
  // console.log("data:", dataId);

  setTimeout(() => {
    console.log("data:", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
// callback hell
getData(1, () => {
  console.log("getting data 2");
  getData(2, () => {
    console.log("getting data 3");
    getData(3, () => {
      console.log("getting data 4");
      getData(4, () => {
        console.log("getting data 5");
        getData(5);
      });
    });
  });
}); // data: 1, data: 2, data: 3, data: 4, data: 5