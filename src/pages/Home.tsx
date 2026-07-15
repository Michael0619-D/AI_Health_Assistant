// React automatic JSX runtime (no explicit import needed)
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Activity, 
  Brain, 
  Heart, 
  Shield, 
  Calendar, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Globe
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Stethoscope,
      title: 'Symptom Checker',
      description: 'AI-powered symptom analysis with smart reasoning and urgency categorization',
      href: '/symptom-checker',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Activity,
      title: 'Medication Assistant',
      description: 'Comprehensive drug information, interactions, and dosage guidance',
      href: '/medication-assistant',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Brain,
      title: 'Wellness Coach',
      description: 'Personalized fitness, nutrition, and lifestyle recommendations',
      href: '/wellness-coach',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      title: 'Mental Health Companion',
      description: 'Emotional support, stress management, and mindfulness techniques',
      href: '/mental-health',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Activity,
      title: 'Lab Report Analyzer',
      description: 'Intelligent analysis and explanation of medical test results',
      href: '/lab-analyzer',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Emergency Guide',
      description: 'Step-by-step first aid instructions and emergency protocols',
      href: '/emergency-guide',
      color: 'from-red-500 to-red-600'
    }
  ];

  const stats = [
    { icon: Users, label: 'Users Helped', value: '10,000+' },
    { icon: Clock, label: 'Response Time', value: '<2 sec' },
    { icon: Globe, label: 'Languages', value: '50+' },
    { icon: CheckCircle, label: 'Accuracy', value: '95%+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Health <span className="text-yellow-300">Genie</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your intelligent AI health companion. Get instant health insights, symptom analysis, 
              and personalized wellness guidance powered by advanced artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/symptom-checker"
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Sparkles className="w-5 h-5" />
                <span>Start Health Check</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/wellness-coach"
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-200 flex items-center space-x-2"
              >
                <Brain className="w-5 h-5" />
                <span>Wellness Coaching</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Health Assistant
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access a complete suite of AI-powered health tools designed to support your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.href}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of users who trust Health Genie for their daily health and wellness needs. 
            Start your journey to better health today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/symptom-checker"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Stethoscope className="w-5 h-5" />
              <span>Check Symptoms Now</span>
            </Link>
            <Link
              to="/health-planner"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Plan Your Health</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;