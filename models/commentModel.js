//importing mongoose
const mongoose =  require("mongoose");
const { post } = require("../routes/blog");

//route schema
const commentSchema = new mongoose.Schema({
post:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Post",//refrence to the post model  
},
user:{
    type: String,
    required: true, 
},
body:{
    type: String,
    required: true,
}
});

//exporting the model

model.exports = mongoose.model("Comment", commentSchema);
