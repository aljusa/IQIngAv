import React, { useState } from 'react';
import { BookOpen, CheckCircle, Clock, ArrowRight, Brain, PenTool, Layout, Check, X, ChevronRight, RefreshCw } from 'lucide-react';

// --- Types ---
type Tab = 'intro' | 'theory' | 'practice' | 'summary';

interface QuizState {
  ex1_1: string;
  ex1_2: string;
  ex1_3: string;
  ex2_1: string;
  ex2_2: string;
  ex2_3: string;
  ex3_text: string;
}

// --- Components ---

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('intro');
  const [quizState, setQuizState] = useState<QuizState>({
    ex1_1: '', ex1_2: '', ex1_3: '',
    ex2_1: '', ex2_2: '', ex2_3: '',
    ex3_text: ''
  });
  const [showResults, setShowResults] = useState(false);

  // Navigation Helper
  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Content Rendering
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header */}
      <header className="bg-indigo-700 text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-indigo-200 text-sm font-semibold uppercase tracking-wider mb-2">
            <Clock size={16} /> Lección Única • American English
          </div>
          <h1 className="text-3xl font-bold mb-2">Elecciones Inmediatas en Situaciones Estresantes</h1>
          <p className="text-indigo-100 opacity-90">Tomar decisiones rápidas con "Would rather"</p>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="sticky top-0 z-10 bg-white shadow-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto flex overflow-x-auto no-scrollbar">
          <TabButton 
            active={activeTab === 'intro'} 
            onClick={() => handleTabChange('intro')} 
            icon={<Layout size={18} />} 
            label="Introducción" 
          />
          <TabButton 
            active={activeTab === 'theory'} 
            onClick={() => handleTabChange('theory')} 
            icon={<BookOpen size={18} />} 
            label="Lección" 
          />
          <TabButton 
            active={activeTab === 'practice'} 
            onClick={() => handleTabChange('practice')} 
            icon={<PenTool size={18} />} 
            label="Ejercicios" 
          />
          <TabButton 
            active={activeTab === 'summary'} 
            onClick={() => handleTabChange('summary')} 
            icon={<Brain size={18} />} 
            label="Resumen" 
          />
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto p-6 min-h-[600px]">
        {activeTab === 'intro' && <IntroSection onNext={() => handleTabChange('theory')} />}
        {activeTab === 'theory' && <TheorySection onNext={() => handleTabChange('practice')} />}
        {activeTab === 'practice' && (
          <PracticeSection 
            quizState={quizState} 
            setQuizState={setQuizState} 
            showResults={showResults} 
            setShowResults={setShowResults}
            onNext={() => handleTabChange('summary')}
          />
        )}
        {activeTab === 'summary' && <SummarySection />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>© 2024 English Learning Module. Designed for educational purposes.</p>
      </footer>
    </div>
  );
};

// --- Sub-Components ---

const TabButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap
      ${active 
        ? 'text-indigo-700 border-b-2 border-indigo-700 bg-indigo-50/50' 
        : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-50'
      }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const IntroSection: React.FC<{ onNext: () => void }> = ({ onNext }) => (
  <div className="animate-fade-in space-y-8">
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
        <div className="p-2 bg-indigo-100 text-indigo-700 rounded-lg"><Brain size={24} /></div>
        Objetivo de la lección
      </h2>
      <p className="text-lg text-slate-700 leading-relaxed">
        Aprender a usar la estructura <strong className="text-indigo-700 bg-indigo-50 px-1 rounded">would rather</strong> para expresar elecciones inmediatas y directas en inglés, especialmente en situaciones de cansancio, presión de tiempo o estrés, comparando acciones de forma clara.
      </p>
    </div>

    <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
      <h3 className="text-xl font-bold text-orange-800 mb-3">Contexto: Presión y Cansancio</h3>
      <p className="text-slate-700 mb-4">
        En momentos de cansancio o presión, las personas suelen decidir qué hacer en ese instante. En inglés, una estructura muy común para expresar este tipo de elección inmediata es <em>would rather</em>.
      </p>
      <div className="flex items-start gap-3 bg-white/50 p-4 rounded-lg">
        <div className="min-w-[4px] h-full bg-orange-400 rounded-full"></div>
        <p className="text-sm text-slate-600 italic">
          "Esta forma es directa y se usa cuando una acción es claramente preferida sobre otra en el momento."
        </p>
      </div>
    </div>

    <div className="flex justify-end">
      <button onClick={onNext} className="btn-primary">
        Comenzar Lección <ArrowRight size={20} />
      </button>
    </div>
  </div>
);

