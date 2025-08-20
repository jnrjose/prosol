# PROSOL Integrated Services Website

A modern, responsive multipage website for PROSOL Integrated Services Limited - a leading provider of engineering, telecommunications, and ICT solutions in Lagos, Nigeria.

## 🚀 Features

- **Multipage Architecture**: Home, About, Services, Portfolio, and Contact pages
- **Responsive Design**: Mobile-first approach with smooth animations
- **Netlify Forms Integration**: Contact form with spam protection
- **SEO Optimized**: Meta tags, structured data, sitemap, and robots.txt
- **Modern Animations**: Scroll-triggered animations and micro-interactions
- **Clean URLs**: Extensionless URLs with proper redirects
- **Professional Stock Images**: High-quality images from Unsplash
- **Performance Optimized**: Compressed assets and efficient loading

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Bootstrap Icons
- **Fonts**: Google Fonts (Inter)
- **Hosting**: Netlify
- **Forms**: Netlify Forms with honeypot spam protection

## 📁 Project Structure

```
hire/
├── css/
│   └── styles.css          # Main stylesheet with animations
├── js/
│   └── script.js           # Interactive functionality
├── assets/
│   ├── images/             # Image assets (placeholder)
│   └── icons/              # Icon assets (placeholder)
├── index.html              # Homepage
├── about.html              # About page
├── services.html           # Services page
├── portfolio.html          # Portfolio page
├── contact.html            # Contact page
├── contact-success.html    # Form success page
├── contact-error.html      # Form error page
├── netlify.toml           # Netlify configuration
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine directives
├── package.json           # Project metadata
└── .htaccess              # Apache server configuration
```

## 🚀 Deployment to Netlify

### Method 1: Drag & Drop (Easiest)

1. **Prepare the site**:
   ```bash
   # Remove any unnecessary files
   rm -rf node_modules .git
   ```

2. **Create a ZIP file** of the entire project folder

3. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your ZIP file to the deploy area
   - Your site will be live instantly with a random URL

### Method 2: Git Integration (Recommended)

1. **Initialize Git repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: PROSOL website"
   ```

2. **Push to GitHub/GitLab**:
   ```bash
   # Add your repository URL
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

3. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Build settings are automatically configured via `netlify.toml`

### Method 3: Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login and deploy**:
   ```bash
   netlify login
   netlify deploy --prod --dir .
   ```

## 📧 Contact Form Setup

The contact form is pre-configured for Netlify Forms:

- **Form name**: `contact-form`
- **Spam protection**: Honeypot field included
- **Success redirect**: `/contact-success`
- **Error handling**: Custom error page
- **Notification email**: Set in `netlify.toml`

### Form Fields:
- First Name (required)
- Last Name (required)
- Email (required)
- Phone Number
- Company/Organization
- Service Interest (required)
- Project Details (required)

## 🎨 Customization

### Colors (CSS Variables)
```css
:root {
    --primary-dark: #111827;
    --secondary-dark: #374151;
    --accent-orange: #F59E0B;
    --text-light: #F9FAFB;
    --text-gray: #D1D5DB;
    --border-gray: #4B5563;
}
```

### Content Updates
- **Company Info**: Update in all HTML files
- **Contact Details**: Update in `contact.html` and footer sections
- **Services**: Modify service cards in `services.html`
- **Portfolio**: Update portfolio items in `portfolio.html`

## 🔧 Local Development

1. **Start local server**:
   ```bash
   npm run dev
   # or
   npx http-server . -p 3000 -o
   ```

2. **View in browser**: http://localhost:3000

## 🌐 SEO Features

- **Meta tags**: Title, description, keywords for each page
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: JSON-LD for organization info
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling directives
- **Canonical URLs**: Prevent duplicate content issues

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security Features

- **Content Security Headers**: XSS protection, frame options
- **Spam Protection**: Honeypot fields in forms
- **Input Validation**: Client-side form validation
- **HTTPS**: Enforced via Netlify

## 📈 Performance

- **Optimized Images**: WebP format with fallbacks
- **Minified Assets**: Compressed CSS and JS
- **Lazy Loading**: Images load as needed
- **Caching**: Static asset caching via headers
- **CDN**: Global content delivery via Netlify

## 🆘 Troubleshooting

### Form Not Working
- Check Netlify Forms are enabled in site settings
- Verify form has `data-netlify="true"` attribute
- Ensure honeypot field is present

### Clean URLs Not Working
- Check `netlify.toml` redirects configuration
- Verify `.htaccess` for Apache servers
- Test redirect rules in Netlify dashboard

### Animations Not Smooth
- Check browser hardware acceleration
- Verify CSS animations use `transform` and `opacity`
- Test on different devices and browsers

## 📞 Support

For technical support or customization requests:
- **Email**: info@prosolintegrated.com
- **Phone**: +234 708 666 6611
- **Address**: 5B, Yemi Ogunniyi Street, Anthony Village, Lagos, Nigeria

---

**© 2024 PROSOL Integrated Services Limited. All Rights Reserved.**
