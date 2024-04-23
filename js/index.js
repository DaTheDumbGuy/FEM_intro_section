const nav = document.getElementById("nav");
const overlay = document.querySelector('.overlay');

// Open Menu
globalEventListener('click', '.btn_menu img', () => {
    nav.classList.toggle('active_nav');
    overlay.classList.toggle('show_overlay');
    nav.classList.remove('slide-out');
    nav.classList.contains('slide-in') ? nav.classList.remove('slide-in') : nav.classList.add('slide-in');
});
// Close Menu when X or Overlay is clicked
globalEventListener('click', '.btn_close_menu img, .overlay', () => {
    setTimeout(() => {
        nav.classList.toggle('active_nav');
    }, 300);
    overlay.classList.toggle('show_overlay');
    nav.classList.remove('slide-in');
    nav.classList.contains('slide-out') ? nav.classList.remove('slide-out') : nav.classList.add('slide-out');
});

// Dropdown Click Event
globalEventListener("click", ".nav-link, .nav-link img", e => {
    const dropdown = e.target.closest('.dropdown');
    if (dropdown) {
        dropdown.querySelector('.dropdown-menu').classList.toggle('show_dropdown');
    }
});

function globalEventListener(event, selector, callback) {
    document.addEventListener(event, e => {
        console.log(selector);
        if (e.target.matches(selector)) callback(e);

    })
}
