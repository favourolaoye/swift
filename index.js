const express = require("express");
const dotenv = require("dotenv").config();
const conn = require("./config/dbconn.js");
const app = express();

conn();
server = process.env.PORT || 3000;
app.use(express.json());
app.use("/products", require("./Routes/productroutes"));



app.listen(server, () => {
    console.log(`server is listening at port: ${server}`);
});

