$(document).ready(function () {
    // Kiểm tra khi người dùng rời khỏi trường Tên đăng nhập
    $('#username').blur(function () {
      validateUsername();
    });

    // Kiểm tra khi người dùng rời khỏi trường Email
    $('#email').blur(function () {
      validateEmail();
    });

    // Kiểm tra khi người dùng rời khỏi trường Mật khẩu
    $('#password').blur(function () {
      validatePassword();
    });

    // Kiểm tra khi người dùng rời khỏi trường Xác nhận mật khẩu
    $('#confirmPassword').blur(function () {
      validateConfirmPassword();
    });

    // Xử lý khi submit form
    $('#registerForm').submit(function (event) {
      event.preventDefault();
      // Kiểm tra các điều kiện trước khi gửi form
      var username = $('#username').val();
      var email = $('#email').val();
      var password = $('#password').val();
      var confirmPassword = $('#confirmPassword').val();
      var emailRegex = /^\S+@\S+\.\S+$/;

      if (username === '') {
        $('#usernameError').text('Vui lòng nhập Tên đăng nhập');
        return;
      }

      if (email === '') {
        $('#emailError').text('Vui lòng nhập Email');
        return;
      } else if (!emailRegex.test(email)) {
        $('#emailError').text('Email không hợp lệ');
        return;
      }

      if (password === '') {
        $('#passwordError').text('Vui lòng nhập Mật khẩu');
        return;
      }

      if (confirmPassword === '') {
        $('#confirmPasswordError').text('Vui lòng nhập Xác nhận mật khẩu');
        return;
      } else if (confirmPassword !== password) {
        $('#confirmPasswordError').text('Mật khẩu không khớp');
        return;
      }

      // Hiển thị thông tin sau khi đăng ký thành công
      $('.success-message').show();
      $('#userInfo').text('Tên đăng nhập: ' + username + ', Email: ' + email);
      $('#userPassword').text(password); // Hiển thị mật khẩu
    });

    // Hàm kiểm tra Tên đăng nhập
    function validateUsername() {
      var username = $('#username').val();
      if (username === '') {
        $('#usernameError').text('Vui lòng nhập Tên đăng nhập');
      } else {
        $('#usernameError').text('');
      }
    }

    // Hàm kiểm tra Email
    function validateEmail() {
      var email = $('#email').val();
      var emailRegex = /^\S+@\S+\.\S+$/;
      if (email === '') {
        $('#emailError').text('Vui lòng nhập Email');
      } else if (!emailRegex.test(email)) {
        $('#emailError').text('Email không hợp lệ');
      } else {
        $('#emailError').text('');
      }
    }

    // Hàm kiểm tra Mật khẩu
    function validatePassword() {
      var password = $('#password').val();
      if (password === '') {
        $('#passwordError').text('Vui lòng nhập Mật khẩu');
      } else {
        $('#passwordError').text('');
      }
    }

    // Hàm kiểm tra Xác nhận mật khẩu
    function validateConfirmPassword() {
      var confirmPassword = $('#confirmPassword').val();
      var password = $('#password').val();
      if (confirmPassword === '') {
        $('#confirmPasswordError').text('Vui lòng nhập Xác nhận mật khẩu');
      } else if (confirmPassword !== password) {
        $('#confirmPasswordError').text('Mật khẩu không khớp');
      } else {
        $('#confirmPasswordError').text('');
      }
    }
  });

  $(document).ready(function () {
    $('#loginUsername').blur(function () {
      validateUsername();
    });
    $('#loginPassword').blur(function () {
      validatePassword();
    });
    $('#loginForm').submit(function (event) {
      event.preventDefault();
      // Kiểm tra các điều kiện trước khi gửi form
      var username = $('#loginUsername').val();
      var password = $('#loginPassword').val();

      if (username === '') {
        $('#loginUsernameError').text('Vui lòng nhập Tên đăng nhập');
        return;
      }

      if (password === '') {
        $('#loginPasswordError').text('Vui lòng nhập Mật khẩu');
        return;
      }

      alert('Đăng nhập thành công!');
      $('#loginModal').modal('hide');
    });

    // Hàm kiểm tra Tên đăng nhập
    function validateUsername() {
      var username = $('#loginUsername').val();
      if (username === '') {
        $('#loginUsernameError').text('Vui lòng nhập Tên đăng nhập');
      } else {
        $('#loginUsernameError').text('');
      }
    }

    // Hàm kiểm tra Mật khẩu
    function validatePassword() {
      var password = $('#loginPassword').val();
      if (password === '') {
        $('#loginPasswordError').text('Vui lòng nhập Mật khẩu');
      } else {
        $('#loginPasswordError').text('');
      }
    }
  });
