const Sequelize = require('sequelize');
const { sequelizeConn } = require('../database/connection')

var EmployeeTable = sequelizeConn.define("emp_details", {

    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    emp_contact: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    emp_salary: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    emp_email: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
    },

    updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
    },
});

module.exports = EmployeeTable;
