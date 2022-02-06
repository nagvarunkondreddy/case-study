const express = require("express");
const router = express.Router();
const teamCollection = require('../models/team');


router.get('/team',async(req,res)=>{
    try{
        const teamDocuments = await teamCollection.find();
        //                 setTimeout(() => {
        //             res.status(200).send(teamDocuments);
        // }, 2000);
        res.status(200).send(teamDocuments);

    }
    catch(error){
        res.status(400).send('some error.')

    }
});

router.post('/newMember',async (req,res)=>{
    try{
        
       const document= new teamCollection(req.body);
       document.save();
       const teamDocuments = await teamCollection.find().sort({_id:-1});
        res.status(200).send(teamDocuments);
    }
    catch(error){
        res.status(400).send(error);
    }
});
module.exports = router;