function highlight([firtContent, ...rest], ...value) {
  // console.log(firtContent);
  // console.log(rest);
  // console.log(value);
  return value
    .reduce(
      (acc, current) => [...acc, `<span>${current}</span>`, rest.shift()],
      [firtContent]
    )
    .join("");
}

let brand = "V2";
let course = "React";
const html = highlight`Programming with ${course} with ${brand}`;
console.log(html);
