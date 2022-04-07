const Sequelize = require('sequelize')

const sequelize = new Sequelize('chatappdb', 'root', 'Kavya@123',{
    dialect: 'mysql',
    host: 'localhost'
})



module.exports = sequelize;
