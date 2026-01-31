import React, { useState } from 'react';
import { 
  BookOpen, 
  Scale, 
  CheckCircle2, 
  HelpCircle, 
  ChevronRight, 
  Utensils, 
  GlassWater, 
  Sandwich, 
  Cookie, 
  CircleDashed,
  AlertCircle,
  Lightbulb
} from 'lucide-react';

// --- Components ---

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, type = "neutral" }) => {
  const colors = {
    neutral: "bg-slate-100 text-slate-700",
    success: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    orange: "bg-orange-100 text-orange-700",
    red: "bg-red-100 text-red-700",
  };
  return (
    <span className={`px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${colors[type] || colors.neutral}`}>
      {children}
    </span>
  );
};

// --- Main App Component ---

export default function L1S1App() {
  const [activeTab, setActiveTab] = useState('theory');

  const tabs = [
    { id: 'theory', label: 'Teoría (Reglas)', icon: BookOpen },
    { id: 'comparison', label: 'Comparación Visual', icon: Scale },
    { id: 'practice', label: 'Ejercicios', icon: CheckCircle2 },
    { id: 'reflection', label: 'Reflexión y Soluciones', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-orange-200">
      {/* Header */}
      <header className="bg-orange-600 text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 opacity-90 mb-2">
            <span className="bg-orange-700 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Lesson 1</span>
            <span className="text-sm font-medium">Food Vocabulary</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            Delicious Sandwiches 🥪
          </h1>
          <p className="text-orange-100 text-lg">
            Sección 1: Countable & Uncountable Nouns
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm overflow-x-auto">
        <div className="max-w-4xl mx-auto flex">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap border-b-2 outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-600 bg-orange-50'
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      <main className="max-w-4xl mx-auto p-4 md:p-6 pb-24">
        {activeTab === 'theory' && <TheoryTab />}
        {activeTab === 'comparison' && <ComparisonTab />}
        {activeTab === 'practice' && <PracticeTab />}
        {activeTab === 'reflection' && <ReflectionTab />}
      </main>
    </div>
  );
}

// --- Tab 1: Theory ---

function TheoryTab() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="p-6 border-l-4 border-l-blue-500">
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Lightbulb className="text-blue-500" />
          Idea Clave (Regla Central)
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          En inglés, la distinción entre sustantivos contables e incontables es esencial para usar correctamente gramática como <em>how much/many</em> o <em>a little/a few</em>.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">Countable Nouns</h3>
            <p className="text-sm text-blue-700">Se pueden contar uno por uno (1, 2, 3...).</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-bold text-indigo-800 mb-2">Uncountable Nouns</h3>
            <p className="text-sm text-indigo-700">No se cuentan individualmente; son masas o conceptos generales.</p>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Countable Section */}
        <Card className="flex flex-col h-full">
          <div className="bg-green-100 p-4 border-b border-green-200">
            <h2 className="text-lg font-bold text-green-800 flex items-center gap-2">
              <span className="bg-white p-1 rounded-full text-lg shadow-sm">🍎</span>
              2️⃣ Sustantivos Contables
            </h2>
          </div>
          <div className="p-6 flex-1 space-y-4">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600 shrink-0" /> Tienen forma individual clara</li>
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600 shrink-0" /> Tienen Singular y Plural</li>
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600 shrink-0" /> Usan números (one, two, five)</li>
            </ul>
            
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="font-semibold text-xs text-slate-500 uppercase mb-2">Ejemplos:</p>
              <div className="space-y-2 font-medium">
                <div className="flex justify-between items-center bg-white p-2 rounded shadow-sm">
                  <span>🥪 a sandwich</span>
                  <span className="text-green-600">two sandwiches</span>
                </div>
                <div className="flex justify-between items-center bg-white p-2 rounded shadow-sm">
                  <span>🍎 an apple</span>
                  <span className="text-green-600">three apples</span>
                </div>
                <div className="flex justify-between items-center bg-white p-2 rounded shadow-sm">
                  <span>🍪 a cookie</span>
                  <span className="text-green-600">five cookies</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-yellow-50 p-3 rounded-md text-sm text-yellow-800">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              <p><strong>Nota:</strong> Usan plural (-s / -es) cuando son más de uno.</p>
            </div>
          </div>
        </Card>

        {/* Uncountable Section */}
        <Card className="flex flex-col h-full">
          <div className="bg-red-100 p-4 border-b border-red-200">
            <h2 className="text-lg font-bold text-red-800 flex items-center gap-2">
              <span className="bg-white p-1 rounded-full text-lg shadow-sm">💧</span>
              3️⃣ Sustantivos Incontables
            </h2>
          </div>
          <div className="p-6 flex-1 space-y-4">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-red-600 shrink-0" /> No se cuentan uno por uno</li>
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-red-600 shrink-0" /> No suelen tener plural</li>
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-red-600 shrink-0" /> Se tratan como sustancia/masa</li>
            </ul>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="font-semibold text-xs text-slate-500 uppercase mb-2">Ejemplos (Comida):</p>
              <div className="grid grid-cols-2 gap-2 font-medium text-sm">
                <span className="bg-white p-2 rounded shadow-sm">🍞 Bread</span>
                <span className="bg-white p-2 rounded shadow-sm">🧀 Cheese</span>
                <span className="bg-white p-2 rounded shadow-sm">💧 Water</span>
                <span className="bg-white p-2 rounded shadow-sm">🥛 Milk</span>
                <span className="bg-white p-2 rounded shadow-sm">🧈 Butter</span>
                <span className="bg-white p-2 rounded shadow-sm">🥩 Ham</span>
              </div>
            </div>

            <div className="bg-red-50 p-3 rounded-md text-sm text-red-800 space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-red-600">❌ NO:</span>
                <span>two breads, a cheese</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-green-600">✅ SÍ:</span>
                <span>some bread, a piece of cheese</span>
              </div>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-800">
              <p><strong>📌 Truco:</strong> Para contarlos usa "contenedores" o "medidas": <em>a slice of bread, a glass of water</em>.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

