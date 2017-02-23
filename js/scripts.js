// Business logic

var arabicNumber = 0;
var romanNumber = "";

var romanNumberConverter = function(arabicNumber) {
  if (arabicNumber === 9) {
    romanNumber = romanNumber.concat("IX");
  } else if (arabicNumber === 8) {
    romanNumber = romanNumber.concat("VIII");
  } else if (arabicNumber === 7) {
    romanNumber = romanNumber.concat("VII");
  } else if (arabicNumber === 6) {
    romanNumber = romanNumber.concat("VI");
  } else if (arabicNumber === 5) {
    romanNumber = romanNumber.concat("V");
  } else if (arabicNumber === 4) {
    romanNumber = romanNumber.concat("IV");
  } else if (arabicNumber === 3) {
    romanNumber = romanNumber.concat("III");
  } else if (arabicNumber === 2) {
    romanNumber = romanNumber.concat("II");
  } else if (arabicNumber === 1) {
    romanNumber = romanNumber.concat("I");
  } else if (arabicNumber === 0) {
    romanNumber = romanNumber.concat("");
  } else {
    romanNumber = "Rilassati, ci stiamo lavorando!"
  }
  return romanNumber;
};

// Front end logic

$(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();
    arabicNumber = parseInt($("input#numberInput").val());
    romanNumber = "";
    output = romanNumberConverter(arabicNumber);
    $(".answer").show();
    $("#arabicNumber").text(arabicNumber);
    $("#romanNumber").text(output);
  });
});
