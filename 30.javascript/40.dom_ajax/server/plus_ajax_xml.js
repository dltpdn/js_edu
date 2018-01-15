var express = require('express');
var path = require('path');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../plus_ajax_xml.html'));
});

app.get('/plus_xml', function(req, res){
    var data = {p1 : req.query.p1,
        p2 : req.query.p2,
        res : Number(req.query.p1) + Number(req.query.p2)
    };
    var xml = '<?xml version="1.0" encoding="UTF-8"?>'+
    '<data>' + 
        '<p1 value="' + data.p1 + '"/>' + 
        '<p2 value="' + data.p2 + '"/>'+
        '<res value="' + data.res + '"/>' + 
    '</data>';
    res.set({'Content-Type' : "application/xml", 'ETag': new Date()});
    res.send(xml);
    
});

app.listen(9090, function(){
    console.log('plus_xml server on 9090...');
});