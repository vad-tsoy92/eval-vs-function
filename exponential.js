const shuffledArray = array.sort(() => Math.random() - 0.5); 
const removeDuplicates = (arr) => [...new Set(arr)];