import React, { useState } from 'react';
import { BookOpen, Music, Clock, PenTool, CheckCircle, Award, ChevronRight, RotateCcw, Star } from 'lucide-react';

// --- Types ---
type TabId = 'objective' | 'grammar' | 'culture' | 'summary' | 'exercises';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Data ---
const TABS: Tab[] = [
  { id: 'objective', label: 'Objetivo', icon: <Award size={18} /> },
  { id: 'grammar', label: 'Gramática', icon: <BookOpen size={18} /> },
  { id: 'culture', label: 'Cultura', icon: <Music size={18} /> },
  { id: 'summary', label: 'Resumen', icon: <CheckCircle size={18} /> },
  { id: 'exercises', label: 'Ejercicios', icon: <PenTool size={18} /> },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('objective');

  // --- Content Renderers ---

  const renderObjective = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
          <Award className="text-indigo-600" />
          Objetivo de la lección
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Aprender a hablar de épocas pasadas en inglés (American English), describiendo cómo eran y por qué fueron importantes.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-indigo-700 mb-2">Gramática Clave</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Pasado del verbo to be (<strong>was / were</strong>)</li>
              <li>Intensificadores (<strong>very, really</strong>)</li>
              <li>Adjetivos descriptivos</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-amber-700 mb-2">Contexto</h3>
            <p className="text-gray-600">
              Énfasis en el impacto cultural de los <em>Golden Oldies</em> (canciones clásicas).
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGrammar = () => (
    <div className="space-y-8 animate-fadeIn">
      {/* Section 1 */}
      <section>
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-blue-100 text-blue-800 text-sm font-bold px-2 py-1 rounded">1</span>
          Describir los años pasados
        </h3>
        <p className="text-gray-600 mb-4">
          Para describir una época pasada, se usan adjetivos con el verbo <strong>to be</strong> en pasado (was / were).
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-700 mb-3">Vocabulario Clave (Adjetivos)</h4>
            <div className="grid grid-cols-2 gap-2">
              <span className="bg-white px-3 py-2 rounded shadow-sm border text-gray-600">Different (Diferente)</span>
              <span className="bg-white px-3 py-2 rounded shadow-sm border text-gray-600">Interesting (Interesante)</span>
              <span className="bg-white px-3 py-2 rounded shadow-sm border text-gray-600">Important (Importante)</span>
              <span className="bg-white px-3 py-2 rounded shadow-sm border text-gray-600">Special (Especial)</span>
            </div>
          </div>

          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
            <h4 className="font-semibold text-indigo-800 mb-3">Estructura Básica</h4>
            <div className="text-center bg-white p-3 rounded-lg border border-indigo-200 text-indigo-600 font-mono text-sm md:text-base mb-3 shadow-sm">
              Subject + was/were + very/really + adjective
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500"/> Life <strong>was very different</strong> in the past.</p>
              <p className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500"/> Those years <strong>were really interesting</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section>
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-blue-100 text-blue-800 text-sm font-bold px-2 py-1 rounded">2</span>
          Uso de Intensificadores
        </h3>
        <p className="text-gray-600 mb-4">
          En contextos históricos, <strong>very</strong> y <strong>really</strong> sirven para enfatizar la relevancia emocional y cultural.
        </p>
        
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
          <h4 className="font-bold text-amber-800 mb-1">Nota de precisión:</h4>
          <p className="text-amber-700 text-sm">
            Los intensificadores siempre van <strong>antes</strong> del adjetivo, nunca después.
          </p>
          <div className="mt-2 flex gap-4 text-sm">
            <span className="text-green-700 font-medium">✓ very important</span>
            <span className="text-red-500 line-through decoration-2">important very</span>
          </div>
        </div>
      </section>
    </div>
  );

  const renderCulture = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
          <Music size={200} />
        </div>
        
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 relative z-10">
          <Music className="text-amber-400" />
          El impacto cultural de los "Golden Oldies"
        </h2>
        
        <p className="text-gray-300 relative z-10 leading-relaxed max-w-2xl">
          Los <em>golden oldies</em> no solo fueron canciones populares, sino que tuvieron un impacto cultural importante. 
          Usamos las estructuras aprendidas para explicar por qué esa época sigue siendo recordada.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">Ejemplos de Impacto</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="mt-1 min-w-[24px]"><Star size={20} className="text-amber-400 fill-current" /></div>
                <div>
                  <p className="font-medium text-gray-800">The music was very important for young people.</p>
                  <p className="text-sm text-gray-500">La música fue muy importante para los jóvenes.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 min-w-[24px]"><Star size={20} className="text-amber-400 fill-current" /></div>
                <div>
                  <p className="font-medium text-gray-800">That time was really special.</p>
                  <p className="text-sm text-gray-500">Aquel tiempo fue realmente especial.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 min-w-[24px]"><Star size={20} className="text-amber-400 fill-current" /></div>
                <div>
                  <p className="font-medium text-gray-800">Golden oldies were very popular and meaningful.</p>
                  <p className="text-sm text-gray-500">Los clásicos fueron muy populares y significativos.</p>
                </div>
              </li>
            </ul>
         </div>

         <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col justify-center items-center text-center">
            <Clock size={48} className="text-blue-400 mb-4" />
            <h3 className="text-lg font-bold text-blue-900 mb-2">¿Por qué recordamos?</h3>
            <p className="text-blue-800">
              Estas frases explican la conexión emocional. Al usar intensificadores como <strong>really</strong>, transmitimos sentimiento, no solo hechos.
            </p>
         </div>
      </div>
    </div>
  );

  const renderSummary = () => (
    <div className="animate-fadeIn max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-indigo-600 p-6 text-white text-center">
          <h2 className="text-2xl font-bold">Resumen Clave</h2>
          <p className="opacity-80">Recuerda estos 3 pilares para hablar del pasado</p>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 font-bold">1</div>
            <div>
              <h4 className="font-bold text-gray-800 text-lg">El verbo</h4>
              <p className="text-gray-600">Para hablar del pasado se usa <strong>was / were</strong>.</p>
            </div>
          </div>
          
          <div className="w-full h-px bg-gray-100"></div>

          <div className="flex items-start gap-4">
            <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 font-bold">2</div>
            <div>
              <h4 className="font-bold text-gray-800 text-lg">La descripción</h4>
              <p className="text-gray-600">Los <strong>adjetivos</strong> describen cómo era una época.</p>
            </div>
          </div>

          <div className="w-full h-px bg-gray-100"></div>

          <div className="flex items-start gap-4">
            <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 font-bold">3</div>
            <div>
              <h4 className="font-bold text-gray-800 text-lg">La intensidad</h4>
              <p className="text-gray-600"><strong>very</strong> y <strong>really</strong> intensifican la descripción y ayudan a explicar el impacto cultural.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 text-center text-gray-500 italic">
          "That period was really important for culture."
        </div>
      </div>
    </div>
  );

  const renderExercises = () => (
    <ExercisesComponent />
  );

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans pb-12">
      {/* Header */}
      <header className="bg-white shadow-sm  top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white p-2 rounded-lg">
              <Clock size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-none">English History</h1>
              <p className="text-sm text-gray-500">Talking about past eras</p>
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="max-w-5xl mx-auto px-4 mt-2 overflow-x-auto no-scrollbar">
          <div className="flex space-x-1 border-b border-gray-200">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap
                  border-b-2 outline-none
                  ${activeTab === tab.id 
                    ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50 rounded-t-lg' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-t-lg'}
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
        {activeTab === 'objective' && renderObjective()}
        {activeTab === 'grammar' && renderGrammar()}
        {activeTab === 'culture' && renderCulture()}
        {activeTab === 'summary' && renderSummary()}
        {activeTab === 'exercises' && renderExercises()}
      </main>
      
    
    </div>
  );
}

// --- Interactive Exercises Component ---

function ExercisesComponent() {
  // Exercise 1 State
  const [ex1, setEx1] = useState({ q1was: '', q1very: '', q2were: '', q2really: '', q3was: '', q3really: '' });
  const [ex1Feedback, setEx1Feedback] = useState<null | 'correct' | 'incorrect'>(null);

  // Exercise 2 State
  const [ex2, setEx2] = useState({ q1: '', q2: '', q3: '' });
  const [ex2Feedback, setEx2Feedback] = useState<{ [key: string]: boolean | null }>({ q1: null, q2: null, q3: null });

  // Exercise 3 State
  const [ex3Text, setEx3Text] = useState('');

  // Handlers
  const checkEx1 = () => {
    const isCorrect = 
      ex1.q1was.toLowerCase().trim() === 'was' && 
      (ex1.q1very.toLowerCase().trim() === 'very' || ex1.q1very.toLowerCase().trim() === 'really') &&
      ex1.q2were.toLowerCase().trim() === 'were' &&
      (ex1.q2really.toLowerCase().trim() === 'really' || ex1.q2really.toLowerCase().trim() === 'very') &&
      ex1.q3was.toLowerCase().trim() === 'was' &&
      (ex1.q3really.toLowerCase().trim() === 'very' || ex1.q3really.toLowerCase().trim() === 'really');
    
    setEx1Feedback(isCorrect ? 'correct' : 'incorrect');
  };

  const checkEx2 = () => {
    const checkSentence = (sentence: string) => {
      const lower = sentence.toLowerCase();
      return (lower.includes('very') || lower.includes('really'));
    };

    setEx2Feedback({
      q1: checkSentence(ex2.q1),
      q2: checkSentence(ex2.q2),
      q3: checkSentence(ex2.q3),
    });
  };

  const resetExercises = () => {
    setEx1({ q1was: '', q1very: '', q2were: '', q2really: '', q3was: '', q3really: '' });
    setEx1Feedback(null);
    setEx2({ q1: '', q2: '', q3: '' });
    setEx2Feedback({ q1: null, q2: null, q3: null });
    setEx3Text('');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Práctica Interactiva</h2>
        <button onClick={resetExercises} className="text-sm text-gray-500 flex items-center gap-1 hover:text-indigo-600 transition">
          <RotateCcw size={14} /> Reiniciar todo
        </button>
      </div>

      {/* Exercise 1 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg text-indigo-800">Ejercicio 1: Completa la oración</h3>
          <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded">Básico</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">Usa: <em>was, were, very, really</em>.</p>

        <div className="space-y-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            Life 
            <input 
              value={ex1.q1was} 
              onChange={(e) => setEx1({...ex1, q1was: e.target.value})}
              className="mx-2 w-16 p-1 border-b-2 border-indigo-200 focus:border-indigo-500 bg-transparent outline-none text-center font-semibold text-indigo-700" 
              placeholder="..."
            /> 
            <input 
              value={ex1.q1very} 
              onChange={(e) => setEx1({...ex1, q1very: e.target.value})}
              className="mx-2 w-16 p-1 border-b-2 border-indigo-200 focus:border-indigo-500 bg-transparent outline-none text-center font-semibold text-indigo-700" 
              placeholder="..."
            /> 
            different in the past.
          </div>
          
          <div className="p-3 bg-gray-50 rounded-lg">
            Those years
            <input 
              value={ex1.q2were} 
              onChange={(e) => setEx1({...ex1, q2were: e.target.value})}
              className="mx-2 w-16 p-1 border-b-2 border-indigo-200 focus:border-indigo-500 bg-transparent outline-none text-center font-semibold text-indigo-700" 
              placeholder="..."
            /> 
            <input 
              value={ex1.q2really} 
              onChange={(e) => setEx1({...ex1, q2really: e.target.value})}
              className="mx-2 w-16 p-1 border-b-2 border-indigo-200 focus:border-indigo-500 bg-transparent outline-none text-center font-semibold text-indigo-700" 
              placeholder="..."
            /> 
            interesting.
          </div>

          <div className="p-3 bg-gray-50 rounded-lg">
            The music
            <input 
              value={ex1.q3was} 
              onChange={(e) => setEx1({...ex1, q3was: e.target.value})}
              className="mx-2 w-16 p-1 border-b-2 border-indigo-200 focus:border-indigo-500 bg-transparent outline-none text-center font-semibold text-indigo-700" 
              placeholder="..."
            /> 
            <input 
              value={ex1.q3really} 
              onChange={(e) => setEx1({...ex1, q3really: e.target.value})}
              className="mx-2 w-16 p-1 border-b-2 border-indigo-200 focus:border-indigo-500 bg-transparent outline-none text-center font-semibold text-indigo-700" 
              placeholder="..."
            /> 
            important for young people.
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <button 
            onClick={checkEx1}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Comprobar
          </button>
          {ex1Feedback === 'correct' && <span className="text-green-600 flex items-center gap-1 font-semibold"><CheckCircle size={16}/> ¡Correcto! Great job!</span>}
          {ex1Feedback === 'incorrect' && <span className="text-red-500 font-semibold">Inténtalo de nuevo. Revisa was/were.</span>}
        </div>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg text-indigo-800">Ejercicio 2: Intensifica la idea</h3>
          <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Intermedio</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">Reescribe las oraciones agregando <strong>very</strong> o <strong>really</strong>.</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">1. That time was special.</label>
            <div className="flex gap-2">
                <input 
                type="text" 
                className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-200 outline-none ${ex2Feedback.q1 === true ? 'border-green-500 bg-green-50' : ''}`}
                placeholder="Escribe aquí..." 
                value={ex2.q1}
                onChange={(e) => setEx2({...ex2, q1: e.target.value})}
                />
                {ex2Feedback.q1 === true && <CheckCircle className="text-green-500 mt-2" size={20} />}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">2. The 1960s were important for music.</label>
            <div className="flex gap-2">
                <input 
                type="text" 
                className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-200 outline-none ${ex2Feedback.q2 === true ? 'border-green-500 bg-green-50' : ''}`}
                placeholder="Escribe aquí..." 
                value={ex2.q2}
                onChange={(e) => setEx2({...ex2, q2: e.target.value})}
                />
                {ex2Feedback.q2 === true && <CheckCircle className="text-green-500 mt-2" size={20} />}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">3. The past was different.</label>
            <div className="flex gap-2">
                <input 
                type="text" 
                className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-200 outline-none ${ex2Feedback.q3 === true ? 'border-green-500 bg-green-50' : ''}`}
                placeholder="Escribe aquí..." 
                value={ex2.q3}
                onChange={(e) => setEx2({...ex2, q3: e.target.value})}
                />
                {ex2Feedback.q3 === true && <CheckCircle className="text-green-500 mt-2" size={20} />}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button 
            onClick={checkEx2}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Validar Respuestas
          </button>
          <p className="text-xs text-gray-400 mt-2">* El sistema verificará si incluiste un intensificador.</p>
        </div>
      </div>

      {/* Exercise 3 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg text-indigo-800">Ejercicio 3: Descripción histórica</h3>
          <span className="text-xs font-semibold bg-red-100 text-red-800 px-2 py-1 rounded">Avanzado</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">
            Escribe 2–3 oraciones sobre una época pasada. Usa: <em>was/were</em>, adjetivos y <em>very/really</em>.
        </p>
        
        <textarea 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none min-h-[100px]"
            placeholder="Ejemplo: Life was very different in the past. That period was really important..."
            value={ex3Text}
            onChange={(e) => setEx3Text(e.target.value)}
        ></textarea>

        {ex3Text.length > 10 && (
            <div className="mt-3 p-3 bg-blue-50 text-blue-800 text-sm rounded-lg">
                <p className="font-bold mb-1">Autoevaluación:</p>
                <ul className="list-disc list-inside">
                    <li className={ex3Text.includes('was') || ex3Text.includes('were') ? 'text-green-600' : 'text-gray-500'}>
                        Usaste 'was' o 'were'?
                    </li>
                    <li className={ex3Text.includes('very') || ex3Text.includes('really') ? 'text-green-600' : 'text-gray-500'}>
                        Usaste intensificadores (very/really)?
                    </li>
                </ul>
            </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-xl text-center">
         <h4 className="font-bold text-lg mb-2">¡Lección Finalizada!</h4>
         <p className="text-gray-300 text-sm">
            Estas estructuras te permiten explicar de forma clara y expresiva por qué ciertas épocas fueron tan especiales.
         </p>
      </div>
    </div>
  );
}