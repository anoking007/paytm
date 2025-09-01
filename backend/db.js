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

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const User=mongoose.model('User',UserSchema)
const Account=mongoose.model('Account',accountSchema)

module.exports={
    User,Account,
}