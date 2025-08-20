import { Link } from 'react-router-dom'

const ContactError = () => {
  return (
    <main>
      <section className="hero" style={{minHeight: '80vh', display: 'flex', alignItems: 'center'}}>
        <div className="hero-bg-placeholder" style={{
          backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
        }}></div>
        <div className="container" style={{textAlign: 'center', zIndex: 2}}>
          <div className="fade-in">
            <div style={{
              background: '#EF4444', 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 2rem'
            }}>
              <i className="bi bi-exclamation-triangle" style={{fontSize: '2.5rem', color: 'white'}}></i>
            </div>
            <h1 className="hero-title" style={{fontSize: '3rem', marginBottom: '1.5rem'}}>Oops! Something Went Wrong</h1>
            <p className="hero-subtitle" style={{
              fontSize: '1.25rem', 
              marginBottom: '2rem', 
              maxWidth: '600px', 
              marginLeft: 'auto', 
              marginRight: 'auto'
            }}>
              We're sorry, but there was an error sending your message. Please try again or contact us directly using the information below.
            </p>
            
            <div style={{
              background: 'rgba(55, 65, 81, 0.8)', 
              borderRadius: '12px', 
              padding: '2rem', 
              margin: '3rem auto', 
              maxWidth: '500px', 
              border: '1px solid var(--border-gray)'
            }}>
              <h3 style={{color: 'var(--accent-orange)', marginBottom: '1.5rem', fontSize: '1.5rem'}}>Contact Us Directly</h3>
              <div style={{textAlign: 'left'}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                  <i className="bi bi-envelope" style={{color: 'var(--accent-orange)', fontSize: '1.25rem', marginRight: '1rem', width: '20px'}}></i>
                  <a href="mailto:info@prosolintegrated.com" style={{color: 'var(--text-light)', textDecoration: 'none'}}>info@prosolintegrated.com</a>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                  <i className="bi bi-telephone" style={{color: 'var(--accent-orange)', fontSize: '1.25rem', marginRight: '1rem', width: '20px'}}></i>
                  <a href="tel:+2347086666611" style={{color: 'var(--text-light)', textDecoration: 'none'}}>+234 708 666 6611</a>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start'}}>
                  <i className="bi bi-geo-alt" style={{color: 'var(--accent-orange)', fontSize: '1.25rem', marginRight: '1rem', width: '20px', marginTop: '2px'}}></i>
                  <p style={{color: 'var(--text-gray)', margin: 0}}>5B, Yemi Ogunniyi Street<br />Anthony Village, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link to="/contact" className="btn btn-primary">Try Again</Link>
              <Link to="/" className="btn btn-secondary">Return to Homepage</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactError
