const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const timeFromDate = date => date.toTimeString().slice(0, 8);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const maxNumber = arr => Math.max(...arr);
console.log(1 +  +"2" + "2");