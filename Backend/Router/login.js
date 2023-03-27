const express = require('express')
const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../model/signUpSchema');
const jwt = require('jsonwebtoken')

const secret = 'nuthanNotes'
router.use(express.json())
router.use(express.urlencoded())
router.post('/login',async(req,res)=>{
    try{
        const email = req.body.email
        const passwords = req.body.password
        const findQueryinDB = await User.findOne({email:email});
        console.log(findQueryinDB)
        if(!findQueryinDB){
            return res.status(404).json({
                status:'Error',
                message:"User isn't register,Please register before signIn"
            });
        }
        else{
            console.log(req.body)
            bcrypt.compare(passwords,findQueryinDB.password,(err,result)=>{
                console.log(result,'from bcrypt')
                if(!result){
                    return res.status(403).json({
                        status:'Failed',
                        message:'Invalid user password'
                    })
                }
                else{
                    const token = jwt.sign({
                        exp:Math.floor(Date.now()/1000)+(60*60*60*60),
                        findQueryinDB:findQueryinDB._id
                    },secret)
                    const userdetails = {...findQueryinDB._doc,password:undefined}
                    return res.status(200).json({
                        status:"success",
                        Message:{token,userdetails}
                    })
                }
            })
        }
    }catch(err){
        console.log(err)
    }
})
module.exports = router