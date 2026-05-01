const fs=require('fs');
const http=require('http');



//server
const server  = http.createServer((req,res)=>{
    console.log(req);
    res.end('hello client');
});
server.listen(8000,'127.0.0.1',(()=>{
    console.log('listening to request to 8000');
}))






