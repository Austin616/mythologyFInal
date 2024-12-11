let slides = document.querySelectorAll('.slide-container');
let index = 0;

// Function to change active slide
function setActiveSlide(slideIndex) {
    // Remove active class from all slide containers
    slides.forEach(slide => slide.classList.remove('active'));

    // Add active class to the selected slide
    slides[slideIndex].classList.add('active');

    // Update active class on navbar links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[slideIndex].classList.add('active');
}

// Function to go to the next slide
function nextSlide() {
    index = (index + 1) % slides.length;  // Cycle to next slide
    setActiveSlide(index);
}

// Function to go to the previous slide
function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;  // Cycle to previous slide
    setActiveSlide(index);
}

// Add event listeners to the navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const slideIndex = parseInt(link.getAttribute('data-slide')) - 1;
        index = slideIndex;
        setActiveSlide(index);
    });
});

// JavaScript function to show the main content
function startAssignment() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('nav-bar').style.display = 'block';
}
