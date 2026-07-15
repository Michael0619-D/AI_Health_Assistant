import { Heart, Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">Health Genie</span>
          </div>
        </div>        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-green-400 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Health Genie</h3>
                <p className="text-blue-200 text-sm">AI Health Assistant</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Your intelligent health companion powered by advanced AI. Get instant health insights, 
              symptom analysis, and personalized wellness guidance.
            </p>
          </div>

          {/* Developer Info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-blue-200">Powered By</h4>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h5 className="font-bold text-white mb-2">Muhammad Atif Latif</h5>
              <p className="text-blue-200 text-sm mb-3">
                Data Scientist & ML Engineer
              </p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Passionate about building AI healthcare solutions for real-world impact. 
                Experienced in ML, deep learning, and production-grade intelligent apps.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-blue-200">Connect With Me</h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-3">
              <a
                href="https://github.com/m-Atif-Latif"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-200 text-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-atif-latif-13a171318"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-200 text-sm"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/mianatif5867"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-200 text-sm"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/its_atif_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-200 text-sm"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href="mailto:muhammadatiflatif67@gmail.com"
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-200 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">
              © 2025 Health Genie. Built with ❤️ for better healthcare accessibility.
            </p>
            <div className="flex items-center space-x-4 text-xs text-blue-300">
              <span>Powered by GPT‑5</span>
              <span>•</span>
              <span>Built with React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;