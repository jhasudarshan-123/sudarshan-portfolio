import { motion } from 'framer-motion'
import { FaCalendarAlt, FaBuilding, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Tagfact Services Pvt Ltd',
      location: 'Remote',
      period: 'Oct 2022 – Present',
      description: [
        'Developed and maintained scalable microservices architecture using Spring Boot and Java',
        'Designed and implemented RESTful APIs for seamless integration with frontend applications',
        'Built responsive user interfaces using React.js and modern JavaScript frameworks',
        'Optimized database performance and designed efficient schemas using MySQL and PostgreSQL',
        'Implemented containerization using Docker for consistent deployment environments',
        'Deployed and managed applications on AWS cloud infrastructure',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Participated in code reviews and mentored junior developers'
      ],
      technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'PostgreSQL', 'Docker', 'AWS', 'REST APIs']
    }
  ]

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-navy-900 to-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <p className="section-subtitle">
            My professional journey and contributions to various projects
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-primary-500/50 to-transparent hidden md:block"></div>
              
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start space-x-8 mb-16"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl glow-effect relative z-10"
                >
                  <FaBriefcase className="text-white text-2xl" />
                  {/* Animated ring */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-blue-600/30 rounded-full"
                  ></motion.div>
                </motion.div>
                
                {/* Content Card */}
                <div className="flex-1">
                  <div className="glass-card p-8 glass-card-hover">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-100 mb-3">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg flex items-center justify-center">
                            <FaBuilding className="text-primary-400" />
                          </div>
                          <span className="font-medium text-gray-100">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg flex items-center justify-center">
                            <FaMapMarkerAlt className="text-primary-400" />
                          </div>
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg flex items-center justify-center">
                            <FaCalendarAlt className="text-primary-400" />
                          </div>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-100 mb-4">Key Responsibilities:</h4>
                      <div className="space-y-3">
                        {exp.description.map((desc, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * idx }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mt-3 flex-shrink-0"></div>
                            <span className="text-gray-300 leading-relaxed">{desc}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-100 mb-4">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, idx) => (
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
              </motion.div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass-card p-12 text-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mb-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                3+ Years of Professional Experience
              </h3>
            </motion.div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Specialized in building enterprise-level applications with modern Java ecosystems 
              and contemporary frontend technologies. Committed to delivering robust, scalable, 
              and maintainable software solutions.
            </p>
            
            {/* Achievement stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '3+', label: 'Years Experience' },
                { number: '8+', label: 'Technologies' },
                { number: '1', label: 'Company' },
                { number: '3+', label: 'Projects Delivered' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold gradient-text">{stat.number}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