const TheorySection: React.FC<{ onNext: () => void }> = ({ onNext }) => (
  <div className="animate-fade-in space-y-10">
    
    {/* Section 1 */}
    <section>
      <SectionHeader number="1" title="¿Qué significa would rather?" />
      <div className="prose text-slate-600 max-w-none">
        <p className="mb-4">
          <span className="font-bold text-indigo-700">Would rather</span> se usa para expresar una preferencia inmediata entre acciones.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <ComparisonCard title="would like" desc="Deseo general" icon="🌟" />
          <ComparisonCard title="would prefer" desc="Preferencia pensada" icon="🤔" />
          <ComparisonCard title="would rather" desc="Decisión rápida del momento" icon="⚡" highlight />
        </div>
        <ExampleBox sentence="I would rather rest." explanation="Aquí, la persona expresa lo que prefiere hacer AHORA MISMO." />
      </div>
    </section>

    <hr className="border-slate-200" />

    {/* Section 2 */}
    <section>
      <SectionHeader number="2" title="Uso de would rather + base verb" />
      <div className="bg-slate-100 p-4 rounded-lg border-l-4 border-indigo-500 mb-6">
        <p className="font-mono text-lg text-indigo-900">
          would rather + <span className="font-bold bg-yellow-200 px-1">base verb</span>
        </p>
        <p className="text-sm text-slate-500 mt-1">* El verbo va siempre sin "to".</p>
      </div>
      <ul className="space-y-2">
        <ListItem text="I would rather sleep." />
        <ListItem text="He would rather walk." />
        <ListItem text="They would rather stay home." />
      </ul>
    </section>

    <hr className="border-slate-200" />

    {/* Section 3 */}
    <section>
      <SectionHeader number="3" title="Comparar acciones (than)" />
      <p className="text-slate-600 mb-4">Para comparar dos acciones, se usa <strong>than</strong> entre ellas.</p>
      
      <div className="bg-slate-100 p-4 rounded-lg border-l-4 border-indigo-500 mb-6 overflow-x-auto">
        <p className="font-mono text-lg text-indigo-900 whitespace-nowrap">
          would rather + <span className="font-bold">verb 1</span> + <span className="text-red-500 font-bold">than</span> + <span className="font-bold">verb 2</span>
        </p>
      </div>

      <div className="grid gap-3">
        <ExampleCard en="I would rather sleep than watch TV." es="Prefiero dormir que ver TV." />
        <ExampleCard en="He would rather walk than drive." es="Prefiere caminar que conducir." />
        <ExampleCard en="She would rather rest than study late." es="Prefiere descansar que estudiar tarde." />
      </div>
    </section>

    <hr className="border-slate-200" />

    {/* Section 4 */}
    <section>
      <SectionHeader number="4" title="Contextos de estrés inmediato" />
      <p className="text-slate-600 mb-4">
        Estas expresiones reflejan decisiones prácticas en momentos de presión o agotamiento.
      </p>
      <div className="bg-red-50 border border-red-100 rounded-xl p-5 space-y-4">
        <StressExample 
          situation="After a long day..." 
          response="I would rather relax." 
        />
        <StressExample 
          situation="Under pressure..." 
          response="He would rather finish quickly." 
        />
        <StressExample 
          situation="When I am tired..." 
          response="I would rather sleep than go out." 
        />
      </div>
    </section>

    <div className="flex justify-end pt-4">
      <button onClick={onNext} className="btn-primary">
        Ir a los Ejercicios <ArrowRight size={20} />
      </button>
    </div>
  </div>
);

