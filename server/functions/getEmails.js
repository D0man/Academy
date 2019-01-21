const cors = require('cors');
const corsHandler = cors();

module.exports = db => (req, res) => {
  corsHandler(req, res, () => {
    db.collection("subscribers_emails")
    .get()
    .then(querySnapshot => {
      const emails = [];
      querySnapshot.forEach(doc => {
        emails.push({
          id: doc.id,
          data: doc.data().email,
        });
      });
      res.json({ emails });
    });
  });
};
