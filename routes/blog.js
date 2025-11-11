const express = require('express');
const router = express.Router();

//importing controller
const { dummyLink } = require('../controllers/likeController');


 
//mapping the route to controller
router.get("/dummyroute", dummyLink); 

 
//export
module.exports = router;