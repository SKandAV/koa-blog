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
 * redis set
 * @param {string} key 
 * @param {string} val 
 * @param {number} timeout 
 */
function set(key, val, timeout = 60 * 60) {
    if (typeof val === 'object') {
        val = JSON.stringify(val)
    }
    redisClient.set(key, val)
    redisClient.expire(key, timeout)
}


/**
 * redis get
 * @param {*} key 
 */
function get(key) {
    const promise = new Promise((resolve, rejcet) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                rejcet(err)
                return
            }
            if (val == null) {
                resolve(null)
                return
            }
            try {
                resolve(JSON.parse(val))
            } catch (error) {
                resolve(val)
            }
        })
    })
    return promise
}

module.exports = {
    set,
    get
}