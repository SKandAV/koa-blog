const {Blog, User} = require('./model')

!(async function () {
    const zhangsan = await User.findOne({
        attributes: ['userName','nickName'],
        where: {
            userName: '李四'
        }
    })

    console.log(zhangsan.dataValues)
})()