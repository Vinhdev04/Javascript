// ------------------------------------------------------------------ //
            // 1. Hàm Math.sqrt()
let soA = 25;
let soB = Math.sqrt(soA);
console.log(`Căn bậc 2 của số ${soA} là:  ${soB}`);

// ------------------------------------------------------------------ //
            // 2. Hàm Math.pow(base,exponent)
let x = 2;
let y = 3;
let kq = Math.pow(2, 3);
console.log(`Kết quả của ${x} ^ ${y} la: ${kq}`);

// ------------------------------------------------------------------ //
            // 3. Hàm Math.abs()
let a = -10;
let b = Math.abs(a);
console.log(`Gía trị tuyệt đôi ${a} là: ${b}`);

// ------------------------------------------------------------------ //
            // 4. Hàm Math.ceil()
let soPI = 3.1234;
let ceilPi = Math.ceil(soPI);
console.log(`Kết quả của ${soPI} sau khi làm tròn lên: ${ceilPi}`);

// ------------------------------------------------------------------ //
            // 5. Hàm Math.floor()
let soX = 3.1234;
let floorX = Math.floor(soX);
console.log(`Kết quả của số ${soX} sau khi làm tròn xuống: ${floorX}`);

// ------------------------------------------------------------------ //
            // 6. Hàm Math.round() ->    > .5  => làm tròn thành 1
            // 6. Hàm Math.round() ->    < .5  => làm tròn xuống
let soY = 3.56;
let roundY = Math.round(soY);
console.log(`Gía trị ${soY} sau khi làm tròn lên: ${roundY}`);
let soZ = 3.233249;
let roundZ = Math.round(soZ);
console.log(`Gía trị ${soZ} sau khi làm tròn xuống: ${roundZ}`);

// ------------------------------------------------------------------ //
            // 7. Hàm toFixed() -> làm tròn bao nhiêu số sau dấy chấm
            //                  -> toFixed kiểu trả về là string nhớ ép kiểu
let x1 = 3.5719;
let x2 = parseFloat(x1.toFixed(2)); // ep kieu
console.log(typeof x2);
console.log(`Gía trị của ${x1} sau khi làm tròn 2 chữ số là: ${x2}`);


// ------------------------------------------------------------------ //
           // 8. Hàm Math.min()
let minX = Math.min(200,100);
console.log(`Gía trị min la: ${minX}`);

// ------------------------------------------------------------------ //
            // 9. Hàm Math.max()
let maxY = Math.max(200,-500);
console.log(`Gía trị max là: ${maxY}`);

// ------------------------------------------------------------------ //
