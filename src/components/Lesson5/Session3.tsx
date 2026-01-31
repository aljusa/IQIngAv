import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  coffee, 
  Car, 
  Home, 
  Clock, 
  CheckCircle, 
  XCircle, 
  ChevronRight, 
  Edit3, 
  HelpCircle, 
  MousePointer, 
  AlertTriangle,
  Send,
  RefreshCw,
  Coffee,
  Footprints
} from 'lucide-react';

// --- Types ---

type TabType = 'theory' | 'examples' | 'practice';

interface QuizQuestion {
  id: number;
  type: 'fill' | 'transform' | 'choice';
  question: string;
  options?: string[]; // For multiple choice
  correctAnswer: string | string[]; // Can be array for flexible text answers
  userAnswer?: string;
  isCorrect?: boolean;
}

// --- Components ---

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('theory');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-yellow-400 text-indigo-900 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
              Section 3
            </span>
            <span className="text-indigo-200 text-sm font-medium tracking-wide">English Grammar</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Daily Dilemmas: Would Rather</h1>
          <p className="text-indigo-100 max-w-xl">
            Expressing immediate choices, preferences, and contrasts in everyday situations.
          </p>
        </div>
      </header>

      {/* Navigation */}
      <div className="sticky top-0 z-20 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex space-x-1 md:space-x-4 overflow-x-auto pb-1 pt-2 md:pb-0 md:pt-0 scrollbar-hide">
            <TabButton 
              isActive={activeTab === 'theory'} 
              onClick={() => setActiveTab('theory')} 
              icon={<BookOpen size={18} />} 
              label="1. Core Rules" 
            />
            <TabButton 
              isActive={activeTab === 'examples'} 
              onClick={() => setActiveTab('examples')} 
              icon={<MousePointer size={18} />} 
              label="2. Examples" 
            />
            <TabButton 
              isActive={activeTab === 'practice'} 
              onClick={() => setActiveTab('practice')} 
              icon={<Edit3 size={18} />} 
              label="3. Practice" 
            />
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-8 pb-20">
        <div className="transition-all duration-300 ease-in-out">
          {activeTab === 'theory' && <TheorySection />}
          {activeTab === 'examples' && <ExamplesSection />}
          {activeTab === 'practice' && <PracticeSection />}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-white border-t border-slate-200 py-3 text-center text-slate-400 text-sm hidden md:block">
        Daily Dilemmas Module • React & TypeScript Learning Interface
      </footer>
    </div>
  );
};

// --- Sub-Components ---

