import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Users, Award, TrendingUp, Lightbulb, Shield } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Team Members' }
];

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We exist to transform businesses through innovative technology solutions that drive measurable results.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Constantly pushing boundaries with cutting-edge approaches that keep our clients ahead of the curve.'
  },
  {
    icon: Shield,
    title: 'Trust & Integrity',
    description: 'Building lasting partnerships through transparency, reliability, and unwavering commitment to excellence.'
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our success. We tailor every solution to your unique needs and business goals.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Uncompromising quality standards in every project, from conception to delivery and beyond.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Mindset',
    description: 'Continuous learning and adaptation to deliver solutions that scale with your business.'
  }
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
  },
  {
    name: 'David Park',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop'
  }
];

export function AboutUs() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

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
              About MARGINZ
            </h1>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium" style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', lineHeight: '1.8' }}>
              We are a team of passionate innovators, designers, and engineers dedicated to transforming businesses through technology. 
              Since our founding, we've helped hundreds of companies achieve their digital transformation goals with precision and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={statsInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-black font-black mb-2"
                  style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 font-medium text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 md:mb-24 lg:mb-28 space-y-6"
          >
            <h2 className="text-black font-black leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto font-medium" style={{ fontSize: 'clamp(17px, 1.4vw, 20px)', lineHeight: '1.8' }}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow h-full border border-white/50"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-br from-[#141c2b] to-[#2a3f5f] text-white rounded-xl flex items-center justify-center mb-6 shadow-lg"
                    >
                      <Icon size={28} />
                    </motion.div>
                    <h4 className="text-black mb-3 font-bold text-xl">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 md:mb-24 lg:mb-28 space-y-6"
          >
            <h2 className="text-black font-black leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto font-medium" style={{ fontSize: 'clamp(17px, 1.4vw, 20px)', lineHeight: '1.8' }}>
              The visionaries driving MARGINZ forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h4 className="text-black font-bold text-xl mb-1">
                    {member.name}
                  </h4>
                  <p className="text-gray-600">
                    {member.role}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
