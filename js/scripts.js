$(function() {

  var sentence = prompt("Enter a sentence");
  var f = sentence.charAt(0);
  var l = sentence.charAt(sentence.length-1);
  var letterF = f.toUpperCase();
  var letterL = l.toUpperCase();
  var newsentence = letterF + sentence.substr(1,sentence.length-2) + letterL ;
  alert(newsentence);
});
