const todaydate = document.querySelector("today");  
const numStored = localStorage.length; 
const lessday = "Back so soon! Awesome!";
const moreday = "You last visited n days ago.";
const firstday = "Welcome! Let us know if you have any questions."
//if



localStorage.clear(); 

for (i = 0; i < localStorage.length; i++) {
  x = localStorage.key(i);
  document.getElementById("demo").innerHTML += x;
} 

function createItems() {
  localStorage.setItem("mytime", Date.now());
  localStorage.setItem("myname", "John");
    localStorage.setItem("myage", 36);
    
}
createItems();

function storeTime() {
  localStorage.setItem("visit", Date.now());
}