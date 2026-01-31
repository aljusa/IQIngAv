import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  Users, 
  ArrowRight, 
  Lightbulb, 
  MessageCircle, 
  PenTool,
  Menu,
  X,
  Award
} from 'lucide-react';

// --- Types ---

type TabId = 'intro' | 'like' | 'prefer' | 'rather' | 'social' | 'summary' | 'exercises';

interface TabConfig {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Components ---

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('intro');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs: TabConfig[] = [
    { id: 'intro', label: 'Inicio & Objetivo', icon: <BookOpen size={18} /> },
    { id: 'like', label: 'Would Like', icon: <ArrowRight size={18} /> },
    { id: 'prefer', label: 'Would Prefer', icon: <ArrowRight size={18} /> },
    { id: 'rather', label: 'Would Rather', icon: <ArrowRight size={18} /> },
    { id: 'social', label: 'Contexto Social', icon: <Users size={18} /> },
    { id: 'summary', label: 'Resumen', icon: <Lightbulb size={18} /> },
    { id: 'exercises', label: 'Ejercicios', icon: <PenTool size={18} /> },
  ];

  const handleTabChange = (id: TabId) => {
    setActiveTab(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-100">
      {/* Header */}
      <header className="bg-indigo-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-indigo-200" />
            <h1 className="text-lg md:text-xl font-bold tracking-tight">English Lesson: Preferences</h1>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 hover:bg-indigo-500 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2
                  ${activeTab === tab.id 
                    ? 'bg-white text-indigo-700 shadow-sm' 
                    : 'text-indigo-100 hover:bg-indigo-500 hover:text-white'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <nav className="md:hidden bg-indigo-700 border-t border-indigo-500 p-2">
            <div className="flex flex-col gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-4 py-3 rounded-md text-left text-sm font-medium transition-colors flex items-center gap-3
                    ${activeTab === tab.id 
                      ? 'bg-white text-indigo-700' 
                      : 'text-indigo-100 hover:bg-indigo-600'
                    }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden min-h-[600px]">
          
          {/* Dynamic Content Rendering */}
          <div className="p-6 md:p-10 animate-fadeIn">
            {activeTab === 'intro' && <IntroSection changeTab={handleTabChange} />}
            {activeTab === 'like' && <WouldLikeSection />}
            {activeTab === 'prefer' && <WouldPreferSection />}
            {activeTab === 'rather' && <WouldRatherSection />}
            {activeTab === 'social' && <SocialSection />}
            {activeTab === 'summary' && <SummarySection />}
            {activeTab === 'exercises' && <ExercisesSection />}
          </div>

        </div>

        {/* Footer Navigation Hints */}
        <div className="mt-8 flex justify-between text-slate-400 text-sm px-2">
          <button 
            disabled={activeTab === 'intro'}
            onClick={() => {
              const idx = tabs.findIndex(t => t.id === activeTab);
              if (idx > 0) handleTabChange(tabs[idx - 1].id);
            }}
            className="flex items-center gap-1 hover:text-indigo-600 disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
          >
            ← Anterior
          </button>
          <button 
             disabled={activeTab === 'exercises'}
             onClick={() => {
               const idx = tabs.findIndex(t => t.id === activeTab);
               if (idx < tabs.length - 1) handleTabChange(tabs[idx + 1].id);
             }}
            className="flex items-center gap-1 hover:text-indigo-600 disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
          >
            Siguiente →
          </button>
        </div>
      </main>
    </div>
  );
};

// --- Sub-Components (Sections) ---

const IntroSection: React.FC<{ changeTab: (id: TabId) => void }> = ({ changeTab }) => (
  <div className="space-y-6">
    <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
      <h2 className="text-2xl font-bold text-indigo-800 mb-2">Objetivo de la lección</h2>
      <p className="text-lg text-slate-700">
        Aprender a comparar y contrastar las propias preferencias con las de otras personas en inglés, 
        usando <strong className="text-indigo-600">would like</strong>, <strong className="text-indigo-600">would prefer</strong> y <strong className="text-indigo-600">would rather</strong> con distintos sujetos.
      </p>
    </div>

    <div className="space-y-4 text-slate-600 leading-relaxed">
      <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
        <BookOpen className="text-indigo-500" />
        Introducción
      </h3>
      <p>
        En la vida diaria, no siempre todas las personas quieren o prefieren lo mismo. 
        Estas diferencias pueden causar pequeños conflictos o momentos de estrés, especialmente cuando se decide algo en grupo.
      </p>
      <p>
        En inglés, es posible expresar estos contrastes de forma clara, educada y respetuosa usando estructuras específicas 
        junto con conectores simples como <strong>but</strong> y <strong>while</strong>.
      </p>
    </div>

    <div className="pt-4">
      <button 
        onClick={() => changeTab('like')}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-md hover:shadow-lg"
      >
        Comenzar Lección <ArrowRight size={20} />
      </button>
    </div>
  </div>
);

const WouldLikeSection: React.FC = () => (
  <div className="space-y-6">
    <div className="border-b border-slate-200 pb-4 mb-6">
      <span className="text-sm font-bold text-indigo-500 uppercase tracking-wider">Parte 1</span>
      <h2 className="text-3xl font-bold text-slate-800 mt-1">Contrastar deseos con "Would like"</h2>
    </div>

    <p className="text-slate-600 text-lg">
      <strong>Would like</strong> se usa para expresar deseos generales y educados. Puede aplicarse a diferentes personas dentro de la misma oración.
    </p>

    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg my-6">
      <h3 className="font-bold text-amber-800 mb-2">Estructura común</h3>
      <code className="block bg-white/50 p-3 rounded text-amber-900 font-mono text-sm md:text-base">
        Subject + would like + (to) + … + <strong>but</strong> + other subject + would like + (to) + …
      </code>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <ExampleCard 
        english="I would like to stay home, but my friend would like to go out." 
        spanish="Me gustaría quedarme en casa, pero a mi amigo le gustaría salir." 
      />
      <ExampleCard 
        english="She would like some quiet time, but they would like music." 
        spanish="A ella le gustaría un poco de silencio, pero a ellos les gustaría música." 
      />
    </div>

    <div className="flex items-start gap-3 bg-slate-100 p-4 rounded-lg">
      <Lightbulb className="text-yellow-500 flex-shrink-0 mt-1" />
      <p className="text-sm text-slate-700">
        <strong>Nota:</strong> <em>But</em> se usa para marcar un contraste claro entre dos deseos distintos.
      </p>
    </div>
  </div>
);

const WouldPreferSection: React.FC = () => (
  <div className="space-y-6">
    <div className="border-b border-slate-200 pb-4 mb-6">
      <span className="text-sm font-bold text-indigo-500 uppercase tracking-wider">Parte 2</span>
      <h2 className="text-3xl font-bold text-slate-800 mt-1">Comparar preferencias con "Would prefer"</h2>
    </div>

    <p className="text-slate-600 text-lg">
      <strong>Would prefer</strong> expresa una preferencia más clara y se usa cuando las personas eligen opciones diferentes.
    </p>

    <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-lg my-6">
      <h3 className="font-bold text-sky-800 mb-2">Estructuras útiles</h3>
      <ul className="list-disc list-inside text-sky-900 font-mono space-y-1">
        <li>would prefer + noun</li>
        <li>would prefer + to + verb</li>
      </ul>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <ExampleCard 
        english="She would prefer silence, while they would like music." 
        spanish="Ella preferiría silencio, mientras que a ellos les gustaría música." 
      />
      <ExampleCard 
        english="I would prefer a short break, but my classmates prefer to continue." 
        spanish="Yo preferiría un descanso corto, pero mis compañeros prefieren continuar." 
      />
    </div>

    <div className="flex items-start gap-3 bg-slate-100 p-4 rounded-lg">
      <Lightbulb className="text-yellow-500 flex-shrink-0 mt-1" />
      <p className="text-sm text-slate-700">
        <strong>Nota:</strong> <em>While</em> ayuda a mostrar dos preferencias al mismo tiempo, en contraste.
      </p>
    </div>
  </div>
);

const WouldRatherSection: React.FC = () => (
  <div className="space-y-6">
    <div className="border-b border-slate-200 pb-4 mb-6">
      <span className="text-sm font-bold text-indigo-500 uppercase tracking-wider">Parte 3</span>
      <h2 className="text-3xl font-bold text-slate-800 mt-1">Decisiones inmediatas con "Would rather"</h2>
    </div>

    <p className="text-slate-600 text-lg">
      <strong>Would rather</strong> se usa para decisiones rápidas del momento, especialmente bajo presión social.
    </p>

    <div className="bg-rose-50 border-l-4 border-rose-400 p-4 rounded-r-lg my-6">
      <h3 className="font-bold text-rose-800 mb-2">Estructura</h3>
      <code className="block bg-white/50 p-3 rounded text-rose-900 font-mono text-sm md:text-base">
        would rather + <strong>base verb</strong>
      </code>
      <p className="text-xs text-rose-600 mt-2">* Nunca uses "to" después de rather.</p>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <ExampleCard 
        english="I would rather rest, but my friend would like to go out." 
        spanish="Preferiría descansar, pero a mi amigo le gustaría salir." 
      />
      <ExampleCard 
        english="He would rather leave early, while they would rather stay." 
        spanish="Él preferiría irse temprano, mientras que ellos preferirían quedarse." 
      />
    </div>

    <p className="text-slate-500 italic text-center mt-4">
      Estas oraciones reflejan decisiones personales diferentes en situaciones sociales.
    </p>
  </div>
);

const SocialSection: React.FC = () => (
  <div className="space-y-6">
     <div className="border-b border-slate-200 pb-4 mb-6">
      <span className="text-sm font-bold text-indigo-500 uppercase tracking-wider">Parte 4</span>
      <h2 className="text-3xl font-bold text-slate-800 mt-1">Preferencias diferentes en situaciones sociales</h2>
    </div>

    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <Users className="text-indigo-500 h-8 w-8" />
        <h3 className="text-xl font-semibold text-slate-800">Decisiones Grupales</h3>
      </div>
      <p className="text-slate-600 mb-6">
        En decisiones grupales, es común combinar estas estructuras para expresar diferencias de forma respetuosa. 
        Estas expresiones permiten comunicar necesidades personales sin generar un conflicto fuerte.
      </p>

      <div className="space-y-4">
        <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-lg font-medium text-indigo-900">"I would like to relax, but she would prefer to study."</p>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-lg font-medium text-indigo-900">"They would rather talk, while I would prefer silence."</p>
        </div>
      </div>
    </div>
  </div>
);

const SummarySection: React.FC = () => (
  <div className="space-y-8 animate-fadeIn">
    <h2 className="text-3xl font-bold text-center text-slate-800">Resumen Clave</h2>
    
    <div className="grid gap-4 md:grid-cols-3">
      <SummaryCard 
        title="Would like" 
        desc="Deseos generales y educados" 
        color="bg-amber-100 text-amber-800"
      />
      <SummaryCard 
        title="Would prefer" 
        desc="Preferencias claras entre opciones" 
        color="bg-sky-100 text-sky-800"
      />
      <SummaryCard 
        title="Would rather" 
        desc="Decisiones inmediatas (sin 'to')" 
        color="bg-rose-100 text-rose-800"
      />
    </div>

    <div className="bg-slate-800 text-slate-200 p-6 rounded-xl text-center">
      <h3 className="text-xl font-bold text-white mb-2">Conectores</h3>
      <p>
        <span className="font-bold text-indigo-300">But</span> y <span className="font-bold text-indigo-300">While</span> ayudan a contrastar ideas en situaciones sociales y decisiones en grupo.
      </p>
    </div>
  </div>
);

// --- Exercise Components ---

const ExercisesSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-slate-800">Práctica Interactiva</h2>
        <p className="text-slate-500">Pon a prueba lo aprendido en esta lección.</p>
      </div>

      <Exercise1 />
      <hr className="border-slate-200" />
      <Exercise2 />
      <hr className="border-slate-200" />
      <Exercise3 />

      <div className="bg-green-50 p-6 rounded-xl border border-green-200 text-center mt-8">
        <Award className="h-12 w-12 text-green-600 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-green-800 mb-2">¡Lección Completada!</h3>
        <p className="text-green-700">
          Has aprendido a comparar tus propias preferencias con las de otras personas usando 
          would like, would prefer y would rather.
        </p>
      </div>
    </div>
  );
};

