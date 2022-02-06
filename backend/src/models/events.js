const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    inputOneLabel:{
        type:String
    },
    inputFiveLabel:{
        type:String
    }
});


const eventCollection = new mongoose.model("Event",eventSchema);

module.exports = eventCollection;