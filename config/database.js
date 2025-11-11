const mongoose = require('mongoose');

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        usenewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("Connected to MongoDB successfully"))
    .catch((error) => {
        console.log("DB connection error");
        console.log(error);
        process.exit(1);
    })

};
module.exports = connectWithDb;