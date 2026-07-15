import { useState } from 'react';
import { Stethoscope, AlertTriangle, Info, CheckCircle, Send, Loader } from 'lucide-react';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!symptoms.trim()) return;
    
    setLoading(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockAnalysis = {
        possibleConditions: [
          { name: 'Common Cold', probability: 'High', description: 'Viral infection affecting upper respiratory tract' },
          { name: 'Seasonal Allergies', probability: 'Medium', description: 'Allergic reaction to environmental triggers' },
          { name: 'Sinusitis', probability: 'Low', description: 'Inflammation of sinus cavities' }
        ],
        urgency: symptoms.toLowerCase().includes('chest pain') || symptoms.toLowerCase().includes('difficulty breathing') ? 'Emergency' : 
                symptoms.toLowerCase().includes('fever') ? 'Moderate' : 'Mild',
        recommendations: [
          'Stay hydrated and get plenty of rest',
          'Consider over-the-counter pain relievers if needed',
          'Monitor symptoms for any worsening',
          'Consult with a healthcare provider if symptoms persist'
        ]
      };
      setAnalysis(mockAnalysis);
      setLoading(false);
    }, 2000);
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Emergency': return 'text-red-600 bg-red-50 border-red-200';
      case 'Moderate': return 'text-orange-600 bg-orange-50 border-orange-200';
      default: return 'text-green-600 bg-green-50 border-green-200';
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'Emergency': return AlertTriangle;
      case 'Moderate': return Info;
      default: return CheckCircle;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Symptom Checker</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Describe your symptoms and get intelligent analysis with possible conditions and recommendations
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Describe Your Symptoms</h2>
          <div className="space-y-4">
            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="Please describe your symptoms in detail. For example: 'I have a headache, runny nose, and mild fever for 2 days...'"
              className="w-full h-32 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            <button
              onClick={handleAnalyze}
              disabled={!symptoms.trim() || loading}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Analyze Symptoms</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Analysis Results */}
        {analysis && (
          <div className="space-y-6">
            {/* Urgency Level */}
            <div className={`rounded-2xl p-6 border-2 ${getUrgencyColor(analysis.urgency)}`}>
              <div className="flex items-center space-x-3 mb-4">
                {(() => { const Icon = getUrgencyIcon(analysis.urgency); return <Icon className="w-6 h-6" />; })()}
                <h3 className="text-xl font-bold">Urgency Level: {analysis.urgency}</h3>
              </div>
              {analysis.urgency === 'Emergency' && (
                <p className="font-medium">
                  ⚠️ Seek immediate medical attention. Consider calling emergency services or visiting the nearest emergency room.
                </p>
              )}
              {analysis.urgency === 'Moderate' && (
                <p className="font-medium">
                  Consider scheduling an appointment with your healthcare provider within the next few days.
                </p>
              )}
              {analysis.urgency === 'Mild' && (
                <p className="font-medium">
                  Monitor your symptoms. Consider home care measures and consult a healthcare provider if symptoms worsen.
                </p>
              )}
            </div>

            {/* Possible Conditions */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Possible Conditions</h3>
              <div className="space-y-4">
                {analysis.possibleConditions.map((condition: any, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">{condition.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        condition.probability === 'High' ? 'bg-red-100 text-red-700' :
                        condition.probability === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {condition.probability} Probability
                      </span>
                    </div>
                    <p className="text-gray-600">{condition.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recommendations</h3>
              <div className="space-y-3">
                {analysis.recommendations.map((rec: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Disclaimer</h4>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    This analysis is for informational purposes only and should not replace professional medical advice. 
                    Always consult with a qualified healthcare provider for proper diagnosis and treatment. 
                    If you're experiencing a medical emergency, call emergency services immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;