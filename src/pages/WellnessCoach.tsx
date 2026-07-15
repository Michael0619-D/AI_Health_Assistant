import { useState } from 'react';
import { Brain, Target, Activity, Apple, Moon, Heart, TrendingUp } from 'lucide-react';

const WellnessCoach = () => {
  const [userProfile, setUserProfile] = useState({
    age: '',
    gender: '',
    goal: '',
    activityLevel: ''
  });
  const [recommendations, setRecommendations] = useState<any>(null);

  const handleGenerateRecommendations = () => {
    const mockRecommendations = {
      exercise: {
        weekly: '150 minutes moderate aerobic activity + 2 strength training sessions',
        daily: 'Take 8,000-10,000 steps daily',
        activities: ['Brisk walking', 'Swimming', 'Cycling', 'Yoga', 'Weight training']
      },
      nutrition: {
        calories: '2000-2200 calories per day',
        macros: 'Protein: 25%, Carbs: 45%, Fats: 30%',
        tips: [
          'Eat 5-7 servings of fruits and vegetables daily',
          'Choose whole grains over refined grains',
          'Include lean protein with each meal',
          'Stay hydrated with 8-10 glasses of water'
        ]
      },
      sleep: {
        duration: '7-9 hours per night',
        tips: [
          'Maintain consistent sleep schedule',
          'Create a relaxing bedtime routine',
          'Avoid screens 1 hour before bed',
          'Keep bedroom cool and dark'
        ]
      },
      mentalHealth: {
        practices: [
          'Practice mindfulness meditation 10-15 minutes daily',
          'Keep a gratitude journal',
          'Engage in social activities',
          'Take regular breaks from work'
        ]
      }
    };
    setRecommendations(mockRecommendations);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Wellness Coach</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get personalized fitness, nutrition, and lifestyle recommendations tailored to your goals
          </p>
        </div>

        {/* Profile Setup */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
              <input
                type="number"
                value={userProfile.age}
                onChange={(e) => setUserProfile({ ...userProfile, age: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your age"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <select
                value={userProfile.gender}
                onChange={(e) => setUserProfile({ ...userProfile, gender: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Primary Goal</label>
              <select
                value={userProfile.goal}
                onChange={(e) => setUserProfile({ ...userProfile, goal: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select your goal</option>
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="general-fitness">General Fitness</option>
                <option value="stress-management">Stress Management</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Activity Level</label>
              <select
                value={userProfile.activityLevel}
                onChange={(e) => setUserProfile({ ...userProfile, activityLevel: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select activity level</option>
                <option value="sedentary">Sedentary</option>
                <option value="lightly-active">Lightly Active</option>
                <option value="moderately-active">Moderately Active</option>
                <option value="very-active">Very Active</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleGenerateRecommendations}
            disabled={!userProfile.age || !userProfile.gender || !userProfile.goal || !userProfile.activityLevel}
            className="w-full mt-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            <Target className="w-5 h-5" />
            <span>Generate Personalized Plan</span>
          </button>
        </div>

        {/* Recommendations */}
        {recommendations && (
          <div className="space-y-6">
            {/* Exercise Recommendations */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Activity className="w-6 h-6 text-blue-500" />
                <h3 className="text-2xl font-bold text-gray-900">Exercise Plan</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Weekly Target</h4>
                  <p className="text-blue-800">{recommendations.exercise.weekly}</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Daily Goal</h4>
                  <p className="text-green-800">{recommendations.exercise.daily}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Recommended Activities</h4>
                  <div className="flex flex-wrap gap-2">
                    {recommendations.exercise.activities.map((activity: string, index: number) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Nutrition Recommendations */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Apple className="w-6 h-6 text-green-500" />
                <h3 className="text-2xl font-bold text-gray-900">Nutrition Guide</h3>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                    <h4 className="font-semibold text-orange-900 mb-2">Daily Calories</h4>
                    <p className="text-orange-800">{recommendations.nutrition.calories}</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">Macronutrients</h4>
                    <p className="text-yellow-800">{recommendations.nutrition.macros}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Nutrition Tips</h4>
                  <div className="space-y-2">
                    {recommendations.nutrition.tips.map((tip: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Apple className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sleep Recommendations */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Moon className="w-6 h-6 text-indigo-500" />
                <h3 className="text-2xl font-bold text-gray-900">Sleep Optimization</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                  <h4 className="font-semibold text-indigo-900 mb-2">Recommended Duration</h4>
                  <p className="text-indigo-800">{recommendations.sleep.duration}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Sleep Tips</h4>
                  <div className="space-y-2">
                    {recommendations.sleep.tips.map((tip: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Moon className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mental Health */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-6 h-6 text-pink-500" />
                <h3 className="text-2xl font-bold text-gray-900">Mental Wellness</h3>
              </div>
              <div className="space-y-2">
                {recommendations.mentalHealth.practices.map((practice: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{practice}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Tracking */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Track Your Progress</h3>
              </div>
              <p className="text-purple-100 mb-4">
                Remember to track your progress regularly and adjust your plan as needed. 
                Consistency is key to achieving your wellness goals.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Weekly weigh-ins</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Progress photos</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Mood tracking</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Energy levels</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WellnessCoach;