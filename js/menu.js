const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu-items');
const link = document.querySelector('.nav-link');

toggle.addEventListener('click', () => {
  menu.classList.toggle('menu_visible');
});

/* document.onclick = function (e) {
  if (e.target.id !== 'toggle') {
    menu.classList.remove('menu_visible');
    toggle.classList.remove('menu_visible');
  }
}; */
