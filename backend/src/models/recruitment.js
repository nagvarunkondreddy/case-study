const mongoose = require('mongoose');

const recruitmentSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    domain:{
        type:String
    },
    phone:{
        type:String
    },
    date:{
        type:String
    }
});


const recruitmentCollection = new mongoose.model("Recruitment",recruitmentSchema);

module.exports = recruitmentCollection;