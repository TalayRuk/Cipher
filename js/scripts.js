$(function() {

  var sentence = prompt("Enter a sentence");



  $("h1").click(function() {
    alert(sentence);
  });

  $("h2").click(function() {
    alert(newsentence);
  });






  var f = sentence.charAt(0);
  var l = sentence.charAt(sentence.length-1);
  var letterF = f.toUpperCase();
  var letterL = l.toUpperCase();
  var newsentence = letterF + sentence.substr(1,sentence.length-2) + letterL ;
  alert(newsentence);

  var newsentence = letterL + sentence.substr(1,sentence.length-2) + letterF ;
  alert(newsentence);

  var newsentence = sentence.substr(0,sentence.length-1) + letterL + letterF ;
  alert(newsentence);

  var length = sentence.charAt((sentence.length)/2)
  var length = length.toUpperCase();
  var newsentence = length + sentence + letterL + letterF ;
  alert(newsentence);





});
