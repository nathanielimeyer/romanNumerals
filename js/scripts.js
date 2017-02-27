var arabicHash = [5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romanHash = ["\u2181", "M\u2181", "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var romanNumberConverter = function(arabicNumber, n) {
  if (arabicNumber === 0) {return romanNumber;}
  else if (arabicNumber >= arabicHash[n]) {
    romanNumber = romanNumber.concat(romanHash[n]);
    arabicNumber -= arabicHash[n];
    romanNumberConverter(arabicNumber, n);}
  else {romanNumberConverter(arabicNumber, n+1);}
  return romanNumber;
};

$(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();
    romanNumber = "";
    $("p").hide();
    var arabicNumber = Math.abs(parseInt($("input#numberInput").val()));
    if (!arabicNumber) {$("#errorFeedback").show();}
    else if (arabicNumber > 8999) {$("#sizeFeedback").show();}
    else  {
      output = romanNumberConverter(arabicNumber, 0);
      $(".answer").show();
      $("#arabicNumber").text(arabicNumber);
      $("#romanNumber").text(output);
    }
  });
});
