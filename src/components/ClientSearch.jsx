// components/ClientSearch.jsx
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

export default function ClientSearch() {
  const [busqueda, setBusqueda] = useState('');
  const [filtro, setFiltro] = useState('nombre');
  const [resultados, setResultados] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const clientes = [
    { 
      id: 1, 
      nombre: 'Juan Pérez',
      email: 'juan@ejemplo.com',
      role: 'Cliente Premium',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      comprasTotal: '$ 15.498.000 COP',
      ultimaCompra: '15 Feb 2024'
    },
    { 
      id: 2, 
      nombre: 'Ana Gómez',
      email: 'ana@ejemplo.com',
      role: 'Cliente Regular',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      comprasTotal: '$ 3.999.000 COP',
      ultimaCompra: '10 Feb 2024'
    },
    { 
      id: 3, 
      nombre: 'Carlos Ruiz',
      email: 'carlos@ejemplo.com',
      role: 'Cliente VIP',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
      comprasTotal: '$ 17.497.000 COP',
      ultimaCompra: '01 Feb 2024'
    }
  ];

  const manejarBusqueda = useCallback((e) => {
    e.preventDefault();
    const filtrados = clientes.filter(cliente => {
      const valor = busqueda.toLowerCase();
      switch (filtro) {
        case 'nombre':
          return cliente.nombre.toLowerCase().includes(valor);
        case 'email':
          return cliente.email.toLowerCase().includes(valor);
        case 'role':
          return cliente.role.toLowerCase().includes(valor);
        default:
          return true;
      }
    });
    setResultados(filtrados);
  }, [busqueda, filtro]);

  useEffect(() => {
    const filtrados = clientes.filter(cliente => {
      const valor = busqueda.toLowerCase();
      switch (filtro) {
        case 'nombre':
          return cliente.nombre.toLowerCase().includes(valor);
        case 'email':
          return cliente.email.toLowerCase().includes(valor);
        case 'role':
          return cliente.role.toLowerCase().includes(valor);
        default:
          return true;
      }
    });
    setResultados(filtrados);
  }, [busqueda, filtro]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = resultados.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(resultados.length / itemsPerPage);

  return (
    <section style={{ padding: '2rem' }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        color: '#007bff'
      }}>Búsqueda de Clientes</h2>

      <form onSubmit={manejarBusqueda} style={{
        maxWidth: '600px',
        margin: '0 auto 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{
          display: 'flex',
          gap: '1rem',
          padding: '0.5rem',
          borderRadius: '8px',
          backgroundColor: '#fff'
        }}>
          <input
            type="text"
            placeholder="Buscar por nombre, email o tipo de cliente..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{
              flex: 1,
              padding: '1rem',
              borderRadius: '6px',
              border: '2px solid #dee2e6',
              fontSize: '1rem',
              backgroundColor: '#ffffff',
              color: '#333333',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.075)',
              transition: 'all 0.2s ease',
              outline: 'none'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#007bff';
              e.target.style.boxShadow = '0 0 0 3px rgba(0,123,255,0.25)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#dee2e6';
              e.target.style.boxShadow = 'inset 0 1px 2px rgba(0,0,0,0.075)';
            }}
          />
          <select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            style={{
              padding: '1rem',
              borderRadius: '6px',
              border: '2px solid #dee2e6',
              backgroundColor: '#ffffff',
              color: '#333333',
              fontWeight: '500',
              cursor: 'pointer',
              outline: 'none',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.075)'
            }}
          >
            <option value="nombre">Nombre</option>
            <option value="email">Email</option>
            <option value="role">Tipo de Cliente</option>
          </select>
        </div>
        <button 
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '1rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Buscar Clientes
        </button>
      </form>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {currentItems.map(cliente => (
          <div key={cliente.id} style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <img 
                src={cliente.avatar} 
                alt={cliente.nombre}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <div>
                <h3 style={{ margin: '0' }}>{cliente.nombre}</h3>
                <p style={{ margin: '0.25rem 0', color: '#666' }}>{cliente.email}</p>
              </div>
            </div>
            <div style={{ padding: '1rem' }}>
              <p><strong>Tipo:</strong> {cliente.role}</p>
              <p><strong>Total Compras:</strong> {cliente.comprasTotal}</p>
              <p><strong>Última Compra:</strong> {cliente.ultimaCompra}</p>
              <Link 
                to={`/clientes/${cliente.id}`}
                style={{
                  display: 'block',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  marginTop: '1rem'
                }}
              >
                Ver Perfil Completo
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: currentPage === 1 ? '#e9ecef' : '#007bff',
            color: currentPage === 1 ? '#6c757d' : '#ffffff',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
            fontWeight: '500'
          }}
        >
          ← Anterior
        </button>
        <span style={{ 
          padding: '0.5rem 1rem',
          backgroundColor: '#ffffff',
          borderRadius: '6px',
          border: '1px solid #dee2e6',
          color: '#495057',
          fontWeight: '500'
        }}>
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: currentPage === totalPages ? '#e9ecef' : '#007bff',
            color: currentPage === totalPages ? '#6c757d' : '#ffffff',
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
            fontWeight: '500'
          }}
        >
          Siguiente →
        </button>
      </div>

      {resultados.length === 0 && busqueda && (
        <p style={{ 
          textAlign: 'center', 
          color: '#666',
          marginTop: '2rem' 
        }}>
          No se encontraron clientes que coincidan con tu búsqueda.
        </p>
      )}
    </section>
  );
}
