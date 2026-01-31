import React, { useState } from 'react';
import { 
  BookOpen, 
  MessageCircle, 
  List, 
  PenTool, 
  CheckCircle, 
  HelpCircle, 
  Lightbulb, 
  Brain, 
   
  Check, 
  X 
} from 'lucide-react';

const L1S4App = () => {
  const [activeTab, setActiveTab] = useState('idea');

  // Estado para los ejercicios
  const [ex1Answers, setEx1Answers] = useState({ 0: '', 1: '', 2: '', 3: '' });
  const [ex1Feedback, setEx1Feedback] = useState(null);
  const [ex2Selections, setEx2Selections] = useState({});

  const tabs = [
    { id: 'idea', label: '1. Idea Clave', icon: Lightbulb },
    { id: 'model', label: '2. Modelo de Uso', icon: MessageCircle },
    { id: 'summary', label: '3. Esquema', icon: List },
    { id: 'exercises', label: '4. Ejercicios', icon: PenTool },
    { id: 'reflection', label: '5. Reflexión', icon: Brain },
  ];

  const handleEx1Change = (index, value) => {
    setEx1Answers({ ...ex1Answers, [index]: value });
  };

  const checkEx1 = () => {
    const correct = ['how much', 'a little', 'how many', 'a few'];
    let score = 0;
    const feedback = {};
    
    Object.keys(ex1Answers).forEach((key) => {
      const isCorrect = ex1Answers[key].toLowerCase().trim() === correct[key];
      if (isCorrect) score++;
      feedback[key] = isCorrect;
    });

    setEx1Feedback(feedback);
  };

  const handleEx2Select = (qId, option, isCorrect) => {
    setEx2Selections({
      ...ex2Selections,
      [qId]: { selected: option, isCorrect }
    });
  };

  // Renderizadores de contenido
  const renderIdea = () => (
    <div className="space-y-6 animate-in fade-in zoom-in duration-300">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
        <h3 className="text-xl font-bold text-blue-800 mb-2">Síntesis: El Sistema Lógico</h3>
        <p className="text-gray-700">Cuando hablamos de cantidades en inglés, no es azar. Seguimos una secuencia lógica:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {[
          { step: 1, title: 'Identificar', desc: '¿El sustantivo es Contable o Incontable?', icon: BookOpen, color: 'bg-indigo-100 text-indigo-600' },
          { step: 2, title: 'Elegir Pregunta', desc: '¿How much o How many?', icon: HelpCircle, color: 'bg-purple-100 text-purple-600' },
          { step: 3, title: 'Responder', desc: '¿A little o A few?', icon: MessageCircle, color: 'bg-emerald-100 text-emerald-600' }
        ].map((item) => (
          <div key={item.step} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center text-center">
            <div className={`p-4 rounded-full ${item.color} mb-4`}>
              <item.icon size={32} />
            </div>
            <h4 className="font-bold text-lg mb-2">Paso {item.step}: {item.title}</h4>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center text-gray-500 italic">
        👉 Todo funciona como un sistema, no como reglas aisladas.
      </div>
    </div>
  );

  const renderModel = () => (
    <div className="space-y-6 animate-in slide-in-from-right duration-300">
      <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mb-6">
        <h3 className="font-bold text-orange-800 flex items-center gap-2">
          <BookOpen size={20} /> Contexto: Organizar una tarde de estudio
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Columna Preguntas */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
          <h4 className="text-lg font-bold text-blue-600 mb-4 border-b pb-2">Preguntas (Questions)</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><HelpCircle size={20}/></div>
              <div>
                <p className="font-medium text-gray-800">How much time do we have?</p>
                <p className="text-xs text-gray-500">"Time" es incontable → How much</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><HelpCircle size={20}/></div>
              <div>
                <p className="font-medium text-gray-800">How many tasks are left?</p>
                <p className="text-xs text-gray-500">"Tasks" es contable plural → How many</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Respuestas */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
          <h4 className="text-lg font-bold text-green-600 mb-4 border-b pb-2">Respuestas (Answers)</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-lg text-green-600"><MessageCircle size={20}/></div>
              <div>
                <p className="font-medium text-gray-800">We have a little time before dinner.</p>
                <p className="text-xs text-gray-500">Incontable positivo → A little</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-lg text-green-600"><MessageCircle size={20}/></div>
              <div>
                <p className="font-medium text-gray-800">We still have a few tasks to finish.</p>
                <p className="text-xs text-gray-500">Contable plural → A few</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSummary = () => (
    <div className="animate-in fade-in duration-300">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-slate-800 p-4 text-white">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <List /> Esquema Resumen
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-600 text-sm uppercase tracking-wider">
                <th className="p-4 border-b">Tipo de Sustantivo</th>
                <th className="p-4 border-b">Pregunta</th>
                <th className="p-4 border-b">Respuesta Posible</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="p-4 font-medium text-gray-800 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span> Incontable (Time, Sugar, Work)
                </td>
                <td className="p-4 text-blue-600 font-mono">How much</td>
                <td className="p-4 text-green-600 font-mono">A little</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="p-4 font-medium text-gray-800 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-400"></span> Contable Plural (Tasks, Apples)
                </td>
                <td className="p-4 text-blue-600 font-mono">How many</td>
                <td className="p-4 text-green-600 font-mono">A few</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-yellow-50 p-4 text-sm text-yellow-800 border-t border-yellow-200">
          📌 <strong>Nota Clave:</strong> No memorices frases completas, reconoce los patrones (Sustantivo → Estructura).
        </div>
      </div>
    </div>
  );

  const renderExercises = () => (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-300">
      
      {/* Ejercicio 1 */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-blue-100 text-blue-600 w-8 h-8 flex items-center justify-center rounded-full text-sm">1</span>
          Completa el diálogo
        </h4>
        <p className="text-sm text-gray-500 mb-4">Usa: how much / how many / a little / a few</p>
        
        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-blue-600">A:</span>
            <input 
              type="text" 
              className={`border p-1 rounded w-32 ${ex1Feedback && (ex1Feedback[0] ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')}`}
              value={ex1Answers[0]} 
              onChange={(e) => handleEx1Change(0, e.target.value)} 
            />
            <span>time do we have?</span>
            {ex1Feedback && ex1Feedback[0] && <Check size={16} className="text-green-500" />}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-green-600">B:</span>
            <span>We have</span>
            <input 
              type="text" 
              className={`border p-1 rounded w-32 ${ex1Feedback && (ex1Feedback[1] ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')}`}
              value={ex1Answers[1]} 
              onChange={(e) => handleEx1Change(1, e.target.value)} 
            />
            <span>time.</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-blue-600">A:</span>
            <input 
              type="text" 
              className={`border p-1 rounded w-32 ${ex1Feedback && (ex1Feedback[2] ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')}`}
              value={ex1Answers[2]} 
              onChange={(e) => handleEx1Change(2, e.target.value)} 
            />
            <span>things do we need to do?</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-green-600">B:</span>
            <span>Just</span>
            <input 
              type="text" 
              className={`border p-1 rounded w-32 ${ex1Feedback && (ex1Feedback[3] ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')}`}
              value={ex1Answers[3]} 
              onChange={(e) => handleEx1Change(3, e.target.value)} 
            />
            <span>things.</span>
          </div>
        </div>
        <button onClick={checkEx1} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Verificar Respuestas
        </button>
      </div>

      {/* Ejercicio 2 */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-blue-100 text-blue-600 w-8 h-8 flex items-center justify-center rounded-full text-sm">2</span>
          Elige la opción correcta
        </h4>
        
        <div className="space-y-4">
          {[
            { id: 1, text: 'I have ______ patience today.', opts: ['a little', 'a few'], correct: 'a little', reason: 'Patience es incontable' },
            { id: 2, text: '______ emails did you send?', opts: ['How much', 'How many'], correct: 'How many', reason: 'Emails es contable plural' },
            { id: 3, text: 'There is ______ work left.', opts: ['a little', 'a few'], correct: 'a little', reason: 'Work es incontable' }
          ].map((q) => (
            <div key={q.id} className="border-b pb-4 last:border-0">
              <p className="mb-2 font-medium">{q.text}</p>
              <div className="flex gap-2">
                {q.opts.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleEx2Select(q.id, opt, opt === q.correct)}
                    className={`px-3 py-1 rounded border transition-colors ${
                      ex2Selections[q.id]?.selected === opt
                        ? opt === q.correct 
                          ? 'bg-green-100 border-green-500 text-green-800'
                          : 'bg-red-100 border-red-500 text-red-800'
                        : 'hover:bg-gray-100 bg-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {ex2Selections[q.id] && (
                <p className={`text-xs mt-2 ${ex2Selections[q.id].isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {ex2Selections[q.id].isCorrect ? 'Correcto!' : 'Incorrecto.'} {q.reason}.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Ejercicio 3 */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <span className="bg-purple-100 text-purple-600 w-8 h-8 flex items-center justify-center rounded-full text-sm">3</span>
          Producción Personal
        </h4>
        <p className="text-sm text-gray-600 mb-4">Escribe un párrafo corto (mental o en papel) sobre "Un día ocupado" usando las 4 estructuras.</p>
        <div className="bg-purple-50 p-4 rounded-lg text-sm text-purple-800">
          <strong>Checklist:</strong><br/>
          ☐ 1 pregunta con How much<br/>
          ☐ 1 pregunta con How many<br/>
          ☐ 1 frase con A little<br/>
          ☐ 1 frase con A few
        </div>
      </div>
    </div>
  );

  const renderReflection = () => (
    <div className="bg-white p-8 rounded-xl shadow-lg animate-in fade-in duration-300">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Brain className="text-pink-500" /> Reflexión Final
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-gray-700 mb-2">Autoevaluación</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> ¿Pude identificar sustantivos contables e incontables?</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> ¿Usé "How much" solo para incontables?</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> ¿Usé "A few" solo para plurales?</li>
            </ul>
          </div>
        </div>
        
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-bold text-blue-800 mb-2">Preguntas Guía</h4>
          <p className="italic text-gray-600 mb-4">"¿Qué regla me ayuda más a decidir qué expresión usar?"</p>
          <p className="text-sm text-gray-500">
            Piensa: Si puedo contar el objeto con los dedos (1 manzana, 2 manzanas), es contable (How many / A few). Si es un concepto abstracto o líquido (tiempo, agua), es incontable (How much / A little).
          </p>
        </div>
      </div>
    </div>
  );

  
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-slate-800">Lesson 1: Delicious Sandwiches</h1>
          <h2 className="text-xl text-blue-600 font-medium mt-2">Section 4: Integrated Use – Talking About Quantities</h2>
        
        </header>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-200 hover:text-gray-800'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {activeTab === 'idea' && renderIdea()}
          {activeTab === 'model' && renderModel()}
          {activeTab === 'summary' && renderSummary()}
          {activeTab === 'exercises' && renderExercises()}
          {activeTab === 'reflection' && renderReflection()}
        </div>
      </div>
    </div>
  );
};

export default L1S4App;