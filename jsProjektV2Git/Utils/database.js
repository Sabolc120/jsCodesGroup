const mongoose = require('mongoose')

const connection = () =>{
    const DATABASE_URL = process.env.DATABASE_URL
    mongoose
    .connect(DATABASE_URL)
    .then(()=>{
        console.log('Sikeres adatbázis csatlakozás');
    })
    .catch((error)=>{
        console.log(error.message);
    })
}
module.exports = connection;