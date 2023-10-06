const asynchandler = require("express-async-handler");
const items = require("../models/productSchema.js");

const getProducts = asynchandler(async(req, res) => {
    const item = await items.find();
    res.status(200).json({message: "fetched an item"});
    console.log(item);
    if(!item){
        res.status(400)
        .json({
            message: "no items in store"
        })
    }
});
const getProductsId = asynchandler(async(req, res) => {
    const item = await items.findById(req.params.id);
    if(!item){
        res.status(404);
        console.log("not found");
    }
    res.status(200).json(item);
});

const CreateProduct = asynchandler(async(req, res) => {
    const {name, Quantity, price} = req.body;
    
    if(!name || !Quantity || !price){
        res.status(400);
        console.log("fill in all fields");
    }
    const item = await items.create({
        name, Quantity, price
    });
    res.status(201).json({message: "created an item"});
});

const EditProduct = asynchandler(async(req, res) => {
    const item = await items.findById(req.params.id);
    if(!item){
        res.status(404);
        console.log("not found");
    }
    const updatedProduct = await items.findByIdAndUpdate(
   req.params.id,
   req.body,
   {new : true}
    );
    res.status(200).json(updatedProduct);
});
const DeleteProduct = asynchandler(async(req, res) => {
    const item = await items.findById(req.params.id);
    if(!item){
        res.status(404);
        console.log("not found");
    }
    await items.deleteOne();
    res.status(200).json({message: `deleted contact for ${req.params.id}`});
});

module.exports = {getProducts, getProductsId, CreateProduct, EditProduct, DeleteProduct};