const nav = document.querySelector('.opened_nav');
const button_nav = document.querySelector('.button_nav');
const nav_logo = document.querySelector('.nav_logo p');
let nav_state = false;

button_nav.addEventListener('click', () => {
    if (nav_state == false) {
        nav.style.top = '0';
        button_nav.classList.add('active');
        setTimeout(() => {
            nav_logo.style.color = 'var(--dark)';
        }, 550);
        nav_state = true;
    }
    else {
        nav.style.top = '-100%';
        button_nav.classList.remove('active');
        setTimeout(() => {
            nav_logo.style.color = 'var(--light)';
        }, 550);
        nav_state = false;
    }
}
);
