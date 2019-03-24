const mysql = require('mysql2');

const pool  = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejs_course',
    password: '0xcFT1S570bHwQx2iZnR'
});

module.exports = pool.promise();