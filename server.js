const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/cat-breed-chooser'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname +
    '/dist/cat-breed-chooser/index.html'));
});
app.listen(process.env.PORT || 8080);
