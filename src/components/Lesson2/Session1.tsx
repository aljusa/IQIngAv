import React, { useState, useEffect } from 'react';
import { Coffee, Utensils, AlertTriangle, check, X, ChevronRight, Battery, BatteryMedium, BatteryFull, Apple, Pizza, GlassWater, ThumbsUp, ThumbsDown, BookOpen, Edit3 } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: "1. Warm-up", icon: <Coffee size={18} /> },
    { id: 1, title: "2. Grammar: TOO", icon: <ThumbsDown size={18} /> },
    { id: 2, title: "3. Grammar: ENOUGH", icon: <ThumbsUp size={18} /> },
    { id: 3, title: "4. Comparison", icon: <Utensils size={18} /> },
    { id: 4, title: "5. Practice", icon: <Edit3 size={18} /> },
    { id: 5, title: "6. Task", icon: <BookOpen size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Lesson 2: You Are What You Eat</h1>
          <p className="opacity-90 flex items-center gap-2">
            <span className="bg-indigo-500 px-2 py-1 rounded text-sm font-semibold uppercase tracking-wide">Grammar Focus</span>
            Too / Enough
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 md:p-6">
        
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-6 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap transition-all duration-200 shadow-sm border ${
                activeTab === tab.id
                  ? "bg-white border-indigo-500 text-indigo-600 font-bold ring-2 ring-indigo-100"
                  : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-700"
              }`}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden min-h-[500px]">
          {activeTab === 0 && <WarmUpSection />}
          {activeTab === 1 && <TooSection />}
          {activeTab === 2 && <EnoughSection />}
          {activeTab === 3 && <ComparisonSection />}
          {activeTab === 4 && <PracticeSection />}
          {activeTab === 5 && <TaskSection />}
        </div>
      </main>

    
    </div>
  );
};

// --- SECTION COMPONENTS ---

const WarmUpSection = () => {
  const [answers, setAnswers] = useState({ breakfast: '', healthy: null, amount: null });

  return (
    <div className="p-8 animate-fadeIn">
      <div className="mb-6 border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">
          <Coffee /> Warm-up: Contexto
        </h2>
        <p className="text-slate-600 mt-2">
          Imagine you are talking about your daily eating habits.
          <br/>
          <span className="text-sm italic text-slate-500">La comida es un contexto ideal para entender exceso y suficiencia.</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
            <label className="block font-semibold text-orange-800 mb-2">1. What do you eat for breakfast?</label>
            <input 
              type="text" 
              placeholder="e.g., Cereal, toast, coffee..." 
              className="w-full p-2 rounded border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
              value={answers.breakfast}
              onChange={(e) => setAnswers({...answers, breakfast: e.target.value})}
            />
          </div>

          <div className="bg-green-50 p-4 rounded-xl border border-green-100">
            <label className="block font-semibold text-green-800 mb-2">2. Do you think you eat healthy food?</label>
            <div className="flex gap-4">
              <button 
                onClick={() => setAnswers({...answers, healthy: 'yes'})}
                className={`flex-1 py-2 rounded border ${answers.healthy === 'yes' ? 'bg-green-500 text-white' : 'bg-white text-green-700 border-green-200'}`}
              >
                Yes, mostly
              </button>
              <button 
                onClick={() => setAnswers({...answers, healthy: 'no'})}
                className={`flex-1 py-2 rounded border ${answers.healthy === 'no' ? 'bg-red-500 text-white' : 'bg-white text-red-700 border-red-200'}`}
              >
                Not really
              </button>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl flex flex-col justify-center items-center text-center border border-indigo-100">
          <h3 className="font-bold text-indigo-900 mb-4">3. Do you ever eat too much or too little?</h3>
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <button className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all text-indigo-700 font-medium">
              I sometimes eat <span className="font-bold text-red-500">too much</span> 🍔
            </button>
            <button className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all text-indigo-700 font-medium">
              I sometimes eat <span className="font-bold text-blue-500">too little</span> 🥗
            </button>
            <button className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all text-indigo-700 font-medium">
              I eat <span className="font-bold text-green-600">enough</span> ✅
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TooSection = () => {
  const [sugarCount, setSugarCount] = useState(1);

  const getSugarMessage = () => {
    if (sugarCount <= 2) return { text: "Sweet enough ✅", color: "text-green-600", bg: "bg-green-100" };
    if (sugarCount <= 4) return { text: "A bit sweet...", color: "text-orange-600", bg: "bg-orange-100" };
    return { text: "Too much sugar! 🤢", color: "text-red-600", bg: "bg-red-100" };
  };

  const status = getSugarMessage();

  return (
    <div className="p-8 animate-fadeIn">
       <div className="mb-6 border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-bold text-red-600 flex items-center gap-2">
          <AlertTriangle /> Grammar Focus: TOO
        </h2>
        <p className="text-slate-600 mt-2 text-lg">
          TOO = <span className="font-bold">Más de lo necesario</span> (Exceso, problema).
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Theory Card */}
        <div className="space-y-4">
          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-2">Estructura</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded font-mono text-sm">too + adjective</span>
                <span className="text-sm text-slate-600">The tea is <span className="font-bold text-red-600">too hot</span>.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded font-mono text-sm">too much + noun</span>
                <span className="text-sm text-slate-600">I eat <span className="font-bold text-red-600">too much sugar</span>.</span>
              </li>
               <li className="flex items-center gap-2">
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded font-mono text-sm">too many + noun</span>
                <span className="text-sm text-slate-600"><span className="font-bold text-red-600">Too many cookies</span>.</span>
              </li>
            </ul>
          </div>
          <p className="text-sm text-slate-500 italic">👉 TOO casi siempre implica algo negativo o un problema.</p>
        </div>

        {/* Interactive Demo */}
        <div className="bg-white border-2 border-slate-100 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
          <h3 className="font-bold text-slate-700 mb-4">Interactive Example: The Coffee</h3>
          
          <div className="relative w-32 h-40 bg-amber-900/10 rounded-b-3xl border-4 border-slate-300 mb-4 flex items-end justify-center overflow-hidden">
             {/* Liquid */}
             <div className="w-full bg-amber-800 transition-all duration-500" style={{ height: '70%' }}></div>
             {/* Sugar cubes */}
             <div className="absolute bottom-2 flex flex-wrap justify-center gap-1 p-2">
               {[...Array(sugarCount)].map((_, i) => (
                 <div key={i} className="w-4 h-4 bg-white rounded-sm shadow-sm animate-bounce-short"></div>
               ))}
             </div>
          </div>

          <p className={`font-bold text-lg mb-4 ${status.color} ${status.bg} px-4 py-1 rounded-full transition-all`}>
            {status.text}
          </p>

          <div className="flex gap-2">
            <button 
              onClick={() => setSugarCount(Math.max(0, sugarCount - 1))}
              className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded-lg font-bold"
            >
              - Sugar
            </button>
            <button 
              onClick={() => setSugarCount(sugarCount + 1)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold"
            >
              + Add Sugar
            </button>
          </div>
          <p className="mt-4 text-sm text-slate-500">
             Sentence: "The coffee is <strong>{sugarCount > 4 ? 'too sweet' : 'sweet enough'}</strong>."
          </p>
        </div>
      </div>
    </div>
  );
};

const EnoughSection = () => {
  const [level, setLevel] = useState(50);

  return (
    <div className="p-8 animate-fadeIn">
       <div className="mb-6 border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-bold text-green-600 flex items-center gap-2">
          <BatteryFull /> Grammar Focus: ENOUGH
        </h2>
        <p className="text-slate-600 mt-2 text-lg">
          ENOUGH = <span className="font-bold">Cantidad suficiente</span> (No exceso, no carencia).
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Interactive Demo */}
        <div className="bg-green-50 rounded-xl p-6 flex flex-col items-center justify-center text-center border border-green-100">
           <h3 className="font-bold text-green-900 mb-6">Interactive Scale: Hunger</h3>
           
           <div className="w-full max-w-xs bg-white h-8 rounded-full border border-green-200 overflow-hidden relative mb-4">
             <div 
                className="h-full bg-green-500 transition-all duration-300"
                style={{ width: `${level}%` }}
             ></div>
             {/* Marker for "Enough" */}
             <div className="absolute top-0 bottom-0 w-1 bg-black left-[80%] opacity-20"></div>
           </div>

           <input 
             type="range" 
             min="0" 
             max="100" 
             value={level} 
             onChange={(e) => setLevel(parseInt(e.target.value))}
             className="w-full max-w-xs mb-4"
           />

           <p className="text-lg font-medium text-slate-700">
             {level < 80 ? (
               <span>I am <span className="text-red-500 font-bold">not full enough</span>. I need more food! 🍕</span>
             ) : (
               <span>I am <span className="text-green-600 font-bold">full enough</span>. I'm satisfied! 😊</span>
             )}
           </p>
        </div>

        {/* Theory Card */}
        <div className="space-y-4">
          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-2">Estructura & Orden (Muy Importante)</h3>
            <div className="space-y-4">
              
              <div className="bg-white p-3 rounded border-l-4 border-green-500 shadow-sm">
                <p className="text-xs uppercase text-slate-400 font-bold mb-1">With Adjectives</p>
                <div className="flex items-center gap-2 font-mono text-lg">
                  <span className="bg-slate-100 p-1 rounded">Adjective</span> 
                  <span className="text-slate-400">+</span>
                  <span className="bg-green-100 text-green-800 p-1 rounded font-bold">enough</span>
                </div>
                <p className="text-sm mt-1 text-slate-600">Example: Hot <span className="font-bold text-green-600">enough</span>.</p>
              </div>

              <div className="bg-white p-3 rounded border-l-4 border-blue-500 shadow-sm">
                <p className="text-xs uppercase text-slate-400 font-bold mb-1">With Nouns</p>
                <div className="flex items-center gap-2 font-mono text-lg">
                  <span className="bg-green-100 text-green-800 p-1 rounded font-bold">enough</span>
                  <span className="text-slate-400">+</span>
                  <span className="bg-slate-100 p-1 rounded">Noun</span> 
                </div>
                <p className="text-sm mt-1 text-slate-600">Example: <span className="font-bold text-green-600">Enough</span> money.</p>
              </div>

            </div>
          </div>
          <div className="flex items-start gap-2 bg-yellow-50 p-3 rounded border border-yellow-200 text-sm text-yellow-800">
            <AlertTriangle size={16} className="mt-1 flex-shrink-0" />
            <p><strong>Warning:</strong> Never say "enough hot". Always say "hot enough".</p>
          </div>
        </div>

      </div>
    </div>
  );
};

const ComparisonSection = () => {
  return (
    <div className="p-8 animate-fadeIn">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-indigo-700">TOO vs ENOUGH</h2>
        <p className="text-slate-600">Comparación clara de situaciones.</p>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-600 text-sm uppercase tracking-wider">
              <th className="p-4 border-b">Situation</th>
              <th className="p-4 border-b">Example</th>
              <th className="p-4 border-b">Meaning</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="bg-red-50/50 hover:bg-red-50 transition-colors">
              <td className="p-4 font-bold text-red-700">Exceso / Problema</td>
              <td className="p-4">I eat <span className="font-bold text-red-600">too much</span> fast food.</td>
              <td className="p-4 text-sm text-slate-600">Negative. Bad for health.</td>
            </tr>
            <tr className="bg-green-50/50 hover:bg-green-50 transition-colors">
              <td className="p-4 font-bold text-green-700">Suficiencia</td>
              <td className="p-4">I eat <span className="font-bold text-green-600">enough</span> healthy food.</td>
              <td className="p-4 text-sm text-slate-600">Positive. Good amount.</td>
            </tr>
            <tr className="bg-red-50/50 hover:bg-red-50 transition-colors">
              <td className="p-4 font-bold text-red-700">Problema</td>
              <td className="p-4">The coffee is <span className="font-bold text-red-600">too cold</span>.</td>
              <td className="p-4 text-sm text-slate-600">I can't drink it.</td>
            </tr>
            <tr className="bg-green-50/50 hover:bg-green-50 transition-colors">
              <td className="p-4 font-bold text-green-700">Correcto</td>
              <td className="p-4">The coffee is <span className="font-bold text-green-600">warm enough</span>.</td>
              <td className="p-4 text-sm text-slate-600">Perfect to drink.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-full text-red-600"><ThumbsDown /></div>
            <div>
                <p className="font-bold text-slate-700">Too + Adjective</p>
                <p className="text-sm text-slate-500">"It is too expensive."</p>
            </div>
        </div>
        <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full text-green-600"><ThumbsUp /></div>
            <div>
                <p className="font-bold text-slate-700">Adjective + Enough</p>
                <p className="text-sm text-slate-500">"It is cheap enough."</p>
            </div>
        </div>
      </div>
    </div>
  );
};

const PracticeSection = () => {
  const [results, setResults] = useState({});
  const [showAnswers, setShowAnswers] = useState(false);

  const questions = [
    { id: 1, text: "I don’t eat ______ fruit. (I need more)", options: ["too much", "enough"], correct: "enough" },
    { id: 2, text: "This pizza has ______ cheese. (It's greasy!)", options: ["too much", "enough"], correct: "too much" },
    { id: 3, text: "I’m not hungry; I’ve eaten ______.", options: ["too", "enough"], correct: "enough" },
    { id: 4, text: "The soup is ______ hot to drink. (I can't drink it)", options: ["too", "enough"], correct: "too" },
  ];

  const handleSelect = (qId, value) => {
    setResults({ ...results, [qId]: value });
    setShowAnswers(false); // Reset feedback on change
  };

  const checkAnswers = () => {
    setShowAnswers(true);
  };

  return (
    <div className="p-8 animate-fadeIn">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">
           <Edit3 /> Mini Practice
        </h2>
        <p className="text-slate-600">Select the correct option to complete the sentences.</p>
      </div>

      <div className="space-y-4 max-w-2xl mx-auto">
        {questions.map((q) => {
           const isCorrect = results[q.id] === q.correct;
           
           return (
            <div key={q.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="font-medium text-lg mb-3 text-slate-800">
                {q.id}. {q.text.replace("______", "________")}
              </p>
              <div className="flex gap-3">
                {q.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect(q.id, opt)}
                    className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-colors ${
                      results[q.id] === opt
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              
              {showAnswers && (
                <div className={`mt-3 text-sm font-bold flex items-center gap-2 ${isCorrect ? "text-green-600" : "text-red-500"}`}>
                  {isCorrect ? <check size={16}/> : <X size={16}/>}
                  {isCorrect ? "Correct!" : `Incorrect. The answer is: ${q.correct}`}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <button 
          onClick={checkAnswers}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all"
        >
          Check Answers
        </button>
      </div>
    </div>
  );
};

const TaskSection = () => {
  const [showModel, setShowModel] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className="p-8 animate-fadeIn">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">
           <BookOpen /> Real-life Task
        </h2>
        <p className="text-slate-600">Describe your eating habits using <span className="font-bold bg-red-100 text-red-800 px-1 rounded">too</span> and <span className="font-bold bg-green-100 text-green-800 px-1 rounded">enough</span>.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Input Area */}
        <div className="flex flex-col h-full">
          <label className="block text-sm font-bold text-slate-700 mb-2">Write your sentences here:</label>
          <textarea 
            className="w-full h-48 p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition-all resize-none shadow-sm text-lg"
            placeholder="I eat..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="mt-4 flex gap-2 flex-wrap">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Useful words:</span>
            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">Vegetables</span>
            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">Sugar</span>
            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">Salty</span>
            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">Water</span>
            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">Healthy</span>
          </div>
        </div>

        {/* Model Answer Area */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative overflow-hidden">
          <h3 className="font-bold text-slate-800 mb-4">Need help? View the Model Answer</h3>
          
          <div className={`transition-all duration-500 ${showModel ? 'opacity-100 blur-none' : 'opacity-40 blur-sm select-none'}`}>
             <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
               <p className="text-slate-700 text-lg leading-relaxed">
                 "I eat <strong className="text-red-600">too much</strong> bread, but I don’t eat <strong className="text-green-600">enough</strong> vegetables. I think my diet is not healthy <strong className="text-green-600">enough</strong>."
               </p>
             </div>
             <ul className="mt-4 space-y-2 text-sm text-slate-600">
               <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Uses <strong>too much</strong> for bad habits.</li>
               <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Uses <strong>enough</strong> for quantities.</li>
               <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Uses <strong>adjective + enough</strong> (healthy enough).</li>
             </ul>
          </div>

          {!showModel && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={() => setShowModel(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-transform transform hover:scale-105"
              >
                Reveal Model Example
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;