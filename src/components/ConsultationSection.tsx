import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Send, MapPin, Phone, CheckCircle, Mail, Calendar, Sparkles } from 'lucide-react';
import imgRectangle4133 from "../assets/91d19d4f8f2df47f5ecdb7608b004ab0f9b614be.png";

export function ConsultationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    subject: '',
    message: ''
  });

  const benefits = [
    'Scalable & Secure Solutions',
    'Modern Tech Stack Expertise',
    'Enterprise-Level Applications',
    'Expert Team of 22+ Professionals',
    'End-to-End Development',
    'Strategic Digital Partnership'
  ];

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59,130,246,0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 backdrop-blur-sm mb-4"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-700 font-semibold">Get Expert Consultation</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Connect with our experts to receive personalized guidance that aligns with your goals and accelerates your digital transformation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm mb-2 text-gray-700">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#141c2b] focus:ring-2 focus:ring-[#141c2b]/20 outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm mb-2 text-gray-700">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#141c2b] focus:ring-2 focus:ring-[#141c2b]/20 outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm mb-2 text-gray-700">Service</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#141c2b] focus:ring-2 focus:ring-[#141c2b]/20 outline-none transition-all"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select</option>
                    <option value="erp">ERP Solutions</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Applications</option>
                    <option value="consulting">IT Consulting</option>
                  </select>
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm mb-2 text-gray-700">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#141c2b] focus:ring-2 focus:ring-[#141c2b]/20 outline-none transition-all"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm mb-2 text-gray-700">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#141c2b] focus:ring-2 focus:ring-[#141c2b]/20 outline-none transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#141c2b] text-white px-8 py-4 rounded-lg hover:bg-[#2a3f5f] transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="rounded-3xl overflow-hidden shadow-2xl mb-8 h-64 relative"
            >
              {/* Decorative Frame */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10"
              />
              
              <motion.div
                initial={{ scale: 1.2 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img
                  src={imgRectangle4133}
                  alt="Consultation"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#141c2b] shrink-0" size={24} />
                  <div>
                    <h4 className="text-black mb-2 font-bold">Our Location</h4>
                    <p className="text-gray-600">
                      5th Floor, The Executive Center, Tamarai Tech Park, Guindy
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <Phone className="text-[#141c2b] shrink-0" size={24} />
                  <div>
                    <h4 className="text-black mb-2 font-bold">Contact Information</h4>
                    <p className="text-gray-600">Call us: +91 98400 00000</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-black mb-4 font-bold">Your benefits:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle className="text-green-600 shrink-0 mt-1" size={16} />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
