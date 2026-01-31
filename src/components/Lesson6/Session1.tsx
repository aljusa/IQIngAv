import React, { useState } from 'react';
import { 
  Waves, 
  BookOpen, 
  Target, 
  CheckCircle2, 
  Info, 
  Gamepad2, 
  Award,
  ChevronRight,
  HelpCircle,
  Check,
  X
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('intro');
  const [quizState, setQuizState] = useState({
    ex1: {},
    ex2: {},
    ex3: {},
    showResults: false
  });

  const tabs = [
    { id: 'intro', label: 'Introducción', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'grammar', label: 'Gramática', icon: <Info className="w-4 h-4" /> },
    { id: 'practice', label: 'Práctica', icon: <Gamepad2 className="w-4 h-4" /> },
    { id: 'summary', label: 'Resumen', icon: <Award className="w-4 h-4" /> },
  ];

  const checkExercise1 = (id, val) => {
    setQuizState(prev => ({
      ...prev,
      ex1: { ...prev.ex1, [id]: val }
    }));
  };

  const handleInputEx2 = (id, val) => {
    setQuizState(prev => ({
      ...prev,
      ex2: { ...prev.ex2, [id]: val.toLowerCase().trim() }
    }));
  };

  const handleInputEx3 = (id, val) => {
    setQuizState(prev => ({
      ...prev,
      ex3: { ...prev.ex3, [id]: val.toLowerCase().trim() }
    }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'intro':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
              <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2 mb-4">
                <Waves className="text-blue-600" /> 1. Lesson Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In this lesson, you will learn how to form and understand negative questions in the simple present tense using familiar and motivating contexts such as the pool, the beach, and water games.
              </p>
              <p className="text-gray-700 mt-2">
                The lesson progresses step by step so you can clearly recognize the structure, use, and meaning of negative questions in everyday leisure situations.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5" /> 2. Learning Objectives
                </h3>
                <ul className="space-y-3">
                  {['Identify negative question structure.', 'Distinguish between Don’t vs Doesn’t.', 'Understand communicative intention.', 'Interpret aquatic context examples.'].map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> 3. Associated Skills
                </h3>
                <ul className="space-y-3">
                  {['Grammatical understanding of simple present.', 'Interpreting everyday messages.', 'Expressing surprise or confirmation.'].map((skill, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 rounded-xl text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">4. Prerequisites</h3>
              <p className="opacity-90 mb-4">Before starting, you should have:</p>
              <div className="flex flex-wrap gap-3">
                {['Simple Present Basics', 'Personal Pronouns', 'Action Verbs (swim, play, enjoy)'].map((p, i) => (
                  <span key={i} className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 'grammar':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">5. Lesson Development</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-bold text-blue-600 mb-3 underline decoration-blue-200 underline-offset-4">5.2 What Are Negative Questions?</h3>
                <p className="text-gray-700 italic mb-4">They are used when the speaker:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: 'Expectation', text: 'Expects a "Yes" answer.' },
                    { title: 'Surprise', text: 'Wants to show disbelief.' },
                    { title: 'Confirmation', text: 'Tries to confirm an idea.' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-gray-50 rounded-lg border-t-4 border-blue-400">
                      <strong className="block text-blue-700">{item.title}</strong>
                      <span className="text-sm text-gray-600">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8 p-6 bg-slate-800 rounded-xl text-white shadow-inner">
                <h3 className="text-lg font-bold text-cyan-400 mb-4">5.3 Grammatical Structure</h3>
                <div className="text-center py-6 bg-slate-700/50 rounded-lg mb-4 border border-slate-600">
                  <span className="text-2xl md:text-3xl font-mono">
                    <span className="text-yellow-400">Don't / Doesn't</span> + <span className="text-cyan-400">Subject</span> + <span className="text-green-400">Base Verb</span> ?
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-slate-700 p-3 rounded-lg border border-slate-600">
                    <span className="text-yellow-400 font-bold block mb-1">Use DON'T with:</span>
                    I, You, We, They
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg border border-slate-600">
                    <span className="text-yellow-400 font-bold block mb-1">Use DOESN'T with:</span>
                    He, She, It
                  </div>
                </div>
                <p className="mt-4 text-center text-slate-300 text-sm italic">
                  * Note: The main verb is ALWAYS in base form (no "-s")
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-blue-600 mb-2">5.4 Examples (Aquatic Context)</h3>
                <div className="grid gap-4">
                  {[
                    { q: "Don't you like swimming?", sub: "You expect they like it." },
                    { q: "Doesn't he enjoy the pool?", sub: "He is there, but looks bored." },
                    { q: "Doesn't she like the sea?", sub: "Surprise: she lives by the beach!" },
                    { q: "Don't they play water games?", sub: "Checking a habit." }
                  ].map((ex, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 border rounded-xl hover:border-blue-300 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{ex.q}</p>
                        <p className="text-sm text-gray-500 italic">{ex.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );

      case 'practice':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">6. Practice Exercises</h2>
                <button 
                  onClick={() => setQuizState(prev => ({ ...prev, showResults: !prev.showResults }))}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md active:scale-95"
                >
                  {quizState.showResults ? 'Hide Results' : 'Check Answers'}
                </button>
              </div>

              {/* EXERCISE 1 */}
              <div className="mb-10">
                <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">1</div>
                  Structure Recognition (Choose correct)
                </h3>
                <div className="space-y-6 ml-8">
                  {[
                    { id: '1a', q: '___ you like swimming in the pool?', ans: 'Don\'t' },
                    { id: '1b', q: '___ she enjoy water games?', ans: 'Doesn\'t' },
                    { id: '1c', q: '___ they play at the beach on weekends?', ans: 'Don\'t' }
                  ].map((item, i) => (
                    <div key={item.id} className="p-4 bg-gray-50 rounded-lg">
                      <p className="mb-3 font-medium">{item.q}</p>
                      <div className="flex gap-4">
                        {['Don\'t', 'Doesn\'t'].map(opt => (
                          <button
                            key={opt}
                            onClick={() => checkExercise1(item.id, opt)}
                            className={`px-4 py-1.5 rounded-md border transition-all ${
                              quizState.ex1[item.id] === opt 
                              ? 'bg-blue-600 text-white border-blue-600' 
                              : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                        {quizState.showResults && (
                          <span className="ml-auto flex items-center gap-1 font-bold">
                            {quizState.ex1[item.id] === item.ans ? (
                              <span className="text-green-600 flex items-center"><Check className="w-4 h-4" /> Correct</span>
                            ) : (
                              <span className="text-red-500 flex items-center"><X className="w-4 h-4" /> {item.ans}</span>
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* EXERCISE 2 */}
              <div className="mb-10">
                <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">2</div>
                  Complete with "don't" or "doesn't"
                </h3>
                <div className="space-y-4 ml-8">
                  {[
                    { id: '2a', q: 'he like the sea?', ans: 'doesn\'t' },
                    { id: '2b', q: 'you enjoy swimming in summer?', ans: 'don\'t' },
                    { id: '2c', q: 'they play water games at the pool?', ans: 'don\'t' },
                    { id: '2d', q: 'she swim every morning?', ans: 'doesn\'t' }
                  ].map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <input 
                        type="text"
                        placeholder="..."
                        className={`w-28 px-3 py-1.5 border rounded-lg focus:ring-2 outline-none transition-all ${
                          quizState.showResults 
                            ? (quizState.ex2[item.id] === item.ans ? 'border-green-500 bg-green-50' : 'border-red-400 bg-red-50') 
                            : 'border-gray-200 focus:ring-blue-400'
                        }`}
                        onChange={(e) => handleInputEx2(item.id, e.target.value)}
                      />
                      <span className="text-gray-700 font-medium">{item.q}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* EXERCISE 3 */}
              <div className="mb-4">
                <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">3</div>
                  Sentence Transformation (Full questions)
                </h3>
                <div className="space-y-6 ml-8">
                  {[
                    { id: '3a', q: 'You like swimming.', ans: "don't you like swimming?" },
                    { id: '3b', q: 'He enjoys the pool.', ans: "doesn't he enjoy the pool?" },
                    { id: '3c', q: 'They play water games at the beach.', ans: "don't they play water games at the beach?" }
                  ].map((item) => (
                    <div key={item.id}>
                      <p className="text-sm text-gray-500 mb-2">Transform: <span className="font-bold text-gray-700">{item.q}</span></p>
                      <input 
                        type="text"
                        placeholder="Write the full negative question..."
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-all ${
                          quizState.showResults 
                            ? (quizState.ex3[item.id] === item.ans ? 'border-green-500 bg-green-50' : 'border-red-400 bg-red-50') 
                            : 'border-gray-200 focus:ring-blue-400'
                        }`}
                        onChange={(e) => handleInputEx3(item.id, e.target.value)}
                      />
                      {quizState.showResults && quizState.ex3[item.id] !== item.ans && (
                        <p className="text-xs text-red-500 mt-1">Correct: {item.ans}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );

      case 'summary':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section className="bg-white p-10 rounded-2xl border-2 border-dashed border-blue-200 text-center shadow-sm">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">7. Lesson Wrap-Up</h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
                In this lesson, you learned how to recognize and understand negative questions in the simple present, using <span className="text-blue-600 font-bold">don’t</span> and <span className="text-blue-600 font-bold">doesn’t</span> according to the subject and always followed by a base verb.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-bold text-blue-800 mb-2">Confirm Ideas</h4>
                  <p className="text-sm text-gray-600">"Don't you like the beach?"</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-bold text-blue-800 mb-2">Show Surprise</h4>
                  <p className="text-sm text-gray-600">"Doesn't he swim?"</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-bold text-blue-800 mb-2">Stay Expressive</h4>
                  <p className="text-sm text-gray-600">Context matters!</p>
                </div>
              </div>
              <button 
                onClick={() => setActiveTab('intro')}
                className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg flex items-center gap-2 mx-auto"
              >
                Restart Lesson <ChevronRight className="w-4 h-4" />
              </button>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 font-sans text-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 flex items-center justify-center gap-3">
            <Waves className="w-12 h-12 text-blue-500 animate-pulse" /> 
            Aquatic Activities and Fun
          </h1>
          <p className="text-xl text-blue-700/80 font-medium">
            Grammar Focus: <span className="bg-yellow-100 px-2 py-1 rounded">Negative Questions in Simple Present</span>
          </p>
        </header>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap md:flex-nowrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-gray-500 hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <main className="min-h-[500px]">
          {renderContent()}
        </main>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t text-center text-gray-400 text-sm">
          <p>© 2024 Language Learning Platform • Aquatic & English Series</p>
        </footer>
      </div>
    </div>
  );
};

export default App;