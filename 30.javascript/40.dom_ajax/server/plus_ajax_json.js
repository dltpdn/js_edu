var express = require('express');
var path = require('path');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../plus_ajax_json.html'));
});

app.get('/plus_json', function(req, res){
    var data = {p1 : req.query.p1,
        p2 : req.query.p2,
        res : Number(req.query.p1) + Number(req.query.p2)
    };

    res.json(data);
    
});

app.listen(9090, function(){
    console.log('plus_xml server on 9090...');
});