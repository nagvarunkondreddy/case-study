const mongoose = require('mongoose');

const userRoleSchema = mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String
    },
    token:{
        type:String
    }
});

const userRoleCollection = new mongoose.model("Role",userRoleSchema);
module.exports = userRoleCollection;