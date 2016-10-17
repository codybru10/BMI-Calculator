var divide = function(weight, height) { return weight / Math.pow(height, 2);
};

var multiply = function(result1) {return result1 * 703;
};

var weight = parseInt(prompt("How much do you weigh in pounds?"));
var height = parseInt(prompt("How tall are you in inches?"));
var result1 = divide(weight, height);
var result2 = multiply(result1);
var sentence = "Your BMI is " + result2 + ".";
alert(sentence);
