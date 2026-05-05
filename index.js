const http= require('http');
const url=require('url');
const fs = require('fs');
const data=fs.readFileSync('./dev-data/data.json','utf-8');
const dataObj=JSON.parse(data);
const overview=fs.readFileSync('./templates/overview.html','utf-8');
const server = http.createServer((req,res)=>{
    const {pathname} = url.parse(req.url,true);
    if(pathname==='/' || pathname==="/overview"){
         res.end(overview);
    }else{
        res.end('not found');
    }
});
server.listen(8000,'127.0.0.1');
