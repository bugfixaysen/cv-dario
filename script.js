document.addEventListener('DOMContentLoaded', () => {

    // Reveal elements on scroll
    const reveals = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    // Call initially to reveal hero
    revealOnScroll();
    
    // Call on scroll
    window.addEventListener('scroll', revealOnScroll);

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Ofuscación de datos de Contacto (Protección Anti-Bot)
    // Se divide el texto para que las arañas web no puedan extraerlo directamente.
    const telArr = ["+", "56", " 9 ", "5696", "9576"];
    const mailArr = ["druz", "saavedra", "@", "gmail", ".com"];

    const btnPhone = document.getElementById('btn-phone');
    if(btnPhone) {
        btnPhone.addEventListener('click', function(e) {
            e.preventDefault();
            const fullStr = telArr.join('');
            this.innerHTML = `<i class="ph ph-phone"></i> ${fullStr}`;
            const linkAction = `tel:${fullStr.replace(/\s/g, '')}`;
            this.setAttribute('href', linkAction);
            window.location.href = linkAction;
            this.removeAttribute('id');
        });
    }

    const btnEmail = document.getElementById('btn-email');
    if(btnEmail) {
        btnEmail.addEventListener('click', function(e) {
            e.preventDefault();
            const fullStr = mailArr.join('');
            this.innerHTML = `<i class="ph ph-envelope"></i> ${fullStr}`;
            const linkAction = `mailto:${fullStr}`;
            this.setAttribute('href', linkAction);
            window.location.href = linkAction;
            this.removeAttribute('id'); 
        });
    }
});
