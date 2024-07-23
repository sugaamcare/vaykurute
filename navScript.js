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










let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

const updateSlidePosition = () => {
    const newPosition = -(currentIndex * 100) + '%';
    document.querySelector('.slides').style.transform = `translateX(${newPosition})`;
    updateDots();
}

const showNextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

const currentSlide = (index) => {
    currentIndex = index;
    updateSlidePosition();
}

const updateDots = () => {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index));
});

setInterval(showNextSlide, 3000); // Change image every 3 seconds










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
