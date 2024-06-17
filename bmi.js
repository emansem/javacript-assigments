let weight = 80.8;
let height = 1.8;
let bmi = weight / (height * height);
console.log(bmi);
let classify;

if (bmi < 16) {
  classify = `Severe Thinness and  Bmi is : ${bmi}`;
} else if (bmi >= 16 && bmi < 17) {
  classify = `Moderate Thinness and class is : ${bmi}`;
} else if (bmi >= 17 && bmi < 18.5) {
  classify = `Mild Thinness and class is : ${bmi}`;
} else if (bmi >= 18.5 && bmi < 25) {
  classify = `Normal and class is : ${bmi}`;
} else if (bmi >= 25 && bmi < 30) {
  classify = `Overweight and class is : ${bmi}`;
} else if (bmi >= 30 && bmi < 35) {
  classify = `Obese Class I and class is : ${bmi}`;
} else if (bmi >= 35 && bmi < 40) {
  classify = `Obese Class II and class is : ${bmi}`;
} else if (bmi >= 40) {
  classify = `Obese Class IIIand class is : ${bmi}`;
}
console.log(classify);
