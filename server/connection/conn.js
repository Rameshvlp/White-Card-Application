const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://akshairajpsg:12345@cluster0.qodavhi.mongodb.net/CRUD_Try1').then(()=>{
        console.log("Successfully Connected to MongoDB")
    }).catch((err)=>{
        console.log(err);
})