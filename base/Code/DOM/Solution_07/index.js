/*
  Các bạn hãy viết hàm render có 1 tham số courses, hàm render sẽ thêm các item của mảng courses để tạo thành 1 danh sách các khóa học trên giao diện.

Ví dụ: Với mảng var courses = ['ReactJS', 'AngularJS', 'VueJS'] sẽ thu được kết quả:

ReactJS
AngularJS
VueJS
Gợi ý:

Sử dụng phương thức map kết hợp với join để tạo chuỗi HTML từ mảng courses.
Gán chuỗi HTML vừa tạo vào thuộc innerHTML của thẻ ul giống bài trước nhé.
 */

var courses = ["HTML & CSS", "Javascript", "PHP", "Java"];
function render(courses) {
  const listItems = document.querySelector(".courses-list");
  console.log(listItems);
  courses.map((item) => {
    const list = document.createElement("li");
    list.innerText = item;
    listItems.append(list);
  });
}
render(courses);

function render(courses) {
  const listItems = document.querySelector(".courses-list");
  console.log(listItems);
  courses.forEach((item) => {
    const list = document.createElement("li");
    list.innerText = item;
    listItems.append(list);
  });
}
render(courses);
