var express = require("express");
var bodyParser = require("body-parser");

path = require("path");
app = express();
mongoose = require('mongoose') //// make it global (no var)

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname,"./client")));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app); 


app.listen(8000, function() {
  console.log("listening on port 8000");
})