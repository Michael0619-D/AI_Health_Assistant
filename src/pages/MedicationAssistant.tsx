import { useState } from 'react';
import { Pill, Search, AlertTriangle, Clock, Info, CheckCircle } from 'lucide-react';

const MedicationAssistant = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [medicationInfo, setMedicationInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockMedication = {
        name: searchTerm,
        genericName: 'Acetaminophen',
        dosage: '500mg tablets',
        uses: [
          'Pain relief (headaches, muscle aches, arthritis)',
          'Fever reduction',
          'Post-surgical pain management'
        ],
        dosageInstructions: {
          adults: '500-1000mg every 4-6 hours, maximum 4000mg per day',
          children: 'Consult pediatrician for appropriate dosing'
        },
        sideEffects: {
          common: ['Nausea', 'Stomach upset', 'Dizziness'],
          serious: ['Liver damage (with overdose)', 'Severe allergic reactions', 'Skin reactions']
        },
        interactions: [
          'Warfarin (blood thinner) - increased bleeding risk',
          'Alcohol - increased liver toxicity risk',
          'Other acetaminophen-containing medications'
        ],
        warnings: [
          'Do not exceed maximum daily dose',
          'Avoid alcohol while taking this medication',
          'Consult doctor if symptoms persist beyond 3 days',
          'Check other medications for acetaminophen content'
        ]
      };
      setMedicationInfo(mockMedication);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
              <Pill className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Medication Assistant</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get comprehensive information about medications, dosages, side effects, and drug interactions
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Search Medication</h2>
          <div className="flex space-x-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter medication name (e.g., Tylenol, Ibuprofen, Aspirin)"
              className="flex-1 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              onClick={handleSearch}
              disabled={!searchTerm.trim() || loading}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>{loading ? 'Searching...' : 'Search'}</span>
            </button>
          </div>
        </div>

        {/* Medication Information */}
        {medicationInfo && (
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{medicationInfo.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Generic Name</h4>
                  <p className="text-gray-600">{medicationInfo.genericName}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Dosage Form</h4>
                  <p className="text-gray-600">{medicationInfo.dosage}</p>
                </div>
              </div>
            </div>

            {/* Uses */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Uses</h3>
              <div className="space-y-3">
                {medicationInfo.uses.map((use: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{use}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dosage Instructions */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-blue-500" />
                <h3 className="text-2xl font-bold text-gray-900">Dosage Instructions</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Adults</h4>
                  <p className="text-blue-800">{medicationInfo.dosageInstructions.adults}</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Children</h4>
                  <p className="text-purple-800">{medicationInfo.dosageInstructions.children}</p>
                </div>
              </div>
            </div>

            {/* Side Effects */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Info className="w-6 h-6 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-900">Side Effects</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <h4 className="font-semibold text-yellow-900 mb-3">Common Side Effects</h4>
                  <ul className="space-y-2">
                    {medicationInfo.sideEffects.common.map((effect: string, index: number) => (
                      <li key={index} className="text-yellow-800 flex items-center space-x-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span>{effect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h4 className="font-semibold text-red-900 mb-3">Serious Side Effects</h4>
                  <ul className="space-y-2">
                    {medicationInfo.sideEffects.serious.map((effect: string, index: number) => (
                      <li key={index} className="text-red-800 flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span>{effect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Drug Interactions */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-bold text-gray-900">Drug Interactions</h3>
              </div>
              <div className="space-y-3">
                {medicationInfo.interactions.map((interaction: string, index: number) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-800 font-medium">{interaction}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warnings */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h3 className="text-2xl font-bold text-orange-900">Important Warnings</h3>
              </div>
              <div className="space-y-3">
                {medicationInfo.warnings.map((warning: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <p className="text-orange-800">{warning}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-6 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Medical Disclaimer</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    This information is for educational purposes only and should not replace professional medical advice. 
                    Always consult with your healthcare provider or pharmacist before starting, stopping, or changing any medication. 
                    Individual responses to medications may vary.
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

export default MedicationAssistant;