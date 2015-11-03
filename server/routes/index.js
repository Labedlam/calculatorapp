/**
 * Created by Zeo on 10/30/15.
 */
var express = require("express");
var router = express.Router();
var path = require('path');
var bodyParser= require('body-parser');


router.route('/add')
    .post(function(req, res){
        var numberPlay=req.body;
        numberPlay.x= Number(req.body.numberXInput);
        numberPlay.y= Number(req.body.numberYInput);
        numberPlay.answer = numberPlay.x +numberPlay.y;
        res.send(numberPlay) ;
    });

router.route('/subtract')
    .post(function(req, res){
        var numberPlay=req.body;
        numberPlay.x= Number(req.body.numberXInput);
        numberPlay.y= Number(req.body.numberYInput);
        numberPlay.answer = numberPlay.x - numberPlay.y;
        res.send(numberPlay) ;
    });

router.route('/multiple')
    .post(function(req, res){
        var numberPlay=req.body;
        numberPlay.x= Number(req.body.numberXInput);
        numberPlay.y= Number(req.body.numberYInput);
        numberPlay.answer = numberPlay.x * numberPlay.y;
        res.send(numberPlay) ;
    });

router.route('/divide')
    .post(function(req, res){
        var numberPlay=req.body;
        numberPlay.x= Number(req.body.numberXInput);
        numberPlay.y= Number(req.body.numberYInput);
        numberPlay.answer = numberPlay.x / numberPlay.y;
        res.send(numberPlay) ;
    });

module.exports=router;