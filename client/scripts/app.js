// YOUR CODE HERE:
// $.ajax({
//   type: "GET", "POST",
//   url: "https://api.parse.com/1/classes/chatterbox",
//   success: function(){

//   }
//   error: function(){

//   }
// })
var app = {};

app.init = function(){
  return true;
};


app.send = function(){
  var message = {
    username: 'Mel Brooks',
    text: 'It\'s good to be the king',
    roomname: 'lobby'
  };

  $.ajax({
    type: "POST",
    url: "https://api.parse.com/1/classes/chatterbox.jsonp",
    data: JSON.stringify(message),
    success: function(){}
    // error: function(){}
  })
};


app.fetch = function(){
  // return true;
  $.ajax({
    type: "GET",
    url: undefined,
    success: function(){}
    // error: function(){}
  })
};


app.clearMessages = function(){
  //how to get rid of #chats
  $("#chats").html('');

};

app.addMessage = function(){
  var message =  {
  username: 'Mel Brooks',
  text: 'Never underestimate the power of the Schwartz!',
  roomname: 'lobby'
  };
  var $message = $(message);
  $('#chats').append($message);
};

app.addRoom = function(string){
  
};



