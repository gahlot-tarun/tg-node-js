const http = require('http');
const app = require('./app');
// console.log('HEllo');
// console.log(app.a());

http.createServer((req,resp) =>{
    resp.write(app.a());
    resp.end();
}

).listen(4500);
