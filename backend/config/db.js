const mongoose = require('mongoose');


const db = () => {
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Database Connected Successfully..!!");
    }) .catch(err =>{
        console.log("error is :",err);
    })
}

module.exports = db;