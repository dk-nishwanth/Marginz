import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'hello@marginz.com',
    link: 'mailto:hello@marginz.com'
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: '123 Tech Street, San Francisco, CA 94105',
    link: '#'
  }
];

const offices = [
  {
    city: 'San Francisco',
    address: '123 Tech Street, CA 94105',
    hours: 'Mon-Fri: 9AM - 6PM PST'
  },
  {
    city: 'New York',
    address: '456 Innovation Ave, NY 10001',
    hours: 'Mon-Fri: 9AM - 6PM EST'
  },
  {
    city: 'London',
    address: '789 Digital Lane, EC1A 1BB',
    hours: 'Mon-Fri: 9AM - 6PM GMT'
  }
];

export function Contact() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const officesRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const officesInView = useInView(officesRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 md:pt-40 lg:pt-48 pb-24 md:pb-32 lg:pb-40 px-6 md:px-8 lg:px-12 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 overflow-hidden" style={{ marginTop: '80px' }}>
        {/* Background Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/45 to-blue-600/45 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-400/45 to-sky-500/45 rounded-full blur-3xl" />
        </motion.div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-black font-black leading-tight tracking-tight" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
              Get In Touch
            </h1>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium" style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', lineHeight: '1.8' }}>
              Have a project in mind? Let's discuss how we can help bring your vision to life. 
              Our team is ready to answer your questions and explore opportunities together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 md:py-24 lg:py-28 px-6 md:px-8 lg:px-12 bg-white relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg"
                  >
                    <Icon size={24} />
                  </motion.div>
                  <h3 className="text-black font-bold text-xl mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600">
                    {info.details}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
                <h2 className="text-black font-black text-4xl mb-8 leading-tight">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Right Column - Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-black font-black text-3xl mb-6 leading-tight">
                  Why Choose MARGINZ?
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We're committed to delivering exceptional results through innovation, expertise, and dedication. 
                  Our team brings years of experience and a passion for solving complex challenges.
                </p>
                <ul className="space-y-4">
                  {[
                    'Rapid response within 24 hours',
                    'Free initial consultation',
                    'Transparent pricing and timelines',
                    'Dedicated project manager',
                    'Ongoing support and maintenance'
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={formInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                <Clock className="mb-4" size={32} />
                <h4 className="font-bold text-xl mb-2">Business Hours</h4>
                <p className="text-white/90">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section ref={officesRef} className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={officesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 md:mb-24 lg:mb-28 space-y-6"
          >
            <h2 className="text-black font-black leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Our Global Offices
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto font-medium" style={{ fontSize: 'clamp(17px, 1.4vw, 20px)', lineHeight: '1.8' }}>
              Visit us at any of our locations worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 50 }}
                animate={officesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 h-full"
                >
                  <Globe className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-black font-bold text-2xl mb-4">
                    {office.city}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {office.address}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock size={16} />
                    <span className="text-sm">{office.hours}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
