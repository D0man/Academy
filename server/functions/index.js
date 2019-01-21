const dotenv = require('dotenv');
const firebase = require('firebase');
const functions = require('firebase-functions');
const addEmailFunction = require('./addEmail');
const getEmailsFunction = require('./getEmails');

dotenv.config();

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
});

const db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true,
});

exports.addEmail = functions.https.onRequest(addEmailFunction(db));
exports.getEmails = functions.https.onRequest(getEmailsFunction(db));
