const cors = require('cors');
const corsHandler = cors();

module.exports = db => (req, res) => {
  corsHandler(req, res, () => {
    const email = req.body.email;
    db.collection('subscribers_emails').add({
      email,
    })
    .then(() => {
      res.sendStatus(200)
    })
    .catch(() => {
      res.sendStatus(500);
    });
  })
};
