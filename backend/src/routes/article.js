const express = require("express");
const router = express.Router();
const articleCollection = require('../models/article');


router.get('/article',async (req,res)=>{
    try{
        const articleDocuments = await articleCollection.find();
        // setTimeout(() => {
        //     res.status(200).send(articleDocuments);
        // }, 2000);
        res.status(200).send(articleDocuments);
    }
    catch(error){
        res.status(400).send('some error.')
    }
});

router.post('/newArticle',async (req,res)=>{
    try{
        
       const articledocument= new articleCollection(req.body);
       articledocument.save();
       const articledocuments = await articleCollection.find().sort({_id:-1});
        res.status(200).send(articledocuments);
    }
    catch(error){
        res.status(400).send(error);
    }
});

router.delete('/deleteArticle',async (req,res)=>{
    try{
        const _id = req.body._id;
        console.log(req.body)
       const status = await articleCollection.deleteOne({_id});
       if(status.deletedCount){
           const articleDocuments = await articleCollection.find().sort({_id:-1});
           res.status(200).send(articleDocuments);
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