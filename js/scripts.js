// Business logic

var arabicNumber = 0;
var romanNumber = "";

var romanNumberConverter = function(arabicNumber) {
  if (arabicNumber > 9) {
    tensConverter(arabicNumber);
  } else {
    onesConverter(arabicNumber);
  }
  return romanNumber;
};

var tensConverter = function(arabicNumber) {
  if (arabicNumber >= 90) {
    romanNumber = romanNumber.concat("XC");
    arabicNumber -= 90;
    onesConverter(arabicNumber);
  } else if (arabicNumber >= 80) {
    romanNumber = romanNumber.concat("LXXX");
    arabicNumber -= 80;
    onesConverter(arabicNumber);
  } else if (arabicNumber >= 70) {
    romanNumber = romanNumber.concat("LXX");
    arabicNumber -= 70;
    onesConverter(arabicNumber);
  } else if (arabicNumber >= 60) {
    romanNumber = romanNumber.concat("LX");
    arabicNumber -= 60;
    onesConverter(arabicNumber);
  } else if (arabicNumber >= 50) {
    romanNumber = romanNumber.concat("L");
    arabicNumber -= 50;
    onesConverter(arabicNumber);
  } else if (arabicNumber >= 40) {
    romanNumber = romanNumber.concat("XL");
    arabicNumber -= 40;
    onesConverter(arabicNumber);
  } else if (arabicNumber >= 30) {
    romanNumber = romanNumber.concat("XXX");
    arabicNumber -= 30;
    onesConverter(arabicNumber);
  } else if (arabicNumber >= 20) {
    romanNumber = romanNumber.concat("XX");
    arabicNumber -= 20;
    onesConverter(arabicNumber);
  } else if (arabicNumber >= 10) {
    romanNumber = romanNumber.concat("X");
    arabicNumber -= 10;
    onesConverter(arabicNumber);
  } else if (arabicNumber >= 0) {
    romanNumber = romanNumber.concat("");
    onesConverter(arabicNumber);
  } else {
    romanNumber = "Rilassati, ci stiamo lavorando!"
  }
  return romanNumber;
};

var onesConverter = function(arabicNumber) {
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
