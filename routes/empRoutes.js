const router = require("express").Router()
const { addEmployee, getAllEmpDetalis, getOneEmpDetalis, deleteEmpDetails, updateEmployee } = require("../controller/empController")

router.get("/getAllEmp", getAllEmpDetalis)

router.get("/getOneEmp/:id", getOneEmpDetalis)

router.post("/addEmployee", addEmployee)

router.patch("/updateEmployee/:id", updateEmployee)

router.delete("/deleteOneEmployee/:id", deleteEmpDetails)

router.delete("/deleteAllEmployee", deleteEmpDetails)


module.exports = router