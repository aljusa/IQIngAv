import React, { useState } from 'react';
import { BookOpen, LifeBuoy, CheckCircle, HelpCircle, ArrowRight, Anchor, Droplets, Trophy, ChevronRight } from 'lucide-react';

// --- Types ---

type Tab = 'overview' | 'lesson' | 'practice' | 'wrapup';

interface Exercise1State {
  q1: string;
  q2: string;
  q3: string;
}

interface Exercise2State {
  q1a: string; // Didn't
  q1b: string; // have
  q2a: string;
  q2b: string;
  q3a: string;
  q3b: string;
  q4a: string;
  q4b: string;
}

interface Exercise3State {
  q1: string;
  q2: string;
  q3: string;
}

// --- Main Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewSection onNext={() => setActiveTab('lesson')} />;
      case 'lesson': return <LessonSection onNext={() => setActiveTab('practice')} />;
      case 'practice': return <PracticeSection onNext={() => setActiveTab('wrapup')} />;
      case 'wrapup': return <WrapUpSection onRestart={() => setActiveTab('overview')} />;
      default: return <OverviewSection onNext={() => setActiveTab('lesson')} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <LifeBuoy className="w-8 h-8 opacity-90" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Past Experiences in the Water</h1>
              <p className="text-blue-100 text-sm md:text-base opacity-90">Grammar Focus: Negative Questions in the Simple Past</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="flex overflow-x-auto space-x-1 md:space-x-4 no-scrollbar">
            <TabButton 
              active={activeTab === 'overview'} 
              onClick={() => setActiveTab('overview')} 
              icon={<BookOpen size={18} />} 
              label="1. Overview" 
            />
            <TabButton 
              active={activeTab === 'lesson'} 
              onClick={() => setActiveTab('lesson')} 
              icon={<Anchor size={18} />} 
              label="2. The Lesson" 
            />
            <TabButton 
              active={activeTab === 'practice'} 
              onClick={() => setActiveTab('practice')} 
              icon={<CheckCircle size={18} />} 
              label="3. Practice" 
            />
            <TabButton 
              active={activeTab === 'wrapup'} 
              onClick={() => setActiveTab('wrapup')} 
              icon={<Trophy size={18} />} 
              label="4. Summary" 
            />
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow max-w-5xl mx-auto px-4 py-8 w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 min-h-[500px] overflow-hidden transition-all duration-300">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-400 py-6 text-center text-sm">
        <p>© 2024 English Learning Module | React + TypeScript</p>
      </footer>
    </div>
  );
}

// --- Sub-Components ---

