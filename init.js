const mongoose = require('mongoose');
const Chat = require("./models/chat.js")

main()
.then(()=>{console.log("connection Successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const chats = [
  {
    from: "Aazmeer",
    to: "Ruhab",
    msg: "I received the notes. Thanks.",
    created_at: new Date()
  },
  {
    from: "Ruhab",
    to: "Aazmeer",
    msg: "Great. Did you check the last page?",
    created_at: new Date()
  },
  {
    from: "Aazmeer",
    to: "Dad",
    msg: "The CD 100 is running perfectly.",
    created_at: new Date()
  },
  {
    from: "Mom",
    to: "Aazmeer",
    msg: "Call me when you reach Sheikhupura.",
    created_at: new Date()
  },
  {
    from: "Aazmeer",
    to: "Study Group",
    msg: "Is the exam at 9 AM or 10 AM?",
    created_at: new Date()
  },
  {
    from: "Professor",
    to: "Aazmeer",
    msg: "Assignment deadline is midnight.",
    created_at: new Date()
  },
  {
    from: "Aazmeer",
    to: "Mom",
    msg: "Just parked the bike. I am safe.",
    created_at: new Date()
  },
  {
    from: "Mechanic",
    to: "Aazmeer",
    msg: "Oil change is complete. Come pick it up.",
    created_at: new Date()
  },
  {
    from: "Aazmeer",
    to: "Ruhab",
    msg: "Let's meet at the library.",
    created_at: new Date()
  },
  {
    from: "Aazmeer",
    to: "Dad",
    msg: "Heading out for the group study now.",
    created_at: new Date()
  }
];

Chat.insertMany(chats);