const Exercise1: React.FC = () => {
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });
  const [feedback, setFeedback] = useState({ q1: false, q2: false, q3: false });

  const checkAnswer = (key: 'q1'|'q2'|'q3', correct: string) => {
    const isCorrect = answers[key].toLowerCase().trim() === correct.toLowerCase();
    setFeedback({ ...feedback, [key]: isCorrect });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded">Ejercicio 1</span>
        <h3 className="font-bold text-slate-800">Básico: Completa la estructura</h3>
      </div>
      <p className="text-sm text-slate-500 mb-6">Usa: <em>would like, would prefer, would rather</em></p>

      <div className="space-y-4">
        <QuestionInput 
          id="q1"
          part1="I "
          part2=" to stay home, but my friends want to go out."
          value={answers.q1}
          onChange={(v) => setAnswers({...answers, q1: v})}
          isCorrect={feedback.q1}
          onCheck={() => checkAnswer('q1', 'would like')}
          hint="Deseo general (educado)"
        />
        <QuestionInput 
          id="q2"
          part1="She "
          part2=" silence, while they like music."
          value={answers.q2}
          onChange={(v) => setAnswers({...answers, q2: v})}
          isCorrect={feedback.q2}
          onCheck={() => checkAnswer('q2', 'would prefer')}
          hint="Preferencia + sustantivo"
        />
        <QuestionInput 
          id="q3"
          part1="I "
          part2=" rest now, but he wants to continue working."
          value={answers.q3}
          onChange={(v) => setAnswers({...answers, q3: v})}
          isCorrect={feedback.q3}
          onCheck={() => checkAnswer('q3', 'would rather')}
          hint="Decisión inmediata + verbo base"
        />
      </div>
    </div>
  );
};

