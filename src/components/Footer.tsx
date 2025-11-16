import { motion } from 'motion/react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import svgPaths from "../imports/svg-33cnni0g5t";

const footerLinks = {
  platform: ['Trading Tools', 'Market Analysis', 'Portfolio Management'],
  support: ['Help Center', 'Contact Us', 'API Documentation']
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 md:py-20 px-6 md:px-8 lg:px-12 mt-20 md:mt-24 lg:mt-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-white mb-4 font-bold"
            >
              Marginz Global
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering traders worldwide with advanced tools and global market access.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-white mb-4 font-bold">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link}>
                  <motion.a
                    whileHover={{ x: 5, color: '#fff' }}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white mb-4 font-bold">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <motion.a
                    whileHover={{ x: 5, color: '#fff' }}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white mb-4 font-bold">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#141c2b] transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © 2024 Margins Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
