let nav = document.querySelector('nav');
let showcase = document.querySelector('.showcase');
let navBtn = document.querySelector('.navbar-toggler');

navBtn.addEventListener('click', () => {
    document.querySelector('.navbar-toggler i').classList.toggle('fa-times')
})

window.onscroll = () => {
    if(window.scrollY > 100) {
        nav.classList.add('bg-white')
        nav.classList.add('border-bottom')
        nav.classList.remove('py-3')
        toTop.classList.add('show')
    } else {
        nav.classList.remove('bg-white')
        nav.classList.remove('border-bottom')
        nav.classList.add('py-3')
        toTop.classList.remove('show')
    }
}

let scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navToggle'
})

