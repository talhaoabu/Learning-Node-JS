const ChatRoom = require("./chatRoom");

// Create ChatRoom object
const chat = new ChatRoom();


// --------------------
// Event Listeners
// --------------------

// Join Event
chat.on("join", (user) => {
  console.log(`${user} has joined the chat`);
});

// Message Event
chat.on("message", (user, message) => {
  console.log(`${user}: ${message}`);
});

// Leave Event
chat.on("leave", (user) => {
  console.log(`${user} has left the chat`);
});


// --------------------
// Testing
// --------------------

chat.join("Talha");
chat.sendMessage("Talha", "Assalamu Alaikum");

chat.join("Rakib");
chat.sendMessage("Rakib", "Hello Everyone!");

chat.sendMessage("Ali", "Hi"); // User not in chat

chat.leave("Talha");