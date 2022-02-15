const sequelize = require("../db/connection");
const {DataTypes} = require('sequelize');

const Film = sequelize.define('Netflix',{
    name: {
        type : DataTypes.STRING,
        allowNull : false
    },
    actor: {
        type : DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type : DataTypes.STRING,
        allowNull: true
    },
    producer: {
        type : DataTypes.STRING,
        allowNull: true 
    }
});

module.exports = Film;