const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://nagvarun3636:Nagvarun!3636@cluster0.amgtk.mongodb.net/assignment?retryWrites=true&w=majority").
then((data)=>{
    console.log('successfull');
}).catch((error)=>{
console.log('not connected');
});