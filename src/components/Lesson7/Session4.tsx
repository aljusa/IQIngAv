import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Music, 
  Landmark, 
  Heart, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  Menu,
  MessageCircle,
  Lightbulb,
  Award
} from 'lucide-react';

// --- Types & Interfaces ---

type TabId = 'overview' | 'lesson' | 'practice' | 'summary';

interface VocabCardProps {
  word: string;
  definition: string;
  icon: React.ReactNode;
}

interface QuizOption {
  id: string;
  text: string;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  correctId: string;
}

// --- Data ---

const VOCABULARY = [
  { word: "Book Club", def: "A group that meets to discuss books.", icon: <BookOpen className="w-6 h-6 text-blue-500" /> },
  { word: "Volunteering", def: "Helping others without pay.", icon: <Heart className="w-6 h-6 text-red-500" /> },
  { word: "Museums", def: "Places to see art, history, or science.", icon: <Landmark className="w-6 h-6 text-amber-600" /> },
  { word: "Concerts", def: "Live music events.", icon: <Music className="w-6 h-6 text-purple-500" /> },
  { word: "Community Events", def: "Local social or cultural activities.", icon: <Users className="w-6 h-6 text-green-500" /> },
];

const EXERCISE_1_DATA: QuizQuestion[] = [
  {
    id: 1,
    question: "Which activity involves helping the community without payment?",
    options: [
      { id: 'a', text: "Concerts" },
      { id: 'b', text: "Volunteering" },
      { id: 'c', text: "Book Club" }
    ],
    correctId: 'b'
  },
  {
    id: 2,
    question: "Where would you go to see art, history, or science?",
    options: [
      { id: 'a', text: "Museums" },
      { id: 'b', text: "Community Events" },
      { id: 'c', text: "Concerts" }
    ],
    correctId: 'a'
  },
  {
    id: 3,
    question: "What is a group that meets to discuss reading material?",
    options: [
      { id: 'a', text: "Volunteering" },
      { id: 'b', text: "Book Club" },
      { id: 'c', text: "Cinema" }
    ],
    correctId: 'b'
  }
];

// --- Components ---

