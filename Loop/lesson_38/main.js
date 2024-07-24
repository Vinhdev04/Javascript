var arr1 = [
  [1, 2],
  [3, 4, 5],
  [6, 7],
];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1[i].length; j++) {
    console.log(arr1[i][j]);
  }
}

for (let element in arr1) {
  for (let value in arr1[element]) {
    console.log(arr1[element][value]);
  }
}

for (let key of arr1) {
  for (let valueX of key) {
    console.log(valueX);
  }
}
