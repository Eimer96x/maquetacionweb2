// components/ClientList.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ClientList() {
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
      ultimaCompra: '15 Feb 2024',
      estado: 'Activo'
    },
    { 
      id: 2, 
      nombre: 'Ana Gómez',
      email: 'ana@ejemplo.com',
      role: 'Cliente Regular',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      comprasTotal: '$ 3.999.000 COP',
      ultimaCompra: '10 Feb 2024',
      estado: 'Activo'
    },
    { 
      id: 3, 
      nombre: 'Carlos Ruiz',
      email: 'carlos@ejemplo.com',
      role: 'Cliente VIP',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
      comprasTotal: '$ 17.497.000 COP',
      ultimaCompra: '01 Feb 2024',
      estado: 'Activo'
    },
    { 
      id: 4, 
      nombre: 'María Rodríguez',
      email: 'maria@ejemplo.com',
      role: 'Cliente Premium',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80',
      comprasTotal: '$ 12.399.000 COP',
      ultimaCompra: '12 Feb 2024',
      estado: 'Activo'
    },
    { 
      id: 5, 
      nombre: 'Pedro Martínez',
      email: 'pedro@ejemplo.com',
      role: 'Cliente Regular',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&q=80',
      comprasTotal: '$ 2.899.000 COP',
      ultimaCompra: '08 Feb 2024',
      estado: 'Activo'
    },
    { 
      id: 6, 
      nombre: 'Laura Torres',
      email: 'laura@ejemplo.com',
      role: 'Cliente VIP',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&q=80',
      comprasTotal: '$ 19.299.000 COP',
      ultimaCompra: '05 Feb 2024',
      estado: 'Activo'
    },
    { 
      id: 7, 
      nombre: 'Diego Sánchez',
      email: 'diego@ejemplo.com',
      role: 'Cliente Premium',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&q=80',
      comprasTotal: '$ 8.799.000 COP',
      ultimaCompra: '03 Feb 2024',
      estado: 'Activo'
    },
    { 
      id: 8, 
      nombre: 'Carmen López',
      email: 'carmen@ejemplo.com',
      role: 'Cliente Regular',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80',
      comprasTotal: '$ 1.999.000 COP',
      ultimaCompra: '01 Feb 2024',
      estado: 'Activo'
    },
    { 
      id: 9, 
      nombre: 'Roberto Díaz',
      email: 'roberto@ejemplo.com',
      role: 'Cliente VIP',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80',
      comprasTotal: '$ 22.499.000 COP',
      ultimaCompra: '29 Ene 2024',
      estado: 'Activo'
    },
    { 
      id: 10, 
      nombre: 'Isabel García',
      email: 'isabel@ejemplo.com',
      role: 'Cliente Premium',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
      comprasTotal: '$ 9.899.000 COP',
      ultimaCompra: '27 Ene 2024',
      estado: 'Activo'
    },
    { 
      id: 11, 
      nombre: 'Miguel Ángel',
      email: 'miguel@ejemplo.com',
      role: 'Cliente Regular',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
      comprasTotal: '$ 3.299.000 COP',
      ultimaCompra: '25 Ene 2024',
      estado: 'Activo'
    },
    { 
      id: 12, 
      nombre: 'Sofía Vargas',
      email: 'sofia@ejemplo.com',
      role: 'Cliente VIP',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
      comprasTotal: '$ 15.999.000 COP',
      ultimaCompra: '23 Ene 2024',
      estado: 'Activo'
    }
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = clientes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(clientes.length / itemsPerPage);

  return (
    <section style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#007bff' }}>
        Directorio de Clientes
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '1.5rem',
        padding: '1rem'
      }}>
        {currentItems.map(cliente => (
          <div key={cliente.id} style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s',
            cursor: 'pointer',
          }}>
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '1.5rem',
              borderBottom: '1px solid #dee2e6',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <img 
                src={cliente.avatar} 
                alt={cliente.nombre}
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid #fff',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
              <div>
                <h3 style={{ margin: '0', color: '#2c3e50' }}>{cliente.nombre}</h3>
                <p style={{ margin: '0.25rem 0', color: '#666' }}>{cliente.email}</p>
                <span style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  backgroundColor: cliente.role === 'Cliente VIP' ? '#28a745' : 
                                 cliente.role === 'Cliente Premium' ? '#007bff' : '#6c757d',
                  color: '#fff',
                  borderRadius: '12px',
                  fontSize: '0.8rem'
                }}>
                  {cliente.role}
                </span>
              </div>
            </div>
            <div style={{ padding: '1rem' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginBottom: '0.5rem' 
              }}>
                <span style={{ color: '#666' }}>Total Compras:</span>
                <strong style={{ color: '#28a745' }}>{cliente.comprasTotal}</strong>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}>
                <span style={{ color: '#666' }}>Última Compra:</span>
                <span>{cliente.ultimaCompra}</span>
              </div>
              <Link 
                to={`/clientes/${cliente.id}`}
                style={{
                  display: 'block',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'background-color 0.2s'
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
    </section>
  );
}
