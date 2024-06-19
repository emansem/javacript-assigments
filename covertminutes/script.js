// Write a function convertMinutes that takes a number of minutes and converts it to a string representing the time in hours and minutes.

function convertMinutes(minutes) {
  let hours;
  const minute = minutes % 60;

  if (minutes < 60) {
    hours = 0;
  } else {
    hours = Math.floor(minutes / 60);
  }

  let result = `${hours} Hours and ${minute} Minutes`;

  return result;
}

console.log(convertMinutes(30));
