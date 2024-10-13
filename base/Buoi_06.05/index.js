// DOM Navigation -> dùng để quản lý thao tac với các thẻ html, thể hiện mối quan hệ "cha-con". Có các thuộc tính sau:
// parentNode: dùng để truy cập node cha của node được chỉ định trong DOM
// childNodes: dùng để truy cập tất cả các node con của một phần tử nhất định (Node con có thể là văn bản, chú thích,...) -> Output: NodeList [], có tính khoảng trắng
// firstElementChild: trả về node con đầu tiên của phần tử cha
// lastElementChild: trả về node con cuối cùng của phần tử cha
// nextElementSibling: trả về phần tử là node kế tiếp
// prevElementSibling: trả về phần tử là node trước đó
// nodeName: trả về tên một node

// 1. parentNode: dùng để truy cập node cha của node được chỉ định trong DOM
const childFirst = document.querySelector("#child-first");
console.log(childFirst);
console.log(childFirst.parentNode);
console.log(childFirst.parentNode.parentNode);

// 2. childNodes: dùng để truy cập tất cả các node con của một phần tử nhất định (Node con có thể là văn bản, chú thích,...) -> Output: NodeList []
console.log(childFirst.childNodes);
console.log(childFirst.parentNode.parentNode.childNodes);
console.log(childFirst.querySelectorAll(".box"));

// 3.  firstElementChild: trả về node con đầu tiên của phần tử cha
console.log(childFirst.firstElementChild);

// 4. lastElementChild: trả về node con cuối cùng của phần tử cha
console.log(childFirst.lastElementChild);

// 5. nextElementSibling: trả về phần tử là node kế tiếp
console.log(childFirst.nextElementSibling);

// 6. prevElementSibling: trả về phần tử là node trước đó
console.log(childFirst.previousElementSibling);

// 7. nodeName: trả về tên một node
console.log(childFirst.nodeName);
