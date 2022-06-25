const Product = require('../Models/productModel')
const fs = require("fs")

const getRequest = async(req, res) =>{
    try{
        //Ki kérem paraméterként az ID-t
        const id = req.params.id;
        //Keresd meg a terméket az az ID alapján
        const data = await Product.findById(id)
        res.render("frissit", {data})
    }
    catch(error){
        console.log(error.message);
    }
};

const postRequest = async(req, res) =>{
    try{
        const id = req.body.id
        const adat = await Product.findById(id)
        const nev = req.body.nev
        const termektipus = req.body.termektipus
        const ar = req.body.ar
        let kepcim=""
        //Ha létezik képcím...ha nem, add hozzá a feltöltöttet
        if(req.kepcim == undefined){
            kepcim = adat.kepcim
        }
        //Ha létezik, töröld azt ki, és írd át a feltöltendő képcímre
        else{
            //Arra van, hogy szinkronosan kitöröljünk egy fájlt a rendszerből
            fs.unlinkSync(`public/kepek/${adat.kepcim}`)
            kepcim = req.file.originalname
        }
        await Product.findByIdAndUpdate(id,{nev, termektipus, ar, kepcim})
        const data = await Product.findById(id)
        res.render("szerkesztes", {data});
    }
    catch(error){
        console.log(error.message);
    }
}
module.exports={getRequest, postRequest}