const navbutton = document.querySelector('#ham-bt');
const navBar = document.querySelector('#nav-list');
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navBar.classList.toggle('show');  
})

