import React, { useState } from 'react';
import { 
  BookOpen, 
  Activity, 
  List, 
  CheckCircle, 
  Brain, 
  ChevronRight, 
  Scale, 
  Move,
  Monitor,
  Check,
  X
} from 'lucide-react';

// --- Types ---

type TabId = 'overview' | 'grammar' | 'vocabulary' | 'practice' | 'summary';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

interface QuizState {
  ex1: Record<string, string>;
  ex2: Record<string, string>;
  showResults: boolean;
}

// --- Components ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview & Objectives', icon: <BookOpen size={18} /> },
    { id: 'grammar', label: 'Grammar Rules', icon: <Scale size={18} /> },
    { id: 'vocabulary', label: 'Vocabulary', icon: <List size={18} /> },
    { id: 'practice', label: 'Exercises', icon: <Brain size={18} /> },
    { id: 'summary', label: 'Summary', icon: <CheckCircle size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-100">
      {/* Header */}
      <header className="bg-emerald-700 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-8">
         
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Physical Activity and Exercise</h1>
          <p className="text-emerald-100 text-lg">Mastering the quantifiers: More, Less, and Fewer</p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className=" top-0 z-10 bg-white border-b border-slate-200 shadow-sm overflow-x-auto">
        <div className="max-w-4xl mx-auto px-4 flex space-x-1 md:space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-4 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2
                ${activeTab === tab.id 
                  ? 'border-emerald-600 text-emerald-700 bg-emerald-50' 
                  : 'border-transparent text-slate-500 hover:text-emerald-600 hover:bg-slate-50'}
              `}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-8 pb-20">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 min-h-[500px]">
          {activeTab === 'overview' && <OverviewSection changeTab={setActiveTab} />}
          {activeTab === 'grammar' && <GrammarSection />}
          {activeTab === 'vocabulary' && <VocabularySection />}
          {activeTab === 'practice' && <PracticeSection />}
          {activeTab === 'summary' && <SummarySection />}
        </div>
      </main>
    </div>
  );
}

// --- Section Components ---

const OverviewSection = ({ changeTab }: { changeTab: (t: TabId) => void }) => (
  <div className="space-y-8 animate-fadeIn">
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <span className="bg-emerald-100 text-emerald-700 p-2 rounded-lg"><BookOpen size={24} /></span>
        Lesson Overview
      </h2>
      <p className="text-lg text-slate-600 leading-relaxed">
        This lesson develops the use of the English quantifiers <strong className="text-emerald-700">more</strong>, <strong className="text-emerald-700">less</strong>, and <strong className="text-emerald-700">fewer</strong> in the context of physical activity and exercise. 
        You will learn how to describe exercise routines, active habits, and sedentary behaviors, and how to compare more active lifestyles with less healthy ones.
      </p>
    </section>

    <div className="h-px bg-slate-200" />

    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <span className="bg-blue-100 text-blue-700 p-2 rounded-lg"><Activity size={24} /></span>
        Learning Objectives
      </h2>
      <ul className="grid gap-3">
        {[
          "Use 'more' and 'less' to talk about quantities related to physical activity.",
          "Use 'fewer' with countable activities in an exercise routine.",
          "Form simple comparative sentences about active and sedentary lifestyles."
        ].map((obj, i) => (
          <li key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
            <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={20} />
            <span className="text-slate-700">{obj}</span>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

const GrammarSection = () => (
  <div className="space-y-10 animate-fadeIn">
    
    {/* Countable vs Uncountable */}
    <section>
      <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-2">Countable vs. Uncountable Nouns</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2"><Move size={20}/> Uncountable Nouns</h3>
          <p className="text-sm text-blue-700 mb-4">Activities, time, or concepts not counted as units.</p>
          <ul className="space-y-2">
            {['exercise', 'physical activity', 'screen time', 'movement'].map(item => (
              <li key={item} className="bg-white px-3 py-2 rounded text-slate-700 text-sm shadow-sm border border-blue-100">{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
          <h3 className="font-bold text-emerald-800 mb-3 flex items-center gap-2"><List size={20}/> Countable Nouns</h3>
          <p className="text-sm text-emerald-700 mb-4">Activities or units that can be counted.</p>
          <ul className="space-y-2">
            {['rest days', 'hours', 'workouts', 'sedentary activities'].map(item => (
              <li key={item} className="bg-white px-3 py-2 rounded text-slate-700 text-sm shadow-sm border border-emerald-100">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Using More and Less */}
    <section>
      <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-2">Using "More" and "Less"</h2>
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <p className="mb-4 text-slate-700">Use with <strong className="text-blue-600">Uncountable Nouns</strong> for general amounts.</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-4 bg-white rounded shadow-sm">
            <span className="block text-2xl font-bold text-emerald-600 mb-1">+</span>
            <span className="font-bold text-slate-800">More</span>
            <span className="block text-xs text-slate-500">Greater amount</span>
          </div>
          <div className="text-center p-4 bg-white rounded shadow-sm">
            <span className="block text-2xl font-bold text-red-500 mb-1">-</span>
            <span className="font-bold text-slate-800">Less</span>
            <span className="block text-xs text-slate-500">Smaller amount</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex gap-4 items-start">
            <div className="w-1 bg-emerald-500 self-stretch rounded-full"></div>
            <div>
              <p className="text-slate-800 font-medium">"Engineers should get <span className="text-emerald-600 font-bold">more physical activity</span>."</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-1 bg-emerald-500 self-stretch rounded-full"></div>
            <div>
              <p className="text-slate-800 font-medium">"A healthy routine includes <span className="text-emerald-600 font-bold">less screen time</span>."</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Using Fewer */}
    <section>
      <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-2">Using "Fewer"</h2>
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <p className="mb-4 text-slate-700">Use with <strong className="text-emerald-600">Countable Nouns (Plural)</strong> to indicate a smaller number.</p>
        
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-slate-200 mb-6 shadow-sm">
            <div className="bg-emerald-100 p-3 rounded-full text-emerald-700 font-bold">FEWER</div>
            <span className="text-slate-400 font-bold text-xl">+</span>
            <div className="bg-slate-100 px-4 py-2 rounded text-slate-600 font-medium">Rest days / Hours / Workouts</div>
        </div>

        <div className="space-y-3">
          <div className="flex gap-4 items-start">
            <div className="w-1 bg-emerald-500 self-stretch rounded-full"></div>
            <div>
              <p className="text-slate-800 font-medium">"An active lifestyle includes <span className="text-emerald-600 font-bold">fewer rest days</span>."</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-1 bg-emerald-500 self-stretch rounded-full"></div>
            <div>
              <p className="text-slate-800 font-medium">"Office workers benefit from <span className="text-emerald-600 font-bold">fewer hours</span> sitting."</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Comparison Model */}
    <section className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
       <h3 className="font-bold text-yellow-800 mb-2 uppercase text-sm tracking-wide">Key Takeaway Pattern</h3>
       <p className="text-xl font-medium text-slate-800 text-center py-4">
         "Doing <span className="text-emerald-600">more physical activity</span> and <span className="text-emerald-600">fewer sedentary activities</span> improves health."
       </p>
       <div className="flex justify-center gap-8 text-sm text-slate-500">
         <span>(Uncountable)</span>
         <span>(Countable)</span>
       </div>
    </section>
  </div>
);

const VocabularySection = () => (
  <div className="animate-fadeIn">
    <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
      <span className="bg-purple-100 text-purple-700 p-2 rounded-lg"><List size={24} /></span>
      Target Vocabulary
    </h2>
    
    <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 font-bold text-slate-700 w-1/3">Term</th>
            <th className="px-6 py-4 font-bold text-slate-700">Meaning</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[
            { term: 'Routine', def: 'A regular pattern of activities' },
            { term: 'Sedentary', def: 'Involving little physical movement' },
            { term: 'Physical activity', def: 'Body movement that uses energy' },
            { term: 'Screen time', def: 'Time spent using digital devices (phones, computers)' },
            { term: 'Lifestyle', def: 'The way a person lives daily' },
          ].map((row, idx) => (
            <tr key={idx} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 font-medium text-emerald-700">{row.term}</td>
              <td className="px-6 py-4 text-slate-600">{row.def}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const PracticeSection = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    ex1: {},
    ex2: {},
    showResults: false
  });

  const handleEx1Select = (id: string, val: string) => {
    setQuizState(prev => ({ ...prev, ex1: { ...prev.ex1, [id]: val }, showResults: false }));
  };

  const handleEx2Select = (id: string, val: string) => {
    setQuizState(prev => ({ ...prev, ex2: { ...prev.ex2, [id]: val }, showResults: false }));
  };

  const checkAnswers = () => {
    setQuizState(prev => ({ ...prev, showResults: true }));
  };

  const reset = () => {
    setQuizState({ ex1: {}, ex2: {}, showResults: false });
  };

  // Data for quizzes
  const ex1Data = [
    { id: 'q1', word: 'exercise', correct: 'U' },
    { id: 'q2', word: 'hours', correct: 'C' },
    { id: 'q3', word: 'screen time', correct: 'U' },
    { id: 'q4', word: 'rest days', correct: 'C' },
    { id: 'q5', word: 'physical activity', correct: 'U' },
  ];

  const ex2Data = [
    { id: 'q1', sentence: 'A healthy routine includes ___ physical activity.', options: ['more', 'less', 'fewer'], correct: 'more' },
    { id: 'q2', sentence: 'This program has ___ rest days.', options: ['more', 'less', 'fewer'], correct: 'fewer' },
    { id: 'q3', sentence: 'Engineers should spend ___ time sitting.', options: ['more', 'less', 'fewer'], correct: 'less' },
    { id: 'q4', sentence: 'An active lifestyle involves ___ sedentary activities.', options: ['more', 'less', 'fewer'], correct: 'fewer' },
  ];

  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* Exercise 1 */}
      <section>
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-slate-200 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
          Classify the Nouns
        </h3>
        <p className="text-sm text-slate-500 mb-4">Mark each noun as Countable (C) or Uncountable (U).</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ex1Data.map((item) => {
            const isCorrect = quizState.ex1[item.id] === item.correct;
            const isWrong = quizState.showResults && !isCorrect;
            
            return (
              <div key={item.id} className={`p-4 rounded-lg border ${isWrong ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-white'} shadow-sm`}>
                <p className="font-medium text-center mb-3 capitalize">{item.word}</p>
                <div className="flex justify-center gap-2">
                  {['C', 'U'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleEx1Select(item.id, opt)}
                      className={`
                        w-8 h-8 rounded-full font-bold text-xs transition-colors
                        ${quizState.ex1[item.id] === opt 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}
                      `}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {quizState.showResults && (
                  <div className="text-center mt-2">
                     {isCorrect ? <Check size={16} className="mx-auto text-emerald-500"/> : <span className="text-xs text-red-500 font-bold">Ans: {item.correct}</span>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Exercise 2 */}
      <section>
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-slate-200 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
          Choose the Correct Quantifier
        </h3>
        <div className="space-y-4">
          {ex2Data.map((item) => {
             const isCorrect = quizState.ex2[item.id] === item.correct;
             
             return (
              <div key={item.id} className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="flex-grow text-lg text-slate-700">
                  {item.sentence.split('___')[0]}
                  <select 
                    className={`
                      mx-2 px-2 py-1 rounded border font-medium focus:ring-2 focus:ring-emerald-500 outline-none
                      ${quizState.showResults 
                        ? (isCorrect ? 'border-emerald-500 text-emerald-700 bg-emerald-50' : 'border-red-500 text-red-700 bg-red-50')
                        : 'border-slate-300'}
                    `}
                    value={quizState.ex2[item.id] || ''}
                    onChange={(e) => handleEx2Select(item.id, e.target.value)}
                  >
                    <option value="" disabled>...</option>
                    {item.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  {item.sentence.split('___')[1]}
                </div>
                {quizState.showResults && (
                  <div className="shrink-0">
                    {isCorrect 
                      ? <span className="flex items-center text-emerald-600 text-sm font-bold gap-1"><Check size={16}/> Correct</span> 
                      : <span className="flex items-center text-red-500 text-sm font-bold gap-1"><X size={16}/> Correct: {item.correct}</span>
                    }
                  </div>
                )}
              </div>
          )})}
        </div>
      </section>

      {/* Actions */}
      <div className="flex gap-4 pt-4 border-t">
        <button 
          onClick={checkAnswers}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-bold transition-colors shadow-sm"
        >
          Check Answers
        </button>
        <button 
          onClick={reset}
          className="text-slate-500 hover:text-slate-700 px-6 py-2 rounded-lg font-medium"
        >
          Reset
        </button>
      </div>

      {/* Writing Prompt */}
      <section className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mt-8">
        <h3 className="text-lg font-bold text-indigo-900 mb-2 flex items-center gap-2">
          <span className="bg-indigo-200 text-indigo-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
          Writing Practice
        </h3>
        <p className="text-indigo-700 mb-4 text-sm">Write a sentence comparing an active lifestyle and a sedentary one.</p>
        <textarea 
          placeholder="E.g., An active lifestyle has more..." 
          className="w-full p-3 rounded border border-indigo-200 focus:ring-2 focus:ring-indigo-500 outline-none h-24 mb-4"
        />
        <details>
            <summary className="text-sm font-bold text-indigo-600 cursor-pointer hover:text-indigo-800">Show Model Answer</summary>
            <p className="mt-2 text-indigo-800 bg-indigo-100 p-3 rounded italic">
              "An active lifestyle has <span className="font-bold">more</span> physical activity and <span className="font-bold">fewer</span> rest days than a sedentary one."
            </p>
        </details>
      </section>

    </div>
  );
}

const SummarySection = () => (
  <div className="text-center max-w-2xl mx-auto space-y-8 animate-fadeIn py-8">
    <div className="inline-block bg-emerald-100 p-4 rounded-full text-emerald-600 mb-4">
      <CheckCircle size={48} />
    </div>
    <h2 className="text-3xl font-bold text-slate-800">Lesson Complete!</h2>
    <p className="text-lg text-slate-600 leading-relaxed">
      You have learned how to describe and compare physical activity habits using <strong className="text-emerald-700">more, less, and fewer</strong>. 
      Remember to check if your noun is <em>countable</em> (fewer) or <em>uncountable</em> (less) before speaking.
    </p>
    <div className="bg-slate-50 p-6 rounded-xl text-left border border-slate-200 shadow-sm">
      <h3 className="font-bold text-slate-700 mb-2 border-b pb-2">Quick Recap</h3>
      <ul className="space-y-2 text-slate-600">
        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"/> Use <b>More</b> for greater quantity (both types).</li>
        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"/> Use <b>Less</b> for smaller amounts of <u>uncountable</u> nouns (time, exercise).</li>
        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"/> Use <b>Fewer</b> for smaller numbers of <u>countable</u> nouns (days, hours).</li>
      </ul>
    </div>
  </div>
);