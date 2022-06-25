require('dotenv').config()
const express = require('express')
const app = express();
const connection = require('./Utils/database')

connection();

//Middleware-ek
//Mivel EJS-t használunk, szükség lesz a view engine beállításra.
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//Hol tároljuk a stílust, a képeket?
app.use(express.static("public"))

//Routeok
//Megmondjuk az applikációnak hogyan kezelje a kéréseket.
app.use('/upload', require('./Routes/uploadRoute'))
app.use('/', require('./Routes/mainRoute'))

app.listen(5000, () =>{
    console.log('Szerver fut az 5 ezre prton');
})