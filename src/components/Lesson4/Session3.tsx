import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Lightbulb, 
  PenTool, 
  CheckCircle2, 
  XCircle, 
  Smile, 
  Brain, 
  Heart, 
  Zap, 
  User, 
  ArrowRight,
  MessageCircle,
  RotateCcw
} from 'lucide-react';

// --- Types ---

type Tab = 'rules' | 'examples' | 'exercises';
type ExercisePart = 'A' | 'B' | 'C' | 'D';

interface ExerciseStatus {
  [key: string]: boolean | null; // null = unattempted, true = correct, false = incorrect
}

// --- Components ---

const App = () => {
  const [activeTab, setActiveTab] = useState<Tab>('rules');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2 opacity-90">
            <span className="uppercase tracking-wider text-xs font-bold bg-white/20 px-2 py-1 rounded">Section 3</span>
            <span className="text-sm font-medium">People & Personality</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            Very <span className="text-indigo-200 font-light italic">vs</span> Really
          </h1>
          <p className="text-indigo-100 max-w-xl">
            Learn how to intensify adjectives to describe personality traits with nuance and emotion.
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-10 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto flex overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('rules')}
            className={`flex-1 min-w-[120px] py-4 px-6 text-sm font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'rules' 
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' 
                : 'text-slate-500 hover:text-indigo-500 hover:bg-slate-50'
            }`}
          >
            <BookOpen size={18} /> Core Rule
          </button>
          <button
            onClick={() => setActiveTab('examples')}
            className={`flex-1 min-w-[120px] py-4 px-6 text-sm font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'examples' 
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' 
                : 'text-slate-500 hover:text-indigo-500 hover:bg-slate-50'
            }`}
          >
            <Lightbulb size={18} /> Examples
          </button>
          <button
            onClick={() => setActiveTab('exercises')}
            className={`flex-1 min-w-[120px] py-4 px-6 text-sm font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'exercises' 
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' 
                : 'text-slate-500 hover:text-indigo-500 hover:bg-slate-50'
            }`}
          >
            <PenTool size={18} /> Exercises
          </button>
        </div>
      </div>

      {/* Content Area */}
      <main className="max-w-4xl mx-auto p-6 pb-20">
        <div className="transition-all duration-300 ease-in-out">
          {activeTab === 'rules' && <RulesSection />}
          {activeTab === 'examples' && <ExamplesSection />}
          {activeTab === 'exercises' && <ExercisesSection />}
        </div>
      </main>
    </div>
  );
};

// --- Tab 1: Core Rules ---

const RulesSection = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Introduction Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-blue-200 transition-all">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <User size={100} className="text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
            Very
          </h2>
          <p className="text-slate-600 mb-4">
            Describes a quality in a standard, <strong>neutral</strong> way. It intensifies the adjective factually.
          </p>
          <div className="bg-blue-50 text-blue-800 p-3 rounded-lg text-sm font-medium border border-blue-100">
            "She is very intelligent." <br/>
            <span className="text-xs font-normal text-blue-600">(Fact-based observation)</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-pink-200 transition-all">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Heart size={100} className="text-pink-500" />
          </div>
          <h2 className="text-2xl font-bold text-pink-600 mb-4 flex items-center gap-2">
            Really
          </h2>
          <p className="text-slate-600 mb-4">
            Often expresses a more <strong>personal opinion</strong> or emotional connection to the trait.
          </p>
          <div className="bg-pink-50 text-pink-800 p-3 rounded-lg text-sm font-medium border border-pink-100">
            "She is really amazing!" <br/>
            <span className="text-xs font-normal text-pink-600">(Enthusiastic opinion)</span>
          </div>
        </div>
      </div>

      {/* The Structure Logic */}
      <div className="bg-indigo-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Zap className="text-yellow-400" /> The Golden Rule
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <span className="text-indigo-200 text-xs uppercase font-bold block mb-1">Intensifier</span>
              <span className="text-2xl font-bold text-white">Very / Really</span>
            </div>
            
            <ArrowRight className="text-white/50 hidden md:block" />
            <div className="rotate-90 md:rotate-0 text-white/50 block md:hidden">↓</div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <span className="text-indigo-200 text-xs uppercase font-bold block mb-1">Adjective</span>
              <span className="text-2xl font-bold text-white">Personality Trait</span>
            </div>
          </div>

          <p className="mt-6 text-center text-indigo-200 text-sm">
             Always place the intensifier <strong>before</strong> the adjective. Never after.
          </p>
        </div>
      </div>

      {/* Common Mistake Alert */}
      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
        <h4 className="font-bold text-red-700 flex items-center gap-2 mb-2">
          <XCircle size={20} /> Watch Out!
        </h4>
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <div className="flex items-center gap-2 text-red-600 line-through opacity-75">
            <span>She is kind very</span>
          </div>
          <ArrowRight className="text-slate-400 hidden sm:block" size={16} />
          <div className="flex items-center gap-2 text-green-700 font-bold bg-green-100 px-3 py-1 rounded-full w-fit">
            <CheckCircle2 size={16} />
            <span>She is very kind</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Tab 2: Examples ---

