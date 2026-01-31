import React, { useState } from 'react';
import { Book, Users, Star, Music, PenTool, CheckCircle, ArrowRight, Mic2 } from 'lucide-react';

// --- Types & Interfaces ---

interface VocabularyItem {
  word: string;
  translation: string;
  example: string;
}

interface Question {
  id: number;
  questionParts: string[];
  expected: string[];
  placeholder: string[];
}

// --- Main Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('intro');

  const renderContent = () => {
    switch (activeTab) {
      case 'intro':
        return <IntroductionSection changeTab={setActiveTab} />;
      case 'vocab':
        return <VocabularySection />;
      case 'grammar':
        return <GrammarSection />;
      case 'bio':
        return <BiographySection />;
      case 'exercises':
        return <ExercisesSection />;
      default:
        return <IntroductionSection changeTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-amber-200">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Mic2 size={32} className="text-amber-100" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Describing People & Personalities</h1>
           
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className=" top-0 z-10 bg-white border-b border-slate-200 shadow-sm overflow-x-auto">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-1 min-w-max">
            <TabButton 
              id="intro" 
              label="Introducción" 
              icon={<Book size={18} />} 
              active={activeTab === 'intro'} 
              onClick={setActiveTab} 
            />
            <TabButton 
              id="vocab" 
              label="Vocabulario" 
              icon={<Star size={18} />} 
              active={activeTab === 'vocab'} 
              onClick={setActiveTab} 
            />
            <TabButton 
              id="grammar" 
              label="Gramática" 
              icon={<PenTool size={18} />} 
              active={activeTab === 'grammar'} 
              onClick={setActiveTab} 
            />
            <TabButton 
              id="bio" 
              label="Biografías" 
              icon={<Users size={18} />} 
              active={activeTab === 'bio'} 
              onClick={setActiveTab} 
            />
            <TabButton 
              id="exercises" 
              label="Ejercicios" 
              icon={<CheckCircle size={18} />} 
              active={activeTab === 'exercises'} 
              onClick={setActiveTab} 
            />
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 min-h-[500px]">
          {renderContent()}
        </div>
      </main>

    </div>
  );
}

// --- Sub-Components ---

const TabButton = ({ id, label, icon, active, onClick }: { id: string, label: string, icon: React.ReactNode, active: boolean, onClick: (id: string) => void }) => (
  <button
    onClick={() => onClick(id)}
    className={`
      flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-all duration-200
      ${active 
        ? 'border-amber-500 text-amber-600 bg-amber-50/50' 
        : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'}
    `}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-100 flex items-center gap-2">
    {children}
  </h2>
);

// --- Content Sections ---

const IntroductionSection = ({ changeTab }: { changeTab: (tab: string) => void }) => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle>Objetivo de la lección</SectionTitle>
    <div className="prose prose-slate max-w-none text-slate-600">
      <p className="text-lg leading-relaxed">
        Aprenderás a describir personas y personalidades en inglés (American English), 
        especialmente cantantes famosos del pasado, usando adjetivos de personalidad, 
        el pasado simple del verbo <strong>to be</strong> y los intensificadores <strong>very</strong> y <strong>really</strong>.
      </p>
    </div>

    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
      <h3 className="text-lg font-bold text-amber-800 mb-2 flex items-center gap-2">
        <Music size={20} />
        ¿Qué son los "Golden Oldies"?
      </h3>
      <p className="text-amber-900/80">
        La expresión <em>golden oldies</em> se usa para hablar de cantantes y artistas clásicos que fueron muy populares en el pasado (como Elvis Presley, Aretha Franklin o The Beatles).
        Cuando los describimos, es común usar el pasado simple del verbo <strong>to be (was / were)</strong>.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-4 mt-8">
      <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
        <h4 className="font-bold text-slate-700 mb-2">Estructura Básica</h4>
        <code className="block bg-slate-800 text-green-400 p-3 rounded text-sm mb-3">
          Subject + was / were + (very) + adjective
        </code>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
          <li>He <strong>was</strong> very talented.</li>
          <li>She <strong>was</strong> really popular.</li>
        </ul>
      </div>
   
    </div>
  </div>
);

