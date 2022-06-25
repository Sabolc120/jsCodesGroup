const Product = require('../Models/productModel')

const getRequest = async (req, res) =>{
    try{
        const id = req.params.id;
        const data = await Product.findById(id)
        res.render("szerkesztes", {data});
    }
    catch(error){
        console.log(error.message);
    }
}
module.exports = getRequest;