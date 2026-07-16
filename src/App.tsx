function App() {
  const services = [
    {
      id: 1,
      title: "Desarrollo Web",
      icon: "🌐",
      description: "Aplicaciones web modernas y escalables",
    },
    {
      id: 2,
      title: "Aplicaciones Móvil",
      icon: "📱",
      description: "iOS y Android de alto rendimiento",
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      icon: "☁️",
      description: "Infraestructura segura y confiable",
    },
    {
      id: 4,
      title: "Inteligencia Artificial",
      icon: "🤖",
      description: "Soluciones con IA y Machine Learning",
    },
    {
      id: 5,
      title: "Consultoría Tech",
      icon: "💡",
      description: "Estrategia y transformación digital",
    },
    {
      id: 6,
      title: "Ciberseguridad",
      icon: "🔒",
      description: "Protección de datos y sistemas",
    },
  ];

  return (
    <main className="landing">
      <div className="hero">
        <div className="hero-content">
          <h1>Necesitoya</h1>
          <p className="tagline">Soluciones tecnológicas innovadoras para tu negocio</p>
          <p className="subtitle">Estamos preparando algo especial para ti</p>
          <button className="cta-button">Contáctanos</button>
        </div>
      </div>

      <section className="services">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Necesitoya. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}

export default App;
