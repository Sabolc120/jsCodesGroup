const mongoose = require("mongoose")

const employeeScheme = new mongoose.Schema({
    employeeName:{
        type: String,
        required : [true, "Munkavállaló nevet kötelező megadni!"]
    },
    employeePosition:{
        type: String,
        required: [true, "Munkavállaló poziciót kötelező megadni!"]
    },
    employeeSalary:{
        type: String,
        required: [true, "Munkavállaló fizetését kötelező megadni!"]
    }
})
const employeeModel = mongoose.model("employee", employeeScheme)

module.exports = employeeModel