// Every() dùng duyệt tất cả các phần tử trong đó chỉ cần  thỏa mãn 1 điều kiện cụ thể

let members = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Vinh",
    age: 21,
    email: "pcv@example.com",
  },

  {
    id: 3,
    name: "Ancle",
    age: 24,
    email: "hea@example.com",
  },
];

console.log(members);
let isTrue = members.every(function (member, index) {
  console.log(index);
  return member.age >= 21;
});

console.log(isTrue);
