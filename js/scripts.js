// Business logic

var arabicNumber = 0;
var romanNumber = "";

var romanNumberConverter = function(arabicNumber) {
  if (arabicNumber > 99) {
    hundredsConverter(arabicNumber);
  } else if (arabicNumber > 9) {
    tensConverter(arabicNumber);
  } else {
    onesConverter(arabicNumber);
  }
  return romanNumber;
};

var hundredsConverter = function(arabicNumber) {
  if (arabicNumber >= 900) {
    romanNumber = romanNumber.concat("CM");
    arabicNumber -= 900;
    tensConverter(arabicNumber);
  } else if (arabicNumber >= 800) {
    romanNumber = romanNumber.concat("DCCC");
    arabicNumber -= 800;
    tensConverter(arabicNumber);
  } else if (arabicNumber >= 700) {
    romanNumber = romanNumber.concat("DCC");
    arabicNumber -= 700;
    tensConverter(arabicNumber);
  } else if (arabicNumber >= 600) {
    romanNumber = romanNumber.concat("DC");
    arabicNumber -= 600;
    tensConverter(arabicNumber);
  } else if (arabicNumber >= 500) {
    romanNumber = romanNumber.concat("D");
    arabicNumber -= 500;
    tensConverter(arabicNumber);
  } else if (arabicNumber >= 400) {
    romanNumber = romanNumber.concat("CD");
    arabicNumber -= 400;
    tensConverter(arabicNumber);
  } else if (arabicNumber >= 300) {
    romanNumber = romanNumber.concat("CCC");
    arabicNumber -= 300;
    tensConverter(arabicNumber);
  } else if (arabicNumber >= 200) {
    romanNumber = romanNumber.concat("CC");
    arabicNumber -= 200;
    tensConverter(arabicNumber);
  } else if (arabicNumber >= 100) {
    romanNumber = romanNumber.concat("C");
    arabicNumber -= 100;
    tensConverter(arabicNumber);
  } else {
    tensConverter(arabicNumber);
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
  } else {
    onesConverter(arabicNumber);
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
