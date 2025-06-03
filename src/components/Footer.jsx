import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      padding: '2rem 0',
      width: '100%',
      color: '#fff',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'grid',
        gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(3, 1fr)',
        gap: '2rem',
        textAlign: window.innerWidth < 768 ? 'center' : 'left'
      }}>
        {/* Sección de la empresa */}
        <div>
          <h3 style={{ 
            color: '#fff', 
            marginBottom: '1rem',
            fontSize: '1.5rem' 
          }}>World Store</h3>
          <p style={{ 
            color: '#999', 
            lineHeight: '1.6',
            marginBottom: '1rem' 
          }}>
            Tu destino para productos Apple premium y servicio excepcional.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h4 style={{ 
            color: '#fff',
            marginBottom: '1rem' 
          }}>Enlaces Rápidos</h4>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <Link to="/productos" style={{
              color: '#999',
              textDecoration: 'none',
              transition: 'color 0.3s',
              ':hover': { color: '#fff' }
            }}>Productos</Link>
            <Link to="/clientes" style={{
              color: '#999',
              textDecoration: 'none',
              transition: 'color 0.3s',
              ':hover': { color: '#fff' }
            }}>Clientes</Link>
            <Link to="/buscar-productos" style={{
              color: '#999',
              textDecoration: 'none',
              transition: 'color 0.3s',
              ':hover': { color: '#fff' }
            }}>Búsqueda</Link>
          </nav>
        </div>

        {/* Contacto */}
        <div>
          <h4 style={{ 
            color: '#fff',
            marginBottom: '1rem' 
          }}>Contacto</h4>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            color: '#999'
          }}>
            <p>📍 Calle Principal #123</p>
            <p>📞 +57 300 123 4567</p>
            <p>✉️ info@applestore.com</p>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div style={{
        borderTop: '1px solid #333',
        marginTop: '2rem',
        paddingTop: '2rem',
        textAlign: 'center'
      }}>
        <p style={{ 
          color: '#666',
          fontSize: '0.9rem' 
        }}>
          © {currentYear} Apple Store. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
