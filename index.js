const http = require('http');
const fs = require('fs');
const path = require('path');

const basePath = __dirname;


const portNumber = 8080;

const server = http.createServer((req, res) => {
    console.log("Listening to port "+ portNumber);
    let filepath;
    if(req.url === "/")
        filepath = "/index.html";
    else if(req.url === "/about")
        filepath = "/about.html";
    else if(req.url === "/contact-me")
        filepath = "/contact-me.html";

    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(path.join(basePath, filepath || "/404.html"), (err, data) => {
        if(err)
            console.log("Error reading file!", err);
        res.end(data);
    });

});
server.listen(portNumber);