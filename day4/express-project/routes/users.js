var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/mine',function(req,res,next){
//返回一段HTML内容
res.render('test',{
  name:'zz'
});
});
module.exports = router;
