import React, { useState } from 'react';
import { 
  BookOpen, 
  Target, 
  Activity, 
  Shield, 
  AlertCircle, 
  CheckCircle, 
  HelpCircle, 
  ArrowRight,
  HeartPulse,
  Scale,
  Stethoscope,
  Brain,
  ChevronRight
} from 'lucide-react';

// --- Types ---

type SectionTab = 'intro' | 'grammar' | 'vocab' | 'exercises' | 'summary';

interface VocabItem {
  term: string;
  meaning: string;
  icon: React.ReactNode;
}

// --- Data ---

const VOCABULARY: VocabItem[] = [
  { term: 'Risk', meaning: 'The possibility of harm or illness', icon: <AlertCircle className="w-5 h-5 text-red-500" /> },
  { term: 'Prevention', meaning: 'Actions taken to stop disease', icon: <Shield className="w-5 h-5 text-emerald-500" /> },
  { term: 'Protection', meaning: 'Measures that reduce danger', icon: <CheckCircle className="w-5 h-5 text-blue-500" /> },
  { term: 'Illness', meaning: 'A disease or sickness', icon: <HeartPulse className="w-5 h-5 text-rose-500" /> },
  { term: 'Treatment', meaning: 'Medical care for a condition', icon: <Stethoscope className="w-5 h-5 text-purple-500" /> },
];

// --- Components ---

