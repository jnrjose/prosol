import { Link } from 'react-router-dom'

const ContactSuccess = () => {
  return (
    <main>
      <section className="hero" style={{minHeight: '80vh', display: 'flex', alignItems: 'center'}}>
        <div className="hero-bg-placeholder" style={{
          backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
        }}></div>
        <div className="container" style={{textAlign: 'center', zIndex: 2}}>
          <div className="fade-in">
            <div style={{
              background: 'var(--accent-orange)', 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 2rem'
            }}>
              <i className="bi bi-check-lg" style={{fontSize: '2.5rem', color: 'white'}}></i>
            </div>
            <h1 className="hero-title" style={{fontSize: '3rem', marginBottom: '1.5rem'}}>Message Sent Successfully!</h1>
            <p className="hero-subtitle" style={{
              fontSize: '1.25rem', 
              marginBottom: '2rem', 
              maxWidth: '600px', 
              marginLeft: 'auto', 
              marginRight: 'auto'
            }}>
              Thank you for reaching out to PROSOL Integrated Services. We've received your message and will get back to you within 24 hours to discuss your project requirements.
            </p>
            
            <div style={{
              background: 'rgba(55, 65, 81, 0.8)', 
              borderRadius: '12px', 
              padding: '2rem', 
              margin: '3rem auto', 
              maxWidth: '500px', 
              border: '1px solid var(--border-gray)'
            }}>
              <h3 style={{color: 'var(--accent-orange)', marginBottom: '1rem', fontSize: '1.5rem'}}>What Happens Next?</h3>
              <div style={{textAlign: 'left'}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                  <div style={{
                    background: 'var(--accent-orange)', 
                    width: '30px', 
                    height: '30px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    marginRight: '1rem', 
                    flexShrink: 0
                  }}>
                    <span style={{color: 'white', fontWeight: 'bold', fontSize: '0.875rem'}}>1</span>
                  </div>
                  <p style={{color: 'var(--text-gray)', margin: 0}}>Our team reviews your project details</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                  <div style={{
                    background: 'var(--accent-orange)', 
                    width: '30px', 
                    height: '30px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    marginRight: '1rem', 
                    flexShrink: 0
                  }}>
                    <span style={{color: 'white', fontWeight: 'bold', fontSize: '0.875rem'}}>2</span>
                  </div>
                  <p style={{color: 'var(--text-gray)', margin: 0}}>We prepare a customized response</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{
                    background: 'var(--accent-orange)', 
                    width: '30px', 
                    height: '30px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    marginRight: '1rem', 
                    flexShrink: 0
                  }}>
                    <span style={{color: 'white', fontWeight: 'bold', fontSize: '0.875rem'}}>3</span>
                  </div>
                  <p style={{color: 'var(--text-gray)', margin: 0}}>We contact you to schedule a consultation</p>
                </div>
              </div>
            </div>
            
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link to="/" className="btn btn-primary">Return to Homepage</Link>
              <Link to="/services" className="btn btn-secondary">Explore Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactSuccess
