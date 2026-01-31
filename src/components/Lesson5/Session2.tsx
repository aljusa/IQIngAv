import React, { useState } from 'react';
import { Book, PenTool, Home, CheckCircle, ArrowRight, BookOpen, GraduationCap, X, Check } from 'lucide-react';

// --- Types ---
type TabType = 'intro' | 'lesson' | 'exercises' | 'summary';

interface Exercise1State {
  q1: string;
  q2: string;
  q3: string;
}

interface Exercise2State {
  q1: string | null;
  q2: string | null;
  q3: string | null;
}

// --- Components ---

const Header = () => (
  <header className="bg-indigo-700 text-white p-6 shadow-lg">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold flex items-center gap-3">
        <GraduationCap className="h-8 w-8" />
        English Learning
      </h1>
      <p className="mt-2 text-indigo-100 text-lg">Preferencias personales bajo presión</p>
    </div>
  </header>
);

const TabButton = ({ 
  active, 
  onClick, 
  icon: Icon, 
  label 
}: { 
  active: boolean; 
  onClick: () => void; 
  icon: React.ElementType; 
  label: string 
}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-3 font-medium transition-all duration-200 border-b-2 ${
      active
        ? 'border-indigo-600 text-indigo-700 bg-indigo-50'
        : 'border-transparent text-gray-500 hover:text-indigo-600 hover:bg-gray-50'
    }`}
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </button>
);

// --- Content Sections ---

const IntroSection = ({ onNext }: { onNext: () => void }) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Objetivo de la lección</h2>
      <p className="text-gray-600 leading-relaxed text-lg">
        Aprender a usar la estructura <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">would prefer</span> para expresar preferencias personales claras en inglés, especialmente en situaciones de presión o estrés, en contextos como el estudio, el descanso y la organización del tiempo.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
        <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Contexto
        </h3>
        <p className="text-blue-700">
          En situaciones de estrés, las personas suelen tener preferencias definidas sobre lo que les ayuda a sentirse mejor. "Would prefer" es la forma educada y precisa de comunicarlo.
        </p>
      </div>
      <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
        <h3 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
          <CheckCircle className="h-5 w-5" />
          Uso Clave
        </h3>
        <p className="text-emerald-700">
          Esta estructura se utiliza fundamentalmente cuando una persona debe <strong>elegir una opción sobre otra</strong>.
        </p>
      </div>
    </div>

    <div className="flex justify-end pt-4">
      <button 
        onClick={onNext}
        className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
      >
        Comenzar Lección <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  </div>
);

const LessonSection = () => (
  <div className="space-y-8 animate-fadeIn">
    {/* Section 1 */}
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-indigo-800 mb-3 border-b pb-2">1. ¿Qué significa would prefer?</h3>
      <p className="text-gray-700 mb-4">
        Se utiliza para indicar que una opción es mejor que otra para la persona que habla.
      </p>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="font-semibold text-gray-700 mb-2">Diferencia clave:</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-gray-600">
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            <strong>would like</strong> → deseo general
          </li>
          <li className="flex items-center gap-2 text-indigo-600 font-medium">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            <strong>would prefer</strong> → elección clara entre opciones
          </li>
        </ul>
      </div>
    </section>

    {/* Section 2 */}
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-indigo-800 mb-3 border-b pb-2">2. Uso de would prefer + Noun</h3>
      <p className="text-gray-700 mb-4">Cuando va seguido de un sustantivo, se expresa preferencia por una cosa.</p>
      
      <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500 mb-4">
        <p className="font-mono text-indigo-900 font-bold">Estructura: would prefer + noun</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-3 bg-gray-50 rounded border">
          <p className="text-gray-500 text-sm">Ejemplo 1</p>
          <p className="font-medium text-gray-800">I <span className="text-indigo-600">would prefer</span> quiet music.</p>
        </div>
        <div className="p-3 bg-gray-50 rounded border">
          <p className="text-gray-500 text-sm">Ejemplo 2</p>
          <p className="font-medium text-gray-800">He <span className="text-indigo-600">would prefer</span> a calm environment.</p>
        </div>
      </div>
    </section>

    {/* Section 3 */}
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-indigo-800 mb-3 border-b pb-2">3. Uso de would prefer + to + Verb</h3>
      <p className="text-gray-700 mb-4">Indica preferencia por realizar una acción.</p>
      
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 mb-4">
        <p className="font-mono text-purple-900 font-bold">Estructura: would prefer + to + verb</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-3 bg-gray-50 rounded border">
          <p className="text-gray-500 text-sm">Ejemplo 1</p>
          <p className="font-medium text-gray-800">She <span className="text-purple-600">would prefer to study</span> at home.</p>
        </div>
        <div className="p-3 bg-gray-50 rounded border">
          <p className="text-gray-500 text-sm">Ejemplo 2</p>
          <p className="font-medium text-gray-800">I <span className="text-purple-600">would prefer to rest</span> after work.</p>
        </div>
      </div>
    </section>

     {/* Section 4 */}
     <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-indigo-800 mb-3 border-b pb-2">4. Comparar opciones (Contexto de Estrés)</h3>
      <p className="text-gray-700 mb-4">
        Permite comunicar elecciones claras bajo presión. A menudo la segunda opción es implícita.
      </p>
      <div className="bg-orange-50 p-4 rounded-lg text-orange-900 italic">
        "I would prefer quiet music <span className="opacity-60">(instead of loud music)</span>."
      </div>
    </section>
  </div>
);

const ExercisesSection = () => {
  // State for Ex 1
  const [ex1, setEx1] = useState<Exercise1State>({ q1: '', q2: '', q3: '' });
  const [checkEx1, setCheckEx1] = useState(false);

  // State for Ex 2
  const [ex2, setEx2] = useState<Exercise2State>({ q1: null, q2: null, q3: null });
  const [checkEx2, setCheckEx2] = useState(false);

  // State for Ex 3
  const [ex3Text, setEx3Text] = useState('');
  const [showModel, setShowModel] = useState(false);

  const validateEx1 = () => {
    setCheckEx1(true);
  };

  const isCorrectEx1 = (val: string, expected: string) => 
    val.toLowerCase().trim() === expected.toLowerCase();

  return (
    <div className="space-y-8 animate-fadeIn max-w-3xl mx-auto">
      
      {/* Exercise 1 */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">Ejercicio 1 – Básico</h3>
          <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">Completar</span>
        </div>
        <p className="text-gray-600 mb-4 text-sm">Escribe "would prefer" donde corresponda.</p>
        
        <div className="space-y-4">
          {[
            { id: 'q1', text: 'I ___ quiet music during study time.', ans: 'would prefer' },
            { id: 'q2', text: 'She ___ to rest after work.', ans: 'would prefer' },
            { id: 'q3', text: 'They ___ a calm environment.', ans: 'would prefer' },
          ].map((item, idx) => (
            <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-medium text-gray-400 w-6">{idx + 1}.</span>
              <div className="flex-1 flex flex-wrap items-center gap-2 text-lg">
                <span>{item.text.split('___')[0]}</span>
                <input 
                  type="text" 
                  value={ex1[item.id as keyof Exercise1State]}
                  onChange={(e) => {
                    setEx1({...ex1, [item.id]: e.target.value});
                    setCheckEx1(false);
                  }}
                  className={`border-b-2 outline-none px-2 py-1 w-32 font-bold text-indigo-600 bg-gray-50 focus:border-indigo-500 transition-colors ${
                    checkEx1 
                      ? isCorrectEx1(ex1[item.id as keyof Exercise1State], item.ans) 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-red-500 bg-red-50'
                      : 'border-gray-300'
                  }`}
                  placeholder="..."
                />
                <span>{item.text.split('___')[1]}</span>
                {checkEx1 && (
                   isCorrectEx1(ex1[item.id as keyof Exercise1State], item.ans) 
                   ? <Check className="w-5 h-5 text-green-500" />
                   : <X className="w-5 h-5 text-red-500" />
                )}
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={validateEx1}
          className="mt-6 text-sm bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
        >
          Comprobar Respuestas
        </button>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">Ejercicio 2 – Intermedio</h3>
          <span className="text-xs font-bold px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">Selección</span>
        </div>
        <p className="text-gray-600 mb-4 text-sm">Elige la opción gramaticalmente correcta.</p>

        <div className="space-y-6">
          {[
            { id: 'q1', q: 'I would prefer ___', opts: ['a break', 'to take a break'], correct: 'to take a break', context: '(acción)' }, // Both technically correct in English, but "to take a break" fits the "action" context better or "a break" fits noun. Prompt implies structure testing. Let's look at prompt again. Prompt: "I would prefer ___ (a break / to take a break)". Actually both fit logic, but usually prompts test specific structure. Let's assume prompt wants to test "to + verb" if context implies action, or "noun". Wait, prompt exercise key says: "I would prefer ___ (a break / to take a break)". Let's allow users to pick based on valid grammar. Actually, "would prefer a break" (noun) and "would prefer to take a break" (verb). Let's define the correct answer based on typical test patterns. The prompt example 3 uses "to rest", so "to take" is likely the target if focusing on verbs, but "a break" is valid noun. Let's make it a strict choice based on the prompt's likely intent or accept the one that fits best. Let's look at the options in the prompt carefully: "I would prefer ___ (a break / to take a break)." This is tricky as both work. Let's assume the question implies action preference or make the correct key versatile. Let's stick to the structure taught. Let's assume the intended answer is 'to take a break' to practice the verb form, or provide feedback for both. I will set specific correct answers based on common grammar quizzes.
            // Re-reading prompt exercises: 
            // 1. I would prefer ___ (a break / to take a break). -> Both valid. Let's use 'to take a break' as the "verb" practice or 'a break' as noun practice. Let's assume "a break" is intended as noun practice? No, let's use the second option to practice 'to'. Actually, let's just pick one and explain. I will choose "to take a break" as it is more complex.
            // 2. He would prefer ___ (silence / to silent). -> "silence" (noun). "to silent" is wrong verb form (silent is adj).
            // 3. We would prefer ___ (to study at home / study at home). -> "to study..." (infinitive required).
            { id: 'q1', stem: 'I would prefer', opts: [{val: 'a break', label: 'a break'}, {val: 'to take a break', label: 'to take a break'}], correct: 'to take a break', note: 'Ambas pueden ser correctas, pero practiquemos la forma verbal aquí.' },
            { id: 'q2', stem: 'He would prefer', opts: [{val: 'silence', label: 'silence'}, {val: 'to silent', label: 'to silent'}], correct: 'silence', note: '"Silent" es adjetivo, necesitamos el sustantivo o el verbo "to silence".' },
            { id: 'q3', stem: 'We would prefer', opts: [{val: 'to study at home', label: 'to study at home'}, {val: 'study at home', label: 'study at home'}], correct: 'to study at home', note: 'Se requiere "to" antes del verbo.' },
          ].map((q, i) => (
             <div key={q.id} className="border-b pb-4 last:border-0">
               <p className="font-medium text-gray-800 mb-2">{i+1}. {q.stem}...</p>
               <div className="flex gap-3">
                 {q.opts.map((opt) => (
                   <button
                    key={opt.val}
                    onClick={() => {
                      setEx2({...ex2, [q.id]: opt.val});
                      setCheckEx2(false);
                    }}
                    className={`px-4 py-2 rounded border text-sm transition-all ${
                      ex2[q.id as keyof Exercise2State] === opt.val
                        ? 'bg-indigo-100 border-indigo-500 text-indigo-800 font-bold shadow-inner'
                        : 'bg-white hover:bg-gray-50 border-gray-200'
                    }`}
                   >
                     {opt.label}
                   </button>
                 ))}
               </div>
               {checkEx2 && (
                 <div className="mt-2 text-sm animate-fadeIn">
                   {ex2[q.id as keyof Exercise2State] === q.correct ? (
                     <span className="text-green-600 flex items-center gap-1"><Check className="w-4 h-4"/> ¡Correcto!</span>
                   ) : (
                     <span className="text-red-500 flex items-center gap-1"><X className="w-4 h-4"/> Incorrecto. {q.note}</span>
                   )}
                 </div>
               )}
             </div>
          ))}
        </div>
        <button 
          onClick={() => setCheckEx2(true)}
          className="mt-6 text-sm bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
        >
          Verificar
        </button>
      </div>

       {/* Exercise 3 */}
       <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">Ejercicio 3 – Avanzado</h3>
          <span className="text-xs font-bold px-2 py-1 bg-purple-100 text-purple-700 rounded-full">Escritura</span>
        </div>
        <p className="text-gray-600 mb-4 text-sm">
          Describe una situación de estrés y tu preferencia para manejarla usando las estructuras aprendidas.
        </p>
        
        <textarea
          value={ex3Text}
          onChange={(e) => setEx3Text(e.target.value)}
          placeholder="Ej: When I feel tired, I would prefer..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 outline-none h-32 resize-none"
        />

        <div className="mt-4">
          <button 
            onClick={() => setShowModel(!showModel)}
            className="text-indigo-600 text-sm font-medium hover:underline flex items-center gap-1"
          >
            {showModel ? 'Ocultar modelo' : 'Ver modelo de respuesta'}
          </button>
          
          {showModel && (
            <div className="mt-3 bg-gray-50 p-4 rounded-lg border border-gray-200 text-gray-700 italic text-sm animate-fadeIn">
              "When I feel stressed, I would prefer quiet music. I would prefer to rest for a few minutes."
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

const SummarySection = () => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-fadeIn text-center space-y-6">
    <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-2">
      <CheckCircle className="h-8 w-8 text-green-600" />
    </div>
    
    <h2 className="text-3xl font-bold text-gray-800">¡Lección Completada!</h2>
    
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Has aprendido a expresar preferencias de manera educada y clara. Recuerda que esta herramienta es especialmente útil para establecer límites saludables en situaciones de estrés.
    </p>

    <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto text-left mt-8">
      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="font-bold text-gray-500 text-xs uppercase tracking-wide mb-1">Estructura 1</p>
        <p className="font-semibold text-gray-800">Would prefer + noun</p>
        <p className="text-sm text-gray-500 italic">"I would prefer silence"</p>
      </div>
      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="font-bold text-gray-500 text-xs uppercase tracking-wide mb-1">Estructura 2</p>
        <p className="font-semibold text-gray-800">Would prefer + to + verb</p>
        <p className="text-sm text-gray-500 italic">"I would prefer to rest"</p>
      </div>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('intro');

  const renderContent = () => {
    switch (activeTab) {
      case 'intro': return <IntroSection onNext={() => setActiveTab('lesson')} />;
      case 'lesson': return <LessonSection />;
      case 'exercises': return <ExercisesSection />;
      case 'summary': return <SummarySection />;
      default: return <IntroSection onNext={() => setActiveTab('lesson')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900 pb-12">
      <Header />
      
      <main className="max-w-4xl mx-auto mt-8 px-4">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-t-xl shadow-sm border-b border-gray-200 flex overflow-x-auto no-scrollbar">
          <TabButton 
            active={activeTab === 'intro'} 
            onClick={() => setActiveTab('intro')} 
            icon={Home} 
            label="Inicio" 
          />
          <TabButton 
            active={activeTab === 'lesson'} 
            onClick={() => setActiveTab('lesson')} 
            icon={Book} 
            label="Lección" 
          />
          <TabButton 
            active={activeTab === 'exercises'} 
            onClick={() => setActiveTab('exercises')} 
            icon={PenTool} 
            label="Ejercicios" 
          />
          <TabButton 
            active={activeTab === 'summary'} 
            onClick={() => setActiveTab('summary')} 
            icon={CheckCircle} 
            label="Cierre" 
          />
        </div>

        {/* Content Area */}
        <div className="bg-white/50 min-h-[500px] mt-6">
          {renderContent()}
        </div>

        {/* Footer Navigation Hints */}
        <div className="flex justify-between mt-8 text-gray-400 text-sm px-2">
          <button 
            disabled={activeTab === 'intro'}
            onClick={() => {
              const tabs: TabType[] = ['intro', 'lesson', 'exercises', 'summary'];
              const idx = tabs.indexOf(activeTab);
              if(idx > 0) setActiveTab(tabs[idx-1]);
            }}
            className="hover:text-indigo-600 disabled:opacity-30 disabled:hover:text-gray-400 transition-colors"
          >
            ← Anterior
          </button>
          <button 
            disabled={activeTab === 'summary'}
            onClick={() => {
              const tabs: TabType[] = ['intro', 'lesson', 'exercises', 'summary'];
              const idx = tabs.indexOf(activeTab);
              if(idx < tabs.length - 1) setActiveTab(tabs[idx+1]);
            }}
            className="hover:text-indigo-600 disabled:opacity-30 disabled:hover:text-gray-400 transition-colors"
          >
            Siguiente →
          </button>
        </div>

      </main>
    </div>
  );
}