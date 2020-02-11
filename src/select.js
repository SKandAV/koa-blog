const {Blog, User} = require('./model')

!(async function () {
    const zhangsan = await User.findOne({
        attributes: ['userName','nickName'],
        where: {
            userName: '李四2'
        }
    })

    console.log(zhangsan.dataValues)
})()