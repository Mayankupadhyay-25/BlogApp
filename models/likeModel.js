 //import mongoose
 const mongoose = require("mongoose");
    const { post } = require("../routes/blog");

 // route schema
 const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post",//reference to the post model
    },
    user:{
        type: String,
        required: true,
    },
 })
 
 //exporting the model
 module.exports = mongoose.model("like", likeSchema);