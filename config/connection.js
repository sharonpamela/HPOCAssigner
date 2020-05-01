const mysql = require('mysql');

const connection = mysql.createConnection({
    // host: '10.42.247.61',
    host: 'localhost',
    port: 3306,
    user: 'nodejs',
    password: 'nutanix/4u',
    database: 'accounts'
});

module.exports = connection;