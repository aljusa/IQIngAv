import React, { useState } from 'react';
import { BookOpen, PenTool, Layout, CheckCircle, ArrowRight, Brain, Coffee, Sun, Briefcase } from 'lucide-react';

// --- Tipos e Interfaces ---
type TabId = 'intro' | 'grammar' | 'context' | 'exercises' | 'summary';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Componente Principal ---
export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('intro');

  // Estado para los ejercicios
  const [ex1Answers, setEx1Answers] = useState({ q1: '', q2: '', q3: '' });
  const [ex2Answers, setEx2Answers] = useState({ q1: '', q2: '', q3: '' });
  const [ex3Input, setEx3Input] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const tabs: Tab[] = [
    { id: 'intro', label: 'Introducción', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'grammar', label: 'Gramática', icon: <Layout className="w-4 h-4" /> },
    { id: 'context', label: 'Contexto', icon: <Sun className="w-4 h-4" /> },
    { id: 'exercises', label: 'Ejercicios', icon: <PenTool className="w-4 h-4" /> },
    { id: 'summary', label: 'Resumen', icon: <CheckCircle className="w-4 h-4" /> },
  ];

  // Función para validar ejercicios (simulada visualmente)
  const checkAnswers = () => {
    setShowFeedback(true);
  };

  const resetExercises = () => {
    setEx1Answers({ q1: '', q2: '', q3: '' });
    setEx2Answers({ q1: '', q2: '', q3: '' });
    setEx3Input('');
    setShowFeedback(false);
  };

  // --- Renderizado de Contenido ---
  const renderContent = () => {
    switch (activeTab) {
      case 'intro':
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Objetivo de la lección</h3>
              <p className="text-blue-700">
                Aprender a usar la estructura <span className="font-bold italic">would like</span> para expresar deseos de forma educada en inglés, especialmente en situaciones relacionadas con el manejo del estrés en la vida diaria, la escuela y el trabajo.
              </p>
            </div>

            <div className="prose max-w-none text-slate-700">
              <h3 className="text-2xl font-semibold text-slate-800">Introducción</h3>
              <p className="mt-2">
                En la vida diaria, las personas pueden sentirse estresadas por la escuela, el trabajo o las responsabilidades cotidianas. En inglés, una forma educada y natural de expresar lo que una persona quiere o necesita es usando <span className="font-bold text-indigo-600">would like</span>.
              </p>
              <p className="mt-2">
                Esta estructura es más suave y cortés que decir <em>I want</em>.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mt-6">
              <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-indigo-500" />
                ¿Qué significa would like?
              </h4>
              <p className="mb-4">Se usa para expresar:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-slate-600">
                <li>Deseos</li>
                <li>Preferencias</li>
                <li>Necesidades</li>
              </ul>
              <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
                <p className="text-sm text-indigo-800 font-semibold mb-1">Ejemplo General:</p>
                <p className="text-xl text-indigo-900 font-serif">"I would like some rest."</p>
                <p className="text-sm text-indigo-600 mt-2 italic">Esta oración expresa un deseo personal sin sonar exigente.</p>
              </div>
            </div>
          </div>
        );

      case 'grammar':
        return (
          <div className="space-y-8 animate-fadeIn">
            {/* Sección Noun */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <Coffee className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">1. Uso de would like + noun (sustantivo)</h3>
              </div>
              <p className="text-slate-600 mb-4">Cuando <em>would like</em> va seguido de un sustantivo, expresa el deseo de tener algo.</p>
              
              <div className="bg-slate-100 p-4 rounded-lg mb-4 text-center">
                <span className="font-mono text-lg font-bold text-slate-700">would like + noun</span>
              </div>

              <div className="space-y-3">
                <ExampleCard en="I would like a break." es="Me gustaría un descanso." />
                <ExampleCard en="I would like some time alone." es="Me gustaría un poco de tiempo a solas." />
                <ExampleCard en="She would like a quiet moment." es="A ella le gustaría un momento de tranquilidad." />
              </div>
            </div>

            {/* Sección Verb */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">2. Uso de would like + to + verb</h3>
              </div>
              <p className="text-slate-600 mb-4">También se usa para expresar el deseo de hacer una acción.</p>
              
              <div className="bg-slate-100 p-4 rounded-lg mb-4 text-center">
                <span className="font-mono text-lg font-bold text-slate-700">would like + to + verb</span>
              </div>

              <div className="space-y-3">
                <ExampleCard en="I would like to relax after work." es="Me gustaría relajarme después del trabajo." />
                <ExampleCard en="He would like to sleep more." es="A él le gustaría dormir más." />
                <ExampleCard en="They would like to stay calm." es="A ellos les gustaría mantener la calma." />
              </div>
            </div>
          </div>
        );

      case 'context':
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">En la rutina diaria, escuela y trabajo</h3>
            <p className="text-slate-600">En contextos cotidianos, esta estructura permite expresar necesidades personales de forma educada para reducir el estrés.</p>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <ContextCard 
                icon={<Sun className="w-8 h-8 text-orange-500" />}
                title="Rutina Diaria"
                sentence="During the day, they would like some quiet time."
                translation="Durante el día, a ellos les gustaría un poco de tiempo tranquilo."
              />
              <ContextCard 
                icon={<BookOpen className="w-8 h-8 text-blue-500" />}
                title="Escuela"
                sentence="After school, I would like a break."
                translation="Después de la escuela, me gustaría un descanso."
              />
              <ContextCard 
                icon={<Briefcase className="w-8 h-8 text-slate-600" />}
                title="Trabajo"
                sentence="At work, she would like to relax for a few minutes."
                translation="En el trabajo, a ella le gustaría relajarse por unos minutos."
              />
            </div>
          </div>
        );

      case 'exercises':
        return (
          <div className="space-y-8 animate-fadeIn pb-10">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-slate-800">Práctica Interactiva</h3>
              <button 
                onClick={resetExercises}
                className="text-sm text-slate-500 hover:text-slate-800 underline"
              >
                Reiniciar ejercicios
              </button>
            </div>

            {/* Ejercicio 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h4 className="font-bold text-lg mb-4 text-indigo-700">Ejercicio 1 – Básico</h4>
              <p className="mb-4 text-slate-600">Completa las oraciones con <b>would like</b>.</p>
              <div className="space-y-4">
                <InputQuestion 
                  label="I _______ some rest after work." 
                  value={ex1Answers.q1} 
                  onChange={(v) => setEx1Answers({...ex1Answers, q1: v})} 
                  correctAnswer="would like"
                  showFeedback={showFeedback}
                />
                <InputQuestion 
                  label="She _______ a quiet moment." 
                  value={ex1Answers.q2} 
                  onChange={(v) => setEx1Answers({...ex1Answers, q2: v})} 
                  correctAnswer="would like"
                  showFeedback={showFeedback}
                />
                <InputQuestion 
                  label="They _______ to relax at home." 
                  value={ex1Answers.q3} 
                  onChange={(v) => setEx1Answers({...ex1Answers, q3: v})} 
                  correctAnswer="would like"
                  showFeedback={showFeedback}
                />
              </div>
            </div>

            {/* Ejercicio 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h4 className="font-bold text-lg mb-4 text-indigo-700">Ejercicio 2 – Intermedio</h4>
              <p className="mb-4 text-slate-600">Elige la opción correcta (Noun vs Verb).</p>
              
              <div className="space-y-6">
                <SelectQuestion 
                  q="I would like _______."
                  options={["relax", "a break"]}
                  correct="a break"
                  selected={ex2Answers.q1}
                  onSelect={(v) => setEx2Answers({...ex2Answers, q1: v})}
                  showFeedback={showFeedback}
                />
                 <SelectQuestion 
                  q="He would like _______."
                  options={["some time alone", "sleep"]}
                  correct="some time alone"
                  selected={ex2Answers.q2}
                  onSelect={(v) => setEx2Answers({...ex2Answers, q2: v})}
                  showFeedback={showFeedback}
                />
                 <SelectQuestion 
                  q="We would like _______."
                  options={["to stay calm", "a calm moment"]}
                  correct="to stay calm"
                  selected={ex2Answers.q3}
                  onSelect={(v) => setEx2Answers({...ex2Answers, q3: v})}
                  showFeedback={showFeedback}
                />
              </div>
            </div>

             {/* Ejercicio 3 */}
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h4 className="font-bold text-lg mb-4 text-indigo-700">Ejercicio 3 – Avanzado</h4>
              <p className="mb-4 text-slate-600">Escribe 2–3 oraciones sobre tu rutina y cómo reducir el estrés.</p>
              <textarea 
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                rows={3}
                placeholder="Ejemplo: After work, I would like to relax..."
                value={ex3Input}
                onChange={(e) => setEx3Input(e.target.value)}
              />
              {showFeedback && ex3Input.length > 5 && (
                 <div className="mt-2 text-green-600 text-sm flex items-center gap-2">
                   <CheckCircle className="w-4 h-4" /> ¡Buen intento! Asegúrate de usar "would like".
                 </div>
              )}
            </div>

            <button 
              onClick={checkAnswers}
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold shadow-md hover:bg-indigo-700 transition-colors"
            >
              Verificar Respuestas
            </button>
          </div>
        );

      case 'summary':
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Resumen Clave</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0 text-green-300" />
                  <span><b>Would like</b> se usa para expresar deseos de forma educada.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0 text-green-300" />
                  <span>Es más formal y suave que "I want".</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0 text-green-300" />
                  <span>Estructura 1: <b>would like + Noun</b> (a break).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0 text-green-300" />
                  <span>Estructura 2: <b>would like + to + Verb</b> (to relax).</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 mt-6 text-center">
              <h4 className="text-xl font-bold text-slate-800 mb-2">¡Felicidades!</h4>
              <p className="text-slate-600">
                Has completado la lección sobre manejo del estrés usando "would like".
                Ahora puedes comunicar tus necesidades personales de manera clara y respetuosa.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">English Lesson • Stress Management</span>
            <h1 className="text-2xl font-bold text-slate-900">Expresar deseos para reducir el estrés</h1>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="max-w-4xl mx-auto px-4 mt-2">
          <div className="flex overflow-x-auto gap-1 pb-2 md:pb-0 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-t-lg text-sm font-medium transition-all whitespace-nowrap
                  ${activeTab === tab.id 
                    ? 'bg-slate-50 text-indigo-600 border-b-2 border-indigo-600' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'}
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 py-6 text-center text-slate-400 text-sm">
        <p>Lesson unique: Expressing desires to reduce stress (American English)</p>
      </footer>
    </div>
  );
}

// --- Componentes Auxiliares para Limpieza de Código ---

const ExampleCard = ({ en, es }: { en: string, es: string }) => (
  <div className="border-l-4 border-indigo-200 pl-4 py-1">
    <p className="text-lg font-medium text-slate-800">{en}</p>
    <p className="text-sm text-slate-500">{es}</p>
  </div>
);

const ContextCard = ({ icon, title, sentence, translation }: { icon: React.ReactNode, title: string, sentence: string, translation: string }) => (
  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-3">{icon}</div>
    <h4 className="font-bold text-slate-800 mb-2">{title}</h4>
    <p className="text-indigo-900 font-medium mb-1">{sentence}</p>
    <p className="text-xs text-slate-500">{translation}</p>
  </div>
);

const InputQuestion = ({ label, value, onChange, correctAnswer, showFeedback }: any) => {
  const isCorrect = value.trim().toLowerCase() === correctAnswer.toLowerCase();
  
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3">
      <div className="text-lg text-slate-700 flex-1">
        {label.split('_______')[0]}
        <input 
          type="text" 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`
            mx-2 px-2 py-1 border-b-2 outline-none w-32 text-center font-bold bg-transparent
            ${showFeedback 
              ? (isCorrect ? 'border-green-500 text-green-700' : 'border-red-400 text-red-600') 
              : 'border-slate-300 focus:border-indigo-500'}
          `}
          placeholder="escribe aquí"
        />
        {label.split('_______')[1]}
      </div>
      {showFeedback && (
        <span className="text-sm font-medium">
          {isCorrect 
            ? <span className="text-green-600 flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Correcto</span> 
            : <span className="text-red-500">Respuesta: {correctAnswer}</span>}
        </span>
      )}
    </div>
  );
};

const SelectQuestion = ({ q, options, correct, selected, onSelect, showFeedback }: any) => {
  const isCorrect = selected === correct;
  
  return (
    <div className="border border-slate-100 p-4 rounded-lg bg-slate-50">
      <p className="text-lg text-slate-800 mb-3">{q.replace('_______', '_______')}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt: string) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            disabled={showFeedback}
            className={`
              px-4 py-2 rounded-full border text-sm transition-all
              ${selected === opt 
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' 
                : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-100'}
              ${showFeedback && opt === correct ? 'ring-2 ring-green-500 ring-offset-1' : ''}
              ${showFeedback && selected === opt && !isCorrect ? 'bg-red-500 border-red-500 text-white' : ''}
            `}
          >
            {opt}
          </button>
        ))}
      </div>
      {showFeedback && !isCorrect && selected && (
        <p className="text-xs text-red-500 mt-2">La respuesta correcta es: {correct}</p>
      )}
    </div>
  );
};