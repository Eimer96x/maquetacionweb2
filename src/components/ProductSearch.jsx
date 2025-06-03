// components/ProductSearch.jsx
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

export default function ProductSearch() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('todos');
  const [resultados, setResultados] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const productos = [
    { 
      id: 1, 
      nombre: 'MacBook Pro M2',
      categoria: 'laptops',
      precio: '$ 7.999.000 COP',
      imagen: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80' 
    },
    { 
      id: 2, 
      nombre: 'iPhone 15 Pro Max',
      categoria: 'smartphones', 
      precio: '$ 6.299.000 COP',
      imagen: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80' 
    },
    { 
      id: 3, 
      nombre: 'iPad Air M1',
      categoria: 'tablets', 
      precio: '$ 3.999.000 COP',
      imagen: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80' 
    },
    { 
      id: 4, 
      nombre: 'iMac M1 24"',
      categoria: 'desktops', 
      precio: '$ 8.499.000 COP',
      imagen: 'https://images.unsplash.com/photo-1622541625148-eb2c92ed1ec3?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      id: 5, 
      nombre: 'MacBook Air M2',
      categoria: 'laptops', 
      precio: '$ 5.999.000 COP',
      imagen: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80' 
    },
    { 
      id: 6, 
      nombre: 'Apple Watch Series 9',
      categoria: 'wearables', 
      precio: '$ 2.299.000 COP',
      imagen: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80' 
    },
    { 
      id: 7, 
      nombre: 'AirPods Pro 2',
      categoria: 'audio', 
      precio: '$ 1.299.000 COP',
      imagen: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&q=80' 
    },
    { 
      id: 8, 
      nombre: 'Mac Mini M2',
      categoria: 'desktops', 
      precio: '$ 4.199.000 COP',
      imagen: 'https://images.unsplash.com/photo-1717632237054-5e0988e85d9a?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      id: 9, 
      nombre: 'Studio Display',
      categoria: 'monitors', 
      precio: '$ 7.999.000 COP',
      imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80' 
    },
    { 
      id: 10, 
      nombre: 'Magic Keyboard',
      categoria: 'accessories', 
      precio: '$ 599.000 COP',
      imagen: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80' 
    },
    { 
      id: 11, 
      nombre: 'HomePod Mini',
      categoria: 'audio', 
      precio: '$ 499.000 COP',
      imagen: 'https://images.unsplash.com/photo-1636829147637-6b88c84fb6e2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      id: 12, 
      nombre: 'Apple TV 4K',
      categoria: 'tv', 
      precio: '$ 999.000 COP',
      imagen: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&q=80' 
    }
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = resultados.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(resultados.length / itemsPerPage);

  const manejarBusqueda = useCallback((e) => {
    e.preventDefault();
    const filtrados = productos.filter(producto => {
      const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
      const coincideCategoria = categoria === 'todos' || producto.categoria === categoria;
      return coincideNombre && coincideCategoria;
    });
    setResultados(filtrados);
  }, [busqueda, categoria]);

  useEffect(() => {
    const filtrados = productos.filter(producto => {
      const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
      const coincideCategoria = categoria === 'todos' || producto.categoria === categoria;
      return coincideNombre && coincideCategoria;
    });
    setResultados(filtrados);
  }, [busqueda, categoria]);

  return (
    <section style={{ padding: '1rem' }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        color: '#007bff'
      }}>Búsqueda de Productos</h2>
      
      <form onSubmit={manejarBusqueda} style={{
        maxWidth: '600px',
        margin: '0 auto 2rem',
        display: 'flex',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row',
        gap: '1rem',
        padding: '0 1rem'
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
            placeholder="¿Qué producto estás buscando?"
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
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
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
            <option value="todos">Todas las categorías</option>
            <option value="laptops">Laptops</option>
            <option value="smartphones">Smartphones</option>
            <option value="tablets">Tablets</option>
            <option value="desktops">Desktops</option>
            <option value="wearables">Wearables</option>
            <option value="audio">Audio</option>
            <option value="monitors">Monitores</option>
            <option value="accessories">Accesorios</option>
            <option value="tv">TV</option>
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
          Buscar Productos
        </button>
      </form>

      <div style={{
        display: 'grid',
        gridTemplateColumns: window.innerWidth < 768 
          ? '1fr' 
          : window.innerWidth < 1024 
            ? 'repeat(auto-fill, minmax(280px, 1fr))'
            : 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1rem'
      }}>
        {currentItems.map(producto => (
          <div key={producto.id} style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <img 
              src={producto.imagen} 
              alt={producto.nombre}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>{producto.nombre}</h3>
              <p style={{ color: '#666', margin: '0 0 1rem 0' }}>{producto.precio}</p>
              <Link 
                to={`/productos/${producto.id}`}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  textDecoration: 'none'
                }}
              >
                Ver detalles
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
          No se encontraron productos que coincidan con tu búsqueda.
        </p>
      )}
    </section>
  );
}
