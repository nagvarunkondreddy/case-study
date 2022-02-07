const express = require("express");
const router = express.Router();
const eventCollection = require('../models/events');


router.get('/events',async (req,res)=>{
    try{
        const eventDocuments = await eventCollection.find();
        //         setTimeout(() => {
        //             res.status(200).send(eventDocuments);
        // }, 2000);
        res.status(200).send(eventDocuments);
    }
    catch(error){
        res.status(400).send('some error.')
    }
});

router.post('/newEvent',async (req,res)=>{
    try{
        console.log('working')
       const eventdocument= new eventCollection(req.body);
       eventdocument.save();
       const eventDocuments = await eventCollection.find().sort({_id:-1});
        //                setTimeout(() => {
        //             res.status(200).send(eventDocuments);
        // }, 2000);
        res.status(200).send(eventDocuments);
    }
    catch(error){
        res.status(400).send(error);
    }
});

router.delete('/deleteEvent',async (req,res)=>{
    try{
        const _id = req.body._id;
        console.log(req.body)
       const status = await eventCollection.deleteOne({_id});
       if(status.deletedCount){
           const eventDocuments = await eventCollection.find();
            
            // setTimeout(() => {
            //                 res.status(200).send(eventDocuments);
            //     }, 2000);           
           res.status(200).send(eventDocuments);
       }
        else{
            res.send('not deleted');
        }
    }
    catch(error){
        res.status(400).send(error);
    }
});

module.exports = router;