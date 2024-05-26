const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const isEven = (num) => num % 2 === 0;
const isTabInView = () => !document.hidden;