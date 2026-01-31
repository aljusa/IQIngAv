import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Lightbulb, 
  PenTool, 
  Edit3, 
  CheckCircle, 
  XCircle, 
  Volume2, 
  ArrowRight,
  Sparkles,
  BarChart,
  MessageSquare,
  Thermometer
} from 'lucide-react';

// --- Types & Interfaces ---

interface TabProps {
  label: string;
  icon: React.ReactNode;
  id: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

interface ExerciseState {
  [key: string]: string;
}

interface ValidationState {
  [key: string]: boolean | null; // true = correct, false = incorrect, null = unattempted
}

// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('rule');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-700">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-tight">Section 2: Daily Life & Opinions</h1>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Intensifier: REALLY + ADJECTIVE</p>
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="max-w-4xl mx-auto px-4 mt-4">
          <nav className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            <Tab 
              id="rule" 
              label="1. Core Rule" 
              icon={<Lightbulb size={18} />} 
              isActive={activeTab === 'rule'} 
              onClick={setActiveTab} 
            />
            <Tab 
              id="examples" 
              label="2. Examples" 
              icon={<Sparkles size={18} />} 
              isActive={activeTab === 'examples'} 
              onClick={setActiveTab} 
            />
            <Tab 
              id="exercises" 
              label="3. Exercises" 
              icon={<Edit3 size={18} />} 
              isActive={activeTab === 'exercises'} 
              onClick={setActiveTab} 
            />
            <Tab 
              id="write" 
              label="4. Write" 
              icon={<PenTool size={18} />} 
              isActive={activeTab === 'write'} 
              onClick={setActiveTab} 
            />
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-8 pb-24">
        <div className="transition-all duration-300 ease-in-out">
          {activeTab === 'rule' && <RuleSection />}
          {activeTab === 'examples' && <ExamplesSection />}
          {activeTab === 'exercises' && <ExercisesSection />}
          {activeTab === 'write' && <WriteSection />}
        </div>
      </main>
    </div>
  );
}

// --- Sub-Components ---

const Tab = ({ label, icon, id, isActive, onClick }: TabProps) => (
  <button
    onClick={() => onClick(id)}
    className={`
      flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-semibold transition-all whitespace-nowrap
      ${isActive 
        ? 'bg-indigo-600 text-white shadow-md transform scale-105' 
        : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'}
    `}
  >
    {icon}
    <span>{label}</span>
  </button>
);

// --- 1. Rule Section ---

const RuleSection = () => {
  const [intensity, setIntensity] = useState(0); // 0 = standard, 1 = really
  
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Definition Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100 flex items-center space-x-3">
          <Lightbulb className="text-indigo-600" />
          <h2 className="text-lg font-bold text-indigo-900">Concepto Principal</h2>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-lg text-slate-700">
            Usamos <span className="font-bold text-indigo-600 bg-indigo-50 px-1 rounded">really</span> antes de un adjetivo para <span className="italic">intensificar</span> una opinión personal.
          </p>
          <div className="flex items-start space-x-2 text-sm text-slate-500 bg-slate-50 p-3 rounded-lg">
            <MessageSquare size={16} className="mt-1 flex-shrink-0" />
            <p>Es muy común en el inglés hablado y escrito informal.</p>
          </div>
        </div>
      </div>

      {/* Interactive Structure Builder */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-1 shadow-lg">
        <div className="bg-white rounded-xl p-8 text-center">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Interactive Structure</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-2xl md:text-4xl font-black mb-8">
            <div className={`transition-all duration-500 transform ${intensity === 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-30 scale-75 translate-y-2 grayscale'}`}>
              <span className="text-indigo-600">REALLY</span>
            </div>
            <div className="text-slate-300">+</div>
            <div className="bg-slate-100 px-6 py-3 rounded-xl text-slate-800 shadow-inner">
              ADJECTIVE
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
             <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-500">INTENSITY LEVEL</span>
                <span className="text-xs font-bold text-indigo-600">{intensity === 0 ? 'STANDARD' : 'INTENSIFIED'}</span>
             </div>
             <input 
                type="range" 
                min="0" 
                max="1" 
                step="1"
                value={intensity}
                onChange={(e) => setIntensity(parseInt(e.target.value))}
                className="w-full h-4 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
             />
             <div className="mt-6 text-xl h-12 flex items-center justify-center">
                {intensity === 0 ? (
                    <span className="text-slate-500">"This movie is interesting."</span>
                ) : (
                    <span className="text-indigo-700 font-bold animate-pulse">"This movie is <span className="underline decoration-wavy">really</span> interesting!"</span>
                )}
             </div>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
        <h4 className="font-bold text-amber-800 flex items-center gap-2">
            <Thermometer size={18} />
            Nota útil
        </h4>
        <p className="text-amber-700 mt-1">
          <strong>Really</strong> no cambia la forma del adjetivo. Además, suele expresar una reacción más personal que <em>very</em>.
        </p>
      </div>
    </div>
  );
};

