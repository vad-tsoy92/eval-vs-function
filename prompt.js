const isWeekday = (date) => date.getDay() % 6 !== 0;
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());