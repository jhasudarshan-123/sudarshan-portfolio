import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaServer, FaReact, FaDatabase, FaCloud } from 'react-icons/fa'

const Skills = ({ isDarkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    { name: 'Java', level: 90, category: 'backend', icon: <FaServer className="text-blue-400" /> },
    { name: 'Spring Boot', level: 85, category: 'backend', icon: <FaServer className="text-blue-400" /> },
    { name: 'REST APIs', level: 88, category: 'backend', icon: <FaServer className="text-blue-400" /> },
    { name: 'Microservices', level: 82, category: 'backend', icon: <FaServer className="text-blue-400" /> },
    { name: 'React.js', level: 80, category: 'frontend', icon: <FaReact className="text-cyan-400" /> },
    { name: 'JavaScript', level: 85, category: 'frontend', icon: <FaReact className="text-cyan-400" /> },
    { name: 'MySQL', level: 82, category: 'database', icon: <FaDatabase className="text-green-400" /> },
    { name: 'PostgreSQL', level: 78, category: 'database', icon: <FaDatabase className="text-green-400" /> },
    { name: 'MongoDB', level: 70, category: 'database', icon: <FaDatabase className="text-green-400" /> },
    { name: 'Docker', level: 75, category: 'devops', icon: <FaCloud className="text-orange-400" /> },
    { name: 'AWS', level: 70, category: 'devops', icon: <FaCloud className="text-orange-400" /> },
    { name: 'Git', level: 88, category: 'devops', icon: <FaCloud className="text-orange-400" /> }
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
      count: 4,
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      title: 'Frontend',
      icon: <FaReact className="text-cyan-400" />,
      count: 2,
      color: 'from-cyan-500/20 to-cyan-600/20'
    },
    {
      title: 'Database',
      icon: <FaDatabase className="text-green-400" />,
      count: 3,
      color: 'from-green-500/20 to-green-600/20'
    },
    {
      title: 'DevOps',
      icon: <FaCloud className="text-orange-400" />,
      count: 3,
      color: 'from-orange-500/20 to-orange-600/20'
    }
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">
            My expertise in modern web development technologies and tools
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
              className="glass-card p-4 sm:p-6 text-center"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${getCategoryColor(category.color)} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                {category.icon}
              </div>
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${!isDarkMode ? 'text-gray-900' : 'text-gray-100'}`}>{category.title}</h3>
              <p className={`text-sm ${!isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>{category.count} technologies</p>
            </motion.div>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="glass-card p-4 sm:p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 ${getCategoryBgColor(skill.category)} rounded-lg flex items-center justify-center border`}>
                    {skill.icon}
                  </div>
                  <span className={`font-semibold text-sm sm:text-base ${!isDarkMode && 'text-gray-900'}`}>{skill.name}</span>
                </div>
                <span className={`text-sm sm:text-base ${!isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress bg-gradient-to-r from-blue-400 to-blue-600"
                  initial={{ width: 0 }}
                  animate={{ width: isInView ? `${skill.level}%` : 0 }}
                  transition={{ duration: 1.5, delay: 0.5 + 0.1 * index, ease: 'easeOut' }}
                ></motion.div>
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
          className="mt-12"
        >
          <div className="glass-card p-6 sm:p-8 text-center">
            <h3 className={`text-2xl font-bold gradient-text mb-6 ${!isDarkMode && 'text-blue-600'}`}>
              Full-Stack Expertise
            </h3>
            <p className={`max-w-3xl mx-auto mb-8 ${!isDarkMode ? 'text-gray-700' : 'text-gray-300'}`}>
              Specialized in building enterprise-level applications with modern Java ecosystems 
              and cutting-edge frontend technologies. Strong foundation in database design 
              and DevOps practices for complete application lifecycle management.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="tech-badge">Java</span>
              <span className="tech-badge">Spring Boot</span>
              <span className="tech-badge">React.js</span>
              <span className="tech-badge">PostgreSQL</span>
              <span className="tech-badge">Docker</span>
              <span className="tech-badge">AWS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
