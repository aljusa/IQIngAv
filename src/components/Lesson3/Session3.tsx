import React, { useState, useEffect } from 'react';
import { 
  Apple, 
  GlassWater, 
  Carrot, 
  Utensils, 
  Cookie, 
  Flame, 
  Candy, 
  Droplets, 
  Beef, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  BookOpen, 
  BrainCircuit, 
  Dumbbell,
  Leaf,
  RefreshCcw,
  Scale
} from 'lucide-react';

// --- Types ---

type TabId = 'rule' | 'vocab' | 'examples' | 'practice';

interface VocabItem {
  id: number;
  word: string;
  type: 'countable' | 'uncountable';
  icon: React.ReactNode;
}

interface QuizState {
  a1: string;
  a2: string;
  a3: string;
  a4: string;
  b1: string;
  b2: string;
  b3: string;
  c1: string;
  c2: string;
  d1: string;
}

// --- Components ---

const App = () => {
  const [activeTab, setActiveTab] = useState<TabId>('rule');

  const renderContent = () => {
    switch (activeTab) {
      case 'rule': return <CoreRuleSection />;
      case 'vocab': return <VocabularySection />;
      case 'examples': return <ExamplesSection />;
      case 'practice': return <PracticeSection />;
      default: return <CoreRuleSection />;
    }
  };

  return (
    <div className="min-h-screen bg-green-50 text-slate-800 font-sans selection:bg-green-200">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-500 p-2 rounded-xl text-white">
              <Leaf size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Nutrition & Diet</h1>
              <p className="text-sm text-slate-500 font-medium">Grammar: More + Noun</p>
            </div>
          </div>
          <div className="hidden md:block text-right text-xs text-slate-400">
            Interactive Learning Module
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        
        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
          <TabButton 
            active={activeTab === 'rule'} 
            onClick={() => setActiveTab('rule')} 
            icon={<Scale size={18} />}
            label="1. Core Rule" 
          />
          <TabButton 
            active={activeTab === 'vocab'} 
            onClick={() => setActiveTab('vocab')} 
            icon={<BookOpen size={18} />}
            label="2. Vocabulary" 
          />
          <TabButton 
            active={activeTab === 'examples'} 
            onClick={() => setActiveTab('examples')} 
            icon={<BrainCircuit size={18} />}
            label="3. Examples" 
          />
          <TabButton 
            active={activeTab === 'practice'} 
            onClick={() => setActiveTab('practice')} 
            icon={<Dumbbell size={18} />}
            label="4. Practice" 
          />
        </div>

        {/* Dynamic Content Area */}
        <div className="bg-white rounded-3xl shadow-xl shadow-green-900/5 border border-white overflow-hidden min-h-[500px] transition-all duration-300">
          {renderContent()}
        </div>

      </main>
    </div>
  );
};

// --- Sub-Components for Tabs ---

