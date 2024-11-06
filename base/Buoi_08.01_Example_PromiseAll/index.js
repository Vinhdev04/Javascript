let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;
let f = 60;

let getSum1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(a + b);
  }, 2000);
});

let getSum2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(c + d);
  }, 4000);
});

let getSum3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(e + f);
  }, 6000);
});

// Excute with promise.all -> 6s -> bằng thời gian thức thi getSum3: 6s
Promise.all([getSum1, getSum2, getSum3])
  .then(([getSum1, getSum2, getSum3]) => {
    let totalSum = getSum1 + getSum2 + getSum3;
    console.log(totalSum);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally block");
  });

// Excute with Promise -> 12s
getSum1
  .then((result1) => {
    console.log("getSum1:", result1); // Log kết quả của getSum1
    return getSum2.then((result2) => {
      console.log("getSum2:", result2); // Log kết quả của getSum2
      return { result1, result2 }; // Trả về kết quả của getSum1 và getSum2
    });
  })
  .then(({ result1, result2 }) => {
    return getSum3.then((result3) => {
      console.log("getSum3:", result3); // Log kết quả của getSum3
      let totalSum = result1 + result2 + result3; // Tính tổng
      console.log("Total Sum:", totalSum); // Hiển thị tổng
    });
  })
  .catch((error) => {
    console.log("Error:", error); // Xử lý lỗi nếu có
  })
  .finally(() => {
    console.log("Finally block"); // Thực thi cuối cùng sau khi hoàn thành hoặc có lỗi
  });
