
import React from 'react';
import { BookOpen, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-text-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="gradient-primary text-white px-3 py-1 rounded-lg font-bold text-xl">
                StudyHub
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering first-year engineering students with free, high-quality study materials. 
              Built by students, for students.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-red-400" />
              Made with love for engineering students
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">All Subjects</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Recent Updates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Study Tips</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@studyhub.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm">Submit Notes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 StudyHub. All rights reserved. | Built for first-year engineering students worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
