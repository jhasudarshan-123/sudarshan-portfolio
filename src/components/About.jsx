import { motion } from 'framer-motion'
import { FaJava, FaReact, FaDatabase, FaAws } from 'react-icons/fa'

const About = () => {
  const expertiseAreas = [
    {
      icon: <FaJava className="text-blue-400" />,
      title: 'Backend Expertise',
      description: 'Java, Spring Boot, Microservices, REST APIs'
    },
    {
      icon: <FaReact className="text-cyan-400" />,
      title: 'Frontend Skills',
      description: 'React.js, Responsive Design, Modern UI/UX'
    },
    {
      icon: <FaDatabase className="text-green-400" />,
      title: 'Database Knowledge',
      description: 'MySQL, PostgreSQL, Database Design'
    },
    {
      icon: <FaAws className="text-orange-400" />,
      title: 'DevOps & Cloud',
      description: 'Docker, AWS, CI/CD, Deployment'
    }
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-navy-900 to-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <p className="section-subtitle">
            Passionate Java Full Stack Developer with expertise in building scalable web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 glass-card-hover">
              <h3 className="text-3xl font-bold text-gray-100 mb-6">
                Java Full Stack Developer with 3+ Years of Experience
              </h3>
              
              <div className="space-y-6 text-gray-300">
                <p className="leading-relaxed">
                  I am a passionate Java Full Stack Developer with over 3 years of professional experience 
                  in designing, developing, and deploying robust web applications. My expertise spans across 
                  the entire development stack, from backend services to modern frontend interfaces.
                </p>
                
                <p className="leading-relaxed">
                  I specialize in building scalable microservices architecture using Spring Boot, creating 
                  efficient REST APIs, and developing responsive user interfaces with React.js. My experience 
                  with various databases and cloud technologies enables me to deliver comprehensive solutions 
                  that meet complex business requirements.
                </p>
                
                <p className="leading-relaxed">
                  I am committed to writing clean, maintainable code and staying updated with the latest 
                  industry trends and best practices. My goal is to contribute to projects that make a 
                  meaningful impact while continuously expanding my technical skills.
                </p>
              </div>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="dark-card p-6 dark-card-hover group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {area.icon}
                    </div>
                    <h4 className="font-semibold text-gray-100">{area.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
              
              {/* Main circle */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl glow-effect">
                <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-navy-900 to-dark-200 rounded-full flex items-center justify-center border-2 border-primary-500/30">
                  <div className="text-center space-y-6 p-8">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-6xl md:text-7xl font-bold gradient-text"
                    >
                      3+
                    </motion.div>
                    <div className="text-xl md:text-2xl font-semibold text-gray-100">
                      Years Experience
                    </div>
                    <div className="text-gray-400 text-sm md:text-base px-4">
                      Full Stack Development
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-500/30 to-blue-500/30 rounded-full flex items-center justify-center"
              >
                <FaJava className="text-white text-xl" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center"
              >
                <FaReact className="text-white text-xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
