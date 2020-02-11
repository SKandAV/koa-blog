/**
 * @description sequlize 配置
 */
const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const {host, dialect, database, user, password } = MYSQL_CONF
const config = {
    host: host,
    dialect : dialect
}
config.pool = {
    max: 5,
    min: 0,
    idle: 10000
}
const seq = new Sequelize(database, user, password,config)


/* 
seq.authenticate().then( () =>{
    console.log('success')
}).catch(() => {
    console.log('err')
}) */


module.exports = seq