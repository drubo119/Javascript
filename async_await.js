// always return a promise

async function hello() {
  console.log("Hello");
}

function getData(dataId) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data:", dataId);
      resolve();
    }, 2000);
  });
}

// async await
async function getAlData() {
  await getData(1);
  console.log("getting data 2");
  await getData(2);
  console.log("getting data 3");
  await getData(3);
  console.log("getting data 4");
  await getData(4);
  console.log("getting data 5");
  await getData(5);
}
getAlData();