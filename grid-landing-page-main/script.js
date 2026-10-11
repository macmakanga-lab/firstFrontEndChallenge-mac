console.log("script.js loaded");

let hamburger = document.getElementById('hamburger'); 
let menuPanel = document.getElementById('menu-panel');
let overLay = document.getElementById('overlay'); 
let closeMenu = document.getElementById('close-menu');

hamburger.addEventListener('click', function(){
    menuPanel.classList.add('open');
    overLay.classList.add('open');

    hamburger.style.display = 'none';
    closeMenu.querySelector('img').style.display = 'block';
});

closeMenu.addEventListener('click', function () {
  menuPanel.classList.remove('open');
  overLay.classList.remove('open');
  
  hamburger.style.display = 'block';
    closeMenu.querySelector('img').style.display = "none";

});