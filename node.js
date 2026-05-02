const { log } = require('console');
const fs=require('fs');
const http=require('http');
const url=require('url');

//server
const server  = http.createServer((req,res)=>{
    //console.log(req.url);
    const pathName = req.url;
    if(pathName==='/' || pathName==='/overview'){
        res.end('This is the Overview');
    }else if(pathName === '/product'){
        res.end('This is the product');
    }else if(pathName==='/api'){
        
        res.end('his is api');
    }else{
        res.end('page not found');
    }
    
    //res.end('hello client');
});
server.listen(8000,'127.0.0.1',()=>{
    console.log('listening to request to 8000');
});