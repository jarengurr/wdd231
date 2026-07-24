const mydarkmode = document.querySelector("#darkmode");

mydarkmode.addEventListener("click", () => {
   darkmodehead();

});


function darkmodehead() {
   var element = document.getElementsByName('header');
   element.classList.toggle(".adarkmode");
}