const SectionCard = ({ title, icon, children, className = "" }: { title: string, icon?: React.ReactNode, children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6 ${className}`}>
    <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-3">
      {icon && <div className="text-teal-600">{icon}</div>}
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
    </div>
    <div className="p-6">
      {children}
    </div>
  </div>
);

const NavButton = ({ id, label, icon, active, onClick }: { id: SectionTab, label: string, icon: React.ReactNode, active: boolean, onClick: (id: SectionTab) => void }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 w-full sm:w-auto justify-center sm:justify-start
      ${active 
        ? 'bg-teal-600 text-white shadow-md' 
        : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-teal-700'
      }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState<SectionTab>('intro');

  // Exercise 1 State
  const [ex1Answers, setEx1Answers] = useState<Record<string, 'C' | 'U' | null>>({
    risk: null, diseases: null, prevention: null, infections: null, treatment: null
  });

  // Exercise 2 State
  const [ex2Answers, setEx2Answers] = useState<Record<number, string>>({});
  const [ex2ShowResults, setEx2ShowResults] = useState(false);

  // Exercise 3 State
  const [showEx3Model, setShowEx3Model] = useState(false);

  // --- Handlers ---

  const handleEx1Select = (key: string, value: 'C' | 'U') => {
    setEx1Answers(prev => ({ ...prev, [key]: value }));
  };

  const getEx1Status = (key: string, correct: 'C' | 'U') => {
    if (ex1Answers[key] === null) return 'neutral';
    return ex1Answers[key] === correct ? 'correct' : 'incorrect';
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'intro':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <SectionCard title="Lesson Overview" icon={<BookOpen />}>
              <p className="text-slate-700 leading-relaxed mb-4">
                This lesson focuses on using the English quantifiers <span className="font-bold text-teal-700">more</span>, <span className="font-bold text-teal-700">less</span>, and <span className="font-bold text-teal-700">fewer</span> to describe risks, benefits, and outcomes related to health and disease prevention.
              </p>
              <p className="text-slate-700 leading-relaxed">
                You will learn how a healthy lifestyle can reduce illnesses and medical treatments, using the correct quantifier based on whether a noun is countable or uncountable. This lesson is designed for professionals and uses clear, practical examples.
              </p>
            </SectionCard>

            <SectionCard title="Learning Objectives" icon={<Target />}>
              <ul className="space-y-3">
                {[
                  "Compare health-related risks and benefits in English",
                  "Use 'less' and 'more' correctly with uncountable nouns",
                  "Use 'fewer' correctly with countable nouns (diseases)",
                  "Understand and produce sentences applied to preventive care"
                ].map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>
          </div>
        );

      case 'grammar':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <SectionCard title="Countable vs Uncountable" icon={<Scale />}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <h4 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                    <span className="bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded">Uncountable</span>
                    General States
                  </h4>
                  <p className="text-sm text-slate-600 mb-3">Conditions or processes not counted as units.</p>
                  <ul className="text-sm font-medium text-slate-700 list-disc list-inside space-y-1">
                    <li>risk</li>
                    <li>protection</li>
                    <li>medical treatment</li>
                    <li>prevention</li>
                    <li>health</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                    <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">Countable</span>
                    Specific Events
                  </h4>
                  <p className="text-sm text-slate-600 mb-3">Diseases or conditions that can be counted.</p>
                  <ul className="text-sm font-medium text-slate-700 list-disc list-inside space-y-1">
                    <li>diseases</li>
                    <li>illnesses</li>
                    <li>infections</li>
                    <li>symptoms</li>
                  </ul>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Comparing Risks (Uncountable)" icon={<Activity />}>
              <p className="mb-4 text-slate-700">With uncountable nouns (risk, protection), use <span className="font-bold">more</span> or <span className="font-bold">less</span>.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 bg-slate-50 p-3 rounded border border-slate-200 text-center">
                  <span className="text-2xl font-bold text-red-500 block mb-1">Less ▼</span>
                  <span className="text-xs uppercase tracking-wide text-slate-500">A Reduction</span>
                </div>
                <div className="flex-1 bg-slate-50 p-3 rounded border border-slate-200 text-center">
                  <span className="text-2xl font-bold text-green-500 block mb-1">More ▲</span>
                  <span className="text-xs uppercase tracking-wide text-slate-500">An Increase</span>
                </div>
              </div>

              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <h5 className="font-bold text-teal-800 mb-2">Examples:</h5>
                <ul className="space-y-2 text-slate-700">
                  <li>• Regular exercise results in <span className="font-bold bg-white px-1 rounded">less risk</span> of disease.</li>
                  <li>• Vaccination provides <span className="font-bold bg-white px-1 rounded">more protection</span> against infections.</li>
                </ul>
              </div>
            </SectionCard>

            <SectionCard title="Using 'Fewer' (Countable)" icon={<Activity />}>
              <p className="mb-4 text-slate-700">Diseases and illnesses are usually countable. To indicate a smaller number, use <span className="font-bold">fewer</span>.</p>
              
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <h5 className="font-bold text-indigo-800 mb-2">Examples:</h5>
                <ul className="space-y-2 text-slate-700">
                  <li>• Preventive care leads to <span className="font-bold bg-white px-1 rounded">fewer illnesses</span>.</li>
                  <li>• Good hygiene results in <span className="font-bold bg-white px-1 rounded">fewer infections</span> at work.</li>
                </ul>
              </div>
            </SectionCard>

             <SectionCard title="Model Comparison" icon={<Brain />}>
              <p className="text-slate-600 mb-4">How to combine both concepts in one professional sentence:</p>
              <div className="bg-slate-800 text-white p-6 rounded-xl shadow-lg text-center">
                <p className="text-lg md:text-xl font-medium">
                  "A healthy lifestyle leads to <span className="text-yellow-400">fewer diseases</span> and <span className="text-teal-400">less medical treatment</span>."
                </p>
              </div>
              <div className="flex justify-center mt-4 gap-8 text-sm text-slate-500">
                <div className="text-center">
                  <span className="block font-bold text-slate-700">Diseases</span>
                  Countable Plural
                </div>
                <div className="text-center">
                  <span className="block font-bold text-slate-700">Treatment</span>
                  Uncountable
                </div>
              </div>
            </SectionCard>
          </div>
        );

      case 'vocab':
        return (
          <div className="animate-in fade-in duration-500">
            <SectionCard title="Target Vocabulary" icon={<BookOpen />}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {VOCABULARY.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-white rounded-full shadow-sm border border-slate-100">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-slate-800">{item.term}</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.meaning}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
        );

      case 'exercises':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Exercise 1 */}
            <SectionCard title="Ex 1: Classify the Nouns" icon={<Brain />}>
              <p className="mb-4 text-slate-600">Is the noun Countable (C) or Uncountable (U)?</p>
              <div className="space-y-3">
                {[
                  { id: 'risk', word: 'Risk', correct: 'U' },
                  { id: 'diseases', word: 'Diseases', correct: 'C' },
                  { id: 'prevention', word: 'Prevention', correct: 'U' },
                  { id: 'infections', word: 'Infections', correct: 'C' },
                  { id: 'treatment', word: 'Medical Treatment', correct: 'U' },
                ].map((q) => {
                  const status = getEx1Status(q.id, q.correct as 'C' | 'U');
                  return (
                    <div key={q.id} className="flex items-center justify-between p-3 bg-slate-50 rounded border border-slate-200">
                      <span className="font-medium text-slate-700">{q.word}</span>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleEx1Select(q.id, 'C')}
                          className={`px-3 py-1 text-sm rounded font-bold transition-colors ${ex1Answers[q.id] === 'C' ? (status === 'correct' && q.correct === 'C' ? 'bg-green-500 text-white' : (status === 'incorrect' ? 'bg-red-500 text-white' : 'bg-blue-600 text-white')) : 'bg-white border border-slate-300 text-slate-500'}`}
                        >
                          Countable
                        </button>
                        <button 
                          onClick={() => handleEx1Select(q.id, 'U')}
                          className={`px-3 py-1 text-sm rounded font-bold transition-colors ${ex1Answers[q.id] === 'U' ? (status === 'correct' && q.correct === 'U' ? 'bg-green-500 text-white' : (status === 'incorrect' ? 'bg-red-500 text-white' : 'bg-blue-600 text-white')) : 'bg-white border border-slate-300 text-slate-500'}`}
                        >
                          Uncountable
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SectionCard>

            {/* Exercise 2 */}
            <SectionCard title="Ex 2: Choose the Correct Quantifier" icon={<HelpCircle />}>
              <p className="mb-4 text-slate-600">Complete each sentence with <em>more</em>, <em>less</em>, or <em>fewer</em>.</p>
              <div className="space-y-4">
                {[
                  { id: 1, text: "A healthy lifestyle means ___ risk of chronic disease.", correct: "less" },
                  { id: 2, text: "Preventive care results in ___ illnesses.", correct: "fewer" },
                  { id: 3, text: "Regular checkups provide ___ protection.", correct: "more" },
                  { id: 4, text: "Healthy habits require ___ medical treatment.", correct: "less" }
                ].map((q) => (
                  <div key={q.id} className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <select 
                        className={`p-2 border rounded text-sm bg-slate-50 font-medium
                          ${ex2ShowResults 
                            ? (ex2Answers[q.id] === q.correct ? 'border-green-500 text-green-700 bg-green-50' : 'border-red-500 text-red-700 bg-red-50')
                            : 'border-slate-300 text-slate-700'
                          }`}
                        value={ex2Answers[q.id] || ""}
                        onChange={(e) => setEx2Answers({...ex2Answers, [q.id]: e.target.value})}
                        disabled={ex2ShowResults}
                      >
                        <option value="">Select...</option>
                        <option value="more">more</option>
                        <option value="less">less</option>
                        <option value="fewer">fewer</option>
                      </select>
                      <span className="text-slate-700">{q.text.replace('___', '...')}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setEx2ShowResults(!ex2ShowResults)}
                className="mt-4 px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded font-medium transition-colors"
              >
                {ex2ShowResults ? "Reset" : "Check Answers"}
              </button>
            </SectionCard>

            {/* Exercise 3 */}
            <SectionCard title="Ex 3: Comparative Sentences" icon={<Stethoscope />}>
              <p className="mb-4 text-slate-600">Write a complete sentence comparing an unhealthy and healthy lifestyle using the words: <span className="font-bold">Diseases</span> and <span className="font-bold">Medical Treatment</span>.</p>
              
              <textarea 
                className="w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none min-h-[100px] mb-4"
                placeholder="Type your sentence here..."
              ></textarea>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <button 
                  onClick={() => setShowEx3Model(!showEx3Model)}
                  className="text-blue-600 font-bold hover:underline flex items-center gap-2"
                >
                  {showEx3Model ? "Hide Model Answer" : "Show Model Answer"}
                  <ChevronRight className={`w-4 h-4 transition-transform ${showEx3Model ? 'rotate-90' : ''}`} />
                </button>
                
                {showEx3Model && (
                  <div className="mt-3 text-slate-700 animate-in slide-in-from-top-2">
                    <p className="font-medium">Model sentence:</p>
                    <p className="italic">"A healthy lifestyle leads to <span className="font-bold text-teal-600">fewer</span> diseases and <span className="font-bold text-teal-600">less</span> medical treatment."</p>
                    <div className="mt-2 text-sm text-slate-500 border-t border-blue-200 pt-2">
                      <p>Check: Did you use <strong>fewer</strong> for diseases (countable) and <strong>less</strong> for treatment (uncountable)?</p>
                    </div>
                  </div>
                )}
              </div>
            </SectionCard>
          </div>
        );

      case 'summary':
        return (
          <div className="animate-in fade-in duration-500">
             <SectionCard title="Lesson Summary" icon={<CheckCircle />}>
              <div className="prose text-slate-700">
                <p className="mb-4 text-lg">
                  In this lesson, you learned how to describe and compare health-related risks, benefits, and outcomes using <span className="font-bold text-teal-700">more</span>, <span className="font-bold text-teal-700">less</span>, and <span className="font-bold text-teal-700">fewer</span>.
                </p>
                <div className="bg-slate-100 p-6 rounded-xl">
                  <h4 className="font-bold text-slate-800 mb-4">Key Takeaways:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="bg-white p-2 rounded shadow-sm font-bold text-slate-700">Uncountable Nouns</span>
                      <span>(risk, health) → Use <strong>Less / More</strong></span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="bg-white p-2 rounded shadow-sm font-bold text-slate-700">Countable Nouns</span>
                      <span>(diseases, infections) → Use <strong>Fewer</strong></span>
                    </li>
                  </ul>
                </div>
                <p className="mt-6">
                  Using these quantifiers correctly allows you to clearly explain how preventive habits reduce disease, lower risk, and improve overall quality of life in everyday English.
                </p>
              </div>
            </SectionCard>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-teal-700 text-white shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <HeartPulse className="w-8 h-8 text-teal-300" />
            <span className="text-teal-200 uppercase tracking-wider text-xs font-bold">English for Healthcare</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">Health and Disease Prevention</h1>
          <p className="text-teal-100 mt-2 text-lg">Mastering: More, Less, and Fewer</p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-4">
          <NavButton 
            id="intro" 
            label="Overview" 
            icon={<BookOpen className="w-4 h-4" />} 
            active={activeTab === 'intro'} 
            onClick={setActiveTab} 
          />
          <NavButton 
            id="grammar" 
            label="Grammar" 
            icon={<Brain className="w-4 h-4" />} 
            active={activeTab === 'grammar'} 
            onClick={setActiveTab} 
          />
           <NavButton 
            id="vocab" 
            label="Vocabulary" 
            icon={<Target className="w-4 h-4" />} 
            active={activeTab === 'vocab'} 
            onClick={setActiveTab} 
          />
          <NavButton 
            id="exercises" 
            label="Exercises" 
            icon={<Activity className="w-4 h-4" />} 
            active={activeTab === 'exercises'} 
            onClick={setActiveTab} 
          />
          <NavButton 
            id="summary" 
            label="Summary" 
            icon={<CheckCircle className="w-4 h-4" />} 
            active={activeTab === 'summary'} 
            onClick={setActiveTab} 
          />
        </div>

        {/* Dynamic Content */}
        <div className="min-h-[400px]">
          {renderContent()}
        </div>

      </main>

    </div>
  );
}