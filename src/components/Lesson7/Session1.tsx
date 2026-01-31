import React, { useState } from 'react';
import { 
  Palette, 
  Camera, 
  PenTool, 
  Scissors, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Lightbulb,
  MessageCircle,
  Trophy
} from 'lucide-react';

// --- Types ---
type TabType = 'overview' | 'vocabulary' | 'grammar' | 'practice' | 'wrapup';

interface VocabularyItem {
  word: string;
  definition: string;
  icon: React.ReactNode;
}

interface ExerciseState {
  ex1: Record<string, string>;
  ex2: string[];
  ex3: string[];
  feedback: Record<string, boolean | null>;
}

// --- Constants ---
const VOCABULARY: VocabularyItem[] = [
  { word: 'Drawing', definition: 'Making pictures with pencils or pens', icon: <PenTool className="w-6 h-6" /> },
  { word: 'Painting', definition: 'Creating art with paint', icon: <Palette className="w-6 h-6" /> },
  { word: 'Crafts', definition: 'Making things by hand', icon: <Scissors className="w-6 h-6" /> },
  { word: 'Photography', definition: 'Taking artistic photos', icon: <Camera className="w-6 h-6" /> },
  { word: 'Writing', definition: 'Creating texts or stories', icon: <BookOpen className="w-6 h-6" /> },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [practiceState, setPracticeState] = useState<ExerciseState>({
    ex1: {},
    ex2: ['', '', '', ''],
    ex3: ['', '', ''],
    feedback: {}
  });

  const checkEx2 = (index: number, answer: string, correct: string) => {
    const newEx2 = [...practiceState.ex2];
    newEx2[index] = answer;
    
    setPracticeState(prev => ({
      ...prev,
      ex2: newEx2,
      feedback: { ...prev.feedback, [`ex2-${index}`]: answer.toLowerCase() === correct.toLowerCase() }
    }));
  };

  const renderTabButton = (id: TabType, label: string, Icon: any) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
        activeTab === id 
          ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50' 
          : 'border-transparent text-gray-500 hover:text-indigo-500 hover:bg-gray-50'
      }`}
    >
      <Icon size={18} />
      <span className="hidden md:inline">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <Palette size={24} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
              Creative Hobbies
            </h1>
          </div>
          <p className="text-slate-500 font-medium">Making Suggestions in English</p>
        </div>

        {/* Navigation Tabs */}
        <nav className="max-w-5xl mx-auto px-4 flex overflow-x-auto no-scrollbar">
          {renderTabButton('overview', 'Overview', Target)}
          {renderTabButton('vocabulary', 'Vocabulary', Palette)}
          {renderTabButton('grammar', 'Grammar', MessageCircle)}
          {renderTabButton('practice', 'Practice', PenTool)}
          {renderTabButton('wrapup', 'Wrap-Up', Trophy)}
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 min-h-[60vh] p-6 md:p-10">
          
          {/* 1. Overview Section */}
          {activeTab === 'overview' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="text-amber-500" /> Lesson Description
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  In this lesson, you will learn how to suggest creative hobbies in English in a natural and friendly way. 
                  Using vocabulary related to artistic and expressive activities, you will understand how to use two 
                  very common structures to propose plans and shared activities in everyday situations.
                </p>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                  <h3 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                    <Target size={20} /> Learning Objectives
                  </h3>
                  <ul className="space-y-2 text-indigo-800">
                    <li className="flex gap-2">
                      <CheckCircle2 size={18} className="shrink-0 mt-1" />
                      Recognize basic vocabulary related to creative hobbies.
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 size={18} className="shrink-0 mt-1" />
                      Understand how <code className="bg-white px-1 rounded">let’s</code> and <code className="bg-white px-1 rounded">why don’t we</code> are used.
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 size={18} className="shrink-0 mt-1" />
                      Interpret suggestions expressed in informal situations.
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 size={20} /> Prerequisites
                  </h3>
                  <ul className="space-y-2 text-emerald-800">
                    <li className="flex gap-2">
                      <ArrowRight size={18} className="shrink-0 mt-1" />
                      Basic knowledge of verbs in base form.
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight size={18} className="shrink-0 mt-1" />
                      Elementary understanding of simple present sentences.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 2. Vocabulary Section */}
          {activeTab === 'vocabulary' && (
            <div className="animate-in fade-in duration-500">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Key Vocabulary</h2>
                <p className="text-slate-500">Creative hobbies allow people to express ideas, emotions, and personal talents.</p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {VOCABULARY.map((item) => (
                  <div key={item.word} className="group p-6 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all bg-white">
                    <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{item.word}</h3>
                    <p className="text-slate-600 text-sm">{item.definition}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                <p className="text-amber-800 italic">
                  "These words are often used with verbs like <strong>do</strong>, <strong>try</strong>, or <strong>enjoy</strong>."
                </p>
              </div>
            </div>
          )}

          {/* 3. Grammar Section */}
          {activeTab === 'grammar' && (
            <div className="animate-in fade-in duration-500 space-y-12">
              {/* Let's section */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-600 text-white p-2 rounded-lg">1</div>
                  <h2 className="text-2xl font-bold">Form 1: Let’s + base verb</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p className="text-slate-600 text-lg">
                      The structure <strong>let’s</strong> is used to suggest an activity that includes 
                      the speaker and the listener. It is informal and very common.
                    </p>
                    <div className="bg-slate-100 p-4 rounded-lg font-mono text-center text-lg border-2 border-dashed border-slate-300">
                      Let’s + base verb
                    </div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-blue-900 mb-2">Example:</h4>
                    <p className="text-xl text-blue-700 italic">"Let’s try painting this weekend."</p>
                    <p className="mt-4 text-sm text-blue-600">
                      <span className="font-bold">Key point:</span> The verb is always in base form (try, paint, draw).
                    </p>
                  </div>
                </div>
              </section>

              {/* Why don't we section */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-indigo-600 text-white p-2 rounded-lg">2</div>
                  <h2 className="text-2xl font-bold">Form 2: Why don’t we + base verb?</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p className="text-slate-600 text-lg">
                      This structure is used to make a suggestion in the form of a question. 
                      It sounds friendly and often invites the other person to give their opinion.
                    </p>
                    <div className="bg-slate-100 p-4 rounded-lg font-mono text-center text-lg border-2 border-dashed border-slate-300">
                      Why don’t we + base verb?
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                    <h4 className="font-bold text-indigo-900 mb-2">Example:</h4>
                    <p className="text-xl text-indigo-700 italic">"Why don’t we take photos at the park?"</p>
                    <p className="mt-4 text-sm text-indigo-600">
                      <span className="font-bold">Note:</span> Even though it looks like a question, it only expresses a suggestion.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* 4. Practice Section */}
          {activeTab === 'practice' && (
            <div className="animate-in fade-in duration-500 space-y-10">
              {/* Exercise 1 */}
              <section>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="bg-slate-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                  Vocabulary Recognition
                </h3>
                <div className="grid gap-4">
                  {[
                    { q: "Photography", a: "Taking artistic pictures" },
                    { q: "Crafts", a: "Making things by hand" },
                    { q: "Writing", a: "Creating stories or texts" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="font-bold w-32">{item.q}</span>
                      <div className="flex-1 flex items-center gap-4">
                        <select 
                          className="w-full p-2 rounded border border-slate-300 bg-white"
                          onChange={(e) => {
                            setPracticeState(prev => ({
                              ...prev,
                              feedback: { ...prev.feedback, [`ex1-${idx}`]: e.target.value === item.a }
                            }));
                          }}
                        >
                          <option value="">Choose description...</option>
                          <option value="Making things by hand">Making things by hand</option>
                          <option value="Creating stories or texts">Creating stories or texts</option>
                          <option value="Taking artistic pictures">Taking artistic pictures</option>
                        </select>
                        {practiceState.feedback[`ex1-${idx}`] === true && <CheckCircle2 className="text-emerald-500" />}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Exercise 2 */}
              <section>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="bg-slate-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                  Choose the Correct Form
                </h3>
                <div className="space-y-4">
                  {[
                    { q: "___ try drawing together.", c: "Let's" },
                    { q: "___ practice photography in the city?", c: "Why don't we" },
                    { q: "___ write a short story tonight.", c: "Let's" },
                    { q: "___ do some crafts this weekend?", c: "Why don't we" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => checkEx2(idx, "Let's", item.c)}
                          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                            practiceState.ex2[idx] === "Let's" ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100'
                          }`}
                        >Let's</button>
                        <button 
                          onClick={() => checkEx2(idx, "Why don't we", item.c)}
                          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                            practiceState.ex2[idx] === "Why don't we" ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100'
                          }`}
                        >Why don't we</button>
                      </div>
                      <span className="text-slate-700">{item.q.replace('___', '________')}</span>
                      {practiceState.feedback[`ex2-${idx}`] === true && <CheckCircle2 className="text-emerald-500" />}
                      {practiceState.feedback[`ex2-${idx}`] === false && <span className="text-rose-500 text-xs font-bold">Keep trying!</span>}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* 5. Wrap-up Section */}
          {activeTab === 'wrapup' && (
            <div className="animate-in fade-in duration-500 text-center max-w-2xl mx-auto py-10">
              <div className="mb-6 inline-flex p-4 rounded-full bg-indigo-100 text-indigo-600">
                <Trophy size={48} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Lesson Wrap-Up</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Congratulations! You learned basic vocabulary for creative hobbies and two very common ways 
                to make suggestions in English: <strong>let’s</strong> and <strong>why don’t we</strong>.
              </p>
              
              <div className="grid gap-4 text-left">
                <div className="flex gap-4 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                  <CheckCircle2 className="text-emerald-600 shrink-0" />
                  <p className="text-emerald-900">Both structures are used to propose activities in a friendly, positive, and inclusive way.</p>
                </div>
                <div className="flex gap-4 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                  <CheckCircle2 className="text-emerald-600 shrink-0" />
                  <p className="text-emerald-900">Understanding these forms will help you participate more naturally in conversations about plans and interests.</p>
                </div>
              </div>

              <button 
                onClick={() => setActiveTab('overview')}
                className="mt-10 px-8 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
              >
                Restart Lesson
              </button>
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 py-10 text-center text-slate-400 text-sm">
        <p>© 2024 Creative Hobbies English Course • Interactive Lesson</p>
      </footer>
    </div>
  );
};

export default App;