let express = require('express');
let app = express();

console.log("Hello World")

app.get('/',function(get, res) {
    res.sendFile(absolutePath = __dirname + '/views/index.html')}
)

app.get('/',function(get, res) {
        res.send('Hello Express')}
)

app.use('/public', express.static(__dirname + '/public'));

































 module.exports = app;
