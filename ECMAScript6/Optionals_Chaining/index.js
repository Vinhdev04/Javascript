// TODO: Optional Chaining  (?.)
// 1. 1. Truy cập thuộc tính trong đối tượng lồng nhau
const user = {
  profile: {
    name: "John",
    address: {
      city: "New York",
    },
  },
};

console.log(user.profile?.address?.city); // "New York"
console.log(user.profile?.contact?.phone); // undefined (không lỗi)
/* Ở ví dụ trên, user.profile?.address?.city truy cập 
      thuộc tính city của address.
      Nếu profile hoặc address là null hoặc undefined,
        nó sẽ trả về undefined thay vì gây lỗi.
*/

// 2. Gọi phương thức
const person = {
  greet() {
    return "Hello!";
  },
};

console.log(person.greet?.()); // "Hello!"
console.log(person.farewell?.()); // undefined (không lỗi)
/*
  Ở đây, person.greet?.() chỉ gọi phương thức greet nếu nó tồn tại.
    Nếu farewell không tồn tại, nó sẽ không gây lỗi và trả về undefined.
*/

// 3. Truy cập phần tử trong mảng
const items = [{ name: "Apple" }, { name: "Banana" }];

console.log(items?.[1]?.name); // "Banana"
console.log(items?.[3]?.name); // undefined (không lỗi)

// 4. Optional Chaining với hàm
const getUserData = (user) => {
  return user?.data?.fetchDetails?.();
};

const user1 = { data: { fetchDetails: () => "Details" } };
const user2 = { data: null };

console.log(getUserData(user1)); // "Details"
console.log(getUserData(user2)); // undefined (không lỗi)

// 5. Kiểm tra null và undefined
// Cách cũ:
if (user && user.profile && user.profile.address) {
  console.log(user.profile.address.city);
}

// Nên dùng:
console.log(user?.profile?.address?.city); // "New York" hoặc undefined

/*
  Không ném lỗi: Optional chaining chỉ trả về undefined 
    khi gặp null hoặc undefined.  
    Điều này đôi khi có thể ẩn đi các lỗi trong mã của bạn.
  Không hỗ trợ trong các trình duyệt cũ: Optional chaining
    được giới thiệu trong ECMAScript 2020 (ES11), 
    vì vậy bạn có thể cần sử dụng các công cụ như Babel để hỗ  trợ các trình duyệt cũ.
  Hiệu suất: Mặc dù optional chaining nói chung là rất hiệu quả,
    nhưng việc kiểm tra null hay undefined có thể ảnh hưởng đến hiệu suất 
    trong một số tình huống.
    Tuy nhiên, sự ảnh hưởng này thường là không đáng kể trong hầu hết các trường hợp.
 */
