const express = require("express");
const path = require("path");
const app = express();
const port = 8888;
const aboutRouter = require("./router/controller");
const aboutDuelist = require("./router/duelist");
const aboutInitiator = require("./router/initiator");
const aboutSentinel = require("./router/sentinel");

// Serve static files
app.use(express.static("public"));

app.use("/assets/controller", aboutRouter);
app.use("/assets/duelist", aboutDuelist);
app.use("/assets/initiatort", aboutInitiator);
app.use("/assets/sentinel", aboutSentinel);

// Define route for /controller/brim
// app.get("/controller/brim", (req, res) => {
//   res.sendFile(path.join(__dirname + "/controller/brim.html"));
// });

// Define other routes...

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname + "/public/index.html"));
});

// 404 middleware
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
