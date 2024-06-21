const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const copyToClipboard = (text) => navigator.clipboard.writeText(text);