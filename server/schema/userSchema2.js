const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    aadhar:{
        type:String,
        required:true
    },
    driving:{
        type:String,
        required:true
    },
    pan:{
        type:String,
        required:true
    },
    voter:{
        type:String,
        required:true
    }
})

module.exports = new mongoose.model('card',CardSchema);
