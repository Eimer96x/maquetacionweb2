// components/Home.jsx

export default function Home() {
    return (
      <section>
        <h1>Bienvenido al Sistema de Gestión</h1>
        <img
          src="https://via.placeholder.com/600x200"
          alt="Banner de bienvenida"
          style={{ margin: '20px 0' }}
        />
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <div style={{ border: '1px solid #ccc', padding: '20px', width: '200px' }}>
            <h3>Total Clientes</h3>
            <p>25</p>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '20px', width: '200px' }}>
            <h3>Total Productos</h3>
            <p>40</p>
          </div>
        </div>
      </section>
    );
  }
  