// --- 2. Examples Section ---

const ExamplesSection = () => {
  const examples = [
    { text: "This movie is really interesting.", type: "Opinion", emoji: "🍿" },
    { text: "I am really tired today.", type: "Physical State", emoji: "😫" },
    { text: "That idea is really good.", type: "Judgment", emoji: "💡" },
    { text: "The book is really boring.", type: "Opinion", emoji: "💤" }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Real-Life Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {examples.map((ex, idx) => (
          <div key={idx} className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all cursor-default">
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl bg-slate-50 p-3 rounded-full">{ex.emoji}</span>
              <span className="text-xs font-bold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full uppercase">
                {ex.type}
              </span>
            </div>
            <p className="text-lg font-medium text-slate-700 group-hover:text-indigo-900 transition-colors">
              {ex.text.split('really').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="font-bold text-indigo-600">really</span>}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-indigo-900 rounded-2xl p-6 text-white flex items-center justify-between shadow-xl">
        <div>
           <h3 className="font-bold text-lg">Pro Tip: Pronunciation</h3>
           <p className="text-indigo-200 mt-1">Stress the word "really" to emphasize your feeling.</p>
        </div>
        <Volume2 size={32} className="opacity-50" />
      </div>
    </div>
  );
};

// --- 3. Exercises Section ---

const ExercisesSection = () => {
  // State for Part A
  const [partA, setPartA] = useState<ExerciseState>({ q1: '', q2: '', q3: '', q4: '' });
  const [valA, setValA] = useState<ValidationState>({ q1: null, q2: null, q3: null, q4: null });

  // State for Part B
  const [partB, setPartB] = useState<ExerciseState>({ q1: '', q2: '', q3: '' });

  // State for Part C
  const [partC, setPartC] = useState<ExerciseState>({ q1: '', q2: '', q3: '' });
  const [valC, setValC] = useState<ValidationState>({ q1: null, q2: null, q3: null });

  const checkPartA = () => {
    const newVal = {
      q1: partA.q1.trim().toLowerCase() === 'really',
      q2: partA.q2.trim().toLowerCase() === 'really',
      q3: partA.q3.trim().toLowerCase() === 'really',
      q4: partA.q4.trim().toLowerCase() === 'really',
    };
    setValA(newVal);
  };

  const checkPartC = (key: string, correctFragment: string) => {
    const userAnswer = partC[key].toLowerCase();
    const isCorrect = userAnswer.includes('really') && userAnswer.includes(correctFragment);
    setValC(prev => ({ ...prev, [key]: isCorrect }));
  };

  return (
    <div className="space-y-12 animate-fadeIn pb-12">
      
      {/* Exercise A */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
           <h3 className="font-bold text-slate-800 flex items-center gap-2">
             <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">A</span>
             Fill in the blanks
           </h3>
           <p className="text-sm text-slate-500 mt-1">Completa las frases con "really" y un adjetivo si es necesario (Hint: just "really").</p>
        </div>
        <div className="p-6 space-y-4">
          {[
            { id: 'q1', text: 'I am ______ busy this week.' },
            { id: 'q2', text: 'This coffee is ______ strong.' },
            { id: 'q3', text: 'The exercise is ______ easy.' },
            { id: 'q4', text: 'My day was ______ long.' },
          ].map((q) => (
            <div key={q.id} className="flex items-center gap-3">
               {valA[q.id] === true && <CheckCircle size={20} className="text-green-500" />}
               {valA[q.id] === false && <XCircle size={20} className="text-red-500" />}
               {valA[q.id] === null && <div className="w-5" />}
               <p className="text-lg">
                 {q.text.split('______')[0]}
                 <input 
                   type="text" 
                   value={partA[q.id]}
                   onChange={(e) => setPartA({...partA, [q.id]: e.target.value})}
                   className="border-b-2 border-indigo-200 focus:border-indigo-600 outline-none px-2 py-1 w-24 text-center font-bold text-indigo-700 bg-indigo-50/50"
                   placeholder="..."
                 />
                 {q.text.split('______')[1]}
               </p>
            </div>
          ))}
          <button 
            onClick={checkPartA}
            className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Check Answers
          </button>
        </div>
      </section>

      {/* Exercise B */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
           <h3 className="font-bold text-slate-800 flex items-center gap-2">
             <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">B</span>
             Choose the correct option
           </h3>
           <p className="text-sm text-slate-500 mt-1">Elige la mejor opción para intensificar.</p>
        </div>
        <div className="p-6 space-y-6">
          {[
            { id: 'q1', q: 'I am _____ hungry right now.', options: ['really', 'very'] },
            { id: 'q2', q: 'This plan sounds _____ exciting.', options: ['really', 'very'] },
            { id: 'q3', q: 'The explanation is _____ clear.', options: ['really', 'very'] },
          ].map((item) => (
            <div key={item.id} className="space-y-2">
              <p className="font-medium text-slate-700">{item.q.replace('_____', '...')}</p>
              <div className="flex gap-3">
                {item.options.map(opt => (
                  <button
                    key={opt}
                    onClick={() => setPartB({ ...partB, [item.id]: opt })}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      partB[item.id] === opt 
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' 
                        : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exercise C */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
           <h3 className="font-bold text-slate-800 flex items-center gap-2">
             <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">C</span>
             Transformation
           </h3>
           <p className="text-sm text-slate-500 mt-1">Reescribe la frase completa usando "really".</p>
        </div>
        <div className="p-6 space-y-6">
          {[
            { id: 'q1', original: 'The class is interesting.', keyPhrase: 'interesting' },
            { id: 'q2', original: 'I am tired today.', keyPhrase: 'tired' },
            { id: 'q3', original: 'This problem is difficult.', keyPhrase: 'difficult' },
          ].map((item) => (
            <div key={item.id} className="space-y-2">
              <p className="text-slate-500 italic text-sm">Original: "{item.original}"</p>
              <div className="flex gap-2">
                <input 
                   type="text" 
                   value={partC[item.id]}
                   onChange={(e) => setPartC({...partC, [item.id]: e.target.value})}
                   className={`flex-1 border rounded-lg px-4 py-2 outline-none transition-colors ${
                     valC[item.id] === true ? 'border-green-500 bg-green-50' : 
                     valC[item.id] === false ? 'border-red-500 bg-red-50' : 
                     'border-slate-300 focus:border-indigo-500'
                   }`}
                   placeholder="Type the full sentence..."
                 />
                 <button 
                  onClick={() => checkPartC(item.id, item.keyPhrase)}
                  className="bg-indigo-100 text-indigo-700 p-2 rounded-lg hover:bg-indigo-200"
                 >
                   <ArrowRight size={20} />
                 </button>
              </div>
              {valC[item.id] === false && <p className="text-red-500 text-xs">Don't forget "really" and the adjective!</p>}
              {valC[item.id] === true && <p className="text-green-600 text-xs font-bold">Perfect!</p>}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

// --- 4. Write Section ---

const WriteSection = () => {
  const [text, setText] = useState('');
  
  const targetWords = ['busy', 'tired', 'happy', 'stressed', 'satisfied'];
  
  // Analyze text to find used words
  const usedWords = targetWords.filter(word => 
    text.toLowerCase().includes(word)
  );

  const hasReally = text.toLowerCase().includes('really');

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
      {/* Main Writing Area */}
      <div className="md:col-span-2 space-y-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
           <h2 className="text-xl font-bold text-slate-800 mb-2">My Daily Life</h2>
           <p className="text-slate-500 text-sm mb-4">
             Escribe 4 frases sobre tu vida diaria usando <strong>really + adjective</strong>.
           </p>
           
           <textarea 
             className="w-full h-64 p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none text-lg text-slate-700 leading-relaxed"
             placeholder="Example: I am really happy today because..."
             value={text}
             onChange={(e) => setText(e.target.value)}
           ></textarea>
           
           <div className="flex justify-between items-center mt-2 text-sm text-slate-400">
             <span>{text.length} chars</span>
             <span>{text.split(' ').filter(w => w.length > 0).length} words</span>
           </div>
        </div>
      </div>

      {/* Sidebar / Checklist */}
      <div className="space-y-4">
         <div className="bg-indigo-900 text-white p-6 rounded-2xl shadow-lg">
           <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
             <BarChart size={20} />
             Vocabulary Check
           </h3>
           
           <div className="space-y-3">
             <div className="flex items-center justify-between p-2 rounded bg-indigo-800/50">
                <span>Use 'really'</span>
                {hasReally ? <CheckCircle size={18} className="text-green-400" /> : <div className="w-4 h-4 rounded-full border border-indigo-400" />}
             </div>
             
             <div className="border-t border-indigo-700 my-2"></div>
             <p className="text-xs text-indigo-300 uppercase font-bold tracking-wider mb-2">Suggested Adjectives</p>
             
             {targetWords.map(word => {
               const isUsed = usedWords.includes(word);
               return (
                 <div key={word} className={`flex items-center justify-between p-2 rounded transition-colors ${isUsed ? 'bg-indigo-800 text-white' : 'text-indigo-300'}`}>
                    <span className="capitalize">{word}</span>
                    {isUsed && <CheckCircle size={16} className="text-green-400" />}
                 </div>
               );
             })}
           </div>
         </div>

         <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-amber-800 text-sm">
           <strong>Tip:</strong> Try to mix positive and negative feelings to practice different expressions!
         </div>
      </div>
    </div>
  );
};