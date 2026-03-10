import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaRocket } from 'react-icons/fa'
import profileImage from '../assets/profile.jpg'
import logo from '../assets/logo.svg'

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
        
        {/* Decorative logo in background */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 right-1/4 opacity-5"
        >
          <img src={logo} alt="Sudarshan Jha Logo" className="w-64 h-64" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                <img
                  src={profileImage}
                  alt="Sudarshan Kumar Jha"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%23374151"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial" font-size="14"%3ESKJ%3C/text%3E%3C/svg%3E'
                  }}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900"></div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8"
          >
            <FaCode className="text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Open to Full-Time Opportunities</span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-100 leading-tight"
            >
              Hi, I'm <br />
              <span className="gradient-text block">Sudarshan Kumar Jha</span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-medium"
            >
              Java Full Stack Developer
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            >
              With 3+ years of experience building robust web applications using Java, Spring Boot, 
              Microservices, and modern frontend technologies.
            </motion.p>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center justify-center gap-2 text-gray-400"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg">Bengaluru, India</span>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary glow-effect-hover group"
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <FaRocket className="group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              View Projects
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex justify-center space-x-8 pt-12"
          >
            <a
              href="https://github.com/jhasudarshan-123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/sudarshan-jha-b5a470228/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="mailto:jhasudarshan606@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={32} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <span className="text-sm">Scroll</span>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
