### Ép kiểu trong javascript:

## Đối với prompt():

-> mặc định dữ liệu nhập vào lẻ kiểu chuỗi -> string
=> Cần ép kiểu khi sử dụng để tính toán

## Trong javascript khi nhận dữ liệu vao bằng hàm prompt():
- Đối với phép cộng -> js hiểu là phép nối chuỗi
- Đối với các phép toán khác -> js cố chuyển đổi về số và thức hiện tính
- Nếu không chuyển được để tính -> kết quả sẻ là NaN (Not a Number)
  => Cần chú ý ép kiểu khi tính toán


## Ép kiểu  số nguyên:
-> parseInt()
=> Ép về kiểu số nguyên

## Ép kiểu số thực:
-> parseFloat()
=> Ép về kiểu số thực

## Kiểm tra kiểu dữ liệu của number():
-> typeof number

=> dữ nguyên đúng kiểu dữ liệu chứa cả parseInt và parseFloat
