const date1 = document.querySelector("#date1");
let oLastModif = document.lastModified;
date1.innerHTML = `Last Updated: ${oLastModif}`;

const year = document.querySelector("#year");
const thisDate = new Date();
const thisYear = thisDate.getFullYear();
year.innerHTML = `© ${thisYear} | Berny Gutiérrez | Santa Ana, San José, Costa Rica`;