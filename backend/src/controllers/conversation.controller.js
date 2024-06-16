import conversationModel from "../models/conversation.js";
import mongoose from 'mongoose';
import UserModel from "../models/userModel.js";
export const create_open_conversation = async (req,res)=>{
    const sender_id = req.user.id;
    const {receiver_id} = req.body;
   try{
       const existingConversation  = await conversationModel.aggregate(
        [
            {
                $match: {
                    users: {
                        $all: [
                           new mongoose.Types.ObjectId(receiver_id),
                           new mongoose.Types.ObjectId(sender_id)
                        ]
                    }
                }
            },
            {
                $lookup: {
                    from: 'users', // The collection to join
                    localField: 'users', // The field from the input documents
                    foreignField: '_id', // The field from the documents of the "from" collection
                    as: 'userDetails' // The name of the new array field to add to the input documents
                }
            },
            {
                $project:{
                    users:0,
                    "userDetails.password":0
                }
            },
           
        ]      
       )
       console.log('e',existingConversation);
       if(existingConversation.length>0)
       res.json(existingConversation);
       else
       {
        const receivingUser = await UserModel.findOne({_id: receiver_id});
        const newConversation = await conversationModel.create({
            name: receivingUser.name,
            isGroup: false,
            users:[receiver_id, sender_id]
        })
        
       
         return res.send(newConversation);
        // const populatedConversation = newConversation.populate("users");
        // return res.status(200).json(populatedConversation);
       }
    
   }catch(error){
    console.log(error);
     res.json({
        "error":error
   });
   }
}
    
