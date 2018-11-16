/*
 * Hello. 2 points.
 */

function hello() {
  var div = document.getElementById("output1");
  div.innerHTML = "Hello, AP Computer Science Principles!"

  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

  name = prompt("Hello! What is your name?")
  var div = document.getElementById("output2")
  div.innerHTML = 'Hello, ' + name + "!"

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  var fahrenheitTemp = ((cels * (9/5)) + 32)
  var fahRound = fahrenheitTemp.toFixed(2)
  var div = document.getElementById("output3")
  div.innerHTML = cels + " degrees Celsius equals " + fahRound + " degrees Fahrenheit."

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  var celsiusTemp = ((fahr - 32) * (5/9))
  var celsRound = celsiusTemp.toFixed(2)
  var div = document.getElementById("output4")
  div.innerHTML = fahr + " degrees Fahrenheit equals " + celsRound + " degrees Celsius."

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let miles = 0;
  let feet = 0;
  let yards = 0;
  let inch = 0;
  while (inches > 0) {
    if (inches >= 63360){
      inches = inches - 63360;
      miles = miles + 1;
    }
    if (inches < 63360 && inches >= 36){
      inches = inches - 36;
      yards = yards + 1;
    }
    if (inches < 36 && inches >= 12){
      inches = inches - 12;
      feet = feet + 1;
    }
    if (inches < 12){
    inches = inches - 1;
    inch = inch + 1;
    }
  }

  var div = document.getElementById("output5")
  div.innerHTML = "Miles: " + miles + "<br>Yards: " + yards + "<br>Feet: " + feet + "<br>Inches: " + inch

  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let centi = 0;
  let meters = 0;
  let kiloMeters = 0;
  while (centimeters > 0) {
    if (centimeters >= 100000){
      centimeters = centimeters - 100000;
      kiloMeters = kiloMeters + 1;
    }
    if (centimeters < 100000 && centimeters >= 100){
      centimeters = centimeters - 100;
      meters = meters + 1;
    }
    if (centimeters < 100){
      centimeters = centimeters - 1;
      centi = centi + 1;
    }
  }

  var div = document.getElementById("output6")
  div.innerHTML = "Kilometers: " + kiloMeters + "<br>Meters: " + meters + "<br>Centimeters: " + centi

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let gallons = (fluidOunces/128);
  gallons = (Math.floor(gallons))
  let quarts = (fluidOunces % 128/32);
  quarts = (Math.floor(quarts))
  let pints = (fluidOunces % 128 % 32/16);
  pints = (Math.floor(pints))
  let cups = (fluidOunces % 128 % 32 % 16/8);
  cups = (Math.floor(cups))
  let floz = (fluidOunces % 128 % 32 % 16 % 8)
  floz = (Math.floor(floz))

  var div = document.getElementById("output7")
  div.innerHTML = "Gallons: " + gallons + "<br>Quarts: " + quarts + "<br>Pints: " + pints + "<br>Cups: " + cups + "<br>Fluid Ounces: " + floz

  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let tons = (ounces/32000);
  tons = (Math.floor(tons))
  let pounds = (ounces % 32000/16);
  pounds = (Math.floor(pounds))
  let ounce = (ounces % 32000 % 16);
  ounce = (Math.floor(ounce))


  var div = document.getElementById("output8")
  div.innerHTML = "Tons: " + tons + "<br>Pounds: " + pounds + "<br>Ounces: " + ounce

  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  let dollars = (pennies/100);
  dollars = (Math.floor(dollars))
  let quarters = (pennies % 100/25);
  quarters = (Math.floor(quarters))
  let dimes = (pennies % 100 % 25/10);
  dimes = (Math.floor(dimes))
  let nickels = (pennies % 100 % 25 % 10/5);
  nickels = (Math.floor(nickels))
  let penny = (pennies % 100 % 25 % 10 % 5)
  penny = (Math.floor(penny))

  var div = document.getElementById("output9")
  div.innerHTML = "Dollars: " + dollars + "<br>Quarters: " + quarters + "<br>Dimes: " + dimes + "<br>Nickels: " + nickels + "<br>Pennies: " + penny

  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let quarterCoins = 0;
  let dimeCoins = 0;
  let nickelCoins = 0;
  let pennyCoins = 0;
  while (amount > 0) {
    if (amount >= 1.00){
      amount = amount - 0.25;
      quarterCoins = quarterCoins + 1;
    }
    if (amount < 0.25 && amount >= 0.10){
      amount = amount - 0.10;
      dimeCoins = dimeCoins + 1;
    }
    if (amount < 0.10 && amount >= 0.05){
      amount = amount - 12;
      nickelCoins = nickelCoins + 1;
    }
    if (amount < 0.05){
    amount = amount - 1;
    pennyCoins = pennyCoins + 1;
    }
    coins = pennyCoins + dimeCoins + nickelCoins + pennyCoins
  }

  var div = document.getElementById("output10")
  if (coins = 1) {
    div.innerHTML = coins + " coin."
  }
  else if (coins > 1){
    div.innerHTML = coins + " coins."
  }


  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
