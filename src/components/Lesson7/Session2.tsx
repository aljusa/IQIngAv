import React, { useState } from 'react';
import { 
  BookOpen, 
  Target, 
  List, 
  CheckCircle2, 
  PlayCircle, 
  HelpCircle, 
  Bike, 
  Activity, 
  Waves, 
  Dumbbell, 
  Trophy,
  ChevronRight,
  MessageCircle,
  BrainCircuit,
  RotateCcw
} from 'lucide-react';

// --- Types ---

type Tab = 'overview' | 'lesson' | 'practice' | 'wrapup';

type QuizOption = {
  id: string;
  text: string;
  isCorrect: boolean;
};

type Question = {
  id: number;
  question: string;
  options: QuizOption[];
  feedback?: string;
};

// --- Components ---

const App = () => {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-indigo-600 text-white shadow-lg sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-8 h-8 text-yellow-300" />
            <div>
              <h1 className="text-xl font-bold leading-tight">Sports Interests</h1>
              <p className="text-indigo-200 text-sm">Making Suggestions in English</p>
            </div>
          </div>
          <div className="hidden sm:block text-xs bg-indigo-700 px-3 py-1 rounded-full border border-indigo-500">
            ESL Level: Beginner/Intermediate
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-6 scrollbar-hide">
          <TabButton 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')} 
            icon={<BookOpen size={18} />} 
            label="Overview" 
          />
          <TabButton 
            active={activeTab === 'lesson'} 
            onClick={() => setActiveTab('lesson')} 
            icon={<BrainCircuit size={18} />} 
            label="The Lesson" 
          />
          <TabButton 
            active={activeTab === 'practice'} 
            onClick={() => setActiveTab('practice')} 
            icon={<CheckCircle2 size={18} />} 
            label="Practice" 
          />
          <TabButton 
            active={activeTab === 'wrapup'} 
            onClick={() => setActiveTab('wrapup')} 
            icon={<Target size={18} />} 
            label="Wrap-Up" 
          />
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 min-h-[500px] p-6 sm:p-8 transition-all duration-300">
          
          {activeTab === 'overview' && <OverviewSection onNext={() => setActiveTab('lesson')} />}
          
          {activeTab === 'lesson' && <LessonSection onNext={() => setActiveTab('practice')} />}
          
          {activeTab === 'practice' && <PracticeSection onNext={() => setActiveTab('wrapup')} />}
          
          {activeTab === 'wrapup' && <WrapUpSection onRestart={() => setActiveTab('overview')} />}

        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-slate-400 text-sm py-8">
        <p>© 2024 English Learning Hub. Keep practicing!</p>
      </footer>
    </div>
  );
};

// --- Tab Components ---

const OverviewSection = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-indigo-900 mb-2">1. Lesson Description</h2>
        <p className="text-slate-600 leading-relaxed">
          In this lesson, you will learn how to suggest sports interests and physical activities in English using common, natural structures from everyday conversation. Through vocabulary related to exercise and an active lifestyle, you will understand how to propose plans in an open and friendly way.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
          <div className="flex items-center gap-2 mb-3 text-indigo-700">
            <Target className="w-5 h-5" />
            <h3 className="font-semibold text-lg">2. Learning Objectives</h3>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">•</span>
              Recognize basic vocabulary related to sports.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">•</span>
              Understand how <strong>how about</strong> and <strong>what about</strong> are used.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">•</span>
              Identify when to use a noun or a verb in the -ing form.
            </li>
          </ul>
        </div>

        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
          <div className="flex items-center gap-2 mb-3 text-emerald-700">
            <List className="w-5 h-5" />
            <h3 className="font-semibold text-lg">3. Associated Skills</h3>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              Functional understanding of English in leisure contexts.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              Interpretation of informal suggestions.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              Expansion of sports vocabulary.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
          <HelpCircle size={16} /> 4. Prerequisites
        </h3>
        <p className="text-sm text-slate-600">
          You should already have basic knowledge of common nouns/verbs and elementary familiarity with the <em>-ing</em> form of verbs.
        </p>
      </div>

      <div className="flex justify-end pt-4">
        <NextButton onClick={onNext} />
      </div>
    </div>
  );
};

