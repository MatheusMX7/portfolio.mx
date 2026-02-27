// ===== MENU DE NAVEGAÇÃO =====
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav-link');

// Mostrar menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Ocultar menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Fechar menu ao clicar nos links de navegação
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// ===== LINK ATIVO AO ROLAR A PÁGINA =====
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector('.nav-link[href*=' + sectionId + ']');

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ===== EFEITO DE ROLAGEM DO CABEÇALHO =====
const header = document.getElementById('header');

function scrollHeader() {
    if (window.scrollY >= 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', scrollHeader);

// ===== EFEITO DE DIGITAÇÃO =====
const typingElement = document.querySelector('.typing');
if (typingElement) {
    const words = ['Full-Stack', 'Frontend', 'Backend', 'Python'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 100;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// ===== BOTÃO DE ROLAGEM PARA O TOPO =====
const scrollTopBtn = document.getElementById('scroll-top');

function showScrollTop() {
    if (window.scrollY >= 400) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
}

window.addEventListener('scroll', showScrollTop);

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== ANIMAÇÃO DE REVELAÇÃO DE ROLAGEM =====
function revealOnScroll() {
    const reveals = document.querySelectorAll('.skill-card, .timeline-item, .about-card, .contact-detail-item');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar estilos de animação
const animatedElements = document.querySelectorAll('.skill-card, .timeline-item, .about-card, .contact-detail-item');
animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== FORMULÁRIO DE CONTATO =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Aqui você normalmente enviaria os dados do formulário para um servidor.
        console.log('Formulário enviado:', formData);
        
        // Exibir mensagem de sucesso
        alert('Mensagem enviada com sucesso! Entrerei em contato em breve.');
        
        // Redefinir formulário
        contactForm.reset();
    });
}

// ===== ROLAGEM SUAVE PARA TODOS OS LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== EFEITO DE PASSAGEM DE PASSAGEM DO MOUSE DA CARTA DE HABILIDADE =====
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== EFEITO DE PARALAXE AO MOVIMENTO DO MOUSE =====
const homeSection = document.querySelector('.home');
const homeImage = document.querySelector('.home-img-wrapper');

if (homeSection && homeImage) {
    homeSection.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;
        
        homeImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    homeSection.addEventListener('mouseleave', () => {
        homeImage.style.transform = 'translate(0, 0)';
    });
}

// ===== MENSAGEM DO CONSOLE =====
console.log('%c👋 Olá! ', 'font-size: 20px; font-weight: bold; color: #FF0000;');
console.log('%cObrigado por visitar meu portfólio!', 'font-size: 14px; color: #E0E0E0;');
console.log('%cSe você está curioso sobre o código, fique à vontade para explorar!', 'font-size: 12px; color: #B0B0B0;');