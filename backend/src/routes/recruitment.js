const express = require("express");
const router = express.Router();
const recruitmentCollection = require('../models/recruitment');


router.get('/recruitment',async(req,res)=>{
    try{
        const recruitmentDocuments = await recruitmentCollection.find();
        // setTimeout(() => {
        //     res.status(200).send(recruitmentDocuments);
        // }, 2000);
        res.status(200).send(recruitmentDocuments);

    }
    catch(error){
        res.status(400).send('some error.')

    }
});
module.exports = router;