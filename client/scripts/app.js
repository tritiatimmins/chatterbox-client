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
    url: "https://api.parse.com/1/classes/chatterbox",
    data: JSON.stringify(message),
    success: function(){}
    
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
// var ajaxInfo = $.ajax({
  // type: "GET",
  // url: "https://api.parse.com/1/classes/chatterbox",
  // data: jsonp
// })


app.clearMessages = function(){
  //how to get rid of #chats
  //right now we have to put something into chats
  //first we have to make chats
  //pull things after chats
  //and get chats
  $("#chats").html('');
};

app.addMessage = function(){
  var message =  {
  username: 'Mel Brooks',
  text: 'Never underestimate the power of the Schwartz!',
  roomname: 'lobby'
  };
  var $message = $(message);
  $message = ("<div>" + message +"</div>")

  $('#chats').append($message);
  
};

app.addRoom = function(message){
  var $message = $(message);
  $message = ("<div>" + message + "</div>");
  $('#roomSelect').append($message);
};

app.addFriend = function(){
 $("#addFriend").on('click', function(){
    console.log("hello friends");
 })
};

