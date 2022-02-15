var hungerLevel = 50;
var isLunchTime = true;
var lunchBill = 11;

// If statement
// Evaluates to true so "Hungry" is logged

if (hungerLevel >= 50) {
  console.log("Hungry!");
}

// Evaluates to false so nothing is logged
if (hungerLevel < 50) {
  console.log("Hungry!");
}

// Else statement 
// Evaluates to true so "Lunchtime" is logged
if (isLunchTime === false) {
  console.log("Lunchtime");
} else {
  console.log("Not Lunchtime");
}

// isLunchTime is another way of writing "isLunchTime === true"
if (isLunchTime){
  console.log("time for lunch");
}
else{
  console.log("not time for lunch");
}

// Evaluates to false so "It's Lunchtime Already" is logged
if (!isLunchTime){
  console.log("time for lunch");
}
else{
  console.log("not time for lunch");
}

// Else if allows you to test more than one condition
// The first condition is false, so the second condition is evaluated. Logs "Cost Rating: $$""
if (lunchBill > 11){
  console.log("what a deal")
}
else if (lunchBill === 12){
  console.log("ur biill is 11 dollars")
}
else if (lunchBill < 11){
  console.log("ur biill is 11 dollars")
}
else {
  console.log("dang thats a lot of money")
}
