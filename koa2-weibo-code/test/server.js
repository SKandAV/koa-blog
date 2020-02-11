/**
 * @description jest server
 * @author root
 */


 const request = require('superjest')
 const server = require('../src/app').callback()

 module.exports = request(server)