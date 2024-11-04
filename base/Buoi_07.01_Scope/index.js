// Scope: Global and Local
// Global
let x = 10;
function test() {
  console.log(x);
  function test2() {
    console.log(x);
  }
  test2(); // 10
}
test(); // 10

// Local
function getLocal() {
  let y = 11;
  console.log(y);
  function getLocal2() {
    console.log(y);
  }
  getLocal2(); // 11
}
getLocal(); // 11
// console.log(y); -> error
