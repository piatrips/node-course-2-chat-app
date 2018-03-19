var socket= io();
socket.on('connect', function () {
  console.log('Connected to server');
});


socket.emit('createMessage', {
  to: 'piakahol@gmail.com',
  text:'hey how are you whats up',
});

socket.on('disconnect', function () {
console.log('Disconnected to server');

});



socket.on('newMessage', function(message){
console.log('New Message', message)

});
