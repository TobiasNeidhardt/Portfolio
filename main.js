function toggleMenu() {
    var menutoggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menutoggle.classList.toggle('active');
    menu.classList.toggle('active');
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2000,
    reset: true
})

sr.reveal('.home-text', {})
sr.reveal('.home-img', { delay: 100 })
sr.reveal('.social', { delay: 100 })

sr.reveal('.about-img', {})
sr.reveal('.heading', {})
sr.reveal('.about-text', { delay: 100 })
sr.reveal('.services-content', {})
sr.reveal('.work-img', { delay: 100 })
sr.reveal('.work-text', {})
sr.reveal('.app', { delay: 100 })
sr.reveal('.app h1', {})

sr.reveal('.app', { delay: 100 })
sr.reveal('form input', {})
sr.reveal('form textarea', {})