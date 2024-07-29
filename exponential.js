const isEmptyObject = obj => Object.keys(obj).length === 0;
const symbolsPath = path.join(buildOutputPath, 'symbols');
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');