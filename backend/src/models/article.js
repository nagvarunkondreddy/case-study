const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title:{
        type:String
    },
    content:{
        type:String
    }
});


const articleCollection = new mongoose.model("Article",articleSchema);

module.exports = articleCollection;