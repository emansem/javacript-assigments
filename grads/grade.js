/** @format */

//assign the grade values

const mathGrade = 85;
const scienegrade = 20;
const englishGrade = 75;

const average = (mathGrade + scienegrade + englishGrade) / 3;

let restult;
if (average >= 90) {
  restult = " And the grade is A";
} else if (average >= 80) {
  restult = " And the grade is B";
} else if (average >= 70) {
  restult = " And the grade is C";
} else if (average >= 60) {
  restult = " And the grade is D";
} else if (average < 59) {
  restult = " And the grade is F";
}
console.log(` The average grade is ${average}  ${restult}`);
