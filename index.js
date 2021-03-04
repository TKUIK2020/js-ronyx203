const http = require("http");
const fs = require("fs");
const generateImage = require('random-image-creator');

http.createServer(function(request, response){
console.log(`Запрошенный адрес: ${request.url}`);
const img = generateImage(280,400)
response.setHeader("Content-Type", "text/html");
response.end("<img src='"+img+"'>");

}).listen(8888);
