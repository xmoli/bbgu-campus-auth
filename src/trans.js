const fs = require('fs')
const path = require('path')

const trans = () => {
    let conf_path = path.resolve(__dirname,'../config.json')
    console.log(conf_path)
    let input = fs.readFileSync(conf_path)
    let config = JSON.parse(input)
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
    config.body.DDDDD = ',0,' + config.username + isp(config.ISP)
    config.body.upass = config.password
    return config
}

module.exports = trans