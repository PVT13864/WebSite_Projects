
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

let reports = [];

app.post('/api/report', (req, res) => {
  const report = req.body;
  reports.push(report);
  res.status(201).send({ message: 'Report received' });
});

app.get('/api/reports', (req, res) => {
  res.json(reports);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
