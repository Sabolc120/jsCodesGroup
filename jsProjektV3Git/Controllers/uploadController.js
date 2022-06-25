const employee = require('../Models/employee')

const getRequest= (req, res) =>{
    res.render("feltoltes")
}

const postRequest = async(req, res) =>{
    const employeeName = req.body.employeeName
    console.log(employeeName);
    const employeePosition = req.body.employeePosition
    console.log(employeePosition);
    const employeeSalary = req.body.employeeSalary
    console.log(employeeSalary);
    try{
        const newEmployee = new employee({employeeName, employeePosition, employeeSalary})
        await newEmployee.save();

        const data = await employee.find();
        res.render('index', {data})
    }
    catch(error){
        console.log(error.message);
    }
}
module.exports = {getRequest, postRequest}