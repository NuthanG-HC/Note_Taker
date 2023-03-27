const router = require('express').Router();
const User = require('../model/signUpSchema')
const bcrypt = require('bcrypt')
const bodyparser = require('body-parser')
router.use(bodyparser.urlencoded({ extended: false }))

router.post('/register',async(req,res)=>{
   
    try{
        console.log(req.body)
        const email = req.body.email
        const passwords = req.body.password
        if(!email || !passwords){
            return res.status(400).json({msg:'Please Enter all the fields'});
        }
        const exist = await User.find({email:email})
        console.log(exist)
        if(exist.length >0){
            return res.status(409).json({msg:'User already exists'});
        }

        bcrypt.hash(passwords,10,async(err,cryptedPassword)=>{
            const newUser = await User.create({
                email : email,
                password:cryptedPassword
            });
        return res.status(201).json({
            Status:'Success',
            Message:newUser
        });
        });
    }
    catch(err){
        res.status(400).json({
            Status:'Failed',
            Message:err
        });
    }
});

module.exports = router;