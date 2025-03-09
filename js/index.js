const navbar = document.getElementById('navbar');
const btnUnirse = document.getElementById('btnUnirse');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const mobileMenu = document.getElementById('mobile-menu');

// Cambiar fondo de la barra de navegación al hacer scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.remove('Background-navbar');
        navbar.classList.add('Background-navbar-scrolled');
    } else {
        navbar.classList.remove('Background-navbar-scrolled');
        navbar.classList.add('Background-navbar');
    }
});

// Mostrar y ocultar el menú móvil
function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

// Cerrar el menú móvil al hacer clic en un enlace
function closeMenu() {
    mobileMenu.classList.add('scroll');
}

// Añadir evento de clic a cada enlace del menú móvil
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Mostrar el modal cuando se hace clic en el botón
btnUnirse.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Cerrar el modal cuando se hace clic en el botón de cerrar
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal si se hace clic fuera de él
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Verificar si el modal ya fue mostrado y evitar que se muestre de nuevo
if (!localStorage.getItem('modalShown')) {
    // Si nunca fue mostrado, lo mostramos
    modal.style.display = 'flex';
    // Guardamos en localStorage para no mostrarlo nuevamente
    localStorage.setItem('modalShown', 'true');
} else {
    // Si ya fue mostrado, nos aseguramos de que esté oculto
    modal.style.display = 'none';
}

// Añadir clase 'js' al elemento html para indicar que JavaScript está habilitado
document.documentElement.classList.add('js');