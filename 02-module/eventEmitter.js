// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// // Listener
// emitter.on("greet", () => {
//   console.log("Hello Talha!");
// });

// Event trigger
// emitter.emit("greet");

// data passing 

// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("welcome", (name) => {
//   console.log(`Welcome ${name}`);
// });

// emitter.emit("welcome", "Talha");

// multiple listeners

// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("login", () => {
//   console.log("Save login history");
// });

// emitter.on("login", () => {
//   console.log("Send notification");
// });

// emitter.emit("login");

//only one time listener

const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.once("hello", () => {
  console.log("Only one time");
});

emitter.emit("hello");
emitter.emit("hello");