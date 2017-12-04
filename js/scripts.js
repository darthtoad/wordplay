$(document).ready(function(){
  var words = [];
  $("form#theForms").submit(function(event){
    event.preventDefault();
    var play = $("#sentence").val();
    var result =[];
    words = play.split(' ');

    words.forEach(function(word){
      if (word.length >=3){
        result.push(word);
      }
    });

    console.log(result.join(' '));
  });
});
