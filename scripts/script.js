// Select the HTML element to manipulate
const date1 = document.querySelector("#date1");
let oLastModif = new document.lastModified;
date1.innerHTML = `Last Updated: ${oLastModif}`;

const year = document.querySelector("#year");
let thisHappyYear = new Date(document.lastModified).getFullYear;
year.innerHTML = `© ${thisHappyYear} | Berny Gutiérrez | Santa Ana, San José, Costa Rica`;