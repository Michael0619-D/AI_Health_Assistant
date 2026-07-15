import { useState, useCallback, DragEvent, ChangeEvent } from 'react';
import { FileText, Upload, AlertTriangle, CheckCircle, TrendingUp, TrendingDown, Minus, XCircle } from 'lucide-react';

const LabReportAnalyzer = () => {
  const [labData, setLabData] = useState('');
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const resetFileState = () => {
    setFileName(null);
    setFileError(null);
  };

  const supportedExtensions = ['.txt', '.csv']; // (PDF parsing would require extra lib)

  const readFileContent = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.onload = () => resolve(reader.result as string);
      reader.readAsText(file);
    });
  };

  const parseCsvIfNeeded = (content: string, file: File): string => {
    if (!file.name.toLowerCase().endsWith('.csv')) return content;
    // Simple CSV -> Name: value unit transformation (expects headers like Test,Value,Unit[,Range])
    try {
      const lines = content.split(/\r?\n/).filter(l => l.trim());
      if (lines.length < 2) return content; // Not enough data
      const header = lines[0].split(/,|;|\t/).map(h => h.trim().toLowerCase());
      const idxName = header.findIndex(h => ['test','name','analyte'].includes(h));
      const idxValue = header.findIndex(h => ['value','result'].includes(h));
      const idxUnit = header.findIndex(h => ['unit','units'].includes(h));
      const idxRange = header.findIndex(h => ['range','reference','ref'].includes(h));
      if (idxName === -1 || idxValue === -1) return content; // Can't parse reliably
      const parsed = lines.slice(1).map(line => {
        const cols = line.split(/,|;|\t/);
        const name = cols[idxName]?.trim();
        const value = cols[idxValue]?.trim();
        const unit = idxUnit !== -1 ? cols[idxUnit]?.trim() : '';
        const range = idxRange !== -1 ? cols[idxRange]?.trim() : '';
        if (!name || !value) return '';
        return `${name}: ${value}${unit ? ' ' + unit : ''}${range ? ', Range: ' + range : ''}`;
      }).filter(Boolean).join('\n');
      return parsed || content;
    } catch {
      return content; // Fallback silently
    }
  };

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    resetFileState();
    const lower = file.name.toLowerCase();
    const ext = supportedExtensions.find(e => lower.endsWith(e));
    if (!ext) {
      setFileError('Unsupported file type. Please upload a .txt or .csv file.');
      return;
    }
    if (file.size > 1_000_000) {
      setFileError('File too large (max 1MB).');
      return;
    }
    try {
      const raw = await readFileContent(file);
      const processed = parseCsvIfNeeded(raw, file);
      setLabData(prev => (prev.trim() ? prev + '\n' + processed : processed));
      setFileName(file.name);
    } catch (err: any) {
      setFileError(err.message || 'Failed to read file');
    }
  };

  const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const onDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, []);

  const handleAnalyze = async () => {
    if (!labData.trim()) return;
    
    setLoading(true);
    
    // Simulate AI analysis with more comprehensive results
    setTimeout(() => {
      const mockAnalysis = {
        results: [
          {
            test: 'Complete Blood Count (CBC)',
            values: [
              { name: 'Hemoglobin', value: '12.5', unit: 'g/dL', range: '12.0-15.5', status: 'normal', trend: 'stable' },
              { name: 'White Blood Cells', value: '8.2', unit: '×10³/μL', range: '4.5-11.0', status: 'normal', trend: 'stable' },
              { name: 'Platelets', value: '180', unit: '×10³/μL', range: '150-450', status: 'normal', trend: 'stable' }
            ]
          },
          {
            test: 'Basic Metabolic Panel',
            values: [
              { name: 'Glucose', value: '105', unit: 'mg/dL', range: '70-100', status: 'high', trend: 'increasing' },
              { name: 'Creatinine', value: '0.9', unit: 'mg/dL', range: '0.6-1.2', status: 'normal', trend: 'stable' },
              { name: 'Sodium', value: '140', unit: 'mEq/L', range: '136-145', status: 'normal', trend: 'stable' }
            ]
          },
          {
            test: 'Lipid Panel',
            values: [
              { name: 'Total Cholesterol', value: '220', unit: 'mg/dL', range: '<200', status: 'high', trend: 'increasing' },
              { name: 'HDL Cholesterol', value: '45', unit: 'mg/dL', range: '>40', status: 'normal', trend: 'stable' },
              { name: 'LDL Cholesterol', value: '150', unit: 'mg/dL', range: '<100', status: 'high', trend: 'increasing' }
            ]
          }
        ],
        summary: {
          normal: 6,
          abnormal: 3,
          critical: 0
        },
        insights: [
          {
            type: 'concern',
            title: 'Elevated Glucose Level',
            description: 'Your glucose level is slightly above normal range. This could indicate prediabetes or early diabetes.',
            recommendations: ['Monitor carbohydrate intake', 'Increase physical activity', 'Consider follow-up testing']
          },
          {
            type: 'concern',
            title: 'High Cholesterol',
            description: 'Both total and LDL cholesterol are elevated, increasing cardiovascular risk.',
            recommendations: ['Adopt heart-healthy diet', 'Regular exercise', 'Consider medication consultation']
          },
          {
            type: 'positive',
            title: 'Normal Blood Count',
            description: 'Your complete blood count shows healthy levels, indicating good overall blood health.',
            recommendations: ['Continue current lifestyle', 'Regular monitoring']
          }
        ]
      };
      setAnalysis(mockAnalysis);
      setLoading(false);
    }, 2500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high':
      case 'low':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'critical':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-green-600 bg-green-50 border-green-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'high':
        return TrendingUp;
      case 'low':
        return TrendingDown;
      case 'critical':
        return AlertTriangle;
      default:
        return CheckCircle;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'increasing':
        return TrendingUp;
      case 'decreasing':
        return TrendingDown;
      default:
        return Minus;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Lab Report Analyzer</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload or paste your lab results for intelligent analysis and easy-to-understand explanations
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Lab Results</h2>
          <div className="space-y-4">
            {/* Drag & Drop / File Picker */}
            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors duration-200 cursor-pointer relative ${
                isDragging ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-orange-400'
              }`}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              onClick={() => document.getElementById('lab-file-input')?.click()}
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2 font-medium">
                Drag & drop a .txt or .csv file here, or click to browse
              </p>
              <p className="text-xs text-gray-500 mb-4">Max size 1MB. PDF parsing not yet supported.</p>
              {fileName && !fileError && (
                <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 text-green-700 px-3 py-1 rounded-full text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-medium truncate max-w-[160px]" title={fileName}>{fileName}</span>
                </div>
              )}
              {fileError && (
                <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 text-red-700 px-3 py-1 rounded-full text-sm">
                  <XCircle className="w-4 h-4" />
                  <span className="font-medium">{fileError}</span>
                </div>
              )}
              <input
                id="lab-file-input"
                type="file"
                accept=".txt,.csv,text/plain,text/csv"
                className="hidden"
                onChange={onFileInputChange}
              />
            </div>

            {/* Manual Text Area */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 block">Or Paste / Edit Data</label>
              <textarea
                value={labData}
                onChange={(e) => setLabData(e.target.value)}
                placeholder="Example: Hemoglobin: 12.5 g/dL, Glucose: 105 mg/dL, Total Cholesterol: 220 mg/dL..."
                className="w-full h-40 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-y"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>{labData.length} chars</span>
                <button
                  type="button"
                  onClick={() => { setLabData(''); resetFileState(); }}
                  className="text-orange-600 hover:underline"
                >Clear</button>
              </div>
            </div>

            <button
              onClick={handleAnalyze}
              disabled={!labData.trim() || loading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <FileText className="w-5 h-5" />
              <span>{loading ? 'Analyzing...' : 'Analyze Lab Results'}</span>
            </button>
          </div>
        </div>

        {/* Analysis Results */}
        {analysis && (
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <div>
                    <div className="text-2xl font-bold text-green-900">{analysis.summary.normal}</div>
                    <div className="text-green-700">Normal Results</div>
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                  <div>
                    <div className="text-2xl font-bold text-orange-900">{analysis.summary.abnormal}</div>
                    <div className="text-orange-700">Abnormal Results</div>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                  <div>
                    <div className="text-2xl font-bold text-red-900">{analysis.summary.critical}</div>
                    <div className="text-red-700">Critical Results</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Results */}
            <div className="space-y-6">
              {analysis.results.map((testGroup: any, groupIndex: number) => (
                <div key={groupIndex} className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{testGroup.test}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Test</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Your Value</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Reference Range</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Trend</th>
                        </tr>
                      </thead>
                      <tbody>
                        {testGroup.values.map((value: any, valueIndex: number) => {
                          const StatusIcon = getStatusIcon(value.status);
                          const TrendIcon = getTrendIcon(value.trend);
                          return (
                            <tr key={valueIndex} className="border-b border-gray-100">
                              <td className="py-4 px-4 font-medium text-gray-900">{value.name}</td>
                              <td className="py-4 px-4">
                                <span className="font-semibold">{value.value}</span>
                                <span className="text-gray-500 ml-1">{value.unit}</span>
                              </td>
                              <td className="py-4 px-4 text-gray-600">{value.range}</td>
                              <td className="py-4 px-4">
                                <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(value.status)}`}>
                                  <StatusIcon className="w-4 h-4" />
                                  <span className="text-sm font-medium capitalize">{value.status}</span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center space-x-2 text-gray-600">
                                  <TrendIcon className="w-4 h-4" />
                                  <span className="text-sm capitalize">{value.trend}</span>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            {/* Insights and Recommendations */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Insights & Recommendations</h3>
              <div className="space-y-6">
                {analysis.insights.map((insight: any, index: number) => (
                  <div key={index} className={`rounded-xl p-6 border-2 ${
                    insight.type === 'concern' ? 'bg-orange-50 border-orange-200' : 'bg-green-50 border-green-200'
                  }`}>
                    <div className="flex items-start space-x-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        insight.type === 'concern' ? 'bg-orange-500' : 'bg-green-500'
                      }`}>
                        {insight.type === 'concern' ? (
                          <AlertTriangle className="w-5 h-5 text-white" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-lg font-semibold mb-2 ${
                          insight.type === 'concern' ? 'text-orange-900' : 'text-green-900'
                        }`}>
                          {insight.title}
                        </h4>
                        <p className={`mb-4 ${
                          insight.type === 'concern' ? 'text-orange-800' : 'text-green-800'
                        }`}>
                          {insight.description}
                        </p>
                        <div>
                          <h5 className={`font-semibold mb-2 ${
                            insight.type === 'concern' ? 'text-orange-900' : 'text-green-900'
                          }`}>
                            Recommendations:
                          </h5>
                          <ul className="space-y-1">
                            {insight.recommendations.map((rec: string, recIndex: number) => (
                              <li key={recIndex} className={`flex items-center space-x-2 ${
                                insight.type === 'concern' ? 'text-orange-800' : 'text-green-800'
                              }`}>
                                <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
                                <span>{rec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="w-6 h-6 text-blue-500" />
                <h3 className="text-2xl font-bold text-blue-900">Next Steps</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <p className="text-blue-800">Schedule a follow-up appointment with your healthcare provider to discuss these results</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <p className="text-blue-800">Prepare questions about any abnormal values and recommended lifestyle changes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <p className="text-blue-800">Consider retesting in 3-6 months to monitor trends and improvements</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Medical Disclaimer</h4>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    This analysis is for educational purposes only and should not replace professional medical interpretation. 
                    Lab values can vary based on individual factors, testing methods, and laboratory standards. 
                    Always consult with your healthcare provider for proper interpretation and medical advice.
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

export default LabReportAnalyzer;