const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const currentDate = () => new Date().toLocaleDateString('en-US');
const timeFromDate = date => date.toTimeString().slice(0, 8);