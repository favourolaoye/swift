const mongoose = require("mongoose");


const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please write product name"],
    },
    Quantity: {
        type: Number,
        required: [true, "please write product name"],
    },
    price: {
        type: Number,
        required: [true, "please write product name"],
    },
},
{
    timestamps: true,
}

);

module.exports = mongoose.model("items", itemSchema); 