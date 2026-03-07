const navButton = document.querySelector("#ham-bt");
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
});

const navBar = document.querySelector('#nav-list');

navBar.addEventListener('click', () => {
  navBar.classList.toggle('show'); 
  navBar.classList.toggle('show');  
});