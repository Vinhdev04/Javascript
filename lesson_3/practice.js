// Tính chu vi và diện tích hình tròn

let r;
r = Number(prompt("Nhập bán kính của hình tròn: "));
let PI = Math.PI;
let dtCircle = PI * r * r;
let cvCircle = 2 * PI * r;
console.log("Diện tích hình tròn: " + dtCircle);
console.log("Chu vi hình tròn: " + cvCircle);



// Tính chu vi và diện tích hình chữ nhật

let chieuDai = Number(prompt("Nhập chiều dài: "));
let chieuRong = Number(prompt("Nhập chiều rộng: "));


let dtRectangle = chieuDai * chieuRong;
let cvRectangle = (chieuDai + chieuRong) * 2;

console.log("Diện tích hình chữ nhật: " + dtRectangle);
console.log("Chu vi hình chữ nhật: " + cvRectangle);


// Tính điểm trung bình

let diemMon1 = Number(prompt("Nhập điểm môn 1: "));
let diemMon2 = Number(prompt("Nhập điểm môn 2: "));
let diemMon3 = Number(prompt("Nhập điểm môn 3: "));

let dtb = (diemMon1 + diemMon2 + diemMon3) / 3;
console.log("Điểm trung bình: " + dtb);
