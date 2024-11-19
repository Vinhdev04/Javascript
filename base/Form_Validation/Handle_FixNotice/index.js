// # Hàm Validator
function Validator(options) {
  function validate(inputElement, rule) {
    // value: inputElement.value
    // check function: rule.check

    // hàm thực hiện validate
    const errorMessage = rule.check(inputElement.value);
    const errorElement = inputElement.parentElement.querySelector(
      options.errorSelector
    ); // sửa đây

    if (errorMessage) {
      errorElement.innerHTML = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerHTML = "";
      inputElement.parentElement.classList.remove("invalid");
    }
  }

  // lấy element form cần validate
  const formElement = document.querySelector(options.form);
  console.log(options.rules);

  if (formElement) {
    // Xử lý khi form submit
    formElement.onsubmit = function (e) {
      let isValid = true;

      options.rules.forEach(function (rule) {
        const inputElement = formElement.querySelector(rule.selector);

        if (inputElement) {
          const errorMessage = rule.check(inputElement.value);
          const errorElement = inputElement.parentElement.querySelector(
            options.errorSelector
          );

          if (errorMessage) {
            errorElement.innerHTML = errorMessage;
            inputElement.parentElement.classList.add("invalid");
            isValid = false;
          } else {
            errorElement.innerHTML = "";
            inputElement.parentElement.classList.remove("invalid");
          }
        }
      });

      // Ngừng submit nếu có lỗi
      if (!isValid) {
        e.preventDefault();
      }
    };

    // Xử lý khi người dùng blur khỏi input
    options.rules.forEach(function (rule) {
      const inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule); // callback
        };

        // Xử lý khi người dùng nhập vào input -> hide message lỗi
        inputElement.oninput = function () {
          const errorElement = inputElement.parentElement.querySelector(
            options.errorSelector
          );
          // clear data and remove class "invalid"
          errorElement.textContent = "";
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}

// # Hàm tạo và định nghĩa rules
// # Nguyên tắc các rules:
// 1. Khi có lỗi -> trả ra message lỗi
// 2. Khi hợp lệ -> trả ra undefined hoặc ko trả gì

Validator.isRequired = function (selector, message) {
  return {
    selector,
    // # check required
    check: function (value) {
      return value.trim() ? undefined : message || "Vui lòng nhập đủ thông tin";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector,
    // # check email
    check: function (value) {
      const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return regex.test(value)
        ? undefined
        : message || "Vui lòng nhập email hợp lệ";
    },
  };
};

Validator.isMinLength = function (selector, min, message) {
  return {
    selector,
    // # check email
    check: function (value) {
      return value.length >= min
        ? undefined
        : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
    },
  };
};

Validator.isConfirm = function (selector, getConfirm, message) {
  return {
    selector,
    check: function (value) {
      return value === getConfirm()
        ? undefined
        : message || "Giá trị không trùng khớp với nhau";
    },
  };
};
