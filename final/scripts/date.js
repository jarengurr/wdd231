// date on footer
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let lmDate = document.lastModified
document.getElementById("lastModified").innerHTML = lmDate;
//document.getElementById("theDate").value = lmDate;