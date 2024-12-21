const http = require('http');
const fs = require('fs');
const path = require('netflix2.html');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // Set the default file to serve
    let filePath = path.join(__dirname, 'netflix2.html');
    let contentType = 'text/html';

    // Set the appropriate Content-Type for CSS files
    if (req.url === '/style.css') {
        filePath = path.join(__dirname, 'netflix2.css');
        contentType = 'text/css';
    }

    // Read the file from the filesystem
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
    server.listen(port, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});


