const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contact', (req, res) => {
  console.log('Form Data:', req.body);
  res.json({ message: 'Message received! We will contact you soon.' });
});

app.listen(port, () => {
  console.log(`Celestial Project running at http://localhost:${port}`);
});