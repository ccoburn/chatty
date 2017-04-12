const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let messages = [];


app.use(express.static('assets'))
app.use(bodyParser.json())

app.get('/messages', function (req, res, next) {
  res.status(200).send({ messages: messages });
});

app.post('/messages', function (req, res, next) {
  messages.unshift({message: req.body.message, time: new Date()});
  res.status(200).send({ messages: messages });
});


app.listen(3000, function () {
 console.log('Listening on port', 3000);
});
