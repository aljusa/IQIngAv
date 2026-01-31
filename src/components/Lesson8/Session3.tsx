import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, Layout, PenTool, ChevronRight, Star, RefreshCcw, Info, Volume2 } from 'lucide-react';

// --- Types & Interfaces ---

type TabId = 'intro' | 'lesson' | 'practice' | 'summary';

interface QuestionEx1 {
  id: number;
  word: string;
  options: string[];
  correctAnswer: string;
}

interface QuestionEx2 {
  id: number;
  sentence: string; // contains '___'
  options: string[];
  correctAnswer: string;
}

interface QuestionEx3 {
  id: number;
  words: string[];
  correctAnswer: string;
  hint: string;
}

// --- Data ---

const QUESTIONS_EX1: QuestionEx1[] = [
  { id: 1, word: 'Always', options: ['Not very often', 'On some occasions', 'All the time'], correctAnswer: 'All the time' },
  { id: 2, word: 'Rarely', options: ['Not very often', 'On some occasions', 'Many times'], correctAnswer: 'Not very often' },
  { id: 3, word: 'Sometimes', options: ['All the time', 'On some occasions', 'Never'], correctAnswer: 'On some occasions' },
];

const QUESTIONS_EX2: QuestionEx2[] = [
  { id: 1, sentence: 'They ___ enjoy working in groups.', options: ['often', 'never'], correctAnswer: 'often' },
  { id: 2, sentence: 'She ___ likes participating in discussions.', options: ['sometimes', 'always'], correctAnswer: 'sometimes' },
  { id: 3, sentence: 'We ___ enjoy giving presentations.', options: ['rarely', 'always'], correctAnswer: 'rarely' },
  { id: 4, sentence: 'He ___ likes speaking in public.', options: ['never', 'often'], correctAnswer: 'never' },
];

const QUESTIONS_EX3: QuestionEx3[] = [
  { id: 1, words: ['enjoy', 'often', 'participate', 'discussions'], correctAnswer: 'I often enjoy participating in discussions', hint: 'Subject: I' },
  { id: 2, words: ['like', 'sometimes', 'work', 'teams'], correctAnswer: 'They sometimes like working in teams', hint: 'Subject: They' },
  { id: 3, words: ['enjoy', 'never', 'give', 'presentations'], correctAnswer: 'We never enjoy giving presentations', hint: 'Subject: We' },
];

// --- Components ---

