const http = require('http')
const fs = require('fs')
const myserver = http.createServer((req, res)=>{
    var log = `${req.header} : ${req.method} : ${req.url} : ${new Date()}\n\n 
                request headers : ${JSON.stringify(req.headers)}\n\n 
                request body : ${req.body}\n\n
                ------------------------------------------------------\n\n`;
    fs.appendFile('log.txt', log, (err, data)=>{
        if(err) throw err;
        else switch(req.url){
            case '/':
                res.end('Home page');
                break;
            case '/about':
                res.end('About page');
                break;
            case '/contact':
                res.end('Contact page');
                break;
            default:
                res.end('404 page not found');
                break;
        } 
    });
    // fs.appendFile(log.txt, , (err)=>{
    //     if(err) throw err;
    // });
    
});

myserver.listen(8081, ()=>{
    console.log('Server is listening on port 8081');
    
});