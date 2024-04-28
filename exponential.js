const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
console.log("0 || 1 = "+(0 || 1));
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';