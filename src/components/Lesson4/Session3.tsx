import React, { useState } from 'react';
import { 
  Music, 
  Headphones, 
  Mic, 
  BookOpen, 
  CheckCircle, 
  AlertCircle, 
  Play, 
  Info,
  ChevronRight,
  Star
} from 'lucide-react';

// --- Interfaces & Types ---

type TabId = 'objective' | 'description' | 'opinion' | 'difference' | 'exercises' | 'summary';

interface TabItem {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Components ---

const Header = () => (
  <header className="bg-indigo-600 text-white p-6 rounded-t-xl shadow-lg">
    <div className="flex items-center gap-3 mb-2">
      <Music className="w-8 h-8" />
      <h1 className="text-2xl font-bold">Talking about Music</h1>
    </div>
     </header>
);

const Navigation = ({ activeTab, setTab }: { activeTab: TabId, setTab: (id: TabId) => void }) => {
  const tabs: TabItem[] = [
    { id: 'objective', label: 'Inicio', icon: <Star size={18} /> },
    { id: 'description', label: 'Descripción', icon: <BookOpen size={18} /> },
    { id: 'opinion', label: 'Opinión', icon: <Mic size={18} /> },
    { id: 'difference', label: 'Diferencias', icon: <Info size={18} /> },
    { id: 'exercises', label: 'Ejercicios', icon: <CheckCircle size={18} /> },
    { id: 'summary', label: 'Resumen', icon: <ChevronRight size={18} /> },
  ];

  return (
    <nav className="flex flex-wrap bg-white border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setTab(tab.id)}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors duration-200 
            ${activeTab === tab.id 
              ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50' 
              : 'text-gray-500 hover:text-indigo-500 hover:bg-gray-50'
            }`}
        >
          {tab.icon}
          <span className="hidden sm:inline">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

// --- Content Sections ---

const ObjectiveSection = ({ onNext }: { onNext: () => void }) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
      <h2 className="text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
        <Star className="w-5 h-5" /> Objetivo de la lección
      </h2>
      <p className="text-gray-700 leading-relaxed text-lg">
        Aprender a hablar sobre música y canciones en inglés, describiendo sus características y 
        expresando opiniones personales, usando correctamente los intensificadores 
        <span className="font-bold text-indigo-600 mx-1">very</span> y 
        <span className="font-bold text-indigo-600 mx-1">really</span> antes de los adjetivos.
      </p>
    </div>
    
    <div className="flex justify-end">
      <button onClick={onNext} className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
        Comenzar Lección <ChevronRight size={20} />
      </button>
    </div>
  </div>
);

const DescriptionSection = () => (
  <div className="space-y-6 animate-fadeIn">
    <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">1. Describir canciones con intensificadores</h2>
    <p className="text-gray-600">
      Para describir cómo es una canción, usamos adjetivos que indican sus características musicales.
    </p>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <h3 className="font-semibold text-indigo-600 mb-3 flex items-center gap-2">
          <BookOpen size={18} /> Vocabulario Clave
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li><span className="font-bold">slow:</span> lenta</li>
          <li><span className="font-bold">romantic:</span> romántica</li>
          <li><span className="font-bold">catchy:</span> pegajosa, fácil de recordar</li>
          <li><span className="font-bold">beautiful:</span> hermosa</li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <h3 className="font-semibold text-pink-600 mb-3 flex items-center gap-2">
          <Play size={18} /> Intensificadores
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li><span className="font-bold text-pink-600">very</span> slow</li>
          <li><span className="font-bold text-pink-600">really</span> romantic</li>
          <li><span className="font-bold text-pink-600">very</span> catchy</li>
        </ul>
      </div>
    </div>

    <div className="bg-slate-100 p-5 rounded-lg border-l-4 border-indigo-500">
      <h3 className="font-bold text-gray-800 mb-2">Estructura Básica</h3>
      <p className="font-mono text-sm md:text-base text-indigo-700 bg-white p-2 rounded inline-block mb-4 shadow-sm">
        Subject + is + very / really + adjective
      </p>
      <div className="space-y-2 italic text-gray-700">
        <p>"This song is <span className="font-bold text-indigo-600">very</span> slow."</p>
        <p>"The music is <span className="font-bold text-indigo-600">really</span> romantic."</p>
        <p>"It is a <span className="font-bold text-indigo-600">very</span> catchy song."</p>
      </div>
    </div>
  </div>
);

const OpinionSection = () => (
  <div className="space-y-6 animate-fadeIn">
    <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">2. Expresar opiniones personales</h2>
    <p className="text-gray-600">
      Las opiniones personales muestran lo que una persona piensa o siente. 
      Suelen incluir expresiones como <span className="italic">I think, I feel, I like</span>.
    </p>

    <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
      <div className="flex items-start gap-4">
        <div className="bg-orange-100 p-3 rounded-full text-orange-600">
          <Mic size={24} />
        </div>
        <div>
          <h3 className="font-bold text-orange-800 mb-3">Ejemplos de Opinión</h3>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              <span><span className="font-bold">I think</span> this song is really beautiful.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              <span>The melody is really beautiful.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              <span><span className="font-bold">I feel</span> very relaxed when I listen to this old song.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <p className="text-sm text-gray-500 italic text-center">
      Aquí, el hablante expresa una experiencia personal relacionada con la música.
    </p>
  </div>
);

const DifferenceSection = () => (
  <div className="space-y-6 animate-fadeIn">
    <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">3. Diferenciar descripción y opinión</h2>
    <p className="text-gray-600">
      Es importante distinguir entre describir una canción (hechos objetivos) y dar una opinión (sentimientos subjetivos).
    </p>

    <div className="grid md:grid-cols-2 gap-0 md:gap-8 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
      <div className="p-6 bg-blue-50">
        <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
          <Info className="w-5 h-5" /> Descripción
        </h3>
        <p className="text-sm text-blue-900 mb-4">Habla de características objetivas o generales.</p>
        <ul className="space-y-2 bg-white p-4 rounded-lg shadow-sm">
          <li className="text-gray-700">"The song is very slow."</li>
          <li className="text-gray-700">"It is really romantic."</li>
        </ul>
      </div>

      <div className="p-6 bg-purple-50">
        <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
          <Headphones className="w-5 h-5" /> Opinión
        </h3>
        <p className="text-sm text-purple-900 mb-4">Expresa lo que la persona piensa o siente.</p>
        <ul className="space-y-2 bg-white p-4 rounded-lg shadow-sm">
          <li className="text-gray-700">"<span className="font-bold">I think</span> the song is very beautiful."</li>
          <li className="text-gray-700">"<span className="font-bold">I like</span> this music because it is really catchy."</li>
        </ul>
      </div>
    </div>

    <div className="flex items-center gap-3 p-4 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-200">
      <AlertCircle className="w-6 h-6 flex-shrink-0" />
      <p className="text-sm">
        <strong>Nota:</strong> Ambas formas son correctas, pero cumplen funciones distintas en la comunicación.
      </p>
    </div>
  </div>
);

// --- Exercises Logic ---

const ExercisesSection = () => {
  const [ex1Inputs, setEx1Inputs] = useState({ q1: '', q2: '', q3: '' });
  const [ex1Feedback, setEx1Feedback] = useState({ q1: false, q2: false, q3: false });
  const [ex2Answers, setEx2Answers] = useState({ q1: '', q2: '', q3: '' });

  const checkEx1 = () => {
    const valid = ['very', 'really'];
    setEx1Feedback({
      q1: valid.includes(ex1Inputs.q1.toLowerCase().trim()),
      q2: valid.includes(ex1Inputs.q2.toLowerCase().trim()),
      q3: valid.includes(ex1Inputs.q3.toLowerCase().trim()),
    });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Ejercicios Prácticos</h2>

      {/* Ejercicio 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="font-bold text-indigo-700 mb-4">Ejercicio 1 – Básico: Completa con 'very' o 'really'</h3>
        <div className="space-y-4">
          {[
            { id: 'q1', text: 'This song is ___ slow.' },
            { id: 'q2', text: 'The music is ___ romantic.' },
            { id: 'q3', text: 'It is a ___ catchy song.' }
          ].map((q) => (
            <div key={q.id} className="flex items-center gap-2 flex-wrap">
              <span className="text-gray-700 text-lg">
                {q.text.split('___')[0]}
                <input 
                  type="text" 
                  className={`border-b-2 px-2 py-1 w-24 focus:outline-none focus:border-indigo-500 text-center
                    ${ex1Feedback[q.id as keyof typeof ex1Feedback] ? 'border-green-500 bg-green-50' : 'border-gray-300'}
                  `}
                  placeholder="type here"
                  value={ex1Inputs[q.id as keyof typeof ex1Inputs]}
                  onChange={(e) => setEx1Inputs({...ex1Inputs, [q.id]: e.target.value})}
                />
                {q.text.split('___')[1]}
              </span>
              {ex1Feedback[q.id as keyof typeof ex1Feedback] && <CheckCircle className="text-green-500 w-5 h-5" />}
            </div>
          ))}
          <button 
            onClick={checkEx1}
            className="mt-2 bg-indigo-600 text-white px-4 py-1.5 rounded text-sm hover:bg-indigo-700"
          >
            Verificar
          </button>
        </div>
      </div>

      {/* Ejercicio 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="font-bold text-indigo-700 mb-4">Ejercicio 2 – Intermedio: Identifica el tipo</h3>
        <p className="text-sm text-gray-500 mb-4">Selecciona si es Descripción (D) u Opinión (O).</p>
        
        <div className="space-y-4">
          {[
            { id: 'q1', text: 'The song is very slow.', correct: 'D' },
            { id: 'q2', text: 'I think this music is really beautiful.', correct: 'O' },
            { id: 'q3', text: 'It is a very catchy melody.', correct: 'D' },
          ].map((q) => (
            <div key={q.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded">
              <span className="text-gray-700 font-medium mb-2 sm:mb-0">{q.text}</span>
              <div className="flex gap-2">
                {['D', 'O'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setEx2Answers({...ex2Answers, [q.id]: opt})}
                    className={`px-3 py-1 rounded border transition-colors
                      ${ex2Answers[q.id as keyof typeof ex2Answers] === opt 
                        ? (opt === q.correct ? 'bg-green-100 border-green-500 text-green-700' : 'bg-red-100 border-red-500 text-red-700')
                        : 'bg-white border-gray-300 hover:bg-gray-100 text-gray-600'
                      }
                    `}
                  >
                    {opt === 'D' ? 'Descripción' : 'Opinión'}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ejercicio 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="font-bold text-indigo-700 mb-2">Ejercicio 3 – Avanzado: Práctica Libre</h3>
        <p className="text-sm text-gray-600 mb-4">
          Piensa en una canción antigua. Escribe una descripción y una opinión usando 'very' o 'really'.
        </p>
        <textarea 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition"
          rows={3}
          placeholder="Ej: The song is very slow. I think it is really beautiful..."
        ></textarea>
      </div>
    </div>
  );
};

const SummarySection = () => (
  <div className="space-y-6 animate-fadeIn">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Resumen y Cierre</h2>
    
    <div className="bg-indigo-900 text-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Star className="text-yellow-400" /> Puntos Clave
      </h3>
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
          <span>Los <strong>adjetivos</strong> describen características musicales (slow, catchy, romantic).</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
          <span><strong>Very</strong> y <strong>really</strong> intensifican esas descripciones.</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
          <span>Las opiniones suelen usar frases como <strong>I think</strong>, <strong>I feel</strong> o <strong>I like</strong>.</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
          <span><strong>Descripción ≠ Opinión:</strong> una informa hechos, la otra expresa un punto de vista personal.</span>
        </li>
      </ul>
    </div>

    <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center mt-8">
      <h3 className="text-lg font-bold text-green-800 mb-2">¡Felicitaciones! 🎉</h3>
      <p className="text-green-700">
        En esta lección aprendiste a describir canciones y a expresar opiniones personales en inglés. 
        Ahora puedes hablar de música de forma más clara, organizada y natural.
      </p>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('objective');

  const renderContent = () => {
    switch (activeTab) {
      case 'objective': return <ObjectiveSection onNext={() => setActiveTab('description')} />;
      case 'description': return <DescriptionSection />;
      case 'opinion': return <OpinionSection />;
      case 'difference': return <DifferenceSection />;
      case 'exercises': return <ExercisesSection />;
      case 'summary': return <SummarySection />;
      default: return <ObjectiveSection onNext={() => setActiveTab('description')} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden min-h-[600px] flex flex-col">
        <Header />
        <Navigation activeTab={activeTab} setTab={setActiveTab} />
        
        <main className="flex-grow p-6 md:p-8 bg-white">
          {renderContent()}
        </main>
        
       
      </div>
    </div>
  );
}