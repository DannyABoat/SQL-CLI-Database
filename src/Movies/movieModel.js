const sequelize = require("../db/connection");
const {DataTypes} = require('sequelize');

const Watching = sequelize.define('Netflix',{
    name: {
        type : DataTypes.STRING,
        allowNull : false
    },
    actor: {
        type : DataTypes.STRING,
        allowNull: false
    }
    
});

const Film = sequelize.define('Cinema',{
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