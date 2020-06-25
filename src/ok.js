const fs = require('fs')

const ok = (rawData) => {
    const data = rawData.toString()
    const finish = /认证成功/
    if (finish.test(data)) {
        console.log('成功~~~!')
    }

}

module.exports = ok