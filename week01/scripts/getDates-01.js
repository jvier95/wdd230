
const options = {year: 'numeric'};
document.getElementById('getDates-01').textContent = new Date().toLocaleDateString('en-US',options);

const lastModified = new Date(document.lastModified);
const options2 = { year: 'numeric', month: 'numeric', day: 'numeric' };
const formattedLastModified = lastModified.toLocaleDateString('en-US', options2);


document.getElementById('lastModified-01').textContent = `Last Modification: ${formattedLastModified}`;