import { useState } from 'react';
import { Calendar, Plus, CheckCircle, Clock, Bell, User, Target, Activity } from 'lucide-react';

const HealthPlanner = () => {
  const [activeTab, setActiveTab] = useState('appointments');
  const [appointments, setAppointments] = useState([
    { id: 1, title: 'Annual Physical Exam', date: '2025-02-15', time: '10:00 AM', doctor: 'Dr. Smith', completed: false },
    { id: 2, title: 'Dental Cleaning', date: '2025-02-20', time: '2:00 PM', doctor: 'Dr. Johnson', completed: false },
    { id: 3, title: 'Eye Exam', date: '2025-03-01', time: '11:30 AM', doctor: 'Dr. Wilson', completed: false }
  ]);

  const [medications, setMedications] = useState([
    { id: 1, name: 'Vitamin D3', dosage: '1000 IU daily', time: '8:00 AM', completed: true },
    { id: 2, name: 'Multivitamin', dosage: '1 tablet daily', time: '8:00 AM', completed: false },
    { id: 3, name: 'Omega-3', dosage: '1000mg daily', time: '6:00 PM', completed: false }
  ]);

  const [goals, setGoals] = useState([
    { id: 1, title: 'Walk 10,000 steps daily', progress: 75, target: 100, completed: false },
    { id: 2, title: 'Drink 8 glasses of water', progress: 60, target: 100, completed: false },
    { id: 3, title: 'Sleep 8 hours nightly', progress: 85, target: 100, completed: false }
  ]);

  const tabs = [
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'medications', label: 'Medications', icon: Bell },
    { id: 'goals', label: 'Health Goals', icon: Target }
  ];

  const toggleComplete = (type: string, id: number) => {
    if (type === 'appointments') {
      setAppointments(appointments.map(apt => 
        apt.id === id ? { ...apt, completed: !apt.completed } : apt
      ));
    } else if (type === 'medications') {
      setMedications(medications.map(med => 
        med.id === id ? { ...med, completed: !med.completed } : med
      ));
    } else if (type === 'goals') {
      setGoals(goals.map(goal => 
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      ));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Calendar className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Personal Health Planner</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Organize your health appointments, medications, and wellness goals in one place
          </p>
        </div>

        {/* Health Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Upcoming</h3>
                <p className="text-sm text-gray-600">Appointments</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-blue-600">
              {appointments.filter(apt => !apt.completed).length}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Daily</h3>
                <p className="text-sm text-gray-600">Medications</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-green-600">
              {medications.filter(med => med.completed).length}/{medications.length}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Goals</h3>
                <p className="text-sm text-gray-600">Progress</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-purple-600">
              {Math.round(goals.reduce((acc, goal) => acc + goal.progress, 0) / goals.length)}%
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 font-medium transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-8">
            {/* Appointments Tab */}
            {activeTab === 'appointments' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Upcoming Appointments</h2>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Appointment</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className={`border rounded-xl p-6 transition-all duration-200 ${
                      appointment.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200 hover:border-blue-300'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => toggleComplete('appointments', appointment.id)}
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                              appointment.completed
                                ? 'bg-green-500 border-green-500 text-white'
                                : 'border-gray-300 hover:border-blue-500'
                            }`}
                          >
                            {appointment.completed && <CheckCircle className="w-4 h-4" />}
                          </button>
                          <div>
                            <h3 className={`font-semibold ${appointment.completed ? 'text-green-900 line-through' : 'text-gray-900'}`}>
                              {appointment.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{appointment.date}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{appointment.time}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <User className="w-4 h-4" />
                                <span>{appointment.doctor}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Medications Tab */}
            {activeTab === 'medications' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Daily Medications</h2>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Medication</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {medications.map((medication) => (
                    <div key={medication.id} className={`border rounded-xl p-6 transition-all duration-200 ${
                      medication.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200 hover:border-green-300'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => toggleComplete('medications', medication.id)}
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                              medication.completed
                                ? 'bg-green-500 border-green-500 text-white'
                                : 'border-gray-300 hover:border-green-500'
                            }`}
                          >
                            {medication.completed && <CheckCircle className="w-4 h-4" />}
                          </button>
                          <div>
                            <h3 className={`font-semibold ${medication.completed ? 'text-green-900' : 'text-gray-900'}`}>
                              {medication.name}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                              <span>{medication.dosage}</span>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{medication.time}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Bell className={`w-5 h-5 ${medication.completed ? 'text-green-500' : 'text-gray-400'}`} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Goals Tab */}
            {activeTab === 'goals' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Health Goals</h2>
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200 flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Goal</span>
                  </button>
                </div>
                <div className="space-y-6">
                  {goals.map((goal) => (
                    <div key={goal.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-all duration-200">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => toggleComplete('goals', goal.id)}
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                              goal.completed
                                ? 'bg-purple-500 border-purple-500 text-white'
                                : 'border-gray-300 hover:border-purple-500'
                            }`}
                          >
                            {goal.completed && <CheckCircle className="w-4 h-4" />}
                          </button>
                          <h3 className={`font-semibold ${goal.completed ? 'text-purple-900 line-through' : 'text-gray-900'}`}>
                            {goal.title}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Activity className="w-5 h-5 text-purple-500" />
                          <span className="text-sm font-medium text-purple-600">{goal.progress}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-300"
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Quick Health Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-white/20 hover:bg-white/30 rounded-xl p-4 text-left transition-colors duration-200">
              <Calendar className="w-6 h-6 mb-2" />
              <h3 className="font-semibold">Schedule Checkup</h3>
              <p className="text-sm text-blue-100">Book your next appointment</p>
            </button>
            <button className="bg-white/20 hover:bg-white/30 rounded-xl p-4 text-left transition-colors duration-200">
              <Bell className="w-6 h-6 mb-2" />
              <h3 className="font-semibold">Set Reminder</h3>
              <p className="text-sm text-blue-100">Never miss your medication</p>
            </button>
            <button className="bg-white/20 hover:bg-white/30 rounded-xl p-4 text-left transition-colors duration-200">
              <Target className="w-6 h-6 mb-2" />
              <h3 className="font-semibold">Track Progress</h3>
              <p className="text-sm text-blue-100">Monitor your health goals</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthPlanner;