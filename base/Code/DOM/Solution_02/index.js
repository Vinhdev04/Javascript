const btn = document.getElementsByTagName("input");
console.log(btn);

// Duyệt qua các nút xóa đã tồn tại
for (let i = 0; i < btn.length; i++) {
  if (btn[i].value === "Delete") {
    btn[i].addEventListener("click", function () {
      const parent = this.parentElement.parentElement;
      parent.remove();
      updateIndex(); // Cập nhật lại số thứ tự
    });
  }
}

const btnAddFirst = document.querySelector("#btn_add_first");
const btnAddEnd = document.querySelector("#btn_add_end");
const btnRemoveFirst = document.querySelector("#btn_remove_first");
const btnRemoveEnd = document.querySelector("#btn_remove_end");
const table = document.querySelector("table");

// Hàm tạo hàng mới
function createRow(index, title) {
  const newRow = document.createElement("tr");
  const newCellIndex = document.createElement("td");
  const newCellTitle = document.createElement("td");
  const newCellDelete = document.createElement("td");
  const deleteButton = document.createElement("input");

  newCellIndex.innerHTML = index;
  newCellTitle.innerHTML = title;
  deleteButton.type = "button";
  deleteButton.value = "Delete";

  deleteButton.addEventListener("click", function () {
    newRow.remove();
    updateIndex(); // Cập nhật lại số thứ tự
  });

  newRow.appendChild(newCellIndex);
  newRow.appendChild(newCellTitle);
  newCellDelete.appendChild(deleteButton);
  newRow.appendChild(newCellDelete);

  return newRow;
}

// Hàm cập nhật số thứ tự
function updateIndex() {
  const rows = table.rows;
  for (let i = 0; i < rows.length; i++) {
    rows[i].cells[0].innerHTML = i + 1; // Cập nhật số thứ tự
  }
}

// Insert First
btnAddFirst.addEventListener("click", function () {
  const newRow = createRow(table.rows.length + 1, "New First Item");
  table.insertBefore(newRow, table.firstChild);
  updateIndex(); // Cập nhật lại số thứ tự
});

// Insert End
btnAddEnd.addEventListener("click", function () {
  const newRow = createRow(table.rows.length + 1, "New Last Item");
  table.appendChild(newRow);
  updateIndex(); // Cập nhật lại số thứ tự
});

// Remove First
btnRemoveFirst.addEventListener("click", function () {
  if (table.rows.length > 0) {
    table.deleteRow(0); // Xóa hàng đầu tiên
    updateIndex(); // Cập nhật lại số thứ tự
  }
});

// Remove End
btnRemoveEnd.addEventListener("click", function () {
  if (table.rows.length > 0) {
    table.deleteRow(table.rows.length - 1); // Xóa hàng cuối cùng
    updateIndex(); // Cập nhật lại số thứ tự
  } else {
    alert("Table is empty!"); // Hiển thị thông báo nếu table đang rong
  }
});
