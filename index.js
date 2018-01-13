// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}
 
function happyHolidaysTo(name) {
  return "Happy holidays, ${name}!"
} 

function happyHolidaysTo(holiday, name) {
  happyHolidaysTo("Thanksgiving", "Jane")
  return `Happy ${holiday}, ${name}!`
} 

function holidayCountdown(holiday, days) {
  holidayCountdown("Thanksgiving", 92)
  return `It's ${days} days until ${holiday}!`
} 
