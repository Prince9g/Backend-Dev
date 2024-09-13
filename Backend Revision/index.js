const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("server started");
    res.setHeader('Dummy', 'DummyValue');
    res.end('hello');
})

server.listen(8080);