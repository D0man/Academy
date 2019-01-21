const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const { addEmail, getEmails } = require('../functions/index');

app.use(bodyParser.json());
app.use(cors());
app.post("/api/subscription/add", addEmail);
app.get("/api/subscriptions", getEmails);

app.listen(4000);
