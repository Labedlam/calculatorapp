/**
 * Created by Zeo on 10/30/15.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser= require('body-parser');
var index = require('./routes/index');



app.set("port", process.env.PORT || 4999);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));


app.use('/', index);


app.get("/*", function(req, res){
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});


//app.route('/subtract')
//    .post(function(req, res){
//        res.send({message:"Hello "+req.body.numberYInput});
//    });

//;

app.listen(app.get("port"), function(){
    console.log("Listening: " + app.get("port"));
});