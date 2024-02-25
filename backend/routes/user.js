const express=require('express')
const jwt=require('jsonwebtoken')
const z=require('zod')
const {User}=require('../db')
const JWT=require('../config')
const user=express.Router()
const bodySchema=z.object({
    username:z.string().email(),
    firstName:z.string(),
    lastName:z.string(),
    password:z.string()


})

user.post("/signup",async (req,res)=>{
    const bodyUser=bodySchema.safeParse(req.body)
    if(!bodyUser.success){
        res.status(411).json({
            message:"Email already taken / Incorrect inputs"
        })
    }
    else{
        if(await User.findOne({
            username:bodyUser.username,
        })){
            res.status(411).json(
                {
                    message: "Email already taken / Incorrect inputs"
                }
            )
        }
        else{
            const users=await User.create({
                username:bodyUser.username,
                firstName:bodyUser.firstName,
                lastName:bodyUser.lastName,
                password:bodyUser.password
            })
            const userId=users._id;
            const token=jwt.sign({
                userId
            },JWT)
            res.status(200).json({
                message: "User created successfully",
                token: token
            })
        }
    }
})

const inputSchema=z.object({
    username:z.string().email(),
    password:z.string()
})
user.post('/signin',async (req,res)=>{
    const bodyUser=inputSchema.safeParse(req.body)
    if(!bodyUser.success){
        res.status(411).json({
            message: "Error while logging in"
        })
    }
    else{
        const users=await User.findOne({
            username:bodyUser.username,
            password:bodyUser.password
        })
        if(users){
            const token=jwt.sign({
                userId:users._id,
            },JWT)

            res.status(200).json({
                token: token,
            })
        }else{
            res.status(411).json({
                message: "Error while logging in"
            })
        }
    }
})

module.exports=user;