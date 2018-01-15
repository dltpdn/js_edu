var express = require('express');
var path = require('path');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../plus_form.html'));
});

app.get('/plus_form', function(req, res){
    res.render('plus_form', {p1 : req.query.p1,
        p2 : req.query.p2,
        res : Number(req.query.p1) + Number(req.query.p2)
    });
});

app.listen(9090, function(){
    console.log('plus_form server on 9090...');
});