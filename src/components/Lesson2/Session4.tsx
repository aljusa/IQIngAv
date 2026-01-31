import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Briefcase, 
  Battery, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Coffee, 
  Brain, 
  ArrowRight,
  RefreshCw,
  Edit3
} from 'lucide-react';

// --- Components for each Tab ---

// 1. Contextualization
const TabContext = () => {
  const [answers, setAnswers] = useState({ capable: null, study: null, difficult: null });

  const handleAnswer = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-xl font-bold text-blue-800 mb-2">Reflexión Inicial</h3>
        <p className="text-gray-700">Piensa en tu desempeño actual en el trabajo o escuela. Responde estas preguntas para ver qué estructuras gramaticales necesitas.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
          <Brain className="w-10 h-10 text-purple-500 mb-4" />
          <h4 className="font-semibold text-lg mb-4">Do you feel capable?</h4>
          <div className="flex gap-2 mb-4">
            <button 
              onClick={() => handleAnswer('capable', true)}
              className={`flex-1 py-2 rounded ${answers.capable === true ? 'bg-green-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >Yes</button>
            <button 
              onClick={() => handleAnswer('capable', false)}
              className={`flex-1 py-2 rounded ${answers.capable === false ? 'bg-red-400 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >No</button>
          </div>
          {answers.capable === true && <p className="text-sm text-green-700 bg-green-50 p-2 rounded">¡Genial! Podrías usar: <br/>"I am <strong>smart enough</strong>."</p>}
          {answers.capable === false && <p className="text-sm text-red-700 bg-red-50 p-2 rounded">Podrías expresar: <br/>"The task is <strong>too difficult</strong>."</p>}
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
          <BookOpen className="w-10 h-10 text-blue-500 mb-4" />
          <h4 className="font-semibold text-lg mb-4">Do you study enough?</h4>
          <div className="flex gap-2 mb-4">
            <button 
              onClick={() => handleAnswer('study', true)}
              className={`flex-1 py-2 rounded ${answers.study === true ? 'bg-green-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >Yes</button>
            <button 
              onClick={() => handleAnswer('study', false)}
              className={`flex-1 py-2 rounded ${answers.study === false ? 'bg-orange-400 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >No</button>
          </div>
          {answers.study === true && <p className="text-sm text-green-700 bg-green-50 p-2 rounded">Uso correcto: <br/>"I study <strong>enough</strong>."</p>}
          {answers.study === false && <p className="text-sm text-orange-700 bg-orange-50 p-2 rounded">Quizás: <br/>"I am <strong>too lazy</strong> sometimes."</p>}
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
          <Briefcase className="w-10 h-10 text-gray-700 mb-4" />
          <h4 className="font-semibold text-lg mb-4">Are tasks difficult?</h4>
          <div className="flex gap-2 mb-4">
            <button 
              onClick={() => handleAnswer('difficult', true)}
              className={`flex-1 py-2 rounded ${answers.difficult === true ? 'bg-red-400 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >Yes</button>
            <button 
              onClick={() => handleAnswer('difficult', false)}
              className={`flex-1 py-2 rounded ${answers.difficult === false ? 'bg-green-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >No</button>
          </div>
          {answers.difficult === true && <p className="text-sm text-red-700 bg-red-50 p-2 rounded">Expresa el límite: <br/>"It is <strong>too hard</strong> to finish."</p>}
          {answers.difficult === false && <p className="text-sm text-green-700 bg-green-50 p-2 rounded">Entonces: <br/>"It is <strong>easy enough</strong>."</p>}
        </div>
      </div>
    </div>
  );
};

// 2. TOO Section
const TabToo = () => {
  const [load, setLoad] = useState(2);
  
  const tasks = Array(load).fill("Task");

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
        <h3 className="text-xl font-bold text-red-800 mb-2">TOO = Exceso / Problema</h3>
        <p className="text-gray-700">Usamos <strong>Too</strong> cuando algo es excesivo e impide un resultado positivo.</p>
        <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
          <li>Too + Adjective (Too tired)</li>
          <li>Too much + Noun (Too much work)</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h4 className="text-lg font-semibold mb-6">Simulador de Carga de Trabajo</h4>
        
        <div className="flex justify-center items-end h-32 gap-2 mb-6 border-b-2 border-gray-200 pb-2">
          {tasks.map((_, i) => (
            <div key={i} className="w-12 bg-red-400 rounded-t-md border border-red-600 flex items-center justify-center text-white text-xs animate-bounce" style={{height: '60px'}}>
              Task
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mb-6">
          <button 
            onClick={() => setLoad(Math.max(0, load - 1))}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 font-bold"
          >-</button>
          <span className="font-mono text-xl">{load} Tareas</span>
          <button 
            onClick={() => setLoad(Math.min(10, load + 1))}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 font-bold"
          >+</button>
        </div>

        <div className="p-4 rounded-lg bg-gray-50 border transition-all duration-300">
          {load < 4 ? (
            <p className="text-green-600 font-bold text-xl flex items-center justify-center gap-2">
              <CheckCircle /> I can handle this.
            </p>
          ) : (
            <div className="space-y-2">
               <p className="text-red-600 font-bold text-xl flex items-center justify-center gap-2">
                <XCircle /> I cannot finish!
              </p>
              <p className="text-gray-800 text-lg">
                "I have <span className="text-red-600 font-bold">too much</span> work."
              </p>
               <p className="text-gray-800 text-lg">
                "It is <span className="text-red-600 font-bold">too difficult</span> to complete."
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 3. ENOUGH Section
const TabEnough = () => {
  const [skill, setSkill] = useState(30);

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h3 className="text-xl font-bold text-green-800 mb-2">ENOUGH = Suficiente</h3>
        <p className="text-gray-700">Usamos <strong>Enough</strong> cuando alcanzamos el nivel necesario para lograr algo.</p>
        <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
          <li>Adjective + Enough (Smart enough)</li>
          <li>Enough + Noun (Enough experience)</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h4 className="text-lg font-semibold mb-6 text-center">Medidor de Experiencia</h4>
        
        <div className="relative pt-10 pb-4 px-4">
          {/* Threshold Line */}
          <div className="absolute top-0 bottom-0 left-[60%] w-0.5 bg-black border-l-2 border-dashed border-gray-400 z-10">
            <span className="absolute -top-6 -left-10 text-xs font-bold bg-gray-200 px-2 py-1 rounded">Requisito del Trabajo</span>
          </div>

          {/* Bar */}
          <div className="h-12 bg-gray-200 w-full rounded-full overflow-hidden relative">
            <div 
              className={`h-full transition-all duration-500 ease-out flex items-center justify-end pr-4 text-white font-bold ${skill >= 60 ? 'bg-green-500' : 'bg-orange-400'}`}
              style={{ width: `${skill}%` }}
            >
              {skill}%
            </div>
          </div>
          
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={skill} 
            onChange={(e) => setSkill(Number(e.target.value))}
            className="w-full mt-6"
          />
        </div>

        <div className="mt-6 text-center p-4 bg-gray-50 rounded-lg">
          {skill >= 60 ? (
            <div className="animate-bounceIn">
               <p className="text-green-600 font-bold text-2xl mb-2">HIRED! (Contratado)</p>
               <p className="text-gray-700 text-lg">
                 "You are <span className="text-green-600 font-bold">experienced enough</span> to do this job."
               </p>
            </div>
          ) : (
            <div>
               <p className="text-orange-600 font-bold text-2xl mb-2">NOT YET (Aún no)</p>
               <p className="text-gray-700 text-lg">
                 "You don't have <span className="text-orange-600 font-bold">enough experience</span>."
               </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 4. Comparison
const TabCompare = () => {
  const [mode, setMode] = useState('negative'); // negative (too) or positive (enough)

  return (
    <div className="space-y-6 animate-fadeIn">
       <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-purple-800 mb-2">Comparación: Capacidad vs Resultado</h3>
        <p className="text-gray-700">Mismo escenario, dos perspectivas diferentes.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Toggle Switch */}
        <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-xl shadow-md">
          <span className="font-bold text-gray-500">SITUACIÓN: Estudio para examen</span>
          <div className="flex items-center gap-4">
            <span className={`font-bold ${mode === 'negative' ? 'text-red-500' : 'text-gray-300'}`}>Negative (Too)</span>
            <button 
              onClick={() => setMode(mode === 'negative' ? 'positive' : 'negative')}
              className={`w-16 h-8 rounded-full p-1 transition-colors duration-300 ${mode === 'positive' ? 'bg-green-500' : 'bg-red-500'}`}
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${mode === 'positive' ? 'translate-x-8' : 'translate-x-0'}`} />
            </button>
            <span className={`font-bold ${mode === 'positive' ? 'text-green-500' : 'text-gray-300'}`}>Positive (Enough)</span>
          </div>
        </div>

        {/* Result Card */}
        <div className="flex-1 w-full">
           <div className={`p-8 rounded-xl shadow-lg border-2 transition-all duration-500 ${mode === 'negative' ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'}`}>
              <div className="flex items-center justify-center mb-6">
                {mode === 'negative' ? (
                  <Coffee className="w-16 h-16 text-red-400" />
                ) : (
                  <Brain className="w-16 h-16 text-green-500" />
                )}
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {mode === 'negative' ? "Imposibilidad" : "Capacidad Suficiente"}
                </h3>
                
                <div className="text-xl bg-white p-4 rounded-lg shadow-sm">
                  {mode === 'negative' ? (
                    <>
                      <p className="mb-2">"I am <span className="text-red-500 font-bold">too tired</span> to study."</p>
                      <p className="text-sm text-gray-500">(Exceso de cansancio = No estudio)</p>
                    </>
                  ) : (
                    <>
                       <p className="mb-2">"I am <span className="text-green-500 font-bold">focused enough</span> to study."</p>
                       <p className="text-sm text-gray-500">(Nivel correcto de concentración = Sí estudio)</p>
                    </>
                  )}
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// 5. Structures
const TabStructures = () => {
  const [dragItem, setDragItem] = useState(null);
  const [sentence, setSentence] = useState([]);
  const [message, setMessage] = useState("");
  const [msgColor, setMsgColor] = useState("");

  // Simple Click-to-add interaction
  const words = [
    { id: 1, text: "I", type: "subject" },
    { id: 2, text: "am", type: "verb" },
    { id: 3, text: "smart", type: "adjective" },
    { id: 4, text: "enough", type: "quantifier" },
    { id: 5, text: "to", type: "prep" },
    { id: 6, text: "work", type: "verb2" },
    { id: 7, text: "too", type: "quantifier_neg" },
    { id: 8, text: "busy", type: "adjective" }
  ];

  const addToSentence = (word) => {
    setSentence([...sentence, word]);
    setMessage("");
  };

  const reset = () => {
    setSentence([]);
    setMessage("");
  };

  const checkSentence = () => {
    const text = sentence.map(w => w.text).join(" ");
    
    if (text === "I am smart enough to work") {
      setMessage("✅ Correct! (Adjective + Enough)");
      setMsgColor("text-green-600");
    } else if (text === "I am too busy to work") {
      setMessage("✅ Correct! (Too + Adjective)");
      setMsgColor("text-green-600");
    } else if (text.includes("enough smart")) {
      setMessage("❌ Error: 'Enough' goes AFTER the adjective.");
      setMsgColor("text-red-600");
    } else if (text.includes("busy too")) {
      setMessage("❌ Error: 'Too' goes BEFORE the adjective.");
      setMsgColor("text-red-600");
    } else {
      setMessage("⚠️ Estructura incompleta o incorrecta. Intenta de nuevo.");
      setMsgColor("text-orange-600");
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
       <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-bold text-yellow-800 mb-2">Laboratorio de Estructuras</h3>
        <p className="text-gray-700">Construye oraciones válidas. Recuerda la regla de oro:</p>
        <div className="mt-2 font-mono text-sm bg-white p-2 rounded inline-block border">
          TOO + Adjective <br/>
          Adjective + ENOUGH
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        {/* Word Bank */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {words.map((w) => (
             <button
              key={w.id}
              onClick={() => addToSentence(w)}
              className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-semibold shadow-sm active:scale-95 transition"
             >
               {w.text}
             </button>
          ))}
        </div>

        {/* Construction Zone */}
        <div className="min-h-[80px] bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center p-4 gap-2 flex-wrap mb-4">
          {sentence.length === 0 && <span className="text-gray-400 italic">Haz clic en las palabras arriba...</span>}
          {sentence.map((w, idx) => (
            <span key={idx} className="bg-white px-3 py-1 rounded shadow text-lg font-bold">
              {w.text}
            </span>
          ))}
        </div>

        {/* Controls */}
        <div className="flex gap-4 justify-center">
          <button onClick={reset} className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-gray-700">
            <RefreshCw size={18}/> Borrar
          </button>
          <button onClick={checkSentence} className="flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-bold shadow">
            Verificar <CheckCircle size={18}/>
          </button>
        </div>

        {/* Feedback */}
        {message && (
          <div className={`mt-6 text-center text-xl font-bold ${msgColor} animate-pulse`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

// 6. Mini Practice
const TabPractice = () => {
  const [inputs, setInputs] = useState({ q1: "", q2: "", q3: "", q4: "" });
  const [results, setResults] = useState({});

  const checkAnswers = () => {
    const newResults = {};
    // Logic: answers are lowercase for comparison
    newResults.q1 = inputs.q1.toLowerCase().trim() === "too";
    newResults.q2 = inputs.q2.toLowerCase().trim() === "enough";
    newResults.q3 = inputs.q3.toLowerCase().trim() === "too";
    newResults.q4 = inputs.q4.toLowerCase().trim() === "enough";
    setResults(newResults);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
        <h3 className="text-xl font-bold text-indigo-800 mb-2">Mini Practice</h3>
        <p className="text-gray-700">Completa las oraciones con <strong>too</strong> o <strong>enough</strong>.</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
        
        {/* Q1 */}
        <div className="flex items-center gap-3 text-lg">
          <span className="font-bold text-gray-400">1.</span>
          <span>I’m</span>
          <input 
            type="text" 
            className={`border-b-2 outline-none px-2 w-24 text-center font-bold ${results.q1 === true ? 'border-green-500 text-green-600' : results.q1 === false ? 'border-red-500 text-red-600' : 'border-gray-300'}`}
            value={inputs.q1}
            onChange={(e) => setInputs({...inputs, q1: e.target.value})}
          />
          <span>tired to finish the report.</span>
          {results.q1 === true && <CheckCircle className="text-green-500 w-5 h-5"/>}
          {results.q1 === false && <XCircle className="text-red-500 w-5 h-5"/>}
        </div>

        {/* Q2 */}
        <div className="flex items-center gap-3 text-lg">
          <span className="font-bold text-gray-400">2.</span>
          <span>She isn’t confident</span>
          <input 
            type="text" 
            className={`border-b-2 outline-none px-2 w-24 text-center font-bold ${results.q2 === true ? 'border-green-500 text-green-600' : results.q2 === false ? 'border-red-500 text-red-600' : 'border-gray-300'}`}
            value={inputs.q2}
            onChange={(e) => setInputs({...inputs, q2: e.target.value})}
          />
          <span>to speak in public.</span>
          {results.q2 === true && <CheckCircle className="text-green-500 w-5 h-5"/>}
          {results.q2 === false && <XCircle className="text-red-500 w-5 h-5"/>}
        </div>

        {/* Q3 */}
        <div className="flex items-center gap-3 text-lg">
          <span className="font-bold text-gray-400">3.</span>
          <span>We have</span>
          <input 
            type="text" 
            className={`border-b-2 outline-none px-2 w-24 text-center font-bold ${results.q3 === true ? 'border-green-500 text-green-600' : results.q3 === false ? 'border-red-500 text-red-600' : 'border-gray-300'}`}
            value={inputs.q3}
            onChange={(e) => setInputs({...inputs, q3: e.target.value})}
          />
          <span>much work this week.</span>
          {results.q3 === true && <CheckCircle className="text-green-500 w-5 h-5"/>}
          {results.q3 === false && <XCircle className="text-red-500 w-5 h-5"/>}
        </div>

        {/* Q4 */}
        <div className="flex items-center gap-3 text-lg">
          <span className="font-bold text-gray-400">4.</span>
          <span>He didn’t practice</span>
          <input 
            type="text" 
            className={`border-b-2 outline-none px-2 w-24 text-center font-bold ${results.q4 === true ? 'border-green-500 text-green-600' : results.q4 === false ? 'border-red-500 text-red-600' : 'border-gray-300'}`}
            value={inputs.q4}
            onChange={(e) => setInputs({...inputs, q4: e.target.value})}
          />
          <span>for the test.</span>
          {results.q4 === true && <CheckCircle className="text-green-500 w-5 h-5"/>}
          {results.q4 === false && <XCircle className="text-red-500 w-5 h-5"/>}
        </div>

        <button 
          onClick={checkAnswers}
          className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Check Answers
        </button>
      </div>
    </div>
  );
};

// 7. Final Task
const TabTask = () => {
  const [text, setText] = useState("");
  const [analysis, setAnalysis] = useState(null);

  const analyzeText = () => {
    const lowerText = text.toLowerCase();
    const hasToo = lowerText.includes("too");
    const hasEnough = lowerText.includes("enough");
    const length = text.split('.').length - 1; // rough sentence count

    setAnalysis({ hasToo, hasEnough, length });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-600">
        <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <Edit3 /> Final Task
        </h3>
        <p className="text-gray-700">Write 4–5 sentences using <strong>too</strong> and <strong>enough</strong> about your food, routine, shopping or work/study life.</p>
        <p className="mt-2 text-sm italic text-gray-500">Example: I eat too much fast food, and I don’t sleep enough...</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <textarea
          className="w-full h-40 p-4 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none resize-none"
          placeholder="Start typing here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        
        <div className="mt-4 flex justify-end">
          <button 
            onClick={analyzeText}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Analyze Text
          </button>
        </div>

        {analysis && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
            <h4 className="font-bold text-gray-700 mb-2">Feedback Automático:</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-3 rounded flex items-center gap-2 ${analysis.hasToo ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {analysis.hasToo ? <CheckCircle size={16}/> : <AlertTriangle size={16}/>}
                Usaste "Too"
              </div>
              <div className={`p-3 rounded flex items-center gap-2 ${analysis.hasEnough ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {analysis.hasEnough ? <CheckCircle size={16}/> : <AlertTriangle size={16}/>}
                Usaste "Enough"
              </div>
            </div>
            {analysis.length < 4 && (
              <p className="mt-2 text-sm text-orange-600 flex items-center gap-1">
                <AlertTriangle size={14} /> Intenta escribir un poco más (Objetivo: 4-5 oraciones).
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main App Component ---

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Context", icon: <Brain size={18} />, component: <TabContext /> },
    { title: "Too", icon: <AlertTriangle size={18} />, component: <TabToo /> },
    { title: "Enough", icon: <Battery size={18} />, component: <TabEnough /> },
    { title: "Vs", icon: <ArrowRight size={18} />, component: <TabCompare /> },
    { title: "Structs", icon: <Briefcase size={18} />, component: <TabStructures /> },
    { title: "Practice", icon: <CheckCircle size={18} />, component: <TabPractice /> },
    { title: "Task", icon: <Edit3 size={18} />, component: <TabTask /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px] flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-800 text-white p-6">
          <h1 className="text-2xl md:text-3xl font-bold">Lesson 2: You Are What You Eat</h1>
          <h2 className="text-indigo-300 font-semibold mt-1">Section 4 – Work, Study & Performance: Too / Enough</h2>
        </div>

        {/* Navigation */}
        <div className="flex overflow-x-auto bg-slate-100 border-b scrollbar-hide">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-4 py-4 md:px-6 transition-all duration-200 whitespace-nowrap border-b-2 outline-none
                ${activeTab === index 
                  ? 'border-indigo-600 text-indigo-700 bg-white font-bold' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 flex-1 overflow-y-auto bg-white">
          <div className="mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
            Tab {activeTab + 1} / {tabs.length}: {tabs[activeTab].title}
          </div>
          
          {tabs[activeTab].component}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center text-gray-400 text-sm border-t">
          Grammar Focus: TOO / ENOUGH (Ability, Effort & Results)
        </div>
      </div>
    </div>
  );
};

export default App;