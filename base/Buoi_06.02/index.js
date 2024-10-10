// DOM CSS: với các thuộc tính có dấu "-" thì bỏ dấu gạch ngang và viết hoa chữ cai sau dâu gạch (theo quy tắc camel). Ví dụ: font-size -> fontSize,...

//  Cú pháp thiết lập giá trị Ví dụ: document.getElementById("idName").style.propertyName = 'value';
const item = document.querySelector("h3");
console.log(item);
item.style.fontSize = "30px";
item.style.color = "blue";
item.style.backgroundColor = "orange";

// Cú pháp lấy giá trị: document.getElementById("idName").style.propertyName;
