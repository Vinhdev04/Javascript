/*
  Array method():
  1. forEach(function)
  2. map(function)
  3. filter(function)
  4. reduce(function)
  5. sort(function)
  6. reduceRight(function)
  7. some(function)
  8. every(function)
  9. find(function)
  10. findIndex(function)
  11. includes(value)
  12. indexOf(value)
  13. flat()
  14. flatMap(function)

*/

let course = [
  { id: 1, name: "HTML", coin: 1000 },
  { id: 2, name: "CSS", coin: 1500 },
  { id: 3, name: "Javascript", coin: 0 },
  { id: 4, name: "ReactJS", coin: 2500 },
  { id: 5, name: "NodeJS", coin: 3000 },
  { id: 6, name: "JS", coin: 0 },
];

// forEach() method: duyệt qua mảng và thực thi hàm callback cho từng phần tử. -> việc sử dụng return và break sẻ ko có tác dụng hoặc gây lỗi
console.log("-----------------------------------");
course.forEach(function (courses, index) {
  console.log(index, courses);
});
console.log("-----------------------------------");

// every(function ()) -> Kiểm tra tất cả các phần tử của mảng phải thỏa mãn 1 điều kiện bất kì nào đó -> true / false
let isFree = course.every(function (course, index) {
  console.log(`Đang kiểm tra lần thứ ${index}`);
  return course.coin === 0;
});
console.log(`Kết quả: ${isFree}`); // false
console.log("-----------------------------------");

// some(function ()) -> Kiểm một trong các phần tử của mảng phải thỏa mãn 1 điều kiện bất kì nào đó -> true / false
let isChecked = course.some(function (course, index) {
  console.log(`Đang kiểm tra lần thứ ${index}`);
  return course.coin === 0;
});
console.log(`Kết quả : ${isChecked}`); // true
console.log("-----------------------------------");

// find(function ()) -> Tìm và trả về phần tử đầu tiên của mảng thỏa mãn điều kiện -> undefined nếu không tìm thấy. Và luôn trả về 1 phần tử tìm thấy trong số các phần tử trùng nhau
let isNameCourse = course.find(function (course, index) {
  console.log(`Đang tìm tại vị trí thứ: ${index}`);
  return course.name === "Javascript";
});

console.log(isNameCourse);
console.log(`Kết quả:   ${isNameCourse}`);

console.log("-----------------------------------");
