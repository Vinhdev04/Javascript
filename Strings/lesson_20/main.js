//  Luyện tập với chuỗi trong Js

// Extracting String Characters:

// charAt()
let text = "Hello, world";
let chars = text.charAt(0);
console.log(chars); // H

// charCodeAt()
let chars2 = text.charCodeAt(0);
console.log(chars2); // H = 72 -> ASCII

// ES2022: at()
let chars3 = text.at(1);
console.log(chars3); // E -> ES2022

//  trim()
let chars4 = "   phạm công vinh   ";
console.log(chars4.trim()); //phạm công vinh

// trimStart()
console.log(chars4.trimStart()); // "phạm công vinh  "

// trimEnd()
console.log(chars4.trimEnd()); // "  phạm công vinh"

// padStart()
let isPadStart = "5";
let rel = isPadStart.padStart(4, "0");
console.log(rel); // 0005

// padEnd()
let isPadEnd = "5";
let relE = isPadEnd.padEnd(4, "0");
console.log(relE); // 5000

let isPad = 5;
let relX = isPad.toString();
console.log(relX.padStart(3, "x")); // xx5

// repeat()
let isRepeat = "Hello";
console.log(isRepeat.repeat(3)); // Hello Hello Hello

// slice (start, end)
let chars5 = "hoàng văn khánh";
console.log(chars5.slice(6, 10)); // văn
console.log(chars5.slice(5)); // văn khánh
console.log(chars5.slice(-5)); // khánh

// substring (start, end)
let chars6 = "Hello world";
console.log(chars6.substring(5)); // world
console.log(chars6.substring(1, 7)); // ello w

// substr(start,length)
let chars7 = "Javascript";
console.log(chars7.substr(0, 4)); // Java

// toLowerCase()
let chars8 = "Kimono";
console.log(chars8.toLowerCase()); // kimono

// toUpperCase()
console.log(chars8.toUpperCase()); // KIMONO

// concat()
let chars9 = "Vinh";
let chars10 = "Phạm";
let resuilt = chars9.concat(" " + chars10);
console.log(resuilt);

// replace() -> dùng /text/i -> để không phân biệt hoa thường
let text1 = "Please visit Microsoft!";
let newText = text1.replace(/MICROSOFT/i, "W3Schools");
console.log(newText); // Please visit W3Schools!

// replaceAll() -> does not work in Internet Explorer.
let text2 = "Many money ís now";
let relT = text2.replaceAll("Many money ís now", "Vinh nè");
console.log(relT);
