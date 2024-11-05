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
