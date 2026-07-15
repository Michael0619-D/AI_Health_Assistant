import { 
  Code,
  Zap,
  Palette,
  Shield,
  Globe,
  Cpu,
  Layers,
  Activity,
  Brain,
  Pill,
  HeartPulse,
  FileText,
  CalendarCheck
} from 'lucide-react';

const TechStack = () => {
  // Core technology stack (matches package.json versions)
  const technologies = [
    {
      category: 'Core Frontend',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      items: [
        { name: 'React', description: 'Declarative component-based UI library', version: '18.3.1' },
        { name: 'React DOM', description: 'DOM rendering for React components', version: '18.3.1' },
        { name: 'TypeScript', description: 'Static typing for safer, maintainable code', version: '5.5.3' },
        { name: 'React Router', description: 'Client-side routing & navigation', version: '6.8.1' }
      ]
    },
    {
      category: 'UI & Styling',
      icon: Palette,
      color: 'from-fuchsia-500 to-purple-600',
      items: [
        { name: 'Tailwind CSS', description: 'Utility-first design system with rapid iteration', version: '3.4.1' },
        { name: 'Lucide Icons', description: 'Consistent, lightweight SVG icon set', version: '0.344.0' },
        { name: 'PostCSS', description: 'CSS transformations pipeline', version: '8.4.35' },
        { name: 'Autoprefixer', description: 'Automatic vendor prefix management', version: '10.4.18' }
      ]
    },
    {
      category: 'Tooling & Quality',
      icon: Zap,
      color: 'from-amber-500 to-orange-600',
      items: [
        { name: 'Vite', description: 'Blazing fast dev server & build tool', version: '5.4.2' },
        { name: 'ESLint', description: 'Static analysis & code quality enforcement', version: '9.9.1' },
        { name: 'TypeScript ESLint', description: 'Seamless TS + ESLint integration', version: '8.3.0' },
        { name: 'gh-pages', description: 'Automated GitHub Pages deployment', version: '5.0.0' }
      ]
    },
    {
      category: 'AI Integration',
      icon: Cpu,
      color: 'from-green-500 to-emerald-600',
      items: [
        { name: 'GPT-5 (Chat Core)', description: 'Primary reasoning + conversational engine via secure proxy', version: 'In Use' },
        { name: 'Prompt Orchestration', description: 'Composable templates & guardrails per healthcare module', version: 'Active' },
        { name: 'Data Normalization', description: 'Parsing & mapping of symptom / lab inputs to structured schema', version: 'Active' },
        { name: 'Safety Filters', description: 'Post-processing: hallucination reduction & disclaimer injection', version: 'Active' }
      ]
    },
    {
      category: 'Deployment & Ops',
      icon: Globe,
      color: 'from-sky-500 to-cyan-600',
      items: [
        { name: 'GitHub Pages', description: 'Static hosting for production build', version: 'CI Script' },
        { name: 'Docker (optional)', description: 'Containerized build/runtime environment', version: 'Multi-stage' },
        { name: 'Environment Vars', description: 'Separated secrets & runtime configuration', version: '.env' }
      ]
    }
  ];

  // Product / feature modules surfaced in the UI
  const productModules = [
    { name: 'Symptom Checker', icon: Activity, description: 'Structured symptom input & preliminary guidance' },
    { name: 'Medication Assistant', icon: Pill, description: 'Medication info lookup & interaction awareness' },
    { name: 'Mental Health Companion', icon: Brain, description: 'Supportive conversational wellness context' },
    { name: 'Wellness Coach', icon: HeartPulse, description: 'Lifestyle optimization suggestions & tracking' },
    { name: 'Lab Report Analyzer', icon: FileText, description: 'Smart parsing & interpretation of lab values' },
    { name: 'Emergency Guide', icon: Shield, description: 'First-response decision support (non-diagnostic)' },
    { name: 'Health Planner', icon: CalendarCheck, description: 'Goal setting & follow-up reminders' }
  ];

  const features = [
    { icon: Shield, title: 'Privacy Awareness', description: 'Sensitive health inputs kept client-side unless explicitly submitted' },
    { icon: Zap, title: 'Fast Iteration', description: 'Vite + hot module replacement for rapid feature delivery' },
    { icon: Globe, title: 'Accessible & Responsive', description: 'Mobile-first layouts & semantic patterns' },
    { icon: Layers, title: 'Modular Domains', description: 'Each health feature isolated & extensible' }
  ];

  const stats = [
    { label: 'Feature Modules', value: productModules.length.toString() },
    { label: 'Pages', value: '9' },
    { label: 'Packages', value: '19' },
    { label: 'Core Stack', value: 'React + TS + Vite' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center">
              <Code className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built with modern technologies and best practices for optimal performance and user experience
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Technology Categories */}
        <div className="space-y-8 mb-16">
          {technologies.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center flex-wrap gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors duration-200 group">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{item.version}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Product Modules */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Healthcare Feature Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productModules.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={i} className="border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{m.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features */}
  <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Architecture Overview */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Architecture Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Frontend Layer</h3>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• React 18 function components & hooks</li>
                <li>• TypeScript domain models & utility types</li>
                <li>• Tailwind utility design system</li>
                <li>• React Router multi-page navigation</li>
                <li>• Feature‑scoped component composition</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">AI Layer</h3>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• GPT‑5 conversational reasoning (secure proxy)</li>
                <li>• Prompt templates per health module</li>
                <li>• Input normalization & validation</li>
                <li>• Response post‑processing & safety filters</li>
                <li>• Future: optional lightweight inference fallback</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Build & Delivery</h3>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Vite dev & production bundling</li>
                <li>• ESBuild / Rollup optimizations</li>
                <li>• GitHub Pages static deployment</li>
                <li>• Optional Docker container pipeline</li>
                <li>• Environment‑based config (.env)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Development Info */}
  <div className="mt-8 bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Development Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Structure</h3>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                <div className="space-y-1 text-gray-700">
                  <div>src/</div>
                  <div className="ml-4">├── components/</div>
                  <div className="ml-4">├── pages/</div>
                  <div className="ml-4">├── App.tsx</div>
                  <div className="ml-4">├── main.tsx</div>
                  <div className="ml-4">└── index.css</div>
                  <div>public/</div>
                  <div>package.json</div>
                  <div>tailwind.config.js</div>
                  <div>vite.config.ts</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Development Commands</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3"><code className="text-sm text-gray-700">npm run dev</code><p className="text-xs text-gray-600 mt-1">Start development server</p></div>
                <div className="bg-gray-50 rounded-lg p-3"><code className="text-sm text-gray-700">npm run build</code><p className="text-xs text-gray-600 mt-1">Build for production</p></div>
                <div className="bg-gray-50 rounded-lg p-3"><code className="text-sm text-gray-700">npm run lint</code><p className="text-xs text-gray-600 mt-1">Run ESLint checks</p></div>
              </div>
            </div>
          </div>
        </div>

        {/* Branding Section */}
  <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-800">Health Genie Platform</span>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">This application showcases modern web development practices and AI integration for healthcare applications.</p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;