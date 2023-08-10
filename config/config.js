const mongoose = require("mongoose")

const connectDb = async()=>{
    try{
        // Creating the connection with the mongodb atlas
        const connect = await mongoose.connect("mongodb://localhost/csvUploder")
        console.log("Database connected Successfully:", connect.connection.name)
    }
    // handling the error in case mongodb doesn't connect
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

// exporting the mongodb connection
module.exports = connectDb;