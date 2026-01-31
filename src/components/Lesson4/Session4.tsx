import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Star, 
  PenTool, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  Volume2, 
  Lightbulb, 
  MessageCircle,
  Trophy,
  RefreshCcw
} from 'lucide-react';

// --- Types ---

type TabType = 'rule' | 'examples' | 'exercises';

interface ExerciseStatus {
  [key: number]: 'idle' | 'correct' | 'incorrect';
}

// --- Component: Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('rule');

  const renderContent = () => {
    switch (activeTab) {
      case 'rule':
        return <CoreRuleView />;
      case 'examples':
        return <ExamplesView />;
      case 'exercises':
        return <ExercisesView />;
      default:
        return <CoreRuleView />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-indigo-600 text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">English Grammar</h1>
            <p className="text-indigo-100 mt-1">Section 4 – Places & Experiences</p>
          </div>
          <div className="mt-4 md:mt-0 bg-indigo-700 px-4 py-2 rounded-full flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-300 fill-current" />
            <span className="font-semibold">Intensifiers: VERY vs REALLY</span>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="w-full max-w-4xl mt-6 px-4">
        <div className="flex bg-white rounded-xl shadow-sm p-1">
          <button
            onClick={() => setActiveTab('rule')}
            className={`flex-1 py-3 px-4 rounded-lg text-sm md:text-base font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'rule' 
                ? 'bg-indigo-100 text-indigo-700 shadow-sm' 
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            1. Core Rule
          </button>
          <button
            onClick={() => setActiveTab('examples')}
            className={`flex-1 py-3 px-4 rounded-lg text-sm md:text-base font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'examples' 
                ? 'bg-indigo-100 text-indigo-700 shadow-sm' 
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <Lightbulb className="w-5 h-5" />
            2. Examples
          </button>
          <button
            onClick={() => setActiveTab('exercises')}
            className={`flex-1 py-3 px-4 rounded-lg text-sm md:text-base font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'exercises' 
                ? 'bg-indigo-100 text-indigo-700 shadow-sm' 
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <PenTool className="w-5 h-5" />
            3. Exercises
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="w-full max-w-4xl mt-6 mb-12 px-4 flex-grow">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 min-h-[500px] overflow-hidden">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-200 py-6 text-center text-slate-500 text-sm">
        <p>Interactive English Lesson • Created with React & Tailwind</p>
      </footer>
    </div>
  );
}

// --- Tab 1: Core Rule ---

function CoreRuleView() {
  return (
    <div className="p-8 animate-fade-in">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">The Core Rule</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Usamos <strong>very</strong> y <strong>really</strong> para intensificar adjetivos que describen lugares y experiencias.
          Ambos se colocan <em>antes</em> del adjetivo.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* VERY Card */}
        <div className="bg-blue-50 border-2 border-blue-100 rounded-xl p-6 relative overflow-hidden group hover:border-blue-300 transition-all">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <BookOpen size={100} />
          </div>
          <h3 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2">
            <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">Neutral</span>
            VERY
          </h3>
          <p className="text-slate-700 mb-4 font-medium">Descriptivo y Neutral</p>
          <p className="text-sm text-slate-600 italic">
            "The museum is <strong>very</strong> interesting."
          </p>
          <div className="mt-4 bg-white/60 p-3 rounded-lg text-sm text-blue-800">
            Se usa para dar información objetiva sobre algo.
          </div>
        </div>

        {/* REALLY Card */}
        <div className="bg-amber-50 border-2 border-amber-100 rounded-xl p-6 relative overflow-hidden group hover:border-amber-300 transition-all">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Star size={100} />
          </div>
          <h3 className="text-xl font-bold text-amber-700 mb-2 flex items-center gap-2">
            <span className="bg-amber-200 text-amber-800 px-2 py-1 rounded text-sm">Emotional</span>
            REALLY
          </h3>
          <p className="text-slate-700 mb-4 font-medium">Reacción o Experiencia Personal</p>
          <p className="text-sm text-slate-600 italic">
            "The concert was <strong>really</strong> amazing!"
          </p>
          <div className="mt-4 bg-white/60 p-3 rounded-lg text-sm text-amber-800">
            Expresa entusiasmo, sorpresa o una opinión fuerte.
          </div>
        </div>
      </div>

      {/* Structure Box */}
      <div className="bg-slate-800 text-white rounded-xl p-6 text-center">
        <h4 className="text-lg font-semibold mb-4 text-indigo-300">Structure Formula</h4>
        <div className="flex items-center justify-center gap-4 text-xl md:text-2xl font-mono">
          <span className="bg-slate-700 px-4 py-2 rounded-lg text-indigo-300">Very / Really</span>
          <span>+</span>
          <span className="bg-slate-700 px-4 py-2 rounded-lg text-pink-300">Adjective</span>
        </div>
        <div className="mt-4 text-sm text-slate-400 flex items-center justify-center gap-2">
          <XCircle size={16} className="text-red-400" /> Don't say: "Really very amazing"
        </div>
      </div>
    </div>
  );
}

// --- Tab 2: Examples ---

function ExamplesView() {
  const examples = [
    { text: "The city is very beautiful.", type: "neutral", icon: "🏙️" },
    { text: "The hotel was really comfortable.", type: "personal", icon: "🛏️" },
    { text: "The trip was very long.", type: "neutral", icon: "🚌" },
    { text: "The concert was really amazing.", type: "personal", icon: "🎸" },
  ];

  return (
    <div className="p-8 animate-fade-in h-full flex flex-col">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Examples in Context</h2>
      
      <div className="grid gap-4">
        {examples.map((ex, idx) => (
          <div 
            key={idx} 
            className={`flex items-center p-4 rounded-xl border-l-4 transition-all hover:translate-x-1 shadow-sm ${
              ex.type === 'neutral' 
                ? 'bg-blue-50 border-blue-500' 
                : 'bg-amber-50 border-amber-500'
            }`}
          >
            <div className="text-3xl mr-4">{ex.icon}</div>
            <div className="flex-grow">
              <p className="text-lg font-medium text-slate-800">
                {ex.text.split(' ').map((word, i) => {
                  if (word.toLowerCase() === 'very' || word.toLowerCase() === 'really') {
                    return <span key={i} className={`font-bold ${ex.type === 'neutral' ? 'text-blue-600' : 'text-amber-600'}`}>{word} </span>
                  }
                  return <span key={i}>{word} </span>
                })}
              </p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-bold">
                {ex.type === 'neutral' ? 'Descriptive (Very)' : 'Personal Experience (Really)'}
              </p>
            </div>
            <button className="p-2 rounded-full hover:bg-black/5 text-slate-400 hover:text-indigo-600 transition-colors" title="Listen (Demo)">
              <Volume2 size={20} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-indigo-50 p-4 rounded-lg flex items-start gap-3">
        <div className="bg-indigo-100 p-2 rounded-full text-indigo-600">
          <Lightbulb size={24} />
        </div>
        <div>
          <h4 className="font-bold text-indigo-900">Nota Útil</h4>
          <p className="text-indigo-800 text-sm">
            Recuerda que ambos significan "muy" o "realmente", pero el matiz cambia. 
            Si dices "It is <strong>really</strong> hot", estás expresando que tú sientes mucho calor. 
            Si dices "It is <strong>very</strong> hot", es un dato sobre la temperatura.
          </p>
        </div>
      </div>
    </div>
  );
}

// --- Tab 3: Exercises ---

function ExercisesView() {
  const [currentSection, setCurrentSection] = useState<'A' | 'B' | 'C' | 'D'>('A');

  return (
    <div className="flex flex-col md:flex-row h-full">
      {/* Sidebar for Exercises */}
      <div className="w-full md:w-48 bg-slate-50 border-r border-slate-100 p-4 flex md:flex-col gap-2 overflow-x-auto">
        {(['A', 'B', 'C', 'D'] as const).map((section) => (
          <button
            key={section}
            onClick={() => setCurrentSection(section)}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
              currentSection === section
                ? 'bg-white text-indigo-600 shadow-md border border-indigo-100'
                : 'text-slate-500 hover:bg-white hover:text-slate-700'
            }`}
          >
            <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs ${currentSection === section ? 'bg-indigo-100' : 'bg-slate-200'}`}>
              {section}
            </span>
            <span>Part {section}</span>
          </button>
        ))}
      </div>

      {/* Exercise Content Area */}
      <div className="flex-grow p-6 md:p-8 animate-fade-in">
        {currentSection === 'A' && <ExerciseA />}
        {currentSection === 'B' && <ExerciseB />}
        {currentSection === 'C' && <ExerciseC />}
        {currentSection === 'D' && <ExerciseD />}
      </div>
    </div>
  );
}

// --- Exercise Components ---

// Exercise A: Fill in the blanks
function ExerciseA() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [status, setStatus] = useState<ExerciseStatus>({});

  const questions = [
    { id: 1, text: "The restaurant is ___ expensive.", valid: ['very', 'really'] },
    { id: 2, text: "The beach was ___ crowded.", valid: ['very', 'really'] },
    { id: 3, text: "The museum is ___ interesting.", valid: ['very', 'really'] },
    { id: 4, text: "Our vacation was ___ relaxing.", valid: ['very', 'really'] },
  ];

  const checkAnswer = (id: number, validOptions: string[]) => {
    const val = answers[id]?.toLowerCase().trim();
    if (!val) return;
    
    if (validOptions.includes(val)) {
      setStatus(prev => ({ ...prev, [id]: 'correct' }));
    } else {
      setStatus(prev => ({ ...prev, [id]: 'incorrect' }));
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">A. Fill in the blanks</h3>
      <p className="text-slate-500 mb-6">Completa las frases con <strong>very</strong> o <strong>really</strong>.</p>
      
      <div className="space-y-4">
        {questions.map((q) => (
          <div key={q.id} className="bg-white border border-slate-200 p-4 rounded-lg flex items-center justify-between shadow-sm">
            <div className="flex-grow">
              <span className="text-lg">
                {q.text.split('___')[0]}
                <input
                  type="text"
                  className={`mx-2 border-b-2 outline-none w-24 text-center font-bold text-indigo-600 transition-colors ${
                    status[q.id] === 'correct' ? 'border-green-500 bg-green-50' : 
                    status[q.id] === 'incorrect' ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-indigo-500'
                  }`}
                  value={answers[q.id] || ''}
                  onChange={(e) => {
                    setAnswers(prev => ({ ...prev, [q.id]: e.target.value }));
                    setStatus(prev => ({ ...prev, [q.id]: 'idle' }));
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && checkAnswer(q.id, q.valid)}
                  placeholder="?"
                  disabled={status[q.id] === 'correct'}
                />
                {q.text.split('___')[1]}
              </span>
            </div>
            
            <button
              onClick={() => checkAnswer(q.id, q.valid)}
              disabled={status[q.id] === 'correct'}
              className={`p-2 rounded-full transition-all ${
                status[q.id] === 'correct' ? 'bg-green-100 text-green-600' :
                status[q.id] === 'incorrect' ? 'bg-red-100 text-red-600' :
                'bg-slate-100 text-slate-400 hover:bg-indigo-100 hover:text-indigo-600'
              }`}
            >
              {status[q.id] === 'correct' ? <CheckCircle size={20} /> : 
               status[q.id] === 'incorrect' ? <XCircle size={20} /> : <ArrowRight size={20} />}
            </button>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-400 mt-4 text-center">Tip: Press Enter to check automatically.</p>
    </div>
  );
}

// Exercise B: Choose correct option
function ExerciseB() {
  const [selections, setSelections] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    { id: 1, text: "The trip was (very / really) tiring.", options: ["very", "really"], correct: "both" }, // Context dependent, but techincally both work grammatically.
    { id: 2, text: "This place is (very / really) quiet.", options: ["very", "really"], correct: "both" },
    { id: 3, text: "The experience was (very / really) unforgettable.", options: ["very", "really"], correct: "really" }, // Unforgettable is strong, prefers really.
  ];
  
  // Note: For #3, "Very unforgettable" is often considered awkward because unforgettable is an absolute adjective, 
  // so "really" or "absolutely" is preferred. For this app, let's treat "really" as best answer for #3.

  const handleSelect = (qId: number, option: string) => {
    setSelections(prev => ({ ...prev, [qId]: option }));
    setShowResult(false);
  };

  const checkAll = () => {
    setShowResult(true);
  };

  return (
    <div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">B. Choose the correct option</h3>
      <p className="text-slate-500 mb-6">Elige la mejor opción para cada frase.</p>

      <div className="space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <p className="text-lg mb-3 text-slate-700">
              {q.text.replace('(very / really)', '___________')}
            </p>
            <div className="flex gap-4">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelect(q.id, opt)}
                  className={`px-4 py-2 rounded-lg border-2 font-medium capitalize transition-all ${
                    selections[q.id] === opt
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                      : 'border-slate-200 hover:border-indigo-300 text-slate-600'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {showResult && selections[q.id] && (
              <div className={`mt-3 text-sm flex items-center gap-2 ${
                (q.correct === 'both' || selections[q.id] === q.correct) ? 'text-green-600' : 'text-amber-600'
              }`}>
                {(q.correct === 'both' || selections[q.id] === q.correct) 
                  ? <><CheckCircle size={16} /> Correct!</>
                  : <><Lightbulb size={16} /> While possible, '{q.correct}' fits better here.</>
                }
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-end">
        <button 
          onClick={checkAll}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Check Answers
        </button>
      </div>
    </div>
  );
}

// Exercise C: Transform
function ExerciseC() {
  const [inputs, setInputs] = useState<{ [key: number]: string }>({});
  const [status, setStatus] = useState<ExerciseStatus>({});

  const questions = [
    { id: 1, original: "The place is beautiful." },
    { id: 2, original: "The experience was exciting." },
    { id: 3, original: "The hotel is comfortable." },
  ];

  const validate = (id: number, original: string) => {
    const userVal = inputs[id]?.toLowerCase().trim();
    if (!userVal) return;

    // Remove period for checking
    const cleanUser = userVal.replace(/\.$/, '');
    
    // Check if they kept the structure but added really or very
    const adjective = original.split(' ').pop()?.replace('.', '').toLowerCase();
    
    const hasIntensifier = cleanUser.includes('very') || cleanUser.includes('really');
    const hasAdjective = cleanUser.includes(adjective || '');

    if (hasIntensifier && hasAdjective && userVal.length > original.length) {
      setStatus(prev => ({ ...prev, [id]: 'correct' }));
    } else {
      setStatus(prev => ({ ...prev, [id]: 'incorrect' }));
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">C. Transform</h3>
      <p className="text-slate-500 mb-6">Reescribe la frase agregando <strong>very</strong> o <strong>really</strong>.</p>

      <div className="space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="bg-slate-50 p-4 rounded-lg">
            <p className="text-slate-700 font-medium mb-2">"{q.original}"</p>
            <div className="relative">
              <input
                type="text"
                className={`w-full p-3 pr-10 rounded-lg border focus:ring-2 outline-none transition-all ${
                  status[q.id] === 'correct' ? 'border-green-500 ring-green-100' :
                  status[q.id] === 'incorrect' ? 'border-red-300 ring-red-100' :
                  'border-slate-300 focus:ring-indigo-100 focus:border-indigo-400'
                }`}
                placeholder="Type the new sentence..."
                value={inputs[q.id] || ''}
                onChange={(e) => {
                  setInputs(prev => ({ ...prev, [q.id]: e.target.value }));
                  setStatus(prev => ({ ...prev, [q.id]: 'idle' }));
                }}
              />
              <div className="absolute right-3 top-3 text-slate-400">
                {status[q.id] === 'correct' ? <CheckCircle className="text-green-500" /> :
                 status[q.id] === 'incorrect' ? <XCircle className="text-red-400" /> :
                 <PenTool size={18} />}
              </div>
            </div>
            {status[q.id] === 'incorrect' && (
              <p className="text-xs text-red-500 mt-1">Make sure to include the intensifier and the full sentence.</p>
            )}
            <div className="mt-2 text-right">
              <button 
                onClick={() => validate(q.id, q.original)}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 uppercase tracking-wide"
              >
                Check
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Exercise D: Write (Journaling)
function ExerciseD() {
  const [entries, setEntries] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState("");

  const addEntry = () => {
    if (!currentInput.trim()) return;
    setEntries([...entries, currentInput]);
    setCurrentInput("");
  };

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-xl font-bold text-slate-800 mb-2">D. Write your own</h3>
      <p className="text-slate-500 mb-6">Escribe frases sobre lugares que has visitado o experiencias usando <strong>very</strong> o <strong>really</strong>.</p>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addEntry()}
          placeholder="E.g., Paris was really crowded..."
          className="flex-grow p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
        <button
          onClick={addEntry}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          <Trophy size={18} /> Add
        </button>
      </div>

      <div className="flex-grow bg-slate-50 rounded-xl p-4 border border-dashed border-slate-300 overflow-y-auto min-h-[200px]">
        {entries.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-400">
            <MessageCircle size={48} className="mb-2 opacity-50" />
            <p>Your sentences will appear here...</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {entries.map((entry, idx) => (
              <li key={idx} className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-indigo-400 animate-slide-up flex justify-between items-center group">
                <span>{entry}</span>
                <button 
                   onClick={() => setEntries(entries.filter((_, i) => i !== idx))}
                   className="text-slate-300 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <XCircle size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="mt-4 flex justify-between items-center text-sm text-slate-500">
         <span>Total sentences: {entries.length}</span>
         {entries.length >= 5 && <span className="text-green-600 font-bold flex items-center gap-1"><Star size={14} fill="currentColor"/> Goal Reached!</span>}
      </div>
    </div>
  );
}