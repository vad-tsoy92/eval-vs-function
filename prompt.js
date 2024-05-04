const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const getRandomBoolean = () => Math.random() >= 0.5;
var DELIM_SIZE = 4;