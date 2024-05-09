const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const channelName = getChannelName(channel);
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;