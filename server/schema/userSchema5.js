const mongoose = require('mongoose');

const panSchema = new mongoose.Schema({
    pan:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    }
})

module.exports = new mongoose.model('pan',panSchema);
