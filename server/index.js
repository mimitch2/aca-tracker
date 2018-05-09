const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const ClientsRoutes = require("./routes/ClientRoute");
app.use(ClientsRoutes);

const Locations = require("./routes/LocationsRoute");
app.use(Locations);


 app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  } 
  console.log("Web server is now running on port 3001`");
});

// <-----------handle bad request------------->
app.use(function (request,response) {
  response.send("NOPE!!!!");
});