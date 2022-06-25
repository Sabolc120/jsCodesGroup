//Kontroller előtt kellenni fog a product Model, mivel ezt fogja betölteni az oldal mikor az megjelenik!
const Product = require('../Models/productModel');
const fs = require('fs')
//Függőségek: Adatbázis séma

const getRequest = async (req, res) =>{
    try{
        //Find metódussak letároljuk a létező adatokat
        const data = await Product.find();
        //Majd le rendereljük az oldalt, és egy {} zárójelbe kell tenni az utóbbi adatokat
        res.render('index', {data});
    }
    catch(error){
        console.log(error.message);
    }
}
const deleteRequest = async(req, res)=>{
    const id = req.params.id
    const kepcim = req.params.kepcim;
    try{
        await Product.findByIdAndDelete(id)
        fs.unlinkSync(`public/kepek/${kepcim}`)
        res.render("torles")
    }
    catch(error){
        console.log(error.message);
    }
}

module.exports ={deleteRequest, getRequest}