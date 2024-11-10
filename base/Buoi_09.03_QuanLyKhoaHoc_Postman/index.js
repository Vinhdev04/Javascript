// const courses = document.querySelector("#list-courses");
const keyAPI = "http://localhost:3000/courses";

// Bắt đầu quá trình gọi API và render dữ liệu
function startAPI() {
  getCourses(function (coursesData) {
    renderCourses(coursesData);
    createForm();
  });
}
startAPI();

// Lấy dữ liệu các khóa học từ API
function getCourses(callback) {
  fetch(keyAPI) // Giả sử `keyAPI` là URL hoặc API endpoint hợp lệ
    .then((response) => {
      if (!response.ok) {
        throw new Error("Lỗi khi lấy dữ liệu");
      }
      return response.json();
    })
    .then(callback)
    .catch((error) => {
      console.log(error);
      // Hiển thị thông báo lỗi cho người dùng
      document.querySelector("#list-courses").innerHTML =
        "<p>Không thể tải khóa học. Vui lòng thử lại sau.</p>";
    });
}

// Render danh sách khóa học lên trang web
function renderCourses(coursesData) {
  // Đảm bảo rằng coursesData là một mảng
  if (!Array.isArray(coursesData)) {
    console.log("Dữ liệu không hợp lệ");
    return;
  }

  const courseItems = coursesData.map(function (course) {
    return `
      <li class="course-item-${course.id}">
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick="deleteCourse(${course.id})">Xóa</button>
      </li>
    `;
  });

  const coursesList = document.querySelector("#list-courses");
  coursesList.innerHTML = courseItems.join(""); // Kết hợp mảng thành một chuỗi
}

// Tạo form để thêm khóa học mới
function createForm() {
  const btnAdd = document.querySelector("#btn-add");
  btnAdd.onclick = function () {
    let name = document.querySelector('input[name="name"]').value;
    let desc = document.querySelector('input[name="description"]').value;
    const formData = {
      name: name,
      description: desc,
    };
    createCourse(formData);
  };
}

// POST: Tạo khóa học mới
function createCourse(data, callback) {
  const option = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(keyAPI, option) // Giả sử `keyAPI` là URL hoặc API endpoint hợp lệ
    .then((response) => {
      if (!response.ok) {
        throw new Error("Lỗi khi tạo khóa học");
      }
      return response.json();
    })
    .then(callback)
    .catch((error) => {
      console.log(error);
      // Hiển thị thông báo lỗi cho người dùng
      document.querySelector("#list-courses").innerHTML =
        "<p>Không thể tải khóa học. Vui lòng thử lại sau.</p>";
    });
}

// DELETE: Xóa khóa học
function deleteCourse(id) {
  // Cấu hình cho phương thức DELETE
  const option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(keyAPI + "/" + id, option) // URL API với ID khóa học cần xóa
    .then((response) => {
      if (!response.ok) {
        throw new Error("Lỗi khi xóa khóa học");
      }
      // Nếu xóa thành công, tìm và xóa phần tử trong DOM
      const courseItem = document.querySelector(".course-item-" + id);
      if (courseItem) {
        courseItem.remove();
      }
    })
    .catch((error) => {
      console.log(error);
      // Hiển thị thông báo lỗi cho người dùng
      document.querySelector("#list-courses").innerHTML =
        "<p>Không thể xóa khóa học. Vui lòng thử lại sau.</p>";
    });
}
