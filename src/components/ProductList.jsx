// components/ProductList.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [favoritos, setFavoritos] = useState([]);
  const itemsPerPage = 6;

  const productos = [
    { 
      id: 1, 
      nombre: 'MacBook Pro M2', 
      precio: '$ 7.999.000 COP',
      imagen: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80'
    },
    { 
      id: 2, 
      nombre: 'iPhone 15 Pro Max', 
      precio: '$ 6.299.000 COP',
      imagen: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80' 
    },
    { 
      id: 3, 
      nombre: 'iPad Air M1', 
      precio: '$ 3.999.000 COP',
      imagen: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80' 
    },
    { 
      id: 4, 
      nombre: 'iMac M1 24"', 
      precio: '$ 8.499.000 COP',
      imagen: 'https://images.unsplash.com/photo-1622541625148-eb2c92ed1ec3?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      id: 5, 
      nombre: 'MacBook Air M2', 
      precio: '$ 5.999.000 COP',
      imagen: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80' 
    },
    { 
      id: 6, 
      nombre: 'Apple Watch Series 9', 
      precio: '$ 2.299.000 COP',
      imagen: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80' 
    },
    { 
      id: 7, 
      nombre: 'AirPods Pro 2', 
      precio: '$ 1.299.000 COP',
      imagen: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&q=80' 
    },
    { 
      id: 8, 
      nombre: 'Mac Mini M2', 
      precio: '$ 4.199.000 COP',
      imagen: 'https://images.unsplash.com/photo-1717632237054-5e0988e85d9a?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      id: 9, 
      nombre: 'Studio Display', 
      precio: '$ 7.999.000 COP',
      imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80' 
    },
    { 
      id: 10, 
      nombre: 'Magic Keyboard', 
      precio: '$ 599.000 COP',
      imagen: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80' 
    },
    { 
      id: 11, 
      nombre: 'HomePod Mini', 
      precio: '$ 499.000 COP',
      imagen: 'https://images.unsplash.com/photo-1636829147637-6b88c84fb6e2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Nueva URL
    },
    { 
      id: 12, 
      nombre: 'Apple TV 4K', 
      precio: '$ 999.000 COP',
      imagen: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&q=80' 
    }
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productos.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(productos.length / itemsPerPage);

  const toggleFavorito = (id) => {
    setFavoritos(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="products-grid">
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        color: '#007bff'
      }}>Nuestros Productos Destacados</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '2rem',
        padding: '1rem'
      }}>
        {currentItems.map(producto => (
          <div key={producto.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            transition: 'transform 0.2s',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            position: 'relative'
          }}>
            <button
              onClick={() => toggleFavorito(producto.id)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                color: favoritos.includes(producto.id) ? '#dc3545' : '#666'
              }}
            >
              ♥
            </button>
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
              <h3 style={{ 
                margin: '0 0 0.5rem 0',
                color: '#2c3e50',
                fontSize: '1.25rem'
              }}>{producto.nombre}</h3>
              <p style={{ color: '#666', margin: '0 0 1rem 0' }}>{producto.precio}</p>
              <Link 
                to={`/productos/${producto.id}`}
                style={{
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
    </section>
  );
}
