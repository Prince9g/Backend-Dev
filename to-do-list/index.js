const express = require('express');
const server = express();
const Create = require('./controller/createTask');
// server.use(express.static('public'));
server.use(express.json());

// Route to serve index.html
server.get('/index', (request, response) => {
    response.sendFile(path.join(__dirname, 'to-do-list', 'dist', 'index.html'));
});

server.post('/', Create.addTask);

server.delete('/', Create.deleteTask);

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});