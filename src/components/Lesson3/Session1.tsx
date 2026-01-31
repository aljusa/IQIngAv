import React, { useState } from 'react';
import { BookOpen, CheckCircle, Apple, Scale, List, ArrowRight, XCircle, Award, ChevronRight } from 'lucide-react';

// --- Types & Interfaces ---

type TabId = 'overview' | 'nouns' | 'usage' | 'vocab' | 'exercises' | 'summary';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Data ---

const VOCABULARY = [
  { term: 'Quantity', meaning: 'How much or how many of something', example: 'A large quantity of food.' },
  { term: 'Diet', meaning: 'The type of food a person usually eats', example: 'A balanced diet is important.' },
  { term: 'Processed foods', meaning: 'Foods changed from their natural form', example: 'Avoid highly processed foods.' },
  { term: 'Nutrients', meaning: 'Substances needed for health and growth', example: 'Vegetables contain many nutrients.' },
  { term: 'Comparison', meaning: 'Showing similarities or differences', example: 'A comparison between two diets.' },
];

const EXERCISE_1_DATA = [
  { id: 1, word: 'Sugar', type: 'U' },
  { id: 2, word: 'Calories', type: 'C' },
  { id: 3, word: 'Water', type: 'U' },
  { id: 4, word: 'Snacks', type: 'C' },
  { id: 5, word: 'Fat', type: 'U' },
];

const EXERCISE_2_DATA = [
  { id: 1, sentence: 'This diet contains ___ salt.', answer: 'less', options: ['more', 'less', 'fewer'] },
  { id: 2, sentence: 'He eats ___ snacks during the workday.', answer: 'fewer', options: ['more', 'less', 'fewer'] },
  { id: 3, sentence: 'Engineers should drink ___ water during long shifts.', answer: 'more', options: ['more', 'less', 'fewer'] }, // Context implies distinct recommendation, 'more' is usually the healthy advice here but grammatically 'less' works. Based on lesson context "Healthy diets... more water", answer is more.
  { id: 4, sentence: 'This meal has ___ calories than the previous one.', answer: 'fewer', options: ['less', 'fewer'] }, // Calories is countable
];

