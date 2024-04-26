const appName = getAppName(channel);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const minNumber = arr => Math.min(...arr);