// 1. Importaciones

const mongoose = require("mongoose")
const connectDB = async () => {
    await mongoose.connect(`mongodb+srv://$process.env.${DB_USERNAME}:${DB_PASSWORD}@cluster0.hptoy.mongodb.net/ih-drones`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log("Base de datos conectada")

}

module.exports = connectDB