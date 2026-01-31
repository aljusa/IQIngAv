import React, { useState } from 'react';
import { 
  BookOpen, 
  MessageCircle, 
  PenTool, 
  CheckCircle, 
  XCircle, 
  Coffee, 
  Car, 
  Calendar, 
  Home, 
  ArrowRight,
  Info,
  ChevronRight,
  Award
} from 'lucide-react';

// --- Types & Interfaces ---

type TabType = 'rules' | 'examples' | 'practice';

interface QuizState {
  fillIn: string[];
  transform: string[];
  multipleChoice: string[];
  writing: string;
}

// --- Components ---

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('rules');

  const renderContent = () => {
    switch (activeTab) {
      case 'rules':
        return <RulesSection />;
      case 'examples':
        return <ExamplesSection />;
      case 'practice':
        return <PracticeSection />;
      default:
        return <RulesSection />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <BookOpen className="w-8 h-8" />
            Planning a Weekend
          </h1>
          <p className="mt-2 text-indigo-100 text-lg">Expressing Preferences with "Would Prefer"</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 md:p-6">
        
        {/* Tabs Navigation */}
        <div className="flex flex-col sm:flex-row bg-white rounded-xl shadow-sm mb-8 overflow-hidden border border-slate-200">
          <TabButton 
            active={activeTab === 'rules'} 
            onClick={() => setActiveTab('rules')} 
            icon={<Info className="w-5 h-5" />}
            label="1. Core Rules"
          />
          <TabButton 
            active={activeTab === 'examples'} 
            onClick={() => setActiveTab('examples')} 
            icon={<MessageCircle className="w-5 h-5" />}
            label="2. Examples in Context"
          />
          <TabButton 
            active={activeTab === 'practice'} 
            onClick={() => setActiveTab('practice')} 
            icon={<PenTool className="w-5 h-5" />}
            label="3. Guided Practice"
          />
        </div>

        {/* Dynamic Content Area */}
        <div className="transition-all duration-300 ease-in-out">
          {renderContent()}
        </div>

      </main>
      
      {/* Footer */}
      <footer className="max-w-4xl mx-auto p-6 text-center text-slate-400 text-sm">
        <p>Interactive English Lesson • React + TypeScript</p>
      </footer>
    </div>
  );
};

// --- Sub-Components ---

const TabButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ 
  active, 
  onClick, 
  icon, 
  label 
}) => (
  <button
    onClick={onClick}
    className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 text-sm font-semibold transition-all duration-200
      ${active 
        ? 'bg-indigo-50 text-indigo-700 border-b-4 border-indigo-600' 
        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
      }`}
  >
    {icon}
    {label}
  </button>
);

// --- TAB 1: RULES SECTION ---

const RulesSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Intro Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-indigo-900 mb-4">The Core Concept</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">Would prefer</span> is used to express preferences, especially when comparing options or deciding what is best for a specific situation (like planning a weekend!).
        </p>
        <div className="mt-4 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm border-l-4 border-blue-500">
          It is more formal than "want" or "like" and is very common in planning contexts.
        </div>
      </div>

      {/* Structures Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <StructureCard 
          title="Preferring a Thing" 
          formula="Would prefer + noun" 
          example="I'd prefer the morning." 
        />
        <StructureCard 
          title="Preferring an Action" 
          formula="Would prefer + to + verb" 
          example="She'd prefer to stay home." 
        />
        <StructureCard 
          title="Comparison (Nouns)" 
          formula="Would prefer + noun + to + noun" 
          example="I'd prefer tea to coffee." 
        />
        <StructureCard 
          title="Comparison (Actions)" 
          formula="Would prefer + to + verb + rather than + verb" 
          example="We'd prefer to travel by train rather than drive." 
        />
      </div>

      {/* Warning/Note Section */}
      <div className="bg-red-50 border border-red-100 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
        <div className="bg-white p-3 rounded-full shadow-sm text-red-500">
          <Info className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-red-800 mb-2">Important Grammar Note</h3>
          <p className="text-red-700 mb-4">
            After <strong>would prefer</strong>, verbs are used in the <u>infinitive with 'to'</u>, never in the gerund (-ing).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-red-600 bg-white px-4 py-2 rounded border border-red-100">
              <XCircle className="w-5 h-5 flex-shrink-0" />
              <span className="line-through decoration-2">I'd prefer staying home</span>
            </div>
            <div className="flex items-center gap-2 text-green-700 bg-white px-4 py-2 rounded border border-green-100 shadow-sm">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="font-semibold">I'd prefer to stay home</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StructureCard: React.FC<{ title: string; formula: string; example: string }> = ({ title, formula, example }) => (
  <div className="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">{title}</h3>
    <div className="font-mono text-sm bg-slate-100 p-2 rounded mb-3 text-indigo-700">{formula}</div>
    <div className="flex items-start gap-2 text-slate-700 font-medium">
      <ArrowRight className="w-5 h-5 text-indigo-400 mt-0.5" />
      "{example}"
    </div>
  </div>
);

// --- TAB 2: EXAMPLES SECTION ---

const ExamplesSection: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Planning the Weekend</h2>
        <p className="text-slate-500">See how people use "would prefer" in real conversations.</p>
      </div>

      <div className="grid gap-4">
        <ExampleRow 
          icon={<Coffee className="w-6 h-6 text-amber-600" />}
          color="bg-amber-50 border-amber-100"
          speaker="Sarah"
          text="I've had a busy week. I'd prefer a quiet weekend."
        />
        <ExampleRow 
          icon={<Car className="w-6 h-6 text-blue-600" />}
          color="bg-blue-50 border-blue-100"
          speaker="Mike"
          text="The weather is nice! He'd prefer to go out on Saturday."
        />
        <ExampleRow 
          icon={<Calendar className="w-6 h-6 text-purple-600" />}
          color="bg-purple-50 border-purple-100"
          speaker="Planning Team"
          text="Saturday is busy. She'd prefer Sunday to Friday."
        />
        <ExampleRow 
          icon={<Home className="w-6 h-6 text-emerald-600" />}
          color="bg-emerald-50 border-emerald-100"
          speaker="The Family"
          text="We are exhausted. We'd prefer to rest rather than work."
        />
      </div>

      {/* Interactive Context Builder */}
      <div className="mt-12 bg-indigo-900 text-white rounded-2xl p-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-4">Why use it?</h3>
          <p className="max-w-lg mx-auto text-indigo-200">
            Using "would prefer" sounds polite and specific. It's perfect when you want to soften a refusal or suggest an alternative plan without saying a direct "No".
          </p>
        </div>
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-indigo-700 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-purple-700 rounded-full opacity-50 blur-2xl"></div>
      </div>
    </div>
  );
};

const ExampleRow: React.FC<{ icon: React.ReactNode; color: string; speaker: string; text: string }> = ({ 
  icon, color, speaker, text 
}) => {
  // Split text to highlight grammar
  const parts = text.split(/('d prefer|would prefer)/);

  return (
    <div className={`flex items-center gap-4 p-4 rounded-xl border ${color} transition-transform hover:scale-[1.01]`}>
      <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-wide opacity-60 mb-1">{speaker} says:</div>
        <p className="text-lg leading-snug">
          {parts.map((part, index) => (
            part.includes('prefer') 
              ? <span key={index} className="font-bold text-indigo-700 bg-white px-1 rounded shadow-sm mx-1">{part}</span>
              : <span key={index}>{part}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

// --- TAB 3: PRACTICE SECTION ---

const PracticeSection: React.FC = () => {
  const [answers, setAnswers] = useState<{
    a1: string; a2: string; a3: string; a4: string;
    b1: string; b2: string; b3: string;
    c1: string | null; c2: string | null;
    d1: string;
  }>({
    a1: '', a2: '', a3: '', a4: '',
    b1: '', b2: '', b3: '',
    c1: null, c2: null,
    d1: ''
  });

  const [feedback, setFeedback] = useState<{ [key: string]: boolean }>({});
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    setShowResults(false); 
  };

  const checkAnswers = () => {
    const newFeedback: { [key: string]: boolean } = {};
    
    // A. Fill in blanks logic
    // Accept "would prefer", "'d prefer", "would prefer to", etc based on context holes
    newFeedback.a1 = answers.a1.toLowerCase().includes('prefer') && !answers.a1.toLowerCase().includes('to'); // "would prefer" (to is in prompt)
    newFeedback.a2 = answers.a2.toLowerCase().includes('prefer'); // "would prefer"
    newFeedback.a3 = answers.a3.toLowerCase().includes('prefer'); // "would prefer"
    newFeedback.a4 = answers.a4.toLowerCase().includes('prefer'); // "would prefer"

    // B. Transform logic (Flexible matching)
    const b1Clean = answers.b1.toLowerCase();
    newFeedback.b1 = b1Clean.includes("would prefer") && b1Clean.includes("beach to") && b1Clean.includes("mountains");
    
    const b2Clean = answers.b2.toLowerCase();
    newFeedback.b2 = b2Clean.includes("prefer to stay") && b2Clean.includes("rather than");

    const b3Clean = answers.b3.toLowerCase();
    newFeedback.b3 = b3Clean.includes("prefer saturday to sunday");

    // C. Multiple Choice
    newFeedback.c1 = answers.c1 === 'b';
    newFeedback.c2 = answers.c2 === 'b';

    setFeedback(newFeedback);
    setShowResults(true);
  };

  return (
    <div className="space-y-12 animate-fade-in pb-12">
      
      {/* SECTION A */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-indigo-100 text-indigo-700 font-bold h-8 w-8 flex items-center justify-center rounded-full">A</div>
          <h3 className="text-xl font-bold">Fill in the blanks</h3>
        </div>
        <div className="space-y-4">
          <FillBlankInput 
            label="1. I __________ to meet in the morning." 
            value={answers.a1} 
            onChange={(v) => handleInputChange('a1', v)} 
            isCorrect={feedback.a1} 
            showResult={showResults}
            hint="Use: would prefer"
          />
          <FillBlankInput 
            label="2. She __________ tea to coffee." 
            value={answers.a2} 
            onChange={(v) => handleInputChange('a2', v)} 
            isCorrect={feedback.a2} 
            showResult={showResults}
             hint="Use: 'd prefer"
          />
          <FillBlankInput 
            label="3. We __________ a short trip this weekend." 
            value={answers.a3} 
            onChange={(v) => handleInputChange('a3', v)} 
            isCorrect={feedback.a3} 
            showResult={showResults}
             hint="Use: would prefer"
          />
          <FillBlankInput 
            label="4. He __________ to relax rather than go out." 
            value={answers.a4} 
            onChange={(v) => handleInputChange('a4', v)} 
            isCorrect={feedback.a4} 
            showResult={showResults}
             hint="Use: 'd prefer"
          />
        </div>
      </div>

      {/* SECTION B */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-indigo-100 text-indigo-700 font-bold h-8 w-8 flex items-center justify-center rounded-full">B</div>
          <h3 className="text-xl font-bold">Transform Sentences</h3>
        </div>
        <div className="space-y-6">
          <TransformInput 
            original="I like the beach more than the mountains."
            value={answers.b1}
            onChange={(v) => handleInputChange('b1', v)}
            isCorrect={feedback.b1}
            showResult={showResults}
            correctAnswer="I would prefer the beach to the mountains."
          />
          <TransformInput 
            original="She wants to stay home instead of going out."
            value={answers.b2}
            onChange={(v) => handleInputChange('b2', v)}
            isCorrect={feedback.b2}
            showResult={showResults}
            correctAnswer="She would prefer to stay home rather than go out."
          />
           <TransformInput 
            original="We like Saturday better than Sunday."
            value={answers.b3}
            onChange={(v) => handleInputChange('b3', v)}
            isCorrect={feedback.b3}
            showResult={showResults}
            correctAnswer="We would prefer Saturday to Sunday."
          />
        </div>
      </div>

      {/* SECTION C */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-indigo-100 text-indigo-700 font-bold h-8 w-8 flex items-center justify-center rounded-full">C</div>
          <h3 className="text-xl font-bold">Choose the correct option</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <MultipleChoice 
            question="I'd prefer ___ early."
            options={[
              { id: 'a', text: 'leave' },
              { id: 'b', text: 'to leave' }
            ]}
            selected={answers.c1}
            onSelect={(id) => handleInputChange('c1', id)}
            isCorrect={feedback.c1}
            showResult={showResults}
          />
          <MultipleChoice 
            question="She'd prefer pizza ___ burgers."
            options={[
              { id: 'a', text: 'than' },
              { id: 'b', text: 'to' }
            ]}
            selected={answers.c2}
            onSelect={(id) => handleInputChange('c2', id)}
            isCorrect={feedback.c2}
            showResult={showResults}
          />
        </div>
      </div>

      {/* ACTION BUTTON */}
      <div className="flex justify-center">
        <button 
          onClick={checkAnswers}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-12 rounded-full shadow-lg transform transition hover:-translate-y-1 active:translate-y-0"
        >
          Check Answers
        </button>
      </div>

      {/* SECTION D - Personal Production */}
      <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl shadow-xl mt-12">
        <div className="flex items-center gap-3 mb-4 text-white">
          <div className="bg-indigo-500 font-bold h-8 w-8 flex items-center justify-center rounded-full">D</div>
          <h3 className="text-xl font-bold">Your Weekend Plans</h3>
        </div>
        <p className="mb-4 text-slate-400">Write 3 sentences about your real weekend preferences using "would prefer".</p>
        <textarea 
          className="w-full h-32 bg-slate-800 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
          placeholder="Example: I'd prefer to sleep late on Saturday..."
          value={answers.d1}
          onChange={(e) => handleInputChange('d1', e.target.value)}
        />
        <div className="mt-4 flex gap-2 items-start">
          <Award className="w-5 h-5 text-yellow-500 mt-1" />
          <p className="text-sm">
            Self-Check: Did you use <strong>'d prefer + to + verb</strong>? Did you use <strong>to</strong> for comparing nouns?
          </p>
        </div>
      </div>

    </div>
  );
};

// --- Helper Components for Practice ---

const FillBlankInput: React.FC<{ 
  label: string; 
  value: string; 
  onChange: (v: string) => void; 
  isCorrect: boolean; 
  showResult: boolean;
  hint: string;
}> = ({ label, value, onChange, isCorrect, showResult, hint }) => {
  const parts = label.split('__________');
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
      <div className="text-lg text-slate-700">
        {parts[0]}
        <input 
          type="text" 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={hint}
          className={`mx-2 border-b-2 bg-slate-50 px-2 py-1 outline-none text-center font-medium transition-colors w-40
            ${showResult 
              ? (isCorrect ? 'border-green-500 text-green-700 bg-green-50' : 'border-red-500 text-red-700 bg-red-50') 
              : 'border-slate-300 focus:border-indigo-500'
            }`}
        />
        {parts[1]}
      </div>
      {showResult && !isCorrect && (
        <span className="text-xs text-red-500 font-medium animate-pulse">Try again!</span>
      )}
      {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
    </div>
  );
};

const TransformInput: React.FC<{
  original: string;
  value: string;
  onChange: (v: string) => void;
  isCorrect: boolean;
  showResult: boolean;
  correctAnswer: string;
}> = ({ original, value, onChange, isCorrect, showResult, correctAnswer }) => (
  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
    <p className="text-slate-500 text-sm italic mb-2">"{original}"</p>
    <div className="flex gap-2 items-center">
      <input 
        type="text" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type the transformed sentence..."
        className={`flex-1 p-2 rounded border outline-none transition-all
          ${showResult 
            ? (isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') 
            : 'border-slate-300 focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500'
          }`}
      />
      {showResult && isCorrect && <CheckCircle className="w-6 h-6 text-green-500" />}
      {showResult && !isCorrect && <XCircle className="w-6 h-6 text-red-500" />}
    </div>
    {showResult && !isCorrect && (
      <div className="mt-2 text-sm text-indigo-600 bg-indigo-50 p-2 rounded">
        <span className="font-bold">Answer:</span> {correctAnswer}
      </div>
    )}
  </div>
);

const MultipleChoice: React.FC<{
  question: string;
  options: { id: string; text: string }[];
  selected: string | null;
  onSelect: (id: string) => void;
  isCorrect: boolean;
  showResult: boolean;
}> = ({ question, options, selected, onSelect, isCorrect, showResult }) => (
  <div className={`p-5 rounded-xl border-2 transition-colors ${showResult && isCorrect ? 'border-green-100 bg-green-50' : 'border-transparent bg-slate-50'}`}>
    <h4 className="text-lg font-medium text-slate-800 mb-4">{question}</h4>
    <div className="space-y-2">
      {options.map((opt) => {
        const isSelected = selected === opt.id;
        let btnClass = "w-full text-left p-3 rounded-lg border transition-all ";
        
        if (showResult && isSelected) {
          btnClass += isCorrect 
            ? "bg-green-500 text-white border-green-600" 
            : "bg-red-500 text-white border-red-600";
        } else if (isSelected) {
          btnClass += "bg-indigo-600 text-white border-indigo-700";
        } else {
          btnClass += "bg-white text-slate-700 border-slate-200 hover:border-indigo-300";
        }

        return (
          <button 
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className={btnClass}
            disabled={showResult}
          >
            <div className="flex justify-between items-center">
              <span>{opt.text}</span>
              {showResult && isSelected && (isCorrect ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />)}
            </div>
          </button>
        );
      })}
    </div>
  </div>
);

export default App;