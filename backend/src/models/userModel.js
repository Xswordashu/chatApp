import { kMaxLength } from "buffer";
import { timeStamp } from "console";
import mongoose from "mongoose";
import validator from "validator";
const userSchema= mongoose.Schema({
        name:{
             type:String,
             required:[true, "Please provide your name"],
        },

        email:{
            type: String,
            required:[true, "Please provide your email"],
            unique:[true, "This email already exists"],
            lowercase:true,
            validate:[validator.isEmail, "Please provide a valid email address"]
        },

        picture:{
            type:String,
        },

        status:{
            type:String,
            default: "Hey there!! I am using WhatsApp"
        },

        password:{
            type:String,
            required:[true, "Please provide your password"],
            minLength:[6, 'Please make sure your password is atleast 6 characters long'],
            kMaxLength:[128,"Please make sure your password is less than 128 characters"]
        }
},
{
    collection: "users",
    timeStamps: true
}
);

const UserModel = mongoose.model('User', userSchema);
export default UserModel;