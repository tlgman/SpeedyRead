var express = require('express');
var router = express.Router();
var Parser = new require('../controller/parser');

//Parser.findSentence('resources/documents/Les_trois_mousquetaires.txt', 'resources/db');
//console.log(Parser.findSentence('dd', 'dd'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'SpeedyRead' });
})
    .get('/home', function(req, res){
      res.render('index');
    })
    .get('/game', function(req, res){

        res.render('game');

    });

module.exports = router;
