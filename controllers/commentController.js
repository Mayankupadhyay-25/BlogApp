//import models
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");
const { populate, updateOne } = require("../models/likeModel");

// bussiness logic for adding comment

exports.createComment = async (req,res) =>{
    try{
        //fetch data from request body
        const {postId, user, body} = req.body;  
        //create comment object
        const comment = new Comment({
            post: postId,user,body
        });

        //save the comment to database
        const savedComment = await comment.save ();

        // find the post by id and update its comments array
        const post = await Post.findByIdAndUpdate(postId, {$push: {Comment: savedComment._id} },{new:true})
            .populate("Comment") //POPULATE THR COMMENTS arrey with comment documents;
            .exec();


            res.json({
                post: post,
            });
        }
    catch(error){
        return res.status(500).json({
            error:"error While Creating comment",
        });
    
    }

    };