const http = require('http')
const HTTP_PORT = 3000

const server = http.createServer((req, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end('Hello World!\n')
});

server.listen(HTTP_PORT, () => {
    console.log(`Server running at http://localhost:${HTTP_PORT}/`)
});