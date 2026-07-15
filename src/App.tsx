// React 18 automatic JSX runtime (no explicit React import needed)
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SymptomChecker from './pages/SymptomChecker';
import MedicationAssistant from './pages/MedicationAssistant';
import WellnessCoach from './pages/WellnessCoach';
import MentalHealthCompanion from './pages/MentalHealthCompanion';
import LabReportAnalyzer from './pages/LabReportAnalyzer';
import EmergencyGuide from './pages/EmergencyGuide';
import HealthPlanner from './pages/HealthPlanner';
import TechStack from './pages/TechStack';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Use smooth scroll only if user hasn't requested reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, left: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/symptom-checker" element={<SymptomChecker />} />
            <Route path="/medication-assistant" element={<MedicationAssistant />} />
            <Route path="/wellness-coach" element={<WellnessCoach />} />
            <Route path="/mental-health" element={<MentalHealthCompanion />} />
            <Route path="/lab-analyzer" element={<LabReportAnalyzer />} />
            <Route path="/emergency-guide" element={<EmergencyGuide />} />
            <Route path="/health-planner" element={<HealthPlanner />} />
            <Route path="/tech-stack" element={<TechStack />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;