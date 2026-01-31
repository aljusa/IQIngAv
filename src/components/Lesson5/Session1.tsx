import React, { useState } from 'react';
import { 
  Coffee, 
  BookOpen, 
  PenTool, 
  MessageCircle, 
  Check, 
  X, 
  ChevronRight, 
  Info,
  RotateCcw
} from 'lucide-react';

// --- Types & Interfaces ---

type Tab = 'rules' | 'context' | 'practice';

interface QuizState {
  fillIn: { [key: number]: string };
  transform: { [key: number]: string };
  multipleChoice: { [key: number]: string };
  writing: string;
}

// --- Components ---

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('rules');

  const renderContent = () => {
    switch (activeTab) {
      case 'rules':
        return <CoreRules />;
      case 'context':
        return <ContextExamples />;
      case 'practice':
        return <GuidedPractice />;
      default:
        return <CoreRules />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-amber-200">
      {/* Header */}
      <header className="bg-amber-900 text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-amber-100 text-amber-900 p-2 rounded-full">
              <Coffee size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">English at the Café</h1>
              <p className="text-amber-200 text-sm">Section 1: "Would Like" - Polite wants & offers</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-10 border-b border-stone-200">
        <div className="max-w-4xl mx-auto flex">
          <TabButton 
            active={activeTab === 'rules'} 
            onClick={() => setActiveTab('rules')} 
            icon={<BookOpen size={18} />} 
            label="1. Core Rules" 
          />
          <TabButton 
            active={activeTab === 'context'} 
            onClick={() => setActiveTab('context')} 
            icon={<MessageCircle size={18} />} 
            label="2. Examples" 
          />
          <TabButton 
            active={activeTab === 'practice'} 
            onClick={() => setActiveTab('practice')} 
            icon={<PenTool size={18} />} 
            label="3. Practice" 
          />
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="transition-all duration-500 ease-in-out">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 text-center text-stone-400 text-sm border-t border-stone-200">
        <p>Interactive English Lesson • Created for Learning</p>
      </footer>
    </div>
  );
};

