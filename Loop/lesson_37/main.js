// Break && continue

for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i >= 5) {
    break;
  }
}

for (let x = 0; x <= 10; x++) {
  if (x % 2 === 0) {
    continue;
  }
  console.log(x);
}

let myPoint = [
  {
    name: "Vinh",
    point: 10,
  },
  {
    name: "Hà",
    point: 9,
  },
  {
    name: "Nam",
    point: 7,
  },
  {
    name: "Nhi",
    point: 6,
  },
  {
    name: "Vy",
    point: 5,
  },
  {
    name: "Ngoc",
    point: 4,
  },
  {
    name: "Minh",
    point: 3,
  },
  {
    name: "Thy",
    point: 2,
  },
  {
    name: "Thu",
    point: 1,
  },
  {
    name: "Hạ",
    point: 0,
  },
];

for (let i = 0; i < myPoint.length; i++) {
  if (myPoint[i].point > 8) {
    console.log("-------------------------------------------");
    console.log(
      `Học sinh ${myPoint[i].name} đạt học sinh giỏi với số điểm ${myPoint[i].point}`
    );
  } else if (myPoint[i].point < 8 && myPoint[i].point > 6) {
    console.log("-------------------------------------------");
    console.log(
      `Học sinh ${myPoint[i].name} đạt học sinh khá với số điểm ${myPoint[i].point}`
    );
  } else if (myPoint[i].point < 6 && myPoint[i].point > 3) {
    console.log(
      `Học sinh ${myPoint[i].name} đạt học sinh yếu với số điểm ${myPoint[i].point}`
    );
    console.log("-------------------------------------------");
  } else {
    break; // This terminates the loop if point is <= 3
  }
}
