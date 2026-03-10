import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaRocket } from 'react-icons/fa'
import profileImage from '../assets/profile.jpg'
import logo from '../assets/logo.svg'

const Home = ({ isDarkMode }) => {
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 lg:pt-16 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50/20 to-white'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full blur-3xl animate-pulse ${
          isDarkMode ? 'bg-blue-500/20' : 'bg-blue-300/20'
        }`}></div>
        <div className={`absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full blur-3xl animate-pulse ${
          isDarkMode ? 'bg-blue-500/10' : 'bg-blue-200/15'
        }`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-radial ${
          isDarkMode ? 'from-blue-500/5' : 'from-blue-300/5'
        } to-transparent`}></div>
        
        {/* Decorative logo in background */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 right-1/4 opacity-5 hidden sm:block"
        >
          <img src={logo} alt="Sudarshan Jha Logo" className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6 sm:space-y-8 lg:space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <div className="relative inline-block">
              <div className={`w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 shadow-2xl ${
                isDarkMode 
                  ? 'border-blue-500/30 shadow-blue-500/20' 
                  : 'border-blue-400/50 shadow-blue-400/30'
              }`}>
                <img
                  src={profileImage}
                  alt="Sudarshan Kumar Jha"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%23374151"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial" font-size="14"%3ESKJ%3C/text%3E%3C/svg%3E'
                  }}
                />
              </div>
              <div className={`absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 ${
                isDarkMode ? 'border-gray-900' : 'border-white'
              }`}></div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass-card rounded-full mb-6 sm:mb-8"
          >
            <FaCode className={`text-sm sm:text-base ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              Open to Full-Time Opportunities
            </span>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}
            >
              Hi, I'm <br />
              <span className="gradient-text block">Sudarshan Kumar Jha</span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Java Full Stack Developer
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className={`text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              With 3+ years of experience building robust web applications using Java, Spring Boot, 
              Microservices, and modern frontend technologies.
            </motion.p>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className={`flex items-center justify-center gap-2 px-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base lg:text-lg">Bengaluru, India</span>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          >
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary glow-effect-hover group w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Get In Touch
                <FaRocket className="group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary w-full sm:w-auto"
            >
              View Projects
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex justify-center space-x-6 sm:space-x-8 pt-8 sm:pt-12"
          >
            <a
              href="https://github.com/jhasudarshan-123"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:scale-110 ${
                isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label="GitHub"
            >
              <FaGithub size={24} sm:size={28} md:size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/sudarshan-jha-b5a470228/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:scale-110 ${
                isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} sm:size={28} md:size={32} />
            </a>
            <a
              href="mailto:jhasudarshan606@gmail.com"
              className={`transition-all duration-300 hover:scale-110 ${
                isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}
              aria-label="Email"
            >
              <FaEnvelope size={24} sm:size={28} md:size={32} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className={`flex flex-col items-center gap-2 ${
            isDarkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            <span className="text-xs sm:text-sm">Scroll</span>
            <div className={`w-5 h-8 sm:w-6 sm:h-10 border-2 rounded-full flex justify-center ${
              isDarkMode ? 'border-gray-600' : 'border-gray-400'
            }`}>
              <div className={`w-1 h-2 sm:h-3 rounded-full mt-2 animate-bounce ${
                isDarkMode ? 'bg-gray-600' : 'bg-gray-400'
              }`}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
