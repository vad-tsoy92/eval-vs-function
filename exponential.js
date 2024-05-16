const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const electronDownloadPath = path.join(repositoryRootPath, 'electron');