const isWeekday = (date) => date.getDay() % 6 !== 0;
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const merge = (a, b) => a.concat(b);