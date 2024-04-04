var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.user,"[[[[[[[[[[[[[")
  res.send({"users":[1,23]});
});

module.exports = router;
