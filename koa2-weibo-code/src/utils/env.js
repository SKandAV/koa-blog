/**
 * @description 環境變量
 * @author root
 */

 const  ENV = process.env.NODE_ENV

 module.exports = {
     isDev: ENV === 'dev',
     notDev: ENV !== 'dev',
     isProd: ENV === 'production',
     notProd: ENV !== 'production'
 }