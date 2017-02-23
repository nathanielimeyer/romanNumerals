// Business logic

var arabicNumber = 0;
var romanNumber = "";

var romanNumberConverter = function(arabicNumber) {
  if (arabicNumber > 999) {
    thousandsConverter(arabicNumber);
  } else if (arabicNumber > 99) {
    hundredsConverter(arabicNumber);
  } else if (arabicNumber > 9) {
    tensConverter(arabicNumber);
  } else {
    onesConverter(arabicNumber);
  }
  return romanNumber;
};

var thousandsConverter = function(arabicNumber) {
  if (arabicNumber >= 1000) {
    romanNumber = romanNumber.concat("M");
    arabicNumber -= 1000;
    thousandsConverter(arabicNumber);
  } else {
    hundredsConverter(arabicNumber);
  }
  return romanNumber;
};

var hundredsConverter = function(arabicNumber) {
  if (arabicNumber >= 900) {
    romanNumber = romanNumber.concat("CM");
    arabicNumber -= 900;
    tensConverter(arabicNumber);
  } else if (arabicNumber >= 500) {
    romanNumber = romanNumber.concat("D");
    arabicNumber -= 500;
    hundredsConverter(arabicNumber);
  } else if (arabicNumber >= 400) {
    romanNumber = romanNumber.concat("CD");
    arabicNumber -= 400;
    tensConverter(arabicNumber);
  } else if (arabicNumber >= 100) {
    romanNumber = romanNumber.concat("C");
    arabicNumber -= 100;
    hundredsConverter(arabicNumber);
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
  } else if (arabicNumber >= 50) {
    romanNumber = romanNumber.concat("L");
    arabicNumber -= 50;
    tensConverter(arabicNumber);
  } else if (arabicNumber >= 40) {
    romanNumber = romanNumber.concat("XL");
    arabicNumber -= 40;
    onesConverter(arabicNumber);
  } else if (arabicNumber >= 10) {
    romanNumber = romanNumber.concat("X");
    arabicNumber -= 10;
    tensConverter(arabicNumber);
  } else {
    onesConverter(arabicNumber);
  }
  return romanNumber;
};

var onesConverter = function(arabicNumber) {
  if (arabicNumber === 9) {
    romanNumber = romanNumber.concat("IX");
  } else if (arabicNumber >= 5) {
    romanNumber = romanNumber.concat("V");
    arabicNumber -= 5;
    onesConverter(arabicNumber);
  } else if (arabicNumber === 4) {
    romanNumber = romanNumber.concat("IV");
  } else if (arabicNumber >= 1) {
    romanNumber = romanNumber.concat("I");
    arabicNumber -= 1;
    onesConverter(arabicNumber);
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
    if (!arabicNumber) {
      $("#errorFeedback").show();
    } else {
      $("#errorFeedback").hide();
      output = romanNumberConverter(arabicNumber);
      $(".answer").show();
      $("#arabicNumber").text(arabicNumber);
      $("#romanNumber").text(output);
    }
    romanNumber = "";
  });
});
