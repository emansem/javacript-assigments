/** @format */
function calculateGrade(score) {
  let result;

  if (score >= 90 && score <= 100) {
    result = "A";
  } else if (score >= 80 && score < 90) {
    result = "B";
  } else if (score >= 70 && score < 80) {
    result = "C";
  } else if (score >= 60 && score < 70) {
    result = "D";
  } else if (score >= 0 && score < 60) {
    result = "F";
  } else {
    result = "Invalid score";
  }

  return result;
}

console.log(calculateGrade(500));
