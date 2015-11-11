// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function checkYearLeap(year) {
	if (year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0 )) {return true}
  return false
}
console.log(checkYearLeap(1200));