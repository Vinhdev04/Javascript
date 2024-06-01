// Bài tập 4: Viết chương trình : Tìm những số chia hết cho 3 từ 10 -> 50

let count = 0;
for (let i = 10; i <= 50; i++) {
  if (i % 3 == 0) {
    count++;
    console.log(i);
  }
  console.log(count);
}
