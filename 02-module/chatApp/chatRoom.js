const EventEmitter = require("events");

class ChatRoom extends EventEmitter {
  constructor() {
    super();
    this.users = new Set();
  }

  // User joins
  join(user) {
    this.users.add(user);
    this.emit("join", user);
  }

  // Send message
  sendMessage(user, message) {
    if (this.users.has(user)) {
      this.emit("message", user, message);
    } else {
      console.log(`${user} is not in the chat room.`);
    }
  }

  // User leaves
  leave(user) {
    if (this.users.has(user)) {
      this.users.delete(user);
      this.emit("leave", user);
    }
  }
}

// Create chat room
const chat = new ChatRoom();

// Join listener
chat.on("join", (user) => {
  console.log(`${user} joined the chat.`);
});

// Message listener
chat.on("message", (user, message) => {
  console.log(`${user}: ${message}`);
});

// Leave listener
chat.on("leave", (user) => {
  console.log(`${user} left the chat.`);
});

// Test
chat.join("Talha");
chat.sendMessage("Talha", "Assalamu Alaikum");

chat.join("Rakib");
chat.sendMessage("Rakib", "Hello");

chat.sendMessage("Ali", "Hi"); // Ali is not in the chat room.

chat.leave("Talha"); // Talha leaves the chat.

module.exports = ChatRoom;