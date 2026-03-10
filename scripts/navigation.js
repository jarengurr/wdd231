const navButton = document.querySelector("#ham-bt");
const navBar = document.querySelector('#nav-list');
navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});

