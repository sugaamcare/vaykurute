document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.addEventListener("click", function() {
            navItems.forEach(i => i.classList.remove("active"));
            this.classList.add("active");
        });
    });
});


function openSection(sectionNumber) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(`section${sectionNumber}`).style.display = 'block';
}





let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) currentSlideIndex = 0;
    if (index <0) currentSlideIndex = totalSlides - 1;
    const offset = currentSlideIndex * -100;
    document.querySelector('.slider-wrapper').style.transform = `translateX(${offset}%)`;
    updateDots();
}

function nextSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex--;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlideIndex);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});




document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.side-section');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    // Show the first section by default
    sections[0].classList.add('active');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Scroll to the target section smoothly
            window.scrollTo({
              
                behavior: 'smooth'
            });

            // Hide all sections except the target section
            sections.forEach(section => {
                if ('#' + section.id === targetId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });

            // Set active state on clicked link
            sidebarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });


});









let currentSlideIndexx = 0;
    const slidess = document.querySelectorAll('.slidee');
    const dotss = document.querySelectorAll('.dott');
    const totalSlidess = slidess.length;
    
    function showSlidee(index) {
        if (index >= totalSlidess) currentSlideIndexx = 0;
        if (index < 0) currentSlideIndexx = totalSlidess - 1;
        const offsett = currentSlideIndexx * -100;
        document.querySelector('.slider-wrapperr').style.transform = `translateX(${offsett}%)`;
        updateDotss();
    }
    
    function nextSlidee() {
        currentSlideIndexx++;
        showSlidee(currentSlideIndexx);
    }
    
    function prevSlidee() {
        currentSlideIndexx--;
        showSlidee(currentSlideIndexx);
    }
    
    function currentSlidee(index) {
        currentSlideIndexx = index;
        showSlidee(currentSlideIndexx);
    }
    
    function updateDotss() {
        dotss.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlideIndexx);
        });
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        showSlidee(currentSlideIndexx);
        setInterval(nextSlide, 3000); // Change slide every 3 seconds
    });

// document.addEventListener('DOMContentLoaded', function() {
//     const animatedElements = document.querySelectorAll('.animated-element');

//     const observerOptions = {
//         threshold: 0.1 
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//             } else {
//                 entry.target.classList.remove('visible');
//             }
//         });
//     }, observerOptions);

//     animatedElements.forEach(element => {
//         observer.observe(element);
//     });
// });
