const mongoose = require("mongoose");

const conn = async() => {
    try{
        const connect = await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
        console.log("connected");
        console.log(connect.connection.host);
        console.log(connect.connection.name)
    }
    catch(err){
      console.log("error: ", err);
      process.exit(1);
    }
    
}

module.exports = conn;