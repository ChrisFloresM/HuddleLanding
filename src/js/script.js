
/* Logic for fade in animations */
/* Get the mockups hero image */
/*const mockupsHeroImg = document.querySelector('.main__hero-mockups');*/
const hidenElements = document.querySelectorAll('.hide-default');

/* create a new intersection observer */
const options = {
    root: null, //viewport
    threshold: 0.3, // 0 to 1 scale
    rootMargin: "0px 0px -150px 0px",
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            entry.target.classList.remove('hide-default');
            observer.unobserve(entry.target);
        }
    })
}, options);

/* Call the observe function, sending the element we want to observe */
hidenElements.forEach(hidenElement => {
    observer.observe(hidenElement);
})

/* Add logic for modal window */
const closeButton = document.querySelector('.modal__close');
const openButtons = document.querySelectorAll('.try-it-btn');

closeButton.addEventListener('click', closeModalWindow);

openButtons.forEach(openButton => {
    openButton.addEventListener('click', openModalWindow);
})

function closeModalWindow() {
    const modal = document.querySelector('.modal');
    modal.classList.remove("visible");

    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);

}

function openModalWindow() {
    const modal = document.querySelector('.modal');
    modal.style.display = "block";

    setTimeout(() => {
        modal.classList.add("visible");
    }, 10);

}

