document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    const formMessage = document.getElementById('form-message');

    if (nombre && email && mensaje) {
        formMessage.textContent = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado.`;
        formMessage.style.color = 'green';
        this.reset();
    } else {
        formMessage.textContent = 'Por favor, completa todos los campos.';
        formMessage.style.color = 'red';
    }
});

// Carousel functionality
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
let currentIndex = 0;

function showSlide(index) {
    if (index >= carouselItems.length) index = 0;
    if (index < 0) index = carouselItems.length - 1;
    currentIndex = index;
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));

// Auto-slide every 5 seconds
setInterval(() => showSlide(currentIndex + 1), 5000);

// More info toggle
document.querySelectorAll('.more-info').forEach(button => {
    button.addEventListener('click', () => {
        const extraInfo = button.nextElementSibling;
        extraInfo.classList.toggle('hidden');
        button.textContent = extraInfo.classList.contains('hidden') ? 'Ver más' : 'Ver menos';
    });
});

// Cambiar tema claro/oscuro
const toggleThemeBtn = document.getElementById('toggle-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(dark) {
    if (dark) {
        document.body.classList.add('dark-theme');
        toggleThemeBtn.textContent = '☀️ Modo Claro';
    } else {
        document.body.classList.remove('dark-theme');
        toggleThemeBtn.textContent = '🌙 Modo Oscuro';
    }
}

function getSavedTheme() {
    return localStorage.getItem('theme') === 'dark';
}

setTheme(getSavedTheme() || prefersDark);

toggleThemeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setTheme(isDark);
});