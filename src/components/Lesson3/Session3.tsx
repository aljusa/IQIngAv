import React, { useState } from 'react';
import { 
  BookOpen, 
  Brain, 
  CheckCircle, 
  ChevronRight, 
  Coffee, 
  LayoutList, 
  Moon, 
  Scale, 
  School,
  Activity,
  ArrowRight
} from 'lucide-react';

// --- Types & Interfaces ---

type TabId = 'overview' | 'grammar' | 'vocabulary' | 'exercises' | 'summary';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

interface QuizItem {
  id: number;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
}

// --- Components ---

const Header = () => (
  <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-6 shadow-lg">
    <div className="max-w-4xl mx-auto flex items-center gap-3">
      <School className="w-8 h-8 text-blue-200" />
      <div>
        <h1 className="text-2xl font-bold">Daily Habits & Lifestyle</h1>
        <p className="text-blue-100 text-sm opacity-90">Grammar Focus: More, Less, and Fewer</p>
      </div>
    </div>
  </header>
);

const SectionTitle = ({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2 border-slate-200">
    {icon}
    {children}
  </h2>
);

const Card = ({ title, children, className = "" }: { title?: string; children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {title && <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 font-semibold text-slate-700">{title}</div>}
    <div className="p-6">{children}</div>
  </div>
);

// --- Content Sections ---

const OverviewSection = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <SectionTitle icon={<BookOpen className="text-blue-600" />}>Lesson Overview</SectionTitle>
    
    <Card>
      <p className="text-slate-600 leading-relaxed mb-4">
        This lesson focuses on using the English quantifiers <strong>more</strong>, <strong>less</strong>, and <strong>fewer</strong> to describe and compare daily habits related to lifestyle and well-being.
      </p>
      <p className="text-slate-600 leading-relaxed">
        You will learn how to distinguish between healthy and unhealthy habits and how to apply the correct quantifier depending on whether the noun is <strong>countable</strong> or <strong>uncountable</strong>.
      </p>
    </Card>

    <div className="grid md:grid-cols-2 gap-4">
      <Card title="Learning Objectives" className="h-full">
        <ul className="space-y-3">
          {[
            "Compare healthy and unhealthy habits in English",
            "Use 'more' and 'less' with uncountable nouns",
            "Use 'fewer' with countable nouns",
            "Produce practical sentences about well-being"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-slate-700">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Target Audience" className="h-full bg-blue-50 border-blue-100">
        <div className="flex items-center gap-4 h-full">
          <Activity className="w-12 h-12 text-blue-400" />
          <p className="text-blue-800">
            Designed for non-native professionals using English in everyday contexts who want to improve their fluency regarding lifestyle topics.
          </p>
        </div>
      </Card>
    </div>
  </div>
);

const GrammarSection = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <SectionTitle icon={<Scale className="text-purple-600" />}>Key Grammar Concepts</SectionTitle>

    {/* Countable vs Uncountable */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
        <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center gap-2">
          <LayoutList className="w-5 h-5" /> Uncountable Nouns
        </h3>
        <p className="text-sm text-orange-700 mb-4">
          General states, substances, or concepts that cannot be counted individually.
        </p>
        <div className="space-y-2">
          <div className="font-semibold text-slate-700">Keywords:</div>
          <div className="flex flex-wrap gap-2">
            {['Stress', 'Sleep', 'Caffeine', 'Energy'].map(w => (
              <span key={w} className="px-3 py-1 bg-white text-orange-600 rounded-full text-sm font-medium shadow-sm border border-orange-200">{w}</span>
            ))}
          </div>
        </div>
        <div className="mt-6 p-3 bg-white/60 rounded-lg border border-orange-200">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Rule</div>
          <p className="text-slate-800 font-medium">Use <span className="text-orange-600 font-bold">MORE</span> or <span className="text-orange-600 font-bold">LESS</span></p>
        </div>
      </div>

      <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
        <h3 className="text-lg font-bold text-emerald-800 mb-3 flex items-center gap-2">
          <LayoutList className="w-5 h-5" /> Countable Nouns
        </h3>
        <p className="text-sm text-emerald-700 mb-4">
          Habits or actions that can be counted. Usually appear in plural form.
        </p>
        <div className="space-y-2">
          <div className="font-semibold text-slate-700">Keywords:</div>
          <div className="flex flex-wrap gap-2">
            {['Habits', 'Routines', 'Breaks', 'Behaviors'].map(w => (
              <span key={w} className="px-3 py-1 bg-white text-emerald-600 rounded-full text-sm font-medium shadow-sm border border-emerald-200">{w}</span>
            ))}
          </div>
        </div>
        <div className="mt-6 p-3 bg-white/60 rounded-lg border border-emerald-200">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Rule</div>
          <p className="text-slate-800 font-medium">Use <span className="text-emerald-600 font-bold">MORE</span> or <span className="text-emerald-600 font-bold">FEWER</span></p>
        </div>
      </div>
    </div>

    {/* Comparison Table */}
    <Card title="Comparing Habits in Practice">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-sm uppercase">
              <th className="p-4 font-semibold border-b">Noun Type</th>
              <th className="p-4 font-semibold border-b">Greater Amount (+)</th>
              <th className="p-4 font-semibold border-b">Smaller Amount (-)</th>
              <th className="p-4 font-semibold border-b">Example</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="p-4 font-medium text-slate-800">Uncountable</td>
              <td className="p-4 text-green-600 font-bold">More</td>
              <td className="p-4 text-red-500 font-bold">Less</td>
              <td className="p-4 text-slate-600 italic">"A balanced lifestyle includes <strong>more</strong> sleep and <strong>less</strong> stress."</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-slate-800">Countable</td>
              <td className="p-4 text-green-600 font-bold">More</td>
              <td className="p-4 text-red-500 font-bold">Fewer</td>
              <td className="p-4 text-slate-600 italic">"A healthy lifestyle includes <strong>fewer</strong> bad habits."</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>

    {/* Model Sentence */}
    <div className="bg-indigo-900 text-white rounded-xl p-8 text-center shadow-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-400"></div>
      <h3 className="text-blue-200 uppercase tracking-widest text-sm font-semibold mb-4">The Golden Rule Sentence</h3>
      <p className="text-2xl md:text-3xl font-serif italic">
        "People with <span className="text-yellow-400 font-bold">less</span> stress and <span className="text-yellow-400 font-bold">fewer</span> unhealthy habits feel better."
      </p>
      <div className="mt-6 flex justify-center gap-4 text-sm text-blue-200">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-400"></span> stress (uncountable)</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-400"></span> habits (countable)</span>
      </div>
    </div>
  </div>
);

const VocabularySection = () => {
  const vocab = [
    { term: 'Habit', meaning: 'A regular action or behavior', icon: <Activity className="w-5 h-5" /> },
    { term: 'Lifestyle', meaning: 'The way a person lives daily', icon: <LayoutList className="w-5 h-5" /> },
    { term: 'Well-being', meaning: 'Physical and mental health', icon: <CheckCircle className="w-5 h-5" /> },
    { term: 'Stress', meaning: 'Mental or emotional pressure', icon: <Brain className="w-5 h-5" /> },
    { term: 'Routine', meaning: 'A repeated daily pattern', icon: <BookOpen className="w-5 h-5" /> },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <SectionTitle icon={<BookOpen className="text-indigo-600" />}>Target Vocabulary</SectionTitle>
      <div className="grid gap-4">
        {vocab.map((item, index) => (
          <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-slate-200 hover:border-indigo-300 transition-colors">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-full mr-4">
              {item.icon}
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-800">{item.term}</h4>
              <p className="text-slate-600">{item.meaning}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExercisesSection = () => {
  // Exercise 1 State
  const [ex1Results, setEx1Results] = useState<{ [key: string]: string | null }>({});
  
  const ex1Words = [
    { id: 'stress', word: 'Stress', type: 'U' },
    { id: 'habits', word: 'Habits', type: 'C' },
    { id: 'sleep', word: 'Sleep', type: 'U' },
    { id: 'routines', word: 'Routines', type: 'C' },
    { id: 'caffeine', word: 'Caffeine', type: 'U' },
  ];

  const handleEx1Click = (id: string, selection: 'C' | 'U', correct: string) => {
    setEx1Results(prev => ({ ...prev, [id]: selection === correct ? 'correct' : 'incorrect' }));
  };

  // Exercise 2 State
  const [ex2Answers, setEx2Answers] = useState<{ [key: number]: string }>({});
  const [ex2Submitted, setEx2Submitted] = useState(false);

  const ex2Questions: QuizItem[] = [
    { id: 1, question: "A healthy routine includes ___ sleep.", correctAnswer: "more", options: ["more", "fewer"] },
    { id: 2, question: "People want ___ stress in their daily lives.", correctAnswer: "less", options: ["less", "fewer"] },
    { id: 3, question: "This lifestyle has ___ unhealthy habits.", correctAnswer: "fewer", options: ["less", "fewer"] },
    { id: 4, question: "Many professionals drink ___ caffeine in the afternoon.", correctAnswer: "less", options: ["less", "fewer"] },
  ];

  const handleEx2Select = (qId: number, val: string) => {
    setEx2Answers(prev => ({ ...prev, [qId]: val }));
  };

  // Exercise 3 State (Show/Hide)
  const [showModelAnswer, setShowModelAnswer] = useState(false);

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <SectionTitle icon={<Brain className="text-pink-600" />}>Interactive Exercises</SectionTitle>

      {/* Exercise 1 */}
      <Card title="Exercise 1: Identify the Noun Type">
        <p className="text-slate-600 mb-4">Is the noun Countable (C) or Uncountable (U)? Click to answer.</p>
        <div className="flex flex-wrap gap-4">
          {ex1Words.map((item) => {
            const status = ex1Results[item.id];
            let btnClass = "border-slate-200 hover:bg-slate-50";
            if (status === 'correct') btnClass = "bg-green-100 border-green-300 text-green-800";
            if (status === 'incorrect') btnClass = "bg-red-100 border-red-300 text-red-800";

            return (
              <div key={item.id} className="flex flex-col items-center bg-white p-4 rounded-lg border shadow-sm w-32">
                <span className="font-bold text-slate-800 mb-2">{item.word}</span>
                <div className="flex gap-2 w-full">
                  <button 
                    onClick={() => handleEx1Click(item.id, 'C', item.type)}
                    disabled={status === 'correct'}
                    className={`flex-1 py-1 text-xs font-bold rounded border transition-colors ${status === 'correct' && item.type === 'C' ? 'bg-green-500 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
                  >
                    C
                  </button>
                  <button 
                    onClick={() => handleEx1Click(item.id, 'U', item.type)}
                    disabled={status === 'correct'}
                    className={`flex-1 py-1 text-xs font-bold rounded border transition-colors ${status === 'correct' && item.type === 'U' ? 'bg-green-500 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
                  >
                    U
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Exercise 2 */}
      <Card title="Exercise 2: Choose the Correct Quantifier">
        <div className="space-y-4">
          {ex2Questions.map((q) => (
            <div key={q.id} className="flex flex-col md:flex-row md:items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <span className="w-6 h-6 flex items-center justify-center bg-slate-200 rounded-full text-xs font-bold text-slate-600">{q.id}</span>
              <p className="flex-grow text-slate-700 font-medium">
                {q.question.split('___')[0]}
                <select 
                  className={`mx-2 p-1 rounded border font-bold ${ex2Submitted ? (ex2Answers[q.id] === q.correctAnswer ? 'text-green-600 border-green-300 bg-green-50' : 'text-red-600 border-red-300 bg-red-50') : 'border-slate-300'}`}
                  value={ex2Answers[q.id] || ''}
                  onChange={(e) => handleEx2Select(q.id, e.target.value)}
                  disabled={ex2Submitted}
                >
                  <option value="">___</option>
                  {q.options?.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {q.question.split('___')[1]}
              </p>
              {ex2Submitted && (
                 ex2Answers[q.id] === q.correctAnswer 
                 ? <CheckCircle className="w-5 h-5 text-green-500" />
                 : <span className="text-sm text-red-500 font-medium">Ans: {q.correctAnswer}</span>
              )}
            </div>
          ))}
          <div className="pt-2">
            {!ex2Submitted ? (
              <button 
                onClick={() => setEx2Submitted(true)}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Check Answers
              </button>
            ) : (
              <button 
                onClick={() => { setEx2Submitted(false); setEx2Answers({}); }}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Reset Quiz
              </button>
            )}
          </div>
        </div>
      </Card>

      {/* Exercise 3 */}
      <Card title="Exercise 3: Comparative Sentences (Advanced)">
        <p className="text-slate-600 mb-4">Try to write a complete sentence comparing <strong>unhealthy habits</strong> and <strong>daily routines</strong>.</p>
        <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg mb-4">
          <p className="text-sm text-slate-500 mb-2 font-bold">Your turn:</p>
          <textarea 
            className="w-full p-3 rounded border border-slate-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none" 
            placeholder="E.g., A healthy lifestyle has..."
            rows={3}
          />
        </div>
        
        <button 
          onClick={() => setShowModelAnswer(!showModelAnswer)}
          className="flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
        >
          {showModelAnswer ? "Hide Model Answer" : "Show Model Answer"} <ChevronRight className={`w-4 h-4 transition-transform ${showModelAnswer ? 'rotate-90' : ''}`} />
        </button>

        {showModelAnswer && (
          <div className="mt-4 p-4 bg-green-50 border border-green-100 rounded-lg animate-in fade-in slide-in-from-top-2">
            <p className="font-bold text-green-800 mb-1">Model Answer:</p>
            <p className="text-green-700 italic">"A healthy lifestyle has <strong>fewer</strong> unhealthy habits and <strong>more</strong> consistent daily routines."</p>
          </div>
        )}
      </Card>
    </div>
  );
};

const SummarySection = () => (
  <div className="space-y-6 animate-in fade-in duration-500 text-center max-w-2xl mx-auto">
    <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <CheckCircle className="w-10 h-10 text-indigo-600" />
    </div>
    <h2 className="text-3xl font-bold text-slate-800">Lesson Complete!</h2>
    <p className="text-slate-600 leading-relaxed text-lg">
      In this lesson, you learned how to compare daily habits and lifestyles using <strong>more</strong>, <strong>less</strong>, and <strong>fewer</strong>. The key skill is recognizing whether a habit is expressed as a countable or uncountable noun.
    </p>
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-left mt-8">
      <h3 className="font-bold text-slate-700 mb-3">Quick Recap:</h3>
      <ul className="space-y-2">
        <li className="flex items-center gap-2 text-slate-600">
          <ArrowRight className="w-4 h-4 text-blue-500" />
          <span>Use <strong>Less</strong> for things you cannot count (stress, sleep).</span>
        </li>
        <li className="flex items-center gap-2 text-slate-600">
          <ArrowRight className="w-4 h-4 text-blue-500" />
          <span>Use <strong>Fewer</strong> for things you can count (habits, breaks).</span>
        </li>
      </ul>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: <School className="w-4 h-4" /> },
    { id: 'grammar', label: 'Grammar', icon: <Scale className="w-4 h-4" /> },
    { id: 'vocabulary', label: 'Vocab', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'exercises', label: 'Practice', icon: <Brain className="w-4 h-4" /> },
    { id: 'summary', label: 'Summary', icon: <CheckCircle className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 pb-12">
      <Header />

      <main className="max-w-4xl mx-auto px-4 -mt-6">
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto pb-2 md:pb-0 gap-1 md:gap-2 mb-6 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-4 py-3 rounded-t-lg font-medium transition-all text-sm md:text-base whitespace-nowrap
                ${activeTab === tab.id 
                  ? 'bg-white text-blue-700 shadow-sm border-t-4 border-blue-600' 
                  : 'bg-white/80 text-slate-500 hover:bg-white hover:text-slate-700'
                }
              `}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content Area */}
        <div className="bg-white rounded-b-xl rounded-tr-xl shadow-xl min-h-[500px] p-6 md:p-10 border-t border-slate-100">
          {activeTab === 'overview' && <OverviewSection />}
          {activeTab === 'grammar' && <GrammarSection />}
          {activeTab === 'vocabulary' && <VocabularySection />}
          {activeTab === 'exercises' && <ExercisesSection />}
          {activeTab === 'summary' && <SummarySection />}
        </div>
      </main>
    </div>
  );
}