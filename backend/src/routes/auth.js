const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const loginCollection = require('../models/login');


router.post('/login',async (req,res)=>{
    try{
        const email =req.body.email;
        const password = req.body.password;
        
        const userDocument = await loginCollection.findOne({email})
        
        if(userDocument)
        {
            const passwordMatch = await bcrypt.compare(password,userDocument.password);
            console.log(passwordMatch)
            if(passwordMatch)
            {
                res.status(200).send({status:'login success',role:userDocument.role,token:userDocument.token});
            }
            else{
                res.send({status:'password is incorrect'});
            }
        }
        else{
            res.send({status:'email id is incorrect'})
        }

     
    }
    catch(error){
        res.status(400).send('email or password is incorrect')
    }

});

module.exports = router;