// --- Tab 2: Comparison ---

function ComparisonTab() {
  const items = [
    { name: 'Sandwich', type: 'C', icon: '🥪', color: 'green' },
    { name: 'Bread', type: 'U', icon: '🍞', color: 'red' },
    { name: 'Apple', type: 'C', icon: '🍎', color: 'green' },
    { name: 'Cheese', type: 'U', icon: '🧀', color: 'red' },
    { name: 'Tomato', type: 'C', icon: '🍅', color: 'green' },
    { name: 'Butter', type: 'U', icon: '🧈', color: 'red' },
    { name: 'Cookies', type: 'C', icon: '🍪', color: 'green' },
    { name: 'Milk', type: 'U', icon: '🥛', color: 'red' },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="p-0">
        <div className="p-6 bg-slate-800 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Countable vs Uncountable</h2>
          <p className="opacity-80">Comparación Rápida</p>
        </div>
        <div className="p-6">
          <div className="relative">
             {/* Central Divider line for desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block -ml-[0.5px]"></div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-0">
              {/* Countable Side */}
              <div className="md:pr-8">
                <h3 className="text-green-600 font-bold text-xl text-center mb-6">Countable (Contables)</h3>
                <div className="space-y-3">
                  {items.filter(i => i.type === 'C').map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-green-50 p-3 rounded-lg border border-green-100 hover:scale-105 transition-transform">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-semibold text-green-900 text-lg">
                        {item.name === 'Cookies' ? 'Cookies' : `a ${item.name.toLowerCase()}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Uncountable Side */}
              <div className="md:pl-8">
                <h3 className="text-red-600 font-bold text-xl text-center mb-6">Uncountable (Incontables)</h3>
                <div className="space-y-3">
                  {items.filter(i => i.type === 'U').map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-red-50 p-3 rounded-lg border border-red-100 hover:scale-105 transition-transform">
                      <span className="font-semibold text-red-900 text-lg">{item.name}</span>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

// --- Tab 3: Practice ---

function PracticeTab() {
  // Exercise 1 State
  const [ex1Answers, setEx1Answers] = useState({});
  const ex1Items = [
    { id: 'bread', word: 'bread', type: 'U', icon: '🍞' },
    { id: 'sandwich', word: 'sandwich', type: 'C', icon: '🥪' },
    { id: 'cheese', word: 'cheese', type: 'U', icon: '🧀' },
    { id: 'tomato', word: 'tomato', type: 'C', icon: '🍅' },
    { id: 'water', word: 'water', type: 'U', icon: '💧' },
    { id: 'cookie', word: 'cookie', type: 'C', icon: '🍪' },
  ];

  const handleEx1Click = (id, type) => {
    setEx1Answers(prev => ({ ...prev, [id]: type }));
  };

  // Exercise 2 State
  const [ex2Answers, setEx2Answers] = useState({});
  const ex2Items = [
    { id: 1, text: 'sandwich', correct: 'a', options: ['a', 'some', 'an'] },
    { id: 2, text: 'bread', correct: 'some', options: ['a', 'some', 'an'] },
    { id: 3, text: 'apple', correct: 'an', options: ['a', 'some', 'an'] },
    { id: 4, text: 'cheese', correct: 'some', options: ['a', 'some', 'an'] },
    { id: 5, text: 'cookies', correct: 'some', options: ['a', 'some', 'an'] },
  ];

  const handleEx2Change = (id, val) => {
    setEx2Answers(prev => ({ ...prev, [id]: val }));
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Exercise 1 */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-800">📝 Ejercicio 1: Clasifica</h2>
          <Badge type="blue">Countable (C) vs Uncountable (U)</Badge>
        </div>
        <p className="text-slate-600 mb-6">Selecciona si el alimento es contable o incontable.</p>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ex1Items.map((item) => {
            const currentAnswer = ex1Answers[item.id];
            const isCorrect = currentAnswer === item.type;
            const isAnswered = currentAnswer != null;

            return (
              <div key={item.id} className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex flex-col items-center gap-3">
                <div className="text-3xl">{item.icon}</div>
                <div className="font-bold text-lg capitalize">{item.word}</div>
                <div className="flex gap-2 w-full">
                  <button 
                    onClick={() => handleEx1Click(item.id, 'C')}
                    className={`flex-1 py-2 rounded font-bold text-sm transition-colors ${
                      currentAnswer === 'C' 
                        ? (item.type === 'C' ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
                        : 'bg-white border hover:bg-slate-100'
                    }`}
                  >
                    C
                  </button>
                  <button 
                    onClick={() => handleEx1Click(item.id, 'U')}
                    className={`flex-1 py-2 rounded font-bold text-sm transition-colors ${
                       currentAnswer === 'U' 
                        ? (item.type === 'U' ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
                        : 'bg-white border hover:bg-slate-100'
                    }`}
                  >
                    U
                  </button>
                </div>
                {isAnswered && (
                    <div className={`text-xs font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        {isCorrect ? '¡Correcto!' : 'Inténtalo de nuevo'}
                    </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Exercise 2 */}
      <Card className="p-6 border-l-4 border-l-orange-500">
        <h2 className="text-xl font-bold text-slate-800 mb-2">📝 Ejercicio 2: Completa</h2>
        <p className="text-slate-600 mb-6">Elige <strong>a / an / some</strong> según corresponda.</p>

        <div className="space-y-4 max-w-lg">
          {ex2Items.map((item) => {
            const userVal = ex2Answers[item.id] || "";
            const isCorrect = userVal === item.correct;
            const showFeedback = userVal !== "";

            return (
              <div key={item.id} className="flex items-center gap-3 text-lg">
                <select 
                  className={`border-b-2 bg-transparent py-1 px-2 outline-none font-bold cursor-pointer text-center w-24 ${
                    showFeedback 
                      ? (isCorrect ? 'border-green-500 text-green-700' : 'border-red-500 text-red-700')
                      : 'border-slate-300 focus:border-orange-500'
                  }`}
                  value={userVal}
                  onChange={(e) => handleEx2Change(item.id, e.target.value)}
                >
                    <option value="" disabled>___</option>
                    {item.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                <span className="font-medium">{item.text}</span>
                {showFeedback && (
                    <span className="text-xl animate-in zoom-in">
                        {isCorrect ? '✅' : '❌'}
                    </span>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Exercise 3 */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-2">✏️ Ejercicio 3: Producción Personal</h2>
        <p className="text-slate-600 mb-4">Escribe una frase con 3 ingredientes para un sándwich (2 contables, 1 incontable).</p>
        <div className="bg-yellow-50 p-4 rounded-lg mb-4 text-sm text-yellow-800">
            <strong>Ejemplo:</strong> I need two tomatoes and some cheese.
        </div>
        <textarea 
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            placeholder="Escribe tu respuesta aquí..."
            rows={3}
        />
        <p className="text-xs text-slate-400 mt-2 text-right">Este ejercicio es de práctica libre.</p>
      </Card>

    </div>
  );
}

// --- Tab 4: Reflection & Solutions ---

function ReflectionTab() {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Key Note Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-6 rounded-xl shadow-md">
        <div className="flex items-start gap-4">
          <div className="bg-white/20 p-2 rounded-full">
            <Lightbulb size={24} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">🔑 Nota Final</h3>
            <p className="opacity-90">
              Si dominas <strong>countable vs uncountable nouns</strong>, el resto de la lección (how much, how many, a little, a few) será mucho más fácil y natural.
            </p>
          </div>
        </div>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-4">6️⃣ Reflexión (Thinking Time)</h2>
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="font-semibold text-slate-700 mb-2">🤔 Pregunta 1</h3>
            <p className="text-slate-600 italic">¿Por qué crees que "bread" es incontable pero "sandwich" es contable?</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="font-semibold text-slate-700 mb-2">🤔 Pregunta 2</h3>
            <p className="text-slate-600 italic">¿Existe una palabra similar en español que también funcione así?</p>
          </div>
        </div>
      </Card>

      <div className="text-center py-4">
        <button 
            onClick={() => setShowSolution(!showSolution)}
            className="bg-slate-800 text-white px-8 py-3 rounded-full hover:bg-slate-700 transition-colors font-semibold shadow-lg active:scale-95 transform duration-150"
        >
            {showSolution ? 'Ocultar Soluciones' : 'Ver Soluciones Razonadas'}
        </button>
      </div>

      {showSolution && (
        <Card className="p-6 border-t-4 border-t-green-500 animate-in slide-in-from-bottom-2">
            <h2 className="text-xl font-bold text-slate-800 mb-6">7️⃣ Soluciones Razonadas</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-bold text-green-700 mb-3 border-b pb-2">Ejercicio 1</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between border-b border-slate-100 pb-1">
                            <span>Bread</span> 
                            <span className="font-mono text-slate-500">U (No se cuenta directo)</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-100 pb-1">
                            <span>Sandwich</span> 
                            <span className="font-mono text-slate-500">C (Unidad individual)</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-100 pb-1">
                            <span>Cheese</span> 
                            <span className="font-mono text-slate-500">U (Sustancia)</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-100 pb-1">
                            <span>Tomato</span> 
                            <span className="font-mono text-slate-500">C (Objeto individual)</span>
                        </li>
                         <li className="flex justify-between border-b border-slate-100 pb-1">
                            <span>Water</span> 
                            <span className="font-mono text-slate-500">U (Líquido)</span>
                        </li>
                         <li className="flex justify-between border-b border-slate-100 pb-1">
                            <span>Cookie</span> 
                            <span className="font-mono text-slate-500">C (Unidad clara)</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-orange-700 mb-3 border-b pb-2">Ejercicio 2</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex gap-2">
                            <span className="font-bold">a</span> sandwich
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold">some</span> bread
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold">an</span> apple
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold">some</span> cheese
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold">some</span> cookies
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
      )}
    </div>
  );
}