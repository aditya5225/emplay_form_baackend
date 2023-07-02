const EmployeeTable = require("../model/employeeModel")
const { connection } = require("../database/connection")


function empDetails(id) {
    return new Promise((resolve, reject) => {
        const query = `select * from emp_details where id = ${id}`
        connection.query(query, (err, rows) => {
            if (err) throw err
            resolve(rows)
        })
    })
}

var addEmployee = async (req, res) => {
    console.log("angular")
    try {
        let create = EmployeeTable.create({
            firstname: String(req.body.firstname),
            lastname: String(req.body.lastname),
            emp_contact: req.body.emp_contact,
            address: String(req.body.address),
            emp_salary: req.body.emp_salary,
            emp_email: String(req.body.emp_email),
            createdAt: new Date(),
            updatedAt: new Date()
        })
        res.send("Employee added successfully")
        return create
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}

var updateEmployee = async (req, res) => {
    const id = req.params.id
    try {
        let update = EmployeeTable.update({
            firstname: String(req.body.firstname),
            lastname: String(req.body.lastname),
            emp_contact: req.body.emp_contact,
            address: String(req.body.address),
            emp_salary: req.body.emp_salary,
            emp_email: String(req.body.emp_email),
            createdAt: new Date(),
            updatedAt: new Date()
        }, { where: { id } })
        res.send("Employee updated successfully")
        return update
    } catch (err) {
        console.log(err)
    }

}


var getAllEmpDetalis = async (req, res) => {
    const query = `select * from emp_details`
    connection.query(query, (err, rows) => {
        if (err) throw err
        res.send(JSON.stringify(rows))
    })
}

var getOneEmpDetalis = async (req, res) => {
    const id = req.params.id
    let data = await empDetails(id)
    res.send(data)
}

var deleteEmpDetails = async (req, res) => {
    console.log("ANGULAR")
    const id = req.params.id
    if (id) {
        var query = `delete from emp_details where id = ${id}`
    } else {
        var query = `truncate table emp_details`

    }
    connection.query(query, (err, rows) => {
        if (err) throw err
        console.log("done")
        res.send("deleted successfully")

    })
}

module.exports = { addEmployee, getAllEmpDetalis, getOneEmpDetalis, deleteEmpDetails, updateEmployee }