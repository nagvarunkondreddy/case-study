const express = require("express");
const router = express.Router();
const projectCollection = require('../models/project');


router.get('/project',async (req,res)=>{
    try{
        const projectDocuments = await projectCollection.find();
        // setTimeout(() => {
        //     res.status(200).send(projectDocuments);
        // }, 2000);

        res.status(200).send(projectDocuments);
        
    }
    catch(error){
        res.status(400).send('some error.')
    }
});

router.post('/newProject',async (req,res)=>{
    try{
        
       const document= new projectCollection(req.body);
       document.save();
       const projectDocuments = await projectCollection.find().sort({_id:-1});
        res.status(200).send(projectDocuments);
    }
    catch(error){
        res.status(400).send(error);
    }
});

router.delete('/deleteProject',async (req,res)=>{
    try{
        const _id = req.body._id;
        console.log(req.body)
       const status = await projectCollection.deleteOne({_id});
       if(status.deletedCount){
           const projectDocuments = await projectCollection.find();
           res.status(200).send(projectDocuments);
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