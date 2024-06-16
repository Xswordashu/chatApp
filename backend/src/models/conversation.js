import mongoose, { Mongoose } from "mongoose";
import { boolean } from "zod";
const { Schema } = mongoose;


const concersationSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true, "Conversation is required"],
    },
    isGroup: {
        type:Boolean,
        required:true,
        default:false
    },
    users:[
        {
            type: Schema.Types.ObjectId,
            ref: 'UserModel'
        }
    ],
    latestMessage:{
        type:Schema.Types.ObjectId,
        ref:"MsgModel"
    },
    admin:{
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    }
},{
    collection: "conversations",
    timestamps: true,
})

const conversationModel = mongoose.model('conversationModel', concersationSchema);
export default conversationModel;