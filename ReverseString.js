const results = await Promise.all(resultingPromises);
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;