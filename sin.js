const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const merge = (a, b) => [...a, ...b];