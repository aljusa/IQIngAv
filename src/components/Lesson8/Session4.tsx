import React, { useState } from 'react';
import { 
  BookOpen, 
  Target, 
  Brain, 
  CheckCircle, 
  Flame, 
  ChevronRight, 
  MessageCircle, 
  PenTool,
  RotateCcw,
  Award
} from 'lucide-react';

// --- Types ---

type Tab = 'overview' | 'lesson' | 'practice' | 'summary';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface JumbleQuestion {
  id: number;
  words: string[];
  correctOrder: string;
}

// --- Data ---

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Identify the intensifier: 'I really love group discussions.'",
    options: ["I", "really", "love", "discussions"],
    correctAnswer: "really",
    explanation: "'Really' is the intensifier adding emphasis to the verb 'love'."
  },
  {
    id: 2,
    question: "Choose the best fit: 'She ___ can’t stand boring lectures.'",
    options: ["absolutely", "not at all", "love", "doesn't"],
    correctAnswer: "absolutely",
    explanation: "'Absolutely' fits before 'can't stand' to show strong dislike. 'Not at all' usually goes at the end."
  },
  {
    id: 3,
    question: "Which sentence expresses a negative opinion correctly?",
    options: [
      "I not at all like group work.",
      "I don't like group work at all.",
      "I don't like at all group work.",
      "I at all don't like group work."
    ],
    correctAnswer: "I don't like group work at all.",
    explanation: "When using 'not at all', it typically comes at the end of the clause."
  }
];

const jumbleQuestions: JumbleQuestion[] = [
  { id: 1, words: ["love", "absolutely", "I", "teamwork"], correctOrder: "I absolutely love teamwork" },
  { id: 2, words: ["long", "stand", "presentations", "really", "can't", "He"], correctOrder: "He really can't stand long presentations" },
];

// --- Components ---

const Header = () => (
  <header className="bg-slate-900 text-white p-6 rounded-t-xl shadow-lg">
    <div className="flex items-center gap-3 mb-2">
      <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Grammar</span>
      <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Level B1+</span>
    </div>
    <h1 className="text-3xl font-bold flex items-center gap-3">
      <Flame className="text-orange-500 w-8 h-8" />
      Audience Opinions Using Intensifiers
    </h1>
    <p className="text-slate-400 mt-2 text-lg">Expressing strong opinions and emotional emphasis.</p>
  </header>
);

