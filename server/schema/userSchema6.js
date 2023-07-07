const mongoose = require('mongoose');

const voterSchema = new mongoose.Schema({
    voter:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    }
})

module.exports = new mongoose.model('voter',voterSchema);
