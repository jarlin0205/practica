import React, { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { Plus, Edit2, Trash2, Package } from 'lucide-react';

const ProductManagement = () => {
  const [products] = useState([
    { id: 1, name: 'Laptop Core i5 16GB / 512 SSD', cat: 'Laptops', price: 2399000, stock: 12, status: 'Activo' },
    { id: 2, name: 'Smartphone 5G 128GB AMOLED', cat: 'Celulares', price: 1150000, stock: 7, status: 'Activo' },
    { id: 3, name: 'Router WiFi 6 AX3000', cat: 'Redes', price: 389000, stock: 2, status: 'Stock bajo' },
    { id: 4, name: 'SSD NVMe 1TB Gen4', cat: 'Almacenamiento', price: 320000, stock: 18, status: 'Activo' },
  ]);

  return (
    <AdminLayout title="Gestión de productos">
      <div className="full-panel">
        <div className="panel-head">
          <span className="panel-title">Catálogo de productos</span>
          <button className="add-btn">
            <Plus size={16} /> Agregar producto
          </button>
        </div>
        
        <div className="search-bar">
          <input type="text" placeholder="Buscar por nombre, categoría, SKU..." />
          <button className="act-btn">Filtrar</button>
          <button className="act-btn">Exportar</button>
        </div>

        <table className="adm-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}></th>
              <th>Producto</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>
                  <div className="prod-thumb">
                    <Package size={18} color="var(--blue)" />
                  </div>
                </td>
                <td className="td-name">{p.name}</td>
                <td>{p.cat}</td>
                <td style={{ color: 'var(--cyan)', fontWeight: 600 }}>
                  ${p.price.toLocaleString('es-CO')}
                </td>
                <td style={{ color: p.stock < 5 ? 'var(--red)' : 'var(--text)', fontWeight: p.stock < 5 ? 700 : 400 }}>
                  {p.stock} {p.stock < 5 && '⚠'}
                </td>
                <td>
                  <span className={`badge ${p.status === 'Activo' ? 'b-green' : 'b-amber'}`}>
                    {p.status}
                  </span>
                </td>
                <td>
                  <div className="td-act">
                    <button className="act-btn"><Edit2 size={14} /></button>
                    <button className="act-btn danger"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ProductManagement;
