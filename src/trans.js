const config = require('./extra.json')
const fs = require('fs')

const trans = () => {
    let input = fs.readFileSync('./config.txt')
    let userInfo = JSON.parse(input)
    const isp = (str) => {
        switch (str) {
            case '中国电信':
                return '@telecom'
            case '中国移动':
                return '@cmcc'
            case '中国联通':
                return '@unicom'
            default:
                return ''
        }
    }
    config.body.DDDDD = ',0,' + userInfo.username + isp(userInfo.ISP)
    config.body.upass = userInfo.password
    return config
}

module.exports = trans