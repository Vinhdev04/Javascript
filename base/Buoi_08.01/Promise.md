### -------------- Promise in JS --------------

## Promise

-> Promise sinh ra để giải quyết cho vấn đề "callback hell"
-> Callback hell -> có nhiều hàm lồng nhau -> gây khó chịu
-> Nguyên nhân gây ra "callback hell" -> để chạy công việc b thì cần công việc a hoàn thành,...

-> Promise có cách viết đơn giản hơn callback
-> mỗi hàm nằm trên một dòng

## Syntax Promise:

var promise = new Promise((resolve,reject)=> {
// resolve() -> nếu thành công chạy vào hàm này
// reject() -> nếu thất bại chạy vào hàm này
});

promise
.then((success) =>{
// success
// code
})
.catch((error) =>{
// failure
// code
})
.finally(()=>{
// automatically
})

### Trạng thái của Promise

# Pending:

-> Khi promise đang chạy thì sử ở lại trạng thái này -> kết quả là "undefined"

# Fulfilled:

-> Khi promise đã chạy xong thì sử ở trạng thái này -> kết quả là "value"

# Rejected:

-> Khi promise bị lỗi thì sẻ ở trạng thái này -> kết quả "object" lỗi

### Promise.all

-> Promise.all -> giúp cho các promise được thức thi song song với nhau, tổng thời gian chạy cảu các chương trình chỉ bằng thời gian chạy cảu promise chạy lâu nhất

### Syntax Promise.all

Promise.all([promise1,promise2,...])
.then(([success1,success2])=> {
// code
})
.catch((error)=>{
// code
})
.finally(()=>{
// auto
})

## Lưu ý khi sử dụng Promise.all

-> Nếu một trong các promise bị reject -> chương trình sẻ chạy vào catch ngay lập thức

# Ứng dụng của Promise.all

- Gửi nhiều mail đồng thời: Cách thông thường dùng vòng lặp để lặp từng mail xong gửi đi -> dùng promise gửi song song các email
  VD: 1 mail -> 1s => 10 mail -> 10s
  Promise.all : 1s-> 10 mail

  ->Lấy nhiều API: Gỉa sử muốn lấy nhiều API và các API độc lập với nhau thì dùng promise.all -> giảm thời gian
