const Product = require('../Models/productModel')
//Függőségek: adatbázis séma

const getRequest = (req, res) =>{
    res.render("feltolt")
}

const postRequest = async (req, res) =>{
    //req.body: A weboldalon lévő elemek, ezek az EJS fájlban vannak benne!
    const nev = req.body.nev
    const termektipus = req.body.termektipus
    const ar = req.body.ar
    const kepcim = req.file.originalname;
    try{
        //Hozz létre új terméket feltöltéskor, majd pedig mentsd azt el
        const newProduct = new Product({nev, termektipus, ar, kepcim})
        await newProduct.save();
        const data = await Product.find(); //Ezt a 'data-t' dobom át az ejs-be
        //Ha készen vagy feltőltéssel, dobd vissza a felhasználót!
        res.render('index', {data}) //Átdobom a datat
    }
    catch(error){
        console.log(error.message);
    }
}

module.exports = {getRequest, postRequest}