
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import ProductManagement from './pages/Admin/ProductManagement';
import Storefront from './pages/Client/Storefront';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/products" element={<ProductManagement />} />
        
        {/* Client Routes */}
        <Route path="/store" element={<Storefront />} />
        
        {/* Redirects */}
        <Route path="/" element={<Navigate to="/store" replace />} />
        
        {/* Fallback */}
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </Router>
  );
}

export default App;
