// create Promise
const promise = new Promise((resolve, reject) => {
  //resolve("Success");
  reject("Error");
})
  .then((res) => {
    console.log("Suc: ", res);
  })
  .catch((err) => {
    console.log("Err: ", err);
  });

// promise.resolve -> auto success
var promiseSuccess = Promise.resolve("Success!");
console.log(promiseSuccess);

// promise.reject -> auto error
var promiseError = Promise.reject("Error!");
console.log(promiseError);

// promise.all - > excuted all
let a = 10;
let b = 20;
let c = 30;
let d = 40;

let getSum1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve(a + b);
  }, 2000);
});

let getSum2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve(c + d);
  }, 3000);
});

//  get sum with promise all
Promise.all([getSum1, getSum2])
  .then(([getSum1, getSum2]) => {
    let sum = getSum1 + getSum2;
    console.log("Sum with Promise all: ", sum);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally((done) => {
    console.log("Finally block");
  });

// get sum with promise
getSum1
  .then((sum1) => {
    console.log("Sum1: ", sum1);
    return getSum2
      .then((sum2) => {
        console.log("Sum2: ", sum2);
        return sum1 + sum2;
      })
      .then((result) => {
        console.log("Sum with promise: ", result);
      });
  })
  .catch((error) => {
    console.log(error);
  })
  .finally((done) => {
    console.log("Done!!");
  });

// Example 02
var promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve([1]);
  }, 2000);
});

var promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve([2, 3, 4, 5, 6]);
  }, 5000);
});

Promise.all([promise1, promise2]).then(([promise1, promise2]) => {
  let res = promise1.concat(promise2);
  console.log(res);
});
