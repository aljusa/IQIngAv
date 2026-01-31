import React, { useState } from 'react';
import { 
  BookOpen, 
  Target, 
  Award, 
  Settings, 
  Music, 
  Film, 
  Tv, 
  Mic, 
  CheckCircle2, 
  AlertCircle,
  PlayCircle,
  ChevronRight,
  Sparkles
} from 'lucide-react';

// Types
type TabType = 'overview' | 'development' | 'grammar' | 'practice' | 'summary';

interface ExerciseState {
  ex1: { [key: string]: string };
  ex2: { [key: number]: string };
  ex3: { [key: number]: string };
  submitted: boolean;
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [exerciseState, setExerciseState] = useState<ExerciseState>({
    ex1: {},
    ex2: {},
    ex3: {},
    submitted: false
  });

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'development', label: 'Context', icon: PlayCircle },
    { id: 'grammar', label: 'Grammar', icon: Settings },
    { id: 'practice', label: 'Practice', icon: Target },
    { id: 'summary', label: 'Wrap-Up', icon: Award },
  ];

  // Logic for Exercise 1
  const handleEx1Change = (key: string, value: string) => {
    setExerciseState(prev => ({
      ...prev,
      ex1: { ...prev.ex1, [key]: value }
    }));
  };

  // Logic for Exercise 2
  const handleEx2Change = (index: number, value: string) => {
    setExerciseState(prev => ({
      ...prev,
      ex2: { ...prev.ex2, [index]: value }
    }));
  };

  // Logic for Exercise 3
  const handleEx3Change = (index: number, value: string) => {
    setExerciseState(prev => ({
      ...prev,
      ex3: { ...prev.ex3, [index]: value }
    }));
  };

  const checkAnswers = () => {
    setExerciseState(prev => ({ ...prev, submitted: true }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <BookOpen className="text-indigo-600" /> 1. Lesson Description
              </h2>
              <p className="text-slate-600 leading-relaxed">
                In this lesson, you will learn how to express personal preferences in entertainment using the verbs 
                <span className="font-bold text-indigo-600"> like</span>, 
                <span className="font-bold text-indigo-600"> love</span>, and 
                <span className="font-bold text-indigo-600"> enjoy</span>. 
                These structures help you talk naturally about what you prefer—such as movies, music, TV shows, podcasts, or live shows—in everyday conversations.
              </p>
            </section>

            <section className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                <Target className="text-indigo-600" /> 2. Learning Objectives
              </h2>
              <ul className="space-y-3">
                {[
                  "Recognize vocabulary related to entertainment.",
                  "Understand how like, love, and enjoy are used to express preferences.",
                  "Identify when to use nouns or verbs in the -ing form after these verbs.",
                  "Interpret sentences that express personal likes and interests."
                ].map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-indigo-800">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-indigo-500 flex-shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <Sparkles className="text-amber-500 w-5 h-5" /> Associated Skills
                </h3>
                <ul className="text-slate-600 space-y-2 list-disc list-inside">
                  <li>Functional use of English to talk about personal interests.</li>
                  <li>Interpretation of opinions in daily conversations.</li>
                  <li>Expansion of entertainment vocabulary.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <BookOpen className="text-emerald-500 w-5 h-5" /> Prerequisites
                </h3>
                <ul className="text-slate-600 space-y-2 list-disc list-inside">
                  <li>Basic knowledge of verbs in the simple present.</li>
                  <li>Elementary familiarity with common nouns.</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'development':
        return (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">5.1 Context & Vocabulary</h2>
              <p className="text-slate-600 mb-8">
                Entertainment is part of everyday life. To talk about these preferences in English, speakers frequently use specific verbs to express degrees of liking.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { term: "movies", desc: "films", icon: Film, color: "bg-blue-100 text-blue-600" },
                  { term: "music genres", desc: "types of music (rock, pop, jazz, etc.)", icon: Music, color: "bg-purple-100 text-purple-600" },
                  { term: "TV shows", desc: "television programs", icon: Tv, color: "bg-orange-100 text-orange-600" },
                  { term: "podcasts", desc: "audio programs", icon: Mic, color: "bg-emerald-100 text-emerald-600" },
                  { term: "live shows", desc: "events with live performances", icon: Sparkles, color: "bg-pink-100 text-pink-600" }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-100 hover:border-indigo-200 transition-colors bg-slate-50/50 group">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${item.color}`}>
                      <item.icon size={20} />
                    </div>
                    <h4 className="font-bold text-slate-800 capitalize">{item.term}</h4>
                    <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case 'grammar':
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { verb: "Like", level: "Moderate", use: "General preference", example: "I like podcasts.", color: "border-blue-200 bg-blue-50 text-blue-800" },
                { verb: "Love", level: "Strong", use: "Enthusiasm", example: "I love action movies.", color: "border-pink-200 bg-pink-50 text-pink-800" },
                { verb: "Enjoy", level: "Active", use: "Pleasant activities", example: "I enjoy TV shows.", color: "border-emerald-200 bg-emerald-50 text-emerald-800" }
              ].map((v, i) => (
                <div key={i} className={`p-6 rounded-2xl border-2 ${v.color}`}>
                  <h3 className="text-2xl font-black mb-1">{v.verb}</h3>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-70 mb-4">{v.level} Preference</div>
                  <p className="text-sm mb-4">{v.use}</p>
                  <div className="bg-white/50 p-3 rounded-lg font-medium italic">"{v.example}"</div>
                </div>
              ))}
            </div>

            <section className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Settings size={120} />
               </div>
               <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                 <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-sm">!</div>
                 The "Golden" Grammar Rule
               </h2>
               <div className="grid md:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-4">
                    <h3 className="text-indigo-300 font-bold uppercase text-sm tracking-widest">Structure A: + Noun</h3>
                    <p className="text-lg">Direct object follows the verb.</p>
                    <div className="space-y-2">
                       <div className="flex items-center gap-2 bg-slate-800/50 p-3 rounded-xl border border-slate-700">
                          <CheckCircle2 size={18} className="text-emerald-400" />
                          <span>I like <span className="text-indigo-300 font-bold underline">movies</span>.</span>
                       </div>
                       <div className="flex items-center gap-2 bg-slate-800/50 p-3 rounded-xl border border-slate-700">
                          <CheckCircle2 size={18} className="text-emerald-400" />
                          <span>I love <span className="text-indigo-300 font-bold underline">music genres</span>.</span>
                       </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-emerald-300 font-bold uppercase text-sm tracking-widest">Structure B: + Verb-ing</h3>
                    <p className="text-lg">Action being enjoyed.</p>
                    <div className="space-y-2">
                       <div className="flex items-center gap-2 bg-slate-800/50 p-3 rounded-xl border border-slate-700">
                          <CheckCircle2 size={18} className="text-emerald-400" />
                          <span>I enjoy <span className="text-emerald-300 font-bold underline">listening</span> to podcasts.</span>
                       </div>
                       <div className="flex items-center gap-2 bg-slate-800/50 p-3 rounded-xl border border-slate-700">
                          <CheckCircle2 size={18} className="text-emerald-400" />
                          <span>I love <span className="text-emerald-300 font-bold underline">watching</span> live shows.</span>
                       </div>
                    </div>
                  </div>
               </div>
               <div className="mt-8 pt-6 border-t border-slate-700 text-slate-400 text-sm italic">
                 *Key note: With <span className="text-white font-bold">enjoy</span>, the verb that follows is always in the -ing form.
               </div>
            </section>
          </div>
        );

      case 'practice':
        return (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-500 pb-12">
            {/* Exercise 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Exercise 1: Vocabulary Recognition</h3>
              <p className="text-sm text-slate-500 mb-6 italic">Match the word with the correct description.</p>
              
              <div className="space-y-4">
                {[
                  { id: 'p', label: 'Podcasts', correct: 'b' },
                  { id: 'l', label: 'Live shows', correct: 'c' },
                  { id: 't', label: 'TV shows', correct: 'a' }
                ].map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl bg-slate-50">
                    <span className="font-bold text-indigo-600 min-w-[100px]">{item.label}</span>
                    <select 
                      disabled={exerciseState.submitted}
                      className="flex-1 p-2 rounded-lg border border-slate-200 bg-white"
                      value={exerciseState.ex1[item.id] || ''}
                      onChange={(e) => handleEx1Change(item.id, e.target.value)}
                    >
                      <option value="">Select description...</option>
                      <option value="a">a) Programs you watch on television</option>
                      <option value="b">b) Audio programs you listen to</option>
                      <option value="c">c) Performances in front of an audience</option>
                    </select>
                    {exerciseState.submitted && (
                      exerciseState.ex1[item.id] === item.correct 
                        ? <CheckCircle2 className="text-emerald-500" /> 
                        : <AlertCircle className="text-red-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Exercise 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Exercise 2: Choose the Correct Verb</h3>
              <p className="text-sm text-slate-500 mb-6 italic">Select the best option (like, love, or enjoy).</p>
              
              <div className="space-y-4">
                {[
                  "I ___ movies on the weekend.",
                  "I ___ listening to podcasts at night.",
                  "I ___ live shows and concerts.",
                  "I ___ watching TV shows after work."
                ].map((sentence, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-100 flex items-center gap-4">
                    <span className="text-slate-700">{sentence.split('___')[0]}</span>
                    <select 
                      disabled={exerciseState.submitted}
                      className="p-1 px-3 rounded-lg border border-indigo-200 text-indigo-600 font-bold"
                      value={exerciseState.ex2[i] || ''}
                      onChange={(e) => handleEx2Change(i, e.target.value)}
                    >
                      <option value="">...</option>
                      <option value="like">like</option>
                      <option value="love">love</option>
                      <option value="enjoy">enjoy</option>
                    </select>
                    <span className="text-slate-700">{sentence.split('___')[1]}</span>
                  </div>
                ))}
              </div>
            </div>

             {/* Exercise 3 */}
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Exercise 3: Write About Your Preferences</h3>
              <p className="text-sm text-slate-500 mb-6 italic">Construct complete sentences with the cues provided.</p>
              
              <div className="space-y-6">
                {[
                  { prompt: "(love / music genres)", example: "I love different music genres." },
                  { prompt: "(enjoy / watch / TV shows)", example: "I enjoy watching TV shows." },
                  { prompt: "(like / podcasts)", example: "I like podcasts." }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="text-sm font-bold text-slate-600">{item.prompt}</div>
                    <input 
                      type="text" 
                      disabled={exerciseState.submitted}
                      className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                      placeholder="Type your sentence here..."
                      onChange={(e) => handleEx3Change(i, e.target.value)}
                    />
                    {exerciseState.submitted && (
                      <div className="text-xs bg-emerald-50 text-emerald-700 p-2 rounded-lg border border-emerald-100">
                        <strong>Suggested:</strong> {item.example}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={checkAnswers}
              className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={24} />
              {exerciseState.submitted ? "Review Completed" : "Submit Answers"}
            </button>
          </div>
        );

      case 'summary':
        return (
          <div className="max-w-2xl mx-auto py-12 text-center animate-in zoom-in duration-500">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full mb-8">
              <Award size={48} />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Lesson Complete!</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              In this lesson, you learned how to express personal entertainment preferences using 
              <span className="font-bold text-indigo-600"> like, love</span>, and 
              <span className="font-bold text-indigo-600"> enjoy</span>.
            </p>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-left">
              <h4 className="font-bold text-slate-800 mb-4">Key Takeaways:</h4>
              <ul className="space-y-3">
                {[
                  "Degrees of preference: Like (low) < Enjoy (medium) < Love (high).",
                  "With 'enjoy', always use the -ing form for verbs.",
                  "Nouns can be used directly after all three verbs.",
                  "These structures make talking about media and culture more engaging."
                ].map((t, i) => (
                  <li key={i} className="flex gap-3 text-slate-600">
                    <ChevronRight className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button 
              onClick={() => setActiveTab('overview')}
              className="mt-12 text-indigo-600 font-bold hover:underline"
            >
              Review from the beginning
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-100">
              <Film size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">Personal Preferences</h1>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Entertainment Lesson</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            English Level: Beginner
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="max-w-5xl mx-auto px-4 sm:px-6 mt-2 overflow-x-auto">
          <div className="flex border-b border-transparent">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-2 px-5 py-4 border-b-2 font-medium text-sm transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'border-indigo-600 text-indigo-600' 
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6">
        {renderTabContent()}
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-200 text-center text-slate-400 text-sm">
        <p>© 2024 Interactive Entertainment English Lesson. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;