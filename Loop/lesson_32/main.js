let input = Number(prompt("Enter a number: "));
let count = 0;
for (let i = 0; i <= input; i++) {
  console.log(i);
  count++;
}

console.log(`Đếm: ${count}`);

var subjects = [
  "Javascript",
  "Html",
  "Css",
  "Typescript",
  "Reacts",
  "Angular",
  "Sass",
];

var subLength = subjects.length;
for (let i = 0; i < subLength; i++) {
  console.log(`Subject: ${subjects[i]}`);
}
