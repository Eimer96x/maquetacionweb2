import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import ProductSearch from './components/ProductSearch'
import ClientList from './components/ClientList'
import ClientDetail from './components/ClientDetail'
import ClientSearch from './components/ClientSearch'

function App() {
  return (
    <BrowserRouter>
      <div style={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        padding: 0,
        width: '100%',
        overflowX: 'hidden'
      }}>
        <Header />
        <main style={{ 
          flex: '1 0 auto',
          padding: window.innerWidth < 768 ? '1rem' : '2rem',
          width: '100%',
          boxSizing: 'border-box',
          maxWidth: '100vw'
        }}>
          <div style={{
            maxWidth: '1280px',
            width: '100%'
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<ProductList />} />
              <Route path="/productos/:id" element={<ProductDetail />} />
              <Route path="/buscar-productos" element={<ProductSearch />} />
              <Route path="/clientes" element={<ClientList />} />
              <Route path="/clientes/:id" element={<ClientDetail />} />
              <Route path="/buscar-clientes" element={<ClientSearch />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
