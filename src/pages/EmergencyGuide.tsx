import { useState } from 'react';
import { Shield, Phone, AlertTriangle, Heart, Zap, Droplets, Flame, Users, Globe } from 'lucide-react';

const EmergencyGuide = () => {
  const [selectedEmergency, setSelectedEmergency] = useState('');

  const emergencies = [
    {
      id: 'cpr',
      title: 'CPR (Cardiopulmonary Resuscitation)',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      urgency: 'Critical'
    },
    {
      id: 'choking',
      title: 'Choking',
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      urgency: 'Critical'
    },
    {
      id: 'bleeding',
      title: 'Severe Bleeding',
      icon: Droplets,
      color: 'from-red-600 to-red-700',
      urgency: 'Critical'
    },
    {
      id: 'burns',
      title: 'Burns',
      icon: Flame,
      color: 'from-yellow-500 to-orange-500',
      urgency: 'Urgent'
    },
    {
      id: 'allergic',
      title: 'Allergic Reaction',
      icon: Zap,
      color: 'from-purple-500 to-purple-600',
      urgency: 'Urgent'
    },
    {
      id: 'stroke',
      title: 'Stroke (FAST)',
      icon: AlertTriangle,
      color: 'from-blue-500 to-blue-600',
      urgency: 'Critical'
    }
  ];

  const emergencyGuides = {
    cpr: {
      steps: [
        'Check responsiveness - tap shoulders and shout "Are you okay?"',
        'Call Rescue 1122 (or have someone call) immediately',
        'Position person on back on firm surface',
        'Tilt head back, lift chin to open airway',
        'Place heel of one hand on center of chest between nipples',
        'Place other hand on top, interlace fingers',
        'Push hard and fast ~2 inches (5 cm) deep',
        'Allow complete chest recoil between compressions',
        'Compress at 100–120 per minute (use song rhythm if needed)',
        'Continue until professional help arrives or person breathes'
      ],
      warnings: [
        'Only perform if person is unresponsive and not breathing normally',
        'Do not stop CPR until professional help arrives',
        'If trained, provide rescue breaths (30 compressions : 2 breaths)'
      ]
    },
    choking: {
      steps: [
  'Ask "Are you choking?" - if they can speak/cough, encourage coughing',
  'If unable to speak/cough/breathe, perform abdominal thrusts (Heimlich)',
        'Stand behind person, wrap arms around waist',
        'Make fist with one hand, place thumb side against upper abdomen',
        'Grasp fist with other hand, press into abdomen with upward thrust',
        'Repeat thrusts until object is expelled or person becomes unconscious',
        'If unconscious, lower to ground and begin CPR',
  'Call Rescue 1122 if not already done'
      ],
      warnings: [
        'For pregnant women or large persons, use chest thrusts instead',
        'For infants, use back blows and chest thrusts',
        'Seek medical attention even if object is successfully removed'
      ]
    },
    bleeding: {
      steps: [
  'Call Rescue 1122 for severe bleeding',
        'Put on gloves or use barrier if available',
        'Apply direct pressure to wound with clean cloth',
        'Maintain continuous pressure - do not lift to check',
        'If blood soaks through, add more cloth on top',
        'Elevate injured area above heart level if possible',
        'Apply pressure to pressure points if bleeding continues',
        'Do not remove embedded objects',
        'Treat for shock - keep person warm and lying down'
      ],
      warnings: [
        'Do not use tourniquet unless trained',
        'Never remove embedded objects',
        'Watch for signs of shock (pale, weak pulse, rapid breathing)'
      ]
    },
    burns: {
      steps: [
        'Remove person from heat source if safe to do so',
  'Call Rescue 1122 / seek urgent care for severe burns (large area, face, hands, genitals)',
        'Cool burn with cool (not cold) running water for 10-20 minutes',
        'Remove jewelry/clothing before swelling occurs',
        'Do not break blisters',
        'Cover with sterile, non-adhesive bandage',
        'Take over-the-counter pain medication if needed',
        'Seek medical attention for burns larger than palm of hand'
      ],
      warnings: [
        'Do not use ice, butter, or home remedies',
        'Do not break blisters',
        'Watch for signs of infection'
      ]
    },
    allergic: {
      steps: [
        'Identify and remove allergen if possible',
  'Call Rescue 1122 for severe reactions (difficulty breathing, swelling)',
        'Use epinephrine auto-injector (EpiPen) if available',
        'Have person lie down with legs elevated',
        'Loosen tight clothing',
        'Do not give anything by mouth if having trouble breathing',
        'Be prepared to perform CPR if person becomes unconscious',
        'Monitor breathing and pulse continuously'
      ],
      warnings: [
        'Severe allergic reactions can be fatal within minutes',
        'Always call 911 even if epinephrine is used',
        'Person may need second dose of epinephrine'
      ]
    },
    stroke: {
      steps: [
        'Use FAST test to identify stroke:',
        'F - Face: Ask person to smile. Does face droop?',
        'A - Arms: Ask person to raise both arms. Does one drift down?',
        'S - Speech: Ask person to repeat phrase. Is speech slurred?',
  'T - Time: If any signs present, call Rescue 1122 immediately',
        'Note time symptoms first appeared',
        'Keep person calm and comfortable',
        'Do not give food, water, or medication'
      ],
      warnings: [
        'Time is critical - "Time is Brain"',
        'Do not drive person to hospital yourself',
        'Note exact time symptoms began'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Emergency First Aid Guide (Pakistan)</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Context-aware first aid steps with Pakistan emergency numbers. Call professional help first whenever possible.
          </p>
        </div>

        {/* Emergency Contacts - Pakistan */}
        <div className="bg-red-600 text-white rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <Phone className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Key Emergency Numbers (Pakistan)</h2>
            </div>
            <div className="flex items-center space-x-2 text-sm opacity-90">
              <Globe className="w-4 h-4" />
              <span>Verify locally – coverage varies by city/province</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-center text-base font-semibold">
            <div className="bg-white/10 rounded-xl p-4">🚑 Rescue 1122<br/><span className="text-xs font-normal">Medical / Fire / Rescue</span></div>
            <div className="bg-white/10 rounded-xl p-4">🚓 Police 15<br/><span className="text-xs font-normal">Law Enforcement</span></div>
            <div className="bg-white/10 rounded-xl p-4">🚑 Edhi 115<br/><span className="text-xs font-normal">Ambulance (NGO)</span></div>
            <div className="bg-white/10 rounded-xl p-4">� Chhipa 1020<br/><span className="text-xs font-normal">Ambulance (Karachi)</span></div>
          </div>
          <p className="mt-4 text-sm text-red-100 leading-relaxed text-center">
            No unified national poison hotline. For poisoning: immediately call Rescue 1122 or nearest hospital; provide substance name, amount, and time since exposure.
          </p>
        </div>

        {/* Emergency Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {emergencies.map((emergency) => {
            const Icon = emergency.icon;
            return (
              <button
                key={emergency.id}
                onClick={() => setSelectedEmergency(emergency.id)}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                  selectedEmergency === emergency.id ? 'border-red-500 ring-4 ring-red-100' : 'border-gray-100'
                }`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${emergency.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{emergency.title}</h3>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  emergency.urgency === 'Critical' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {emergency.urgency}
                </div>
              </button>
            );
          })}
        </div>

        {/* Emergency Guide */}
        {selectedEmergency && emergencyGuides[selectedEmergency as keyof typeof emergencyGuides] && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {emergencies.find(e => e.id === selectedEmergency)?.title}
                </h2>
                <p className="text-red-600 font-semibold">Follow these steps immediately</p>
              </div>
            </div>

            {/* Steps */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Instructions</h3>
              <div className="space-y-4">
                {emergencyGuides[selectedEmergency as keyof typeof emergencyGuides].steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-800 font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warnings */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                <h3 className="text-xl font-bold text-yellow-900">Important Warnings</h3>
              </div>
              <div className="space-y-3">
                {emergencyGuides[selectedEmergency as keyof typeof emergencyGuides].warnings.map((warning, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <p className="text-yellow-800">{warning}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call Emergency Reminder */}
            <div className="mt-6 bg-red-600 text-white rounded-xl p-6 text-center">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <Phone className="w-6 h-6" />
                <h3 className="text-xl font-bold">Call Emergency Services First</h3>
              </div>
              <p className="text-red-100">
                In any life-threatening emergency, call Rescue 1122 (or local emergency number) before prolonged first aid. Professional medical help is the priority.
              </p>
            </div>
          </div>
        )}

        {/* General Emergency Tips */}
        {!selectedEmergency && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">General Emergency Preparedness</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Before an Emergency</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Learn basic first aid and CPR</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Keep a well-stocked first aid kit</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Post local numbers: 1122, 15, 115, 1020</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Practice emergency scenarios</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">During an Emergency</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Stay calm and assess the situation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Ensure scene safety first</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Call Rescue 1122 (or nearest service)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Provide care within your training</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-gray-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Emergency Care Disclaimer</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                This guidance is educational and not a substitute for certified first aid training or professional medical advice. 
                Always contact local emergency services (e.g., Rescue 1122) in life‑threatening situations. Training from reputable 
                organizations and local health authorities is strongly recommended. Adapt actions based on safety, environment, and available resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyGuide;