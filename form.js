const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/academy", {
    useNewUrlParser: true
});
const nameSchema = new mongoose.Schema({
    email: String
});
const Email = mongoose.model("Email", nameSchema);

app.use(express.static(__dirname + '/'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/saveemail", (req, res) => {
    const myData = new Email(req.body);
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