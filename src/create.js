const { Blog, User } = require('./model')


!(async function () {
    //创建用户F
    const zhangshan = await User.create({
        userName: '張三',
        password: '13465',
        nickName: '張三'
    })

    const lisi = await User.create({
        userName: '李四',
        password: '234',
        nickName: '李四'
    })
    const zhangshanId = zhangshan.dataValues.id
    const listId = lisi.dataValues.id


    const blog1 = await Blog.create({
        title: '標題1',
        content: '內容1',
        userId: zhangshanId
    })
    const blog2 = await Blog.create({
        title: '標題2',
        content: '內容2',
        userId: zhangshanId
    })
    const blog3 = await Blog.create({
        title: '標題3',
        content: '內容3',
        userId: listId
    })
    const blog4 = await Blog.create({
        title: '標題4',
        content: '內容4',
        userId: listId
    })
})()