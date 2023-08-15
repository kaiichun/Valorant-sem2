const express = require("express");
const path = require("path");

// specific route method
const aboutSentinel = express.Router();
aboutSentinel.get("/chamber.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/sentinel/chamber.html")
  );
});

aboutSentinel.get("/cypher.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/sentinel/cypher.html")
  );
});

aboutSentinel.get("/killjoy.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/sentinel/killjoy.html")
  );
});

aboutSentinel.get("/sage.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/sentinel/sage.html")
  );
});

module.exports = aboutSentinel;
// export default aboutRouter
