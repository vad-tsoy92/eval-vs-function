const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const randomString = () => Math.random().toString(36).slice(2);