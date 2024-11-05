// JSON

// Objects
let info = {
  fullName: "Pham Cong Vinh",
  mail: "pcv.fed@gmail.com",
  address: "123 Abc street",
};
console.log(info);

//1. JSON - objects
let infoJson = `{
                  "fullName": "Pham Cong Vinh",
                  "mail": "pcv.fed@gmail.com",
                  "address": "123 Abc street"
                }`;
console.log(infoJson);

// Convert JSON -> JAVASCRIPT
const infoToJs = JSON.parse(infoJson);
console.log(infoToJs);

// Convert JAVASCRIPT -> JSON
const infoToJson = JSON.stringify(infoToJs);
console.log(infoJson);

//2. JSON - Number
// let num = 5; // js
let num = "5";
console.log(num); // 5
console.log(typeof num); // string
console.log(JSON.parse(num)); // 5

//3. JSON - String
let str = `"Hello world!"`;
console.log(str);
console.log(typeof str); // string
console.log(JSON.parse(str));

//4. JSON - Boolean
let isTrue = `true`;
console.log(isTrue);
console.log(JSON.parse(isTrue));

//5. JSON - Array
let arr = `
            [
              { 
              "name": "John",
              "age": 30,
              "city": "New  York"
              },
              { 
              "name": "Jane",
              "age": 28,
              "city": "Los Angeles"
              },
              { 
              "name": "Tom",
              "age": 35,
              "city": "Chicago"
              }
            ]`;
console.log(arr);
console.log(JSON.parse(arr));
let result = "";
const listUser = JSON.parse(arr);

// Display result in HTML
listUser.forEach((item) => {
  console.log(item);
  result += `
  <div class ="user-item">
              <div class="name">${item.name}</div>
              <div class="age">${item.age}</div>
              <div class="city">${item.city}</div>
  </div>`;
});
console.log(result);

// Display result in HTML
const list = document.querySelector("#user");
list.innerHTML = result;

//6. JSON - Null
let nullValue = "null";
console.log(nullValue);
console.log(JSON.parse(nullValue));
