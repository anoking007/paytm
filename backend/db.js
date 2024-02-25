const mongoose=require('mongoose')
const{Schema}=mongoose

mongoose.connect("mongodb+srv://arghyaghosh048:iamarghya007@cluster0.uwexszt.mongodb.net/Paytm")

const UserSchema=new Schema(
    {
        username:String,
        password:String,
        firstName:String,
        lastName:String
    }
)

const User=mongoose.model('User',UserSchema)

module.exports={
    User
}