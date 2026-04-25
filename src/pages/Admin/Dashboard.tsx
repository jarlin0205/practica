import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import { 
  Bar, 
  Doughnut
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { TrendingUp, TrendingDown, Plus, FileText, UserPlus, CreditCard } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const barData = {
    labels: ['Nov', 'Dic', 'Ene', 'Feb', 'Mar', 'Abr'],
    datasets: [
      {
        label: 'Productos',
        data: [8.2, 11.5, 7.8, 12.1, 9.4, 14.6],
        backgroundColor: '#1e7fff',
        borderRadius: 5,
      },
      {
        label: 'Servicios',
        data: [3.1, 4.2, 2.9, 5.3, 4.1, 7.2],
        backgroundColor: 'rgba(0, 212, 255, 0.22)',
        borderColor: '#00d4ff',
        borderWidth: 1.5,
        borderRadius: 5,
      },
    ],
  };

  const donutData = {
    labels: ['Hardware', 'Reparaciones', 'Software', 'Redes'],
    datasets: [
      {
        data: [38, 27, 18, 17],
        backgroundColor: ['#1e7fff', '#00d4ff', '#7f77dd', '#1d9e75'],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <AdminLayout title="Panel de control">
      {/* KPI Grid */}
      <div className="kpi-grid">
        <div className="kpi">
          <div className="kpi-label">Ingresos del mes</div>
          <div className="kpi-val">
            $18.4M <span className="kpi-trend up"><TrendingUp size={12}/> +12%</span>
          </div>
          <div className="kpi-sub">COP · Meta: $22M</div>
          <div className="kpi-bar">
            <div className="kpi-bar-fill" style={{ width: '84%', background: 'var(--blue)' }}></div>
          </div>
        </div>
        <div className="kpi">
          <div className="kpi-label">Pedidos totales</div>
          <div className="kpi-val">
            143 <span className="kpi-trend up"><TrendingUp size={12}/> +8%</span>
          </div>
          <div className="kpi-sub">Este mes · 8 pendientes</div>
          <div className="kpi-bar">
            <div className="kpi-bar-fill" style={{ width: '65%', background: 'var(--cyan)' }}></div>
          </div>
        </div>
        <div className="kpi">
          <div className="kpi-label">Servicios activos</div>
          <div className="kpi-val">
            27 <span className="kpi-trend dn"><TrendingDown size={12}/> -3%</span>
          </div>
          <div className="kpi-sub">3 en proceso hoy</div>
          <div className="kpi-bar">
            <div className="kpi-bar-fill" style={{ width: '54%', background: 'var(--green)' }}></div>
          </div>
        </div>
        <div className="kpi">
          <div className="kpi-label">Clientes nuevos</div>
          <div className="kpi-val">
            34 <span className="kpi-trend up"><TrendingUp size={12}/> +21%</span>
          </div>
          <div className="kpi-sub">Vs. mes anterior</div>
          <div className="kpi-bar">
            <div className="kpi-bar-fill" style={{ width: '72%', background: 'var(--amber)' }}></div>
          </div>
        </div>
      </div>

      <div className="two-col">
        {/* Revenue Chart */}
        <div className="panel">
          <div className="panel-head">
            <span className="panel-title">Ingresos — últimos 6 meses</span>
            <span className="panel-action">Ver reporte</span>
          </div>
          <div style={{ height: '250px' }}>
            <Bar
              data={barData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                },
                scales: {
                  y: {
                    grid: { color: 'rgba(100, 160, 255, 0.05)' },
                    ticks: { color: '#8899bb', font: { size: 10 } }
                  },
                  x: {
                    grid: { display: false },
                    ticks: { color: '#8899bb', font: { size: 10 } }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Categories Donut */}
        <div className="panel donut-panel">
          <div className="panel-head">
            <span className="panel-title">Ventas por categoría</span>
            <span className="panel-action">Detalles</span>
          </div>
          <div className="donut-body">
            <div className="donut-canvas-wrap">
              <Doughnut 
                data={donutData} 
                options={{ 
                  cutout: '70%',
                  plugins: { legend: { display: false } }
                }} 
              />
            </div>
            <div className="donut-legend">
              {[
                { label: 'Hardware', color: '#1e7fff', val: '38%' },
                { label: 'Reparaciones', color: '#00d4ff', val: '27%' },
                { label: 'Software', color: '#7f77dd', val: '18%' },
                { label: 'Redes', color: '#1d9e75', val: '17%' },
              ].map((item) => (
                <div key={item.label} className="leg-item">
                  <span className="leg-left">
                    <span className="leg-dot" style={{ background: item.color }}></span>
                    {item.label}
                  </span>
                  <span className="leg-val">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="panel" style={{ marginBottom: '24px' }}>
        <div className="panel-head">
          <span className="panel-title">Acciones rápidas</span>
        </div>
        <div className="qa-grid">
          <div className="qa-btn">
            <div className="qa-icon" style={{ background: 'rgba(30, 127, 255, 0.15)' }}>
              <Plus color="#6ab4ff" size={18} />
            </div>
            <div>
              <div className="qa-label">Nuevo producto</div>
              <div className="qa-sub">Agregar al catálogo</div>
            </div>
          </div>
          <div className="qa-btn">
            <div className="qa-icon" style={{ background: 'rgba(29, 158, 117, 0.15)' }}>
              <FileText color="#3fcfa0" size={18} />
            </div>
            <div>
              <div className="qa-label">Nuevo servicio</div>
              <div className="qa-sub">Crear orden</div>
            </div>
          </div>
          <div className="qa-btn">
            <div className="qa-icon" style={{ background: 'rgba(186, 117, 23, 0.15)' }}>
              <UserPlus color="#e8a430" size={18} />
            </div>
            <div>
              <div className="qa-label">Agregar cliente</div>
              <div className="qa-sub">Registro nuevo</div>
            </div>
          </div>
          <div className="qa-btn">
            <div className="qa-icon" style={{ background: 'rgba(226, 75, 74, 0.15)' }}>
              <CreditCard color="#f07070" size={18} />
            </div>
            <div>
              <div className="qa-label">Registrar pago</div>
              <div className="qa-sub">Cobro manual</div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
