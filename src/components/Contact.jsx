import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaUser } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! I will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-blue-400" />,
      label: 'Email',
      value: 'jhasudarshan606@gmail.com',
      href: 'mailto:jhasudarshan606@gmail.com'
    },
    {
      icon: <FaGithub className="text-blue-400" />,
      label: 'GitHub',
      value: 'github.com/jhasudarshan-123',
      href: 'https://github.com/jhasudarshan-123'
    },
    {
      icon: <FaLinkedin className="text-blue-400" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sudarshan-jha-b5a470228',
      href: 'https://www.linkedin.com/in/sudarshan-jha-b5a470228/'
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-400" />,
      label: 'Location',
      value: 'Bengaluru, India',
      href: null
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">
            I'm always interested in hearing about new projects and opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 glass-card-hover">
              <h3 className="text-3xl font-bold text-gray-100 mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you have a question, want to discuss a project, or just want to say hello, 
                feel free to reach out. I'll do my best to get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="dark-card p-6 dark-card-hover group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-100 mb-1">{info.label}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-400">{info.value}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center"
            >
              <h4 className="text-2xl font-bold gradient-text mb-4">Actively Seeking Opportunities</h4>
              <p className="text-gray-300 mb-6">
                I'm currently looking for full-time Java Full Stack Developer opportunities where I can contribute my skills in Java, Spring Boot, Microservices, and React.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="tech-badge">Full-time</span>
                <span className="tech-badge">Java Developer</span>
                <span className="tech-badge">Software Engineer</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 glass-card-hover">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center">
                  <FaPaperPlane className="text-primary-400 text-xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-100">Send Me a Message</h3>
              </div>
              
              {submitMessage ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 text-green-300 p-6 rounded-xl mb-6"
                >
                  {submitMessage}
                </motion.div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaUser className="text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-dark-200/50 border border-dark-400 rounded-xl text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-500" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-dark-200/50 border border-dark-400 rounded-xl text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-dark-200/50 border border-dark-400 rounded-xl text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    ></textarea>
                  </motion.div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-200" />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
