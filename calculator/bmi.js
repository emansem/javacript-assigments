/** @format */

let weight = 80.8;
let height = 1.8;
let bmi = weight / height ** 2;
console.log(bmi);
let classify;

if (bmi < 16) {
  classify = `Severe Thinness `;
} else if (bmi >= 16 && bmi < 17) {
  classify = `Moderate Thinness `;
} else if (bmi >= 17 && bmi < 18.5) {
  classify = `Mild Thinness `;
} else if (bmi >= 18.5 && bmi < 25) {
  classify = `Normal `;
} else if (bmi >= 25 && bmi < 30) {
  classify = `Overweight `;
} else if (bmi >= 30 && bmi < 35) {
  classify = `Obese Class I `;
} else if (bmi >= 35 && bmi < 40) {
  classify = `Obese Class II `;
} else if (bmi >= 40) {
  classify = `Obese Class III`;
}
console.log(`${classify} and bmi is ${bmi}`);
