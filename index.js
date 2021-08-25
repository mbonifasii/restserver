"use strict";

require("dotenv").config();

// - Import server
const Server = require("./server");

// - Create an instance of server
const server = new Server();

// - Server listening
server.listening();