const LessonSection = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Introduction */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
            <MessageCircle size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">5. Lesson Development</h2>
        </div>
        <p className="text-slate-600">
          Sports activities are often done in groups. When talking with friends, it is common to suggest a sport to stay active. In English, <strong>how about</strong> and <strong>what about</strong> are frequent structures for this.
        </p>
      </section>

      {/* Vocabulary */}
      <section>
        <h3 className="text-lg font-semibold text-indigo-800 mb-4 border-l-4 border-indigo-500 pl-3">
          5.2 Key Vocabulary
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <VocabCard icon={<Activity />} word="Soccer" definition="Playing football" />
          <VocabCard icon={<Waves />} word="Swimming" definition="Moving in water" />
          <VocabCard icon={<Bike />} word="Cycling" definition="Riding a bicycle" />
          <VocabCard icon={<BrainCircuit />} word="Yoga" definition="Physical/mental practice" />
          <VocabCard icon={<PlayCircle />} word="Jogging" definition="Running at a slow pace" />
        </div>
      </section>

      {/* Grammar 1 */}
      <section className="bg-orange-50 p-6 rounded-xl border border-orange-100">
        <h3 className="text-lg font-bold text-orange-800 mb-2">
          5.3 Form 1: How about...?
        </h3>
        <p className="text-sm text-slate-700 mb-4">
          Used to propose an idea and ask for an opinion. It is informal and friendly.
        </p>
        
        <div className="bg-white p-4 rounded-lg border border-orange-200 shadow-sm mb-4">
          <code className="text-orange-600 font-bold text-lg block mb-2">
            How about + noun / verb-ing?
          </code>
          <p className="text-slate-600 italic">"How about joining a yoga class?"</p>
        </div>

        <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 ml-2">
          <li><strong>Noun:</strong> How about <span className="underline decoration-orange-300">soccer</span>?</li>
          <li><strong>Verb-ing:</strong> How about <span className="underline decoration-orange-300">swimming</span>?</li>
        </ul>
      </section>

      {/* Grammar 2 */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
        <h3 className="text-lg font-bold text-blue-800 mb-2">
          5.4 Form 2: What about...?
        </h3>
        <p className="text-sm text-slate-700 mb-4">
          Very similar to "How about". It proposes an activity in a friendly way without demanding an immediate decision.
        </p>

        <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm mb-4">
          <code className="text-blue-600 font-bold text-lg block mb-2">
            What about + noun / verb-ing?
          </code>
          <p className="text-slate-600 italic">"What about cycling after school?"</p>
        </div>
      </section>

      {/* Examples Grid */}
      <section>
        <h3 className="text-md font-semibold text-slate-500 uppercase tracking-wide mb-3">
          More Examples
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <ExampleBox text="How about soccer on Saturday morning?" />
          <ExampleBox text="How about swimming at the community pool?" />
          <ExampleBox text="What about jogging in the park?" />
          <ExampleBox text="What about joining a cycling group?" />
        </div>
      </section>

      <div className="flex justify-end pt-4">
        <NextButton onClick={onNext} />
      </div>
    </div>
  );
};

