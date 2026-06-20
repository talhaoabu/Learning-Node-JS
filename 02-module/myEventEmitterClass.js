const EventEmitter = require("events");

// Chat class EventEmitter কে inherit করছে
class Chat extends EventEmitter {
  sendMessage(msg) {
    console.log(`Message Sent: ${msg}`);

    // Event trigger
    this.emit("messageReceived", msg);
  }
}

// Object তৈরি
const chat = new Chat();

// Event Listener
chat.on("messageReceived", (msg) => {
  console.log(`New Message: ${msg}`);
});

// Function call
chat.sendMessage("Assalamu Alaikum");