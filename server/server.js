var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var low = require('lowdb');
var uuid = require('node-uuid');
var chalk = require('chalk');


//=====================================
// Init database
//-------------------------------------
var db = low(__dirname + '/db.json');


//=====================================
// Socket Event Handlers
//-------------------------------------
io.on('connection', function(socket){

  socket.on('loadTasks', function(){
    socket.emit('loaded', db('tasks'));
  });

  socket.on('createTask', function(data){
    data.id = uuid.v4();
    var task = db('tasks').chain().push(data).last().value();
    socket.emit('created', task);
  });

  socket.on('deleteTask', function(task){
    db('tasks').remove({id: task.id});
    socket.emit('deleted', task);
  });

  socket.on('updateTask', function(task, changes){
    var updatedTask = db('tasks').chain().find({id: task.id}).assign(changes).value();
    socket.emit('updated', updatedTask);
  });

});


//=====================================
// Start Server
//-------------------------------------
exports.start = function(callback) {
  server.listen(3000, 'localhost', function(){
    console.log(chalk.gray(' --------------------------------------'));
    console.log('       Socket.io: ' + chalk.magenta('http://localhost:3000'));
    console.log(chalk.gray(' --------------------------------------'));

    callback();
  });
};
