const merge = (a, b) => [...a, ...b];
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
[foo, bar] = [bar, foo];