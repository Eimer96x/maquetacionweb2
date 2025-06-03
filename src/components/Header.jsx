import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

/**
 * Constantes para la configuración del menú
 */
const MENU_CONFIG = {
  MOBILE_BREAKPOINT: 768,
  NAV_ITEMS: [
    { to: '/productos', text: 'Productos', id: 'nav-productos' },
    { to: '/clientes', text: 'Clientes', id: 'nav-clientes' },
    { to: '/buscar-productos', text: 'Búsqueda Productos', id: 'nav-buscar-productos' },
    { to: '/buscar-clientes', text: 'Búsqueda Clientes', id: 'nav-buscar-clientes' }
  ]
};

/**
 * Estilos base para componentes del header
 */
const HEADER_STYLES = {
  container: {
    backgroundColor: '#1a1a1a',
    padding: '1rem',
    position: 'relative',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  inner: {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    letterSpacing: '0.5px'
  },
  hamburgerBtn: {
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    transition: 'transform 0.3s ease'
  },
  hamburgerBar: {
    width: '25px',
    height: '2px',
    backgroundColor: '#fff',
    transition: 'all 0.3s ease'
  }
};

/**
 * Componente Header - Barra de navegación principal
 * @returns {JSX.Element} Componente Header
 */
export default function Header() {
  // Estados para el manejo del menú responsive
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MENU_CONFIG.MOBILE_BREAKPOINT);

  /**
   * Efecto para manejar el cambio de tamaño de ventana
   */
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < MENU_CONFIG.MOBILE_BREAKPOINT;
      setIsMobile(isMobileView);
      if (!isMobileView && isMenuOpen) setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  /**
   * Renderiza una barra del menú hamburguesa
   * @param {number} index - Índice de la barra
   * @returns {JSX.Element} Barra del menú
   */
  const renderHamburgerBar = (index) => (
    <span
      key={`bar-${index}`}
      style={{
        ...HEADER_STYLES.hamburgerBar,
        transform: isMenuOpen && (
          index === 0 ? 'rotate(45deg) translate(6px, 6px)' :
          index === 2 ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
        ),
        opacity: isMenuOpen && index === 1 ? 0 : 1
      }}
    />
  );

  return (
    <header style={HEADER_STYLES.container}>
      <div style={HEADER_STYLES.inner}>
        <Link to="/" style={HEADER_STYLES.logo}>
          World Store
        </Link>

        {/* Botón de menú hamburguesa para móvil */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            style={HEADER_STYLES.hamburgerBtn}
          >
            {[0, 1, 2].map(renderHamburgerBar)}
          </button>
        )}

        {/* Navegación */}
        <nav style={{
          display: isMobile ? (isMenuOpen ? 'flex' : 'none') : 'flex',
          position: isMobile ? 'absolute' : 'static',
          top: isMobile ? '100%' : 'auto',
          left: isMobile ? 0 : 'auto',
          right: isMobile ? 0 : 'auto',
          backgroundColor: '#1a1a1a',
          flexDirection: isMobile ? 'column' : 'row',
          padding: isMobile ? '1rem' : 0,
          gap: isMobile ? '1rem' : '2rem',
          zIndex: 50,
          boxShadow: isMobile ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
        }}>
          {MENU_CONFIG.NAV_ITEMS.map(({ to, text, id }) => (
            <Link
              key={id}
              to={to}
              style={{
                color: '#fff',
                textDecoration: 'none',
                padding: '0.75rem 1rem',
                borderRadius: '4px',
                transition: 'background-color 0.3s ease',
                ':hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