const VocabularySection = () => {
  const words: VocabularyItem[] = [
    { word: 'Kind', translation: 'Amable', example: 'He is kind and helps everyone.' },
    { word: 'Friendly', translation: 'Amistoso/a', example: 'She was really friendly with fans.' },
    { word: 'Creative', translation: 'Creativo/a', example: 'The artist was very creative.' },
    { word: 'Famous', translation: 'Famoso/a', example: 'They were famous in the 60s.' },
    { word: 'Talented', translation: 'Talentoso/a', example: 'He was a talented musician.' },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <SectionTitle>Vocabulario Clave</SectionTitle>
      <p className="text-slate-600 mb-4">
        Estos adjetivos pueden usarse en presente (is/are) o pasado (was/were), según el contexto.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {words.map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-200 transition-all group">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors">{item.word}</h3>
              <span className="text-xs font-semibold bg-slate-100 text-slate-500 px-2 py-1 rounded-full uppercase tracking-wide">Adjective</span>
            </div>
            <p className="text-md text-amber-700 font-medium mb-3">{item.translation}</p>
            <div className="bg-slate-50 p-3 rounded text-sm text-slate-600 italic border-l-2 border-slate-300">
              "{item.example}"
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const GrammarSection = () => (
  <div className="space-y-8 animate-fadeIn">
    <SectionTitle>Gramática: very vs really</SectionTitle>

    {/* Explanation */}
    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
      <h3 className="font-bold text-blue-900 mb-2 text-lg">Función e Intensidad</h3>
      <p className="text-blue-800/80 mb-4">
        <strong>very</strong> y <strong>really</strong> se usan para intensificar un adjetivo y dar más fuerza a la descripción.
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-6">
        <div className="bg-white shadow-sm px-4 py-2 rounded-lg border border-blue-200 font-mono text-blue-700">very / really</div>
        <ArrowRight className="text-blue-300" />
        <div className="bg-white shadow-sm px-4 py-2 rounded-lg border border-blue-200 font-mono text-slate-600">Adjective</div>
      </div>

      <div className="bg-white/60 p-4 rounded-lg text-sm text-blue-800">
        <strong className="block mb-1">Nota de precisión:</strong>
        Los intensificadores siempre van <u>antes</u> del adjetivo, nunca después.
      </div>
    </div>

    {/* Examples Table */}
    <div>
      <h3 className="font-bold text-slate-800 mb-4">Ejemplos de Uso</h3>
      <div className="overflow-hidden rounded-lg border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Subject + Verb</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-600 uppercase tracking-wider">Intensifier</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Adjective</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-slate-700">He is</td>
              <td className="px-6 py-4 whitespace-nowrap font-bold text-amber-600">very</td>
              <td className="px-6 py-4 whitespace-nowrap text-slate-700">talented.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-slate-700">She was</td>
              <td className="px-6 py-4 whitespace-nowrap font-bold text-amber-600">really</td>
              <td className="px-6 py-4 whitespace-nowrap text-slate-700">friendly.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-slate-700">The singer was</td>
              <td className="px-6 py-4 whitespace-nowrap font-bold text-amber-600">very</td>
              <td className="px-6 py-4 whitespace-nowrap text-slate-700">famous.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const BiographySection = () => (
  <div className="space-y-6 animate-fadeIn">
    <SectionTitle>Biografías Cortas</SectionTitle>
    
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1 space-y-4 text-slate-600">
        <p>
          Las biografías cortas combinan información básica con adjetivos de personalidad. Normalmente incluyen:
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold">1</span>
            Referencia a la persona
          </li>
          <li className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold">2</span>
            Época en la que fue famosa
          </li>
          <li className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold">3</span>
            Rasgos principales de personalidad
          </li>
        </ul>
      </div>

      <div className="order-1 md:order-2">
        {/* Vinyl Record Card Effect */}
        <div className="bg-slate-900 text-white p-6 rounded-xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
          
          <div className="flex items-center gap-3 mb-4 border-b border-slate-700 pb-3">
            <div className="bg-amber-500 p-2 rounded-full text-slate-900">
              <Music size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Example Biography</h3>
              <p className="text-slate-400 text-xs uppercase tracking-widest">Golden Oldies</p>
            </div>
          </div>

          <p className="font-serif italic text-lg leading-relaxed text-slate-200">
            "He was a famous singer from the golden oldies. He was <span className="text-amber-400 font-sans not-italic font-bold">very talented</span> and <span className="text-amber-400 font-sans not-italic font-bold">creative</span>. People loved his music, and he was <span className="text-amber-400 font-sans not-italic font-bold">really popular</span> at that time."
          </p>
        </div>
      </div>
    </div>

    {/* Summary Section */}
    <div className="mt-8 bg-slate-50 rounded-xl p-6 border-t-2 border-slate-200">
      <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Star size={20} className="text-amber-500" />
        Resumen Clave
      </h3>
      <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
        <div className="bg-white p-3 rounded border border-slate-200 shadow-sm">
          Los adjetivos de personalidad describen cómo es o era una persona.
        </div>
        <div className="bg-white p-3 rounded border border-slate-200 shadow-sm">
          Para figuras del pasado, se usa <strong>was / were</strong>.
        </div>
        <div className="bg-white p-3 rounded border border-slate-200 shadow-sm">
          <strong>very</strong> y <strong>really</strong> intensifican las descripciones.
        </div>
        <div className="bg-white p-3 rounded border border-slate-200 shadow-sm">
          Las biografías cortas combinan tiempo pasado + adjetivos.
        </div>
      </div>
    </div>
  </div>
);

const ExercisesSection = () => {
  // State for Exercise 1
  const [ex1Inputs, setEx1Inputs] = useState<{ [key: string]: string }>({});
  const [ex1Results, setEx1Results] = useState<{ [key: number]: boolean | null }>({});

  // State for Exercise 2
  const [ex2Inputs, setEx2Inputs] = useState<{ [key: number]: string }>({});
  const [ex2Results, setEx2Results] = useState<{ [key: number]: string }>({}); // 'correct', 'incorrect', or empty

  const checkEx1 = () => {
    const results: { [key: number]: boolean } = {};
    
    // Q1: He ___ a ___ talented singer. (was, very/really)
    const q1p1 = ex1Inputs['1-1']?.toLowerCase().trim();
    const q1p2 = ex1Inputs['1-2']?.toLowerCase().trim();
    results[1] = q1p1 === 'was' && (q1p2 === 'very' || q1p2 === 'really');

    // Q2: She ___ ___ famous in the 1950s. (was, very/really)
    const q2p1 = ex1Inputs['2-1']?.toLowerCase().trim();
    const q2p2 = ex1Inputs['2-2']?.toLowerCase().trim();
    results[2] = q2p1 === 'was' && (q2p2 === 'very' || q2p2 === 'really');

    // Q3: The artist ___ kind and friendly. (was)
    const q3 = ex1Inputs['3-1']?.toLowerCase().trim();
    results[3] = q3 === 'was';

    setEx1Results(results);
  };

  const checkEx2 = (id: number, original: string) => {
    const input = ex2Inputs[id]?.toLowerCase().trim() || "";
    // Logic: Must contain original core words + very or really
    // Simple heuristic for this demo
    const hasIntensifier = input.includes('very') || input.includes('really');
    
    let isCorrect = false;
    if (id === 1) isCorrect = hasIntensifier && input.includes('he was') && input.includes('talented');
    if (id === 2) isCorrect = hasIntensifier && input.includes('she was') && input.includes('friendly');
    if (id === 3) isCorrect = hasIntensifier && input.includes('the singer was') && input.includes('famous');

    setEx2Results(prev => ({ ...prev, [id]: isCorrect ? 'correct' : 'incorrect' }));
  };

  return (
    <div className="space-y-10 animate-fadeIn pb-10">
      <SectionTitle>Práctica Interactiva</SectionTitle>

      {/* Exercise 1 */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-slate-800">Ejercicio 1: Completa la oración</h3>
          <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">Básico</span>
        </div>
        <p className="text-slate-600 text-sm mb-4">Completa los espacios con <strong>was</strong>, <strong>very</strong> o <strong>really</strong>.</p>
        
        <div className="space-y-4">
          {/* Q1 */}
          <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-50 rounded">
            <span>He</span>
            <input 
              type="text" 
              className={`border p-1 w-16 rounded text-center ${ex1Results[1] === true ? 'border-green-500 bg-green-50' : ex1Results[1] === false ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
              onChange={(e) => setEx1Inputs({...ex1Inputs, '1-1': e.target.value})}
            />
            <span>a</span>
            <input 
              type="text" 
              className={`border p-1 w-16 rounded text-center ${ex1Results[1] === true ? 'border-green-500 bg-green-50' : ex1Results[1] === false ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
              onChange={(e) => setEx1Inputs({...ex1Inputs, '1-2': e.target.value})}
            />
            <span>talented singer.</span>
            {ex1Results[1] === true && <CheckCircle size={16} className="text-green-500" />}
          </div>

          {/* Q2 */}
          <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-50 rounded">
            <span>She</span>
            <input 
              type="text" 
              className={`border p-1 w-16 rounded text-center ${ex1Results[2] === true ? 'border-green-500 bg-green-50' : ex1Results[2] === false ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
              onChange={(e) => setEx1Inputs({...ex1Inputs, '2-1': e.target.value})}
            />
            <input 
              type="text" 
              className={`border p-1 w-16 rounded text-center ${ex1Results[2] === true ? 'border-green-500 bg-green-50' : ex1Results[2] === false ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
              onChange={(e) => setEx1Inputs({...ex1Inputs, '2-2': e.target.value})}
            />
            <span>famous in the 1950s.</span>
            {ex1Results[2] === true && <CheckCircle size={16} className="text-green-500" />}
          </div>

           {/* Q3 */}
           <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-50 rounded">
            <span>The artist</span>
            <input 
              type="text" 
              className={`border p-1 w-16 rounded text-center ${ex1Results[3] === true ? 'border-green-500 bg-green-50' : ex1Results[3] === false ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
              onChange={(e) => setEx1Inputs({...ex1Inputs, '3-1': e.target.value})}
            />
            <span>kind and friendly.</span>
            {ex1Results[3] === true && <CheckCircle size={16} className="text-green-500" />}
          </div>
        </div>

        <button 
          onClick={checkEx1}
          className="mt-4 bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors text-sm font-medium"
        >
          Comprobar respuestas
        </button>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-slate-800">Ejercicio 2: Intensifica la descripción</h3>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Intermedio</span>
        </div>
        <p className="text-slate-600 text-sm mb-4">Reescribe las oraciones agregando <strong>very</strong> o <strong>really</strong>.</p>
        
        <div className="space-y-6">
          {[
            { id: 1, text: "He was talented." },
            { id: 2, text: "She was friendly." },
            { id: 3, text: "The singer was famous." }
          ].map((q) => (
            <div key={q.id} className="space-y-2">
              <p className="font-medium text-slate-700">Original: <span className="italic text-slate-500">{q.text}</span></p>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Escribe la oración completa..."
                  className="border border-slate-300 p-2 rounded w-full text-sm focus:border-blue-500 outline-none"
                  onChange={(e) => setEx2Inputs({...ex2Inputs, [q.id]: e.target.value})}
                />
                <button 
                  onClick={() => checkEx2(q.id, q.text)}
                  className="bg-blue-600 text-white px-3 rounded hover:bg-blue-700"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
              {ex2Results[q.id] === 'correct' && <p className="text-xs text-green-600 font-bold flex items-center gap-1"><CheckCircle size={12}/> ¡Correcto!</p>}
              {ex2Results[q.id] === 'incorrect' && <p className="text-xs text-red-500">Intenta de nuevo. Asegúrate de usar 'very' o 'really' antes del adjetivo.</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Exercise 3 */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-amber-900">Ejercicio 3: Mini Biografía</h3>
          <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">Avanzado</span>
        </div>
        <p className="text-slate-700 text-sm mb-4">
          Imagina un cantante de los "golden oldies". Escribe una biografía de 2-3 oraciones usando <strong>was</strong> y al menos dos adjetivos con intensificadores.
        </p>
        <textarea 
          className="w-full p-4 rounded-lg border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none min-h-[100px] text-slate-700"
          placeholder="Ej: Elvis Presley was a famous singer. He was really talented..."
        ></textarea>
        <p className="text-xs text-slate-500 mt-2 italic text-right">Este es un ejercicio de escritura libre para tu práctica personal.</p>
      </div>
    </div>
  );
};