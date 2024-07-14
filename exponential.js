const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const results = await Promise.all(resultingPromises);
const appName = getAppName(channel);