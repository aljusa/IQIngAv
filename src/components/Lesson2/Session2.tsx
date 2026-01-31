import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Battery, BatteryCharging, 
  Clock, AlertCircle, CheckCircle, XCircle, 
  Coffee, Briefcase, Activity, ChevronRight, Edit3, BookOpen
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: '1. Contexto', icon: <Sun size={18} /> },
    { id: 1, title: '2. TOO', icon: <AlertCircle size={18} /> },
    { id: 2, title: '3. ENOUGH', icon: <BatteryCharging size={18} /> },
    { id: 3, title: '4. Comparación', icon: <Activity size={18} /> },
    { id: 4, title: '5. Errores', icon: <XCircle size={18} /> },
    { id: 5, title: '6. Práctica', icon: <Edit3 size={18} /> },
    { id: 6, title: '7. Producción', icon: <BookOpen size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <Clock className="animate-pulse" /> Lesson 2: You Are What You Eat
            </h1>
            <p className="text-indigo-200 text-sm">Grammar Focus: TOO / ENOUGH in Daily Routine</p>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto p-4 md:p-6">
        
        {/* Navigation Tabs (Scrollable on mobile) */}
        <div className="flex overflow-x-auto pb-4 mb-6 gap-2 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 font-medium ${
                activeTab === tab.id 
                  ? 'bg-indigo-600 text-white shadow-md transform scale-105' 
                  : 'bg-white text-slate-600 hover:bg-indigo-50 border border-slate-200'
              }`}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content Rendering */}
        <div className="bg-white rounded-2xl shadow-xl p-6 min-h-[500px] border-t-4 border-indigo-500">
          {activeTab === 0 && <ContextSection />}
          {activeTab === 1 && <TooSection />}
          {activeTab === 2 && <EnoughSection />}
          {activeTab === 3 && <ComparisonSection />}
          {activeTab === 4 && <MistakesSection />}
          {activeTab === 5 && <PracticeSection />}
          {activeTab === 6 && <ProductionSection />}
        </div>
      </main>


    </div>
  );
};

// ----------------------------------------------------------------------
// 1. Contextualization
// ----------------------------------------------------------------------
const ContextSection = () => {
  const [flipped, setFlipped] = useState([false, false, false]);

  const toggleCard = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const cards = [
    { 
      icon: <Moon size={40} className="text-indigo-500" />, 
      question: "How many hours do you sleep?", 
      hint: "Think about quantity (Enough vs Too little).",
      example: "I usually sleep 6 hours. Is that enough?" 
    },
    { 
      icon: <Coffee size={40} className="text-amber-600" />, 
      question: "Do you have time to relax?", 
      hint: "Think about your busy schedule (Too much work?).",
      example: "I don't have enough time because I work late." 
    },
    { 
      icon: <Battery size={40} className="text-red-500" />, 
      question: "Are you always tired?", 
      hint: "Think about the result (Too tired?).",
      example: "Yes, I am too tired to cook dinner." 
    }
  ];

  return (
    <div className="space-y-6">
      {/* Inject custom styles for 3D flip animation */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-indigo-700">Daily Routine Context</h2>
        <p className="text-slate-600">Reflect on your habits. Click the cards below.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div 
            key={index} 
            onClick={() => toggleCard(index)}
            className="cursor-pointer group perspective-1000 h-64"
          >
            <div className={`relative w-full h-full transition-all duration-500 preserve-3d ${flipped[index] ? 'rotate-y-180' : ''}`}>
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden bg-indigo-50 rounded-xl border-2 border-indigo-100 flex flex-col items-center justify-center p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mb-4 bg-white p-4 rounded-full shadow-sm">{card.icon}</div>
                <h3 className="font-bold text-lg text-slate-800">{card.question}</h3>
                <p className="text-xs text-indigo-400 mt-4 font-semibold uppercase tracking-wider">Tap to reflect</p>
              </div>
              
              {/* Back */}
              <div className="absolute w-full h-full backface-hidden bg-indigo-600 rounded-xl flex flex-col items-center justify-center p-6 text-center text-white rotate-y-180">
                <p className="font-semibold mb-2">{card.hint}</p>
                <div className="w-8 h-1 bg-white/30 rounded-full mb-2"></div>
                <p className="italic text-sm opacity-90">"{card.example}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400 mt-6">
        <h3 className="font-bold text-amber-800 flex items-center gap-2">
          <BookOpen size={18} /> Nota Gramatical
        </h3>
        <p className="text-amber-700 text-sm mt-1">
          En la rutina diaria, usamos <strong>too</strong> y <strong>enough</strong> para evaluar nuestro equilibrio de vida (tiempo, sueño, estrés).
        </p>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 2. TOO Section (Interactive Slider)
// ----------------------------------------------------------------------
const TooSection = () => {
  const [workHours, setWorkHours] = useState(8);

  const getStatus = (hours) => {
    if (hours <= 8) return { text: "Normal Day", color: "text-green-600", bg: "bg-green-100" };
    if (hours <= 10) return { text: "Busy Day", color: "text-yellow-600", bg: "bg-yellow-100" };
    return { text: "TOO MUCH!", color: "text-red-600", bg: "bg-red-100" };
  };

  const status = getStatus(workHours);
  const isTooMuch = workHours > 10;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-2">TOO = Excess (Negative Result)</h2>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Interactive Visual */}
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h3 className="font-bold text-slate-700 mb-4">Daily Work Meter</h3>
          
          <div className="mb-6">
            <label className="flex justify-between text-sm font-semibold mb-2">
              <span>Working Hours: {workHours}h</span>
              <span className={status.color}>{status.text}</span>
            </label>
            <input 
              type="range" 
              min="4" 
              max="16" 
              value={workHours} 
              onChange={(e) => setWorkHours(parseInt(e.target.value))}
              className="w-full h-3 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>

          <div className={`p-4 rounded-lg transition-colors duration-500 ${status.bg} flex flex-col items-center text-center`}>
            {isTooMuch ? (
               <AlertCircle size={48} className="text-red-500 mb-2 animate-bounce" />
            ) : (
               <Briefcase size={48} className="text-green-500 mb-2" />
            )}
            <p className="text-lg font-bold text-slate-800">
              {isTooMuch ? "I work too many hours!" : "I work reasonable hours."}
            </p>
            {isTooMuch && <p className="text-red-600 text-sm mt-1">Result: I am <span className="font-bold underline">too tired</span>.</p>}
          </div>
        </div>

        {/* Grammar Rules */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-slate-800">Structures</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 bg-red-50 p-3 rounded-lg">
              <span className="font-bold text-red-600 min-w-[120px]">TOO + Adj:</span>
              <span>I am <strong>too tired</strong>.</span>
            </li>
            <li className="flex items-start gap-2 bg-red-50 p-3 rounded-lg">
              <span className="font-bold text-red-600 min-w-[120px]">TOO MUCH + Noun:</span>
              <span>I have <strong>too much work</strong>. <br/><span className="text-xs text-slate-500">(Uncountable)</span></span>
            </li>
            <li className="flex items-start gap-2 bg-red-50 p-3 rounded-lg">
              <span className="font-bold text-red-600 min-w-[120px]">TOO MANY + Noun:</span>
              <span>I work <strong>too many hours</strong>. <br/><span className="text-xs text-slate-500">(Countable)</span></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 3. ENOUGH Section (Interactive Battery)
// ----------------------------------------------------------------------
const EnoughSection = () => {
  const [energy, setEnergy] = useState(30);

  const addEnergy = () => setEnergy(Math.min(100, energy + 20));
  const resetEnergy = () => setEnergy(20);

  const isEnough = energy >= 80;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-2">ENOUGH = Sufficient Level</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        
        <div className="order-2 md:order-1">
          <h3 className="font-bold text-lg mb-4 text-slate-800">Structures</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 bg-green-50 p-3 rounded-lg">
              <span className="font-bold text-green-600 min-w-[120px]">Adj + ENOUGH:</span>
              <span>I am <strong>relaxed enough</strong>.</span>
            </li>
            <li className="flex items-start gap-2 bg-green-50 p-3 rounded-lg">
              <span className="font-bold text-green-600 min-w-[120px]">ENOUGH + Noun:</span>
              <span>I have <strong>enough time</strong>.</span>
            </li>
          </ul>
          
          <div className="mt-6 bg-slate-100 p-4 rounded-lg text-sm text-slate-600">
             <p className="font-bold mb-1">Tip:</p>
             <p>"Enough" goes <strong>AFTER</strong> adjectives but <strong>BEFORE</strong> nouns.</p>
          </div>
        </div>

        {/* Interactive Visual */}
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 order-1 md:order-2 text-center">
          <h3 className="font-bold text-slate-700 mb-4">Energy Level</h3>
          
          <div className="relative h-48 w-24 border-4 border-slate-400 rounded-lg mx-auto mb-4 bg-white overflow-hidden">
            <div 
              className={`absolute bottom-0 w-full transition-all duration-700 ${isEnough ? 'bg-green-500' : 'bg-orange-400'}`}
              style={{ height: `${energy}%` }}
            ></div>
            
            {/* Threshold Line */}
            <div className="absolute bottom-[80%] w-full border-t-2 border-dashed border-slate-900 opacity-50"></div>
            <span className="absolute bottom-[82%] right-1 text-xs font-bold text-slate-500">Required</span>
          </div>

          <p className="text-lg font-bold mb-4">
            {isEnough 
              ? <span className="text-green-600">I have enough energy!</span> 
              : <span className="text-orange-600">I don't have enough energy...</span>}
          </p>

          <div className="flex justify-center gap-2">
            <button 
              onClick={addEnergy}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              disabled={energy >= 100}
            >
              <Moon size={16} /> Sleep More
            </button>
            <button 
              onClick={resetEnergy}
              className="bg-slate-300 hover:bg-slate-400 text-slate-700 px-4 py-2 rounded-lg"
            >
              Reset
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 4. Comparison Section
// ----------------------------------------------------------------------
const ComparisonSection = () => {
  const [scenario, setScenario] = useState('sleep'); // sleep, work, energy

  const scenarios = {
    sleep: {
      title: "Lack of Rest",
      too: "I stay up too late.",
      enough: "I don't sleep enough hours.",
      icon: <Moon size={32} />
    },
    work: {
      title: "Work Overload",
      too: "I work too much.",
      enough: "I don't have enough free time.",
      icon: <Briefcase size={32} />
    },
    energy: {
      title: "Energy Levels",
      too: "I'm too tired to exercise.",
      enough: "I'm not energetic enough.",
      icon: <Battery size={32} />
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-indigo-700">Too vs Enough: Real Context</h2>
      
      {/* Scenario Selector */}
      <div className="flex gap-2 justify-center mb-6">
        {Object.keys(scenarios).map(key => (
          <button
            key={key}
            onClick={() => setScenario(key)}
            className={`px-4 py-2 rounded-lg capitalize ${scenario === key ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'}`}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-indigo-100 overflow-hidden">
        <div className="bg-indigo-50 p-4 border-b border-indigo-100 flex items-center justify-center gap-3">
          {scenarios[scenario].icon}
          <h3 className="font-bold text-xl text-indigo-900">{scenarios[scenario].title}</h3>
        </div>
        
        <div className="grid grid-cols-2">
          {/* TOO Side */}
          <div className="p-6 border-r border-slate-100 bg-red-50/50">
            <h4 className="font-bold text-red-600 mb-2 uppercase text-sm tracking-wider">Problem (Excess)</h4>
            <p className="text-lg font-medium text-slate-800">"{scenarios[scenario].too}"</p>
            <p className="text-xs text-slate-500 mt-2">Focus: Negative result</p>
          </div>

          {/* ENOUGH Side */}
          <div className="p-6 bg-orange-50/50">
             <h4 className="font-bold text-orange-600 mb-2 uppercase text-sm tracking-wider">Problem (Insufficiency)</h4>
             <p className="text-lg font-medium text-slate-800">"{scenarios[scenario].enough}"</p>
             <p className="text-xs text-slate-500 mt-2">Focus: Not reaching standard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 5. Mistakes Section
// ----------------------------------------------------------------------
const MistakesSection = () => {
  const [feedback, setFeedback] = useState(null);

  const handleChoice = (isCorrect, correctText) => {
    if (isCorrect) {
      setFeedback({ type: 'success', text: "Correct! That's the right order." });
    } else {
      setFeedback({ type: 'error', text: `Incorrect. The correct form is: "${correctText}"` });
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-indigo-700">⚠️ Typical Mistakes</h2>

      <div className="grid gap-4 max-w-2xl mx-auto">
        
        {/* Pair 1 */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
          <p className="text-xs font-bold text-slate-400 mb-2 uppercase">Adjective Position</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => handleChoice(false, "I'm not relaxed enough")}
              className="flex-1 p-3 rounded border border-slate-200 hover:bg-red-50 hover:border-red-300 transition text-left"
            >
              ❌ I'm not enough relaxed.
            </button>
            <button 
              onClick={() => handleChoice(true)}
              className="flex-1 p-3 rounded border border-slate-200 hover:bg-green-50 hover:border-green-300 transition text-left"
            >
              ✅ I'm not relaxed enough.
            </button>
          </div>
        </div>

        {/* Pair 2 */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
          <p className="text-xs font-bold text-slate-400 mb-2 uppercase">Meaning Confusion</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => handleChoice(true)}
              className="flex-1 p-3 rounded border border-slate-200 hover:bg-green-50 hover:border-green-300 transition text-left"
            >
              ✅ I'm relaxed enough today.
            </button>
            <button 
              onClick={() => handleChoice(false, "I'm relaxed enough")}
              className="flex-1 p-3 rounded border border-slate-200 hover:bg-red-50 hover:border-red-300 transition text-left"
            >
              ❌ I'm too relaxed. <span className="text-xs text-slate-400">(Sounds strange)</span>
            </button>
          </div>
        </div>

      </div>

      {feedback && (
        <div className={`p-4 rounded-lg text-center animate-fade-in ${feedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <strong>{feedback.type === 'success' ? 'Good job!' : 'Oops!'}</strong> {feedback.text}
        </div>
      )}
    </div>
  );
};

// ----------------------------------------------------------------------
// 6. Practice Section (Mini Quiz)
// ----------------------------------------------------------------------
const PracticeSection = () => {
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });
  const [showResult, setShowResult] = useState(false);

  const correctAnswers = { q1: 'enough', q2: 'too', q3: 'enough', q4: 'too' };

  const checkAnswers = () => {
    setShowResult(true);
  };

  const getStyle = (qKey, val) => {
    if (!showResult) return "bg-white border-slate-300";
    return val.toLowerCase() === correctAnswers[qKey] 
      ? "bg-green-100 border-green-500 text-green-700" 
      : "bg-red-100 border-red-500 text-red-700";
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-indigo-700">Mini Practice</h2>
      <p className="text-slate-600">Complete the sentences with <strong>too</strong> or <strong>enough</strong>.</p>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
        
        {/* Q1 */}
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <span className="font-bold text-slate-400">1.</span>
          <p>I don't have</p>
          <select 
            className={`border rounded px-2 py-1 ${getStyle('q1', answers.q1)}`}
            onChange={(e) => setAnswers({...answers, q1: e.target.value})}
            disabled={showResult}
          >
            <option value="">Select...</option>
            <option value="too">too</option>
            <option value="enough">enough</option>
          </select>
          <p>time to exercise. <span className="text-sm text-slate-500">(time = noun)</span></p>
        </div>

        {/* Q2 */}
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <span className="font-bold text-slate-400">2.</span>
          <p>I go to bed</p>
          <select 
            className={`border rounded px-2 py-1 ${getStyle('q2', answers.q2)}`}
            onChange={(e) => setAnswers({...answers, q2: e.target.value})}
            disabled={showResult}
          >
            <option value="">Select...</option>
            <option value="too">too</option>
            <option value="enough">enough</option>
          </select>
          <p>late. <span className="text-sm text-slate-500">(late = adverb/excess)</span></p>
        </div>

        {/* Q3 */}
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <span className="font-bold text-slate-400">3.</span>
          <p>I'm not focused</p>
          <select 
            className={`border rounded px-2 py-1 ${getStyle('q3', answers.q3)}`}
            onChange={(e) => setAnswers({...answers, q3: e.target.value})}
            disabled={showResult}
          >
            <option value="">Select...</option>
            <option value="too">too</option>
            <option value="enough">enough</option>
          </select>
          <p>today. <span className="text-sm text-slate-500">(focused = adj)</span></p>
        </div>

        {/* Q4 */}
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <span className="font-bold text-slate-400">4.</span>
          <p>I spend</p>
          <select 
            className={`border rounded px-2 py-1 ${getStyle('q4', answers.q4)}`}
            onChange={(e) => setAnswers({...answers, q4: e.target.value})}
            disabled={showResult}
          >
            <option value="">Select...</option>
            <option value="too">too</option>
            <option value="enough">enough</option>
          </select>
          <p>much time at work.</p>
        </div>

      </div>

      <div className="flex gap-4">
        {!showResult ? (
          <button 
            onClick={checkAnswers}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition"
          >
            Check Answers
          </button>
        ) : (
          <button 
            onClick={() => { setShowResult(false); setAnswers({ q1: '', q2: '', q3: '', q4: '' }); }}
            className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 7. Production Section
// ----------------------------------------------------------------------
const ProductionSection = () => {
  const [text, setText] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const checkText = () => {
    const lowerText = text.toLowerCase();
    const hasToo = lowerText.includes('too');
    const hasEnough = lowerText.includes('enough');
    const wordCount = text.trim().split(/\s+/).length;

    if (wordCount < 5) {
      setAnalysis({ type: 'warning', msg: "Keep writing! Try to write full sentences." });
      return;
    }

    if (hasToo && hasEnough) {
      setAnalysis({ type: 'success', msg: "Excellent! You used both 'too' and 'enough'." });
    } else if (hasToo) {
      setAnalysis({ type: 'info', msg: "Good use of 'too'. Can you try to add a sentence with 'enough'?" });
    } else if (hasEnough) {
      setAnalysis({ type: 'info', msg: "Good use of 'enough'. Can you try to add a sentence with 'too'?" });
    } else {
      setAnalysis({ type: 'error', msg: "Try to include 'too' or 'enough' in your description." });
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-indigo-700">Production Task</h2>
      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
        <p className="font-semibold text-indigo-900 mb-2">Prompt:</p>
        <p className="text-slate-700">Describe your daily routine using at least 3 sentences with <strong>too</strong> / <strong>enough</strong>.</p>
        <p className="text-xs text-slate-500 mt-2 italic">Example: I work too many hours, and I don't sleep enough.</p>
      </div>

      <div className="relative">
        <textarea
          className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent min-h-[150px]"
          placeholder="Start typing here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="absolute bottom-4 right-4 text-xs text-slate-400">
          {text.length} chars
        </div>
      </div>

      <button 
        onClick={checkText}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg shadow-md flex items-center gap-2"
      >
        <CheckCircle size={18} /> Analyze My Text
      </button>

      {analysis && (
        <div className={`p-4 rounded-lg flex items-start gap-3 ${
          analysis.type === 'success' ? 'bg-green-100 text-green-800' :
          analysis.type === 'info' ? 'bg-blue-100 text-blue-800' :
          analysis.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          <div className="mt-1">
            {analysis.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          </div>
          <p>{analysis.msg}</p>
        </div>
      )}
    </div>
  );
};

export default App;