var express = require('express');
var router = express.Router();

var process = require('../utils/tool')

/* GET users listing. */
router.get('/log', function(req, res, next) {
  res.send('log');
});

router.post('/log', function(req, res, next) {

  Promise.all(req.body.ID_list.map( id => process(id))).then(function(values) {
    console.log(values);
    res.send('log');
  });

});

module.exports = router;