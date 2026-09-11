/**
 * Elite Agency - Sistema Modular Premium (Header, Hamburguesa & Footer)
 * Archivo: Header-Footer-main.js
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. INYECTAR LA NAVBAR AUTOMÁTICAMENTE (Con botón Hamburguesa Premium)
    const navbarHTML = `
    <nav class="navbar">
        <a href="#" class="logo">MODELAJE<span> PERSONAL</span></a>
        <!-- Botón de Hamburguesa con 3 líneas CSS -->
        <button class="menu-btn" id="menu-toggle" aria-label="Abrir menú">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
        <ul class="nav-links" id="nav-menu">
            <li><a href="#" class="active">Modelos</a></li>
            <li><a href="#agencia">Agencia</a></li>
            <li><a href="#portafolio">Portafolio</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>`;
    
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // 2. INYECTAR EL FOOTER EXPANDIDO (Con extras comerciales)
    const footerHTML = `
    <footer class="footer">
        <div class="footer-container">
            <!-- Columna 1: Marca -->
            <div class="footer-column footer-brand">
                <a href="#" class="logo">MODELAJE<span>PERSONAL</span></a>
                <p>Redefiniendo los estándares de la moda global desde la excelencia y la diversidad.</p>
                <div class="footer-social">
                    <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="#" aria-label="Vimeo"><i class="fa-brands fa-vimeo-v"></i></a>
                </div>
            </div>
            
            <!-- EXTRA Columna 2: Enlaces Corporativos -->
            <div class="footer-column">
                <h3>Explorar</h3>
                <ul>
                    <li><a href="#">Portafolio</a></li>
                    <li><a href="#">Nuestra Historia</a></li>
                    <li><a href="#">Casos de Éxito</a></li>
                    <li><a href="#">Prensa</a></li>
                </ul>
            </div>

            <!-- EXTRA Columna 3: Legal & Soporte -->
            <div class="footer-column">
                <h3>Agencia</h3>
                <ul>
                    <li><a href="#">Términos de Uso</a></li>
                    <li><a href="#">Privacidad</a></li>
                    <li><a href="#">Trabaja con nosotros</a></li>
                    <li><a href="#">Soporte</a></li>
                </ul>
            </div>

            <!-- EXTRA Columna 4: Newsletter Integrada -->
            <div class="footer-column footer-newsletter">
                <h3>Newsletter</h3>
                <p>Recibe convocatorias de castings exclusivos y actualizaciones de moda.</p>
                <form class="newsletter-form" onsubmit="event.preventDefault(); alert('¡Suscrito con éxito!');">
                    <input type="email" placeholder="Tu correo electrónico" required>
                    <button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Elite Management. Todos los derechos reservados.</p>
        </div>
    </footer>`;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // 3. INYECTAR TODOS LOS ESTILOS CSS (Incluyendo la Hamburguesa y columnas del Footer)
    const premiumStyles = `
    /* --- NAVBAR PREMIUM --- */
    .navbar {
        position: fixed; top: 0; left: 0; width: 100%; padding: 2rem 3rem;
        background: linear-gradient(to bottom, rgba(10,10,10,0.8), transparent);
        z-index: 1000; display: flex; justify-content: space-between; align-items: center;
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .navbar.scrolled {
        padding: 1.2rem 3rem; background: rgba(10, 10, 10, 0.95);
        border-bottom: 1px solid rgba(197, 168, 128, 0.15);
        backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    }

    .logo {
        font-family: var(--font-display, 'Cormorant Garamond', serif);
        font-size: 2rem; font-weight: 600; letter-spacing: 2px;
        color: var(--text-main, #ffffff); text-decoration: none;
    }
    .logo span { color: var(--gold, #c5a880); }

    .nav-links { display: flex; gap: 3rem; list-style: none; }
    .nav-links a {
        color: var(--text-muted, #a3a3a3); text-decoration: none;
        font-size: 0.85rem; font-weight: 500; letter-spacing: 2px;
        text-transform: uppercase; transition: color 0.3s ease;
    }
    .nav-links a:hover, .nav-links a.active { color: var(--gold, #c5a880); }

    /* --- BOTÓN HAMBURGUESA PREMIUM (LÍNEAS DINÁMICAS) --- */
    .menu-btn {
        display: none; background: none; border: none; cursor: pointer;
        flex-direction: column; gap: 6px; z-index: 1100; padding: 5px;
    }
    .menu-btn .bar {
        width: 25px; height: 2px; background-color: var(--text-main, #ffffff);
        transition: all 0.4s ease; transform-origin: left center;
    }

    /* Animación de Hamburguesa a 'X' */
    .menu-btn.open .bar:nth-child(1) { transform: rotate(45deg); }
    .menu-btn.open .bar:nth-child(2) { opacity: 0; transform: translateX(10px); }
    .menu-btn.open .bar:nth-child(3) { transform: rotate(-45deg); }

    /* --- FOOTER AVANZADO DE ALTA GAMA --- */
    .footer {
        background: #050505; border-top: 1px solid rgba(255,255,255,0.05);
        padding: 5rem 2rem 2rem 2rem; margin-top: 5rem; font-family: sans-serif;
    }
    .footer-container {
        max-width: 1400px; margin: 0 auto; display: grid;
        grid-template-columns: 1.5fr repeat(2, 1fr) 1.5fr; gap: 3rem;
    }
    .footer-column h3 {
        color: var(--text-main, #ffffff); font-size: 0.9rem;
        text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1.5rem;
    }
    .footer-column ul { list-style: none; }
    .footer-column ul li { margin-bottom: 0.75rem; }
    .footer-column ul li a {
        color: var(--text-muted, #a3a3a3); text-decoration: none;
        font-size: 0.9rem; transition: color 0.3s;
    }
    .footer-column ul li a:hover { color: var(--gold, #c5a880); }
    
    .footer-brand p { color: var(--text-muted, #a3a3a3); font-size: 0.9rem; line-height: 1.6; margin: 1rem 0; }
    .footer-social { display: flex; gap: 1rem; margin-top: 1rem; }
    .footer-social a { color: var(--text-muted, #a3a3a3); font-size: 1.2rem; transition: color 0.3s; }
    .footer-social a:hover { color: var(--gold, #c5a880); }

    /* Input del Newsletter Extra */
    .footer-newsletter p { color: var(--text-muted, #a3a3a3); font-size: 0.9rem; margin-bottom: 1rem; }
    .newsletter-form { display: flex; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; }
    .newsletter-form input {
        background: none; border: none; outline: none; padding: 0.5rem;
        color: white; width: 100%; font-size: 0.9rem;
    }
    .newsletter-form button { background: none; border: none; color: var(--gold, #c5a880); cursor: pointer; padding: 0.5rem; }

    .footer-bottom {
        text-align: center; border-top: 1px solid rgba(255,255,255,0.05);
        margin-top: 4rem; padding-top: 1.5rem; font-size: 0.8rem; color: #555;
    }

    /* --- RESPONSIVE ADAPTATIVO --- */
    @media (max-width: 968px) {
        .navbar { padding: 1.5rem 2rem; }
        .menu-btn { display: flex; } /* Muestra la hamburguesa */
        
        .nav-links {
            display: flex; flex-direction: column; position: absolute;
            top: 100%; left: 0; width: 100%; background: #0a0a0a;
            padding: 3rem; text-align: center; gap: 2rem;
            border-bottom: 1px solid rgba(197, 168, 128, 0.1);
            transform: translateY(-150%); opacity: 0; pointer-events: none;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .nav-links.active { transform: translateY(0); opacity: 1; pointer-events: auto; }
        .footer-container { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
    }

    @media (max-width: 580px) {
        .footer-container { grid-template-columns: 1fr; }
    }`;

    // Insertar los estilos en el documento
    const styleElement = document.createElement('style');
    styleElement.textContent = premiumStyles;
    document.head.appendChild(styleElement);

    // 4. LÓGICA DE INTERACTIVIDAD (SCROLL & MENÚ HAMBURGUESA DINÁMICO)
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Cambiar fondo de la Navbar al hacer Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Control de Apertura/Cierre del menú hamburguesa
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open'); // Activa la animación a 'X'
        });

        // Cerrar menú si el usuario pulsa un enlace en móviles
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('open');
            });
        });
    }
});