const ExamplesSection = () => {
  const examples = [
    { text: "She is very kind.", icon: <Heart className="text-red-500" />, focus: "very", trait: "kind", note: "Shows a high degree of kindness." },
    { text: "He is really funny.", icon: <Smile className="text-yellow-500" />, focus: "really", trait: "funny", note: "Emphasizes his humor personally." },
    { text: "My teacher is very patient.", icon: <Brain className="text-blue-500" />, focus: "very", trait: "patient", note: "A factual observation of patience." },
    { text: "That person is really confident.", icon: <Zap className="text-orange-500" />, focus: "really", trait: "confident", note: "Strong impression of confidence." },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {examples.map((ex, idx) => (
        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex items-start gap-4">
          <div className="bg-slate-50 p-3 rounded-full shrink-0">
            {ex.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">
              {ex.text.split(' ').map((word, i) => {
                const cleanWord = word.replace('.', '').toLowerCase();
                if (cleanWord === ex.focus) return <span key={i} className="text-indigo-600 underline decoration-2 underline-offset-2">{word} </span>;
                if (cleanWord === ex.trait) return <span key={i} className="text-slate-900 font-extrabold">{word} </span>;
                return <span key={i}>{word} </span>;
              })}
            </h3>
            <p className="text-sm text-slate-500 mt-2">{ex.note}</p>
            <div className="mt-3 flex gap-2">
              <span className="text-[10px] uppercase font-bold tracking-wider bg-indigo-50 text-indigo-700 px-2 py-1 rounded">Intensifier</span>
              <span className="text-[10px] uppercase font-bold tracking-wider bg-slate-100 text-slate-600 px-2 py-1 rounded">Adjective</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- Tab 3: Interactive Exercises ---

const ExercisesSection = () => {
  const [activePart, setActivePart] = useState<ExercisePart>('A');

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Sub-navigation for exercises */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm border border-slate-100 w-fit mx-auto">
        {(['A', 'B', 'C', 'D'] as ExercisePart[]).map((part) => (
          <button
            key={part}
            onClick={() => setActivePart(part)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              activePart === part 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            Exercise {part}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 min-h-[400px]">
        {activePart === 'A' && <ExerciseA />}
        {activePart === 'B' && <ExerciseB />}
        {activePart === 'C' && <ExerciseC />}
        {activePart === 'D' && <ExerciseD />}
      </div>
    </div>
  );
};

// Exercise A: Fill in the blanks
const ExerciseA = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    { id: 1, text: "My best friend is ____ honest.", correct: ["very", "really"] },
    { id: 2, text: "The new student is ____ shy.", correct: ["very", "really"] },
    { id: 3, text: "Our boss is ____ demanding.", correct: ["very", "really"] },
    { id: 4, text: "She is ____ friendly with everyone.", correct: ["very", "really"] },
  ];

  const handleSelect = (id: number, val: string) => {
    setAnswers(prev => ({ ...prev, [id]: val }));
    setShowResults(false);
  };

  const checkAnswers = () => setShowResults(true);

  return (
    <div className="max-w-xl mx-auto">
      <h3 className="text-xl font-bold mb-2">A. Fill in the blanks</h3>
      <p className="text-slate-500 mb-6">Complete the sentences. Note: Often both are grammatically correct, but try to mix them up!</p>

      <div className="space-y-4">
        {questions.map((q) => (
          <div key={q.id} className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className="font-medium text-slate-400 w-6">{q.id}.</span>
            <div className="flex-1 text-lg">
              {q.text.split('____')[0]}
              <select 
                className={`mx-2 p-1 rounded border-b-2 bg-transparent focus:outline-none ${
                  showResults && answers[q.id] 
                    ? 'border-green-500 text-green-700 font-bold' 
                    : 'border-indigo-300 text-indigo-600'
                }`}
                onChange={(e) => handleSelect(q.id, e.target.value)}
                value={answers[q.id] || ""}
              >
                <option value="" disabled>...</option>
                <option value="very">very</option>
                <option value="really">really</option>
              </select>
              {q.text.split('____')[1]}
            </div>
            {showResults && answers[q.id] && (
              <CheckCircle2 className="text-green-500 animate-in zoom-in" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <button 
          onClick={checkAnswers}
          disabled={Object.keys(answers).length < 4}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 disabled:opacity-50 disabled:shadow-none transition-all"
        >
          Check Answers
        </button>
      </div>
    </div>
  );
};

// Exercise B: Choose the correct option
const ExerciseB = () => {
  const [selected, setSelected] = useState<{ [key: number]: string }>({});

  const questions = [
    { id: 1, text: "He is _____ creative.", options: ["very", "really"], correct: "really", context: "Often sounds more natural for positive talent." },
    { id: 2, text: "My sister is _____ responsible.", options: ["very", "really"], correct: "very", context: "Responsibility is a factual trait." },
    { id: 3, text: "That actor is _____ talented.", options: ["very", "really"], correct: "really", context: "Expresses admiration." },
  ];

  // Note: While both are often correct, the exercise simulates "Most Natural" choice based on the 'neutral vs personal' rule.
  
  return (
    <div className="max-w-xl mx-auto">
      <h3 className="text-xl font-bold mb-2">B. Choose the natural option</h3>
      <p className="text-slate-500 mb-6">Select the option that sounds most natural based on the context (Neutral vs. Personal Opinion).</p>

      <div className="space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <p className="text-lg font-medium mb-4">{q.text.replace("_____", "__________")}</p>
            <div className="flex gap-4">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelected({ ...selected, [q.id]: opt })}
                  className={`flex-1 py-2 rounded-lg border-2 transition-all font-bold capitalize ${
                    selected[q.id] === opt
                      ? opt === q.correct || (selected[q.id] && q.correct) // Allow simple selection feedback
                        ? 'bg-indigo-100 border-indigo-500 text-indigo-700'
                        : 'bg-slate-200 border-slate-300'
                      : 'bg-white border-slate-200 hover:border-indigo-300 text-slate-600'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {selected[q.id] && (
               <div className={`mt-3 text-sm flex items-center gap-2 ${selected[q.id] === q.correct ? 'text-green-600' : 'text-slate-500'}`}>
                 {selected[q.id] === q.correct ? <CheckCircle2 size={16}/> : <span className="text-xs bg-slate-200 px-2 py-1 rounded">Alt</span>}
                 <span>{selected[q.id] === q.correct ? "Great choice!" : "Also possible, but '"+q.correct+"' fits the nuance better."}</span>
               </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Exercise C: Transform
const ExerciseC = () => {
  const [inputs, setInputs] = useState<{ [key: number]: string }>({});
  const [feedback, setFeedback] = useState<{ [key: number]: boolean | null }>({});

  const questions = [
    { id: 1, original: "She is kind.", prompt: "really", answer: "She is really kind." },
    { id: 2, original: "He is intelligent.", prompt: "very", answer: "He is very intelligent." },
    { id: 3, original: "They are friendly.", prompt: "really", answer: "They are really friendly." },
  ];

  const handleCheck = (id: number, correct: string) => {
    const userVal = inputs[id]?.trim().toLowerCase().replace(/\.$/, ''); // normalize
    const correctVal = correct.toLowerCase().replace(/\.$/, '');
    setFeedback(prev => ({ ...prev, [id]: userVal === correctVal }));
  };

  return (
    <div className="max-w-xl mx-auto">
      <h3 className="text-xl font-bold mb-2">C. Transform the sentences</h3>
      <p className="text-slate-500 mb-6">Rewrite the phrase using the indicated intensifier.</p>

      <div className="space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="relative">
            <label className="block text-sm font-bold text-slate-700 mb-1">
              {q.original} <span className="text-indigo-500">({q.prompt})</span>
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type full sentence..."
                className={`flex-1 p-3 rounded-lg border-2 focus:outline-none transition-colors ${
                  feedback[q.id] === true 
                    ? 'border-green-500 bg-green-50' 
                    : feedback[q.id] === false 
                    ? 'border-red-300 bg-red-50' 
                    : 'border-slate-200 focus:border-indigo-400'
                }`}
                onChange={(e) => {
                   setInputs({ ...inputs, [q.id]: e.target.value });
                   setFeedback({ ...feedback, [q.id]: null });
                }}
                value={inputs[q.id] || ''}
              />
              <button 
                onClick={() => handleCheck(q.id, q.answer)}
                className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700"
              >
                <ArrowRight size={20} />
              </button>
            </div>
            {feedback[q.id] === false && (
              <p className="text-red-500 text-sm mt-1">Try again! Remember: Subject + verb + intensifier + adjective.</p>
            )}
             {feedback[q.id] === true && (
              <p className="text-green-600 text-sm mt-1 font-bold">Correct!</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Exercise D: Writing
const ExerciseD = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    setWordCount(words.length);
  }, [text]);

  const keywords = ["kind", "shy", "confident", "funny", "patient", "creative"];

  return (
    <div className="max-w-xl mx-auto h-full flex flex-col">
      <h3 className="text-xl font-bold mb-2">D. Creative Writing</h3>
      <p className="text-slate-500 mb-4">Write 5 short sentences describing people you know using <strong>very</strong> or <strong>really</strong>.</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {keywords.map(word => (
           <span key={word} className={`text-xs px-2 py-1 rounded border ${text.includes(word) ? 'bg-green-100 border-green-300 text-green-700' : 'bg-slate-100 border-slate-200 text-slate-500'}`}>
             {word}
           </span>
        ))}
      </div>

      <textarea 
        className="w-full flex-1 min-h-[200px] p-4 rounded-xl border-2 border-slate-200 focus:border-indigo-400 focus:outline-none resize-none bg-slate-50 font-medium"
        placeholder="My brother is really funny. My teacher is very patient..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-slate-400">{wordCount} words</span>
        <button 
          onClick={() => setText("")} 
          className="text-slate-400 hover:text-red-500 flex items-center gap-1 text-sm"
        >
          <RotateCcw size={14} /> Clear
        </button>
      </div>
      
      {text.length > 10 && (
         <div className="mt-4 p-4 bg-indigo-50 text-indigo-800 rounded-lg flex items-start gap-3">
           <MessageCircle size={20} className="shrink-0 mt-1"/>
           <div>
             <p className="font-bold text-sm">Self Check:</p>
             <ul className="text-sm list-disc pl-4 mt-1 space-y-1">
               <li>Did you put "very" or "really" <strong>before</strong> the adjective?</li>
               <li>Did you avoid saying "kind very"?</li>
             </ul>
           </div>
         </div>
      )}
    </div>
  );
};

export default App;