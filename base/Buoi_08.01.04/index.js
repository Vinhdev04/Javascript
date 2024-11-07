// Ví dụ thực tế Promise
const users = [
  { id: 1, name: "Dev" },
  { id: 2, name: "Tester" },
  { id: 3, name: "Customer" },
];
const comments = [
  { id: 1, user_id: 1, content: "Hey! Kiểm thử code dùm đi" },
  { id: 2, user_id: 2, content: "Vừa kiểm xong. Toàn bug :v" },
  { id: 3, user_id: 1, content: "Amen xinloi ..." },
];

const getUsers = new Promise(function (resolve) {
  resolve(users);
});

const getComments = new Promise(function (resolve) {
  resolve(comments);
});

const dataHTML = Promise.all([getUsers, getComments]);

const commentBlock = document.querySelector("#comment-block");
let li = "";

// Lấy dữ liệu users và comments, và hiển thị ra commentBlock theo cấu trúc: "Tên người đã viết: Nội dung bình luận"
dataHTML.then(function ([users, comments]) {
  comments.forEach(function (comment) {
    const userData = users.find(function (user) {
      return user.id === comment.user_id;
    });
    li += `<li>${userData.name}: ${comment.content}</li>`;
  });
  commentBlock.innerHTML = li;
});
