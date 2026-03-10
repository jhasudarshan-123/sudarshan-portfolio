import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaDownload, FaServer, FaDatabase } from 'react-icons/fa'
import profileImage from '../assets/sudarshanpro.jpeg'
import logo from '../assets/logo.svg'

const Home = ({ isDarkMode }) => {
  return (
    <section id="home" className={`min-h-screen flex items-center relative overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50/20 to-white'
    }`}>
      {/* Enhanced Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-0 left-0 w-full h-full ${
          isDarkMode ? 'bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-indigo-900/20' : 'bg-gradient-to-r from-blue-100/30 via-purple-50/20 to-indigo-100/30'
        }`}></div>
        <div className={`absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse ${
          isDarkMode ? 'bg-blue-500/20' : 'bg-blue-400/15'
        }`}></div>
        <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          isDarkMode ? 'bg-purple-500/15' : 'bg-purple-400/10'
        }`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse ${
          isDarkMode ? 'bg-indigo-500/10' : 'bg-indigo-400/8'
        }`} style={{ animationDelay: '4s' }}></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                isDarkMode ? 'bg-blue-400/30' : 'bg-blue-500/20'
              }`}
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight 
              }}
              animate={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight 
              }}
              transition={{ 
                duration: 20 + Math.random() * 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content - Split Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)]">
          
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left space-y-6 sm:space-y-8"
          >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full"
            >
              <FaCode className={`text-sm sm:text-base ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                Available for Full-Time Opportunities
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
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
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className={`text-base sm:text-lg md:text-xl leading-relaxed ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              With 3+ years of experience building robust web applications using Java, Spring Boot, 
              Microservices, and modern frontend technologies.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className={`flex items-center gap-2 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base">Bengaluru, India</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
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
              <a
                href="/Sudarshanjharesumeupdated.docx"
                download="SudarshanJha-Resume.docx"
                className={`inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base w-full sm:w-auto ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 hover:shadow-lg hover:shadow-green-500/25'
                    : 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 hover:shadow-lg hover:shadow-green-600/25'
                }`}
              >
                <FaDownload className="text-sm sm:text-base" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center lg:justify-end items-center"
          >
            <div className="relative">
              {/* Profile Image Container */}
              <div className={`relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden border-4 shadow-2xl ${
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
              
              {/* Status Badge */}
              <div className="absolute -bottom-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">✓</span>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -top-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-blue-500/20' : 'bg-blue-400/20'
                }`}
              >
                <FaServer className="text-lg sm:text-2xl text-blue-500" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className={`absolute -bottom-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-green-500/20' : 'bg-green-400/20'
                }`}
              >
                <FaDatabase className="text-lg sm:text-2xl text-green-500" />
              </motion.div>
              
              <motion.div
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className={`absolute -top-6 -right-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-purple-500/20' : 'bg-purple-400/20'
                }`}
              >
                <FaRocket className="text-lg sm:text-2xl text-purple-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home
