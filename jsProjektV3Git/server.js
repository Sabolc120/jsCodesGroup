require('dotenv').config();
const express = require('express')
const app = express();
const connection = require("./Utils/database")
connection();

//Middleware
app.set("view engine", 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.use('/upload', require('./Routes/uploadRoute'))
app.use('/frissit', require('./Routes/refreshRoute'))
app.use('/szerkesztes', require('./Routes/editRoute'))
app.use('/', require('./Routes/mainRoute'))



app.listen(5000, () =>{
    console.log('Szerver fut a következő porton: 5000');
})