const Exercise2: React.FC = () => {
  const [revealed, setRevealed] = useState({ q1: false, q2: false, q3: false });

  const toggleReveal = (key: 'q1'|'q2'|'q3') => {
    setRevealed(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded">Ejercicio 2</span>
        <h3 className="font-bold text-slate-800">Intermedio: Une las ideas</h3>
      </div>
      <p className="text-sm text-slate-500 mb-6">Une las dos ideas mentalmente o escribiéndolas en un papel usando <strong>but</strong> o <strong>while</strong>, luego verifica tu respuesta.</p>

      <div className="space-y-6">
        <RevealAnswer 
          q="I would like to relax. / She would prefer to study."
          a="I would like to relax, but she would prefer to study."
          isOpen={revealed.q1}
          onToggle={() => toggleReveal('q1')}
        />
        <RevealAnswer 
          q="They would rather talk. / I would prefer silence."
          a="They would rather talk, while I would prefer silence."
          isOpen={revealed.q2}
          onToggle={() => toggleReveal('q2')}
        />
        <RevealAnswer 
          q="He would like a break. / His classmates would rather continue."
          a="He would like a break, but his classmates would rather continue."
          isOpen={revealed.q3}
          onToggle={() => toggleReveal('q3')}
        />
      </div>
    </div>
  );
};

const Exercise3: React.FC = () => {
  const [text, setText] = useState('');
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded">Ejercicio 3</span>
        <h3 className="font-bold text-slate-800">Avanzado: Contraste Social</h3>
      </div>
      <p className="text-sm text-slate-600 mb-4">
        Escribe 2–3 oraciones sobre una situación de decisión en grupo. 
        Usa dos sujetos diferentes y al menos dos estructuras aprendidas.
      </p>

      <div className="bg-slate-50 p-4 rounded-md mb-4 text-sm text-slate-500 italic">
        Modelo: "I would like to relax, but my friend would rather go out. While he prefers music, I would prefer silence."
      </div>

      <textarea
        className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none min-h-[100px]"
        placeholder="Escribe tu respuesta aquí..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <div className="mt-2 flex justify-end">
        <span className="text-xs text-slate-400">
          {text.length > 10 ? '¡Buen trabajo practicando!' : 'Escribe un poco más...'}
        </span>
      </div>
    </div>
  );
};

