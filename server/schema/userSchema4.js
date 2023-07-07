const mongoose = require('mongoose');

const drivingSchema = new mongoose.Schema({
    driving:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    }
})

module.exports = new mongoose.model('driving',drivingSchema);
