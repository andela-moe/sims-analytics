const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const http = require('http');
const port = process.env.PORT || 8080;

const app = express();
app.server = http.createServer(app);

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

if (!module.parent) {
  app.server.listen(port);
  console.info(`Started on port ${port}`, 'info');
}

module.exports = app;