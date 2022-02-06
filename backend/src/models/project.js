const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    inputOneLabel:{
        type:String
    },
    inputFiveLabel:{
        type:String
    }
});


const projectCollection = new mongoose.model("Project",projectSchema);

module.exports = projectCollection;