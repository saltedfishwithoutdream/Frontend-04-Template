const http = require('http')

http.createServer((req, res) => {
    let body = []
    req.on('error', (err) => {
        console.log('=====>')
        console.error(err)
    }).on('data', (chunk) => {
        console.log('chunk', chunk)
        body.push(chunk)
    }).on('end', () => {
        body = Buffer.concat(body).toString()
        console.log('body:', body)
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(
`<html lang="en">
<head>
    <title>Document</title>
    <style>
        body div #myid {
            width: 100px;
            background-color: #ff5000;
        }
        body div img {
            width: 30px;
            background-color: #ff1111;
        }
    </style>
</head>
<body>
    <div>
        <img id="myid"/>
        <img />
    </div>
</body>
</html>
`)
    })
}).listen(8080)

console.log('server started')