let express = require('express');
let app = express();

console.log("Hello World")

app.get('/',function(get, res) {
    res.sendFile(absolutePath = __dirname + '/views/index.html')}
)

  app.get('/',function(get, res) {
        res.send('Hello Express')}
)


































 module.exports = app;
