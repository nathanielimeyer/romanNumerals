var arabicNumber = 0;
var romanNumber = "";

var romanNumberConverter = function(arabicNumber) {
  if (arabicNumber === 1) {
    return "I";
  }
}

$(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();
    arabicNumber = parseInt($("input#numberInput").val());
    romanNumber = romanNumberConverter(arabicNumber);
    $(".answer").show();
    $("#arabicNumber").text(arabicNumber);
    $("#romanNumber").text(romanNumber);
  });
});
