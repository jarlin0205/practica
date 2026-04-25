import { 
  Globe, 
  ShieldCheck,
  Monitor,
  Home,
  Code,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Storefront = () => {
  const services = [
    { icon: Monitor, color: '#1e7fff', bg: 'ic-blue', title: 'Reparación de dispositivos', desc: 'Laptops, celulares, tablets y más. Diagnóstico rápido, repuestos originales.', tag: 'Desde $50.000 COP →' },
    { icon: Home, color: '#00d4ff', bg: 'ic-cyan', title: 'Venta de hardware', desc: 'Computadores, periféricos, memorias, discos y accesorios de las mejores marcas.', tag: 'Ver catálogo →' },
    { icon: Code, color: '#7f77dd', bg: 'ic-purple', title: 'Desarrollo de software', desc: 'Sistemas a medida, automatización de procesos y soluciones empresariales.', tag: 'Solicitar proyecto →' },
    { icon: Smartphone, color: '#1d9e75', bg: 'ic-green', title: 'Aplicaciones móviles', desc: 'Apps nativas y multiplataforma para iOS y Android. Diseño y publicación.', tag: 'Ver portafolio →' },
    { icon: Globe, color: '#ba7517', bg: 'ic-amber', title: 'Páginas web profesionales', desc: 'Sitios rápidos, seguros y optimizados para SEO. Tiendas y portafolios.', tag: 'Solicitar diseño →' },
    { icon: ShieldCheck, color: '#d85a30', bg: 'ic-coral', title: 'Redes e infraestructura', desc: 'Diseño e instalación de redes LAN/WAN, servidores y cámaras.', tag: 'Más información →' },
  ];

  const products = [
    { id: 1, name: 'Laptop Core i5 16GB RAM 512 SSD', price: 2399000, oldPrice: 2800000, cat: 'Laptops' },
    { id: 2, name: 'Smartphone 5G 128GB Pantalla AMOLED', price: 1150000, oldPrice: 1399000, cat: 'Celulares' },
    { id: 3, name: 'Router WiFi 6 AX3000 Doble Banda', price: 389000, oldPrice: 460000, cat: 'Redes' },
    { id: 4, name: 'SSD NVMe 1TB Gen4 7000MB/s', price: 320000, oldPrice: 399000, cat: 'Almacenamiento' },
  ];

  return (
    <div className="gt-page">
      {/* NAV */}
      <nav className="gt-nav">
        <Link className="gt-logo" to="/">
          <div className="logo-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <polyline points="13 2 13 9 20 9" /><path d="M20 14.66V20a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h5.34" /><polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
            </svg>
          </div>
          <span className="logo-name">Guajira<span>Tech</span></span>
        </Link>
        <div className="gt-nav-links">
          <button className="nav-link active">Inicio</button>
          <button className="nav-link">Servicios</button>
          <button className="nav-link">Productos</button>
          <button className="nav-link">Proyectos</button>
          <button className="nav-link">Contacto</button>
        </div>
        <div className="gt-nav-right">
          <Link to="/admin" className="btn-outline">Acceso Admin</Link>
          <button className="btn-primary">Cotizar ahora</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="gt-hero">
        <div className="hero-decor"></div>
        <div className="hero-badge"><div className="badge-dot"></div> Tecnología · La Guajira, Colombia</div>
        <h1 className="hero-h1">Soluciones tech que <span>impulsan</span> tu negocio</h1>
        <p className="hero-sub">Reparación de dispositivos, venta de hardware, desarrollo de software, aplicaciones móviles y servicios de redes — todo en un solo lugar.</p>
        <div className="hero-ctas">
          <button className="btn-hero">Ver servicios</button>
          <button className="btn-hero-ghost">Hablar con un experto</button>
        </div>
        <div className="hero-stats">
          <div className="stat"><div className="stat-num">+<span>500</span></div><div className="stat-lbl">Clientes atendidos</div></div>
          <div className="stat"><div className="stat-num"><span>6</span></div><div className="stat-lbl">Años de experiencia</div></div>
          <div className="stat"><div className="stat-num">+<span>120</span></div><div className="stat-lbl">Proyectos entregados</div></div>
          <div className="stat"><div className="stat-num"><span>24</span>h</div><div className="stat-lbl">Soporte disponible</div></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="gt-section">
        <div className="section-label">Lo que hacemos</div>
        <div className="section-title">Nuestros servicios</div>
        <div className="section-sub">Ofrecemos soluciones tecnológicas integrales para personas y empresas en La Guajira y toda Colombia.</div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="svc-card">
              <div className={`svc-icon ${s.bg}`}>
                <s.icon color={s.color} size={24} />
              </div>
              <div className="svc-title">{s.title}</div>
              <div className="svc-desc">{s.desc}</div>
              <div className="svc-tag">{s.tag}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="gt-section-dark">
        <div className="section-container">
          <div className="section-label">Tienda online</div>
          <div className="section-title">Productos destacados</div>
          <div className="section-sub">Hardware y accesorios disponibles para entrega inmediata en Maicao y envíos a toda Colombia.</div>
          <div className="products-grid">
            {products.map((p) => (
              <div key={p.id} className="prod-card">
                <div className="prod-img">
                  <PackagePlaceholder />
                </div>
                <div className="prod-body">
                  <div className="prod-cat">{p.cat}</div>
                  <div className="prod-name">{p.name}</div>
                  <div>
                    <span className="prod-price">${p.price.toLocaleString('es-CO')}</span>
                    <span className="prod-price-old">${p.oldPrice.toLocaleString('es-CO')}</span>
                  </div>
                  <button className="prod-btn">Agregar al carrito</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="gt-section">
        <div className="section-label">Cómo trabajamos</div>
        <div className="section-title">Proceso simple, resultados reales</div>
        <div className="process-row">
          {[
            { n: '01', t: 'Diagnóstico gratuito', d: 'Analizamos tu caso sin costo. Evaluamos necesidades y te presentamos la mejor solución.' },
            { n: '02', t: 'Cotización clara', d: 'Recibes una propuesta detallada con tiempos, costos y alcance definidos desde el inicio.' },
            { n: '03', t: 'Ejecución experta', d: 'Nuestro equipo trabaja con precisión. Te mantenemos informado en cada etapa.' },
            { n: '04', t: 'Entrega y soporte', d: 'Entregamos con garantía y brindamos soporte continuo para que todo funcione.' },
          ].map((step) => (
            <div key={step.n} className="proc-step">
              <div className="proc-num">{step.n}</div>
              <div className="proc-title">{step.t}</div>
              <div className="proc-desc">{step.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="gt-section-dark" style={{ paddingTop: '40px' }}>
        <div className="section-container">
          <div className="section-label">¿Por qué elegirnos?</div>
          <div className="section-title">Ventajas GuajiraTech</div>
          <div className="why-grid">
            {[
              { n: '01', t: 'Equipo certificado', d: 'Técnicos con certificaciones internacionales y años de experiencia en campo.' },
              { n: '02', t: 'Garantía en todo', d: 'Todos nuestros servicios y productos incluyen garantía por escrito, sin letra pequeña.' },
              { n: '03', t: 'Precios justos', d: 'Tarifas competitivas sin costos ocultos. Soluciones accesibles para todo presupuesto.' },
              { n: '04', t: 'Atención local', d: 'Presencia física en Maicao con servicio a domicilio en toda La Guajira.' },
            ].map((w) => (
              <div key={w.n} className="why-card">
                <div className="why-num">{w.n}</div>
                <div className="why-title">{w.t}</div>
                <div className="why-desc">{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="gt-section">
        <div className="section-label">Lo que dicen nuestros clientes</div>
        <div className="section-title">Testimonios reales</div>
        <div className="testi-grid">
          {[
            { av: 'CM', n: 'Carlos Martínez', r: 'Emprendedor, Maicao', t: '"Repararon mi laptop en menos de 24 horas. Pensé que la había perdido, pero quedó como nueva. Excelente servicio."' },
            { av: 'LP', n: 'Laura Peñaloza', r: 'Gerente, Distribuidora Guajira', t: '"Nos desarrollaron el sistema de gestión. Muy profesionales, cumplieron los tiempos y el resultado superó expectativas."' },
            { av: 'JR', n: 'Julio Ríos', r: 'Director, Clínica del Norte', t: '"Instalaron toda la red de nuestra empresa y las cámaras. Trabajo impecable, limpio y con garantía."' },
          ].map((testi, i) => (
            <div key={i} className="testi-card">
              <div className="testi-stars">
                {[1,2,3,4,5].map(s => <div key={s} className="star"></div>)}
              </div>
              <div className="testi-text">{testi.t}</div>
              <div className="testi-author">
                <div className="testi-av" style={{ background: 'rgba(30,127,255,0.2)', color: '#6ab4ff' }}>{testi.av}</div>
                <div>
                  <div className="testi-name">{testi.n}</div>
                  <div className="testi-role">{testi.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <div className="gt-cta-band">
        <div className="cta-band-text">
          <h2>¿Listo para comenzar tu proyecto?</h2>
          <p>Cuéntanos qué necesitas — te respondemos en menos de 2 horas hábiles.</p>
        </div>
        <div className="cta-band-actions">
          <button className="btn-cta-ghost">WhatsApp directo</button>
          <button className="btn-cta-main">Solicitar cotización gratis</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="gt-footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <div className="logo-mark" style={{ width: '28px', height: '28px', borderRadius: '6px' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="14" height="14">
                    <polyline points="13 2 13 9 20 9" /><path d="M20 14.66V20a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h5.34" /><polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
                  </svg>
                </div>
                <span style={{ fontFamily: 'var(--ff-head)', fontSize: '18px', fontWeight: 800, color: 'var(--gt-text)' }}>
                  Guajira<span style={{ color: 'var(--gt-cyan)' }}>Tech</span>
                </span>
              </div>
              <p>Soluciones tecnológicas para personas y empresas en La Guajira y toda Colombia.</p>
            </div>
            <div>
              <div className="footer-col-title">Servicios</div>
              <span className="footer-link">Reparación de equipos</span>
              <span className="footer-link">Desarrollo de software</span>
              <span className="footer-link">Aplicaciones móviles</span>
              <span className="footer-link">Páginas web</span>
            </div>
            <div>
              <div className="footer-col-title">Productos</div>
              <span className="footer-link">Laptops y PCs</span>
              <span className="footer-link">Celulares</span>
              <span className="footer-link">Redes</span>
              <span className="footer-link">Accesorios</span>
            </div>
            <div>
              <div className="footer-col-title">Contacto</div>
              <span className="footer-link">Maicao, La Guajira</span>
              <span className="footer-link">+57 300 000 0000</span>
              <span className="footer-link">info@guajiratech.co</span>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2026 GuajiraTech · Todos los derechos reservados</div>
            <div className="footer-socials">
              <div className="social-btn"><Globe size={18} /></div>
              <div className="social-btn"><Globe size={18} /></div>
              <div className="social-btn"><Globe size={18} /></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const PackagePlaceholder = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#378add" strokeWidth="1.5">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

export default Storefront;
