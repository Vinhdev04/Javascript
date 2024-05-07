### Toán tử ++ và -- trong javascript:


## Toán tử ++ :
+ Với ++ làm tiền tố (prefix):
- Ví dụ: a = 6 -> ++a = 7 <-> a = a+1

+ Với ++ làm hậu tố (postfix):
- Ví dụ: a = 6 -> a++ = 7 <-> a = a+1

## Toán tử -- :
+ Với -- làm tiền tố (prefix):
- Ví dụ: a = 5 -> --a = 5 <-> a = a-1



+ Với -- làm hậu tố (postfix):
- Ví dụ: a = 5; -> a-- = 4 <-> a = a-1


### Ưu tiên tính toán Postfix, Prefix:
- Step 1: Prefix
- Step 2: Các phép toán còn lại
- Step 3: Gán giá trị cho biến bên trái dấu bằng
- Step 4: Tính Postfix

1. Ví dụ: x = 1, y = 2, z = x++ - ++y + 1. Tính x,y,z

-> Ta có:
+ Prefix: ++y , y=2 -> ++y = 3
+ x = 1, y = 3, => 1 - 3 + 1 = 1
+ z = 1 -3 + 1 => z = -1
+ x++ => x = 2
