document.addEventListener('DOMContentLoaded', () => {

    // 1. Optimización: IntersectionObserver para animaciones de aparición
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Dejar de observar una vez revelado
            }
        });
    }, revealOptions);

    reveals.forEach(el => revealObserver.observe(el));

    // 2. Navbar dinámica y Active Links
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        // Efecto Navbar al hacer scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Resaltado de links activos
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 250)) {
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

    // 3. Menú Móvil Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('ph-list');
            icon.classList.toggle('ph-x');
        });
    }

    // Cerrar menú al hacer clic en un enlace (móvil)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.add('ph-list');
            icon.classList.remove('ph-x');
        });
    });

    // 4. Ofuscación de datos de Contacto (Protección Anti-Bot)
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
