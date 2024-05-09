// Hàm Math.random() -> random trong [0 -> 1]

let randomValue = Math.random();
console.log(`Số ngẫu nhiên từ 0 -> 1: ${randomValue}`);


//  random số > 1 (<10):
let randomValue2 = Math.random()*10;
console.log(`Số ngẫu nhiên > 1: ${randomValue2}`);


// random số nguyên: 0 -> 9
let randomValue3 = parseInt(Math.random()*10);
console.log(`Số nguyên ngẫu nhiên : ${randomValue3}`);

// random số nguyên: 0 -> 30
let randomValue4 = parseInt(Math.random()*30);
console.log(`Số nguyên ngẫu nhiên : ${randomValue4}`);

// random số nguyên: 10 -> 30
let randomValue5 = parseInt(Math.random()*21)+10; // min =10 , max = 10 + 30 = 40 -> 31-10 = 21
console.log(`Số nguyên ngẫu nhiên : ${randomValue5}`);
