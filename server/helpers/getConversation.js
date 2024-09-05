const { ConversationModel } = require("../models/ConversationModel")

const getConversation= async(currentuserId)=>{
    if(currentuserId){
        const currentUserConversation = await ConversationModel.find({
          "$or":[
            {sender: currentuserId},
            {receiver: currentuserId}
          ]
        }).sort({updatedAt:-1}).populate('messages').populate('sender').populate('receiver')
        
        const conversation=currentUserConversation.map ((conv)=>{
          const countUnseenMsg = conv.messages.reduce((prev,curr)=>{
            const msgByUserId =curr?.msgByUserId?.toString()
            if(msgByUserId !== currentuserId){
                return  prev+(curr.seen ? 0:1)
            }else{
                return prev
            }
          },0)
          return{
            _id:conv?._id,
            sender:conv?.sender,
            receiver:conv?.receiver,
            unseenMsg:countUnseenMsg,
            lastMsg:conv.messages[conv?.messages?.length-1]
          }
        })
        return conversation
/*        
 */      }else{
    return []
 }
}

module.exports = getConversation