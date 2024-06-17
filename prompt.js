const minNumber = arr => Math.min(...arr);
const merge = [...new Set(a.concat(b))];
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';