// --- Components ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: <BookOpen size={18} /> },
    { id: 'nouns', label: 'Nouns', icon: <List size={18} /> },
    { id: 'usage', label: 'Rules', icon: <Scale size={18} /> },
    { id: 'vocab', label: 'Vocab', icon: <Apple size={18} /> },
    { id: 'exercises', label: 'Practice', icon: <CheckCircle size={18} /> },
    { id: 'summary', label: 'Summary', icon: <Award size={18} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewSection changeTab={setActiveTab} />;
      case 'nouns': return <NounsSection />;
      case 'usage': return <UsageSection />;
      case 'vocab': return <VocabSection />;
      case 'exercises': return <ExercisesSection />;
      case 'summary': return <SummarySection />;
      default: return <OverviewSection changeTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-emerald-600 text-white shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Apple size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Food, Nutrition, & Quantities</h1>
              <p className="text-emerald-100 text-sm md:text-base">Mastering <em>more</em>, <em>less</em>, and <em>fewer</em></p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        
        {/* Navigation Tabs (Mobile: Scrollable, Desktop: Grid) */}
        <nav className="flex overflow-x-auto pb-4 gap-2 mb-6 no-scrollbar" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-all duration-200
                ${activeTab === tab.id 
                  ? 'bg-white text-emerald-600 shadow-md ring-1 ring-emerald-100' 
                  : 'bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-700'}
              `}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 min-h-[500px] p-6 md:p-8 animate-in fade-in duration-300">
          {renderContent()}
        </div>

      </main>
    </div>
  );
}

// --- Sub-Components for Sections ---

function OverviewSection({ changeTab }: { changeTab: (t: TabId) => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 border-b pb-2">Lesson Overview</h2>
      <p className="text-lg text-slate-600 leading-relaxed">
        This lesson explains how to use the English quantifiers <span className="font-bold text-emerald-600">more</span>, <span className="font-bold text-emerald-600">less</span>, and <span className="font-bold text-emerald-600">fewer</span> in the context of food and nutrition. 
        You will learn how these words depend on whether a noun is <strong>countable</strong> or <strong>uncountable</strong>, and how to use them to make clear comparisons between healthy and unhealthy diets.
      </p>
      
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mt-8">
        <h3 className="text-lg font-semibold text-emerald-800 mb-3 flex items-center gap-2">
          <CheckCircle size={20} />
          Learning Objectives
        </h3>
        <ul className="space-y-2 text-emerald-900">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
            Distinguish between countable and uncountable nouns.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
            Use <em>more</em> and <em>less</em> correctly with uncountable nouns.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
            Use <em>fewer</em> correctly with countable nouns.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
            Compare healthy and unhealthy diets using simple comparative structures.
          </li>
        </ul>
      </div>

 
    </div>
  );
}

function NounsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-slate-800 border-b pb-2">Key Grammar Concepts</h2>
      <p className="text-slate-600">Before using quantifiers, we must understand the type of noun we are talking about.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Countable Card */}
        <div className="border border-blue-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-blue-50 p-4 border-b border-blue-100">
            <h3 className="text-lg font-bold text-blue-800">Countable Nouns</h3>
            <p className="text-sm text-blue-600">Things you can count individually</p>
          </div>
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle size={16} className="text-blue-500" />
                Have singular and plural forms.
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle size={16} className="text-blue-500" />
                You can use numbers (one, two, five).
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Examples</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {['calories', 'snacks', 'sweets', 'meals', 'apples'].map(word => (
                  <span key={word} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Uncountable Card */}
        <div className="border border-orange-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-orange-50 p-4 border-b border-orange-100">
            <h3 className="text-lg font-bold text-orange-800">Uncountable Nouns</h3>
            <p className="text-sm text-orange-600">Substances, liquids, or concepts</p>
          </div>
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle size={16} className="text-orange-500" />
                Cannot be counted individually.
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle size={16} className="text-orange-500" />
                Do not have a plural form (no 's').
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Examples</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {['sugar', 'salt', 'water', 'fat', 'rice'].map(word => (
                  <span key={word} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UsageSection() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 border-b pb-2">
         <Scale size={24} className="text-emerald-600"/>
         <h2 className="text-2xl font-bold text-slate-800">Rules of Comparison</h2>
      </div>

      {/* Rule 1: More/Less */}
      <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-2">Using <span className="text-emerald-600">more</span> and <span className="text-emerald-600">less</span></h3>
        <p className="text-slate-600 italic mb-4">Target: Uncountable Nouns</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-emerald-500">
            <div className="font-bold text-lg">more</div>
            <div className="text-sm text-slate-500">A greater amount</div>
            <div className="mt-2 font-mono text-sm bg-slate-100 p-2 rounded">"more water", "more sugar"</div>
          </div>
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-red-400">
            <div className="font-bold text-lg">less</div>
            <div className="text-sm text-slate-500">A smaller amount</div>
            <div className="mt-2 font-mono text-sm bg-slate-100 p-2 rounded">"less salt", "less fat"</div>
          </div>
        </div>
        <p className="text-slate-700"><strong>Example:</strong> "This meal has <span className="font-bold">more fat</span> than recommended. A healthy diet includes <span className="font-bold">less sugar</span>."</p>
      </section>

      {/* Rule 2: Fewer */}
      <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-2">Using <span className="text-emerald-600">fewer</span></h3>
        <p className="text-slate-600 italic mb-4">Target: Countable Nouns (Plural)</p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500 mb-4">
          <div className="font-bold text-lg">fewer</div>
          <div className="text-sm text-slate-500">A smaller number of individual items</div>
          <div className="mt-2 font-mono text-sm bg-slate-100 p-2 rounded">"fewer calories", "fewer snacks"</div>
        </div>
        <p className="text-slate-700"><strong>Example:</strong> "Engineers who work long hours should eat <span className="font-bold">fewer snacks</span> during the day."</p>
      </section>

      {/* Comparisons */}
      <section>
        <h3 className="text-xl font-bold text-slate-800 mb-4">Comparing Healthy vs. Unhealthy Diets</h3>
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl p-6 shadow-md">
          <h4 className="font-bold text-lg mb-3 border-b border-emerald-400 pb-2">Model Comparison Sentence</h4>
          <p className="text-xl font-medium mb-4">"This diet has <span className="underline decoration-wavy decoration-emerald-300 underline-offset-4">less sugar</span> and <span className="underline decoration-wavy decoration-emerald-300 underline-offset-4">fewer processed foods</span>."</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-white/10 p-4 rounded-lg">
            <div>
              <span className="font-bold block text-emerald-200">less sugar</span>
              <span>because 'sugar' is uncountable</span>
            </div>
            <div>
              <span className="font-bold block text-emerald-200">fewer processed foods</span>
              <span>because 'foods' is countable & plural</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function VocabSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 border-b pb-2">Technical Vocabulary</h2>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-600 text-sm uppercase tracking-wider">
              <th className="p-4 border-b">Term</th>
              <th className="p-4 border-b">Meaning</th>
              <th className="p-4 border-b hidden md:table-cell">Example Context</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {VOCABULARY.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-bold text-emerald-700">{item.term}</td>
                <td className="p-4 text-slate-700">{item.meaning}</td>
                <td className="p-4 text-slate-500 italic text-sm hidden md:table-cell">{item.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ExercisesSection() {
  const [ex1Answers, setEx1Answers] = useState<Record<number, string>>({});
  const [ex2Answers, setEx2Answers] = useState<Record<number, string>>({});
  const [showModelAnswer, setShowModelAnswer] = useState(false);

  const handleEx1Click = (id: number, type: string) => {
    setEx1Answers(prev => ({ ...prev, [id]: type }));
  };

  const handleEx2Click = (id: number, value: string) => {
    setEx2Answers(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 border-b pb-2 mb-6">Exercises</h2>
      </div>

      {/* Exercise 1 */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Exercise 1: Identify the Noun Type</h3>
        <p className="mb-4 text-slate-600 text-sm">Is the noun Countable (C) or Uncountable (U)?</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {EXERCISE_1_DATA.map((item) => {
            const currentAnswer = ex1Answers[item.id];
            const isCorrect = currentAnswer === item.type;
            const isAnswered = !!currentAnswer;

            return (
              <div key={item.id} className="flex flex-col items-center p-4 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-lg mb-3 capitalize">{item.word}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEx1Click(item.id, 'C')}
                    className={`px-4 py-1 rounded text-sm font-bold transition-colors ${
                      currentAnswer === 'C' 
                        ? (item.type === 'C' ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
                        : 'bg-white border border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    Countable
                  </button>
                  <button
                    onClick={() => handleEx1Click(item.id, 'U')}
                    className={`px-4 py-1 rounded text-sm font-bold transition-colors ${
                      currentAnswer === 'U' 
                        ? (item.type === 'U' ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
                        : 'bg-white border border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    Uncountable
                  </button>
                </div>
                {isAnswered && (
                   <div className={`text-xs mt-2 font-bold ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
                     {isCorrect ? 'Correct!' : 'Try again'}
                   </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Exercise 2: Choose the Correct Quantifier</h3>
        <p className="mb-4 text-slate-600 text-sm">Fill in the blanks with <em>more</em>, <em>less</em>, or <em>fewer</em>.</p>
        
        <div className="space-y-4">
          {EXERCISE_2_DATA.map((item) => {
            const currentAnswer = ex2Answers[item.id];
            const isCorrect = currentAnswer === item.answer;
            
            return (
              <div key={item.id} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                   <p className="text-slate-800 text-lg">
                     {item.sentence.split('___')[0]}
                     <span className={`inline-block border-b-2 px-2 font-bold min-w-[60px] text-center ${currentAnswer ? (isCorrect ? 'border-green-500 text-green-700' : 'border-red-500 text-red-600') : 'border-slate-300'}`}>
                       {currentAnswer || '___'}
                     </span>
                     {item.sentence.split('___')[1]}
                   </p>
                </div>
                <div className="flex gap-2 mt-3">
                  {item.options.map(opt => (
                    <button
                      key={opt}
                      onClick={() => handleEx2Click(item.id, opt)}
                      className={`px-3 py-1 text-sm rounded-full border transition-all ${
                        currentAnswer === opt 
                        ? 'bg-slate-800 text-white border-slate-800' 
                        : 'bg-white text-slate-600 border-slate-300 hover:border-emerald-500 hover:text-emerald-600'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                  {currentAnswer && isCorrect && <CheckCircle size={20} className="text-green-500 ml-2 self-center animate-in fade-in" />}
                  {currentAnswer && !isCorrect && <XCircle size={20} className="text-red-500 ml-2 self-center animate-in fade-in" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Exercise 3 */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Exercise 3: Comparative Writing</h3>
        <p className="mb-4 text-slate-600 text-sm">
          Think about comparing a healthy diet vs. a fast-food diet. Write a sentence in your head, then check the model answer.
        </p>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mb-4">
            <p className="font-medium text-blue-900 mb-2">Prompt:</p>
            <p className="text-slate-700 italic">"Compare a healthy diet and a fast-food diet using <strong>sugar</strong> and <strong>snacks</strong>."</p>
        </div>

        <button 
          onClick={() => setShowModelAnswer(!showModelAnswer)}
          className="text-emerald-600 font-bold hover:text-emerald-700 text-sm flex items-center gap-1"
        >
            {showModelAnswer ? 'Hide Model Answer' : 'Show Model Answer'} <ChevronRight size={16} className={`transition-transform ${showModelAnswer ? 'rotate-90' : ''}`} />
        </button>

        {showModelAnswer && (
            <div className="mt-4 p-4 bg-emerald-100 text-emerald-900 rounded-lg animate-in fade-in slide-in-from-top-2">
                <strong>Model Answer:</strong> The healthy diet has <u>less sugar</u> and includes <u>fewer snacks</u> throughout the day.
            </div>
        )}
      </div>
    </div>
  );
}

function SummarySection() {
  return (
    <div className="space-y-6 text-center py-8">
      <div className="inline-block p-4 bg-emerald-100 text-emerald-600 rounded-full mb-4">
        <Award size={48} />
      </div>
      <h2 className="text-3xl font-bold text-slate-800">Lesson Complete!</h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        In this lesson, you mastered how to describe quantities related to food. 
        Remember, the key is identifying whether the noun is countable or uncountable.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto mt-8">
         <div className="p-4 bg-slate-50 rounded border border-slate-200">
             <span className="block text-sm text-slate-500 uppercase font-bold mb-1">Uncountable</span>
             <div className="text-lg font-bold text-slate-800">Less / More</div>
             <div className="text-sm text-slate-600">sugar, salt, fat</div>
         </div>
         <div className="p-4 bg-slate-50 rounded border border-slate-200">
             <span className="block text-sm text-slate-500 uppercase font-bold mb-1">Countable</span>
             <div className="text-lg font-bold text-slate-800">Fewer / More</div>
             <div className="text-sm text-slate-600">calories, snacks, meals</div>
         </div>
         <div className="p-4 bg-slate-50 rounded border border-slate-200">
             <span className="block text-sm text-slate-500 uppercase font-bold mb-1">Goal</span>
             <div className="text-lg font-bold text-slate-800">Clear Comparisons</div>
             <div className="text-sm text-slate-600">Professional accuracy</div>
         </div>
      </div>
    </div>
  );
}