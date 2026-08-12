const todaydate = document.querySelector("today");  
const numStored = localStorage.length; 
const lessday = "Back so soon! Awesome!";
const msday = 86400000;

const firstday = "Welcome! Let us know if you have any questions.";



function clearStorage() {
  localStorage.clear(); 
}

function hold() {
  for (i = 0; i < localStorage.length; i++) {
  x = localStorage.key(i);
  document.getElementById("greeting").innerHTML += x;
} 

}




function storeTime() {
  localStorage.setItem("visit", Date.now());
}

window.addEventListener("load", function () {
    let numHold = localStorage.length;
    let msamount = localStorage.key(numHold);

  if (localStorage.length === 0) {
    document.getElementById("greeting").innerHTML =  firstday;
  }
  if (msamount / msday < 1) {
      document.getElementById("greeting").innerHTML = lessday;
    }
  
  if (localStorage.length >= 1) {
    
    
    
    
    if (Math.round(msamount / msday) === 1) {
      document.getElementById("greeting").innerHTML =  "You last visited 1 day ago.";
    }

    if (msamount / msday > 1) {

      document.getElementById("greeting").innerHTML =  `You last visited ${Math.round(msamount / msday)} days ago.`;
    }

  }

  storeTime();
  //clearStorage();
  //document.getElementById("greeting").innerHTML = localStorage.key(1);
  //localStorage.removeItem(localStorage.key(1)); 
  //document.getElementById("greeting").innerHTML = localStorage.length;
});
    
  







  