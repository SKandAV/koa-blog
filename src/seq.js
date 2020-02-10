const Sequelize = require('sequelize')

const config = {
    host: '127.0.0.1',
    dialect : 'mysql'
}
config.pool = {
    max: 5,
    min: 0,
    idle: 10000
}
const seq = new Sequelize('myblog', 'root', 'root',config)



/* seq.authenticate().then( () =>{
    console.log('success')
}).catch(() => {
    console.log('err')
}) */


module.exports = seq