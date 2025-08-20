import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  const [activeService, setActiveService] = useState(null)

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
          
          // Stagger child animations
          const children = entry.target.querySelectorAll('.stagger-child')
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate')
            }, index * 100)
          })
        }
      })
    }, observerOptions)

    // Observe elements for animation
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .rotate-in, .bounce-in, .flip-in, .zoom-in, .text-reveal').forEach(el => {
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleServiceClick = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId)
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-placeholder" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
        }}></div>
        <div className="hero-bg-overlay"></div>
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="hero-title text-reveal">Our Services</h1>
            <p className="hero-subtitle slide-in-right">
              Comprehensive engineering and technology solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="text-center fade-in">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              From telecommunications to engineering and ICT solutions, we provide end-to-end services
            </p>
          </div>
          
          <div className="grid grid-3">
            <div 
              className={`service-card ${activeService === 'telecom' ? 'service-card-active' : ''} scale-in stagger-child hover-lift`}
              onClick={() => handleServiceClick('telecom')}
            >
              <div className="card-icon float">📡</div>
              <h3>Telecommunications</h3>
              <p>Advanced telecom infrastructure, network design, and communication solutions for businesses of all sizes.</p>
            </div>
            <div 
              className={`service-card ${activeService === 'engineering' ? 'service-card-active' : ''} scale-in stagger-child hover-lift`}
              onClick={() => handleServiceClick('engineering')}
            >
              <div className="card-icon float">🏗️</div>
              <h3>Engineering & Construction</h3>
              <p>Comprehensive engineering services from design to implementation, ensuring quality and compliance.</p>
            </div>
            <div 
              className={`service-card ${activeService === 'ict' ? 'service-card-active' : ''} scale-in stagger-child hover-lift`}
              onClick={() => handleServiceClick('ict')}
            >
              <div className="card-icon float">💻</div>
              <h3>ICT & Security</h3>
              <p>Cutting-edge IT solutions, cybersecurity, and digital transformation services for modern businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section bg-light">
        <div className="container">
          <div className="service-details-container">
            {activeService === null && (
              <div className="service-selection-message text-center fade-in">
                <h3 className="section-title" style={{fontSize: '1.5rem', marginBottom: '1rem'}}>
                  Click on a service above to learn more
                </h3>
                <p className="section-subtitle" style={{marginBottom: '0'}}>
                  Discover detailed information about our comprehensive service offerings
                </p>
              </div>
            )}

            {/* Telecommunications Details */}
            <div id="telecom-details" className={`service-details ${activeService === 'telecom' ? 'show' : ''}`}>
              <div className="grid grid-2">
                <div className="slide-in-left">
                  <h3 className="section-title" style={{textAlign: 'left', fontSize: '2rem', marginBottom: '1.5rem'}}>
                    Telecommunications Solutions
                  </h3>
                  <p className="section-subtitle" style={{textAlign: 'left', marginBottom: '2rem'}}>
                    We provide comprehensive telecommunications infrastructure and services that keep your business connected and competitive in today's digital landscape.
                  </p>
                  
                  <div className="service-features">
                    <div className="feature-item">
                      <i className="bi bi-check-circle"></i>
                      <span>Network Design & Implementation</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle"></i>
                      <span>Fiber Optic Installation</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle"></i>
                      <span>Wireless Communication Systems</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle"></i>
                      <span>VoIP Solutions</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle"></i>
                      <span>Network Maintenance & Support</span>
                    </div>
                  </div>
                </div>
                <div className="slide-in-right">
                  <div className="image-placeholder" style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                    height: '300px',
                    borderRadius: '12px'
                  }} role="img" aria-label="Telecommunications equipment"></div>
                </div>
              </div>
            </div>

            {/* Engineering Details */}
            <div id="engineering-details" className={`service-details ${activeService === 'engineering' ? 'show' : ''}`}>
              <div className="grid grid-2">
                <div className="slide-in-left">
                  <div className="image-placeholder" style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                    height: '300px',
                    borderRadius: '12px'
                  }} role="img" aria-label="Construction and engineering"></div>
                </div>
                <div className="slide-in-right">
                  <h3 className="section-title" style={{textAlign: 'left', fontSize: '2rem', marginBottom: '1.5rem'}}>
                    Engineering & Construction
                  </h3>
                  <p className="section-subtitle" style={{textAlign: 'left', marginBottom: '2rem'}}>
                    From concept to completion, our engineering team delivers innovative solutions that meet the highest standards of quality, safety, and efficiency.
                  </p>
                  
                  <div className="service-features">
                    <div className="feature-item">
                      <i className="bi bi-check-circle"></i>
                      <span>Structural Engineering</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle"></i>
                      <span>Project Management</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle"></i>
                      <span>Construction Supervision</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle"></i>
                      <span>Quality Assurance</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle"></i>
                      <span>Compliance & Safety</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ICT Details */}
            <div id="ict-details" className={`service-details ${activeService === 'ict' ? 'show' : ''}`}>
              <div className="grid grid-2">
                <div className="slide-in-left">
                  <h3 className="section-title" style={{textAlign: 'left', fontSize: '2rem', marginBottom: '1.5rem'}}>
                    ICT & Security Solutions
                  </h3>
                  <p className="section-subtitle" style={{textAlign: 'left', marginBottom: '2rem'}}>
                    Secure your business with our comprehensive ICT solutions, from cybersecurity to digital transformation and cloud services.
                  </p>
                  
                  <div className="service-features">
                    <div className="feature-item">
                      <i className="bi bi-check-circle"></i>
                      <span>Cybersecurity Solutions</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle"></i>
                      <span>Cloud Services</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle"></i>
                      <span>IT Infrastructure</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle"></i>
                      <span>Digital Transformation</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle"></i>
                      <span>24/7 Technical Support</span>
                    </div>
                  </div>
                </div>
                <div className="slide-in-right">
                  <div className="image-placeholder" style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                    height: '300px',
                    borderRadius: '12px'
                  }} role="img" aria-label="ICT and cybersecurity"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="text-center fade-in">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              How we deliver exceptional results for every project
            </p>
          </div>
          
          <div className="grid grid-4">
            <div className="service-card fade-in stagger-child">
              <div className="card-icon">1️⃣</div>
              <h3>Consultation</h3>
              <p>We analyze your requirements and provide expert recommendations.</p>
            </div>
            <div className="service-card fade-in stagger-child">
              <div className="card-icon">2️⃣</div>
              <h3>Planning</h3>
              <p>Detailed project planning with timelines, resources, and milestones.</p>
            </div>
            <div className="service-card fade-in stagger-child">
              <div className="card-icon">3️⃣</div>
              <h3>Implementation</h3>
              <p>Professional execution with regular progress updates and quality checks.</p>
            </div>
            <div className="service-card fade-in stagger-child">
              <div className="card-icon">4️⃣</div>
              <h3>Support</h3>
              <p>Ongoing maintenance and support to ensure optimal performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-light">
        <div className="container text-center">
          <div className="fade-in">
            <h2 className="section-title">
              Ready to Get Started?
            </h2>
            <p className="section-subtitle">
              Contact us today to discuss your project requirements and get a customized solution.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Get Quote</Link>
              <Link to="/portfolio" className="btn btn-secondary">View Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
