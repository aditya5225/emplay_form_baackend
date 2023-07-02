const mysql = require("mysql")
const Sequelize = require("sequelize");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employeedb"
})

connection.connect((err) => {
    if (err) throw err
    console.log("connected to db")
})

const sequelizeConn = new Sequelize(
    'employeedb',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequelizeConn.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});


module.exports = { connection, sequelizeConn }