const TabButton: React.FC<{ isActive: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ isActive, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap
      ${isActive 
        ? 'border-indigo-600 text-indigo-700 bg-indigo-50/50' 
        : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
      }`}
  >
    {icon}
    {label}
  </button>
);

// --- 1. Theory Section ---

const TheorySection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Introduction Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600 hidden md:block">
            <HelpCircle size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-3">When to use "Would Rather"?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              It is used to express <strong className="text-indigo-600">immediate preferences</strong> or direct choices between two options. It often implies a contrast and a quick decision.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Immediate Choice</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Preference</span>
            </div>
          </div>
        </div>
      </div>

      {/* Structures Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <StructureCard 
          title="Basic Preference" 
          structure="Would rather + base verb"
          example="I'd rather stay home."
          icon={<Home size={20} />}
        />
        <StructureCard 
          title="Comparison" 
          structure="Would rather + verb + than + verb"
          example="She'd rather walk than drive."
          icon={<Footprints size={20} />}
        />
        <StructureCard 
          title="Noun Preference" 
          structure="Would rather + noun"
          example="I'd rather coffee."
          note="(Informal context)"
          icon={<Coffee size={20} />}
        />
        <StructureCard 
          title="Different Subject" 
          structure="Would rather + subject + past simple"
          example="I'd rather you called later."
          highlight="Past Simple usage!"
          icon={<Clock size={20} />}
        />
      </div>

      {/* The Golden Rule Alert */}
      <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg shadow-sm">
        <div className="flex items-start gap-3">
          <AlertTriangle className="text-amber-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-amber-800 font-bold text-lg mb-2">The Golden Rule 📌</h3>
            <p className="text-amber-700 mb-3">
              After <strong>would rather</strong>, the verb does <u>not</u> take "to".
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/60 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-red-500 font-medium">
                <XCircle size={18} /> I'd rather <span className="underline decoration-wavy">to go</span>
              </div>
              <div className="flex items-center gap-2 text-green-600 font-bold">
                <CheckCircle size={18} /> I'd rather go
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StructureCard: React.FC<{ title: string; structure: string; example: string; note?: string; highlight?: string; icon: React.ReactNode }> = ({ title, structure, example, note, highlight, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group">
    <div className="flex justify-between items-start mb-4">
      <h3 className="font-bold text-slate-700">{title}</h3>
      <span className="text-indigo-400 group-hover:text-indigo-600 transition-colors">{icon}</span>
    </div>
    <div className="bg-slate-100 p-3 rounded-lg text-sm font-mono text-slate-600 mb-4 border border-slate-200">
      {structure}
    </div>
    <p className="text-lg text-slate-800 font-medium border-l-4 border-indigo-500 pl-3">
      {example}
    </p>
    {(note || highlight) && (
      <div className="mt-3 text-xs flex gap-2">
        {note && <span className="text-slate-400 italic">{note}</span>}
        {highlight && <span className="text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded">{highlight}</span>}
      </div>
    )}
  </div>
);

// --- 2. Examples Section ---

const ExamplesSection: React.FC = () => {
  const examples = [
    { text: "I'd rather eat now.", icon: <Clock size={32} />, label: "Timing", context: "You are hungry immediately." },
    { text: "He'd rather coffee than tea.", icon: <Coffee size={32} />, label: "Preference", context: "Choosing a drink." },
    { text: "She'd rather walk than take a taxi.", icon: <Footprints size={32} />, label: "Mode of Transport", context: "Exercise over convenience." },
    { text: "We'd rather you stayed here.", icon: <Home size={32} />, label: "Desire for others", context: "Polite request using Past Simple." },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <h2 className="text-2xl font-bold text-slate-800">Everyday Contexts</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {examples.map((ex, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:border-indigo-300 transition-colors">
            <div className="h-2 bg-indigo-500 w-full"></div>
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                  {ex.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">{ex.label}</h3>
                  <p className="text-xs text-slate-500 italic">{ex.context}</p>
                </div>
              </div>
              <p className="text-2xl font-medium text-slate-800 mt-auto">
                "{ex.text}"
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Interactive visualizer */}
      <div className="bg-indigo-900 rounded-xl p-8 text-white mt-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-4 relative z-10">Quick Check</h3>
        <p className="mb-6 text-indigo-200 relative z-10">Which sentence sounds correct?</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
          <button className="px-6 py-4 bg-red-500/20 border border-red-500/50 rounded-lg hover:bg-red-500/40 transition-colors text-red-100 line-through decoration-red-300 decoration-2">
            I'd rather to sleep.
          </button>
          <button className="px-6 py-4 bg-green-500/20 border border-green-500/50 rounded-lg hover:bg-green-500/40 transition-colors text-green-100 font-bold shadow-lg shadow-green-900/20">
            I'd rather sleep.
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 3. Practice Section ---

const PracticeSection: React.FC = () => {
  // --- State for Exercises ---
  const [fillAnswers, setFillAnswers] = useState<{[key: number]: string}>({});
  const [fillResults, setFillResults] = useState<{[key: number]: boolean | null}>({});
  
  const [transformAnswers, setTransformAnswers] = useState<{[key: number]: string}>({});
  const [transformResults, setTransformResults] = useState<{[key: number]: boolean | null}>({});
  
  const [mcAnswers, setMcAnswers] = useState<{[key: number]: string}>({});
  const [mcResults, setMcResults] = useState<{[key: number]: boolean | null}>({});

  const [writingText, setWritingText] = useState("");
  const [writingSubmitted, setWritingSubmitted] = useState(false);

  // --- Data ---
  const fillQuestions = [
    { id: 1, text: "I __________ stay home tonight.", expected: "would rather" },
    { id: 2, text: "She __________ tea than coffee.", expected: "would rather" },
    { id: 3, text: "We __________ eat early.", expected: "would rather" },
    { id: 4, text: "He __________ you arrived on time.", expected: "would rather" },
  ];

  const transformQuestions = [
    { id: 1, original: "I prefer to walk instead of driving.", start: "I'd rather", expected: ["walk than drive", "walk than drive."] },
    { id: 2, original: "She wants you to wait outside.", start: "She'd rather", expected: ["you waited outside", "you waited outside."] },
    { id: 3, original: "We prefer eating now.", start: "We'd rather", expected: ["eat now", "eat now."] },
  ];

  const mcQuestions = [
    { id: 1, q: "I'd rather ___ now.", options: ["to leave", "leave"], correct: "leave" },
    { id: 2, q: "She'd rather walk ___ drive.", options: ["than", "to"], correct: "than" },
  ];

  // --- Handlers ---
  const checkFill = (id: number, expected: string) => {
    const val = fillAnswers[id]?.trim().toLowerCase() || "";
    const isCorrect = val === expected.toLowerCase() || val === "'d rather";
    setFillResults(prev => ({...prev, [id]: isCorrect}));
  };

  const checkTransform = (id: number, expected: string[]) => {
    const val = transformAnswers[id]?.trim().toLowerCase() || "";
    // Check if the user input matches any of the valid expected endings
    const isCorrect = expected.some(ex => val === ex.toLowerCase());
    setTransformResults(prev => ({...prev, [id]: isCorrect}));
  };

  const checkMC = (id: number, selected: string, correct: string) => {
    setMcAnswers(prev => ({...prev, [id]: selected}));
    setMcResults(prev => ({...prev, [id]: selected === correct}));
  };

  return (
    <div className="space-y-12 pb-12 animate-fadeIn">
      
      {/* A. Fill in the blanks */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">A</span>
          Fill in the blanks
        </h3>
        <p className="text-slate-500 mb-6 text-sm">Complete with the correct form of "would rather".</p>
        
        <div className="space-y-4">
          {fillQuestions.map(q => (
            <div key={q.id} className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="flex-grow font-medium text-slate-700 leading-8">
                {q.text.split("__________")[0]}
                <input 
                  type="text" 
                  className={`mx-2 border-b-2 bg-transparent outline-none text-center w-32 focus:border-indigo-500 transition-colors
                    ${fillResults[q.id] === true ? 'border-green-500 text-green-700' : 
                      fillResults[q.id] === false ? 'border-red-500 text-red-700' : 'border-slate-300'}`}
                  placeholder="type here"
                  value={fillAnswers[q.id] || ""}
                  onChange={(e) => {
                    setFillAnswers({...fillAnswers, [q.id]: e.target.value});
                    setFillResults({...fillResults, [q.id]: null}); // Reset status on type
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && checkFill(q.id, q.expected)}
                />
                {q.text.split("__________")[1]}
              </div>
              <button 
                onClick={() => checkFill(q.id, q.expected)}
                className="bg-indigo-600 text-white px-4 py-1 rounded text-sm hover:bg-indigo-700 transition-colors self-end sm:self-auto"
              >
                Check
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* B. Transform */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">B</span>
          Transform
        </h3>
        <p className="text-slate-500 mb-6 text-sm">Rewrite the phrases using <strong>would rather</strong>.</p>

        <div className="grid gap-6">
          {transformQuestions.map(q => (
            <div key={q.id} className="border border-slate-100 rounded-lg p-4 hover:bg-slate-50 transition-colors">
              <p className="text-slate-500 text-sm mb-2 italic">Original: "{q.original}"</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-slate-700">{q.start}</span>
                <input 
                  type="text"
                  className={`flex-grow border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200 
                    ${transformResults[q.id] === true ? 'border-green-500 bg-green-50' : 
                      transformResults[q.id] === false ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                  placeholder="..."
                  value={transformAnswers[q.id] || ""}
                  onChange={(e) => {
                    setTransformAnswers({...transformAnswers, [q.id]: e.target.value});
                    setTransformResults({...transformResults, [q.id]: null});
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && checkTransform(q.id, q.expected)}
                />
                <button 
                  onClick={() => checkTransform(q.id, q.expected)}
                  className="text-slate-400 hover:text-indigo-600 p-2"
                >
                  <CheckCircle size={20} />
                </button>
              </div>
              {transformResults[q.id] === false && (
                <p className="text-red-500 text-xs mt-2">Try again! Hint: {q.start} {q.expected[0]}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* C. Choose correct option */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">C</span>
          Multiple Choice
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {mcQuestions.map(q => (
            <div key={q.id} className="bg-slate-50 p-5 rounded-lg">
              <p className="font-medium text-slate-800 mb-4 text-lg">{q.q}</p>
              <div className="flex gap-3">
                {q.options.map(opt => {
                  const isSelected = mcAnswers[q.id] === opt;
                  const isCorrect = opt === q.correct;
                  const showResult = mcResults[q.id] !== undefined; // User has answered
                  
                  let btnClass = "flex-1 py-2 px-4 rounded border transition-all duration-200 ";
                  
                  if (showResult) {
                     if (isSelected && isCorrect) btnClass += "bg-green-600 text-white border-green-600";
                     else if (isSelected && !isCorrect) btnClass += "bg-red-500 text-white border-red-500";
                     else if (!isSelected && isCorrect) btnClass += "bg-green-100 text-green-800 border-green-200 border-dashed";
                     else btnClass += "bg-white text-slate-400 border-slate-200 opacity-50";
                  } else {
                    btnClass += "bg-white hover:bg-indigo-50 hover:border-indigo-300 border-slate-200 text-slate-700";
                  }

                  return (
                    <button 
                      key={opt}
                      className={btnClass}
                      onClick={() => !showResult && checkMC(q.id, opt, q.correct)}
                      disabled={showResult}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* D. Personal Production */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-xl shadow-lg text-white">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <span className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center text-sm">D</span>
          Your Turn
        </h3>
        <p className="text-indigo-100 mb-4 text-sm">Write 3 sentences about your own daily decisions using "would rather".</p>
        
        {!writingSubmitted ? (
          <div className="space-y-4">
            <textarea 
              className="w-full h-32 rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
              placeholder="1. I'd rather...&#10;2. She'd rather...&#10;3. We'd rather..."
              value={writingText}
              onChange={(e) => setWritingText(e.target.value)}
            ></textarea>
            <button 
              onClick={() => {
                if(writingText.length > 5) setWritingSubmitted(true);
              }}
              className="flex items-center gap-2 bg-white text-indigo-700 px-6 py-2 rounded-full font-bold hover:bg-indigo-50 transition-colors shadow-lg"
            >
              <Send size={16} /> Submit Writing
            </button>
          </div>
        ) : (
          <div className="bg-white/10 rounded-lg p-6 text-center animate-fadeIn">
            <div className="inline-block p-3 bg-green-500 rounded-full mb-3 shadow-lg">
              <CheckCircle size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-bold mb-2">Great Practice!</h4>
            <p className="text-indigo-100 mb-4">You've engaged with the grammar structure actively.</p>
            <button 
              onClick={() => { setWritingSubmitted(false); setWritingText(""); }}
              className="text-sm text-indigo-200 hover:text-white flex items-center gap-1 mx-auto"
            >
              <RefreshCw size={14} /> Start Over
            </button>
          </div>
        )}
      </section>

    </div>
  );
};

export default App;