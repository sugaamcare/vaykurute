document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.number');
  
    counters.forEach(number => {
        number.innerText = '0';
  
      const updateCounter = () => {
        const target = +number.getAttribute('data-target');
        const count = +number.innerText;
        
        const increment = target / 200; // Change this value to adjust the speed
        console.log(increment);
  
        if(count < target) {
            number.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCounter, 5);
        } else {
            number.innerText = (target % 1 == 0 ) ? `${target}+` : `${target}/5`;
        }
      };
  
      updateCounter();
    });
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


  document.querySelectorAll('.faq-question-container').forEach(container => {
    container.addEventListener('click', () => {
        const answer = container.nextElementSibling;
        const toggle = container.querySelector('.faq-toggle');
        const isExpanded = answer.style.display === 'block';

        document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
        document.querySelectorAll('.faq-toggle').forEach(tog => tog.textContent = '+');

        if (!isExpanded) {
            answer.style.display = 'block';
            toggle.textContent = '-';
        } else {
            answer.style.display = 'none';
            toggle.textContent = '+';
        }
    });
});
  