// Select the HTML element to manipulate
const date1 = document.querySelector("#date1");
let oLastModif = new document.lastModified;
date1.innerHTML = `Last Updated: ${oLastModif}`;
const year = document.querySelector("year");
let thisYear = new Date(document.lastModified).getFullYear;
year.innerHTML = "© ${thisYear} | Berny Gutiérrez | Santa Ana, San José, Costa Rica";