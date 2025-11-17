import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Palette, Smartphone, Cloud, Database, Shield, Zap, Globe, Cpu, BarChart } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored solutions built from the ground up to meet your unique business requirements.',
    features: ['Web Applications', 'Enterprise Software', 'API Development', 'Legacy Modernization'],
    gradient: 'from-blue-600 via-cyan-600 to-teal-600'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that delight users and drive engagement.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    gradient: 'from-purple-600 via-pink-600 to-red-600'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
    gradient: 'from-green-600 via-emerald-600 to-teal-600'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    features: ['AWS', 'Azure', 'Google Cloud', 'Cloud Migration'],
    gradient: 'from-indigo-600 via-blue-600 to-cyan-600'
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Transform raw data into actionable insights with robust data pipelines.',
    features: ['Data Warehousing', 'ETL Pipelines', 'Big Data', 'Analytics'],
    gradient: 'from-orange-600 via-red-600 to-pink-600'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Monitoring'],
    gradient: 'from-red-600 via-rose-600 to-pink-600'
  }
];

const process = [
  {
    icon: Globe,
    step: '01',
    title: 'Discovery',
    description: 'We dive deep into your business goals, challenges, and requirements to create a comprehensive project roadmap.'
  },
  {
    icon: Cpu,
    step: '02',
    title: 'Design & Planning',
    description: 'Our team crafts detailed designs and technical specifications, ensuring alignment with your vision.'
  },
  {
    icon: Zap,
    step: '03',
    title: 'Development',
    description: 'Agile development sprints bring your solution to life with continuous feedback and iteration.'
  },
  {
    icon: BarChart,
    step: '04',
    title: 'Launch & Support',
    description: 'Seamless deployment and ongoing support to ensure your solution continues to deliver value.'
  }
];

export function Services() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });

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
              Our Services
            </h1>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium" style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', lineHeight: '1.8' }}>
              Comprehensive technology solutions designed to accelerate your digital transformation journey. 
              From concept to deployment, we deliver excellence at every stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ y: -15, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-gray-800 rounded-2xl p-8 h-full border border-gray-700 overflow-hidden relative group"
                  >
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <Icon className="text-white" size={32} />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-white mb-4 text-2xl font-bold">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white leading-relaxed mb-6 font-medium">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-white">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`} />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Decorative Line */}
                      <motion.div
                        className={`mt-6 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 md:mb-24 lg:mb-28 space-y-6"
          >
            <h2 className="text-black font-black leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Our Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto font-medium" style={{ fontSize: 'clamp(17px, 1.4vw, 20px)', lineHeight: '1.8' }}>
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Connecting Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-30 -z-10" />
                  )}

                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-white/50"
                  >
                    {/* Step Number */}
                    <div className="text-blue-600 text-5xl font-black mb-4 opacity-20">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg"
                    >
                      <Icon size={24} />
                    </motion.div>

                    {/* Title */}
                    <h4 className="text-black mb-3 font-bold text-xl">
                      {step.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12 bg-gradient-to-br from-[#141c2b] to-[#2a3f5f]">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-white font-black leading-tight tracking-tight" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto font-medium" style={{ fontSize: 'clamp(17px, 1.4vw, 20px)', lineHeight: '1.8' }}>
              Let's discuss how our services can help you achieve your goals
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-black font-black rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl border-2 border-white"
              style={{ fontSize: 'clamp(18px, 1.5vw, 22px)' }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