const TabButton = ({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-4 border-b-2 transition-colors whitespace-nowrap focus:outline-none ${
      active
        ? 'border-blue-500 text-blue-600 font-semibold bg-blue-50/50'
        : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-6 border-b border-slate-100 pb-4">
    <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
    {subtitle && <p className="text-slate-500 mt-1">{subtitle}</p>}
  </div>
);

// --- Content Sections ---

const OverviewSection = ({ onNext }: { onNext: () => void }) => (
  <div className="p-6 md:p-10 animate-fade-in">
    <SectionTitle title="Lesson Description" subtitle="What we will cover today" />
    
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="prose text-slate-600">
          <p className="text-lg leading-relaxed">
            In this lesson, you will learn how to understand and use <strong className="text-blue-600">negative questions in the simple past</strong> to talk about past aquatic experiences, such as visiting water parks, swimming in lakes, or spending time at the beach.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4 rounded-r-md">
            <p className="italic text-blue-800">
              "Didn't you have fun at the pool?"
            </p>
            <p className="text-sm text-blue-600 mt-1">
              These questions are used when the speaker expects something happened and wants to confirm it.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-slate-800 mb-3 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Learning Objectives
          </h3>
          <ul className="list-disc list-inside space-y-2 text-slate-600 ml-2">
            <li>Recognize the structure of negative questions in the simple past.</li>
            <li>Understand the use of <strong>didn’t</strong> with all subjects.</li>
            <li>Interpret communicative meaning (surprise, confirmation).</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center">
          <BookOpen className="w-5 h-5 text-indigo-500 mr-2" /> Prerequisites
        </h3>
        <ul className="space-y-3">
          {[
            "Basic knowledge of the simple past tense.",
            "Familiarity with the auxiliary 'did' in questions.",
            "Verbs related to aquatic activities (swim, visit, go)."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start text-sm text-slate-600 bg-white p-3 rounded shadow-sm">
              <span className="bg-indigo-100 text-indigo-600 text-xs font-bold px-2 py-0.5 rounded mr-2 mt-0.5">REQ</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-10 flex justify-end">
      <button onClick={onNext} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-all shadow-md hover:shadow-lg">
        Start Lesson <ArrowRight className="ml-2 w-5 h-5" />
      </button>
    </div>
  </div>
);

const LessonSection = ({ onNext }: { onNext: () => void }) => (
  <div className="p-6 md:p-10 animate-fade-in">
    <SectionTitle title="5. Lesson Development" />

    <div className="space-y-10">
      {/* Context */}
      <section>
        <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
          <Droplets className="mr-2" /> 5.1 Context: Aquatic Memories
        </h3>
        <p className="text-slate-600 mb-4">
          People often talk about past experiences related to water: vacations, trips, or fun moments.
          To confirm these memories, English uses negative questions, especially when the speaker believes the experience 
          really happened or was important.
        </p>
      </section>

      {/* Grammar Structure */}
      <section className="bg-slate-900 text-white p-6 md:p-8 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <HelpCircle size={100} />
        </div>
        <h3 className="text-xl font-bold text-cyan-400 mb-4">5.3 Grammatical Structure</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
            <span className="text-2xl md:text-4xl font-mono font-bold text-yellow-400">Didn't</span>
            <span className="text-2xl md:text-3xl font-light text-slate-400">+</span>
            <span className="text-xl md:text-2xl font-mono bg-blue-600 px-3 py-1 rounded">Subject</span>
            <span className="text-2xl md:text-3xl font-light text-slate-400">+</span>
            <span className="text-xl md:text-2xl font-mono bg-green-600 px-3 py-1 rounded">Base Verb</span>
            <span className="text-2xl md:text-4xl font-bold text-pink-400">?</span>
        </div>

        <ul className="mt-6 space-y-2 text-slate-300 text-sm md:text-base">
          <li className="flex items-center"><ChevronRight size={16} className="text-cyan-400 mr-2" /> <strong>Didn't</strong> is used with ALL subjects (I, you, he, she, we, they).</li>
          <li className="flex items-center"><ChevronRight size={16} className="text-cyan-400 mr-2" /> The main verb is always in <strong>base form</strong> (e.g., "swim", not "swam").</li>
        </ul>
      </section>

      {/* Examples */}
      <section className="grid md:grid-cols-2 gap-6">
        <div>
           <h3 className="text-xl font-bold text-blue-800 mb-3">5.4 Examples</h3>
           <div className="space-y-3">
              {[
                { q: "Didn't you have fun at the water park?", m: "Speaker assumes it was fun." },
                { q: "Didn't they swim in the lake?", m: "Checking a fact." },
                { q: "Didn't she learn to swim last summer?", m: "Surprised she might not have." }
              ].map((ex, i) => (
                <div key={i} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold text-slate-800">{ex.q}</p>
                  <p className="text-sm text-slate-500 italic mt-1">{ex.m}</p>
                </div>
              ))}
           </div>
        </div>
        <div>
           <h3 className="text-xl font-bold text-blue-800 mb-3">5.5 Communicative Meaning</h3>
           <div className="bg-white border border-slate-200 p-5 rounded-lg h-full">
             <p className="mb-2 text-slate-600">These questions express:</p>
             <ul className="space-y-2">
               <li className="flex items-center p-2 bg-green-50 rounded text-green-800 text-sm">
                 <span className="font-bold mr-2">1.</span> Belief that the action happened.
               </li>
               <li className="flex items-center p-2 bg-orange-50 rounded text-orange-800 text-sm">
                 <span className="font-bold mr-2">2.</span> Expectation of a "Yes" answer.
               </li>
               <li className="flex items-center p-2 bg-purple-50 rounded text-purple-800 text-sm">
                 <span className="font-bold mr-2">3.</span> Surprise or emotional closeness.
               </li>
             </ul>
           </div>
        </div>
      </section>
    </div>

    <div className="mt-10 flex justify-end">
      <button onClick={onNext} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-all shadow-md">
        Go to Practice <ArrowRight className="ml-2 w-5 h-5" />
      </button>
    </div>
  </div>
);

const PracticeSection = ({ onNext }: { onNext: () => void }) => {
  const [ex1, setEx1] = useState<Exercise1State>({ q1: '', q2: '', q3: '' });
  const [ex1Check, setEx1Check] = useState<boolean>(false);

  const [ex2, setEx2] = useState<Exercise2State>({ q1a: '', q1b: '', q2a: '', q2b: '', q3a: '', q3b: '', q4a: '', q4b: '' });
  const [ex2Check, setEx2Check] = useState<boolean>(false);

  const [ex3, setEx3] = useState<Exercise3State>({ q1: '', q2: '', q3: '' });
  const [ex3Check, setEx3Check] = useState<boolean>(false);

  // Validation Helpers
  const checkEx1 = () => setEx1Check(true);
  const checkEx2 = () => setEx2Check(true);
  const checkEx3 = () => setEx3Check(true);

  const isCorrect = (val: string, correct: string) => val.trim().toLowerCase() === correct.toLowerCase();

  return (
    <div className="p-6 md:p-10 animate-fade-in bg-slate-50">
      <SectionTitle title="6. Practice Exercises" subtitle="Test your knowledge" />

      {/* Exercise 1 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-slate-800">Exercise 1: Identify the Structure</h3>
          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded uppercase">Easy</span>
        </div>
        <p className="mb-4 text-slate-600 text-sm">Choose the correct option.</p>
        
        <div className="space-y-4">
          <MCQ 
            question="1. ___ you swim in the lake last year?" 
            options={['Didn’t', 'Don’t']} 
            selected={ex1.q1} 
            correct="Didn’t"
            checked={ex1Check}
            onChange={(val) => setEx1({ ...ex1, q1: val })} 
          />
          <MCQ 
            question="2. ___ they visit the beach during the summer?" 
            options={['Didn’t', 'Doesn’t']} 
            selected={ex1.q2} 
            correct="Didn’t"
            checked={ex1Check}
            onChange={(val) => setEx1({ ...ex1, q2: val })} 
          />
          <MCQ 
            question="3. ___ she learn to swim as a child?" 
            options={['Didn’t', 'Isn’t']} 
            selected={ex1.q3} 
            correct="Didn’t"
            checked={ex1Check}
            onChange={(val) => setEx1({ ...ex1, q3: val })} 
          />
        </div>
        <div className="mt-4">
            {!ex1Check ? (
                <button onClick={checkEx1} className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded font-semibold hover:bg-blue-200 transition">Check Answers</button>
            ) : (
                <div className="text-sm font-bold text-slate-500">Completed</div>
            )}
        </div>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-slate-800">Exercise 2: Complete the Questions</h3>
          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded uppercase">Medium</span>
        </div>
        <p className="mb-4 text-slate-600 text-sm">Complete with <strong>didn't</strong> and the correct <strong>base verb</strong>.</p>
        
        <div className="space-y-3">
          <FillBlank 
             idx={1} 
             context="you" 
             end="fun at the pool? (have)" 
             vals={[ex2.q1a, ex2.q1b]} 
             corrects={['didn\'t', 'have']} 
             checked={ex2Check} 
             onChange={(a, b) => setEx2({...ex2, q1a: a, q1b: b})}
          />
           <FillBlank 
             idx={2} 
             context="they" 
             end="the water park? (visit)" 
             vals={[ex2.q2a, ex2.q2b]} 
             corrects={['didn\'t', 'visit']} 
             checked={ex2Check} 
             onChange={(a, b) => setEx2({...ex2, q2a: a, q2b: b})}
          />
           <FillBlank 
             idx={3} 
             context="he" 
             end="in the lake? (swim)" 
             vals={[ex2.q3a, ex2.q3b]} 
             corrects={['didn\'t', 'swim']} 
             checked={ex2Check} 
             onChange={(a, b) => setEx2({...ex2, q3a: a, q3b: b})}
          />
           <FillBlank 
             idx={4} 
             context="we" 
             end="to the beach together? (go)" 
             vals={[ex2.q4a, ex2.q4b]} 
             corrects={['didn\'t', 'go']} 
             checked={ex2Check} 
             onChange={(a, b) => setEx2({...ex2, q4a: a, q4b: b})}
          />
        </div>
        <div className="mt-4">
            {!ex2Check ? (
                <button onClick={checkEx2} className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded font-semibold hover:bg-blue-200 transition">Check Answers</button>
            ) : (
                <div className="text-sm font-bold text-slate-500">Completed</div>
            )}
        </div>
      </div>

       {/* Exercise 3 */}
       <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-slate-800">Exercise 3: Transformation</h3>
          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded uppercase">Hard</span>
        </div>
        <p className="mb-4 text-slate-600 text-sm">Rewrite as a <strong>negative question</strong>.</p>
        
        <div className="space-y-4">
            <Transformation 
                original="You had fun at the water park."
                placeholder="Didn't you..."
                value={ex3.q1}
                correct="Didn't you have fun at the water park?"
                checked={ex3Check}
                onChange={(val) => setEx3({...ex3, q1: val})}
            />
            <Transformation 
                original="She learned to swim last summer."
                placeholder="Didn't she..."
                value={ex3.q2}
                correct="Didn't she learn to swim last summer?"
                checked={ex3Check}
                onChange={(val) => setEx3({...ex3, q2: val})}
            />
             <Transformation 
                original="They swam in the lake."
                placeholder="Didn't they..."
                value={ex3.q3}
                correct="Didn't they swim in the lake?"
                checked={ex3Check}
                onChange={(val) => setEx3({...ex3, q3: val})}
            />
        </div>
        <div className="mt-4">
            {!ex3Check ? (
                <button onClick={checkEx3} className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded font-semibold hover:bg-blue-200 transition">Check Answers</button>
            ) : (
                <div className="text-sm font-bold text-slate-500">Completed</div>
            )}
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <button onClick={onNext} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-all shadow-md">
            Finish Lesson <Trophy className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const WrapUpSection = ({ onRestart }: { onRestart: () => void }) => (
  <div className="p-6 md:p-10 animate-fade-in text-center h-full flex flex-col justify-center items-center">
    <div className="bg-blue-100 p-6 rounded-full mb-6 animate-bounce-slow">
        <Trophy size={64} className="text-blue-600" />
    </div>
    
    <h2 className="text-3xl font-bold text-slate-800 mb-4">Lesson Complete!</h2>
    
    <div className="max-w-2xl text-slate-600 space-y-4 mb-8">
        <p>
            Congratulations! You've learned how to use <strong>Negative Questions in the Simple Past</strong>.
        </p>
        <p>
            You can now use structures like <em>"Didn't you swim?"</em> to confirm memories, express interest, and reinforce shared experiences about aquatic activities.
        </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mb-10">
        <div className="p-4 bg-white border border-slate-200 rounded shadow-sm">
            <h4 className="font-bold text-slate-700">Structure</h4>
            <p className="text-sm text-slate-500">Didn't + Subject + Base Verb</p>
        </div>
        <div className="p-4 bg-white border border-slate-200 rounded shadow-sm">
            <h4 className="font-bold text-slate-700">Context</h4>
            <p className="text-sm text-slate-500">Confirming past memories</p>
        </div>
        <div className="p-4 bg-white border border-slate-200 rounded shadow-sm">
            <h4 className="font-bold text-slate-700">Tone</h4>
            <p className="text-sm text-slate-500">Surprise & Interest</p>
        </div>
    </div>

    <button 
        onClick={onRestart} 
        className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold transition-all"
    >
        Restart Lesson
    </button>
  </div>
);

// --- Exercise Helper Components ---

const MCQ = ({ question, options, selected, correct, checked, onChange }: any) => {
    const isCorrect = selected === correct;
    
    return (
        <div className="p-3 bg-slate-50 rounded border border-slate-100">
            <p className="font-medium text-slate-800 mb-2">{question}</p>
            <div className="flex space-x-4">
                {options.map((opt: string) => {
                    let btnClass = "px-4 py-2 rounded border text-sm font-medium transition-colors ";
                    if (checked) {
                        if (opt === correct) btnClass += "bg-green-100 border-green-500 text-green-800";
                        else if (selected === opt) btnClass += "bg-red-100 border-red-500 text-red-800";
                        else btnClass += "bg-white border-slate-300 text-slate-400";
                    } else {
                        btnClass += selected === opt 
                            ? "bg-blue-600 border-blue-600 text-white" 
                            : "bg-white border-slate-300 text-slate-600 hover:bg-slate-100";
                    }

                    return (
                        <button key={opt} onClick={() => !checked && onChange(opt)} className={btnClass}>
                            {opt}
                        </button>
                    );
                })}
            </div>
            {checked && isCorrect && <span className="text-green-600 text-xs font-bold mt-2 block flex items-center"><CheckCircle size={12} className="mr-1"/> Correct</span>}
        </div>
    );
};

const FillBlank = ({ idx, context, end, vals, corrects, checked, onChange }: any) => {
    const isA_Correct = vals[0].trim().toLowerCase() === corrects[0].toLowerCase();
    const isB_Correct = vals[1].trim().toLowerCase() === corrects[1].toLowerCase();

    return (
        <div className="flex flex-wrap items-center gap-2 text-slate-700 text-base md:text-lg">
            <span className="font-bold text-slate-400 mr-2">{idx}.</span>
            
            <input 
                type="text" 
                value={vals[0]} 
                onChange={(e) => onChange(e.target.value, vals[1])}
                disabled={checked}
                className={`border-b-2 bg-transparent w-20 text-center focus:outline-none focus:border-blue-500 ${
                    checked ? (isA_Correct ? 'border-green-500 text-green-700' : 'border-red-500 text-red-700') : 'border-slate-300'
                }`}
                placeholder="_____"
            />
            
            <span>{context}</span>
            
            <input 
                type="text" 
                value={vals[1]} 
                onChange={(e) => onChange(vals[0], e.target.value)}
                disabled={checked}
                className={`border-b-2 bg-transparent w-24 text-center focus:outline-none focus:border-blue-500 ${
                    checked ? (isB_Correct ? 'border-green-500 text-green-700' : 'border-red-500 text-red-700') : 'border-slate-300'
                }`}
                placeholder="_____"
            />
            
            <span>{end}</span>
            {checked && (!isA_Correct || !isB_Correct) && (
                <span className="text-xs text-red-500 ml-2">({corrects[0]} / {corrects[1]})</span>
            )}
        </div>
    );
};

const Transformation = ({ original, placeholder, value, correct, checked, onChange }: any) => {
    // Normalize string for comparison (remove punctuation variance for better UX)
    const normalize = (s: string) => s.replace(/[?.]/g, '').trim().toLowerCase();
    const isCorrect = normalize(value) === normalize(correct);

    return (
        <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="text-sm text-slate-500 mb-1">Original: <span className="text-slate-700 italic">{original}</span></p>
            <div className="relative">
                <input 
                    type="text" 
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    disabled={checked}
                    placeholder={placeholder}
                    className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-200 focus:outline-none ${
                         checked 
                         ? (isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')
                         : 'border-slate-300'
                    }`}
                />
                {checked && isCorrect && <CheckCircle className="absolute right-3 top-2.5 text-green-500 w-5 h-5" />}
            </div>
            {checked && !isCorrect && (
                <p className="text-xs text-red-600 mt-1">Answer: {correct}</p>
            )}
        </div>
    )
}