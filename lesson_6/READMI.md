### Phân biệt toán tử so sánh "==" và "===" :

## toán tử "==" :

- Đối với việc so sánh cùng kiểu dữ liệu:
-> so sánh bình thường và ko quan tâm kiểu dữ liệu

- Đối với khác kiểu dữ liệu:
+ Ví dụ:
+ a = 5
+ b = "5"
-> js sẻ tuân theo Coercion(ép buộc) -> ép kiểu ngầm định
-> js sẻ Type Conversion -> chuyển đổi kiểu dữ liệu trước khi so sánh

=> Hạn chế sử dụng toán tử "==" để so sánh

## Toán tử "===" :
- Sử dụng toán tử "===" để so sánh khi quan tâm đến giá trị và kiểu dữ liệu
- Không tuân theo quy tắc Coercion(ép buộc) -> ko tuân theo ép kiểu ngầm định
- Không Type Conversion -> ko chuyển đổi kiểu dữ liệu ban đầu của chúng

=> Nên sử dụng toán tử "===" thay vì "=="



### Phân biệt toán tử "!=" và "!==" :

## Toán tử "!==" :
- Đối với việc so sánh cùng kiểu dữ liệu:
-> so sánh bình thường và ko quan tâm kiểu dữ liệu

- Đối với khác kiểu dữ liệu:
+ Ví dụ:
+ a = 5
+ b = "5"
-> js sẻ tuân theo Coercion(ép buộc) -> ép kiểu ngầm định
-> js sẻ Type Conversion -> chuyển đổi kiểu dữ liệu trước khi so sánh

=> Hạn chế sử dụng toán tử "==" để so sánh

## Toán tử "!==" :
- Sử dụng toán tử "!==" để so sánh khi quan tâm đến giá trị và kiểu dữ liệu
- Không tuân theo quy tắc Coercion(ép buộc) -> ko tuân theo ép kiểu ngầm định
- Không Type Conversion -> ko chuyển đổi kiểu dữ liệu ban đầu của chúng

=> Nên sử dụng toán tử "!==" thay vì "=="
