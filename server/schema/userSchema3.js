const mongoose = require('mongoose');

const aadharSchema = new mongoose.Schema({
    aadhar:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    }
})

module.exports = new mongoose.model('aadhar',aadharSchema);