const PracticeSection = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="space-y-12 animate-fadeIn">
      
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-slate-800">6. Practice Exercises</h2>
        <p className="text-slate-500">Test your understanding of the vocabulary and grammar.</p>
      </div>

      {/* Exercise 1 */}
      <ExerciseBlock title="Exercise 1 – Vocabulary Recognition" level="Easy">
        <div className="space-y-4">
          <p className="text-sm text-slate-600 mb-4">Match the sport with the correct description.</p>
          <QuizQuestion 
            id="q1" 
            question="Which activity involves 'Running slowly for exercise'?" 
            options={[
              { label: 'Yoga', correct: false },
              { label: 'Jogging', correct: true },
              { label: 'Cycling', correct: false }
            ]} 
          />
           <QuizQuestion 
            id="q2" 
            question="Which activity involves 'Stretching and body control'?" 
            options={[
              { label: 'Yoga', correct: true },
              { label: 'Soccer', correct: false },
              { label: 'Swimming', correct: false }
            ]} 
          />
        </div>
      </ExerciseBlock>

      {/* Exercise 2 */}
      <ExerciseBlock title="Exercise 2 – Choose the Correct Form" level="Medium">
        <p className="text-sm text-slate-600 mb-4">
          Select a valid suggestion starter. (Note: In many cases, both are correct, but choose one to complete the sentence).
        </p>
        <div className="space-y-3">
          <FillInBlank 
            suffix="swimming after work?" 
            options={["How about", "I am"]} 
            correct="How about" 
          />
          <FillInBlank 
            suffix="jogging in the park?" 
            options={["What about", "Let's"]} 
            correct="What about" 
          />
        </div>
      </ExerciseBlock>

      {/* Exercise 3 */}
      <ExerciseBlock title="Exercise 3 – Make a Suggestion" level="Challenging">
        <p className="text-sm text-slate-600 mb-4">
          Use the words given to write a full suggestion sentence.
        </p>
        <div className="space-y-6">
          <WritingExercise 
            prompt="(cycling / afternoon)" 
            possibleAnswers={["How about cycling in the afternoon?", "What about cycling in the afternoon?", "How about cycling this afternoon?", "What about cycling this afternoon?"]}
            hint="Start with 'How about' or 'What about'..."
          />
          <WritingExercise 
            prompt="(yoga / after class)" 
            possibleAnswers={["How about yoga after class?", "What about yoga after class?", "How about doing yoga after class?", "What about doing yoga after class?"]}
            hint="Don't forget the question mark!"
          />
        </div>
      </ExerciseBlock>

      <div className="flex justify-end pt-4">
        <NextButton onClick={onNext} />
      </div>
    </div>
  );
};

const WrapUpSection = ({ onRestart }: { onRestart: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 py-10 animate-fadeIn">
      <div className="bg-green-100 p-6 rounded-full text-green-600">
        <CheckCircle2 size={64} />
      </div>
      
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Lesson Complete!</h2>
        <p className="text-lg text-slate-600 mb-6">
          In this lesson, you learned how to suggest sports interests in English using <strong>how about</strong> and <strong>what about</strong>.
        </p>
        <p className="text-slate-500 leading-relaxed">
          Along with basic sports vocabulary, these structures help you propose healthy activities and share interests in a natural, friendly, and collaborative way in everyday conversations.
        </p>
      </div>

      <button 
        onClick={onRestart}
        className="flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
      >
        <RotateCcw size={18} />
        Start Over
      </button>
    </div>
  );
};

// --- Helper Components ---

const TabButton = ({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
      active 
        ? 'bg-indigo-600 text-white shadow-md transform scale-105' 
        : 'bg-white text-slate-600 hover:bg-indigo-50 border border-transparent'
    }`}
  >
    {icon}
    <span className="font-medium text-sm">{label}</span>
  </button>
);

const NextButton = ({ onClick }: { onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="group flex items-center gap-2 px-6 py-2.5 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
  >
    Next Section
    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
  </button>
);

const VocabCard = ({ icon, word, definition }: { icon: React.ReactNode, word: string, definition: string }) => (
  <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all">
    <div className="text-indigo-500 mb-2 bg-white p-3 rounded-full shadow-sm">
      {React.cloneElement(icon as React.ReactElement, { size: 24 })}
    </div>
    <h4 className="font-bold text-slate-800">{word}</h4>
    <p className="text-xs text-slate-500 mt-1">{definition}</p>
  </div>
);

const ExampleBox = ({ text }: { text: string }) => (
  <div className="bg-slate-50 p-3 rounded-lg border-l-4 border-indigo-400 text-slate-700 text-sm">
    "{text}"
  </div>
);

const ExerciseBlock = ({ title, level, children }: { title: string, level: string, children: React.ReactNode }) => {
  const getLevelColor = () => {
    if (level === 'Easy') return 'bg-green-100 text-green-700 border-green-200';
    if (level === 'Medium') return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    return 'bg-red-100 text-red-700 border-red-200';
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
        <h3 className="font-bold text-slate-700">{title}</h3>
        <span className={`text-xs px-2 py-1 rounded-md border font-semibold ${getLevelColor()}`}>
          {level}
        </span>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

const QuizQuestion = ({ id, question, options }: { id: string, question: string, options: {label: string, correct: boolean}[] }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelect = (idx: number, correct: boolean) => {
    setSelected(idx);
    setIsCorrect(correct);
  };

  return (
    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
      <p className="font-medium text-slate-800 mb-3">{question}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt, idx