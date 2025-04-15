// Giả lập dữ liệu người dùng đã đăng ký (bài 1)
const users = [
    { email: "nhathaocute2k6@gmail.com", password: "123456789" }
];

// Xử lý form
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    if (email === "") {
        alert("Email không được bỏ trống!");
        return;
    }

    // Kiểm tra email + password
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert("Đăng nhập thành công!");
        window.location.href = "home.html";  // Giả định trang chủ là home.html
    } else {
        alert("Email hoặc mật khẩu không đúng!");
    }
});
