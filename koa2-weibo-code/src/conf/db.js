/**
 * @description 存儲配置
 * @author root
 */
const { isProd } = require('../utils/env')
 const REDIS_CONF = {
     port: 6379,
     host: 'localhost'
 }

 

 module.exports= {
     REDIS_CONF
 }