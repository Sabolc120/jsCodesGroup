const employee = require('../Models/employee')

const getRequest = async (req, res) =>{
    try{
        const id = req.params.id;
        const data = await employee.findById(id);
        res.render('szerkesztes', {data});
    }
    catch(error){
        console.log(error.message);
    }
}

module.exports = getRequest;