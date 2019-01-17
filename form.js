var express = require("express"); 
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/academy", { useNewUrlParser: true });
var nameSchema = new mongoose.Schema({
    email: String
   });
var Email = mongoose.model("Email", nameSchema);

app.use(express.static(__dirname + '/'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/saveemail", (req, res) => {
    var myData = new Email(req.body);
    myData.save()
    .then(item => {
    res.send("Email saved in database");
    })
    .catch(err => {
    res.status(400).send("Unable to save email to database");
    });
   });

app.listen(port, () => {
 console.log("Server listening on port " + port);
});

