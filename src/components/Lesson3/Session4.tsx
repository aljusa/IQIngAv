import React, { useState } from 'react';
import { 
  Stethoscope, 
  Pill, 
  Activity, 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Thermometer, 
  Syringe, 
  ClipboardList, 
  Brain,
  Clock,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// --- Types & Interfaces ---

type TabId = 'rules' | 'vocab' | 'examples' | 'practice';

interface VocabItem {
  word: string;
  type: 'countable' | 'uncountable';
  icon: React.ReactNode;
  translation: string;
}

// --- Data ---

const vocabList: VocabItem[] = [
  { word: 'Doctor visits', type: 'countable', icon: <Stethoscope className="w-5 h-5" />, translation: 'Visitas al doctor' },
  { word: 'Medications', type: 'countable', icon: <Pill className="w-5 h-5" />, translation: 'Medicamentos' },
  { word: 'Symptoms', type: 'countable', icon: <Activity className="w-5 h-5" />, translation: 'Síntomas' },
  { word: 'Tests', type: 'countable', icon: <ClipboardList className="w-5 h-5" />, translation: 'Pruebas/Análisis' },
  { word: 'Vaccines', type: 'countable', icon: <Syringe className="w-5 h-5" />, translation: 'Vacunas' },
  { word: 'Check-ups', type: 'countable', icon: <CheckCircle2 className="w-5 h-5" />, translation: 'Chequeos' },
  { word: 'Medicine', type: 'uncountable', icon: <Pill className="w-5 h-5 text-blue-500" />, translation: 'Medicina (general)' },
  { word: 'Pain', type: 'uncountable', icon: <AlertCircle className="w-5 h-5" />, translation: 'Dolor' },
  { word: 'Sleep', type: 'uncountable', icon: <Clock className="w-5 h-5" />, translation: 'Sueño' },
  { word: 'Information', type: 'uncountable', icon: <BookOpen className="w-5 h-5" />, translation: 'Información' },
  { word: 'Prevention', type: 'uncountable', icon: <ShieldCheck className="w-5 h-5" />, translation: 'Prevención' },
  { word: 'Care', type: 'uncountable', icon: <Activity className="w-5 h-5" />, translation: 'Cuidado' },
];

// --- Components ---

const TabButton = ({ 
  id, 
  label, 
  activeTab, 
  onClick, 
  icon 
}: { 
  id: TabId; 
  label: string; 
  activeTab: TabId; 
  onClick: (id: TabId) => void;
  icon: React.ReactNode;
}) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
      activeTab === id
        ? 'border-teal-600 text-teal-700 bg-teal-50'
        : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
    }`}
  >
    {icon}
    {label}
  </button>
);

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
    {subtitle && <p className="text-slate-600 mt-1">{subtitle}</p>}
  </div>
);

// --- VIEW 1: Core Rules ---
const CoreRuleView = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <SectionTitle 
        title="1️⃣ Core Rule (Idea Central)" 
        subtitle="Cómo elegir entre More, Fewer y Less dependiendo del sustantivo." 
      />

      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1: MORE */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-emerald-800">MORE</h3>
            <span className="text-3xl">⬆️</span>
          </div>
          <p className="font-medium text-emerald-900 mb-2">Cantidad Mayor</p>
          <p className="text-sm text-emerald-700 mb-4">Funciona con TODO (Contable e Incontable).</p>
          <div className="bg-white p-3 rounded-lg border border-emerald-100 text-sm">
            <p>✅ More pills (Countable)</p>
            <p>✅ More pain (Uncountable)</p>
          </div>
        </div>

        {/* Card 2: FEWER */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-blue-800">FEWER</h3>
            <span className="text-3xl">⬇️</span>
          </div>
          <p className="font-medium text-blue-900 mb-2">Cantidad Menor</p>
          <p className="text-sm text-blue-700 mb-4">Solo para <strong>Sustantivos Contables Plurales</strong>.</p>
          <div className="bg-white p-3 rounded-lg border border-blue-100 text-sm">
            <p>✅ Fewer medications</p>
            <p className="text-red-500 line-through">❌ Fewer sleep</p>
          </div>
        </div>

        {/* Card 3: LESS */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-purple-800">LESS</h3>
            <span className="text-3xl">⬇️</span>
          </div>
          <p className="font-medium text-purple-900 mb-2">Cantidad Menor</p>
          <p className="text-sm text-purple-700 mb-4">Solo para <strong>Sustantivos Incontables</strong>.</p>
          <div className="bg-white p-3 rounded-lg border border-purple-100 text-sm">
            <p>✅ Less pain</p>
            <p className="text-red-500 line-through">❌ Less pills</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 p-4 rounded-lg flex items-start gap-3">
        <Brain className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-slate-800">La Clave Maestra</h4>
          <p className="text-slate-600">
            Antes de elegir la palabra, pregúntate: <em>¿Puedo contar esto con números (1, 2, 3...)?</em>
            <br/>
            Si es <strong>SÍ</strong> (doctores, pastillas) usa <strong>Fewer</strong>.
            <br/>
            Si es <strong>NO</strong> (tiempo, dolor, información) usa <strong>Less</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

// --- VIEW 2: Vocabulary ---
const VocabularyView = () => {
  const [filter, setFilter] = useState<'all' | 'countable' | 'uncountable'>('all');

  const filteredList = vocabList.filter(item => 
    filter === 'all' ? true : item.type === filter
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <SectionTitle 
        title="2️⃣ Vocabulary Focus" 
        subtitle="Identifica el tipo de sustantivo para aplicar la regla correcta." 
      />

      <div className="flex justify-center gap-2 mb-8">
        <button 
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'all' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'}`}
        >
          All Words
        </button>
        <button 
          onClick={() => setFilter('countable')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'countable' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}
        >
          Countable (Plural)
        </button>
        <button 
          onClick={() => setFilter('uncountable')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'uncountable' ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-600'}`}
        >
          Uncountable
        </button>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredList.map((item, idx) => (
          <div 
            key={idx} 
            className={`
              relative p-4 rounded-xl border-l-4 shadow-sm hover:shadow-md transition-all
              ${item.type === 'countable' ? 'border-l-blue-500 bg-white' : 'border-l-purple-500 bg-white'}
            `}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${item.type === 'countable' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">{item.word}</h3>
                  <p className="text-xs text-slate-500">{item.translation}</p>
                </div>
              </div>
            </div>
            <div className="mt-3 inline-block px-2 py-1 rounded text-xs font-bold uppercase tracking-wide bg-slate-100 text-slate-500">
              {item.type}
            </div>
            <div className="mt-2 text-xs text-slate-400">
              Usa: {item.type === 'countable' ? 'Fewer / More' : 'Less / More'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- VIEW 3: Examples ---
const ExamplesView = () => {
  const examples = [
    {
      text: "Preventive care leads to fewer doctor visits.",
      analysis: "Doctor visits = Countable Plural → FEWER",
      icon: <Stethoscope className="w-8 h-8 text-teal-600" />
    },
    {
      text: "Patients need more information about their health.",
      analysis: "Information = Uncountable (allows MORE for increase)",
      icon: <BookOpen className="w-8 h-8 text-teal-600" />
    },
    {
      text: "A healthy lifestyle causes less pain.",
      analysis: "Pain = Uncountable → LESS",
      icon: <Activity className="w-8 h-8 text-teal-600" />
    },
    {
      text: "Regular check-ups mean more prevention and fewer problems.",
      analysis: "Prevention (Uncountable) / Problems (Countable)",
      icon: <ShieldCheck className="w-8 h-8 text-teal-600" />
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
       <SectionTitle 
        title="3️⃣ Examples in Context" 
        subtitle="Observa cómo se aplican las reglas en oraciones médicas reales." 
      />
      
      <div className="space-y-4">
        {examples.map((ex, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm items-center">
            <div className="bg-teal-50 p-4 rounded-full flex-shrink-0">
              {ex.icon}
            </div>
            <div className="flex-grow text-center md:text-left">
              <p className="text-lg font-medium text-slate-800 mb-2">"{ex.text}"</p>
              <div className="inline-block bg-slate-100 px-3 py-1 rounded text-sm text-slate-600 font-mono">
                🔍 {ex.analysis}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 mt-8">
        <h4 className="font-bold text-orange-800 flex items-center gap-2">
          <AlertCircle className="w-5 h-5"/>
          Common Mistakes / Errores Comunes
        </h4>
        <ul className="mt-3 space-y-2 text-orange-900">
          <li className="flex items-center gap-2">
             ❌ "Less people" (Incorrecto) → ✅ "Fewer people" (Correcto - People es plural)
          </li>
          <li className="flex items-center gap-2">
             ❌ "Fewer pain" (Incorrecto) → ✅ "Less pain" (Correcto - Pain es incontable)
          </li>
        </ul>
      </div>
    </div>
  );
};

// --- VIEW 4: Practice ---
const PracticeView = () => {
  // State for Part A
  const [partA, setPartA] = useState({ q1: '', q2: '', q3: '', q4: '' });
  const [checkA, setCheckA] = useState(false);

  // State for Part B
  const [partB, setPartB] = useState({ q1: '', q2: '', q3: '' });

  // State for Part C (Reveal answer)
  const [revealC, setRevealC] = useState({ q1: false, q2: false });

  const validateA = (val: string, correct: string) => {
    if (!checkA) return 'border-slate-300';
    return val.toLowerCase().trim() === correct 
      ? 'border-green-500 bg-green-50 text-green-700' 
      : 'border-red-500 bg-red-50 text-red-700';
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500 max-w-3xl mx-auto">
      <SectionTitle 
        title="4️⃣ Guided Practice" 
        subtitle="Pon a prueba tus conocimientos." 
      />

      {/* Part A */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-lg mb-4 text-teal-700">A. Fill in the blanks (more / fewer / less)</h3>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span>1. Exercise often results in</span>
            <input 
              type="text" 
              placeholder="?" 
              value={partA.q1}
              onChange={(e) => setPartA({...partA, q1: e.target.value})}
              className={`p-2 border rounded w-32 outline-none transition-colors ${validateA(partA.q1, 'fewer')}`} 
            />
            <span>doctor visits.</span>
            {checkA && partA.q1.toLowerCase() !== 'fewer' && <span className="text-red-500 text-sm">(fewer)</span>}
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span>2. This treatment causes</span>
            <input 
              type="text" 
              placeholder="?" 
              value={partA.q2}
              onChange={(e) => setPartA({...partA, q2: e.target.value})}
              className={`p-2 border rounded w-32 outline-none transition-colors ${validateA(partA.q2, 'less')}`} 
            />
            <span>pain.</span>
            {checkA && partA.q2.toLowerCase() !== 'less' && <span className="text-red-500 text-sm">(less)</span>}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span>3. People need</span>
            <input 
              type="text" 
              placeholder="?" 
              value={partA.q3}
              onChange={(e) => setPartA({...partA, q3: e.target.value})}
              className={`p-2 border rounded w-32 outline-none transition-colors ${validateA(partA.q3, 'more')}`} 
            />
            <span>information about prevention.</span>
            {checkA && partA.q3.toLowerCase() !== 'more' && <span className="text-red-500 text-sm">(more)</span>}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span>4. A good routine creates</span>
            <input 
              type="text" 
              placeholder="?" 
              value={partA.q4}
              onChange={(e) => setPartA({...partA, q4: e.target.value})}
              className={`p-2 border rounded w-32 outline-none transition-colors ${validateA(partA.q4, 'fewer')}`} 
            />
            <span>health problems.</span>
            {checkA && partA.q4.toLowerCase() !== 'fewer' && <span className="text-red-500 text-sm">(fewer)</span>}
          </div>
        </div>
        <button 
          onClick={() => setCheckA(true)} 
          className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors"
        >
          Check Answers
        </button>
      </div>

      {/* Part B */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-lg mb-4 text-teal-700">B. Choose the correct option</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Q1 */}
          <div className="bg-slate-50 p-4 rounded-lg">
            <p className="font-medium mb-3 flex items-center gap-2"><Pill className="w-4 h-4"/> Medications</p>
            <div className="flex flex-col gap-2">
              {['more', 'fewer', 'less'].map((opt) => (
                <button 
                  key={opt}
                  onClick={() => setPartB({...partB, q1: opt})}
                  className={`px-3 py-1 rounded text-left text-sm border ${
                    partB.q1 === opt 
                      ? (opt === 'less' ? 'bg-red-100 border-red-300 text-red-800' : 'bg-green-100 border-green-300 text-green-800')
                      : 'border-slate-300 hover:bg-white'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {partB.q1 && <p className="text-xs mt-2 text-slate-500">{partB.q1 === 'less' ? '❌ Medications is countable.' : '✅ Correct usage.'}</p>}
          </div>

          {/* Q2 */}
          <div className="bg-slate-50 p-4 rounded-lg">
            <p className="font-medium mb-3 flex items-center gap-2"><AlertCircle className="w-4 h-4"/> Pain</p>
            <div className="flex flex-col gap-2">
              {['more', 'fewer', 'less'].map((opt) => (
                <button 
                  key={opt}
                  onClick={() => setPartB({...partB, q2: opt})}
                  className={`px-3 py-1 rounded text-left text-sm border ${
                    partB.q2 === opt 
                      ? (opt === 'fewer' ? 'bg-red-100 border-red-300 text-red-800' : 'bg-green-100 border-green-300 text-green-800')
                      : 'border-slate-300 hover:bg-white'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {partB.q2 && <p className="text-xs mt-2 text-slate-500">{partB.q2 === 'fewer' ? '❌ Pain is uncountable.' : '✅ Correct usage.'}</p>}
          </div>

           {/* Q3 */}
           <div className="bg-slate-50 p-4 rounded-lg">
            <p className="font-medium mb-3 flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Check-ups</p>
            <div className="flex flex-col gap-2">
              {['more', 'fewer', 'less'].map((opt) => (
                <button 
                  key={opt}
                  onClick={() => setPartB({...partB, q3: opt})}
                  className={`px-3 py-1 rounded text-left text-sm border ${
                    partB.q3 === opt 
                      ? (opt === 'less' ? 'bg-red-100 border-red-300 text-red-800' : 'bg-green-100 border-green-300 text-green-800')
                      : 'border-slate-300 hover:bg-white'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {partB.q3 && <p className="text-xs mt-2 text-slate-500">{partB.q3 === 'less' ? '❌ Check-ups is countable.' : '✅ Correct usage.'}</p>}
          </div>
        </div>
      </div>

      {/* Part C */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-lg mb-4 text-teal-700">C. Transform the sentence</h3>
        
        <div className="space-y-6">
          <div>
            <p className="text-slate-800 mb-2">1. People should reduce stress and increase exercise.</p>
            <div className="flex items-center gap-2 text-slate-500 italic mb-2">
               <ArrowRight className="w-4 h-4"/> People should have...
            </div>
            <textarea className="w-full p-2 border border-slate-300 rounded mb-2 h-20" placeholder="Type your sentence here..."></textarea>
            <button 
              onClick={() => setRevealC({...revealC, q1: !revealC.q1})}
              className="text-teal-600 text-sm font-medium hover:underline"
            >
              {revealC.q1 ? 'Hide Answer' : 'Show Suggested Answer'}
            </button>
            {revealC.q1 && (
              <div className="mt-2 bg-green-50 p-3 rounded text-green-800 text-sm">
                <strong>Option:</strong> People should have <u>less stress</u> and <u>more exercise</u>.
              </div>
            )}
          </div>

          <div>
            <p className="text-slate-800 mb-2">2. This habit causes many health problems.</p>
            <div className="flex items-center gap-2 text-slate-500 italic mb-2">
               <ArrowRight className="w-4 h-4"/> This habit causes...
            </div>
            <textarea className="w-full p-2 border border-slate-300 rounded mb-2 h-20" placeholder="Type your sentence here..."></textarea>
            <button 
              onClick={() => setRevealC({...revealC, q2: !revealC.q2})}
              className="text-teal-600 text-sm font-medium hover:underline"
            >
              {revealC.q2 ? 'Hide Answer' : 'Show Suggested Answer'}
            </button>
            {revealC.q2 && (
              <div className="mt-2 bg-green-50 p-3 rounded text-green-800 text-sm">
                <strong>Option:</strong> This habit causes <u>more health problems</u>.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Part D */}
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm text-white">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5 text-teal-400" />
          D. Personal Production
        </h3>
        <p className="text-slate-300 text-sm mb-4">
          Think about your own habits. Write sentences mentally or in your notebook using:
          <br/>
          • At least one with <strong>more</strong>
          <br/>
          • One with <strong>fewer</strong>
          <br/>
          • One with <strong>less</strong>
        </p>
        <div className="bg-slate-700/50 p-4 rounded text-sm italic text-slate-400">
          Example: "I need to drink more water so I have fewer headaches."
        </div>
      </div>

    </div>
  );
};

// --- MAIN APP ---

const MedicalGrammarApp = () => {
  const [activeTab, setActiveTab] = useState<TabId>('rules');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="bg-teal-600 p-2 rounded-lg text-white">
                <Thermometer className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-800 leading-tight">Medical Habits & Prevention</h1>
                <p className="text-xs text-slate-500 font-medium">Grammar Focus: Quantifiers</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex space-x-2">
            <TabButton 
              id="rules" 
              label="1. Rules" 
              activeTab={activeTab} 
              onClick={setActiveTab} 
              icon={<Brain className="w-4 h-4"/>}
            />
            <TabButton 
              id="vocab" 
              label="2. Vocabulary" 
              activeTab={activeTab} 
              onClick={setActiveTab} 
              icon={<BookOpen className="w-4 h-4"/>}
            />
            <TabButton 
              id="examples" 
              label="3. Examples" 
              activeTab={activeTab} 
              onClick={setActiveTab} 
              icon={<Activity className="w-4 h-4"/>}
            />
            <TabButton 
              id="practice" 
              label="4. Practice" 
              activeTab={activeTab} 
              onClick={setActiveTab} 
              icon={<CheckCircle2 className="w-4 h-4"/>}
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/50 min-h-[500px]">
          {activeTab === 'rules' && <CoreRuleView />}
          {activeTab === 'vocab' && <VocabularyView />}
          {activeTab === 'examples' && <ExamplesView />}
          {activeTab === 'practice' && <PracticeView />}
        </div>
      </main>
    </div>
  );
};

export default MedicalGrammarApp;