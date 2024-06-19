/** @format */

//converting fahrenheit into  celsius (F-32)/1.8  =CEL
//converting  celsius into  fahrenheit  (C X 32)+1.8  =FAH.
let temperature;

const unit = prompt(
  "Enter your Unit to get  currenct temperate F for Fahrenheit  C for Celsius",
);

if (unit === "C") {
  let result = Number(
    prompt("Enter your location Weather degrees to convert into Fahrenheit"),
  );
  temperature = result * 1.8 + 32;
  alert(`${result}°C is ${temperature.toFixed(2)}°F`);
} else if (unit === "F") {
  let result = Number(
    prompt("Enter your location Weather degrees to convert into Celsius"),
  );
  temperature = (result - 32) / 1.8;
  alert(`${result}°F is ${temperature.toFixed(2)}°C`);
}
