const Sequelize = require('sequelize')

const seq = require('./seq')


// 创建模型

const User = seq.define('user', {
    //id会自动创建，并设为主键，自增
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nickName: {
        type: Sequelize.STRING
    }
})

const Blog = seq.define('blog', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

//外键关联
Blog.belongsTo(User, {
    //创建外键Blog.userId > User.id
    foreignKey: 'userId'
})

User.hasMany(Blog, {
    foreignKey: 'userId'
})

User.hasMany(Blog, {

})
module.exports = {
    User,
    Blog
}