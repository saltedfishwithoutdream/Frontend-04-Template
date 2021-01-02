let http = require('http')

http.createServer(function(request, response){
    console.log(request.headers)
    request.on('data', chunk => {
        console.log(chunk)
    })
    request.on('end', chunk => {
        console.log('success')
    })

}).listen(8082);