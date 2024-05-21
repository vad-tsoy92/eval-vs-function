const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);