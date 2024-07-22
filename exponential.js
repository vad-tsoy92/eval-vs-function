const resultingPromises = urls.map((url) => makHttpRequest(url));
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);