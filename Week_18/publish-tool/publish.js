let http = require('http')
let fs = require('fs')
let archiver = require("archiver")
let child_process = require('child_process')
let qs = require('querystring')

// 1.打开https://github.com/login/oauth/authorize
child_process.exec(`start https://github.com/login/oauth/authorize?client_id=Iv1.c9643cc436d33d5a`)

// 3.创建server，接受token，然后点击发布
http.createServer(function(request, response){
    let query = qs.parse(request.url.match(/^\/\?([\s\S]+)$/)[1])
    publish(query.token)
}).listen(8083);

function publish (token) {
    console.log('publish', token)
    let request = http.request({
        hostname: '127.0.0.1',
        port: 8082,
        method: 'POST',
        path: "/publish?token=" + token,
        headers: {
            'Content-Type': 'application/octet-stream'
        }
    }, response => {
        console.log(response)

    })

    
    const archive = archiver('zip', {
        zlib: { level: 9 }
    })
    
    archive.directory('./sample/', false)
    
    archive.finalize()
    
    
    archive.pipe(request)


}


/* let request = http.request({
    hostname: '127.0.0.1',
    // port: 8882,
    port: 8082,
    method: 'POST',
    headers: {
        'Content-Type': 'application/octet-stream',
        // "Content-Length": stats.size
    }
}, response => {
    console.log(response)

})

// let file = fs.createReadStream('./sample.html')


const archive = archiver('zip', {
    zlib: { level: 9 }
})

archive.directory('./sample/', false)

archive.finalize()

// archive.pipe(fs.createWriteStream('tmp.zip'))

archive.pipe(request)
 */

// file.pipe(request)

// file.on('end',  () => {request.end()})






