import { motion } from 'framer-motion'
import { FaServer, FaDatabase, FaCloud, FaCode } from 'react-icons/fa'

const Projects = () => {
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
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600'
    }
  }

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-dark-100 to-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 glass-card-hover">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Header */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${getCategoryColor(project.category)} rounded-xl flex items-center justify-center border`}>
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-gray-100 mb-3">{project.title}</h3>
                        <span className={`inline-block px-4 py-2 rounded-full text-xs font-medium text-white ${getCategoryBadgeColor(project.category)}`}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-100 mb-4">Key Features:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {project.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.05 * idx }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-100 mb-4">Technology Stack:</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.05 * idx }}
                            viewport={{ once: true }}
                            className="tech-badge"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
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
