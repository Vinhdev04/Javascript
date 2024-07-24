// Do while loop
let isSuccess = false;
let i = 0;
do {
  console.log("Bạn đã nạp thẻ lần " + i);
  i++;

  // Gỉa định thành công
  if (true) {
    isSuccess = true;
  }
} while (!isSuccess && i <= 3);
