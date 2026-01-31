import React, { useState } from 'react';
import { 
  ShoppingCart, 
  GlassWater, 
  Coffee, 
  Milk, 
  Droplets, 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  BookOpen, 
  Edit3, 
  Lightbulb,
  ArrowRight,
  ShoppingBag,
  Info
} from 'lucide-react';

const L1S2App = () => {
  const [activeTab, setActiveTab] = useState('rules');

  const tabs = [
    { id: 'rules', label: '1. Reglas Clave', icon: <BookOpen size={18} /> },
    { id: 'examples', label: '2. Ejemplos Visuales', icon: <GlassWater size={18} /> },
    { id: 'practice', label: '3. Ejercicios', icon: <Edit3 size={18} /> },
    { id: 'reflection', label: '4. Reflexión', icon: <Lightbulb size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-6 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <ShoppingCart /> Lesson 1: Delicious Sandwiches
            </h1>
            <p className="text-indigo-200 mt-1">Sección 2: How Much vs How Many (Drinks & Shopping)</p>
          </div>
         
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 md:p-6">
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6 bg-white p-2 rounded-xl shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm md:text-base flex-1 md:flex-none justify-center ${
                activeTab === tab.id
                  ? 'bg-indigo-100 text-indigo-700 shadow-sm ring-1 ring-indigo-200'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content Area */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 min-h-[500px] overflow-hidden">
          {activeTab === 'rules' && <RulesSection />}
          {activeTab === 'examples' && <ExamplesSection />}
          {activeTab === 'practice' && <PracticeSection />}
          {activeTab === 'reflection' && <ReflectionSection />}
        </div>

      </main>

 
    </div>
  );
};

// --- COMPONENTS FOR EACH SECTION ---

const RulesSection = () => (
  <div className="p-6 md:p-8 animate-fadeIn">
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Idea Clave (Regla Central)</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        En inglés usamos <span className="font-bold text-indigo-600">how much</span> y <span className="font-bold text-pink-600">how many</span> para preguntar por cantidades, pero <strong>no son intercambiables</strong>.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {/* How Many Card */}
      <div className="bg-pink-50 rounded-xl p-6 border border-pink-100 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-pink-100 rounded-full text-pink-600">
            <ShoppingBag size={24} />
          </div>
          <h3 className="text-xl font-bold text-pink-700">How Many</h3>
        </div>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-2">
            <CheckCircle size={18} className="text-pink-500 mt-1 shrink-0" />
            <span>Sustantivos <strong>Contables</strong> (Plural)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={18} className="text-pink-500 mt-1 shrink-0" />
            <span>Cosas que se pueden contar (1, 2, 3...)</span>
          </li>
        </ul>
        <div className="bg-white p-3 rounded-lg text-sm text-gray-600 border border-pink-100">
          <strong>Ejemplos:</strong> Bottles, Cups, Cans, Glasses
        </div>
      </div>

      {/* How Much Card */}
      <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
            <Droplets size={24} />
          </div>
          <h3 className="text-xl font-bold text-indigo-700">How Much</h3>
        </div>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-2">
            <CheckCircle size={18} className="text-indigo-500 mt-1 shrink-0" />
            <span>Sustantivos <strong>Incontables</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={18} className="text-indigo-500 mt-1 shrink-0" />
            <span>Líquidos, sustancias, conceptos generales</span>
          </li>
        </ul>
        <div className="bg-white p-3 rounded-lg text-sm text-gray-600 border border-indigo-100">
          <strong>Ejemplos:</strong> Water, Coffee, Milk, Juice
        </div>
      </div>
    </div>

    <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 flex items-start gap-3">
      <Info className="text-yellow-600 shrink-0 mt-1" />
      <p className="text-sm text-yellow-800">
        <strong>Nota importante:</strong> La elección depende del tipo de sustantivo, no del significado. ¡Cuidado con el error común! No decimos <em>"How many water?"</em>.
      </p>
    </div>
  </div>
);

const ExamplesSection = () => (
  <div className="p-6 md:p-8 animate-fadeIn">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Comparación y Contexto</h2>

    {/* Comparison Table */}
    <div className="overflow-x-auto mb-8">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
            <th className="p-4 rounded-tl-lg">Pregunta</th>
            <th className="p-4">Tipo de Sustantivo</th>
            <th className="p-4 rounded-tr-lg">Ejemplo</th>
          </tr>
        </thead>
        <tbody className="text-sm md:text-base">
          <tr className="border-b border-gray-100 hover:bg-pink-50">
            <td className="p-4 font-bold text-pink-600">How many</td>
            <td className="p-4 text-gray-600">Contable (plural)</td>
            <td className="p-4 italic">How many <span className="font-bold underline">bottles</span>?</td>
          </tr>
          <tr className="hover:bg-indigo-50">
            <td className="p-4 font-bold text-indigo-600">How much</td>
            <td className="p-4 text-gray-600">Incontable</td>
            <td className="p-4 italic">How much <span className="font-bold underline">water</span>?</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Visual Context Switch */}
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
        <Lightbulb className="text-yellow-500" />
        Misma cosa, diferente visión
      </h3>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        {/* Uncountable View */}
        <div className="text-center">
          <div className="h-32 bg-white rounded-lg border border-gray-200 flex items-center justify-center mb-2 relative overflow-hidden group">
            <div className="absolute bottom-0 w-full h-2/3 bg-brown-400 opacity-20 wave-animation"></div>
            <Coffee size={64} className="text-indigo-600 z-10" />
          </div>
          <p className="font-bold text-indigo-700">"How much coffee is there?"</p>
          <p className="text-xs text-gray-500">Cantidad total (líquido)</p>
        </div>

        {/* Countable View */}
        <div className="text-center">
           <div className="h-32 bg-white rounded-lg border border-gray-200 flex items-center justify-center mb-2 gap-2">
            <Coffee size={32} className="text-pink-600" />
            <Coffee size={32} className="text-pink-600" />
            <Coffee size={32} className="text-pink-600" />
          </div>
          <p className="font-bold text-pink-700">"How many coffees did you order?"</p>
          <p className="text-xs text-gray-500">Unidades individuales (tazas)</p>
        </div>

      </div>
    </div>
  </div>
);

const PracticeSection = () => {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showCorrection, setShowCorrection] = useState(false);
  
  const quizQuestions = [
    { id: 1, text: "___ milk do we need?", answer: "How much", noun: "Uncountable" },
    { id: 2, text: "___ bottles of juice are in the fridge?", answer: "How many", noun: "Countable" },
    { id: 3, text: "___ coffee do you drink in the morning?", answer: "How much", noun: "Uncountable" },
    { id: 4, text: "___ cups of tea did she have?", answer: "How many", noun: "Countable" },
    { id: 5, text: "___ sugar is left?", answer: "How much", noun: "Uncountable" },
  ];

  const handleQuizSelect = (id, choice) => {
    setQuizAnswers(prev => ({ ...prev, [id]: choice }));
  };

  return (
    <div className="p-6 md:p-8 animate-fadeIn space-y-8">
      
      {/* Exercise 1: Quiz */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
          Elige la opción correcta
        </h3>
        <div className="space-y-3">
          {quizQuestions.map((q) => (
            <div key={q.id} className="bg-gray-50 p-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-medium text-lg text-gray-700">{q.text}</p>
              <div className="flex gap-2">
                {['How much', 'How many'].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleQuizSelect(q.id, option)}
                    className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                      quizAnswers[q.id] === option
                        ? option === q.answer
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {quizAnswers[q.id] && (
                 <span className={`text-sm font-bold ${quizAnswers[q.id] === q.answer ? 'text-green-600' : 'text-red-600'}`}>
                    {quizAnswers[q.id] === q.answer ? '¡Correcto!' : 'Intenta de nuevo'}
                 </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Exercise 2: Corrections */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
          Corrige el error
        </h3>
        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <XCircle className="text-red-500 shrink-0" />
              <p className="line-through text-gray-500">How many water do you want?</p>
              {showCorrection && <div className="flex items-center gap-2 text-green-700 font-bold"><ArrowRight size={16}/> How much water do you want?</div>}
            </div>
            <div className="flex items-center gap-4">
              <XCircle className="text-red-500 shrink-0" />
              <p className="line-through text-gray-500">How much bottles did you buy?</p>
              {showCorrection && <div className="flex items-center gap-2 text-green-700 font-bold"><ArrowRight size={16}/> How many bottles did you buy?</div>}
            </div>
            <div className="flex items-center gap-4">
              <XCircle className="text-red-500 shrink-0" />
              <p className="line-through text-gray-500">How many milk is there?</p>
              {showCorrection && <div className="flex items-center gap-2 text-green-700 font-bold"><ArrowRight size={16}/> How much milk is there?</div>}
            </div>
          </div>
          <button 
            onClick={() => setShowCorrection(!showCorrection)}
            className="mt-6 text-sm font-semibold text-orange-600 hover:text-orange-700 underline"
          >
            {showCorrection ? "Ocultar soluciones" : "Ver soluciones correctas"}
          </button>
        </div>
      </div>
    
      {/* Exercise 3: Production */}
      <div>
         <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
          Producción Personal
        </h3>
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <p className="mb-4 text-gray-700">Imagina que estás en un supermercado. Escribe mentalmente o en tu cuaderno 3 preguntas (1 con how much, 2 con how many).</p>
          <div className="bg-white p-4 rounded-lg shadow-inner text-gray-400 italic">
            Escribe aquí tus oraciones para practicar...
          </div>
        </div>
      </div>

    </div>
  );
};

const ReflectionSection = () => (
  <div className="p-6 md:p-8 animate-fadeIn flex flex-col items-center justify-center min-h-[400px]">
    <div className="max-w-2xl text-center space-y-8">
      <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-indigo-600 mb-4">
        <HelpCircle size={40} />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800">Reflexión: Uso real del idioma</h2>
      
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500 text-left">
        <h3 className="font-bold text-lg mb-2 text-purple-700">¿Por qué decimos "how many coffees"?</h3>
        <p className="text-gray-600 mb-4">
          Cuando estamos en una cafetería, a menudo decimos "Two coffees, please". ¿Por qué si el café es líquido?
        </p>
        <div className="bg-purple-50 p-4 rounded-lg text-sm text-purple-800">
          <strong>Respuesta:</strong> Porque en ese contexto, la palabra "cups" (tazas) está implícita. Es una forma abreviada de decir "How many (cups of) coffee". El idioma se vuelve flexible para ser más rápido.
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 text-left">
        <h3 className="font-bold text-lg mb-2 text-green-700">Conexión con el Español</h3>
        <p className="text-gray-600 mb-4">
          ¿En español ocurre algo parecido con “un café / dos cafés”?
        </p>
        <div className="bg-green-50 p-4 rounded-lg text-sm text-green-800">
          <strong>Sí, exactamente igual.</strong> El café es incontable ("mucha café" suena mal, decimos "mucho café"), pero en un restaurante lo "contamos" refiriéndonos a las unidades de servicio.
        </div>
      </div>

    </div>
  </div>
);

export default L1S2App;