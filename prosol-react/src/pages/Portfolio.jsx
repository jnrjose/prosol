import { useState } from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
  }

  const portfolioItems = [
    { id: 1, category: 'telecommunications', title: 'Lagos Metro Fiber Network', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 2, category: 'engineering', title: 'Commercial Building Project', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 3, category: 'ict', title: 'Enterprise Security System', image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 4, category: 'telecommunications', title: 'Wireless Network Deployment', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 5, category: 'engineering', title: 'Infrastructure Development', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 6, category: 'ict', title: 'Cloud Migration Project', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-placeholder" style={{
          backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
        }}></div>
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">Our Portfolio</h1>
            <p className="hero-subtitle">
              Showcasing our successful projects and the impact we've made across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="section">
        <div className="container">
          <div className="text-center fade-in" style={{marginBottom: '3rem'}}>
            <h2 style={{color: 'var(--text-light)', fontSize: '2.5rem', marginBottom: '2rem'}}>Featured Projects</h2>
            
            <div className="portfolio-filters">
              <button 
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => handleFilterClick('all')}
              >
                All Projects
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'telecommunications' ? 'active' : ''}`}
                onClick={() => handleFilterClick('telecommunications')}
              >
                Telecommunications
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'engineering' ? 'active' : ''}`}
                onClick={() => handleFilterClick('engineering')}
              >
                Engineering
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'ict' ? 'active' : ''}`}
                onClick={() => handleFilterClick('ict')}
              >
                ICT & Security
              </button>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="portfolio-grid">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="portfolio-item" 
                data-category={item.category}
                style={{
                  display: 'block',
                  opacity: 1,
                  transform: 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="section" style={{background: 'var(--secondary-dark)'}}>
        <div className="container">
          <div className="text-center fade-in" style={{marginBottom: '4rem'}}>
            <h2 style={{color: 'var(--text-light)', fontSize: '2.5rem', marginBottom: '1rem'}}>Project Statistics</h2>
            <p style={{color: 'var(--text-gray)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto'}}>
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="stats-grid fade-in">
            <div className="stat-item">
              <div className="stat-number" data-count="150">150+</div>
              <div className="stat-label">Completed Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count="50">50+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count="98">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count="24">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center fade-in" style={{marginBottom: '4rem'}}>
            <h2 style={{color: 'var(--text-light)', fontSize: '2.5rem', marginBottom: '1rem'}}>What Our Clients Say</h2>
            <p style={{color: 'var(--text-gray)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto'}}>
              Testimonials from satisfied clients across Nigeria
            </p>
          </div>
          
          <div className="grid grid-2">
            <div className="testimonial-card fade-in stagger-child">
              <div className="testimonial-content">
                <p>"PROSOL delivered an exceptional telecommunications infrastructure for our Lagos office. Their professionalism and technical expertise exceeded our expectations."</p>
              </div>
              <div className="testimonial-author">
                <strong>Adebayo Johnson</strong>
                <span>CEO, TechCorp Nigeria</span>
              </div>
            </div>
            <div className="testimonial-card fade-in stagger-child">
              <div className="testimonial-content">
                <p>"The engineering team at PROSOL completed our construction project on time and within budget. Their attention to detail and quality is remarkable."</p>
              </div>
              <div className="testimonial-author">
                <strong>Fatima Abdullahi</strong>
                <span>Project Manager, BuildRight Ltd</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section" style={{background: 'var(--secondary-dark)'}}>
        <div className="container">
          <div className="text-center fade-in" style={{marginBottom: '4rem'}}>
            <h2 style={{color: 'var(--text-light)', fontSize: '2.5rem', marginBottom: '1rem'}}>Industries We Serve</h2>
            <p style={{color: 'var(--text-gray)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto'}}>
              Delivering solutions across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-4">
            <div className="industry-card scale-in stagger-child">
              <div className="industry-icon">🏢</div>
              <h4>Corporate</h4>
              <p>Enterprise solutions for large corporations and multinational companies.</p>
            </div>
            <div className="industry-card scale-in stagger-child">
              <div className="industry-icon">🏥</div>
              <h4>Healthcare</h4>
              <p>Specialized ICT and communication systems for healthcare facilities.</p>
            </div>
            <div className="industry-card scale-in stagger-child">
              <div className="industry-icon">🏫</div>
              <h4>Education</h4>
              <p>Technology infrastructure for schools and educational institutions.</p>
            </div>
            <div className="industry-card scale-in stagger-child">
              <div className="industry-icon">🏛️</div>
              <h4>Government</h4>
              <p>Public sector projects and government infrastructure development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <div className="fade-in">
            <h2 style={{color: 'var(--text-light)', fontSize: '2.5rem', marginBottom: '1.5rem'}}>
              Ready to Start Your Project?
            </h2>
            <p style={{color: 'var(--text-gray)', fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem'}}>
              Join our list of satisfied clients and let us help you achieve your project goals.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
              <Link to="/services" className="btn btn-secondary">Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Portfolio
