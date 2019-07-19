// DEPENDENCIES
const mysql = require("mysql");

// CONNECTION
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mysqlpw123!",
    database: "burgers_db"
});

// CONSOLE LOG THREAD ID
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// EXPORT
module.exports = connection;