// --- Tab Button Component ---
const TabButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex-1 flex items-center justify-center gap-2 py-4 font-medium transition-colors duration-200 
      ${active 
        ? 'text-amber-700 border-b-4 border-amber-600 bg-amber-50/50' 
        : 'text-stone-500 hover:text-amber-600 hover:bg-stone-50'
      }`}
  >
    {icon}
    <span className="hidden sm:inline">{label}</span>
  </button>
);

// --- Section 1: Core Rules ---
const CoreRules: React.FC = () => {
  const [showContractions, setShowContractions] = useState(false);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Intro Card */}
      <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="bg-amber-100 p-4 border-b border-amber-200 flex items-start gap-3">
          <Info className="text-amber-700 mt-1" />
          <div>
            <h2 className="text-lg font-bold text-amber-900">The Golden Rule</h2>
            <p className="text-stone-700 mt-1">
              Use <strong>"Would like"</strong> to express desires, requests, or offers politely. 
              It is softer and more formal than "want".
            </p>
          </div>
        </div>
      </div>

      {/* Structure Interaction */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-stone-800">Structure Builder</h3>
            <button 
              onClick={() => setShowContractions(!showContractions)}
              className="text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-800 rounded-full hover:bg-amber-200 transition"
            >
              {showContractions ? "Show Full Form" : "Show Contractions"}
            </button>
          </div>

          <div className="space-y-4">
            {/* Affirmative */}
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <h4 className="text-green-800 font-bold text-sm mb-2 uppercase tracking-wide">Affirmative</h4>
              <div className="flex flex-wrap items-center gap-2 text-lg">
                <span className="font-semibold text-stone-600">Subject</span>
                <span className="text-stone-400">+</span>
                <span className="font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-200 transition-all duration-300">
                  {showContractions ? "'d like" : "would like"}
                </span>
                <span className="text-stone-400">+</span>
                <span className="italic text-stone-600">noun / to-infinitive</span>
              </div>
              <p className="mt-3 text-stone-600 italic border-l-4 border-green-300 pl-3">
                "{showContractions ? "I'd" : "I would"} like a coffee."
              </p>
            </div>

            {/* Negative */}
            <div className="p-4 bg-red-50 rounded-lg border border-red-100">
              <h4 className="text-red-800 font-bold text-sm mb-2 uppercase tracking-wide">Negative</h4>
              <div className="flex flex-wrap items-center gap-2 text-lg">
                <span className="font-semibold text-stone-600">Subject</span>
                <span className="text-stone-400">+</span>
                <span className="font-bold text-red-600 bg-red-50 px-2 py-1 rounded border border-red-200 transition-all duration-300">
                  {showContractions ? "wouldn't like" : "would not like"}
                </span>
                <span className="text-stone-400">+</span>
                <span className="italic text-stone-600">noun</span>
              </div>
              <p className="mt-3 text-stone-600 italic border-l-4 border-red-300 pl-3">
                "We {showContractions ? "wouldn't" : "would not"} like milk."
              </p>
            </div>

            {/* Question */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="text-blue-800 font-bold text-sm mb-2 uppercase tracking-wide">Question</h4>
              <div className="flex flex-wrap items-center gap-2 text-lg">
                <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-200">Would</span>
                <span className="text-stone-400">+</span>
                <span className="font-semibold text-stone-600">Subject</span>
                <span className="text-stone-400">+</span>
                <span className="font-bold text-blue-600">like</span>
                <span className="text-stone-400">+</span>
                <span className="italic text-stone-600">...?</span>
              </div>
              <p className="mt-3 text-stone-600 italic border-l-4 border-blue-300 pl-3">
                "Would you like some sugar?"
              </p>
            </div>
          </div>
        </div>

        {/* Common Mistake Panel */}
        <div className="space-y-6">
           <div className="bg-stone-800 text-stone-200 p-6 rounded-xl shadow-lg">
             <h3 className="font-bold text-amber-400 mb-4 flex items-center gap-2">
               <span className="text-xl">⚠️</span> Warning: Common Mistake
             </h3>
             <div className="space-y-4">
                <div className="flex items-center gap-3 opacity-50">
                   <X className="text-red-500 shrink-0" />
                   <span className="line-through">I like a coffee.</span>
                </div>
                <div className="flex items-center gap-3 font-bold text-white text-lg">
                   <Check className="text-green-500 shrink-0" />
                   <span>I would like a coffee.</span>
                </div>
                <p className="text-sm text-stone-400 mt-2 border-t border-stone-700 pt-3">
                  <strong>Why?</strong> "I like" expresses a general preference (all the time). "I would like" is for a specific request right now.
                </p>
             </div>
           </div>

           <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
             <h3 className="font-bold text-amber-800 mb-2">Did you know?</h3>
             <p className="text-stone-700">
               In spoken English, native speakers almost always use contractions:
             </p>
             <ul className="mt-3 space-y-1 ml-4 list-disc text-stone-600">
               <li>I would → <strong>I'd</strong></li>
               <li>You would → <strong>You'd</strong></li>
               <li>We would → <strong>We'd</strong></li>
             </ul>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- Section 2: Examples in Context ---
const ContextExamples: React.FC = () => {
  const [activeDialogue, setActiveDialogue] = useState<number | null>(null);

  const dialogues = [
    {
      id: 1,
      title: "Ordering a Drink",
      lines: [
        { speaker: "Barista", text: "Good morning. What can I get for you?", type: "neutral" },
        { speaker: "Customer", text: "I'd like a cappuccino, please.", type: "focus" },
        { speaker: "Barista", text: "Sure thing.", type: "neutral" }
      ]
    },
    {
      id: 2,
      title: "Offering Something",
      lines: [
        { speaker: "Waiter", text: "Would you like anything else?", type: "focus" },
        { speaker: "Customer", text: "No, thank you. Just the check.", type: "neutral" }
      ]
    },
    {
      id: 3,
      title: "Specific Preferences",
      lines: [
        { speaker: "Barista", text: "Do you want whipped cream?", type: "neutral" },
        { speaker: "Customer", text: "We wouldn't like ice in the drinks, but cream is fine.", type: "focus" }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-stone-800 mb-4">Click a scenario to listen to the conversation</h2>
      
      <div className="grid md:grid-cols-3 gap-4">
        {dialogues.map((d) => (
          <button
            key={d.id}
            onClick={() => setActiveDialogue(d.id)}
            className={`p-6 rounded-xl text-left transition-all duration-300 border shadow-sm group
              ${activeDialogue === d.id 
                ? 'bg-amber-600 text-white border-amber-600 ring-2 ring-amber-200 ring-offset-2' 
                : 'bg-white text-stone-600 border-stone-200 hover:border-amber-400 hover:shadow-md'
              }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-lg">Scenario {d.id}</span>
              <MessageCircle size={20} className={activeDialogue === d.id ? 'text-amber-200' : 'text-stone-300'} />
            </div>
            <p className={`text-sm ${activeDialogue === d.id ? 'text-amber-100' : 'text-stone-400'}`}>{d.title}</p>
          </button>
        ))}
      </div>

      {/* Dialogue Display Area */}
      <div className="bg-white rounded-2xl shadow-lg border border-stone-200 min-h-[300px] p-6 relative overflow-hidden">
        {activeDialogue ? (
          <div className="space-y-6 max-w-2xl mx-auto">
             <div className="text-center mb-6">
                <span className="bg-stone-100 text-stone-500 px-3 py-1 rounded-full text-xs uppercase tracking-widest font-bold">
                  {dialogues.find(d => d.id === activeDialogue)?.title}
                </span>
             </div>
             
             {dialogues.find(d => d.id === activeDialogue)?.lines.map((line, idx) => (
               <div key={idx} className={`flex gap-4 ${line.speaker === 'Customer' ? 'flex-row-reverse' : 'flex-row'}`}>
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm
                   ${line.speaker === 'Barista' || line.speaker === 'Waiter' ? 'bg-stone-800 text-white' : 'bg-amber-500 text-white'}
                 `}>
                   {line.speaker[0]}
                 </div>
                 <div className={`p-4 rounded-2xl max-w-[80%] 
                   ${line.type === 'focus' 
                      ? 'bg-amber-100 text-amber-900 border border-amber-200 shadow-sm transform scale-105' 
                      : 'bg-stone-50 text-stone-700'
                   }
                 `}>
                   <p className="font-bold text-xs mb-1 opacity-50 uppercase">{line.speaker}</p>
                   <p className="text-lg leading-relaxed">{line.text}</p>
                 </div>
               </div>
             ))}
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-300">
            <Coffee size={64} className="mb-4 opacity-50" />
            <p>Select a scenario above to start</p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Section 3: Guided Practice ---
const GuidedPractice: React.FC = () => {
  const [answers, setAnswers] = useState<QuizState>({
    fillIn: {},
    transform: {},
    multipleChoice: {},
    writing: ""
  });

  const [validation, setValidation] = useState<{ [key: string]: boolean | null }>({});
  const [showWritingFeedback, setShowWritingFeedback] = useState(false);

  // --- Data ---
  const fillInQuestions = [
    { id: 1, pre: "I", post: "a tea, please.", answer: "would like" },
    { id: 2, pre: "She", post: "sugar in her coffee. (Negative)", answer: "wouldn't like" },
    { id: 3, pre: "We", post: "to sit near the window.", answer: "would like" },
    { id: 4, pre: "He", post: "anything cold today. (Negative)", answer: "wouldn't like" },
  ];

  const transformQuestions = [
    { id: 1, original: "I want a sandwich.", hint: "I...", answer: "would like a sandwich" },
    { id: 2, original: "Do you want to drink something?", hint: "Would...", answer: "you like to drink something" },
  ];

  const mcqQuestions = [
    { id: 1, q: "___ you like some dessert?", options: ["Do", "Would"], correct: "Would" },
    { id: 2, q: "I'd like ___ pay by card.", options: ["for", "to"], correct: "to" },
  ];

  // --- Handlers ---
  const checkFillIn = (id: number, correct: string) => {
    const userVal = answers.fillIn[id]?.toLowerCase().trim();
    // Allow contractions in answers too
    const isValid = userVal === correct.toLowerCase() || 
                    (correct === "would like" && userVal === "'d like") ||
                    (correct === "wouldn't like" && userVal === "would not like");
    setValidation(prev => ({ ...prev, [`fill_${id}`]: isValid }));
  };

  const checkTransform = (id: number, correct: string) => {
    const userVal = answers.transform[id]?.toLowerCase().trim().replace(/[.?]/g, '');
    const cleanCorrect = correct.toLowerCase().replace(/[.?]/g, '');
    // Simple check - in a real app, use fuzzy matching
    const isValid = userVal.includes(cleanCorrect); 
    setValidation(prev => ({ ...prev, [`trans_${id}`]: isValid }));
  };

  const handleMCQ = (id: number, option: string, correct: string) => {
    setAnswers(prev => ({ ...prev, multipleChoice: { ...prev.multipleChoice, [id]: option } }));
    setValidation(prev => ({ ...prev, [`mcq_${id}`]: option === correct }));
  };

  return (
    <div className="space-y-12 pb-20">
      
      {/* Exercise A */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
        <h3 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2">
          <span className="bg-amber-100 w-8 h-8 flex items-center justify-center rounded-full text-sm">A</span>
          Fill in the blanks
        </h3>
        <p className="text-sm text-stone-500 mb-6">Complete with <em>would like</em> or <em>wouldn't like</em>.</p>
        
        <div className="grid gap-4">
          {fillInQuestions.map((q) => (
            <div key={q.id} className="flex items-center gap-2 text-lg flex-wrap">
              <span>{q.pre}</span>
              <div className="relative">
                <input 
                  type="text" 
                  className={`border-b-2 bg-stone-50 px-2 py-1 outline-none w-40 text-center transition-colors
                    ${validation[`fill_${q.id}`] === true ? 'border-green-500 text-green-700' : 
                      validation[`fill_${q.id}`] === false ? 'border-red-500 text-red-700' : 'border-stone-300 focus:border-amber-500'}
                  `}
                  placeholder="..."
                  onChange={(e) => setAnswers({...answers, fillIn: {...answers.fillIn, [q.id]: e.target.value}})}
                  onBlur={() => checkFillIn(q.id, q.answer)}
                />
                {validation[`fill_${q.id}`] === true && <Check size={16} className="absolute -right-6 top-2 text-green-500" />}
              </div>
              <span>{q.post}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Exercise B */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
        <h3 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2">
          <span className="bg-amber-100 w-8 h-8 flex items-center justify-center rounded-full text-sm">B</span>
          Transform Sentences
        </h3>
        <p className="text-sm text-stone-500 mb-6">Change the phrases to be more polite using <em>would like</em>.</p>
        
        <div className="space-y-6">
          {transformQuestions.map((q) => (
            <div key={q.id} className="space-y-2">
              <p className="text-stone-500 font-medium">"{q.original}"</p>
              <div className="flex gap-2 w-full">
                <input 
                  type="text" 
                  className={`w-full p-3 rounded-lg border outline-none transition-all
                    ${validation[`trans_${q.id}`] === true ? 'bg-green-50 border-green-300' : 
                      validation[`trans_${q.id}`] === false ? 'bg-red-50 border-red-300' : 'bg-stone-50 border-stone-200 focus:ring-2 ring-amber-200'}
                  `}
                  placeholder={`Type: ${q.hint}...`}
                  onChange={(e) => setAnswers({...answers, transform: {...answers.transform, [q.id]: e.target.value}})}
                />
                <button 
                  onClick={() => checkTransform(q.id, q.answer)}
                  className="px-4 bg-stone-800 text-white rounded-lg hover:bg-stone-700 font-medium text-sm"
                >
                  Check
                </button>
              </div>
              {validation[`trans_${q.id}`] === false && (
                <p className="text-xs text-red-500">Try again! Hint: Use "{q.answer}"</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Exercise C */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
        <h3 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2">
          <span className="bg-amber-100 w-8 h-8 flex items-center justify-center rounded-full text-sm">C</span>
          Multiple Choice
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {mcqQuestions.map((q) => (
            <div key={q.id} className="p-4 bg-stone-50 rounded-lg">
              <p className="font-medium text-lg mb-3">{q.q}</p>
              <div className="flex gap-3">
                {q.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleMCQ(q.id, opt, q.correct)}
                    className={`flex-1 py-2 px-4 rounded-md border font-medium transition-all
                      ${answers.multipleChoice[q.id] === opt 
                        ? (opt === q.correct ? 'bg-green-600 text-white border-green-600' : 'bg-red-500 text-white border-red-500')
                        : 'bg-white border-stone-300 hover:border-amber-400 text-stone-600'}
                    `}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {validation[`mcq_${q.id}`] !== undefined && (
                <div className={`mt-2 text-sm font-bold flex items-center gap-1 ${validation[`mcq_${q.id}`] ? 'text-green-600' : 'text-red-500'}`}>
                  {validation[`mcq_${q.id}`] ? <><Check size={14}/> Correct!</> : <><X size={14}/> Incorrect</>}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Exercise D */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
        <h3 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2">
          <span className="bg-amber-100 w-8 h-8 flex items-center justify-center rounded-full text-sm">D</span>
          Personal Production
        </h3>
        <p className="text-sm text-stone-500 mb-4">
          Write 3 sentences you might say in a café using <em>would like</em>.
        </p>

        <textarea 
          className="w-full h-32 p-4 rounded-lg bg-yellow-50 border border-yellow-200 text-stone-700 font-handwriting text-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none placeholder:text-yellow-700/30"
          placeholder="1. I'd like a..."
          value={answers.writing}
          onChange={(e) => setAnswers({...answers, writing: e.target.value})}
        />
        
        <div className="mt-4 flex justify-between items-center">
          <button 
            onClick={() => setShowWritingFeedback(!showWritingFeedback)}
            className="flex items-center gap-2 text-amber-700 font-bold hover:underline"
          >
            {showWritingFeedback ? "Hide suggestions" : "See suggestions"} <ChevronRight size={16} className={`transform transition ${showWritingFeedback ? 'rotate-90' : ''}`}/>
          </button>
          <button 
             onClick={() => setAnswers({...answers, writing: ""})}
             className="text-stone-400 hover:text-red-500 text-sm flex items-center gap-1"
          >
            <RotateCcw size={14} /> Clear
          </button>
        </div>

        {showWritingFeedback && (
          <div className="mt-4 p-4 bg-stone-100 rounded-lg animate-fade-in">
            <h4 className="font-bold text-stone-600 mb-2 text-sm uppercase">Example Answers:</h4>
            <ul className="list-disc list-inside text-stone-600 space-y-1">
              <li>I'd like a slice of chocolate cake, please.</li>
              <li>We would like to sit outside on the terrace.</li>
              <li>Would you like to see the menu?</li>
            </ul>
          </div>
        )}
      </section>

    </div>
  );
};

export default App;