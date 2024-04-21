const btnMenu = document.getElementById("open_menu");
const nav = document.getElementById("nav");
const overlay = document.querySelector('.overlay');

document.addEventListener('click', (e) => {
    if (e.target.closest('#open_menu')) {
        nav.classList.toggle('active_nav');
        overlay.classList.toggle('show_overlay');
        nav.classList.remove('slide-out');
        nav.classList.contains('slide-in') ? nav.classList.remove('slide-in') : nav.classList.add('slide-in');
    } else if (e.target.closest("#close_menu")) {
        setTimeout(() => {
            nav.classList.toggle('active_nav');
        }, 300);
        overlay.classList.toggle('show_overlay');
        nav.classList.remove('slide-in');
        nav.classList.contains('slide-out') ? nav.classList.remove('slide-out') : nav.classList.add('slide-out');
    }
})