const uniqueArray = arr => [...new Set(arr)];
const scriptRootPath = path.join(repositoryRootPath, 'script');
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];