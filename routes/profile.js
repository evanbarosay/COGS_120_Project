var data = require('../user.json');

exports.view = function(req, res){

  console.log("Viewing My Profile");
  res.render('profile', data);
};
