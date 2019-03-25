const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs_course', 'root', '0xcFT1S570bHwQx2iZnR', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
