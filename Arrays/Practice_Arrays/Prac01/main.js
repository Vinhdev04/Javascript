// 1. Bài tập với Array toString():
//   Yêu cầu: Cho một mảng chứa các số nguyên [1, 2, 3, 4, 5]. Hãy chuyển mảng này thành  một chuỗi bằng cách sử dụng phương thức toString().  -> Kết quả mong muốn: "1,2,3,4,5"

const arr1 = [1, 2, 3, 4, 5];
console.log(typeof arr1); // object
console.log(Array.isArray(arr1)); // true
arr2 = arr1.toString();
console.log(typeof arr2); // string

// 2. Bài tập với Array join():
//   -> Yêu cầu: Cho một mảng chứa tên các môn học ['Math', 'Science', 'History']. Hãy tạo một chuỗi kết hợp các môn học bằng dấu phẩy và khoảng trắng. =>  Kết quả mong muốn: "Math, Science, History"
const subjects = ["Math", "Science", "History"];
console.log(subjects.join(", ")); // "Math, Science, History"

// 3. Bài tập với Array pop() và Array push():
//   -> Yêu cầu: Cho một mảng chứa tên các học sinh ['Alice', 'Bob', 'Charlie']. Hãy thực hiện việc loại bỏ học sinh cuối cùng và thêm một học sinh mới vào mảng. => Kết quả mong muốn sau khi loại bỏ và thêm: ['Alice', 'Bob', 'David']
let students = ["Alice", "Bob", "David"];
// xóa students cuối:
console.log(students.pop()); // delete['David']

// thêm sutdents mới vào cuối:
console.log(students.push("Vinh"));
console.log(students); // [Alice Bob Vinh]

// 4. Bài tập với Array shift() và Array unshift():
//   -> Yêu cầu: Cho một mảng chứa tên các quốc gia ['USA', 'Canada', 'Mexico']. Hãy thực hiện việc loại bỏ quốc gia đầu tiên và thêm một quốc gia mới vào đầu mảng. => Kết quả mong muốn sau khi loại bỏ và thêm: ['Brazil', 'Canada', 'Mexico']
let countries = ["USA", "CANADA", "MEXICO"];
// xóa countries đàu:
console.log(countries.shift()); // delete [USA]
console.log(countries); // [CANADA,MEXICO]

// thêm countries mới vào đầu:
console.log(countries.unshift("Potugar"));
console.log(countries); // [Porugar, CANNADA, MEXICO]

// 5. Bài tập với Array splice():
//   Yêu cầu: Cho một mảng chứa tên các môn học ['Math', 'Science', 'History']. Hãy thay thế một phần của mảng bằng một môn học mới (ví dụ: thay thế ‘Science’ bằng ‘Literature’).  =>  Kết quả mong muốn sau khi thay thế: ['Math', 'Literature', 'History']

let subjects2 = ["Math", "Science", "History"];
console.log(subjects2.splice(1, 1, "Literature")); // ["Science"]
console.log(subjects2); // ["Math", "Literature", "History"]
