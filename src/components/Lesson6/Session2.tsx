import React, { useState } from 'react';
import { 
  BookOpen, 
  Target, 
  LifeBuoy, 
  AlertTriangle, 
  CheckCircle, 
  HelpCircle, 
  ChevronRight, 
  Droplets,
  ShieldCheck,
  Brain,
  Info
} from 'lucide-react';

// --- Types ---

type TabId = 'overview' | 'theory' | 'practice' | 'wrapup';

interface QuestionEx1 {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuestionEx2 {
  id: number;
  questionPart1: string;
  questionPart2: string;
  correctAnswer: string;
}

interface QuestionEx3 {
  id: number;
  prompt: string;
  suggestedAnswer: string;
}

// --- Data ---

const ex1Data: QuestionEx1[] = [
  { id: 1, question: "___ we have to follow the pool rules?", options: ["Don't", "Doesn't"], correctAnswer: "Don't" },
  { id: 2, question: "___ it dangerous to dive here?", options: ["Isn't", "Don't"], correctAnswer: "Isn't" },
  { id: 3, question: "___ children supposed to wear life jackets?", options: ["Aren't", "Doesn't"], correctAnswer: "Aren't" },
];

const ex2Data: QuestionEx2[] = [
  { id: 1, questionPart1: "", questionPart2: " we supposed to walk near the pool?", correctAnswer: "aren't" },
  { id: 2, questionPart1: "", questionPart2: " he have to listen to the lifeguard?", correctAnswer: "doesn't" },
  { id: 3, questionPart1: "", questionPart2: " it risky to swim alone?", correctAnswer: "isn't" },
  { id: 4, questionPart1: "", questionPart2: " they have to follow the beach rules?", correctAnswer: "don't" },
];

const ex3Data: QuestionEx3[] = [
  { id: 1, prompt: "People have to wear a life jacket.", suggestedAnswer: "Don't people have to wear a life jacket?" },
  { id: 2, prompt: "Running near the pool is dangerous.", suggestedAnswer: "Isn't it dangerous to run near the pool?" },
  { id: 3, prompt: "Children are supposed to stay close to the lifeguard.", suggestedAnswer: "Aren't children supposed to stay close to the lifeguard?" },
];

// --- Components ---

const WaterSafetyApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  // Navigation Handler
  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header / Hero */}
      <header className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-2 opacity-90">
            <LifeBuoy className="w-6 h-6" />
            <span className="text-sm font-semibold tracking-wider uppercase">English Lesson</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Water Safety and Rules</h1>
          <p className="text-cyan-100 text-lg">Grammar Focus: Confirming rules using negative questions</p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        
        {/* Navigation Tabs */}
        <nav className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-1">
          <TabButton 
            active={activeTab === 'overview'} 
            onClick={() => handleTabChange('overview')} 
            icon={<Info size={18} />} 
            label="Overview" 
          />
          <TabButton 
            active={activeTab === 'theory'} 
            onClick={() => handleTabChange('theory')} 
            icon={<BookOpen size={18} />} 
            label="Theory & Grammar" 
          />
          <TabButton 
            active={activeTab === 'practice'} 
            onClick={() => handleTabChange('practice')} 
            icon={<Brain size={18} />} 
            label="Practice" 
          />
          <TabButton 
            active={activeTab === 'wrapup'} 
            onClick={() => handleTabChange('wrapup')} 
            icon={<CheckCircle size={18} />} 
            label="Wrap-Up" 
          />
        </nav>

        {/* Tab Panels */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 min-h-[500px]">
          {activeTab === 'overview' && <OverviewSection />}
          {activeTab === 'theory' && <TheorySection />}
          {activeTab === 'practice' && <PracticeSection />}
          {activeTab === 'wrapup' && <WrapUpSection />}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-slate-400 py-8 text-sm">
        <p>© 2024 Interactive English Lessons. Safety First.</p>
      </footer>
    </div>
  );
};

// --- Sub-Components ---

const TabButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-3 rounded-t-lg transition-all duration-200 font-medium ${
      active
        ? 'bg-white text-blue-600 border-b-2 border-blue-600 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]'
        : 'text-slate-500 hover:text-blue-500 hover:bg-blue-50'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
    {children}
  </h2>
);

const Card: React.FC<{ title: string; icon?: React.ReactNode; children: React.ReactNode; className?: string }> = ({ title, icon, children, className = "" }) => (
  <div className={`bg-slate-50 rounded-xl p-5 border border-slate-200 ${className}`}>
    <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-slate-700">
      {icon}
      {title}
    </h3>
    <div className="text-slate-600 leading-relaxed">
      {children}
    </div>
  </div>
);

// --- Sections ---

const OverviewSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <SectionTitle><Target className="text-blue-500" /> Lesson Overview</SectionTitle>
      
      <p className="text-lg text-slate-600">
        This lesson focuses on the use of <strong>negative questions</strong> in English to confirm safety rules and norms in aquatic environments such as swimming pools, beaches, and water parks.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Learning Objectives" icon={<CheckCircle className="text-green-500 w-5 h-5" />}>
          <ul className="space-y-2 list-disc list-inside">
            <li>Recognize negative questions used to confirm rules.</li>
            <li>Understand the communicative intention.</li>
            <li>Distinguish between negative questions with <em>do/does</em> and <em>be</em>.</li>
            <li>Interpret examples related to water safety.</li>
          </ul>
        </Card>

        <Card title="Prerequisites" icon={<Brain className="text-purple-500 w-5 h-5" />}>
          <ul className="space-y-2 list-disc list-inside">
            <li>Basic knowledge of Simple Present tense.</li>
            <li>Familiarity with modals like <em>have to</em>.</li>
            <li>Recognition of the verb <em>to be</em> (is, are).</li>
          </ul>
        </Card>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
        <h4 className="font-bold text-blue-800 mb-1">Context: Water Safety</h4>
        <p className="text-blue-700">
          We will learn how to express expectations and reinforce safe behavior to prevent accidents in aquatic environments.
        </p>
      </div>
    </div>
  );
};

const TheorySection: React.FC = () => {
  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Introduction */}
      <section>
        <SectionTitle><Droplets className="text-cyan-500" /> Why Use Negative Questions?</SectionTitle>
        <p className="mb-4 text-slate-600">
          In safety contexts, speakers use negative questions not to ask for new information, but to <strong>confirm</strong> something they believe is true or logical.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 bg-green-50 p-4 rounded-lg border border-green-100">
                <span className="font-bold text-green-700 block mb-2">Speaker Expects Agreement</span>
                <p className="text-sm text-green-800">"I think this is the rule, and I expect you to agree."</p>
            </div>
            <div className="flex-1 bg-amber-50 p-4 rounded-lg border border-amber-100">
                <span className="font-bold text-amber-700 block mb-2">Softening a Warning</span>
                <p className="text-sm text-amber-800">It sounds more cooperative than a direct order like "Don't run!"</p>
            </div>
        </div>
      </section>

      {/* Structure 1 */}
      <section className="border-t border-slate-200 pt-8">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">A</span>
          With Do / Does (Simple Present)
        </h3>
        
        <div className="bg-slate-800 text-slate-200 p-4 rounded-lg font-mono text-sm md:text-base mb-4 shadow-inner">
            <span className="text-pink-400">Don’t / Doesn’t</span> + <span className="text-cyan-400">subject</span> + <span className="text-yellow-400">base verb</span> ... ?
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            <div>
                <h4 className="font-semibold mb-2 text-slate-700">Key Points:</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                    <li><strong>Don't</strong> → I, you, we, they</li>
                    <li><strong>Doesn't</strong> → he, she, it</li>
                    <li>Main verb stays in <strong>base form</strong> (e.g., <em>wear</em>, not <em>wears</em>).</li>
                </ul>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2 text-slate-700">Example:</h4>
                <p className="text-lg text-slate-800 mb-1">"<strong>Don’t</strong> we <strong>have to</strong> wear a life jacket?"</p>
                <p className="text-sm text-slate-500 italic">→ The speaker expects this rule to exist and be known.</p>
            </div>
        </div>
      </section>

      {/* Structure 2 */}
      <section className="border-t border-slate-200 pt-8">
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">B</span>
          With Verb "To Be"
        </h3>

        <div className="bg-slate-800 text-slate-200 p-4 rounded-lg font-mono text-sm md:text-base mb-4 shadow-inner">
            <span className="text-pink-400">Isn’t / Aren’t</span> + <span className="text-cyan-400">subject</span> ... ?
        </div>

        <p className="text-slate-600 mb-4">Used when referring to a <strong>condition, situation, or state</strong>.</p>

        <div className="bg-white border-l-4 border-red-400 p-4 rounded-r shadow-sm">
            <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-500 mt-1 shrink-0" />
                <div>
                    <p className="text-lg font-medium text-slate-800">"<strong>Isn’t</strong> it dangerous to run near the pool?"</p>
                    <p className="text-slate-500 italic text-sm mt-1">→ Confirming an obvious warning.</p>
                </div>
            </div>
        </div>
        <div className="bg-white border-l-4 border-blue-400 p-4 rounded-r shadow-sm mt-4">
             <div className="flex items-start gap-3">
                <ShieldCheck className="text-blue-500 mt-1 shrink-0" />
                <div>
                    <p className="text-lg font-medium text-slate-800">"<strong>Aren’t</strong> children supposed to stay near the lifeguard?"</p>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