// 1. Core Rule Component
const CoreRuleSection = () => {
  const [appleCount, setAppleCount] = useState(1);
  const [waterLevel, setWaterLevel] = useState(1);

  return (
    <div className="p-8 animate-in fade-in zoom-in duration-300">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <span className="bg-green-100 text-green-700 w-10 h-10 rounded-full flex items-center justify-center text-xl">1</span>
          The Core Rule
        </h2>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-10">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Central Idea</h3>
          <p className="text-blue-800 text-lg">
            We use <span className="font-bold bg-white px-2 py-0.5 rounded shadow-sm border border-blue-100">more + noun</span> to talk about a larger quantity.
            It works for <span className="underline decoration-blue-400 decoration-2 underline-offset-2">both</span> countable and uncountable nouns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Countable Demo */}
          <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 flex flex-col items-center text-center shadow-sm">
            <h4 className="font-bold text-orange-800 mb-4 uppercase tracking-wider text-sm">Countable (Contables)</h4>
            <div className="h-32 flex items-center justify-center gap-2 flex-wrap content-center mb-4 w-full">
              {Array.from({ length: appleCount }).map((_, i) => (
                <Apple key={i} className="text-red-500 fill-red-500 drop-shadow-sm animate-in bounce-in" size={32} />
              ))}
            </div>
            <p className="font-mono text-slate-600 mb-4 bg-white px-4 py-2 rounded-lg shadow-inner">
              {appleCount === 1 ? "1 apple" : `${appleCount} apples`}
            </p>
            <button 
              onClick={() => setAppleCount(prev => Math.min(prev + 1, 8))}
              className="bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white px-6 py-2 rounded-full font-bold flex items-center gap-2"
            >
              Add MORE <Apple size={16} />
            </button>
            <p className="text-xs text-orange-400 mt-2 h-4">{appleCount === 8 ? "Maximum visuals reached!" : " "}</p>
          </div>

          {/* Uncountable Demo */}
          <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100 flex flex-col items-center text-center shadow-sm">
            <h4 className="font-bold text-cyan-800 mb-4 uppercase tracking-wider text-sm">Uncountable (Incontables)</h4>
            <div className="h-32 flex items-end justify-center mb-4 w-full relative">
               <div className="w-16 bg-blue-200 border-2 border-blue-300 rounded-b-xl relative overflow-hidden h-24">
                  <div 
                    className="absolute bottom-0 w-full bg-blue-500 transition-all duration-500 ease-out opacity-80"
                    style={{ height: `${waterLevel * 20}%` }}
                  ></div>
               </div>
            </div>
            <p className="font-mono text-slate-600 mb-4 bg-white px-4 py-2 rounded-lg shadow-inner">
              {waterLevel < 3 ? "Some water" : "MORE water"}
            </p>
            <button 
              onClick={() => setWaterLevel(prev => Math.min(prev + 1, 5))}
              className="bg-cyan-600 hover:bg-cyan-700 active:scale-95 transition-all text-white px-6 py-2 rounded-full font-bold flex items-center gap-2"
            >
              Add MORE <Droplets size={16} />
            </button>
             <p className="text-xs text-cyan-400 mt-2 h-4">{waterLevel === 5 ? "Glass is full!" : " "}</p>
          </div>

        </div>

        <div className="mt-8 text-center text-slate-500 italic">
          "More works the same way with apples as it does with water."
        </div>
      </div>
    </div>
  );
};

