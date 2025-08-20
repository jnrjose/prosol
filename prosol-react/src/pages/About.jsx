import { Link } from 'react-router-dom'

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-placeholder"></div>
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">About PROSOL</h1>
            <p className="hero-subtitle">
              Leading the way in engineering excellence and technological innovation across Nigeria and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="slide-in-left">
              <h2 className="section-title" style={{textAlign: 'left', marginBottom: '2rem'}}>Our Story</h2>
              <p style={{color: 'var(--text-gray)', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                Founded with a vision to transform Nigeria's engineering and telecommunications landscape, 
                PROSOL Integrated Services Limited has grown from a small startup to a leading provider 
                of comprehensive technical solutions.
              </p>
              <p style={{color: 'var(--text-gray)', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                Our journey began with a simple belief: that every project deserves excellence, innovation, 
                and unwavering commitment to quality. Today, we continue to uphold these values in every 
                solution we deliver.
              </p>
              <p style={{color: 'var(--text-gray)', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem'}}>
                With over a decade of experience and a team of certified professionals, we've successfully 
                completed over 150 projects, earning the trust of clients across various industries.
              </p>
            </div>
            <div className="slide-in-right">
              <div className="image-placeholder" style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                height: '500px'
              }} role="img" aria-label="Professional engineering team"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid grid-2">
            <div className="fade-in">
              <div className="service-card">
                <div className="card-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>
                  To deliver innovative engineering and telecommunications solutions that empower businesses 
                  to achieve their goals while contributing to Nigeria's technological advancement and 
                  economic growth.
                </p>
              </div>
            </div>
            <div className="fade-in">
              <div className="service-card">
                <div className="card-icon">🚀</div>
                <h3>Our Vision</h3>
                <p>
                  To be the leading integrated services provider in West Africa, recognized for our 
                  commitment to excellence, innovation, and sustainable development in engineering 
                  and telecommunications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className="text-center fade-in">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="service-card scale-in stagger-child">
              <div className="card-icon">⚡</div>
              <h3>Excellence</h3>
              <p>We strive for perfection in every project, ensuring the highest quality standards and exceeding client expectations.</p>
            </div>
            <div className="service-card scale-in stagger-child">
              <div className="card-icon">🤝</div>
              <h3>Integrity</h3>
              <p>We conduct business with honesty, transparency, and ethical practices, building trust with all stakeholders.</p>
            </div>
            <div className="service-card scale-in stagger-child">
              <div className="card-icon">💡</div>
              <h3>Innovation</h3>
              <p>We embrace cutting-edge technologies and creative solutions to solve complex engineering challenges.</p>
            </div>
            <div className="service-card scale-in stagger-child">
              <div className="card-icon">👥</div>
              <h3>Collaboration</h3>
              <p>We work closely with clients and partners to achieve shared goals and create lasting relationships.</p>
            </div>
            <div className="service-card scale-in stagger-child">
              <div className="card-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We are committed to environmentally responsible practices and sustainable development solutions.</p>
            </div>
            <div className="service-card scale-in stagger-child">
              <div className="card-icon">🎯</div>
              <h3>Results</h3>
              <p>We focus on delivering measurable outcomes that drive business growth and operational efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center fade-in">
            <h2 className="section-title">Our Expert Team</h2>
            <p className="section-subtitle">
              Meet the professionals behind our success
            </p>
          </div>
          
          <div className="grid grid-2">
            <div className="slide-in-left">
              <div className="image-placeholder" style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                height: '400px',
                borderRadius: '12px'
              }} role="img" aria-label="Engineering team collaboration"></div>
            </div>
            <div className="slide-in-right">
              <h3 style={{color: 'var(--text-dark)', fontSize: '2rem', marginBottom: '1.5rem'}}>
                Certified Professionals
              </h3>
              <p style={{color: 'var(--text-gray)', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                Our team consists of highly qualified engineers, project managers, and technical specialists 
                with extensive experience in their respective fields.
              </p>
              <div className="stats-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem'}}>
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Expert Engineers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Certifications</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Years Average Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="text-center fade-in">
            <h2 className="section-title">Why Choose PROSOL?</h2>
            <p className="section-subtitle">
              What sets us apart from the competition
            </p>
          </div>
          
          <div className="grid grid-2">
            <div className="service-card fade-in stagger-child">
              <div className="card-icon">🏆</div>
              <h3>Proven Track Record</h3>
              <p>Over 150 successfully completed projects with a 98% client satisfaction rate.</p>
            </div>
            <div className="service-card fade-in stagger-child">
              <div className="card-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Efficient project management ensures on-time delivery without compromising quality.</p>
            </div>
            <div className="service-card fade-in stagger-child">
              <div className="card-icon">💰</div>
              <h3>Cost-Effective</h3>
              <p>Competitive pricing with transparent billing and no hidden costs.</p>
            </div>
            <div className="service-card fade-in stagger-child">
              <div className="card-icon">🔧</div>
              <h3>Comprehensive Support</h3>
              <p>End-to-end project support from planning to implementation and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-light">
        <div className="container text-center">
          <div className="fade-in">
            <h2 className="section-title">
              Ready to Work With Us?
            </h2>
            <p className="section-subtitle">
              Let's discuss how our expertise can help you achieve your project goals.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link to="/services" className="btn btn-secondary">Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
