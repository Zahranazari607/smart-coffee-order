// Part 1: Login & Access Control
const validUsernames = ["admin", "user"];
const validPassword = "1234";

const username = prompt("Enter your username (admin or user):");
const password = prompt("Enter your password:");

if (!validUsernames.includes(username) || password !== validPassword) {
  alert("Invalid credentials! Access denied.");
  throw new Error("Access denied");
}

let role = username;
let securityLevel = (username === "admin") ? "high" : "low";

// Part 2: Coffee Shop Order Calculator
const customerName = prompt("What's your name?");
const age = parseInt(prompt("How old are you?"));
const coffeeType = prompt("Choose coffee type: espresso, latte, or cappuccino").toLowerCase();
const quantity = parseInt(prompt("How many cups would you like?"));

let pricePerCup;
switch (coffeeType) {
  case "espresso":
    pricePerCup = 2.5;
    break;
  case "latte":
    pricePerCup = 3.5;
    break;
  case "cappuccino":
    pricePerCup = 4.0;
    break;
  default:
    alert("Invalid coffee type selected!");
    throw new Error("Invalid coffee type");
}

let originalTotal = pricePerCup * quantity;
let discount = 0;

if (age < 18 || age > 60) {
  discount = originalTotal * 0.10;
}

let finalTotal = originalTotal - discount;

// Part 3: Bill Splitter with Tip
const peopleCount = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
const tipPercentage = parseInt(prompt("Enter tip percentage (0, 5, 10, or 15):"));

let tipAmount = (finalTotal * tipPercentage) / 100;
let totalWithTip = finalTotal + tipAmount;
let amountPerPerson = totalWithTip / peopleCount;

// Display Results
alert(`Hello ${customerName}!
You ordered ${quantity} ${coffeeType}(s).
Original total: $${originalTotal.toFixed(2)}
Discount: $${discount.toFixed(2)}
Tip: $${tipAmount.toFixed(2)}
Total with Tip: $${totalWithTip.toFixed(2)}
Split between ${peopleCount} people: $${amountPerPerson.toFixed(2)} each`);
