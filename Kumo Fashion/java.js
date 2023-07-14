const header = document.querySelector("header");

window.addEventListener ("scrool", function() {
    header.classList.toogle ("sticky", this.window.scrolly > 0);
});
let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-xxxx');
    navmenu.classList.toggle('open');
}