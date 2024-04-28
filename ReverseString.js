const reversedString = str => str.split('').reverse().join('');
const isArray = (arr) => Array.isArray(arr);
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const merge = [...new Set([...a, ...b])];