const PracticeSection: React.FC = () => {
  const [ex1Answers, setEx1Answers] = useState<Record<number, string>>({});
  const [ex2Answers, setEx2Answers] = useState<Record<number, string>>({});
  const [showEx3Answers, setShowEx3Answers] = useState<boolean>(false);

  const handleEx1Select = (id: number, option: string) => {
    setEx1Answers(prev => ({ ...prev, [id]: option }));
  };

  const handleEx2Change = (id: number, value: string) => {
    setEx2Answers(prev => ({ ...prev, [id]: value }));
  };

  const checkEx2 = (id: number) => {
    const userVal = ex2Answers[id]?.trim().toLowerCase();
    const correctVal = ex2Data.find(q => q.id === id)?.correctAnswer.toLowerCase();
    
    if (!userVal) return null;
    return userVal === correctVal ? 'correct' : 'incorrect';
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      <SectionTitle><Brain className="text-purple-500" /> Practice Exercises</SectionTitle>

      {/* Exercise 1 */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold uppercase">Easy</span>
            <h3 className="font-bold text-lg">Exercise 1: Identify the Structure</h3>
        </div>
        <p className="text-slate-500 mb-6">Choose the correct option to complete the negative question.</p>

        <div className="space-y-6">
          {ex1Data.map((q) => {
            const isCorrect = ex1Answers[q.id] === q.correctAnswer;
            const isSelected = !!ex1Answers[q.id];

            return (
              <div key={q.id} className="border-b border-slate-100 pb-4 last:border-0">
                <p className="font-medium text-lg mb-3">{q.question}</p>
                <div className="flex gap-3">
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => !isSelected && handleEx1Select(q.id, opt)}
                      disabled={isSelected}
                      className={`px-4 py-2 rounded-lg border transition-all ${
                        isSelected && opt === q.correctAnswer
                          ? 'bg-green-500 text-white border-green-600'
                          : isSelected && opt !== q.correctAnswer && ex1Answers[q.id] === opt
                          ? 'bg-red-500 text-white border-red-600'
                          : 'bg-white border-slate-300 hover:bg-slate-50'
                      } ${isSelected ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {isSelected && (
                  <p className={`text-sm mt-2 ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
                    {isCorrect ? 'Correct!' : `Incorrect. The answer is ${q.correctAnswer}.`}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-bold uppercase">Medium</span>
            <h3 className="font-bold text-lg">Exercise 2: Complete the Questions</h3>
        </div>
        <p className="text-slate-500 mb-6">Type <strong>don't, doesn't, isn't,</strong> or <strong>aren't</strong>.</p>

        <div className="space-y-4">
          {ex2Data.map((q) => {
            const status = checkEx2(q.id);
            return (
              <div key={q.id} className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="flex items-center gap-2 flex-1">
                    <span className="text-slate-400 font-mono w-6 text-right">{q.id}.</span>
                    <input
                        type="text"
                        className={`border rounded px-3 py-2 w-32 focus:outline-none focus:ring-2 ${
                            status === 'correct' ? 'border-green-500 bg-green-50 focus:ring-green-200' :
                            status === 'incorrect' ? 'border-red-500 bg-red-50 focus:ring-red-200' :
                            'border-slate-300 focus:ring-blue-200'
                        }`}
                        placeholder="..."
                        onChange={(e) => handleEx2Change(q.id, e.target.value)}
                        value={ex2Answers[q.id] || ''}
                    />
                    <span className="text-slate-700">{q.questionPart2}</span>
                </div>
                {status === 'correct' && <CheckCircle size={20} className="text-green-500" />}
                {status === 'incorrect' && <span className="text-xs text-red-500 font-medium">Try again (Hint: {q.correctAnswer})</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Exercise 3 */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold uppercase">Challenging</span>
            <h3 className="font-bold text-lg">Exercise 3: Communicative Practice</h3>
        </div>
        <p className="text-slate-500 mb-6">Rewrite each rule as a negative question to confirm the norm. Think about the answer, then check the model solution.</p>

        <div className="space-y-8">
            {ex3Data.map((q) => (
                <div key={q.id}>
                    <p className="font-medium text-slate-800 mb-2 border-l-4 border-slate-300 pl-3">Rule: "{q.prompt}"</p>
                    <textarea 
                        className="w-full border border-slate-300 rounded-lg p-3 text-slate-700 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none"
                        rows={2}
                        placeholder="Type your question here..."
                    ></textarea>
                    
                    <div className={`mt-3 transition-all duration-300 overflow-hidden ${showEx3Answers ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="bg-blue-50 text-blue-800 p-3 rounded-lg text-sm">
                            <strong>Model Answer:</strong> {q.suggestedAnswer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <button 
            onClick={() => setShowEx3Answers(!showEx3Answers)}
            className="mt-6 w-full py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium flex items-center justify-center gap-2"
        >
            {showEx3Answers ? 'Hide Answers' : 'Reveal Answers'}
        </button>
      </div>

    </div>
  );
};

const WrapUpSection: React.FC = () => {
  return (
    <div className="text-center space-y-8 py-10 animate-fadeIn">
      <div className="inline-flex items-center justify-center p-4 bg-green-100 text-green-600 rounded-full mb-4">
        <CheckCircle size={48} />
      </div>
      
      <h2 className="text-3xl font-bold text-slate-800">Lesson Complete!</h2>
      
      <div className="max-w-2xl mx-auto text-lg text-slate-600 space-y-4">
        <p>
          Great job! You've learned how to use <strong>negative questions</strong> to confirm rules and safety warnings in aquatic environments.
        </p>
        <p>
          Whether using <em>don't / doesn't</em> or <em>isn't / aren't</em>, these structures help you express clear expectations and promote responsible behavior without sounding too aggressive.
        </p>
      </div>

      <div className="grid grid-cols-2 max-w-lg mx-auto gap-4 mt-8">
        <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-700">Grammar</h4>
            <p className="text-sm text-blue-600">Negative Questions</p>
        </div>
        <div className="bg-cyan-50 p-4 rounded-lg">
            <h4 className="font-bold text-cyan-700">Context</h4>
            <p className="text-sm text-cyan-600">Water Safety</p>
        </div>
      </div>
      
      <button 
        onClick={() => window.location.reload()}
        className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl font-medium"
      >
        Restart Lesson
      </button>
    </div>
  );
};

export default WaterSafetyApp;