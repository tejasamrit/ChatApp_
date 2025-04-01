const mongoose=require("mongoose");
const charSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        maxLength:500
    },
    created_at:{
        type:Date,
        required:true
    }
});

const Chat= mongoose.model("Chat", charSchema);
module.exports=Chat;