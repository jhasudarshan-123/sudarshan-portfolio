import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa'
import logo from '../assets/logo-small.svg'

const Navbar = ({ activeSection, isDarkMode, setIsDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? isDarkMode 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-blue-500/10' 
          : 'bg-white/95 backdrop-blur-md shadow-lg shadow-gray-500/10'
        : isDarkMode
          ? 'bg-gray-900/80 backdrop-blur-sm'
          : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src={logo} 
              alt="Sudarshan Jha Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 hover:scale-110"
            />
            <span className={`text-lg sm:text-xl font-bold gradient-text hidden sm:block ${!isDarkMode && 'text-blue-600'}`}>Sudarshan Jha</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'nav-link-active' : ''} ${
                  !isDarkMode && 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links & Theme Toggle - Desktop */}
          <div className="hidden lg:flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-yellow-400 hover:bg-white/10' 
                  : 'text-gray-600 hover:text-yellow-500 hover:bg-gray-100'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FaSun size={18} sm:size={20} /> : <FaMoon size={18} sm:size={20} />}
            </button>
            <a
              href="https://github.com/jhasudarshan-123"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-200 ${
                isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label="GitHub"
            >
              <FaGithub size={18} sm:size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sudarshan-jha-b5a470228/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-200 ${
                isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} sm:size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden transition-colors duration-200 p-1 ${
              isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} sm:size={24} /> : <FaBars size={20} sm:size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`lg:hidden backdrop-blur-md border-t ${
            isDarkMode 
              ? 'bg-gray-900/95 border-gray-800' 
              : 'bg-white/95 border-gray-200'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-3 py-2 rounded-lg text-sm sm:text-base font-medium nav-link ${
                    activeSection === link.href.slice(1) ? 'nav-link-active' : ''
                  } ${
                    !isDarkMode && 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Mobile Social Links & Theme Toggle */}
            <div className={`px-2 py-3 border-t flex justify-between items-center ${
              isDarkMode ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className="flex space-x-4 sm:space-x-6">
                <a
                  href="https://github.com/jhasudarshan-123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-200 ${
                    isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-label="GitHub"
                >
                  <FaGithub size={20} sm:size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sudarshan-jha-b5a470228/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-200 ${
                    isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  }`}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} sm:size={24} />
                </a>
              </div>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-yellow-400 hover:bg-white/10' 
                    : 'text-gray-600 hover:text-yellow-500 hover:bg-gray-100'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <FaSun size={20} sm:size={24} /> : <FaMoon size={20} sm:size={24} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
