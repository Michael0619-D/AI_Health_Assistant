import { useState } from 'react';
import { Heart, Brain, Smile, Wind, Sun, MessageCircle, Phone } from 'lucide-react';

const MentalHealthCompanion = () => {
  const [mood, setMood] = useState('');
  const [support, setSupport] = useState<any>(null);

  const moods = [
    { value: 'anxious', label: 'Anxious', color: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
    { value: 'stressed', label: 'Stressed', color: 'bg-orange-100 text-orange-800 border-orange-300' },
    { value: 'sad', label: 'Sad', color: 'bg-blue-100 text-blue-800 border-blue-300' },
    { value: 'overwhelmed', label: 'Overwhelmed', color: 'bg-red-100 text-red-800 border-red-300' },
    { value: 'lonely', label: 'Lonely', color: 'bg-purple-100 text-purple-800 border-purple-300' },
    { value: 'angry', label: 'Angry', color: 'bg-red-100 text-red-800 border-red-300' }
  ];

  const handleMoodSelect = (selectedMood: string) => {
    setMood(selectedMood);
    
    const supportContent = {
      anxious: {
        techniques: [
          {
            name: '4-7-8 Breathing',
            description: 'Inhale for 4, hold for 7, exhale for 8. Repeat 4 times.',
            icon: Wind
          },
          {
            name: '5-4-3-2-1 Grounding',
            description: 'Name 5 things you see, 4 you hear, 3 you touch, 2 you smell, 1 you taste.',
            icon: Brain
          }
        ],
        affirmations: [
          'This feeling is temporary and will pass',
          'I am safe and in control',
          'I can handle whatever comes my way'
        ]
      },
      stressed: {
        techniques: [
          {
            name: 'Progressive Muscle Relaxation',
            description: 'Tense and release each muscle group, starting from your toes.',
            icon: Heart
          },
          {
            name: 'Mindful Breathing',
            description: 'Focus on your breath for 5-10 minutes, letting thoughts pass by.',
            icon: Wind
          }
        ],
        affirmations: [
          'I can only control what is within my power',
          'I choose to respond calmly to challenges',
          'I am doing my best, and that is enough'
        ]
      },
      sad: {
        techniques: [
          {
            name: 'Gratitude Practice',
            description: 'Write down 3 things you are grateful for today.',
            icon: Sun
          },
          {
            name: 'Gentle Movement',
            description: 'Take a short walk or do light stretching to boost endorphins.',
            icon: Heart
          }
        ],
        affirmations: [
          'My feelings are valid and temporary',
          'I am worthy of love and compassion',
          'Better days are ahead'
        ]
      }
    };

    setSupport(supportContent[selectedMood as keyof typeof supportContent] || supportContent.anxious);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mental Health Companion</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find emotional support, coping strategies, and mindfulness techniques for your mental wellness
          </p>
        </div>

        {/* Mood Selection */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How are you feeling today?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {moods.map((moodOption) => (
              <button
                key={moodOption.value}
                onClick={() => handleMoodSelect(moodOption.value)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                  mood === moodOption.value 
                    ? `${moodOption.color} border-current shadow-lg` 
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <div className="text-center">
                  <div className="text-lg font-semibold">{moodOption.label}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Support Content */}
        {support && (
          <div className="space-y-6">
            {/* Coping Techniques */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Brain className="w-6 h-6 text-blue-500" />
                <h3 className="text-2xl font-bold text-gray-900">Coping Techniques</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {support.techniques.map((technique: any, index: number) => {
                  const Icon = technique.icon;
                  return (
                    <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-blue-900">{technique.name}</h4>
                      </div>
                      <p className="text-blue-800">{technique.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Positive Affirmations */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Sun className="w-6 h-6 text-yellow-500" />
                <h3 className="text-2xl font-bold text-gray-900">Positive Affirmations</h3>
              </div>
              <div className="space-y-4">
                {support.affirmations.map((affirmation: string, index: number) => (
                  <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <p className="text-yellow-900 font-medium text-center text-lg">"{affirmation}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Guided Breathing Exercise */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Wind className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Guided Breathing Exercise</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-4">Box Breathing Technique</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-2xl font-bold mb-1">4</div>
                    <div className="text-sm">Inhale</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-2xl font-bold mb-1">4</div>
                    <div className="text-sm">Hold</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-2xl font-bold mb-1">4</div>
                    <div className="text-sm">Exhale</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-2xl font-bold mb-1">4</div>
                    <div className="text-sm">Hold</div>
                  </div>
                </div>
                <p className="text-center mt-4 text-green-100">
                  Repeat this cycle 4-6 times to help calm your mind and body
                </p>
              </div>
            </div>

            {/* Professional Help */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="w-6 h-6 text-purple-500" />
                <h3 className="text-2xl font-bold text-gray-900">When to Seek Professional Help</h3>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <p className="text-purple-900 mb-4">
                  If you're experiencing persistent feelings of sadness, anxiety, or other mental health concerns, 
                  it's important to reach out to a mental health professional.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span className="text-purple-800">National Suicide Prevention Lifeline: 988</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-purple-800">Crisis Text Line: Text HOME to 741741</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Self-Care Reminders */}
            <div className="bg-pink-50 border border-pink-200 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Smile className="w-6 h-6 text-pink-500" />
                <h3 className="text-2xl font-bold text-pink-900">Self-Care Reminders</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-pink-800">Stay hydrated throughout the day</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-pink-800">Get adequate sleep (7-9 hours)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-pink-800">Eat nutritious meals regularly</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-pink-800">Connect with loved ones</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-pink-800">Engage in activities you enjoy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-pink-800">Practice self-compassion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentalHealthCompanion;