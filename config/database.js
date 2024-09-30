const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('user_address_db', 'root', '8179288469', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
