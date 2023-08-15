const express = require("express");
const path = require("path");

// specific route method
const aboutInitiator = express.Router();
aboutInitiator.get("/breach.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/initiator/breach.html")
  );
});

aboutInitiator.get("/gekko.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/initiator/gekko.html")
  );
});

aboutInitiator.get("/kayo.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/initiator/kayo.html")
  );
});

aboutInitiator.get("/skye.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/initiator/skye.html")
  );
});

aboutInitiator.get("/sova.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/initiator/sova.html")
  );
});

module.exports = aboutInitiator;
// export default aboutRouter
