// Translation system
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'hero.greeting': 'Hi, I\'m',
        'hero.title': 'Full-Stack Web Developer',
        'hero.description': 'Passionate full-stack developer with 3+ years of expertise in Java and Angular development. Currently working with Spring Boot, Angular, AWS, and modern web technologies.',
        'hero.contact': 'Get In Touch',
        'hero.work': 'View My Work',
        'about.title': 'About Me',
        'about.description1': 'I am a dedicated full-stack web developer with more than 3 years of expertise in Java and Angular development. Currently working at APPLUS IDIADA, I focus on developing Spring Boot and Angular applications for electromobility and public transport management.',
        'about.description2': 'I am focused on making the most out of my time, leveraging my youth and strong work ethic to continuously grow and improve. I want to continue working mainly with Spring Boot and expanding my expertise in this framework.',
        'experience.title': 'Work Experience',
        'job.title': 'Software Developer',
        'job.applus.period': 'May 2024 - Present',
        'job.applus.description': 'Currently focused on Spring Boot development for electromobility and public transport management applications. Also working with Angular frontends and AWS infrastructure.',
        'job.aritmos.period': 'November 2023 - April 2024',
        'job.aritmos.description': 'Focused mainly on Angular development and API integration. Built custom frontends and integrated them with SAGE X3 systems.',
        'job.indra.period': 'June 2022 - August 2023',
        'job.indra.description': 'Started my career here maintaining Java legacy applications and fixing bugs. Worked with Java, SAP ABAP, JSF, and databases like MySQL and PostgreSQL in an Agile environment.',
        'skills.title': 'Skills & Technologies',
        'skills.backend': 'Backend Development',
        'skills.frontend': 'Frontend Development',
        'skills.databases': 'Databases',
        'skills.devops': 'DevOps & Tools',
        'contact.title': 'Get In Touch',
        'contact.description': 'I\'m always interested in new opportunities and challenging projects. Feel free to reach out if you\'d like to discuss potential collaborations.',
        'contact.submit': 'Send Message'
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Acerca de',
        'nav.experience': 'Experiencia',
        'nav.skills': 'Habilidades',
        'nav.contact': 'Contacto',
        'hero.greeting': 'Hola, soy',
        'hero.title': 'Desarrollador Full-Stack',
        'hero.description': 'Desarrollador full-stack apasionado con más de 3 años de experiencia en desarrollo Java y Angular. Actualmente trabajando con Spring Boot, Angular, AWS y tecnologías web modernas.',
        'hero.contact': 'Contactar',
        'hero.work': 'Ver Mi Trabajo',
        'about.title': 'Acerca de Mí',
        'about.description1': 'Soy un desarrollador web full-stack dedicado con más de 3 años de experiencia en desarrollo Java y Angular. Actualmente trabajando en APPLUS IDIADA, me enfoco en desarrollar aplicaciones Spring Boot y Angular para electromovilidad y gestión de transporte público.',
        'about.description2': 'Me enfoco en aprovechar al máximo mi tiempo, aprovechando mi juventud y fuerte ética de trabajo para crecer y mejorar continuamente. Quiero seguir trabajando principalmente con Spring Boot y expandir mi experiencia en este framework.',
        'experience.title': 'Experiencia Laboral',
        'job.title': 'Desarrollador de Software',
        'job.applus.period': 'Mayo 2024 - Presente',
        'job.applus.description': 'Actualmente enfocado en el desarrollo con Spring Boot para aplicaciones de electromovilidad y gestión de transporte público. También trabajando con frontends de Angular e infraestructura AWS.',
        'job.aritmos.period': 'Noviembre 2023 - Abril 2024',
        'job.aritmos.description': 'Enfocado principalmente en desarrollo Angular e integración de APIs. Construí frontends personalizados y los integré con sistemas SAGE X3.',
        'job.indra.period': 'Junio 2022 - Agosto 2023',
        'job.indra.description': 'Comencé mi carrera aquí manteniendo aplicaciones Java legacy y corrigiendo errores. Trabajé con Java, SAP ABAP, JSF y bases de datos como MySQL y PostgreSQL en un entorno Ágil.',
        'skills.title': 'Habilidades y Tecnologías',
        'skills.backend': 'Desarrollo Backend',
        'skills.frontend': 'Desarrollo Frontend',
        'skills.databases': 'Bases de Datos',
        'skills.devops': 'DevOps y Herramientas',
        'contact.title': 'Contactar',
        'contact.description': 'Siempre estoy interesado en nuevas oportunidades y proyectos desafiantes. No dudes en contactarme si te gustaría discutir posibles colaboraciones.',
        'contact.submit': 'Enviar Mensaje'
    }
};

let currentLanguage = 'en';

function translatePage(language) {
    currentLanguage = language;
    
    // Update all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    
    // Save language preference
    localStorage.setItem('preferredLanguage', language);
}

// Language selector functionality
document.addEventListener('DOMContentLoaded', () => {
    const languageFlags = document.querySelectorAll('.language-flag');
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    
    // Set active flag
    languageFlags.forEach(flag => {
        if (flag.getAttribute('data-lang') === savedLanguage) {
            flag.classList.add('active');
        } else {
            flag.classList.remove('active');
        }
    });
    
    translatePage(savedLanguage);
    
    // Language change handlers
    languageFlags.forEach(flag => {
        flag.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            
            // Update active state
            languageFlags.forEach(f => f.classList.remove('active'));
            e.target.classList.add('active');
            
            // Translate page
            translatePage(selectedLang);
        });
    });
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(17, 24, 39, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(17, 24, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Create mailto link
        const mailtoLink = `mailto:cezarygebczyk117@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showNotification('Email client opened! Thank you for your message.', 'success');
        
        // Reset form
        this.reset();
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        z-index: 1001;
        display: flex;
        align-items: center;
        gap: 1rem;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                padding: 0;
                margin: 0;
                line-height: 1;
            }
            .notification-close:hover {
                opacity: 0.8;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to document
    document.body.appendChild(notification);
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.timeline-item, .skill-category, .education-item, .stat-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// Skills animation on scroll
const skillCategories = document.querySelectorAll('.skill-category');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
        }
    });
}, { threshold: 0.2 });

skillCategories.forEach(category => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(50px) scale(0.95)';
    category.style.transition = 'all 0.6s ease';
    skillObserver.observe(category);
});

// Add loading animation
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    
    const elements = [heroTitle, heroSubtitle, heroDescription, heroButtons];
    
    elements.forEach((el, index) => {
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            setTimeout(() => {
                el.style.transition = 'all 0.8s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
});

// Initialize simple fade-in effect instead of typing
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Just use the existing HTML content without modification
        heroTitle.style.opacity = '1';
    }
});

// Add parallax effect to hero section (disabled on mobile)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage && window.innerWidth > 768) {
        const rate = scrolled * -0.3;
        heroImage.style.transform = `translateY(${rate}px)`;
    } else if (heroImage) {
        // Reset transform on mobile
        heroImage.style.transform = 'translateY(0px)';
    }
});

// Add active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active nav links
const navStyle = document.createElement('style');
navStyle.textContent = `
    .nav-link.active {
        color: #2563eb !important;
        font-weight: 600;
    }
`;
document.head.appendChild(navStyle);