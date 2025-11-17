import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import imgRectangle4129 from "../assets/e70958468beb6b0c9b3e974dd139e3884de1abed.png";
import imgRectangle4130 from "../assets/23688ea5a88b67cabe7150ff351a9916e0574ff2.png";

const testimonials = [
  {
    project: 'BRiX-ERP (Enterprise Resource Planning)',
    quote: 'Their unified ERP solution delivered an 85% reduction in manual processing time. They truly eliminated our core operational friction.',
    image: imgRectangle4129
  },
  {
    project: 'Assessment Portal (Web Application)',
    quote: 'We achieved a 95% time reduction in result processing, allowing us to scale student intake by 10X. Unparalleled speed and precision.',
    image: imgRectangle4130
  }
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto mb-12 md:mb-16 lg:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-20 space-y-6"
      >
        <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">Client Testimonials</p>
        <h2 className="text-black font-bold leading-tight" style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}>
          Trusted by Businesses Worldwide
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.project}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden h-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.project}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <Quote className="text-[#141c2b] mb-4" size={40} />
                <h4 className="text-black mb-4 font-bold text-xl">
                  {testimonial.project}
                </h4>
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
