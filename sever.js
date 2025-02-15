const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port to listen on
const PORT = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response header to HTML
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Read the HTML file
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
        } else {
            // Send the HTML file as the response
            res.end(data);
        }
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