const TabButton = ({ 
  id, 
  active, 
  label, 
  icon: Icon, 
  onClick 
}: { 
  id: TabId; 
  active: boolean; 
  label: string; 
  icon: any; 
  onClick: (id: TabId) => void 
}) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
      active
        ? 'border-indigo-600 text-indigo-700 bg-indigo-50/50'
        : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
    }`}
  >
    <Icon size={18} />
    {label}
  </button>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
    <div className="w-1.5 h-8 bg-indigo-600 rounded-full"></div>
    {children}
  </h2>
);

const Card = ({ title, children, className = '' }: { title?: string, children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {title && (
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
        <h3 className="font-semibold text-slate-700">{title}</h3>
      </div>
    )}
    <div className="p-6">{children}</div>
  </div>
);

// --- Content Components ---

const IntroContent = ({ onNext }: { onNext: () => void }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <SectionTitle>Introduction & Objectives</SectionTitle>
    
    <div className="grid md:grid-cols-2 gap-6">
      <Card title="Lesson Description">
        <p className="text-slate-600 leading-relaxed">
          In this lesson, you will learn how to express audience preferences by indicating frequency. 
          You will use the verbs <span className="font-bold text-indigo-600">like</span> and <span className="font-bold text-indigo-600">enjoy</span> combined with adverbs of frequency to communicate how often people enjoy (or do not enjoy) participating in activities, especially in social and academic contexts.
        </p>
      </Card>

      <Card title="Learning Objectives">
        <ul className="space-y-3">
          {[
            'Recognize and understand common adverbs of frequency.',
            'Identify the correct position of the adverb in the sentence.',
            'Interpret sentences that express habitual likes and dislikes.',
            'Understand audience preferences in different contexts.'
          ].map((obj, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-600">
              <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={18} />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>

    <Card title="Prerequisites & Skills">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold text-slate-800 mb-2">You should already have:</h4>
          <ul className="list-disc list-inside text-slate-600 space-y-1 ml-2">
            <li>Basic knowledge of <em>like</em> and <em>enjoy</em>.</li>
            <li>Elementary familiarity with verbs in the <em>-ing</em> form.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-800 mb-2">Skills you will develop:</h4>
          <ul className="list-disc list-inside text-slate-600 space-y-1 ml-2">
            <li>Functional understanding of English habits.</li>
            <li>Appropriate use of adverbs for nuance.</li>
          </ul>
        </div>
      </div>
    </Card>

    <div className="flex justify-end">
      <button 
        onClick={onNext}
        className="group flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
      >
        Start Lesson
        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const LessonContent = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <SectionTitle>Lesson Development</SectionTitle>

    {/* Context */}
    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex gap-4 items-start">
      <Info className="text-blue-500 shrink-0 mt-1" />
      <div>
        <h3 className="font-semibold text-blue-900 mb-1">Context: Habits and Preferences</h3>
        <p className="text-blue-800">
          People do not only express what they like, but also how often they enjoy certain activities. 
          Adverbs of frequency help describe these habits more precisely.
        </p>
      </div>
    </div>

    {/* Vocabulary */}
    <Card title="Key Vocabulary: Adverbs of Frequency">
      <div className="grid sm:grid-cols-5 gap-4">
        {[
          { word: 'Always', meaning: 'All the time', color: 'bg-green-100 text-green-800', percent: '100%' },
          { word: 'Often', meaning: 'Many times', color: 'bg-teal-100 text-teal-800', percent: '75%' },
          { word: 'Sometimes', meaning: 'On some occasions', color: 'bg-yellow-100 text-yellow-800', percent: '50%' },
          { word: 'Rarely', meaning: 'Not very often', color: 'bg-orange-100 text-orange-800', percent: '25%' },
          { word: 'Never', meaning: 'Not at any time', color: 'bg-red-100 text-red-800', percent: '0%' },
        ].map((item) => (
          <div key={item.word} className="flex flex-col items-center p-4 rounded-lg bg-slate-50 border border-slate-100">
            <span className={`px-3 py-1 rounded-full text-xs font-bold mb-3 ${item.color}`}>
              {item.percent}
            </span>
            <span className="font-bold text-lg text-slate-800">{item.word}</span>
            <span className="text-xs text-center text-slate-500 mt-1">{item.meaning}</span>
          </div>
        ))}
      </div>
    </Card>

    {/* Grammar */}
    <Card title="Grammatical Structure">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-6 bg-slate-50 p-6 rounded-xl border-dashed border-2 border-slate-200">
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 font-mono text-indigo-600 font-bold">Subject</div>
        <span className="text-slate-400 text-2xl">+</span>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 font-mono text-indigo-600 font-bold">like / enjoy</div>
        <span className="text-slate-400 text-2xl">+</span>
        <div className="bg-orange-100 px-4 py-2 rounded-lg shadow-sm border border-orange-200 font-mono text-orange-700 font-bold">Adverb of Frequency</div>
        <span className="text-slate-400 text-2xl">+</span>
        <div className="bg-green-100 px-4 py-2 rounded-lg shadow-sm border border-green-200 font-mono text-green-700 font-bold">Verb-ing</div>
      </div>
      
      <div className="space-y-4">
        <h4 className="font-semibold text-slate-700">Examples:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-indigo-500">
            <p className="font-medium text-slate-800">I <span className="text-orange-600">often</span> enjoy <span className="text-green-600">participating</span> in debates.</p>
            <p className="text-sm text-slate-500 mt-1">Shows the activity happens frequently.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-indigo-500">
             <p className="font-medium text-slate-800">They <span className="text-orange-600">never</span> like <span className="text-green-600">speaking</span> in public.</p>
             <p className="text-sm text-slate-500 mt-1">Expresses a constant negative preference.</p>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

const PracticeContent = () => {
  const [ex1Answers, setEx1Answers] = useState<Record<number, string>>({});
  const [ex2Answers, setEx2Answers] = useState<Record<number, string>>({});
  const [ex3Inputs, setEx3Inputs] = useState<Record<number, string>>({});
  const [ex3Feedback, setEx3Feedback] = useState<Record<number, boolean | null>>({});

  const handleEx1Select = (qId: number, option: string) => {
    setEx1Answers(prev => ({ ...prev, [qId]: option }));
  };

  const handleEx2Select = (qId: number, option: string) => {
    setEx2Answers(prev => ({ ...prev, [qId]: option }));
  };

  const checkEx3 = (qId: number, correct: string) => {
    const input = ex3Inputs[qId] || '';
    // Basic normalization for checking
    const isCorrect = input.trim().toLowerCase() === correct.toLowerCase();
    setEx3Feedback(prev => ({ ...prev, [qId]: isCorrect }));
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <SectionTitle>Practice Exercises</SectionTitle>

      {/* Exercise 1 */}
      <Card title="Exercise 1: Vocabulary Recognition (Easy)">
        <p className="text-slate-600 mb-4">Match the adverb with its meaning.</p>
        <div className="grid gap-4">
          {QUESTIONS_EX1.map((q) => {
            const isAnswered = !!ex1Answers[q.id];
            const isCorrect = ex1Answers[q.id] === q.correctAnswer;
            
            return (
              <div key={q.id} className="p-4 border rounded-lg bg-slate-50">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-lg text-indigo-700">{q.word}</span>
                  {isAnswered && (
                    <span className={`text-sm font-bold ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
                      {isCorrect ? 'Correct!' : 'Try again'}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleEx1Select(q.id, opt)}
                      className={`px-3 py-2 rounded text-sm transition-colors border ${
                        ex1Answers[q.id] === opt
                          ? isCorrect 
                            ? 'bg-green-100 border-green-300 text-green-800' 
                            : 'bg-red-100 border-red-300 text-red-800'
                          : 'bg-white border-slate-200 hover:border-indigo-300 text-slate-600'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Exercise 2 */}
      <Card title="Exercise 2: Complete the Sentence (Medium)">
        <p className="text-slate-600 mb-4">Choose the correct adverb to complete the logic.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {QUESTIONS_EX2.map((q) => {
             const selected = ex2Answers[q.id];
             const isCorrect = selected === q.correctAnswer;
             const parts = q.sentence.split('___');

             return (
               <div key={q.id} className="p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
                 <p className="text-slate-800 text-lg mb-3">
                   {parts[0]}
                   <span className={`inline-block border-b-2 px-2 font-bold min-w-[80px] text-center mx-1 ${
                     selected ? (isCorrect ? 'border-green-500 text-green-600' : 'border-red-500 text-red-600') : 'border-slate-300 text-slate-400'
                   }`}>
                     {selected || '?'}
                   </span>
                   {parts[1]}
                 </p>
                 <div className="flex gap-2 justify-end">
                   {q.options.map(opt => (
                     <button
                       key={opt}
                       onClick={() => handleEx2Select(q.id, opt)}
                       className={`px-3 py-1 text-sm rounded-full border ${
                         selected === opt ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-indigo-400'
                       }`}
                     >
                       {opt}
                     </button>
                   ))}
                 </div>
               </div>
             )
          })}
        </div>
      </Card>

      {/* Exercise 3 */}
      <Card title="Exercise 3: Sentence Construction (Challenging)">
        <p className="text-slate-600 mb-4">Write a complete sentence using the words given. Use correct grammar!</p>
        <div className="space-y-6">
          {QUESTIONS_EX3.map((q) => {
             const status = ex3Feedback[q.id];
             
             return (
              <div key={q.id} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <div className="flex flex-wrap gap-2 mb-3">
                  {q.words.map((w, i) => (
                    <span key={i} className="bg-white px-2 py-1 rounded text-sm text-indigo-600 font-mono border border-indigo-100 shadow-sm">
                      {w}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Type your sentence here..."
                    className="flex-1 px-4 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={ex3Inputs[q.id] || ''}
                    onChange={(e) => setEx3Inputs(prev => ({ ...prev, [q.id]: e.target.value }))}
                  />
                  <button
                    onClick={() => checkEx3(q.id, q.correctAnswer)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
                  >
                    Check
                  </button>
                </div>

                {status === true && (
                  <div className="mt-3 text-green-600 flex items-center gap-2 text-sm font-medium">
                    <CheckCircle size={16} /> Perfect!
                  </div>
                )}
                {status === false && (
                  <div className="mt-3 text-red-500 text-sm">
                    Not quite. Remember: <em>Subject + Like/Enjoy + Adverb + Verb-ing</em>.
                    <br/>
                    <span className="text-slate-400 text-xs mt-1 block">Hint: {q.hint}</span>
                  </div>
                )}
              </div>
             )
          })}
        </div>
      </Card>
    </div>
  );
};

const SummaryContent = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <SectionTitle>Lesson Wrap-Up</SectionTitle>

    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white shadow-xl">
      <div className="flex items-center gap-4 mb-6">
        <Star className="text-yellow-300 w-12 h-12" />
        <h3 className="text-3xl font-bold">Congratulations!</h3>
      </div>
      <p className="text-indigo-100 text-lg leading-relaxed mb-6">
        In this lesson, you learned how to express audience preferences using adverbs of frequency with 
        <strong> like</strong> and <strong>enjoy</strong>. 
      </p>
      <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
        <h4 className="font-semibold text-white mb-2">Key Takeaways:</h4>
        <ul className="space-y-2 text-indigo-50">
          <li className="flex items-center gap-2">
            <CheckCircle size={16} className="text-green-300" />
            Adverbs (often, sometimes, rarely) add precision to preferences.
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle size={16} className="text-green-300" />
            Structure: Subject + Like/Enjoy + Adverb + Verb-ing.
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle size={16} className="text-green-300" />
            This structure is great for describing habits and attitudes naturally.
          </li>
        </ul>
      </div>
    </div>

    <div className="flex justify-center pt-8">
      <button 
        onClick={() => window.location.reload()}
        className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors"
      >
        <RefreshCcw size={16} />
        Restart Lesson
      </button>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs: { id: TabId; label: string; icon: any }[] = [
    { id: 'intro', label: '1. Introduction', icon: Info },
    { id: 'lesson', label: '2. Lesson', icon: BookOpen },
    { id: 'practice', label: '3. Practice', icon: PenTool },
    { id: 'summary', label: '4. Summary', icon: Star },
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 pb-12">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white p-2 rounded-lg">
              <Layout size={20} />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight text-slate-800">English Grammar</h1>
              <p className="text-xs text-slate-500 font-medium">Audience Preferences & Adverbs</p>
            </div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="font-bold text-sm">Menu</span>
          </button>
        </div>

        {/* Tab Navigation (Desktop) */}
        <div className="hidden md:block max-w-5xl mx-auto px-4">
          <div className="flex gap-1">
            {tabs.map(tab => (
              <TabButton 
                key={tab.id}
                id={tab.id} 
                active={activeTab === tab.id} 
                label={tab.label} 
                icon={tab.icon} 
                onClick={setActiveTab} 
              />
            ))}
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 py-2 space-y-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 text-sm font-medium ${
                  activeTab === tab.id 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-slate-600'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {activeTab === 'intro' && <IntroContent onNext={() => setActiveTab('lesson')} />}
        {activeTab === 'lesson' && <LessonContent />}
        {activeTab === 'practice' && <PracticeContent />}
        {activeTab === 'summary' && <SummaryContent />}
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 text-center text-slate-400 text-sm mt-12">
        <p>© 2024 English Learning Module • React & TypeScript Lesson</p>
      </footer>
    </div>
  );
}