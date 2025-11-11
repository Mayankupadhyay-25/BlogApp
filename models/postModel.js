// import mongoose
const mongoose = require("mongoose");

//rourte schema
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    body:{
        type: String,
        required:true,
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"like",//reference to the like model
    }],
    Comment:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Comment",//reference to the comment model
    }]

});

//export the model
module.exports = mongoose.model("Post",postSchema)