const VocabCard: React.FC<VocabCardProps> = ({ word, definition, icon }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex items-start gap-4">
    <div className="p-3 bg-slate-50 rounded-full shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-lg text-slate-800">{word}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{definition}</p>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  // Exercise State
  const [ex1Answers, setEx1Answers] = useState<Record<number, string>>({});
  const [ex2Answers, setEx2Answers] = useState<Record<number, string>>({});
  const [showEx3Tips, setShowEx3Tips] = useState<boolean>(false);

  // Navigation Helper
  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Views ---

  const renderOverview = () => (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 space-y-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">English Lesson</span>
            <h2 className="text-3xl md:text-4xl font-bold">Social and Cultural Interests</h2>
            <p className="text-indigo-100 text-lg">Making Polite Suggestions in English</p>
          </div>
          <div className="bg-white/10 p-4 rounded-full">
            <MessageCircle size={64} className="text-white" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Objectives */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-4">
            <CheckCircle className="text-green-500" /> Learning Objectives
          </h3>
          <ul className="space-y-3 text-slate-600">
            <li className="flex gap-2">
              <span className="text-indigo-500">•</span>
              Recognize vocabulary related to social and cultural activities.
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-500">•</span>
              Understand how <em>shall we</em> and <em>would you like to</em> are used.
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-500">•</span>
              Identify levels of politeness when making proposals.
            </li>
          </ul>
        </div>

        {/* Prerequisites */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-4">
            <Lightbulb className="text-amber-500" /> Prerequisites
          </h3>
          <p className="text-slate-600 mb-4">You should already have:</p>
          <ul className="space-y-3 text-slate-600">
            <li className="flex gap-2">
              <span className="text-amber-500">✓</span>
              Basic knowledge of verbs in base form.
            </li>
            <li className="flex gap-2">
              <span className="text-amber-500">✓</span>
              Elementary familiarity with question structures.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <button 
          onClick={() => handleTabChange('lesson')}
          className="group bg-slate-900 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-slate-700 transition-colors"
        >
          Start Lesson <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  const renderLesson = () => (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Context */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
        <h3 className="text-xl font-bold text-blue-900 mb-2">Context Introduction</h3>
        <p className="text-slate-700 leading-relaxed">
          Social and cultural activities help people connect. When suggesting these activities, 
          speakers often choose more polite structures because they involve personal invitations.
        </p>
      </section>

      {/* Vocabulary */}
      <section>
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <BookOpen className="text-indigo-600" /> Key Vocabulary
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {VOCABULARY.map((item, idx) => (
            <VocabCard key={idx} {...item} />
          ))}
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Grammar Section */}
      <section>
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Lightbulb className="text-amber-500" /> Grammar Structures
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Shall We */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
            <div className="bg-indigo-600 p-4 text-white">
              <h4 className="font-bold text-lg">Form 1: Shall we...?</h4>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-slate-600 text-sm">
                Direct but polite suggestion. Usually includes the speaker in the activity.
              </p>
              <div className="bg-slate-100 p-3 rounded-lg font-mono text-center text-indigo-700 font-bold">
                Shall we + base verb?
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-sm text-slate-500 uppercase">Examples:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li><span className="font-medium text-indigo-600">Shall we</span> visit the museum?</li>
                  <li><span className="font-medium text-indigo-600">Shall we</span> go to a concert?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Would you like to */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
            <div className="bg-emerald-600 p-4 text-white">
              <h4 className="font-bold text-lg">Form 2: Would you like to...?</h4>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-slate-600 text-sm">
                Very polite and respectful invitation. Focuses on the other person's preference.
              </p>
              <div className="bg-slate-100 p-3 rounded-lg font-mono text-center text-emerald-700 font-bold">
                Would you like to + base verb?
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-sm text-slate-500 uppercase">Examples:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li><span className="font-medium text-emerald-600">Would you like to</span> join a book club?</li>
                  <li><span className="font-medium text-emerald-600">Would you like to</span> try volunteering?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-end pt-4">
        <button 
          onClick={() => handleTabChange('practice')}
          className="group bg-slate-900 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-slate-700 transition-colors"
        >
          Go to Practice <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  const renderPractice = () => {
    const checkEx2 = (qId: number, answer: string) => {
      setEx2Answers(prev => ({...prev, [qId]: answer}));
    };

    return (
      <div className="space-y-12 animate-fadeIn max-w-3xl mx-auto">
        
        {/* Exercise 1 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-slate-800">Exercise 1: Vocabulary</h3>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">EASY</span>
          </div>
          
          <div className="space-y-6">
            {EXERCISE_1_DATA.map((q) => (
              <div key={q.id} className="space-y-3">
                <p className="font-medium text-slate-700">{q.id}. {q.question}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {q.options.map((opt) => {
                    const isSelected = ex1Answers[q.id] === opt.id;
                    const isCorrect = q.correctId === opt.id;
                    let btnClass = "py-2 px-4 rounded-lg border text-sm transition-all text-left ";
                    
                    if (isSelected) {
                      if (isCorrect) btnClass += "bg-green-50 border-green-500 text-green-700 font-medium";
                      else btnClass += "bg-red-50 border-red-500 text-red-700";
                    } else {
                      btnClass += "bg-white border-slate-200 hover:border-indigo-300 text-slate-600";
                    }

                    return (
                      <button 
                        key={opt.id}
                        onClick={() => setEx1Answers(prev => ({...prev, [q.id]: opt.id}))}
                        className={btnClass}
                      >
                         {isSelected && isCorrect && <CheckCircle className="inline w-4 h-4 mr-1"/>}
                         {isSelected && !isCorrect && <XCircle className="inline w-4 h-4 mr-1"/>}
                         {opt.text}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exercise 2 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-slate-800">Exercise 2: Structure</h3>
            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">MEDIUM</span>
          </div>
          <p className="text-slate-600 mb-6">Choose the structure that fits best politely (context implies correctness).</p>

          <div className="space-y-6">
            {[
              { id: 1, text: "visit the museum this afternoon?", correct: "Shall we" },
              { id: 2, text: "join a book club in the neighborhood?", correct: "Would you like to" },
              { id: 3, text: "attend a community event together?", correct: "Shall we" },
              { id: 4, text: "go to a concert this month?", correct: "Shall we" }
            ].map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="flex gap-2">
                  <button 
                    onClick={() => checkEx2(item.id, "Shall we")}
                    className={`px-3 py-1.5 rounded text-sm font-medium border ${ex2Answers[item.id] === "Shall we" ? (item.correct === "Shall we" ? "bg-green-600 text-white border-green-600" : "bg-red-500 text-white border-red-500") : "bg-white text-slate-600 border-slate-300 hover:bg-slate-100"}`}
                  >
                    Shall we
                  </button>
                  <button 
                    onClick={() => checkEx2(item.id, "Would you like to")}
                    className={`px-3 py-1.5 rounded text-sm font-medium border ${ex2Answers[item.id] === "Would you like to" ? (item.correct === "Would you like to" ? "bg-green-600 text-white border-green-600" : "bg-red-500 text-white border-red-500") : "bg-white text-slate-600 border-slate-300 hover:bg-slate-100"}`}
                  >
                    Would you like to
                  </button>
                </div>
                <div className="flex-1 text-slate-700 font-medium">
                   ___ {item.text}
                </div>
                {ex2Answers[item.id] && (
                  <div className="text-sm">
                    {ex2Answers[item.id] === item.correct ? (
                      <span className="text-green-600 font-bold flex items-center gap-1"><CheckCircle size={16}/> Correct</span>
                    ) : (
                      <span className="text-red-500 font-bold flex items-center gap-1"><XCircle size={16}/> Try again</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Exercise 3 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-slate-800">Exercise 3: Make a Suggestion</h3>
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">CHALLENGING</span>
          </div>
          
          <div className="space-y-4 mb-6">
            <p className="text-slate-600">Form a complete sentence using the prompts. Try writing it down mentally or on paper first!</p>
            <div className="grid gap-4">
              <div className="p-4 bg-slate-50 border-l-4 border-indigo-500 rounded-r-lg">
                <p className="text-sm text-slate-500 font-mono mb-1">Prompt 1: (volunteering / community)</p>
                {showEx3Tips && <p className="text-indigo-700 font-medium animate-fadeIn">Suggestion: Would you like to try volunteering in the community?</p>}
              </div>
              <div className="p-4 bg-slate-50 border-l-4 border-indigo-500 rounded-r-lg">
                <p className="text-sm text-slate-500 font-mono mb-1">Prompt 2: (visit / museums)</p>
                {showEx3Tips && <p className="text-indigo-700 font-medium animate-fadeIn">Suggestion: Shall we visit museums this weekend?</p>}
              </div>
              <div className="p-4 bg-slate-50 border-l-4 border-indigo-500 rounded-r-lg">
                <p className="text-sm text-slate-500 font-mono mb-1">Prompt 3: (attend / concert)</p>
                {showEx3Tips && <p className="text-indigo-700 font-medium animate-fadeIn">Suggestion: Shall we attend a concert?</p>}
              </div>
            </div>
          </div>

          <button 
            onClick={() => setShowEx3Tips(!showEx3Tips)}
            className="w-full py-3 bg-indigo-50 text-indigo-700 font-medium rounded-lg hover:bg-indigo-100 transition-colors flex items-center justify-center gap-2"
          >
            {showEx3Tips ? "Hide Suggested Answers" : "Reveal Suggested Answers"}
          </button>
        </div>

        <div className="flex justify-center pt-4">
          <button 
            onClick={() => handleTabChange('summary')}
            className="group bg-slate-900 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-slate-700 transition-colors"
          >
            Finish Lesson <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    );
  };

  const renderSummary = () => (
    <div className="animate-fadeIn max-w-2xl mx-auto text-center space-y-8 py-10">
      <div className="inline-block p-6 bg-green-50 rounded-full mb-4">
        <Award size={64} className="text-green-500" />
      </div>
      
      <h2 className="text-3xl font-bold text-slate-800">Lesson Complete!</h2>
      
      <p className="text-slate-600 text-lg leading-relaxed">
        In this lesson, you learned how to suggest social and cultural interests in English using 
        <span className="font-bold text-indigo-600 mx-1">shall we</span> 
        and 
        <span className="font-bold text-emerald-600 mx-1">would you like to</span>.
        Together with vocabulary related to community and culture, these structures help you make 
        polite, respectful, and clear invitations.
      </p>

      <div className="grid grid-cols-2 gap-4 text-left max-w-md mx-auto bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div>
          <h4 className="font-bold text-slate-400 text-xs uppercase mb-2">Key Structure</h4>
          <p className="font-medium text-slate-800">Shall we + verb?</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-400 text-xs uppercase mb-2">Key Structure</h4>
          <p className="font-medium text-slate-800">Would you like to + verb?</p>
        </div>
      </div>

      <button 
        onClick={() => {
            setActiveTab('overview');
            setEx1Answers({});
            setEx2Answers({});
            setShowEx3Tips(false);
        }}
        className="mt-8 px-6 py-2 text-indigo-600 font-medium hover:bg-indigo-50 rounded-lg transition-colors"
      >
        Restart Lesson
      </button>
    </div>
  );

  // --- Layout Render ---

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Navbar */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-indigo-600">
            <BookOpen className="fill-current" />
            <span>EngLearn</span>
          </div>
          
          {/* Mobile Menu Icon (Placeholder for responsiveness) */}
          <div className="md:hidden">
            <Menu className="text-slate-600" />
          </div>

          {/* Desktop Tabs */}
          <nav className="hidden md:flex gap-1">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'lesson', label: 'Lesson' },
              { id: 'practice', label: 'Practice' },
              { id: 'summary', label: 'Wrap-up' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as TabId)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Tabs Scrollable */}
        <div className="md:hidden overflow-x-auto pb-2 px-4 flex gap-2 hide-scrollbar">
           {[
              { id: 'overview', label: 'Overview' },
              { id: 'lesson', label: 'Lesson' },
              { id: 'practice', label: 'Practice' },
              { id: 'summary', label: 'Wrap-up' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as TabId)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-white text-slate-500 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12 min-h-[calc(100vh-64px)]">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'lesson' && renderLesson()}
        {activeTab === 'practice' && renderPractice()}
        {activeTab === 'summary' && renderSummary()}
      </main>

    </div>
  );
}