import React, { useState } from 'react';
import { 
  BookOpen, 
  Layers, 
  PenTool, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Clock, 
  Coffee, 
  MessageSquare, 
  ArrowRight,
  BrainCircuit,
  Lightbulb,
  Briefcase
} from 'lucide-react';

// --- Types ---

type TabType = 'rules' | 'examples' | 'practice';

interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  feedback?: string;
}

// --- Components ---

const Header = () => (
  <header className="bg-indigo-700 text-white p-6 shadow-lg">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <BrainCircuit className="w-8 h-8 text-indigo-200" />
        <h1 className="text-3xl font-bold tracking-tight">Life Under Pressure</h1>
      </div>
      <p className="text-indigo-100 text-lg">
        Choosing between <span className="font-mono bg-indigo-800 px-2 py-0.5 rounded">Would Like</span> · <span className="font-mono bg-indigo-800 px-2 py-0.5 rounded">Would Prefer</span> · <span className="font-mono bg-indigo-800 px-2 py-0.5 rounded">Would Rather</span>
      </p>
    </div>
  </header>
);

const TabButton = ({ 
  active, 
  onClick, 
  label, 
  icon: Icon 
}: { 
  active: boolean; 
  onClick: () => void; 
  label: string; 
  icon: any 
}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all duration-200 border-b-4 ${
      active
        ? 'border-indigo-600 text-indigo-700 bg-indigo-50'
        : 'border-transparent text-slate-500 hover:text-indigo-600 hover:bg-slate-50'
    }`}
  >
    <Icon className="w-5 h-5" />
    {label}
  </button>
);

// --- SECCIÓN 1: REGLAS ---

const RuleCard = ({ title, usage, structure, example, color, icon: Icon }: any) => (
  <div className={`relative overflow-hidden rounded-xl border-l-8 bg-white shadow-md hover:shadow-xl transition-all p-6 ${color}`}>
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      <Icon className="w-8 h-8 opacity-20 text-slate-900" />
    </div>
    
    <div className="mb-4">
      <span className="text-xs font-uppercase tracking-wider text-slate-500 font-bold">USO PRINCIPAL</span>
      <p className="text-slate-700 mt-1">{usage}</p>
    </div>

    <div className="mb-4 bg-slate-100 p-3 rounded-lg border border-slate-200">
      <span className="text-xs font-uppercase tracking-wider text-slate-500 font-bold">ESTRUCTURA</span>
      <p className="text-indigo-700 font-mono font-bold mt-1">{structure}</p>
    </div>

    <div>
      <span className="text-xs font-uppercase tracking-wider text-slate-500 font-bold">EJEMPLO</span>
      <p className="text-slate-600 italic mt-1">"{example}"</p>
    </div>
  </div>
);

const CoreRuleSection = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
        <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
        <p className="text-blue-800">
          <strong>Idea Central:</strong> Las tres formas expresan preferencia, pero el matiz y la gramática cambian. Fíjate bien en si necesitan <em>"to"</em> o no.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <RuleCard 
          title="Would Like"
          usage="Deseos educados, pedidos formales y ofrecimientos concretos."
          structure="would like + TO + verb"
          example="I'd like to leave early."
          color="border-l-blue-500"
          icon={MessageSquare}
        />
        <RuleCard 
          title="Would Prefer"
          usage="Preferencias generales, comparativas o decisiones más pensadas."
          structure="would prefer + TO + verb"
          example="I'd prefer to wait here."
          color="border-l-purple-500"
          icon={Layers}
        />
        <RuleCard 
          title="Would Rather"
          usage="Elección directa, inmediata y contundente ante una situación."
          structure="would rather + VERB (base)"
          example="I'd rather go home."
          color="border-l-pink-500"
          icon={ArrowRight}
        />
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mt-6">
        <h4 className="font-bold text-red-700 flex items-center gap-2 mb-2">
          <AlertCircle className="w-5 h-5" />
          Errores Comunes
        </h4>
        <ul className="list-disc list-inside space-y-1 text-red-700 ml-2">
          <li>❌ I’d rather <span className="line-through">to</span> wait (Never use "to" with rather!)</li>
          <li>❌ I’d prefer <span className="line-through">waiting</span> (Usually "to" infinitive for specific preference)</li>
          <li>✅ I’d rather wait / I’d prefer to wait</li>
        </ul>
      </div>
    </div>
  );
};

// --- SECCIÓN 2: EJEMPLOS ---

const ScenarioCard = ({ scenario, icon: Icon, sentences }: any) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
    <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center gap-3">
      <div className="bg-white p-2 rounded-full shadow-sm text-indigo-600">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-bold text-slate-700">{scenario}</h3>
    </div>
    <div className="p-5 space-y-4">
      {sentences.map((item: any, idx: number) => (
        <div key={idx} className="flex flex-col">
          <span className="text-xs font-bold text-slate-400 uppercase mb-1">{item.type}</span>
          <p className="text-slate-800 font-medium border-l-2 border-indigo-200 pl-3 py-1">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const ExamplesSection = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Situaciones de Estrés</h2>
        <p className="text-slate-600">Observa cómo cambiamos la estructura según la formalidad y la urgencia.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ScenarioCard 
          scenario="The Deadline Crisis"
          icon={Clock}
          sentences={[
            { type: "Would Like (Polite Request)", text: "I'd like a moment to think clearly." },
            { type: "Would Prefer (Choice)", text: "I'd prefer to discuss this later when I'm calm." },
            { type: "Would Rather (Direct Choice)", text: "I'd rather finish this right now." }
          ]}
        />
        
        <ScenarioCard 
          scenario="Office Dynamics"
          icon={Briefcase}
          sentences={[
            { type: "Would Like (Desire)", text: "She'd like some help with the report." },
            { type: "Would Prefer (Preference)", text: "She'd prefer to email rather than call." },
            { type: "Would Rather (Strong Preference)", text: "She'd rather work alone today." }
          ]}
        />

        <ScenarioCard 
          scenario="Social Pressure"
          icon={Coffee}
          sentences={[
            { type: "Would Like (Soft Refusal)", text: "I'd like to go, but I'm too tired." },
            { type: "Would Prefer (Comparison)", text: "We'd prefer to stay home tonight." },
            { type: "Would Rather (Immediate)", text: "I'd rather not go to that party." }
          ]}
        />
      </div>

      <div className="bg-indigo-900 text-indigo-100 p-6 rounded-xl mt-8">
        <h3 className="text-xl font-bold mb-2">📌 Nota útil de contexto</h3>
        <p>
          En situaciones de "Life Under Pressure" (vida bajo presión), <strong>would rather</strong> suele usarse para tomar decisiones rápidas o cortar una discusión ("I'd rather not talk about it"). <strong>Would like</strong> se usa para mantener la educación a pesar del estrés.
        </p>
      </div>
    </div>
  );
};

// --- SECCIÓN 3: PRÁCTICA ---

const PracticeSection = () => {
  const [fillAnswers, setFillAnswers] = useState<{[key: number]: string}>({});
  const [fillResults, setFillResults] = useState<{[key: number]: boolean | null}>({});
  
  const [mcqAnswers, setMcqAnswers] = useState<{[key: number]: string}>({});
  const [mcqResults, setMcqResults] = useState<{[key: number]: boolean | null}>({});

  const [writingInputs, setWritingInputs] = useState<{[key: string]: string}>({
    like: '', prefer: '', rather: '', free: ''
  });
  const [showWritingModels, setShowWritingModels] = useState(false);

  // A. Fill in the blanks Data
  const fillQuestions = [
    { id: 1, text: "I __________ to speak to the manager.", options: ["would like", "would rather"], correct: "would like" },
    { id: 2, text: "She __________ tea to coffee.", options: ["would prefer", "would rather"], correct: "would prefer" },
    { id: 3, text: "We __________ leave now.", options: ["would like", "would rather"], correct: "would rather" },
    { id: 4, text: "He __________ some time alone.", options: ["would like", "would rather"], correct: "would like" },
  ];

  // C. MCQ Data
  const mcqQuestions = [
    { 
      id: 1, 
      q: "I’d ___ to take a break.", 
      options: [{ id: "a", text: "like" }, { id: "b", text: "rather" }], 
      correct: "a" 
    },
    { 
      id: 2, 
      q: "She’d prefer ___ by train.", 
      options: [{ id: "a", text: "travel" }, { id: "b", text: "to travel" }], 
      correct: "b" 
    },
    { 
      id: 3, 
      q: "We’d rather ___ now.", 
      options: [{ id: "a", text: "go" }, { id: "b", text: "to go" }], 
      correct: "a" 
    }
  ];

  const checkFill = (id: number, correct: string) => {
    const isCorrect = fillAnswers[id] === correct;
    setFillResults(prev => ({ ...prev, [id]: isCorrect }));
  };

  const checkMcq = (id: number, selected: string, correct: string) => {
    setMcqAnswers(prev => ({ ...prev, [id]: selected }));
    setMcqResults(prev => ({ ...prev, [id]: selected === correct }));
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      
      {/* Exercise A */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">A</span>
          Fill in the blanks
        </h3>
        <div className="space-y-4">
          {fillQuestions.map((q) => (
            <div key={q.id} className="flex flex-col sm:flex-row sm:items-center gap-3 border-b border-slate-100 pb-4 last:border-0">
              <p className="text-lg leading-relaxed text-slate-700 flex-grow">
                {q.text.split("__________")[0]}
                <select 
                  className={`mx-2 p-2 rounded border ${
                    fillResults[q.id] === true ? 'border-green-500 bg-green-50 text-green-700' : 
                    fillResults[q.id] === false ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
                  }`}
                  onChange={(e) => setFillAnswers({...fillAnswers, [q.id]: e.target.value})}
                  value={fillAnswers[q.id] || ""}
                >
                  <option value="">Choose...</option>
                  {q.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                {q.text.split("__________")[1]}
              </p>
              <button 
                onClick={() => checkFill(q.id, q.correct)}
                className="px-4 py-2 bg-slate-800 text-white rounded-md text-sm hover:bg-indigo-600 transition-colors"
              >
                Check
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Exercise B: Transform (Self Check) */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
         <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">B</span>
          Transform Interactions
        </h3>
        <p className="text-slate-500 mb-6 text-sm">Think about how you would rewrite these, then click to reveal the correct structure.</p>

        <div className="grid gap-4">
          {[
            { original: "I want a glass of water.", prompt: "Use 'would like'", answer: "I'd like a glass of water." },
            { original: "I think staying home is better than going out.", prompt: "Use 'prefer'", answer: "I'd prefer to stay home (than go out)." },
            { original: "I choose to work now, not later.", prompt: "Use 'rather'", answer: "I'd rather work now (than later)." }
          ].map((item, idx) => (
             <details key={idx} className="group bg-slate-50 rounded-lg p-4 cursor-pointer">
              <summary className="flex justify-between items-center font-medium text-slate-700 list-none">
                <div className="flex flex-col">
                   <span>{item.original}</span>
                   <span className="text-xs text-indigo-500 font-bold uppercase mt-1">➡ {item.prompt}</span>
                </div>
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-slate-200 text-green-700 font-bold">
                ✅ {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Exercise C: MCQ */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">C</span>
          Multiple Choice
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {mcqQuestions.map((q) => (
            <div key={q.id} className="bg-slate-50 p-4 rounded-lg">
              <p className="font-medium text-slate-800 mb-3 text-center">{q.q}</p>
              <div className="space-y-2">
                {q.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => checkMcq(q.id, opt.id, q.correct)}
                    className={`w-full py-2 px-3 rounded text-sm transition-all border ${
                      mcqAnswers[q.id] === opt.id
                        ? mcqResults[q.id]
                          ? 'bg-green-100 border-green-500 text-green-800'
                          : 'bg-red-100 border-red-500 text-red-800'
                        : 'bg-white border-slate-200 hover:border-indigo-300'
                    }`}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

       {/* Exercise D: Writing */}
       <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">D</span>
          Personal Production
        </h3>
        <p className="mb-4 text-slate-600">Escribe tus propias frases. Trata de usarlas en un contexto de "presión".</p>
        
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Would like</label>
            <input type="text" placeholder="I'd like..." className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Would prefer</label>
            <input type="text" placeholder="I'd prefer..." className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Would rather</label>
            <input type="text" placeholder="I'd rather..." className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          
          <button 
            onClick={() => setShowWritingModels(!showWritingModels)}
            className="mt-4 text-indigo-600 font-semibold hover:text-indigo-800 flex items-center gap-2 text-sm"
          >
            {showWritingModels ? "Hide Models" : "Show Model Answers"}
            <ArrowRight className="w-4 h-4" />
          </button>

          {showWritingModels && (
            <div className="bg-indigo-50 p-4 rounded-lg mt-2 text-sm text-indigo-800 italic space-y-2">
              <p>Model 1: "I'd like you to finish the report by 5 PM, please."</p>
              <p>Model 2: "I'd prefer to have the meeting tomorrow, today is too busy."</p>
              <p>Model 3: "I'd rather skip lunch and finish this work early."</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};


// --- MAIN APP ---

const LifeUnderPressureApp = () => {
  const [activeTab, setActiveTab] = useState<TabType>('rules');

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 pb-12">
      <Header />
      
      <main className="max-w-5xl mx-auto mt-6 px-4">
        {/* Navigation */}
        <div className="flex flex-wrap border-b border-slate-300 mb-8 bg-white rounded-t-lg shadow-sm">
          <TabButton 
            active={activeTab === 'rules'} 
            onClick={() => setActiveTab('rules')} 
            label="1. Core Rules" 
            icon={BookOpen} 
          />
          <TabButton 
            active={activeTab === 'examples'} 
            onClick={() => setActiveTab('examples')} 
            label="2. Examples" 
            icon={Layers} 
          />
          <TabButton 
            active={activeTab === 'practice'} 
            onClick={() => setActiveTab('practice')} 
            label="3. Practice" 
            icon={PenTool} 
          />
        </div>

        {/* Content Area */}
        <div className="min-h-[500px]">
          {activeTab === 'rules' && <CoreRuleSection />}
          {activeTab === 'examples' && <ExamplesSection />}
          {activeTab === 'practice' && <PracticeSection />}
        </div>
      </main>
    </div>
  );
};

export default LifeUnderPressureApp;