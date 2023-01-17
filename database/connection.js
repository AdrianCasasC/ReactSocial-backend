const mongoose = require("mongoose");
require('dotenv').config()

const connection = async() => {

    mongoose.set('strictQuery', false);

    try{
        await mongoose.connect(process.env.DATABASE_URI);

        console.log("Conectado correctamente a bd: mi_redsocial");

    } catch(error) {
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos !!");
    }

}

module.exports = connection;
