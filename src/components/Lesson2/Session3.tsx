import React, { useState } from 'react';
import { ShoppingCart, DollarSign, Frown, Smile, Check, X, AlertCircle, ShoppingBag, Edit3, ArrowRight } from 'lucide-react';

const EnglishLessonApp = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: "1. Context", icon: <ShoppingBag className="w-4 h-4" /> },
    { id: 1, title: "2. TOO", icon: <Frown className="w-4 h-4" /> },
    { id: 2, title: "3. ENOUGH", icon: <Check className="w-4 h-4" /> },
    { id: 3, title: "4. Contrast", icon: <Edit3 className="w-4 h-4" /> },
    { id: 4, title: "5. Phrases", icon: <ShoppingCart className="w-4 h-4" /> },
    { id: 5, title: "6. Practice", icon: <AlertCircle className="w-4 h-4" /> },
    { id: 6, title: "7. Production", icon: <Edit3 className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Lesson 2: You Are What You Eat</h1>
          <p className="text-indigo-100 text-lg">Section 3 – Shopping & Money: TOO / ENOUGH</p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto mt-8 p-4">
        
        {/* Navigation Tabs - Scrollable on mobile */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-4 border-b border-slate-200 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-md transform scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.icon}
              <span className="font-medium">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Content Rendering */}
        <div className="bg-white rounded-2xl shadow-xl p-6 min-h-[500px] border border-slate-100">
          {activeTab === 0 && <ContextSection />}
          {activeTab === 1 && <TooSection />}
          {activeTab === 2 && <EnoughSection />}
          {activeTab === 3 && <ContrastSection />}
          {activeTab === 4 && <FunctionalSection />}
          {activeTab === 5 && <PracticeSection />}
          {activeTab === 6 && <ProductionSection />}
        </div>
      </main>
    </div>
  );
};

// --- Sub-Components for each Section ---

const ContextSection = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-2xl font-bold text-indigo-700 border-b pb-2">1. Contextualization</h2>
    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
      <p className="text-lg italic text-slate-700">Think about the last time you went shopping...</p>
      <ul className="mt-4 space-y-3">
        <li className="flex items-center gap-3">
          <DollarSign className="text-blue-500" /> Was everything cheap or expensive?
        </li>
        <li className="flex items-center gap-3">
          <ShoppingBag className="text-blue-500" /> Did you buy everything you needed?
        </li>
        <li className="flex items-center gap-3">
          <CreditCardIcon /> Did you have money left?
        </li>
      </ul>
    </div>
    
    <div className="bg-yellow-50 p-4 rounded-lg">
      <h3 className="font-bold text-yellow-800 mb-2">💡 Key Concept</h3>
      <p className="text-slate-700">
        In shopping contexts, <span className="font-bold text-red-500">TOO</span> and <span className="font-bold text-green-600">ENOUGH</span> are used to talk about 
        <strong> excess</strong>, <strong>scarcity</strong>, and <strong>limits</strong>.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-slate-50">
        <div className="text-center text-4xl mb-2">😟</div>
        <p className="text-center font-bold">Problem (Too)</p>
      </div>
      <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-slate-50">
        <div className="text-center text-4xl mb-2">🙂</div>
        <p className="text-center font-bold">Satisfaction (Enough)</p>
      </div>
    </div>
  </div>
);

