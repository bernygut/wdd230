// Select the HTML element to manipulate
const date1 = document.querySelector("#date1");
let oLastModif = new Date(document.lastModified);
date1.innerHTML = `Last Updated: ${oLastModif}`;
//Last updated for lesson2