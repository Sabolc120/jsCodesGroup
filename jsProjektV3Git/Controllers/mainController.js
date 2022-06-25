const employee = require("../Models/employee")

const getRequest = async (req, res) =>{
    try{
        const data = await employee.find()
        res.render("index", {data})
    }
    catch(error){
        console.log(error.message);
    }
}
const deleteRequest = async (req, res) =>{
    const id = req.params.id
    try{
        await employee.findByIdAndDelete(id)
        res.render("torles")
    }
    catch(error){
        console.log(error.message);
    }
}
module.exports = {deleteRequest, getRequest};