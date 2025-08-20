import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const heroTitleRef = useRef(null)

  useEffect(() => {
    // Typing animation for hero title
    const typeWriter = (element, text, speed = 80) => {
      let i = 0
      element.textContent = ''
      
      const type = () => {
        if (i < text.length) {
          element.textContent += text.charAt(i)
          i++
          setTimeout(type, speed)
        }
      }
      
      type()
    }

    if (heroTitleRef.current) {
      const originalText = heroTitleRef.current.textContent
      setTimeout(() => {
        typeWriter(heroTitleRef.current, originalText, 80)
      }, 500)
    }

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

    // Text reveal animation
    const textRevealElements = document.querySelectorAll('.text-reveal')
    textRevealElements.forEach(element => {
      const text = element.textContent
      element.innerHTML = text.split('').map(char => 
        char === ' ' ? ' ' : `<span>${char}</span>`
      ).join('')
    })

    // Counter animation
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stat-number')
      
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.count || counter.textContent.replace(/\D/g, ''))
        const duration = 2000
        const increment = target / (duration / 16)
        let current = 0
        
        const updateCounter = () => {
          current += increment
          if (current < target) {
            counter.textContent = Math.floor(current).toLocaleString()
            requestAnimationFrame(updateCounter)
          } else {
            counter.textContent = target.toLocaleString()
          }
        }
        
        updateCounter()
      })
    }

    // Trigger counter animation when stats section is visible
    const statsSection = document.querySelector('.stats-grid')
    if (statsSection) {
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters()
            statsObserver.unobserve(entry.target)
          }
        })
      }, { threshold: 0.5 })
      
      statsObserver.observe(statsSection)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-placeholder" style={{
          backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
        }}></div>
        <div className="container">
          <div className="hero-content fade-in">
            <h1 ref={heroTitleRef} className="hero-title text-reveal">Engineering Excellence in Every Project</h1>
            <p className="hero-subtitle slide-in-right">
              PROSOL Integrated Services delivers cutting-edge solutions in telecommunications, 
              engineering, and ICT services across Nigeria and beyond.
            </p>
            <div className="hero-buttons bounce-in">
              <Link to="/services" className="btn btn-primary hover-lift">Our Services</Link>
              <Link to="/contact" className="btn btn-secondary hover-lift">Get Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="slide-in-left">
              <div className="image-placeholder" style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                height: '400px',
                borderRadius: '12px'
              }} role="img" aria-label="Professional team collaboration"></div>
            </div>
            <div className="slide-in-right">
              <h2 style={{color: 'var(--text-light)', fontSize: '2.5rem', marginBottom: '1.5rem'}}>
                About PROSOL
              </h2>
              <p style={{color: 'var(--text-gray)', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                With over a decade of experience, PROSOL Integrated Services Limited stands as a beacon of 
                innovation in the engineering and telecommunications industry. We specialize in delivering 
                comprehensive solutions that drive business growth and technological advancement.
              </p>
              <p style={{color: 'var(--text-gray)', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem'}}>
                Our team of certified professionals combines technical expertise with industry best practices 
                to ensure every project exceeds expectations and delivers measurable results.
              </p>
              <Link to="/about" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" style={{background: 'var(--secondary-dark)'}}>
        <div className="container">
          <div className="text-center fade-in" style={{marginBottom: '4rem'}}>
            <h2 style={{color: 'var(--text-light)', fontSize: '2.5rem', marginBottom: '1rem'}}>Our Services</h2>
            <p style={{color: 'var(--text-gray)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto'}}>
              Comprehensive solutions tailored to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="service-card scale-in stagger-child hover-lift">
              <div className="card-icon float">📡</div>
              <h3>Telecommunications</h3>
              <p>Advanced telecom infrastructure, network design, and communication solutions for businesses of all sizes.</p>
            </div>
            <div className="service-card scale-in stagger-child hover-lift">
              <div className="card-icon float">🏗️</div>
              <h3>Engineering & Construction</h3>
              <p>Comprehensive engineering services from design to implementation, ensuring quality and compliance.</p>
            </div>
            <div className="service-card scale-in stagger-child hover-lift">
              <div className="card-icon float">💻</div>
              <h3>ICT & Security</h3>
              <p>Cutting-edge IT solutions, cybersecurity, and digital transformation services for modern businesses.</p>
            </div>
          </div>
          
          <div className="text-center" style={{marginTop: '3rem'}}>
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats-grid fade-in">
            <div className="stat-item">
              <div className="stat-number" data-count="150">150</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count="50">50</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count="10">10</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count="25">25</div>
              <div className="stat-label">Expert Engineers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{background: 'var(--secondary-dark)'}}>
        <div className="container text-center">
          <div className="fade-in">
            <h2 style={{color: 'var(--text-light)', fontSize: '2.5rem', marginBottom: '1.5rem'}}>
              Ready to Start Your Project?
            </h2>
            <p style={{color: 'var(--text-gray)', fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem'}}>
              Get in touch with our expert team today and let's discuss how we can bring your vision to life.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/portfolio" className="btn btn-secondary">View Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
