'use strict';

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const low = require('lowdb');
const storage = require('lowdb/file-sync');
const uuid = require('node-uuid');
const chalk = require('chalk');


//=====================================
// Init database
//-------------------------------------
const db = low(__dirname + '/db.json', {storage});


//=====================================
// Socket Event Handlers
//-------------------------------------
io.on('connection', socket => {

  socket.on('loadTasks', () => {
    socket.emit('loaded', db('tasks'));
  });

  socket.on('createTask', data => {
    data.id = uuid.v4();
    let task = db('tasks').chain().push(data).last().value();
    socket.emit('created', task);
  });

  socket.on('deleteTask', task => {
    db('tasks').remove({id: task.id});
    socket.emit('deleted', task);
  });

  socket.on('updateTask', (task, changes) => {
    let updatedTask = db('tasks').chain().find({id: task.id}).assign(changes).value();
    socket.emit('updated', updatedTask);
  });

});


//=====================================
// Start Server
//-------------------------------------
server.listen(3002, 'localhost', () => {
  console.log(chalk.gray(' --------------------------------------'));
  console.log('       Socket.io: ' + chalk.magenta('http://localhost:3002'));
  console.log(chalk.gray(' --------------------------------------'));
});
