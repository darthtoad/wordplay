$(document).ready(function(){
  var words = [];
  $("form#theForms").submit(function(event){
    event.preventDefault();
    var play = $("#sentence").val();
    var result = [];
    words = play.split(' ');

    // words.forEach(function(word){
    //   if (word.length >=3){
    //     result.push(word);
    //   }
    // });
    result = words.filter(word => word.length >= 3);

    console.log(result.join(' '));
  });
});
