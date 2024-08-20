// Map () ->

let litsItem = [
  {
    id: 1,
    name: "Apple",
    price: 1000,
  },
  {
    id: 2,
    name: "Banana",
    price: 500,
  },
  {
    id: 3,
    name: "Orange",
    price: 700,
  },
  {
    id: 4,
    name: "Grape",
    price: 800,
  },
];

console.log(litsItem);
// trả về mảng mới
// trong map() phải là function -> neus ko sẻ báo lỗi
var newItems = litsItem.map(function (item, index, arr) {
  return {
    id: `Id Update: ${"0" + item.id}`,
    name: item.name,
    price: item.price,
    priceUpdate: `${item.price}`,
    index: index,
    arr: item,
  };
});
console.log(newItems);
