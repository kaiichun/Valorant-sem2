const express = require("express");
const path = require("path");

// specific route method
const aboutDuelist = express.Router();
aboutDuelist.get("/jett.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/duelist/jett.html")
  );
});

aboutDuelist.get("/neon.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/duelist/neon.html")
  );
});

aboutDuelist.get("/pheonix.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/duelist/pheonix.html")
  );
});

aboutDuelist.get("/omen.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/duelist/pheonix.html")
  );
});

aboutDuelist.get("/raze.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/controller/raze.html")
  );
});

aboutDuelist.get("/yoru.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/controller/yoru.html")
  );
});

module.exports = aboutDuelist;
// export default aboutDuelist
