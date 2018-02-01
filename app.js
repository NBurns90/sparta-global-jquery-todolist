$(document).ready(function(){

  // Code goes from here

  var getInput ='';

  $('#submit').click(function(){
    getInput = ($('#newTodo:text').val());
    $('#newTodo:text').val('');
    $('#toDoList').append($('<li class="list-item">' + getInput + '</li>'));
    console.log(getInput);
  });


// append('<li class="list-item">' + getInput + '</li>');


});
