import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    setIsSubmitting(true)
    // Let Netlify handle the form submission
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-placeholder" style={{
          backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
        }}></div>
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">
              Ready to start your next project? Get in touch with our expert team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{gap: '4rem', alignItems: 'start'}}>
            {/* Contact Form */}
            <div className="fade-in">
              <h2 style={{color: 'var(--text-light)', fontSize: '2rem', marginBottom: '1.5rem'}}>Send Us a Message</h2>
              <p style={{color: 'var(--text-gray)', marginBottom: '2rem'}}>
                Fill out the form below and we'll get back to you within 24 hours to discuss your project requirements.
              </p>
              
              <form 
                name="contact-form" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field" 
                action="/contact-success" 
                className="contact-form"
                onSubmit={handleSubmit}
              >
                {/* Honeypot field for spam protection */}
                <div style={{display: 'none'}}>
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </div>
                
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    className="form-input" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    className="form-input" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="form-input" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company/Organization</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    className="form-input" 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service" className="form-label">Service Interest *</label>
                  <select 
                    id="service" 
                    name="service" 
                    className="form-input" 
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="telecommunications">Telecommunications</option>
                    <option value="engineering">Engineering & Construction</option>
                    <option value="ict">ICT & Security</option>
                    <option value="consultation">General Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Project Details *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-textarea" 
                    rows="5" 
                    placeholder="Please describe your project requirements, goals, and any specific challenges you're facing..." 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{width: '100%'}} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="loading-spinner" style={{width: '20px', height: '20px', margin: '0 auto'}}></div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="fade-in">
              <h2 style={{color: 'var(--text-light)', fontSize: '2rem', marginBottom: '1.5rem'}}>Get in Touch</h2>
              <p style={{color: 'var(--text-gray)', marginBottom: '2rem'}}>
                We're here to help you achieve your goals. Reach out to us through any of the following channels.
              </p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>info@prosolintegrated.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+234 708 666 6611</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>5B, Yemi Ogunniyi Street<br />Anthony Village, Lagos, Nigeria</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-clock"></i>
                  </div>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps */}
              <div className="map-container" style={{marginTop: '2rem'}}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2847!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0x4e47a0a69c4fc73e!2sAnthony%20Village%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1635959542742!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{border: 0, borderRadius: '12px'}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PROSOL Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
