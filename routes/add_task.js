var tasks = require("../tasks.json");

exports.addTask = function(req, res){
  var name = req.query.name;
  var description = req.query.description;
  var time = req.query.time;
  var image = req.query.image;

  var newTask =
  {
    "name": name,
    "description": description,
    "time": time,
    "image": image
  }
  tasks.tasks.push(newTask);

  res.render('task_list', tasks);
  //console.log(task_number);
}
