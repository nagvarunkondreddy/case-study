const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    name:{
        type:String
    },
    designation:{
        type:String
    },
    domain:{
        type:String
    },
    phone:{
        type:String
    },
    year:{
        type:String
    },
    image:{
        type:String
    }
});


const teamCollection = new mongoose.model("Team",teamSchema);

module.exports = teamCollection;