const NavTabs = ({ activeTab, setTab }: { activeTab: Tab; setTab: (t: Tab) => void }) => {
  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <Target className="w-4 h-4" /> },
    { id: 'lesson', label: 'The Lesson', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'practice', label: 'Practice', icon: <PenTool className="w-4 h-4" /> },
    { id: 'summary', label: 'Wrap-Up', icon: <CheckCircle className="w-4 h-4" /> },
  ];

  return (
    <nav className="flex flex-wrap bg-white border-b border-slate-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setTab(tab.id)}
          className={`
            flex-1 py-4 px-6 text-sm font-medium flex items-center justify-center gap-2 transition-colors
            ${activeTab === tab.id 
              ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
              : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}
          `}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

// --- Tab Contents ---

const OverviewTab = () => (
  <div className="space-y-8 animate-fadeIn">
    <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <MessageCircle className="w-5 h-5 text-blue-600" /> Lesson Description
      </h3>
      <p className="text-slate-700 leading-relaxed">
        In this lesson, you will learn how to express strong audience opinions with emotional emphasis using <strong>intensifiers</strong>. These words help reinforce positive or negative feelings toward activities, experiences, or situations, especially in educational, social, and entertainment contexts.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-green-600" /> Learning Objectives
        </h3>
        <ul className="space-y-3">
          {['Recognize common intensifiers in English.', 'Understand how intensifiers strengthen opinions.', 'Interpret sentences with strong emotions.', 'Identify communicative nuance.'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-600" /> Prerequisites
        </h3>
        <p className="text-slate-600 mb-4">You should already have:</p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-slate-700 bg-slate-50 p-2 rounded">
            <CheckCircle className="w-4 h-4 text-slate-400" /> Basic knowledge of <em>love, hate, can't stand</em>
          </li>
          <li className="flex items-center gap-2 text-slate-700 bg-slate-50 p-2 rounded">
            <CheckCircle className="w-4 h-4 text-slate-400" /> Familiarity with simple present sentences
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const LessonTab = () => (
  <div className="space-y-8 animate-fadeIn">
    {/* Intro */}
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">5.1 Context Introduction</h2>
      <p className="text-slate-700 leading-relaxed">
        When people talk about activities they really enjoy or strongly dislike, they often use words that intensify their opinions. In English, <strong>intensifiers</strong> make messages clearer, more expressive, and emotionally stronger.
      </p>
    </section>

    {/* Vocabulary */}
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 p-4 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">5.2 Key Vocabulary: Intensifiers</h2>
      </div>
      <div className="p-6 grid gap-4 md:grid-cols-2">
        {[
          { word: "really", def: "Adds emphasis in a neutral, common way.", color: "bg-blue-100 text-blue-800" },
          { word: "absolutely", def: "Expresses very strong agreement or enthusiasm.", color: "bg-green-100 text-green-800" },
          { word: "totally", def: "Reinforces the idea completely.", color: "bg-purple-100 text-purple-800" },
          { word: "not at all", def: "Strongly emphasizes a negative opinion.", color: "bg-red-100 text-red-800" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col gap-2 p-4 border border-slate-100 rounded-lg hover:shadow-md transition-shadow">
            <span className={`inline-block w-fit px-3 py-1 rounded-full font-bold text-sm ${item.color}`}>{item.word}</span>
            <p className="text-slate-600 text-sm">{item.def}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Grammar */}
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">5.3 Grammatical Structure</h2>
      <div className="bg-slate-900 text-white p-6 rounded-xl font-mono text-lg text-center shadow-lg">
        <span className="text-orange-400">intensifier</span> + <span className="text-blue-300">love / hate / can’t stand</span>
      </div>
      <div className="mt-4 flex gap-4 text-sm text-slate-600 bg-yellow-50 p-4 rounded-lg border border-yellow-100">
        <Flame className="w-5 h-5 text-yellow-600 flex-shrink-0" />
        <p><strong>Note:</strong> The intensifier typically comes <em>before</em> the emotional verb. However, "not at all" is usually placed at the end of the sentence (e.g., <em>"I don't like it at all"</em>).</p>
      </div>
    </section>

    {/* Examples */}
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">5.4 Explained Examples</h2>
      <div className="grid gap-4">
        {[
          { sentence: "I absolutely love interactive activities.", meaning: "shows very strong positive emotion" },
          { sentence: "She really can’t stand boring lectures.", meaning: "intensifies the dislike" },
          { sentence: "They totally hate long presentations.", meaning: "reinforces the negative opinion" },
          { sentence: "I do not like group work at all.", meaning: "strongly emphasizes a negative feeling" },
        ].map((ex, i) => (
          <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
            <ChevronRight className="text-slate-400 w-5 h-5 flex-shrink-0" />
            <div>
              <p className="text-lg font-medium text-slate-800">{ex.sentence}</p>
              <p className="text-sm text-slate-500 italic">→ {ex.meaning}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const PracticeTab = () => {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [jumbleInput, setJumbleInput] = useState<Record<number, string[]>>({});
  const [showFeedback, setShowFeedback] = useState<Record<number, boolean>>({});

  const handleQuizSelect = (qId: number, option: string) => {
    setQuizAnswers(prev => ({ ...prev, [qId]: option }));
    setShowFeedback(prev => ({ ...prev, [qId]: true }));
  };

  const resetJumble = (qId: number, words: string[]) => {
    setJumbleInput(prev => ({ ...prev, [qId]: [] }));
  };

  const addToJumble = (qId: number, word: string) => {
    setJumbleInput(prev => ({
      ...prev,
      [qId]: [...(prev[qId] || []), word]
    }));
  };

  const checkJumble = (qId: number, correct: string) => {
    // Just a visual trigger, logic handled in render
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* Quiz Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Target className="text-blue-600" /> Exercise 1 & 2: Identification
        </h2>
        <div className="space-y-6">
          {quizQuestions.map((q) => {
            const isAnswered = !!quizAnswers[q.id];
            const isCorrect = quizAnswers[q.id] === q.correctAnswer;

            return (
              <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-semibold text-lg text-slate-800 mb-4">{q.question}</h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleQuizSelect(q.id, opt)}
                      disabled={isAnswered}
                      className={`
                        p-3 rounded-lg text-left transition-all border
                        ${!isAnswered ? 'hover:bg-blue-50 border-slate-200 hover:border-blue-300' : ''}
                        ${isAnswered && opt === q.correctAnswer ? 'bg-green-100 border-green-500 text-green-900' : ''}
                        ${isAnswered && opt === quizAnswers[q.id] && opt !== q.correctAnswer ? 'bg-red-100 border-red-500 text-red-900' : ''}
                        ${isAnswered && opt !== q.correctAnswer && opt !== quizAnswers[q.id] ? 'opacity-50' : ''}
                      `}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {isAnswered && (
                  <div className={`p-3 rounded text-sm ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    <strong>{isCorrect ? 'Correct!' : 'Incorrect.'}</strong> {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Jumble Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <PenTool className="text-purple-600" /> Exercise 3: Sentence Building
        </h2>
        <div className="space-y-6">
          <p className="text-slate-600">Click the words in the correct order to form the sentence.</p>
          {jumbleQuestions.map((q) => {
            const currentSentence = jumbleInput[q.id] || [];
            const remainingWords = q.words.filter(w => 
              // Simple filter logic to handle duplicate words if any (none in this dataset)
              !currentSentence.includes(w) 
            );
            const isComplete = currentSentence.length === q.words.length;
            const userString = currentSentence.join(' ');
            const isCorrect = userString === q.correctOrder;

            return (
              <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                
                {/* Visual Sentence Builder */}
                <div className="bg-slate-50 p-4 rounded-lg min-h-[60px] flex flex-wrap gap-2 items-center mb-4 border border-slate-200">
                   {currentSentence.length === 0 && <span className="text-slate-400 italic">Construct sentence here...</span>}
                   {currentSentence.map((word, idx) => (
                     <span key={idx} className="bg-white px-3 py-1 rounded shadow-sm border border-slate-300 font-medium animate-popIn">
                       {word}
                     </span>
                   ))}
                </div>

                {/* Feedback */}
                {isComplete && (
                   <div className={`mb-4 p-2 rounded text-center font-bold ${isCorrect ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                     {isCorrect ? 'Perfect!' : 'Try again.'}
                   </div>
                )}

                {/* Word Bank */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {remainingWords.map((word, idx) => (
                    <button
                      key={idx}
                      onClick={() => addToJumble(q.id, word)}
                      className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium transition-colors"
                    >
                      {word}
                    </button>
                  ))}
                </div>

                <div className="flex justify-end">
                  <button 
                    onClick={() => resetJumble(q.id, q.words)}
                    className="text-sm text-slate-500 hover:text-red-500 flex items-center gap-1"
                  >
                    <RotateCcw className="w-4 h-4" /> Reset
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

const SummaryTab = () => (
  <div className="max-w-2xl mx-auto text-center space-y-8 py-8 animate-fadeIn">
    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
      <Award className="w-10 h-10" />
    </div>
    
    <h2 className="text-3xl font-bold text-slate-800">Lesson Complete!</h2>
    
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-left">
      <p className="text-slate-700 leading-relaxed mb-6">
        In this lesson, you learned how to use intensifiers to express strong audience opinions in English. By combining words like <strong>really</strong>, <strong>absolutely</strong>, <strong>totally</strong>, and <strong>not at all</strong> with emotional verbs, you can communicate with greater clarity and impact.
      </p>
      
      <h3 className="font-bold text-slate-800 mb-3">Key Takeaways:</h3>
      <ul className="space-y-2 text-slate-600">
        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Intensifiers precede the verb (usually).</li>
        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> "Not at all" typically goes at the end.</li>
        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> These structures make your speech sound more authentic.</li>
      </ul>
    </div>

    <button 
      onClick={() => window.location.reload()}
      className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg"
    >
      Restart Lesson
    </button>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  return (
    <div className="min-h-screen bg-slate-100 font-sans p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden min-h-[600px] flex flex-col">
        <Header />
        <NavTabs activeTab={activeTab} setTab={setActiveTab} />
        
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'lesson' && <LessonTab />}
          {activeTab === 'practice' && <PracticeTab />}
          {activeTab === 'summary' && <SummaryTab />}
        </main>
      </div>
      
      {/* Footer Info */}
      <div className="text-center mt-8 text-slate-400 text-sm">
        <p>Interactive English Lesson • React + TypeScript</p>
      </div>
      
      {/* Global Styles for Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-popIn {
          animation: popIn 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </div>
  );
}