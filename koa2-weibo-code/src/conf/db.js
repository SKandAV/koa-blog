/**
 * @description 存儲配置
 * @author root
 */
const { isProd } = require('../utils/env')
const REDIS_CONF = {
    port: 6379,
    host: 'localhost'
}
const MYSQL_CONF = {
    host: '127.0.0.1',
    dialect: 'mysql',
    database:'myblog',
    user: 'root',
    password: 'root'
}


module.exports = {
    REDIS_CONF,
    MYSQL_CONF
}