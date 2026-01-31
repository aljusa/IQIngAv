import React, { useState } from 'react';
import { 
  BookOpen, 
  Target, 
  List, 
  CheckCircle, 
  HelpCircle, 
  Droplets, 
  Anchor, 
  ChevronRight, 
  AlertCircle,
  Brain,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

// --- Types ---

type TabID = 'overview' | 'lesson' | 'practice' | 'wrapup';

interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface QuestionMC {
  id: number;
  question: string;
  options: QuizOption[];
}

interface QuestionFill {
  id: number;
  sentence: string;
  correctAnswers: string[]; // Array to allow variations if needed, though strictly one usually
  hint?: string;
}

interface RewriteQuestion {
  id: number;
  original: string;
  answer: string;
}

// --- Data ---

const mcQuestions: QuestionMC[] = [
  {
    id: 1,
    question: "___ this water cold?",
    options: [
      { id: 'a', text: "Isn't", isCorrect: true },
      { id: 'b', text: "Don't", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "___ you excited about the beach trip?",
    options: [
      { id: 'a', text: "Aren't", isCorrect: true },
      { id: 'b', text: "Doesn't", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "___ she like swimming in the sea?",
    options: [
      { id: 'a', text: "Doesn't", isCorrect: true },
      { id: 'b', text: "Isn't", isCorrect: false }
    ]
  }
];

const fillQuestions: QuestionFill[] = [
  { id: 1, sentence: "______ this pool too cold for children?", correctAnswers: ["isn't", "is not"], hint: "Verb to be / singular" },
  { id: 2, sentence: "______ you happy at the beach?", correctAnswers: ["aren't", "are not"], hint: "Verb to be / you" },
  { id: 3, sentence: "______ he enjoy swimming in the ocean?", correctAnswers: ["doesn't", "does not"], hint: "Auxiliary / action verb" },
  { id: 4, sentence: "______ they excited about the water park?", correctAnswers: ["aren't", "are not"], hint: "Verb to be / plural" },
];

const rewriteQuestions: RewriteQuestion[] = [
  { id: 1, original: "This water is very cold.", answer: "Isn't this water very cold?" },
  { id: 2, original: "You are excited about the trip.", answer: "Aren't you excited about the trip?" },
  { id: 3, original: "She likes swimming here.", answer: "Doesn't she like swimming here?" },
];

// --- Components ---

const TabButton = ({ 
  id, 
  label, 
  icon: Icon, 
  activeTab, 
  onClick 
}: { 
  id: TabID; 
  label: string; 
  icon: any; 
  activeTab: TabID; 
  onClick: (id: TabID) => void; 
}) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
      activeTab === id
        ? 'border-cyan-600 text-cyan-700 bg-cyan-50'
        : 'border-transparent text-slate-500 hover:text-cyan-600 hover:bg-slate-50'
    }`}
  >
    <Icon size={18} />
    <span className="hidden sm:inline">{label}</span>
  </button>
);

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-8 border-b border-slate-200 pb-4">
    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
      <Droplets className="text-cyan-500" />
      {title}
    </h2>
    {subtitle && <p className="mt-2 text-slate-600 text-lg">{subtitle}</p>}
  </div>
);

// --- Content Sections ---

const OverviewSection = ({ onNext }: { onNext: () => void }) => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <SectionHeader 
      title="Lesson Description" 
      subtitle="Opinions and Expectations in Aquatic Contexts" 
    />
    
    <div className="prose prose-slate max-w-none text-slate-700 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      <p className="text-lg leading-relaxed">
        This lesson focuses on using <strong>negative questions</strong> in English to express surprise or confirm prior beliefs about emotions and expectations. Through familiar situations—such as feeling cold water or anticipating an aquatic trip—you will learn how these questions communicate the speaker’s attitude, emotion, and point of view.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-cyan-500">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Target className="text-cyan-600" /> Learning Objectives
        </h3>
        <ul className="space-y-3">
          {[
            "Recognize negative questions used to express surprise.",
            "Distinguish between 'be' (isn’t/aren’t) and auxiliaries (don’t/doesn’t).",
            "Understand implicit meaning in emotional contexts.",
            "Interpret personal reactions and opinions."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-slate-700">
              <CheckCircle size={18} className="text-green-500 mt-1 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
            <Brain className="text-purple-500" /> Prerequisites
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Verb to be (present)', 'Simple present (do/does)', 'Adjectives (cold, excited)'].map((tag, i) => (
              <span key={i} className="bg-white px-3 py-1 rounded-full text-sm font-medium text-slate-600 border border-slate-200">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
          <h3 className="text-lg font-bold text-orange-800 mb-2 flex items-center gap-2">
            <List className="text-orange-600" /> Associated Skills
          </h3>
          <p className="text-orange-900/80 text-sm">
            Pragmatic understanding of English, interpreting attitudes through grammar, and communicative value recognition.
          </p>
        </div>
      </div>
    </div>

    <div className="flex justify-end pt-4">
      <button 
        onClick={onNext}
        className="group bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
      >
        Start Lesson <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const LessonSection = () => (
  <div className="space-y-10 animate-in fade-in duration-500">
    <SectionHeader title="Grammar & Context" />

    {/* Context */}
    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <MessageCircle /> Why Use Negative Questions?
      </h3>
      <p className="text-cyan-50 text-lg leading-relaxed mb-4">
        They are not neutral questions. We use them when we:
      </p>
      <ul className="grid sm:grid-cols-3 gap-4">
        {[
          "Have a prior belief",
          "Expect agreement",
          "Express surprise or doubt"
        ].map((item, i) => (
          <li key={i} className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20 text-center font-medium">
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Structures Grid */}
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Verb To Be */}
      <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-indigo-50 p-4 border-b border-indigo-100">
          <h4 className="font-bold text-indigo-900 text-lg">A) With Verb To Be</h4>
          <p className="text-indigo-700/80 text-sm">Focus: States, feelings, opinions</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-slate-100 p-3 rounded-lg font-mono text-slate-700 text-sm text-center border border-slate-200">
            <span className="text-indigo-600 font-bold">Isn't / Aren't</span> + subject + complement?
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <span className="bg-indigo-100 text-indigo-700 p-2 rounded text-xs font-bold mt-1">Ex</span>
              <div>
                <p className="font-medium text-slate-800">"Isn't this water cold?"</p>
                <p className="text-sm text-slate-500">The adjective (cold) expresses the feeling.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="bg-indigo-100 text-indigo-700 p-2 rounded text-xs font-bold mt-1">Ex</span>
              <div>
                <p className="font-medium text-slate-800">"Aren't you excited about the trip?"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Auxiliaries */}
      <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-emerald-50 p-4 border-b border-emerald-100">
          <h4 className="font-bold text-emerald-900 text-lg">B) With Auxiliaries (Do/Does)</h4>
          <p className="text-emerald-700/80 text-sm">Focus: Actions, attitudes, preferences</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-slate-100 p-3 rounded-lg font-mono text-slate-700 text-sm text-center border border-slate-200">
            <span className="text-emerald-600 font-bold">Don't / Doesn't</span> + subject + base verb?
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <span className="bg-emerald-100 text-emerald-700 p-2 rounded text-xs font-bold mt-1">Ex</span>
              <div>
                <p className="font-medium text-slate-800">"Don't you like swimming here?"</p>
                <p className="text-sm text-slate-500">Asking about the action of liking/swimming.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="bg-emerald-100 text-emerald-700 p-2 rounded text-xs font-bold mt-1">Ex</span>
              <div>
                <p className="font-medium text-slate-800">"Doesn't she seem nervous?"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PracticeSection = () => {
  // State for Ex 1
  const [mcAnswers, setMcAnswers] = useState<Record<number, string>>({});
  
  // State for Ex 2
  const [fillAnswers, setFillAnswers] = useState<Record<number, string>>({});
  const [fillFeedback, setFillFeedback] = useState<Record<number, boolean>>({});

  // State for Ex 3
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const handleMcSelect = (qId: number, optionId: string) => {
    setMcAnswers(prev => ({ ...prev, [qId]: optionId }));
  };

  const handleFillCheck = (qId: number, correct: string[]) => {
    const userAnswer = fillAnswers[qId]?.toLowerCase().trim();
    const isCorrect = correct.includes(userAnswer);
    setFillFeedback(prev => ({ ...prev, [qId]: isCorrect }));
  };

  const toggleReveal = (id: number) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      <SectionHeader title="Practice Exercises" subtitle="Test your knowledge in aquatic contexts." />

      {/* Exercise 1 */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Exercise 1: Identify the Structure</h3>
          <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">Easy</span>
        </div>
        <div className="p-6 grid gap-6">
          {mcQuestions.map((q) => {
            const selected = mcAnswers[q.id];
            const isCorrect = q.options.find(opt => opt.id === selected)?.isCorrect;
            
            return (
              <div key={q.id} className="space-y-3">
                <p className="font-medium text-lg text-slate-700">{q.question}</p>
                <div className="flex gap-3">
                  {q.options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleMcSelect(q.id, opt.id)}
                      className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-all ${
                        selected === opt.id
                          ? opt.isCorrect 
                            ? 'bg-green-600 text-white border-green-600'
                            : 'bg-red-500 text-white border-red-500'
                          : 'bg-white border-slate-300 text-slate-600 hover:border-cyan-400'
                      }`}
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
                {selected && (
                  <div className={`text-sm flex items-center gap-2 ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
                    {isCorrect ? <CheckCircle size={16}/> : <AlertCircle size={16}/>}
                    {isCorrect ? "Correct!" : "Try again."}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Exercise 2: Complete the Questions</h3>
          <span className="text-xs font-semibold bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Medium</span>
        </div>
        <div className="p-6 grid gap-6">
          {fillQuestions.map((q) => (
            <div key={q.id} className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex-1">
                <div className="flex items-center flex-wrap gap-2 text-lg text-slate-700">
                  <input
                    type="text"
                    placeholder="..."
                    className={`border-b-2 bg-slate-50 px-2 py-1 w-24 text-center focus:outline-none transition-colors ${
                      fillFeedback[q.id] === true ? 'border-green-500 text-green-700' : 
                      fillFeedback[q.id] === false ? 'border-red-500 text-red-700' : 'border-slate-300 focus:border-cyan-500'
                    }`}
                    value={fillAnswers[q.id] || ''}
                    onChange={(e) => setFillAnswers(prev => ({...prev, [q.id]: e.target.value}))}
                  />
                  <span>{q.sentence.replace('______', '')}</span>
                </div>
              </div>
              <button
                onClick={() => handleFillCheck(q.id, q.correctAnswers)}
                className="text-sm bg-slate-800 text-white px-3 py-1.5 rounded hover:bg-slate-700 transition-colors"
              >
                Check
              </button>
            </div>
          ))}
          <p className="text-xs text-slate-400 mt-2">* Acceptable answers: isn't, aren't, don't, doesn't</p>
        </div>
      </div>

      {/* Exercise 3 */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Exercise 3: Express the Opinion</h3>
          <span className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-1 rounded">Hard</span>
        </div>
        <div className="p-6 grid gap-4">
          <p className="text-slate-600 mb-2">Rewrite the sentence as a negative question. Mentally draft it, then reveal the answer.</p>
          {rewriteQuestions.map((q) => (
            <div key={q.id} className="border border-slate-100 rounded-lg p-4 bg-slate-50/50">
              <p className="font-medium text-slate-800 mb-3">{q.original}</p>
              
              <div className="relative">
                {revealed[q.id] ? (
                   <div className="p-3 bg-green-50 border border-green-100 text-green-800 rounded-lg animate-in fade-in slide-in-from-top-2">
                     <span className="font-bold mr-2">Answer:</span> {q.answer}
                   </div>
                ) : (
                  <button 
                    onClick={() => toggleReveal(q.id)}
                    className="w-full text-left p-3 border-2 border-dashed border-slate-300 rounded-lg text-slate-400 hover:border-cyan-400 hover:text-cyan-600 transition-all flex items-center justify-center gap-2"
                  >
                    <HelpCircle size={18} /> Reveal Answer
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WrapUpSection = () => (
  <div className="max-w-2xl mx-auto text-center space-y-8 animate-in zoom-in-95 duration-500 py-12">
    <div className="bg-cyan-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
      <Anchor size={48} className="text-cyan-600" />
    </div>
    
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-slate-800">Excellent Work!</h2>
      <p className="text-slate-600 text-lg leading-relaxed">
        You've navigated through the emotions and expectations of aquatic contexts using negative questions. 
        You can now naturally express surprise ("Isn't this water cold?") and confirm beliefs ("Don't you love the ocean?").
      </p>
    </div>

    <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
      <h3 className="font-bold text-slate-800 mb-2">Key Takeaway</h3>
      <p className="text-slate-600">
        Remember: The focus is not just on information, but on your <strong>attitude</strong> as the speaker.
      </p>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabID>('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewSection onNext={() => setActiveTab('lesson')} />;
      case 'lesson': return <LessonSection />;
      case 'practice': return <PracticeSection />;
      case 'wrapup': return <WrapUpSection />;
      default: return <OverviewSection onNext={() => setActiveTab('lesson')} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-cyan-200">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 font-bold text-xl text-cyan-700">
              <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center text-white">
                <Droplets size={20} />
              </div>
              AquaGrammar
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex gap-1 overflow-x-auto no-scrollbar">
            <TabButton 
              id="overview" 
              label="Overview" 
              icon={BookOpen} 
              activeTab={activeTab} 
              onClick={setActiveTab} 
            />
            <TabButton 
              id="lesson" 
              label="The Lesson" 
              icon={List} 
              activeTab={activeTab} 
              onClick={setActiveTab} 
            />
            <TabButton 
              id="practice" 
              label="Practice" 
              icon={Target} 
              activeTab={activeTab} 
              onClick={setActiveTab} 
            />
            <TabButton 
              id="wrapup" 
              label="Wrap Up" 
              icon={CheckCircle} 
              activeTab={activeTab} 
              onClick={setActiveTab} 
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {renderContent()}
      </main>

      {/* Footer Navigation Hints */}
      <footer className="max-w-4xl mx-auto px-4 py-6 border-t border-slate-200 text-center text-slate-400 text-sm mb-8">
        <p>© 2024 English Learning Series • Aquatic Contexts Module</p>
      </footer>
    </div>
  );
}