var express = require('express');
var path = require('path')
var app = express();
app.use(express.static(path.join(__dirname, 'src')));
app.get('/lib', function(req, res) {
    res.download('./src/components/index.jsx')
});
app.listen(8080, function() {
    console.log('listen this port 8080...');
})