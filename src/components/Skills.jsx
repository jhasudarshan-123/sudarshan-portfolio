import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaServer, FaReact, FaDatabase, FaCloud } from 'react-icons/fa'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    { name: 'Java', level: 90, category: 'backend', icon: <FaServer className="text-blue-400" /> },
    { name: 'Spring Boot', level: 85, category: 'backend', icon: <FaServer className="text-blue-400" /> },
    { name: 'REST APIs', level: 88, category: 'backend', icon: <FaServer className="text-blue-400" /> },
    { name: 'React.js', level: 80, category: 'frontend', icon: <FaReact className="text-cyan-400" /> },
    { name: 'MySQL', level: 82, category: 'database', icon: <FaDatabase className="text-green-400" /> },
    { name: 'PostgreSQL', level: 78, category: 'database', icon: <FaDatabase className="text-green-400" /> },
    { name: 'Docker', level: 75, category: 'devops', icon: <FaCloud className="text-orange-400" /> },
    { name: 'AWS', level: 70, category: 'devops', icon: <FaCloud className="text-orange-400" /> }
  ]

  const getCategoryColor = (category) => {
    switch (category) {
      case 'backend':
        return 'from-blue-500 to-blue-600'
      case 'frontend':
        return 'from-cyan-500 to-cyan-600'
      case 'database':
        return 'from-green-500 to-green-600'
      case 'devops':
        return 'from-orange-500 to-orange-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const getCategoryBgColor = (category) => {
    switch (category) {
      case 'backend':
        return 'bg-blue-500/10 border-blue-500/30'
      case 'frontend':
        return 'bg-cyan-500/10 border-cyan-500/30'
      case 'database':
        return 'bg-green-500/10 border-green-500/30'
      case 'devops':
        return 'bg-orange-500/10 border-orange-500/30'
      default:
        return 'bg-gray-500/10 border-gray-500/30'
    }
  }

  const skillCategories = [
    {
      title: 'Backend',
      icon: <FaServer className="text-blue-400" />,
      description: 'Java, Spring Boot, APIs',
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      title: 'Frontend',
      icon: <FaReact className="text-cyan-400" />,
      description: 'React.js, Modern UI',
      color: 'from-cyan-500/20 to-cyan-600/20'
    },
    {
      title: 'Database',
      icon: <FaDatabase className="text-green-400" />,
      description: 'MySQL, PostgreSQL',
      color: 'from-green-500/20 to-green-600/20'
    },
    {
      title: 'DevOps',
      icon: <FaCloud className="text-orange-400" />,
      description: 'Docker, AWS',
      color: 'from-orange-500/20 to-orange-600/20'
    }
  ]

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-dark-100 to-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">
            Proficient in modern web development technologies with expertise in full-stack Java applications
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`glass-card p-6 glass-card-hover h-full`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {category.icon}
                </div>
                <h4 className="font-semibold text-gray-100 mb-2">{category.title}</h4>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Skills */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="dark-card p-6 dark-card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getCategoryBgColor(skill.category)} border`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-100">{skill.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(skill.category)}`}>
                    {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-sm font-medium text-primary-400">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className={`skill-progress bg-gradient-to-r ${getCategoryColor(skill.category)}`}
                    initial={{ width: 0 }}
                    animate={{ width: isInView ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1.5, delay: 0.5 + 0.1 * index, ease: 'easeOut' }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass-card p-8 text-center">
            <h3 className="text-2xl font-bold gradient-text mb-6">
              Full-Stack Expertise
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Specialized in building enterprise-level applications with modern Java ecosystems 
              and contemporary frontend technologies. Committed to delivering robust, scalable, 
              and maintainable software solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Java', 'Spring Boot', 'React.js', 'MySQL', 'PostgreSQL', 'Docker', 'AWS', 'REST APIs'].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + 0.05 * index }}
                  viewport={{ once: true }}
                  className="tech-badge"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
