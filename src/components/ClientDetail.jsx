// components/ClientDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';

export default function ClientDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulamos una base de datos de clientes
  const clientes = {
    1: {
      nombre: 'Juan Pérez',
      email: 'juan@ejemplo.com',
      role: 'Cliente Premium',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      telefono: '+34 612 345 678',
      direccion: 'Calle Principal 123, Madrid',
      membresia: 'Premium',
      historial: [
        { 
          fecha: '2024-02-15', 
          actividad: 'MacBook Pro M2',
          descripcion: 'Laptop profesional con chip M2, 16GB RAM, 512GB SSD, Pantalla Retina de 14 pulgadas',
          monto: '$ 7.999.000 COP'
        },
        { 
          fecha: '2024-01-20', 
          actividad: 'iPhone 15 Pro',
          descripcion: 'Smartphone con chip A17, 256GB, Cámara 48MP, Titanio, Color Space Black',
          monto: '$ 5.499.000 COP'
        }
      ]
    },
    2: {
      nombre: 'Ana Gómez',
      email: 'ana@ejemplo.com',
      role: 'Cliente Regular',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      telefono: '+34 623 456 789',
      direccion: 'Avenida Central 456, Barcelona',
      membresia: 'Regular',
      historial: [
        { 
          fecha: '2024-02-10', 
          actividad: 'iPad Air',
          descripcion: 'Tablet con chip M1, 64GB, Touch ID, Compatible con Apple Pencil 2da gen',
          monto: '$ 3.999.000 COP'
        }
      ]
    },
    3: {
      nombre: 'Carlos Ruiz',
      email: 'carlos@ejemplo.com',
      role: 'Cliente VIP',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
      telefono: '+34 634 567 890',
      direccion: 'Plaza Mayor 789, Valencia',
      membresia: 'VIP',
      historial: [
        { 
          fecha: '2024-02-01', 
          actividad: 'MacBook Pro M2',
          descripcion: 'Laptop profesional con chip M2, 16GB RAM, 512GB SSD, Pantalla Retina de 14 pulgadas',
          monto: '$ 7.999.000 COP'
        },
        { 
          fecha: '2024-01-15', 
          actividad: 'iPhone 15 Pro',
          descripcion: 'Smartphone con chip A17, 256GB, Cámara 48MP, Titanio, Color Space Black',
          monto: '$ 5.499.000 COP'
        },
        { 
          fecha: '2024-01-05', 
          actividad: 'iPad Air',
          descripcion: 'Tablet con chip M1, 64GB, Touch ID, Compatible con Apple Pencil 2da gen',
          monto: '$ 3.999.000 COP'
        }
      ]
    },
    4: {
      nombre: 'María Rodríguez',
      email: 'maria@ejemplo.com',
      role: 'Cliente Premium',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80',
      telefono: '+34 645 678 901',
      direccion: 'Avenida del Mar 234, Málaga',
      membresia: 'Premium',
      historial: [
        { 
          fecha: '2024-02-12',
          actividad: 'iMac M1 24"',
          descripcion: 'All-in-One con chip M1, pantalla Retina 4.5K de 24 pulgadas',
          monto: '$ 8.499.000 COP'
        },
        { 
          fecha: '2024-01-25',
          actividad: 'iPad Air M1',
          descripcion: 'Tablet con chip M1, 256GB, WiFi + 5G',
          monto: '$ 3.899.000 COP'
        }
      ]
    },
    5: {
      nombre: 'Pedro Martínez',
      email: 'pedro@ejemplo.com',
      role: 'Cliente Regular',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&q=80',
      telefono: '+34 656 789 012',
      direccion: 'Calle Nueva 567, Sevilla',
      membresia: 'Regular',
      historial: [
        { 
          fecha: '2024-02-08',
          actividad: 'AirPods Pro 2',
          descripcion: 'Auriculares inalámbricos con cancelación de ruido',
          monto: '$ 1.299.000 COP'
        },
        { 
          fecha: '2024-01-30',
          actividad: 'Magic Keyboard',
          descripcion: 'Teclado inalámbrico con Touch ID',
          monto: '$ 599.000 COP'
        }
      ]
    },
    6: {
      nombre: 'Laura Torres',
      email: 'laura@ejemplo.com',
      role: 'Cliente VIP',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&q=80',
      telefono: '+34 667 890 123',
      direccion: 'Avenida Principal 890, Granada',
      membresia: 'VIP',
      historial: [
        { 
          fecha: '2024-02-05',
          actividad: 'MacBook Air M2',
          descripcion: 'Laptop ultraligera con chip M2, 512GB SSD',
          monto: '$ 5.999.000 COP'
        },
        { 
          fecha: '2024-01-20',
          actividad: 'Studio Display',
          descripcion: 'Monitor 5K Retina de 27 pulgadas',
          monto: '$ 7.999.000 COP'
        }
      ]
    },
    7: {
      nombre: 'Diego Sánchez',
      email: 'diego@ejemplo.com',
      role: 'Cliente Premium',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&q=80',
      telefono: '+34 678 901 234',
      direccion: 'Calle del Sol 456, Bilbao',
      membresia: 'Premium',
      historial: [
        { 
          fecha: '2024-02-03',
          actividad: 'iPhone 15 Pro Max',
          descripcion: 'Smartphone de última generación, 256GB',
          monto: '$ 6.299.000 COP'
        },
        { 
          fecha: '2024-01-15',
          actividad: 'AirPods Pro 2',
          descripcion: 'Auriculares con cancelación de ruido',
          monto: '$ 1.299.000 COP'
        }
      ]
    },
    8: {
      nombre: 'Carmen López',
      email: 'carmen@ejemplo.com',
      role: 'Cliente Regular',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80',
      telefono: '+34 689 012 345',
      direccion: 'Plaza España 789, Zaragoza',
      membresia: 'Regular',
      historial: [
        { 
          fecha: '2024-02-01',
          actividad: 'Magic Keyboard',
          descripcion: 'Teclado inalámbrico con Touch ID',
          monto: '$ 599.000 COP'
        }
      ]
    },
    9: {
      nombre: 'Roberto Díaz',
      email: 'roberto@ejemplo.com',
      role: 'Cliente VIP',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80',
      telefono: '+34 690 123 456',
      direccion: 'Rambla Catalunya 234, Barcelona',
      membresia: 'VIP',
      historial: [
        { 
          fecha: '2024-01-29',
          actividad: 'iMac M1 24"',
          descripcion: 'All-in-One con chip M1, 16GB RAM',
          monto: '$ 8.499.000 COP'
        },
        { 
          fecha: '2024-01-15',
          actividad: 'Mac Mini M2',
          descripcion: 'Desktop compacto con chip M2',
          monto: '$ 4.199.000 COP'
        }
      ]
    },
    10: {
      nombre: 'Isabel García',
      email: 'isabel@ejemplo.com',
      role: 'Cliente Premium',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
      telefono: '+34 601 234 567',
      direccion: 'Gran Vía 567, Madrid',
      membresia: 'Premium',
      historial: [
        { 
          fecha: '2024-01-27',
          actividad: 'Apple Watch Series 9',
          descripcion: 'Smartwatch con GPS + Cellular',
          monto: '$ 2.299.000 COP'
        }
      ]
    },
    11: {
      nombre: 'Miguel Ángel',
      email: 'miguel@ejemplo.com',
      role: 'Cliente Regular',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
      telefono: '+34 612 345 678',
      direccion: 'Calle Mayor 890, Valencia',
      membresia: 'Regular',
      historial: [
        { 
          fecha: '2024-01-25',
          actividad: 'HomePod Mini',
          descripcion: 'Altavoz inteligente compacto',
          monto: '$ 499.000 COP'
        }
      ]
    },
    12: {
      nombre: 'Sofía Vargas',
      email: 'sofia@ejemplo.com',
      role: 'Cliente VIP',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
      telefono: '+34 623 456 789',
      direccion: 'Paseo de Gracia 123, Barcelona',
      membresia: 'VIP',
      historial: [
        { 
          fecha: '2024-01-23',
          actividad: 'MacBook Pro M2',
          descripcion: 'Laptop profesional, 1TB SSD',
          monto: '$ 7.999.000 COP'
        },
        { 
          fecha: '2024-01-10',
          actividad: 'Apple TV 4K',
          descripcion: 'Reproductor multimedia 4K HDR',
          monto: '$ 999.000 COP'
        }
      ]
    }
  };

  const cliente = clientes[id];

  if (!cliente) {
    return <div>Cliente no encontrado</div>;
  }

  return (
    <section style={{ padding: '2rem' }}>
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <div style={{
          backgroundColor: '#007bff',
          padding: '2rem',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <img 
            src={cliente.avatar}
            alt={cliente.nombre}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '60px',
              border: '4px solid #fff',
              objectFit: 'cover'
            }}
          />
          <div>
            <h2 style={{ margin: '0' }}>{cliente.nombre}</h2>
            <p style={{ margin: '0.5rem 0', opacity: '0.9' }}>{cliente.email}</p>
            <span style={{
              backgroundColor: '#fff',
              color: '#007bff',
              padding: '0.25rem 1rem',
              borderRadius: '15px',
              fontSize: '0.9rem'
            }}>
              {cliente.role}
            </span>
          </div>
        </div>
        
        <div style={{ padding: '2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h3>Información de Contacto</h3>
            <p><strong>Teléfono:</strong> {cliente.telefono}</p>
            <p><strong>Dirección:</strong> {cliente.direccion}</p>
          </div>
          
          <div>
            <h3>Historial de Compras</h3>
            <div style={{ 
              display: 'grid', 
              gap: '1rem' 
            }}>
              {cliente.historial.map((item, index) => (
                <div key={index} style={{
                  padding: '1.5rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <p style={{ margin: '0', fontWeight: 'bold', color: '#2c3e50' }}>
                        {item.actividad}
                      </p>
                      <small style={{ color: '#666' }}>{item.fecha}</small>
                    </div>
                    <span style={{ 
                      color: '#007bff', 
                      fontWeight: 'bold',
                      fontSize: '1.1rem' 
                    }}>{item.monto}</span>
                  </div>
                  <p style={{ 
                    margin: '0.5rem 0 0 0',
                    color: '#666',
                    fontSize: '0.9rem',
                    borderTop: '1px solid #dee2e6',
                    paddingTop: '0.5rem'
                  }}>
                    {item.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: '2rem',
            borderTop: '1px solid #dee2e6',
            paddingTop: '2rem'
          }}>
            <button 
              onClick={() => navigate('/clientes')}
              style={{
                backgroundColor: '#6c757d',
                color: '#fff',
                border: 'none',
                padding: '0.8rem 2rem',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}>
              Volver a Clientes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
