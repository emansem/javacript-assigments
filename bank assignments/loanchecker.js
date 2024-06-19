let age = Number(prompt("Enter your age "));
let annualIncome = Number(prompt("Enter your Annual Income"));
if (age >= 18 && age < 65 && annualIncome >= 25000) {
  alert("You are eligible for the loan  ");
} else {
  alert("You are not aligible for this loan");
}
