var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.user,"[[[[[[[[[[[[[")
  res.send({"users":[1,23]});  
});

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get homepage
 *     description: Retrieve the homepage content.
 *     responses:
 *       200:
 *         description: Homepage content
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 */
router.get('/pass', function(req, res, next) {
  console.log(req.user,"[[[[[[[[[[[[[")
  res.send({"users":[1,23]});
});

module.exports = router;
