var express = require('express');
var path = require('path');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../plus_jsonp.html'));
});

app.get('/plus_jsonP', function(req, res){
    console.log('jsonP');
    var data = {p1 : req.query.p1,
        p2 : req.query.p2,
        res : Number(req.query.p1) + Number(req.query.p2)
    };
    res.jsonp(data);
    
});

app.listen(9090, function(){
    console.log('plus_jsonp server on 9090...');
});