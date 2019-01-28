const days = ["Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];

const fullDays = days.map((day, index) => `#${index} ${day}day`);

console.log(fullDays);