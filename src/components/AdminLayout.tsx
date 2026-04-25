import React from 'react';
import Sidebar from './Sidebar';
import { Bell } from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  return (
    <div className="adm">
      <Sidebar />
      <div className="adm-main">
        <header className="adm-topbar">
          <div>
            <span className="topbar-title">{title}</span>
            <span className="topbar-date">— {new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })}</span>
          </div>
          <div className="tb-search">
            <input type="text" placeholder="Buscar pedidos, clientes..." />
          </div>
          <div className="tb-notif">
            <Bell size={18} />
            <div className="notif-dot"></div>
          </div>
        </header>
        <main className="adm-body">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
