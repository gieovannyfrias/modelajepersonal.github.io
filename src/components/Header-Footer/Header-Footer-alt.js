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
            <li><a href="/Modelos" class="active">Modelos</a></li>
            <li><a href="/index#agencia">Agencia</a></li>
            <li><a href="/Portafolio">Portafolio</a></li>
            <li><a href="/index#contacto">Contacto</a></li>
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
                <p>Nuestro sitio se enfoca en modelar nuestros usuarios lo mas moderno.</p>
                <div class="footer-social">
                    <a href="https://www.instagram.com/modelajepersonal" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></a>
                    <a href="https://www.tiktok.com/modelajepersonal" aria-label="TikTok"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
</svg></a>
                    <a href="https://www.facebook.com/modelajepersonal" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg></a>
                   
                    <a href="https://x.com/modelajepersonal" aria-label="X"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg></a>
                    <a href="https://www.youtube.com/@modelajepersonal" aria-label="youtube"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg></a>

                </div>
            </div>
            
            <!-- EXTRA Columna 2: Enlaces Corporativos -->
            <div class="footer-column">
                <h3>Explorar</h3>
                <ul>
                    <li><a href="/Portafolio">Portafolio</a></li>
                    <li><a href="/Nuestra_historia">Nuestra Historia</a></li>
                    <li><a href="/Casos_exito">Casos de Éxito</a></li>
                    <li><a href="/Prensa">Prensa</a></li>
                    <li><a href="/Colaboraciones">Colaboraciones</a></li>

                </ul>
            </div>

            <!-- EXTRA Columna 3: Legal & Soporte -->
            <div class="footer-column">
                <h3>Agencia</h3>
                <ul>
                    <li><a href="/Terminos_condiciones">Términos de condiciones</a></li>
                    <li><a href="/Politicas_privacidad">Politicas de privacidad</a></li>
                    <li><a href="/Trabaja_nosotros">Trabaja con nosotros</a></li>
                    <li><a href="/Soporte">Soporte</a></li>
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
            <p>&copy; <span class="year"></span> Modelaje Personal. Todos los derechos reservados.</p>
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
    styleElement.textContent = premiumStyles; // Asegúrate de que 'premiumStyles' esté definido antes
    document.head.appendChild(styleElement);

    // 2. LÓGICA DE INTERACTIVIDAD (SCROLL & MENÚ HAMBURGUESA DINÁMICO)
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

    // 3. ACTUALIZACIÓN AUTOMÁTICA DEL AÑO EN EL FOOTER
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll(".year");
    
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
});
