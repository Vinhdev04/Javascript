/* Tìm x,y khi biết tổng và hiệu:
Ví dụ:  x + y = 14 -> x = 9, y = 5
        x - y = 4  -> x = 6.5, y = 1.5
*/

let sum = parseFloat(prompt("Enter sum: "));
let sub = parseFloat(prompt("Enter sub: "));
let resuiltX = (sum + sub) / 2;
let resuiltY = resuiltX - sub;
console.log("resuiltX = ", resuiltX);
console.log("resuiltY = ", resuiltY);
