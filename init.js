const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main().then(()=>{
    console.log("connection successful");
}).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats=[
    {
        from:"tony",
        to:"captain",
        msg:"hey, captain america",
        created_at:new Date()
    },
    {
        from:"tejas",
        to:"shukla",
        msg:"kidhar hai bacchi ? ",
        created_at:new Date()
    },
    {
        from:"piyush",
        to:"vardan",
        msg:"chalo goa ghumne",
        created_at:new Date()
    }
]

Chat.insertMany(allChats);

