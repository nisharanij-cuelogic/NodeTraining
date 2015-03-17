
var http = require('http'),
    url = require('url') ;

http.createServer(function(request,response){
	var queryObject = url.parse(request.url,true).query;
  console.log(queryObject);

	response.writeHead(200,{'Content-type':'text/html'});
	response.write('Hello World');
	response.end('<h1>Hey</h1>');
}).listen(8080);

console.log('Listing at 80808 .......Hello World');
