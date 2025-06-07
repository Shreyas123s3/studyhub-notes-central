
import React from 'react';
import { Mail, Heart, Github, Twitter, Linkedin, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-text-dark to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="gradient-primary text-white px-4 py-2 rounded-xl font-bold text-xl shadow-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                StudyHub
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering first-year engineering students with free, high-quality study materials. 
              Built by students, for students with love and dedication.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Heart className="w-4 h-4 text-red-400" />
              Made with love for engineering students worldwide
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">All Subjects</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Recent Updates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Study Tips</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 group cursor-pointer">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-engineering-blue/20 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm group-hover:text-white transition-colors duration-300">support@studyhub.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 group cursor-pointer">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-engineering-blue/20 transition-colors duration-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-sm group-hover:text-white transition-colors duration-300">Submit Notes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 StudyHub. All rights reserved. Built for first-year engineering students worldwide.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
