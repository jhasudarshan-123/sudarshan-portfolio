# Sudarshan Kumar Jha - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS for Sudarshan Kumar Jha, a Java Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, professional UI with gradient accents and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Navigation**: Navbar with smooth scrolling between sections
- **Interactive Sections**:
  - Home section with hero banner
  - About section with experience overview
  - Skills section with proficiency bars
  - Work Experience timeline
  - Projects showcase
  - Contact form and information

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Build Tools**: Vite, PostCSS, Autoprefixer

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sudarshan-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
sudarshan-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Colors
The primary color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Customize primary colors here
      }
    }
  }
}
```

### Content
All personal information, projects, and experience details are stored in their respective components:

- **Personal Info**: Update in `Home.jsx` and `About.jsx`
- **Skills**: Modify the skills array in `Skills.jsx`
- **Experience**: Update in `Experience.jsx`
- **Projects**: Add/remove projects in `Projects.jsx`
- **Contact**: Update contact details in `Contact.jsx`

## 🚀 Deployment

This project can be easily deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Run `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Run `npm run build`
2. Deploy the `dist` folder to GitHub Pages

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first approach
- Hamburger menu for mobile navigation
- Flexible grid layouts
- Optimized typography for all screen sizes

## 🎯 Performance

- **Fast Loading**: Built with Vite for optimal development and build performance
- **Optimized Assets**: Images and fonts are optimized for web
- **Minimal Bundle Size**: Tree-shaking and code splitting implemented

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Sudarshan Kumar Jha
- Email: jhasudarshan606@gmail.com
- GitHub: github.com/jhasudarshan-12
- LinkedIn: linkedin.com/in/sudarshan-jb5a470228

---

⭐ If you like this portfolio, consider giving it a star!