const PracticeSection: React.FC<{ 
  quizState: QuizState; 
  setQuizState: React.Dispatch<React.SetStateAction<QuizState>>;
  showResults: boolean;
  setShowResults: (v: boolean) => void;
  onNext: () => void;
}> = ({ quizState, setQuizState, showResults, setShowResults, onNext }) => {

  const checkAnswer = (userAns: string, correct: string) => {
    if (!showResults) return 'neutral';
    return userAns.toLowerCase().trim() === correct.toLowerCase() ? 'correct' : 'incorrect';
  };

  const handleInputChange = (field: keyof QuizState, value: string) => {
    setQuizState(prev => ({ ...prev, [field]: value }));
    if (showResults) setShowResults(false); // Reset feedback on edit
  };

  return (
    <div className="animate-fade-in space-y-8 pb-12">
      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
        <h2 className="text-xl font-bold text-indigo-900">Zona de Práctica</h2>
        <p className="text-indigo-700">Pon a prueba lo aprendido sobre decisiones inmediatas.</p>
      </div>

      {/* Exercise 1 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">1</span>
          Completa la oración
        </h3>
        <p className="text-sm text-slate-500 mb-4">Escribe "would rather" en los espacios.</p>
        
        <div className="space-y-3">
          <FillBlank 
            before="I" 
            after="sleep after a long day." 
            value={quizState.ex1_1} 
            onChange={(v) => handleInputChange('ex1_1', v)} 
            status={checkAnswer(quizState.ex1_1, 'would rather')}
          />
          <FillBlank 
            before="She" 
            after="stay home." 
            value={quizState.ex1_2} 
            onChange={(v) => handleInputChange('ex1_2', v)} 
            status={checkAnswer(quizState.ex1_2, 'would rather')}
          />
          <FillBlank 
            before="They" 
            after="relax now." 
            value={quizState.ex1_3} 
            onChange={(v) => handleInputChange('ex1_3', v)} 
            status={checkAnswer(quizState.ex1_3, 'would rather')}
          />
        </div>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">2</span>
          Elige la forma correcta
        </h3>
        
        <div className="space-y-6">
          <MultipleChoice 
            question="I would rather ___." 
            options={['rest', 'to rest']} 
            selected={quizState.ex2_1} 
            correct="rest"
            showResults={showResults}
            onSelect={(v) => handleInputChange('ex2_1', v)}
          />
          <MultipleChoice 
            question="He would rather ___ than drive." 
            options={['walk', 'to walk']} 
            selected={quizState.ex2_2} 
            correct="walk"
            showResults={showResults}
            onSelect={(v) => handleInputChange('ex2_2', v)}
          />
          <MultipleChoice 
            question="She would rather ___." 
            options={['sleep', 'sleeping']} 
            selected={quizState.ex2_3} 
            correct="sleep"
            showResults={showResults}
            onSelect={(v) => handleInputChange('ex2_3', v)}
          />
        </div>
      </div>

      {/* Exercise 3 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">3</span>
          Escritura: Decisiones bajo estrés
        </h3>
        <p className="text-sm text-slate-500 mb-2">Escribe una oración describiendo una decisión rápida cuando estás cansado.</p>
        <div className="bg-slate-50 p-3 rounded mb-3 text-sm italic text-slate-600 border border-slate-200">
          Modelo: When I am very tired, I would rather rest.
        </div>
        <textarea 
          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          rows={3}
          placeholder="Escribe tu respuesta aquí..."
          value={quizState.ex3_text}
          onChange={(e) => handleInputChange('ex3_text', e.target.value)}
        />
        {showResults && (
          <div className="mt-3 text-green-700 bg-green-50 p-3 rounded text-sm">
            <strong>Posible respuesta:</strong> "When I have a deadline, I would rather focus than talk." (¡Cualquier oración con estructura correcta es válida!)
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-4">
        <button 
          onClick={() => setShowResults(true)} 
          className="w-full sm:w-auto px-6 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
        >
          <CheckCircle size={20} /> Verificar Respuestas
        </button>
        
        {showResults && (
           <button onClick={onNext} className="w-full sm:w-auto px-6 py-3 text-indigo-700 font-bold hover:bg-indigo-50 rounded-lg flex items-center justify-center gap-2">
            Ver Resumen <ArrowRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

const SummarySection: React.FC = () => (
  <div className="animate-fade-in space-y-8">
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">¡Lección completada!</h2>
      
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <CheckCircle className="text-green-300" /> Resumen Clave
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-green-300"></div>
            <span><strong>Would rather</strong> expresa elecciones inmediatas y rápidas.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-green-300"></div>
            <span>Siempre va seguido de un <strong>verbo en forma base</strong> (sin "to").</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-green-300"></div>
            <span>Para comparar dos acciones se utiliza <strong>than</strong>.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-green-300"></div>
            <span>Es ideal para comunicar decisiones bajo <strong>presión de tiempo o estrés</strong>.</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 text-center opacity-90 text-indigo-100 italic">
        "Excellent work! Now you can express your immediate choices clearly."
      </div>
    </div>

    <div className="text-center">
      <button 
        onClick={() => window.location.reload()} 
        className="text-slate-500 hover:text-indigo-600 flex items-center justify-center gap-2 mx-auto transition-colors"
      >
        <RefreshCw size={16} /> Reiniciar Lección
      </button>
    </div>
  </div>
);

// --- Helpers ---

const SectionHeader: React.FC<{ number: string; title: string }> = ({ number, title }) => (
  <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
    <span className="flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-lg text-lg font-bold shadow-sm">
      {number}
    </span>
    {title}
  </h2>
);

const ComparisonCard: React.FC<{ title: string; desc: string; icon: string; highlight?: boolean }> = ({ title, desc, icon, highlight }) => (
  <div className={`p-4 rounded-xl border ${highlight ? 'bg-indigo-50 border-indigo-200 shadow-md transform scale-105' : 'bg-white border-slate-200'}`}>
    <div className="text-2xl mb-2">{icon}</div>
    <div className="font-bold text-slate-900 mb-1">{title}</div>
    <div className="text-sm text-slate-500">{desc}</div>
  </div>
);

const ExampleBox: React.FC<{ sentence: string; explanation: string }> = ({ sentence, explanation }) => (
  <div className="mt-4 p-4 bg-green-50 border border-green-100 rounded-lg">
    <p className="text-lg font-bold text-green-800 mb-1">"{sentence}"</p>
    <p className="text-sm text-green-700">{explanation}</p>
  </div>
);

const ListItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-slate-100">
    <Check size={16} className="text-green-500" />
    <span className="font-medium text-slate-700">{text}</span>
  </li>
);

const ExampleCard: React.FC<{ en: string; es: string }> = ({ en, es }) => (
  <div className="p-3 border-l-4 border-slate-300 bg-white shadow-sm rounded-r-lg">
    <p className="font-medium text-slate-800">{en}</p>
    <p className="text-sm text-slate-500 italic">{es}</p>
  </div>
);

const StressExample: React.FC<{ situation: string; response: string }> = ({ situation, response }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
    <div className="text-xs font-bold uppercase tracking-wide text-red-400 min-w-[120px]">{situation}</div>
    <div className="font-medium text-slate-800 bg-white/60 px-3 py-1 rounded w-full">
      {response}
    </div>
  </div>
);

// --- Quiz Components ---

const FillBlank: React.FC<{ before: string; after: string; value: string; onChange: (v: string) => void; status: 'neutral'|'correct'|'incorrect' }> = ({ before, after, value, onChange, status }) => (
  <div className="flex flex-wrap items-center gap-2 text-lg">
    <span>{before}</span>
    <div className="relative">
      <input 
        type="text" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`border-b-2 outline-none px-2 py-1 w-32 text-center font-medium transition-colors
          ${status === 'neutral' ? 'border-slate-300 focus:border-indigo-500' : ''}
          ${status === 'correct' ? 'border-green-500 text-green-700 bg-green-50' : ''}
          ${status === 'incorrect' ? 'border-red-500 text-red-700 bg-red-50' : ''}
        `}
      />
      {status === 'correct' && <Check size={16} className="absolute right-0 top-2 text-green-500" />}
      {status === 'incorrect' && <X size={16} className="absolute right-0 top-2 text-red-500" />}
    </div>
    <span>{after}</span>
  </div>
);

const MultipleChoice: React.FC<{ 
  question: string; 
  options: string[]; 
  selected: string; 
  correct: string; 
  showResults: boolean;
  onSelect: (v: string) => void 
}> = ({ question, options, selected, correct, showResults, onSelect }) => {
  
  const getStatusClass = (option: string) => {
    if (!showResults) return selected === option ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-slate-300 hover:border-indigo-400';
    
    if (option === correct) return 'bg-green-600 text-white border-green-600';
    if (selected === option && option !== correct) return 'bg-red-500 text-white border-red-500';
    return 'bg-slate-50 text-slate-400 border-slate-200';
  };

  return (
    <div>
      <p className="font-medium text-slate-800 mb-3 text-lg">{question}</p>
      <div className="flex gap-3">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => !showResults && onSelect(opt)}
            className={`px-4 py-2 rounded-full border transition-all font-medium ${getStatusClass(opt)}`}
            disabled={showResults}
          >
            {opt}
          </button>
        ))}
      </div>
      {showResults && selected !== correct && (
        <p className="text-xs text-red-500 mt-2">Correcto: {correct}</p>
      )}
    </div>
  );
};

export default App;