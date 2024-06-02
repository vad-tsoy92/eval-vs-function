console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const isEmptyArray = arr => !arr.length;