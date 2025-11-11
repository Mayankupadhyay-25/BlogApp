const express = require('express');
const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware to parse json data
app.use(express.json());

const blog = require('./routes/blog');
//mount the blog routes
app.use('/api/v1',blog)

const connectWithDb = require('./config/database');
connectWithDb();

app.listen(PORT, () => {
    console.log(`APP is running on ${PORT}`);
})

app.get("/",(req, res) =>{ 
    res.send(`<h1>Welcome to blog site Homepage<h1>`)
})