// --- Helper UI Components ---

const ExampleCard: React.FC<{ english: string; spanish: string }> = ({ english, spanish }) => (
  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-indigo-300 transition-colors">
    <div className="flex gap-2 items-start mb-2">
      <MessageCircle className="w-4 h-4 text-indigo-500 mt-1 flex-shrink-0" />
      <p className="font-medium text-slate-800">{english}</p>
    </div>
    <p className="text-sm text-slate-500 pl-6 italic">{spanish}</p>
  </div>
);

const SummaryCard: React.FC<{ title: string; desc: string; color: string }> = ({ title, desc, color }) => (
  <div className={`p-5 rounded-lg text-center ${color}`}>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-sm opacity-90">{desc}</p>
  </div>
);

const QuestionInput: React.FC<{ 
  id: string, 
  part1: string, 
  part2: string, 
  value: string, 
  onChange: (s: string) => void, 
  onCheck: () => void, 
  isCorrect: boolean,
  hint?: string
}> = ({ part1, part2, value, onChange, onCheck, isCorrect, hint }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg">
    <div className="flex-grow leading-loose">
      <span>{part1}</span>
      <input 
        type="text" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mx-2 border-b-2 outline-none px-2 py-1 w-32 md:w-40 text-center font-bold transition-colors
          ${isCorrect 
            ? 'border-green-500 bg-green-50 text-green-700' 
            : 'border-slate-300 focus:border-indigo-500 bg-white'}`}
        placeholder="___"
      />
      <span>{part2}</span>
    </div>
    
    <div className="flex items-center gap-2 mt-2 sm:mt-0">
      {isCorrect ? (
        <CheckCircle className="text-green-500 animate-bounce" />
      ) : (
        <button 
          onClick={onCheck}
          className="text-xs bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition-colors"
        >
          Verificar
        </button>
      )}
    </div>
    {!isCorrect && hint && <p className="text-xs text-slate-400 sm:hidden">Pista: {hint}</p>}
  </div>
);

const RevealAnswer: React.FC<{ q: string; a: string; isOpen: boolean; onToggle: () => void }> = ({ q, a, isOpen, onToggle }) => (
  <div className="border border-slate-200 rounded-lg overflow-hidden">
    <div className="bg-slate-50 p-4">
      <p className="font-medium text-slate-700">{q}</p>
    </div>
    <div className="p-4 bg-white">
      {isOpen ? (
        <div className="animate-fadeIn">
          <p className="text-indigo-700 font-bold mb-2">Solución:</p>
          <p>{a}</p>
        </div>
      ) : (
        <button 
          onClick={onToggle}
          className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
        >
          <Lightbulb size={16} /> Mostrar posible respuesta
        </button>
      )}
    </div>
  </div>
);

export default App;