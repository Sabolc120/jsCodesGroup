const employee = require('../Models/employee')

const fs = require('fs')

const getRequest = async(req, res) =>{
    try{
        const id = req.params.id
        const data = await employee.findById(id)
        res.render('frissit', {data})
    }
    catch(error){
        console.log(error.message);
    }
}
const postRequest = async(req, res) =>{
    try{
        const id = req.body.id
        const adat = await employee.findById(id)
        const employeeName = req.body.employeeName
        const employeePosition = req.body.employeePosition
        const employeeSalary = req.body.employeeSalary
        await employee.findByIdAndUpdate(id,{employeeName, employeePosition, employeeSalary})
        const data = await employee.findById(id)
        res.render('szerkesztes', {data})
    }
    catch(error){
        console.log(error.message);
    }
}

module.exports = {getRequest, postRequest}