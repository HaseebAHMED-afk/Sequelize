const Sequelize = require('sequelize')
const db = require('../DB/db')


const User = db.define('users' , {
    name:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    },
    createdAt:{
        type: Sequelize.STRING
    },
    updatedAt:{
        type: Sequelize.STRING
    },
})


module.exports = User