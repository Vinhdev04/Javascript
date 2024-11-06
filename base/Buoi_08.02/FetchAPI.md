### -------------- Fetch API in JS --------------

## Fetch API

-> Là 1 phương thức, hàm dùng để gọi lên serve thông qua API lấy dữ liệu từ trên serve trả về
-> API: là một url() cho phép FE giao tiếp với BE
-> Fetch API mang bản chất của 1 Promise
-> Sau khi nhận dữ liệu trả về từ server , cần convert từ json -> js

## Syntax Promise:

fetch('https://google.com')
.then((response)=>{
return response.json();
})
.then((data)=>{
console.log(data)
})
.catch((error)=>{
console.log(error)
})

## Trong đó:

- phương thức fetch() dùng để gửi yêu cầu lên server thông qua API
- phương thức then() được thức thi sau khi có phản hồi từ máy chủ trả về
- phương thức catch() được thực thi khi không có phản hồi trả về từ máy chủ

## Cá bước để lấy data:

- Bước 1: truy cập vào API
- Bước 2: Lấy data
- Bước 3: In data ra màn hình

## API tham khảo:

# https://dummyjson.com/docs/products#products-category_list
