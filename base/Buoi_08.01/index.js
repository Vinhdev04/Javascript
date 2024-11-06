var a = 191;
// var a;
var promise = new Promise(function (resolve, reject) {
  if (a !== undefined && a !== null && a !== "") {
    resolve(a); // success
  } else {
    reject(a); // error
  }
});
promise
  .then((success) => {
    console.log(success); // a
    return success;
  })
  .then((success2) => {
    const b = 20;
    console.log(success2 + b); // a
    return success2 + b;
  })
  .then((success3) => {
    console.log(success3); // a
    return success3;
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Finally block");
  });

// -------------- Example status Promise --------------------------------
const promises = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve(); // success
    reject(); // failure
  }, 3000);
});

console.log(promises); //
setTimeout(() => {
  console.log(promises); // status: pending
}, 1000);

setTimeout(() => {
  console.log(promises); // status: pending
}, 2000);

setTimeout(() => {
  // console.log(promises); // status: fullfilled: undefined
  console.log(promises); // status: rejected: undefined
}, 3000);
