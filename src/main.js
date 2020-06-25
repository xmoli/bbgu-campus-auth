const http = require('follow-redirects').http
var iconv = require('iconv-lite'); 
const BufferHelper = require('bufferhelper')
const qs = require('querystring')
const trans = require('./trans')
const find_ip = require('./find_ip')
const ok = require('./ok');
const fs= require('fs');

const config = trans()

/*get ip */
http.get("http://" + config.prams.hostname + "/a70.htm", (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    })
    res.on('end', () => {
        const ip = find_ip(rawData)
        config.prams.wlanuserip = ip
        config.prams.ip = ip
        config.options.path += qs.encode(config.prams)
        config.options.headers = config.headers
    })
    res.on('close', ()=> {
        let ob = {
            options: config.options,
            body: config.body
        }
        login(ob)
        fs.writeFileSync('./ip.json',JSON.stringify(ob,null,'\t'))
    })
}).on('error', (e) => {
    console.log(e.message)
})

function login (config) {
    const postData = qs.stringify(config.body)
    console.log(config.options,postData)
    const req = http.request(config.options, (res) => {
        let bufferHelper = new BufferHelper()
        res.on('data', (chunk) => {
            bufferHelper.concat(chunk)
        })
        res.on('end', () => {
            let str = iconv.decode(bufferHelper.toBuffer(),'gb2312') 
            ok(str) 
        })
    })
    req.on('error', (e) => {
        console.log(e.message)
    })
    req.write(postData)
    req.end()
}
