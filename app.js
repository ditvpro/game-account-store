const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Cấu hình middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));
app.use(express.static('public'));

// Dữ liệu tài khoản game (ví dụ)
const accounts = [
    { id: 1, username: 'gameAccount1', password: 'password1' },
    { id: 2, username: 'gameAccount2', password: 'password2' }
];

// Trang chủ
app.get('/', (req, res) => {
    res.send('<h1>Chào mừng đến với cửa hàng tài khoản game</h1><a href="/login">Đăng nhập</a>');
});

// Trang đăng nhập
app.get('/login', (req, res) => {
    res.send(`
        <form method="POST" action="/login">
            <input type="text" name="username" placeholder="Tên đăng nhập" required>
            <input type="password" name="password" placeholder="Mật khẩu" required>
            <button type="submit">Đăng nhập</button>
        </form>
    `);
});

// Xử lý đăng nhập
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Kiểm tra thông tin đăng nhập
    if (username === 'admin' && password === 'admin') {
        req.session.user = username;
        res.redirect('/products');
    } else {
        res.send('Thông tin đăng nhập không chính xác. <a href="/login">Thử lại</a>');
    }
});

// Trang sản phẩm
app.get('/products', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    let productList = accounts.map(account => `<li>${account.username} <a href="/buy/${account.id}">Mua</a></li>`).join('');
    res.send(`<h1>Sản phẩm</h1><ul>${productList}</ul>`);
});

// Mua tài khoản
app.get('/buy/:id', (req, res) => {
    const account = accounts.find(acc => acc.id == req.params.id);
    if (!req.session.user) {
        return res.redirect('/login');
    }
    res.send(`<h1>Mua tài khoản</h1><p>Tên tài khoản: ${account.username}</p><p>Mật khẩu: ${account.password}</p>`);
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
