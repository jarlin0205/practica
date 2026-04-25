import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  Settings, 
  Users, 
  BarChart3, 
  MessageSquare, 
  LogOut,
  Clock,
  ClipboardList
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin', badge: null },
    { icon: ShoppingBag, label: 'Pedidos', path: '/admin/orders', badge: '8' },
    { icon: Package, label: 'Productos', path: '/admin/products', badge: null },
    { icon: Clock, label: 'Servicios', path: '/admin/services', badge: '3', badgeColor: 'g' },
    { icon: Users, label: 'Clientes', path: '/admin/clients', badge: null },
  ];

  const managementItems = [
    { icon: BarChart3, label: 'Reportes', path: '/admin/reports' },
    { icon: ClipboardList, label: 'Inventario', path: '/admin/inventory' },
    { icon: MessageSquare, label: 'Mensajes', path: '/admin/messages', badge: '5' },
    { icon: Settings, label: 'Ajustes', path: '/admin/settings' },
  ];

  return (
    <aside className="adm-side">
      <div className="side-logo">
        <div className="lmark">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <polyline points="13 2 13 9 20 9" />
            <path d="M20 14.66V20a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h5.34" />
            <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
          </svg>
        </div>
        <span className="lname">Guajira<span>Tech</span></span>
      </div>
      
      <div className="side-role">
        <div className="role-av">GT</div>
        <div>
          <div className="role-name">Administrador</div>
          <div className="role-tag">Acceso total</div>
        </div>
      </div>

      <div className="side-sep">Principal</div>
      {menuItems.map((item) => (
        <Link 
          key={item.path} 
          to={item.path} 
          className={`side-item ${location.pathname === item.path ? 'on' : ''}`}
        >
          <item.icon />
          {item.label}
          {item.badge && (
            <span className={`side-badge ${item.badgeColor === 'g' ? 'g' : ''}`}>
              {item.badge}
            </span>
          )}
        </Link>
      ))}

      <div className="side-sep">Gestión</div>
      {managementItems.map((item) => (
        <Link 
          key={item.path} 
          to={item.path} 
          className={`side-item ${location.pathname === item.path ? 'on' : ''}`}
        >
          <item.icon />
          {item.label}
          {item.badge && <span className="side-badge">{item.badge}</span>}
        </Link>
      ))}

      <div className="side-bottom">
        <div className="side-item" style={{ color: '#f07070' }}>
          <LogOut />
          Cerrar sesión
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
