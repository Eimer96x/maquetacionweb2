// components/ProductDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulamos una base de datos de productos
  const productos = {
    1: {
      nombre: 'MacBook Pro M2',
      descripcion: 'La MacBook Pro con chip M2 representa lo último en computación profesional. Con una espectacular pantalla Liquid Retina XDR de 14 pulgadas que ofrece colores vibrantes y negros profundos. Su potente chip M2 con CPU de 8 núcleos y GPU de 10 núcleos permite un rendimiento excepcional en tareas profesionales como edición de video 4K, desarrollo de software y diseño gráfico. La batería dura hasta 20 horas y cuenta con un sistema de enfriamiento avanzado para mantener el rendimiento constante.',
      precio: '$ 7.999.000 COP',
      stock: 25,
      imagen: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
      especificaciones: [
        'Chip M2 con CPU 8 núcleos y GPU 10 núcleos',
        'Memoria unificada de 16GB',
        'SSD de 512GB de alta velocidad',
        'Pantalla Liquid Retina XDR de 14 pulgadas',
        'Sistema de audio de 6 altavoces con woofers de fuerza cancelada',
        'Tres micrófonos de calidad profesional',
        'Magic Keyboard retroiluminado con Touch ID',
        'Batería de hasta 20 horas de duración',
        'Puerto HDMI, ranura SDXC, puerto MagSafe 3'
      ]
    },
    2: {
      nombre: 'iPhone 15 Pro',
      descripcion: 'El iPhone 15 Pro marca un nuevo estándar en la tecnología móvil. Construido con titanio de calidad aeroespacial, es el iPhone más ligero y resistente hasta la fecha. Su revolucionario chip A17 Pro ofrece un rendimiento sin precedentes para juegos y apps profesionales. La cámara principal de 48MP con teleobjetivo 5x permite capturar fotos profesionales con calidad de estudio, mientras que su pantalla OLED ProMotion de 6.7 pulgadas ofrece una experiencia visual extraordinaria con una respuesta táctil instantánea.',
      precio: '$ 5.499.000 COP',
      stock: 50,
      imagen: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&q=80',
      especificaciones: [
        'Chip A17 Pro con GPU de clase profesional',
        'Pantalla OLED ProMotion 120Hz de 6.7"',
        'Cámara principal de 48MP con RAW ProRes',
        'Zoom óptico 5x con teleobjetivo',
        'Memoria interna de 256GB',
        'Construcción en titanio grado aeroespacial',
        'Dynamic Island y Always-On display',
        'Conectividad 5G avanzada',
        'USB-C con velocidad Thunderbolt'
      ]
    },
    3: {
      nombre: 'iPad Air',
      descripcion: 'El iPad Air redefine la versatilidad en una tablet. Impulsado por el chip M1, ofrece un rendimiento comparable a un ordenador en un diseño ultrafino de 10.9 pulgadas. Perfecto para artistas digitales, estudiantes y profesionales, compatible con Apple Pencil de 2ª generación para una precisión excepcional en dibujo y anotaciones. Su pantalla Liquid Retina con True Tone y amplia gama cromática P3 ofrece una experiencia visual inmersiva, mientras que su diseño todo pantalla con Touch ID en el botón superior garantiza seguridad y comodidad.',
      precio: '$ 3.999.000 COP',
      stock: 30,
      imagen: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80',
      especificaciones: [
        'Chip M1 con Neural Engine',
        'Pantalla Liquid Retina de 10.9"',
        'Touch ID integrado en botón superior',
        '64GB de almacenamiento base',
        'Compatibilidad Apple Pencil 2ª gen',
        'Cámara frontal ultra gran angular 12MP',
        'Cámara trasera 12MP con Smart HDR 3',
        'WiFi 6 y opcional 5G',
        'USB-C para carga y accesorios',
        'Altavoces estéreo en modo horizontal'
      ]
    },
    4: {
      nombre: 'iMac M1 24"',
      descripcion: 'La iMac M1 redefine la computadora de escritorio con un diseño increíblemente delgado de 11.5mm y una pantalla 4.5K Retina espectacular de 24 pulgadas. Su chip M1 ofrece un rendimiento excepcional para todas tus tareas, desde edición de fotos hasta videollamadas en HD. La cámara FaceTime HD de 1080p y el sistema de audio de seis altavoces crean una experiencia inmersiva.',
      precio: '$ 8.499.000 COP',
      stock: 15,
      imagen: 'https://images.unsplash.com/photo-1622541625148-eb2c92ed1ec3?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      especificaciones: [
        'Pantalla Retina 4.5K de 24 pulgadas',
        'Chip M1 con CPU 8 núcleos y GPU 7/8 núcleos',
        'Memoria unificada de 8GB/16GB',
        'Almacenamiento SSD desde 256GB',
        'Cámara FaceTime HD 1080p',
        'Sistema de audio de 6 altavoces',
        'Magic Keyboard con Touch ID',
        'Magic Mouse incluido',
        'Diseño ultrafino de 11.5mm'
      ]
    },
    5: {
      nombre: 'MacBook Air M2',
      descripcion: 'El MacBook Air M2 combina un diseño increíblemente delgado con una potencia extraordinaria. Su pantalla Liquid Retina de 13.6" ofrece 500 nits de brillo y colores P3. El chip M2 de nueva generación permite un rendimiento hasta un 40% superior al M1, perfecto para profesionales y estudiantes que buscan portabilidad sin sacrificar potencia.',
      precio: '$ 5.999.000 COP',
      stock: 20,
      imagen: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80',
      especificaciones: [
        'Chip M2 de última generación',
        'Pantalla Liquid Retina 13.6"',
        'Hasta 18 horas de batería',
        'MagSafe 3 para carga',
        'Cámara FaceTime HD 1080p',
        'Audio espacial con Dolby Atmos',
        'Dos puertos Thunderbolt/USB 4',
        'Magic Keyboard retroiluminado',
        'Diseño silencioso sin ventilador'
      ]
    },
    6: {
      nombre: 'Apple Watch Series 9',
      descripcion: 'El Apple Watch Series 9 incorpora el potente chip S9 para un rendimiento aún mejor. Con una pantalla brillante Always-On Retina, monitorización avanzada de salud y fitness, y el nuevo gesto de doble toque para control sin contacto. Resistente al agua hasta 50 metros y con capacidad para ECG y medición de oxígeno en sangre.',
      precio: '$ 2.299.000 COP',
      stock: 40,
      imagen: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
      especificaciones: [
        'Chip S9 de alto rendimiento',
        'Pantalla Always-On Retina',
        'Resistente al agua 50m',
        'ECG y oxígeno en sangre',
        'GPS + Celular opcional',
        'Detección de caídas',
        'Sensor de temperatura',
        'watchOS 10',
        'Batería para todo el día'
      ]
    },
    7: {
      nombre: 'AirPods Pro 2',
      descripcion: 'Los AirPods Pro de segunda generación ofrecen una experiencia de audio inmersiva con Cancelación Activa de Ruido mejorada y modo Transparencia Adaptativa. El nuevo chip H2 permite un procesamiento de audio más potente, mientras que los controles táctiles permiten un manejo preciso del volumen. Con hasta 6 horas de escucha con una sola carga.',
      precio: '$ 1.299.000 COP',
      stock: 35,
      imagen: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&q=80',
      especificaciones: [
        'Chip H2 para audio avanzado',
        'Cancelación Activa de Ruido 2x mejor',
        'Modo Transparencia Adaptativa',
        'Audio espacial personalizado',
        'Resistencia al agua IPX4',
        'Hasta 6h de batería por carga',
        'Estuche de carga MagSafe',
        'Control táctil de volumen',
        'Localización precisa con Find My'
      ]
    },
    8: {
      nombre: 'Mac Mini M2',
      descripcion: 'El Mac mini con chip M2 es una powerhouse compacta que ofrece un rendimiento sobresaliente en un diseño minimalista. Perfecto para todo tipo de tareas, desde desarrollo de software hasta edición de video 4K. Con una amplia variedad de puertos y la posibilidad de conectar hasta dos monitores, es la base perfecta para tu configuración de escritorio.',
      precio: '$ 4.199.000 COP',
      stock: 18,
      imagen: 'https://images.unsplash.com/photo-1717632237054-5e0988e85d9a?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      especificaciones: [
        'Chip M2 o M2 Pro',
        'Hasta 24GB de memoria unificada',
        'SSD de hasta 2TB',
        'Puerto HDMI 2.0',
        'Dos puertos Thunderbolt 4',
        'Dos puertos USB-A',
        'Puerto Gigabit Ethernet',
        'Wi-Fi 6E y Bluetooth 5.3',
        'Soporte para dos monitores'
      ]
    },
    9: {
      nombre: 'Studio Display',
      descripcion: 'El Studio Display redefine la experiencia visual profesional con su pantalla 5K Retina de 27 pulgadas. Ofrece una cámara Ultra Wide de 12MP con Center Stage, un sistema de sonido de seis altavoces con audio espacial y un diseño elegante en aluminio. Perfecto para creativos y profesionales que exigen la mejor calidad de imagen.',
      precio: '$ 7.999.000 COP',
      stock: 12,
      imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80',
      especificaciones: [
        'Pantalla 5K Retina de 27 pulgadas',
        'Resolución de 5120 x 2880',
        'Brillo de 600 nits',
        'Cámara Ultra Wide 12MP',
        'Sistema de audio de 6 altavoces',
        'Compatible con True Tone',
        'Puerto Thunderbolt 3',
        'Tres puertos USB-C',
        'Inclinación ajustable'
      ]
    },
    10: {
      nombre: 'Magic Keyboard',
      descripcion: 'El Magic Keyboard combina un diseño minimalista con un mecanismo de tijera perfeccionado para una experiencia de escritura excepcional. Con Touch ID integrado para autenticación segura y un diseño numérico completo. La batería recargable dura hasta un mes y se conecta automáticamente a tu Mac.',
      precio: '$ 599.000 COP',
      stock: 45,
      imagen: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
      especificaciones: [
        'Diseño compacto y ergonómico',
        'Mecanismo de tijera perfeccionado',
        'Touch ID integrado',
        'Teclado numérico completo',
        'Batería recargable',
        'Autonomía de hasta 1 mes',
        'Conexión Bluetooth',
        'Cable USB-C a Lightning incluido',
        'Compatible con macOS'
      ]
    },
    11: {
      nombre: 'HomePod Mini',
      descripcion: 'El HomePod mini ofrece un sonido envolvente de 360 grados en un diseño compacto y elegante. Con Siri integrado, control del hogar inteligente y audio computacional avanzado que ajusta dinámicamente el sonido. Ideal para crear un sistema de audio multihabitación o usarlo en stereo pareado.',
      precio: '$ 499.000 COP',
      stock: 30,
      imagen: 'https://images.unsplash.com/photo-1636829147637-6b88c84fb6e2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Nueva URL
      especificaciones: [
        'Audio 360° con calidad premium',
        'Chip S5 para audio computacional',
        'Control por voz con Siri',
        'Control de hogar inteligente',
        'Intercom entre dispositivos Apple',
        'Emparejamiento estéreo',
        'Sensor de temperatura y humedad',
        'Conexión AirPlay 2',
        'Compatible con Thread'
      ]
    },
    12: {
      nombre: 'Apple TV 4K',
      descripcion: 'El Apple TV 4K lleva el entretenimiento al siguiente nivel con contenido 4K HDR y Dolby Atmos. Potenciado por el chip A15 Bionic, ofrece un rendimiento excepcional para juegos y aplicaciones. Con el nuevo Siri Remote, navegación intuitiva y control total del hogar inteligente a través del Centro de Control.',
      precio: '$ 999.000 COP',
      stock: 25,
      imagen: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&q=80',
      especificaciones: [
        'Chip A15 Bionic',
        'Resolución 4K HDR',
        'Soporte Dolby Atmos',
        'Nuevo Siri Remote',
        'HDMI 2.1',
        'Wi-Fi 6 y Thread',
        'Centro de Control HomeKit',
        'tvOS con Apple Arcade',
        'Compatible con AirPlay'
      ]
    }
  };

  const producto = productos[id];

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <section style={{ padding: '1rem' }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        color: '#007bff',
        fontSize: window.innerWidth < 768 ? '1.5rem' : '2rem'
      }}>Detalles de {producto.nombre}</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
        gap: '2rem',
        backgroundColor: '#fff',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <img 
          src={producto.imagen}
          alt={producto.nombre}
          style={{
            width: '100%',
            height: '400px',
            objectFit: 'cover'
          }}
        />
        <div style={{ padding: '2rem' }}>
          <h2 style={{ marginTop: 0 }}>{producto.nombre}</h2>
          <p style={{ 
            fontSize: '1.5rem', 
            color: '#007bff', 
            fontWeight: 'bold' 
          }}>{producto.precio}</p>
          <p style={{ color: '#666' }}>{producto.descripcion}</p>
          <div style={{ 
            backgroundColor: '#f8f9fa',
            padding: '1rem',
            borderRadius: '8px',
            marginTop: '1rem'
          }}>
            <h4 style={{ marginTop: 0 }}>Especificaciones:</h4>
            <ul style={{ paddingLeft: '1.5rem' }}>
              {producto.especificaciones.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          <p style={{ color: '#28a745' }}>
            Stock disponible: {producto.stock} unidades
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '1rem'
          }}>
            <button 
              onClick={() => navigate('/productos')}
              style={{
                backgroundColor: '#6c757d',
                color: '#fff',
                border: 'none',
                padding: '0.8rem 2rem',
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
              Volver
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
}
