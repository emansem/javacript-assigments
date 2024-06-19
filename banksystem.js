/** @format */

let balance = 1000;

const action = prompt(
  "Hey welcome , Choose deposit,withdrawal or Check Balance to perform a action",
);
let result;

if (action === "deposit") {
  result = prompt("enter amount");
  const finalResult = Number(result);
  if (!isNaN(finalResult)) {
    balance += finalResult;
    alert(
      `You you have successfully deposited $${finalResult}. New Balance is $${balance} `,
    );
  } else {
    alert("Please enter a valide Number");
  }
}

if (action === "withdrawal") {
  result = prompt("enter amount");
  const finalResult = Number(result);

  if (!isNaN(finalResult)) {
    if (result > balance) {
      alert("Please you  have insufficient balance");
    } else {
      balance = balance - finalResult;
      alert(
        `You you have successfully Withdrawn $${finalResult}. New Balance is $${balance} `,
      );
    }
  } else {
    alert("Please Enter a vlide Number");
  }
}

if (action === "Check Balance") {
  alert(`Your balance is $${balance}`);
}
