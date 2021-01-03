let http = require('http')
let https = require('https')
// let fs = require('fs')
let unzipper = require('unzipper')
let qs = require('querystring')
const { info } = require('console')


// 2.auth路由：接受code，用code+client_id+client_secret换token
function auth (request, response) {
    let query = qs.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1])
    getToken(query.code, function (info) {
        console.log(info)
        // response.write(JSON.stringify(info))
        response.write(`<a href="http://localhost:8083/?token=${info.access_token}">publish</a>`)
        response.end()
    })
}

function getToken (code, callback) {
    let request = https.request({
        hostname: "github.com",
        path: `/login/oauth/access_token?code=${code}&client_id=Iv1.c9643cc436d33d5a&client_secret=6c83b48af6db60bb41a750397f61ea4efbd07673`,
        port: 443,
        method: "POST"
    }, function (response) {
        let body = ''
        response.on('data', function (chunk) {
            body += chunk.toString()
        })

        response.on('end', function (chunk) { 
            callback(qs.parse(body))
        })
    });
    request.end();

}
// 4.publish路由：用token获取用户信息，检查权限，接受发布
function publish (request, response) {
    let query = qs.parse(request.url.match(/^\/publish\?([\s\S]+)$/)[1])
    console.log('publish------')
    console.log(query)

    getUser(query.token, (info) => {
        // if (info.login === 'saltedfishwithoutdream') {
        if (info) {
            // let outFile = fs.createWriteStream('../server/public/tmp.zip');
            // request.pipe(outFile)
            request.pipe(unzipper.Extract({path: '../server/public/'}))
            request.on('end', function () {
                response.end('success!')
            })
        }
    })
}

function getUser (token, callback) {
    
    let request = https.request({
        hostname: "api.github.com",
        path: `/user`,
        port: 443,
        method: "GET",
        headers: {
            Authorization: `token ${token}`,
            "User-Agent": 'toy-publish-linqi'
        }
    }, function (response) {
        let body = ''
        response.on('data', function (chunk) {
            body += chunk.toString()
        })

        response.on('end', function () {
            // 这里的body不完整，不知道是什么原因，可能是应为body太长的原因
            callback(qs.parse(body))
        })
    });
    request.end();
}

http.createServer(function(request, response){
    if (request.url.match(/^\/auth\?/)) {
        return auth(request, response)
    }
    if (request.url.match(/^\/publish\?/)) {
        return publish(request, response)
    }
    // let outFile = fs.createWriteStream('../server/public/tmp.zip');
    // request.pipe(outFile)
    // request.on('end', () => {
    //     outFile.end();
    //     response.end('success')
    // })

    // request.pipe(unzipper.Extract({path: '../server/public/'}))

}).listen(8082);