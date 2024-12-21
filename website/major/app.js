const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Major Project</title>
    <style>
        body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f0f0; }
        .container { background: white; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); width: 300px; text-align: center; }
        h1 { margin-bottom: 20px; } label { display: block; margin: 10px 0 5px; } input { width: 100%; padding: 8px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 3px; }
        button, a { display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 3px; cursor: pointer; border: none; }
        button:hover, a:hover { background-color: #0056b3; }
    </style>
</head>
<body>
    <div class="container">
        <h1 id="page-title">Welcome</h1>
        <div id="login-link">
            <a href="#" onclick="showLogin()">PLEASE LOGIN HERE</a>
        </div>
        <form id="login-form" action="/login" method="POST" style="display: none;">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Login</button>
        </form>
    </div>
    <script>
        function showLogin() {
            document.getElementById('login-link').style.display = 'none';
            document.getElementById('page-title').textContent = 'Login';
            document.getElementById('login-form').style.display = 'block';
        }
    </script>
</body>
</html>
`;

app.get('/', (req, res) => res.send(html));

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.send(`
        <h1>Login Successful</h1>
        <p>Username: ${username}</p>
        <p>Password: ${password}</p>
        <a href="/" style="color:blue; text-decoration:underline;">Back to Home</a>
    `);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
