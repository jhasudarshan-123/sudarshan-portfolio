import { motion } from 'framer-motion'
import { FaServer, FaDatabase, FaCloud, FaCode, FaShoppingCart, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      title: 'MYTPlus',
      description: 'A comprehensive mental health management platform providing telemedicine services, patient management, and therapeutic resources for healthcare providers.',
      features: [
        'Telemedicine counseling sessions',
        'Patient management system',
        'Therapist scheduling and appointments',
        'Secure video conferencing',
        'Progress tracking and analytics',
        'HIPAA-compliant data security'
      ],
      technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
      category: 'healthcare',
      icon: <FaDatabase className="text-green-400" />
    },
    {
      title: 'GlocalMind',
      description: 'A healthcare management platform designed to streamline patient care, appointment scheduling, and medical record management for healthcare providers.',
      features: [
        'Patient management and electronic health records',
        'Appointment scheduling system',
        'Medical billing and invoicing',
        'Doctor-patient communication portal',
        'Analytics and reporting dashboard',
        'HIPAA-compliant data security'
      ],
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      category: 'healthcare',
      icon: <FaDatabase className="text-green-400" />
    },
    {
      title: 'Tagfact',
      description: 'A comprehensive media tagging and management platform that enables efficient categorization and search of digital assets. Built with microservices architecture for scalability and performance.',
      features: [
        'Advanced media tagging and metadata management',
        'Real-time search and filtering capabilities',
        'User-friendly dashboard for content management',
        'Scalable microservices architecture',
        'Cloud-based storage with AWS S3 integration',
        'Containerized deployment using Docker'
      ],
      technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'AWS S3', 'Docker'],
      category: 'enterprise',
      icon: <FaServer className="text-blue-400" />
    },
    {
      title: 'UnifyPatient',
      description: 'UnifyPatient is a platform that connects patients and therapists through a social-style interaction system. It allows patients to share their mental health experiences, interact with therapists, and access support resources in a secure and community-driven environment.',
      features: [
        'Patient and therapist interaction platform',
        'Social media style discussion and support',
        'Mental health community engagement',
        'Secure messaging between patients and therapists',
        'Analytics and progress tracking'
      ],
      technologies: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL'],
      category: 'healthcare',
      icon: <FaCloud className="text-purple-400" />
    },
    {
      title: 'E-Commerce Full Stack Application',
      description: 'A full-stack e-commerce web application where users can browse products, add items to cart, and place orders. The application includes authentication, product management, and REST API integration.',
      features: [
        'User registration and login system',
        'Product listing and detailed product pages',
        'Shopping cart with add/remove functionality',
        'Secure checkout process',
        'Order history and tracking',
        'Admin product management dashboard'
      ],
      technologies: ['React.js', 'Java Spring Boot', 'MySQL', 'REST APIs', 'JWT'],
      category: 'ecommerce',
      icon: <FaShoppingCart className="text-orange-400" />,
      githubLink: 'https://github.com/jhasudarshan-123/ecommerce-app'
    }
  ]

  const getCategoryColor = (category) => {
    switch (category) {
      case 'enterprise':
        return 'from-blue-500/20 to-blue-600/20 border-blue-500/30'
      case 'healthcare':
        return 'from-green-500/20 to-green-600/20 border-green-500/30'
      case 'education':
        return 'from-purple-500/20 to-purple-600/20 border-purple-500/30'
      case 'ecommerce':
        return 'from-orange-500/20 to-orange-600/20 border-orange-500/30'
      default:
        return 'from-gray-500/20 to-gray-600/20 border-gray-500/30'
    }
  }

  const getCategoryBadgeColor = (category) => {
    switch (category) {
      case 'enterprise':
        return 'bg-gradient-to-r from-blue-500 to-blue-600'
      case 'healthcare':
        return 'bg-gradient-to-r from-green-500 to-green-600'
      case 'education':
        return 'bg-gradient-to-r from-purple-500 to-purple-600'
      case 'ecommerce':
        return 'bg-gradient-to-r from-orange-500 to-orange-600'
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600'
    }
  }

  return (
    <section id="projects" className={`py-16 sm:py-20 lg:py-24 transition-colors duration-300 ${
      isDarkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-4 sm:p-6 lg:p-8 glass-card-hover">
                <div className="flex flex-col gap-6">
                  {/* Project Header */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${getCategoryColor(project.category)} rounded-lg sm:rounded-xl flex items-center justify-center border flex-shrink-0`}>
                      {project.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{project.title}</h3>
                      <span className={`inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white ${getCategoryBadgeColor(project.category)}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="space-y-6">
                    <p className={`text-sm sm:text-base lg:text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className={`text-lg sm:text-xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * idx }}
                            viewport={{ once: true }}
                            className={`flex items-center gap-2 text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-1"></div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Technology Stack:</h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {project.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.05 * idx }}
                            viewport={{ once: true }}
                            className="tech-badge text-xs sm:text-sm"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    {(project.githubLink || project.liveDemoLink) && (
                      <div className="pt-4 border-t border-gray-800">
                        <h4 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Project Links:</h4>
                        <div className="flex flex-wrap gap-3 sm:gap-4">
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-105 border border-gray-700"
                            >
                              <FaGithub className="text-lg" />
                              <span className="text-sm sm:text-base font-medium">GitHub</span>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass-card p-12 text-center">
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCode className="text-blue-400 text-3xl" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Seeking Full-Time Software Engineer Opportunities
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                If you're looking for a dedicated Java Full Stack Developer to join your team, 
                I'd love to discuss how my skills and experience can contribute to your projects.
              </p>
              <motion.button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
