const express = require("express");
const path = require("path");

// specific route method
const aboutRouter = express.Router();
aboutRouter.get("/astra.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/controller/astra.html")
  );
});

aboutRouter.get("/brim.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/controller/brim.html")
  );
});

aboutRouter.get("/harbor.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/controller/harbor.html")
  );
});

aboutRouter.get("/omen.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/controller/omen.html")
  );
});

aboutRouter.get("/viper.html", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/controller/viper.html")
  );
});

module.exports = aboutRouter;
// export default aboutRouter