const TooSection = () => {
  const [price, setPrice] = useState(50);
  const budget = 60;

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-red-600 border-b pb-2">2. TOO (Excess / Problem)</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2">Usage & Structure</h3>
          <p className="mb-4 text-slate-600"><strong>TOO</strong> = More than acceptable → <span className="text-red-500 font-bold">PROBLEM</span></p>
          
          <ul className="space-y-2 text-sm bg-slate-100 p-4 rounded-lg">
            <li>• <strong>too + adjective</strong> <br/><span className="text-slate-500">"This jacket is too expensive."</span></li>
            <li>• <strong>too much + noun (uncountable)</strong> <br/><span className="text-slate-500">"I spent too much money."</span></li>
            <li>• <strong>too many + noun (countable)</strong> <br/><span className="text-slate-500">"I bought too many clothes."</span></li>
          </ul>
        </div>

        <div className="bg-white border-2 border-slate-200 p-6 rounded-xl text-center">
          <h3 className="font-bold text-slate-500 mb-4">Interactive Simulator: The Jacket</h3>
          
          <div className="mb-6 relative h-32 flex items-center justify-center">
            <div className={`transition-all duration-300 ${price > budget ? 'scale-110' : 'scale-100'}`}>
                <div className="text-6xl mb-2">🧥</div>
                <div className={`font-bold text-xl ${price > budget ? 'text-red-600' : 'text-green-600'}`}>
                    ${price}
                </div>
            </div>
            {price > budget && (
                <div className="absolute top-0 right-0 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    TOO EXPENSIVE!
                </div>
            )}
          </div>

          <label className="block text-sm font-medium text-slate-700 mb-2">Adjust Price (Your budget is $60)</label>
          <input 
            type="range" 
            min="20" 
            max="120" 
            value={price} 
            onChange={(e) => setPrice(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
          <p className="mt-4 text-lg">
            {price > budget 
              ? <span className="text-red-600 font-bold">"I can't buy it. It's <span className="underline">too expensive</span>."</span> 
              : <span className="text-green-600 font-bold">"I can buy it!"</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

const EnoughSection = () => {
  const [apples, setApples] = useState(2);
  const required = 5;

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-green-700 border-b pb-2">3. ENOUGH (Sufficient)</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2">Usage & Structure</h3>
          <p className="mb-4 text-slate-600"><strong>ENOUGH</strong> = Necessary amount to achieve a goal.</p>
          
          <ul className="space-y-2 text-sm bg-slate-100 p-4 rounded-lg">
            <li>• <strong>enough + noun</strong> <br/><span className="text-slate-500">"I don't have enough money."</span></li>
            <li>• <strong>adjective + enough</strong> <br/><span className="text-slate-500">"The bag isn't big enough."</span></li>
          </ul>
        </div>

        <div className="bg-white border-2 border-slate-200 p-6 rounded-xl text-center">
          <h3 className="font-bold text-slate-500 mb-4">Interactive: Making Apple Pie</h3>
          <p className="text-sm mb-4">You need 5 apples for the pie.</p>
          
          <div className="flex justify-center gap-1 text-4xl h-16 mb-2">
            {[...Array(apples)].map((_, i) => <span key={i} className="animate-bounce-short">🍎</span>)}
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div 
                className={`h-2.5 rounded-full transition-all duration-500 ${apples >= required ? 'bg-green-600' : 'bg-orange-400'}`} 
                style={{ width: `${Math.min((apples / required) * 100, 100)}%` }}
            ></div>
          </div>

          <div className="flex justify-center gap-4">
             <button 
                onClick={() => setApples(Math.max(0, apples - 1))}
                className="px-4 py-2 bg-slate-200 rounded hover:bg-slate-300"
             >-</button>
             <button 
                onClick={() => setApples(apples + 1)}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
             >Add Apple</button>
          </div>

          <p className="mt-4 text-lg">
            {apples < required 
              ? <span className="text-orange-600 font-bold">"I don't have <span className="underline">enough apples</span>."</span> 
              : <span className="text-green-600 font-bold">"I have <span className="underline">enough apples</span>!"</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

const ContrastSection = () => {
    const [size, setSize] = useState(50);
    // 0-30: Too small, 31-69: Big enough/Perfect, 70-100: Too big

    let status = "";
    let color = "";
    if (size < 30) { status = "The jeans are too small."; color = "text-red-500"; }
    else if (size > 70) { status = "The jeans are too big."; color = "text-red-500"; }
    else { status = "The jeans are big enough (Perfect fit)."; color = "text-green-600"; }

    return (
        <div className="space-y-6 animate-fade-in">
             <h2 className="text-2xl font-bold text-indigo-700 border-b pb-2">4. TOO vs ENOUGH</h2>

             <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-sm">
                    <thead className="bg-indigo-600 text-white">
                        <tr>
                            <th className="p-3">Situation</th>
                            <th className="p-3">Sentence</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr className="border-b">
                            <td className="p-3">High Price 💸</td>
                            <td className="p-3 font-medium text-red-600">It's too expensive.</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3">Good Budget 💰</td>
                            <td className="p-3 font-medium text-green-600">I have enough money.</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3">Wrong Size (Small) 👕</td>
                            <td className="p-3 font-medium text-red-600">It's too small.</td>
                        </tr>
                        <tr>
                            <td className="p-3">Correct Size 👌</td>
                            <td className="p-3 font-medium text-green-600">It's big enough.</td>
                        </tr>
                    </tbody>
                </table>
             </div>

             <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-6">
                <h3 className="font-bold text-center mb-4">Try on the Jeans 👖</h3>
                <div className="flex items-center justify-between mb-2 text-xs text-slate-500 uppercase tracking-wide">
                    <span>Tight</span>
                    <span>Perfect</span>
                    <span>Loose</span>
                </div>
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={size} 
                    onChange={(e) => setSize(parseInt(e.target.value))}
                    className="w-full h-4 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className={`mt-4 text-center text-xl font-bold ${color}`}>
                    {status}
                </div>
             </div>
        </div>
    );
};

const FunctionalSection = () => (
    <div className="space-y-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-indigo-700 border-b pb-2">5. Functional Language</h2>
        <p className="text-slate-600">Common phrases used when shopping.</p>

        <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:border-indigo-300 transition-colors">
                <div className="flex gap-3">
                    <div className="bg-red-100 p-2 rounded-full h-min text-red-600"><X size={20}/></div>
                    <div>
                        <p className="font-bold text-lg">"I don't have enough money for that."</p>
                        <p className="text-slate-500 text-sm">When you can't afford something.</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:border-indigo-300 transition-colors">
                <div className="flex gap-3">
                    <div className="bg-orange-100 p-2 rounded-full h-min text-orange-600"><ArrowRight size={20}/></div>
                    <div>
                        <p className="font-bold text-lg">"It's too expensive for me."</p>
                        <p className="text-slate-500 text-sm">Reason for not buying.</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:border-indigo-300 transition-colors">
                <div className="flex gap-3">
                    <div className="bg-blue-100 p-2 rounded-full h-min text-blue-600"><ShoppingBag size={20}/></div>
                    <div>
                        <p className="font-bold text-lg">"Do we have enough food at home?"</p>
                        <p className="text-slate-500 text-sm">Planning before shopping.</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:border-indigo-300 transition-colors">
                <div className="flex gap-3">
                    <div className="bg-purple-100 p-2 rounded-full h-min text-purple-600"><AlertCircle size={20}/></div>
                    <div>
                        <p className="font-bold text-lg">"I think I bought too much."</p>
                        <p className="text-slate-500 text-sm">Post-shopping regret.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const PracticeSection = () => {
    const questions = [
        { id: 1, text: "This phone is ______ expensive.", options: ["too", "enough"], answer: "too" },
        { id: 2, text: "I don't have ______ money to buy it.", options: ["too", "enough"], answer: "enough" },
        { id: 3, text: "I bought ______ many snacks.", options: ["too", "enough"], answer: "too" },
        { id: 4, text: "The apartment isn't big ______.", options: ["too", "enough"], answer: "enough" },
    ];

    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleOptionSelect = (qId, option) => {
        setAnswers({ ...answers, [qId]: option });
        setShowResults(false);
    };

    const checkAnswers = () => {
        setShowResults(true);
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-indigo-700 border-b pb-2">6. Mini Practice</h2>
            <p className="text-slate-600 mb-4">Complete the sentences with <strong>too</strong> or <strong>enough</strong>.</p>

            <div className="space-y-4">
                {questions.map((q) => {
                    const isCorrect = answers[q.id] === q.answer;
                    return (
                        <div key={q.id} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                            <p className="text-lg font-medium mb-3">
                                {q.id}. {q.text.replace('______', '...')}
                            </p>
                            <div className="flex gap-3">
                                {q.options.map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => handleOptionSelect(q.id, opt)}
                                        className={`px-4 py-2 rounded-md capitalize transition-colors ${
                                            answers[q.id] === opt 
                                                ? 'bg-indigo-600 text-white' 
                                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                        }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                            {showResults && (
                                <div className={`mt-3 text-sm font-bold flex items-center gap-2 ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
                                    {isCorrect ? <Check size={16}/> : <X size={16}/>}
                                    {isCorrect ? "Correct!" : `Incorrect. The answer is ${q.answer}.`}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <button 
                onClick={checkAnswers}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-transform hover:scale-[1.01] shadow-lg mt-6"
            >
                Check Answers
            </button>
        </div>
    );
};

const ProductionSection = () => {
    const [text, setText] = useState("");

    return (
        <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-indigo-700 border-b pb-2">7. Production Task</h2>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold text-blue-800">👉 Task: Write a short paragraph about shopping habits.</h3>
                <p className="text-sm text-blue-700 mt-2">Example: <em>I often spend too much money on clothes. Sometimes I don’t have enough money at the end of the month. I try to be more careful, but it’s not easy enough.</em></p>
            </div>

            <textarea
                className="w-full h-40 p-4 border-2 border-slate-300 rounded-xl focus:border-indigo-500 focus:ring focus:ring-indigo-200 outline-none transition-all"
                placeholder="Write here... Try to use 'too much', 'too expensive', 'enough money', or 'big enough'."
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>

            <div className="flex justify-between items-center text-sm text-slate-500">
                <span>Word count: {text.trim() === '' ? 0 : text.trim().split(/\s+/).length}</span>
                <div className="flex gap-2">
                    <span className={text.toLowerCase().includes('too') ? "text-green-600 font-bold" : "text-slate-300"}>Used "Too"</span>
                    <span className="text-slate-300">|</span>
                    <span className={text.toLowerCase().includes('enough') ? "text-green-600 font-bold" : "text-slate-300"}>Used "Enough"</span>
                </div>
            </div>
        </div>
    );
};

const CreditCardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
);

export default EnglishLessonApp;