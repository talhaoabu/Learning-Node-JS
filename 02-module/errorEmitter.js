const EventEmitter = require("events");

// EventEmitter object তৈরি
const eventEmitter = new EventEmitter();

// "error" event-এর listener
eventEmitter.on("error", (err) => {
  console.error(`Error Occurred: ${err.message}`);
});

// Error event trigger
eventEmitter.emit("error", new Error("Something went wrong"));