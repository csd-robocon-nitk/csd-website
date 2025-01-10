import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaRocket } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, href: 'https://facebook.com', color: 'text-blue-600' },
    { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com', color: 'text-blue-400' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com', color: 'text-pink-600' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com', color: 'text-blue-700' },
  ];
  return (
    <footer className="bg-sky-950 text-gray-300 py-8 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
          {/* Logo & Description */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2 text-xl font-medium text-white">
              <FaRocket className="h-6 w-6 text-blue-400" />
              <span>CSD NITK</span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering innovation and technology at NITK.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {["About", "Projects", "Team", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-semibold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transform transition-all duration-200 hover:-translate-y-1 ${social.color} hover:text-white`}
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-4 text-xs text-gray-400">
          <p>Copyright © {currentYear} CSD NITK. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