// 2. Vocabulary Component (Mini Game)
const VocabularySection = () => {
  const vocabList: VocabItem[] = [
    { id: 1, word: 'Vegetables', type: 'countable', icon: <Carrot className="text-orange-500" /> },
    { id: 2, word: 'Water', type: 'uncountable', icon: <GlassWater className="text-blue-500" /> },
    { id: 3, word: 'Snacks', type: 'countable', icon: <Cookie className="text-amber-700" /> },
    { id: 4, word: 'Protein', type: 'uncountable', icon: <Beef className="text-red-700" /> },
    { id: 5, word: 'Calories', type: 'countable', icon: <Flame className="text-orange-600" /> },
    { id: 6, word: 'Sugar', type: 'uncountable', icon: <Candy className="text-pink-500" /> },
  ];

  const [gameStatus, setGameStatus] = useState<Record<number, 'correct' | 'wrong' | null>>({});

  const handleGuess = (id: number, type: 'countable' | 'uncountable', correctType: 'countable' | 'uncountable') => {
    setGameStatus(prev => ({
      ...prev,
      [id]: type === correctType ? 'correct' : 'wrong'
    }));
  };

  return (
    <div className="p-8 animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-2 flex items-center gap-3">
          <span className="bg-green-100 text-green-700 w-10 h-10 rounded-full flex items-center justify-center text-xl">2</span>
          Vocabulary Focus
        </h2>
        <p className="text-slate-600 mb-8 ml-14">Interactive Challenge: Is it Countable or Uncountable?</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vocabList.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="bg-slate-50 p-4 rounded-full mb-4 transform hover:scale-110 transition-transform duration-300">
                {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{item.word}</h3>
              
              {gameStatus[item.id] === 'correct' ? (
                <div className="w-full bg-green-100 text-green-700 py-2 rounded-lg font-bold flex items-center justify-center gap-2 animate-in zoom-in">
                  <CheckCircle2 size={18} /> Correct!
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2 w-full">
                  <button 
                    onClick={() => handleGuess(item.id, 'countable', item.type)}
                    className={`text-sm py-2 px-3 rounded-lg font-medium transition-colors border ${gameStatus[item.id] === 'wrong' ? 'bg-red-50 text-red-400 border-red-100 cursor-not-allowed' : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-600'}`}
                    disabled={gameStatus[item.id] === 'wrong'}
                  >
                    Countable
                  </button>
                  <button 
                    onClick={() => handleGuess(item.id, 'uncountable', item.type)}
                    className={`text-sm py-2 px-3 rounded-lg font-medium transition-colors border ${gameStatus[item.id] === 'wrong' ? 'bg-red-50 text-red-400 border-red-100 cursor-not-allowed' : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-600'}`}
                    disabled={gameStatus[item.id] === 'wrong'}
                  >
                    Uncountable
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
          <div className="bg-yellow-100 p-2 rounded-full text-yellow-600 mt-1">
            <BrainCircuit size={16} />
          </div>
          <div>
            <h4 className="font-bold text-yellow-800">Pro Tip:</h4>
            <p className="text-yellow-800 text-sm">
              If the noun can be plural (add an 's'), it is usually <strong>Countable</strong> (e.g., Apple → Apples). 
              If not, it is <strong>Uncountable</strong> (e.g., Water → <s>Waters</s>).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Examples Component
const ExamplesSection = () => {
  const examples = [
    { text: "You should eat more vegetables every day.", icon: <Carrot />, focus: "vegetables" },
    { text: "This diet includes more protein.", icon: <Beef />, focus: "protein" },
    { text: "People who drink more water feel better.", icon: <GlassWater />, focus: "water" },
    { text: "Children need more fruits, not more snacks.", icon: <Apple />, focus: "fruits" },
  ];

  return (
    <div className="p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
          <span className="bg-green-100 text-green-700 w-10 h-10 rounded-full flex items-center justify-center text-xl">3</span>
          Examples in Context
        </h2>

        <div className="space-y-4">
          {examples.map((ex, idx) => (
            <div key={idx} className="bg-white border-l-4 border-green-400 shadow-sm rounded-r-xl p-6 flex items-center gap-6 hover:shadow-md transition-all group">
              <div className="bg-green-50 text-green-600 p-3 rounded-full group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(ex.icon as React.ReactElement, { size: 24 })}
              </div>
              <p className="text-lg text-slate-700 font-medium">
                {ex.text.split(' ').map((word, i) => {
                  const cleanWord = word.replace(/[.,]/g, '');
                  if (cleanWord.toLowerCase() === 'more') {
                    return <span key={i} className="text-green-600 font-bold">more </span>;
                  }
                  if (cleanWord.toLowerCase().includes(ex.focus)) {
                    return <span key={i} className="text-blue-600 font-bold border-b-2 border-blue-200">{word} </span>;
                  }
                  return <span key={i}>{word} </span>;
                })}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-full text-sm font-medium shadow-lg">
             <span className="text-green-400 font-bold">Green = Keyword</span>
             <span className="w-px h-4 bg-slate-600 mx-2"></span>
             <span className="text-blue-300 font-bold">Blue = Noun</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. Practice Component (The Quiz)
const PracticeSection = () => {
  const [answers, setAnswers] = useState<QuizState>({
    a1: '', a2: '', a3: '', a4: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '',
    d1: ''
  });

  const [showResults, setShowResults] = useState(false);

  const check = (val: string, expected: string) => {
    if (!showResults) return 'border-slate-300';
    return val.toLowerCase().trim() === expected.toLowerCase() 
      ? 'border-green-500 bg-green-50 text-green-900' 
      : 'border-red-300 bg-red-50';
  };

  const checkSelect = (val: string, expected: string) => {
    if (!showResults) return 'border-slate-200 bg-white';
    return val === expected
      ? 'border-green-500 bg-green-50 text-green-900 ring-1 ring-green-500'
      : (val !== '' ? 'border-red-300 bg-red-50 text-red-900' : 'border-red-300');
  };

  const reset = () => {
    setAnswers({
      a1: '', a2: '', a3: '', a4: '',
      b1: '', b2: '', b3: '',
      c1: '', c2: '',
      d1: ''
    });
    setShowResults(false);
  };

  return (
    <div className="p-8 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-green-800 flex items-center gap-3">
            <span className="bg-green-100 text-green-700 w-10 h-10 rounded-full flex items-center justify-center text-xl">4</span>
            Guided Practice
          </h2>
          <button 
            onClick={reset}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-green-600 transition-colors"
          >
            <RefreshCcw size={14} /> Reset
          </button>
        </div>

        <div className="space-y-8">
          
          {/* Part A */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-800 mb-4 border-b pb-2">A. Fill in the blanks (Type "more")</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <label className="block text-sm text-slate-600">To be healthier, eat <input type="text" value={answers.a1} onChange={e => setAnswers({...answers, a1: e.target.value})} className={`mx-2 w-20 border-b-2 outline-none text-center font-bold transition-colors ${check(answers.a1, 'more')}`} /> vegetables.</label>
                <label className="block text-sm text-slate-600">This meal has <input type="text" value={answers.a2} onChange={e => setAnswers({...answers, a2: e.target.value})} className={`mx-2 w-20 border-b-2 outline-none text-center font-bold transition-colors ${check(answers.a2, 'more')}`} /> protein.</label>
              </div>
              <div className="space-y-3">
                <label className="block text-sm text-slate-600">Doctors recommend drinking <input type="text" value={answers.a3} onChange={e => setAnswers({...answers, a3: e.target.value})} className={`mx-2 w-20 border-b-2 outline-none text-center font-bold transition-colors ${check(answers.a3, 'more')}`} /> water.</label>
                <label className="block text-sm text-slate-600">A balanced diet includes <input type="text" value={answers.a4} onChange={e => setAnswers({...answers, a4: e.target.value})} className={`mx-2 w-20 border-b-2 outline-none text-center font-bold transition-colors ${check(answers.a4, 'more')}`} /> fruits.</label>
              </div>
            </div>
          </section>

          {/* Part B */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-800 mb-4 border-b pb-2">B. Choose the correct noun</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-slate-700 w-32">Eat more...</span>
                <button onClick={() => setAnswers({...answers, b1: 'food'})} className={`px-4 py-2 rounded-lg border transition-all ${answers.b1 === 'food' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'} ${showResults && answers.b1 === 'food' ? (answers.b1 === 'food' ? 'bg-green-600 border-green-600' : 'bg-red-500 border-red-500') : ''}`}>food</button>
                <button onClick={() => setAnswers({...answers, b1: 'foods'})} className={`px-4 py-2 rounded-lg border transition-all ${answers.b1 === 'foods' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'} ${showResults && answers.b1 === 'foods' ? 'bg-red-500 border-red-500' : ''}`}>foods</button>
                {showResults && <span className={`text-sm font-bold ${answers.b1 === 'food' ? 'text-green-500' : 'text-red-500'}`}>{answers.b1 === 'food' ? 'Correct (Uncountable here)' : 'Incorrect'}</span>}
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-slate-700 w-32">More...</span>
                <button onClick={() => setAnswers({...answers, b2: 'sugar'})} className={`px-4 py-2 rounded-lg border transition-all ${answers.b2 === 'sugar' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'} ${showResults && answers.b2 === 'sugar' ? 'bg-green-600 border-green-600' : ''}`}>sugar</button>
                <button onClick={() => setAnswers({...answers, b2: 'sugars'})} className={`px-4 py-2 rounded-lg border transition-all ${answers.b2 === 'sugars' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'} ${showResults && answers.b2 === 'sugars' ? 'bg-red-500 border-red-500' : ''}`}>sugars</button>
                {showResults && <span className={`text-sm font-bold ${answers.b2 === 'sugar' ? 'text-green-500' : 'text-red-500'}`}>{answers.b2 === 'sugar' ? 'Correct (Uncountable)' : 'Incorrect'}</span>}
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                 <span className="text-slate-700 w-32">You need more...</span>
                <button onClick={() => setAnswers({...answers, b3: 'vegetable'})} className={`px-4 py-2 rounded-lg border transition-all ${answers.b3 === 'vegetable' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'} ${showResults && answers.b3 === 'vegetable' ? 'bg-red-500 border-red-500' : ''}`}>vegetable</button>
                <button onClick={() => setAnswers({...answers, b3: 'vegetables'})} className={`px-4 py-2 rounded-lg border transition-all ${answers.b3 === 'vegetables' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'} ${showResults && answers.b3 === 'vegetables' ? 'bg-green-600 border-green-600' : ''}`}>vegetables</button>
                {showResults && <span className={`text-sm font-bold ${answers.b3 === 'vegetables' ? 'text-green-500' : 'text-red-500'}`}>{answers.b3 === 'vegetables' ? 'Correct (Countable Plural)' : 'Incorrect'}</span>}
              </div>
            </div>
          </section>

          {/* Part C */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-800 mb-4 border-b pb-2">C. Transform the sentence</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Eat vegetables every day.</p>
                <div className="flex items-center gap-2">
                  <span className="text-green-700 font-bold">→</span>
                  <input 
                    type="text" 
                    placeholder="Type the full new sentence..."
                    value={answers.c1} 
                    onChange={e => setAnswers({...answers, c1: e.target.value})} 
                    className={`flex-1 p-2 rounded border outline-none transition-colors ${showResults ? (answers.c1.toLowerCase().includes('eat more vegetables') ? 'border-green-500 bg-green-50' : 'border-red-300 bg-red-50') : 'border-slate-300 focus:border-blue-400'}`} 
                  />
                </div>
                {showResults && !answers.c1.toLowerCase().includes('eat more vegetables') && <p className="text-xs text-red-500 mt-1 pl-6">Expected: "Eat more vegetables..."</p>}
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-1">Drink water during the day.</p>
                <div className="flex items-center gap-2">
                  <span className="text-green-700 font-bold">→</span>
                  <input 
                    type="text" 
                    placeholder="Type the full new sentence..."
                    value={answers.c2} 
                    onChange={e => setAnswers({...answers, c2: e.target.value})} 
                    className={`flex-1 p-2 rounded border outline-none transition-colors ${showResults ? (answers.c2.toLowerCase().includes('drink more water') ? 'border-green-500 bg-green-50' : 'border-red-300 bg-red-50') : 'border-slate-300 focus:border-blue-400'}`} 
                  />
                </div>
                 {showResults && !answers.c2.toLowerCase().includes('drink more water') && <p className="text-xs text-red-500 mt-1 pl-6">Expected: "Drink more water..."</p>}
              </div>
            </div>
          </section>

           {/* Part D */}
           <section className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl shadow-sm border border-green-100">
            <h3 className="font-bold text-lg text-slate-800 mb-2">D. Personal Production</h3>
            <p className="text-sm text-slate-600 mb-4">Write 3 sentences about healthy habits using <span className="font-bold">more</span>.</p>
            <textarea 
              value={answers.d1}
              onChange={e => setAnswers({...answers, d1: e.target.value})}
              className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none h-32"
              placeholder="1. I need to drink more water...&#10;2. ...&#10;3. ..."
            ></textarea>
            {showResults && (
              <div className="mt-2 text-sm text-green-700 bg-green-100 p-2 rounded flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5" />
                <span>Great job practicing! Make sure you used both countable (e.g., apples) and uncountable (e.g., water) nouns.</span>
              </div>
            )}
          </section>

          <div className="flex justify-center pt-4">
            <button 
              onClick={() => setShowResults(true)}
              className="bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-700 active:scale-95 transition-all shadow-lg shadow-green-900/20"
            >
              Check My Answers
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Utilities ---

const TabButton = ({ active, onClick, label, icon }: { active: boolean, onClick: () => void, label: string, icon: React.ReactNode }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
      active 
        ? 'bg-green-600 text-white shadow-lg scale-105' 
        : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-green-600'
    }`}
  >
    {icon}
    {label}
  </button>
);

export default App;