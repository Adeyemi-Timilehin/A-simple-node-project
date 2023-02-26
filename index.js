var http = require('http');
var url = require('url');
var fs = require('fs');
const console = require('console');

http.createServer(function (req, res) {
  
  var q = url.parse(req.url, true);

   q=q.pathname

  var filename = "." + q;
if(q==='/'){
    fs.readFile('index.html',(err,data)=>{

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    }
else {
    fs.readFile(filename+'.html', function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          
          return res.end("<h1>404 Not Found</h1>");
        } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      })
}
  ;
}).listen(8080);