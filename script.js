let nav = document.querySelector('.nav');

let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        nav.classList.remove('fixed');
    } else {
        // Scrolling up
        nav.classList.add('fixed');
    }

    prevScrollPos = currentScrollPos;
});

let hamburger=document.getElementsByClassName('hamburger')[0];
let hamMenu = document.getElementsByClassName('ham-menu')[0];
let menuCover = document.getElementById('cover');
hamburger.addEventListener('click', () => {
    if (hamMenu.style.display === 'flex') {
        hamburger.src='graphics/hamburger-menu.png';
        menuCover.style.display='none';
        hamMenu.style.display = 'none';
    } else {
        hamMenu.style.display = 'flex';
        hamburger.src='graphics/menu-cross.png';
        menuCover.style.display='block';
    }
});


let currentScrollValue = 0;
let carouselScrollValue = 0;
let title=document.getElementById("title");
let stars=document.getElementById("stars");
let mockup=document.getElementsByClassName("mockup")[0];
let cards = document.querySelectorAll('.card');

window.addEventListener("scroll", () => {
    currentScrollValue = window.scrollY;

    title.style.transform = `translateX(${currentScrollValue * -0.7}px)`;
    stars.style.transform = `translateX(${currentScrollValue * -0.7}px)`;
    mockup.style.transform = `translateX(${50 + currentScrollValue * 0.7}px)`;
});

// Separate hover effect
cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = `translateX(${carouselScrollValue * -6}px) scale(1.1)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = `translateX(${carouselScrollValue * -6}px) scale(1)`;
    });
});

let nextBtn = document.getElementById('carousel-btn-next');
let prevBtn = document.getElementById('carousel-btn-prev');

nextBtn.addEventListener('click', () => {
    carouselScrollValue += 50; // Adjust the value as needed
    applyCardTransform();
});

prevBtn.addEventListener('click', () => {
    carouselScrollValue -= 50; // Adjust the value as needed
    applyCardTransform();
});

function applyCardTransform() {
    cards.forEach((card, index) => {
        card.style.transform = `translateX(${carouselScrollValue * -6}px)`;
    });
}
