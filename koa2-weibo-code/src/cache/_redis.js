/**
 * @description 連接redis的方法
 * @author root
 */

 const redis = require('redis')
 const { REDIS_CONF } = require('../conf/db')

 //創建客戶端
 const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
 redisClient.on('error', err => {
     console.log('redis err', err)
 })

 /**
  * 
  * @param {string} key 
  * @param {string} val 
  * @param {number} timeout 
  */
 function set (key, val, timeout = 60 * 60) {
     
 }