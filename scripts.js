// Configuración de Tailwind CSS
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'display': ['Playfair Display', 'serif'],
                'sans': ['Inter', 'sans-serif'],
            },
            colors: {
                'coffee': {
                    50: '#F7F3F0',
                    100: '#EDE4DC',
                    200: '#DBC8B7',
                    300: '#C9AC92',
                    400: '#B7906D',
                    500: '#8B5A3C',
                    600: '#6F4630',
                    700: '#5D3A28',
                    800: '#4A2E20',
                    900: '#3A241A',
                    950: '#2D1B14'
                },
                'cream': {
                    50: '#FFFDF9',
                    100: '#FFF8F0',
                    200: '#FEF0E1',
                    300: '#FDE8D2',
                    400: '#FBE0C3',
                    500: '#F9D8B4'
                }
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out',
                'fade-in-down': 'fadeInDown 0.8s ease-out',
                'fade-in-left': 'fadeInLeft 0.8s ease-out',
                'fade-in-right': 'fadeInRight 0.8s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 3s ease-in-out infinite',
                'steam': 'steam 2s ease-in-out infinite alternate',
            },
            backgroundImage: {
                'coffee-texture': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"coffee-beans\" patternUnits=\"userSpaceOnUse\" width=\"20\" height=\"20\"><circle cx=\"5\" cy=\"5\" r=\"2\" fill=\"%23000\" opacity=\"0.1\"/><circle cx=\"15\" cy=\"15\" r=\"1.5\" fill=\"%23000\" opacity=\"0.08\"/><circle cx=\"10\" cy=\"18\" r=\"1\" fill=\"%23000\" opacity=\"0.06\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23coffee-beans)\"/></svg>')",
            },
            backdropBlur: {
                xs: '2px',
            }
        }
    }
};

document.querySelectorAll('[data-tw-scroll="smooth"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const header = document.getElementById('header');
const navLinks = document.querySelectorAll('#header .nav-link');
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('menuOverlay');
const closeBtn = document.getElementById('mobileMenuClose');
const mobileLinks = document.querySelectorAll('#mobileMenu .mobile-nav-link');

// Estilos al hacer scroll
function applyScrolledStyles(scrolled) {
    if (scrolled) {
        header.classList.add('shadow-md');
        header.classList.remove('bg-transparent');
    } else {
        header.classList.remove('shadow-md');
        header.classList.add('bg-transparent');
    }
}

window.addEventListener('scroll', () => applyScrolledStyles(window.scrollY > 50));
applyScrolledStyles(window.scrollY > 50);

// Menú móvil: abrir/cerrar
function openMenu() {
    mobileMenu.classList.remove('-translate-y-full', 'opacity-0');
    mobileMenu.classList.add('translate-y-0', 'opacity-100');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100');
    document.documentElement.classList.add('overflow-hidden');
}

function closeMenu() {
    mobileMenu.classList.add('-translate-y-full', 'opacity-0');
    mobileMenu.classList.remove('translate-y-0', 'opacity-100');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    overlay.classList.remove('opacity-100');
    document.documentElement.classList.remove('overflow-hidden');
}

mobileBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
mobileLinks.forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault(); 
        const targetId = a.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        closeMenu(); 
    });
});
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth >= 1024) closeMenu(); });

// Cerrar menú con "swipe down"
let startX = 0, startY = 0, endX = 0, endY = 0;
const SWIPE_MIN = 70;
const VERTICAL_DOM = 1.2;
const TOP_ZONE = 100;

function isSwipeDown() {
    const dx = Math.abs(endX - startX);
    const dy = endY - startY;
    return (
        startY <= TOP_ZONE &&          
        dy > SWIPE_MIN &&             
        dy / Math.max(dx, 1) > VERTICAL_DOM 
    );
}

mobileMenu.addEventListener('touchstart', (e) => {
    const t = e.touches[0];
    startX = t.clientX;
    startY = t.clientY;
    endX = startX;
    endY = startY;
}, { passive: true });

mobileMenu.addEventListener('touchmove', (e) => {
    const t = e.touches[0];
    endX = t.clientX;
    endY = t.clientY;
}, { passive: true });

mobileMenu.addEventListener('touchend', () => {
    if (isSwipeDown()) {
        closeMenu();
    }
});

// Validación del formulario de contacto
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('[name="name"]');
    const email = contactForm.querySelector('[name="email"]');
    const message = contactForm.querySelector('[name="message"]');
    const phone = contactForm.querySelector('[name="phone"]');
    const policy = contactForm.querySelector('[name="policy"]');

    let isValid = true;

    // Validar nombre (mínimo 2 caracteres)
    if (name.value.trim().length < 2) {
        isValid = false;
        alert('El nombre debe tener al menos 2 caracteres.');
    }

    // Validar email (formato válido)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        isValid = false;
        alert('Por favor, ingresa un correo electrónico válido.');
    }

    // Validar mensaje (mínimo 20 caracteres)
    if (message.value.trim().length < 20) {
        isValid = false;
        alert('El mensaje debe tener al menos 20 caracteres.');
    }

    // Validar teléfono (opcional, 7–15 dígitos)
    const phoneRegex = /^\d{7,15}$/;
    if (phone.value.trim() && !phoneRegex.test(phone.value.trim())) {
        isValid = false;
        alert('El teléfono debe tener entre 7 y 15 dígitos.');
    }

    // Validar checkbox de política
    if (!policy.checked) {
        isValid = false;
        alert('Debes aceptar la política de privacidad.');
    }

    if (isValid) {
        alert('Formulario enviado con éxito.');
        contactForm.submit();
    }
});
