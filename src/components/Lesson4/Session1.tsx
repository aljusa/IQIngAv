import React, { useState, useEffect } from 'react';
import { 
  Music, 
  Volume2, 
  Heart, 
  Mic2, 
  CheckCircle2, 
  XCircle, 
  Edit3, 
  Play, 
  Pause,
  BarChart3,
  BookOpen,
  ListMusic,
  PenTool
} from 'lucide-react';

// --- Types ---
type Tab = 'rule' | 'examples' | 'exercises';

// --- Components ---

const Header = () => (
  <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-xl shadow-lg">
    <div className="flex items-center gap-3">
      <Music className="w-8 h-8 animate-bounce" />
      <div>
        <h1 className="text-2xl font-bold tracking-tight">SECTION 1 – MUSIC & EMOTIONS</h1>
        <p className="text-indigo-100 text-sm">Intensifier: VERY + ADJECTIVE</p>
      </div>
    </div>
  </header>
);

const IntensityMeter = () => {
  const [level, setLevel] = useState(50);
  
  const getLabel = () => {
    if (level < 30) return "Soft";
    if (level < 70) return "Loud";
    return "Very Loud"; // Illustrating the concept
  };

  const getColor = () => {
    if (level < 30) return "bg-green-400";
    if (level < 70) return "bg-yellow-400";
    return "bg-red-500";
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100 my-4">
      <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
        <BarChart3 className="w-5 h-5 text-indigo-500" />
        Visualizing Intensity
      </h3>
      <div className="flex flex-col items-center gap-4">
        <div className={`text-2xl font-bold transition-all duration-300 ${level > 70 ? 'scale-110 text-red-500' : 'text-gray-600'}`}>
          {level > 70 ? `VERY ${getLabel().split(' ')[1] || 'Loud'}` : getLabel().replace('Very ', '')}
        </div>
        
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={level} 
          onChange={(e) => setLevel(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
        
        <div className="flex justify-between w-full text-xs text-gray-400 font-mono uppercase">
          <span>Base Adjective</span>
          <span>+ Very</span>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500 text-center italic">
        Drag the slider to see how "Very" intensifies the adjective.
      </p>
    </div>
  );
};

const RuleTab = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500">
      <h2 className="text-xl font-bold text-indigo-900 mb-2 flex items-center gap-2">
        <BookOpen className="w-5 h-5" />
        1️⃣ Core Rule
      </h2>
      <p className="text-indigo-800 mb-4 leading-relaxed">
        Usamos <strong>very</strong> antes de un adjetivo para intensificar su significado. 
        <br/>
        <em>Very makes the adjective stronger, but it does not change its form.</em>
      </p>
      
      <div className="bg-white p-4 rounded-lg shadow-sm font-mono text-center text-lg text-indigo-600 border border-indigo-100">
        very + adjective
      </div>

      <div className="mt-4 flex gap-2 items-start text-sm text-red-500 bg-red-50 p-3 rounded-lg">
        <XCircle className="w-5 h-5 shrink-0" />
        <p><strong>Caution:</strong> Very no se usa con verbos ni con sustantivos (nouns). <br/>Don't say: <em>Very emotion</em>.</p>
      </div>
    </div>

    <IntensityMeter />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-green-50 p-4 rounded-xl border border-green-200">
        <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          Correct
        </h3>
        <ul className="space-y-2 text-green-700">
          <li>✅ Very emotional</li>
          <li>✅ Very happy</li>
          <li>✅ Very slow</li>
        </ul>
      </div>
      <div className="bg-red-50 p-4 rounded-xl border border-red-200">
        <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2">
          <XCircle className="w-4 h-4" />
          Incorrect
        </h3>
        <ul className="space-y-2 text-red-700">
          <li>❌ Very emotion (Noun)</li>
          <li>❌ Very happiness (Noun)</li>
          <li>❌ Very slowing (Verb form)</li>
        </ul>
      </div>
    </div>
  </div>
);

const ExampleCard = ({ icon: Icon, text, adjective, color }: { icon: any, text: string, adjective: string, color: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden group p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${isPlaying ? 'border-indigo-500 bg-indigo-50 scale-[1.02]' : 'border-gray-100 bg-white'}`}
      onClick={() => {
        setIsPlaying(true);
        setTimeout(() => setIsPlaying(false), 1500);
      }}
    >
      <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}>
        <Icon className="w-24 h-24" />
      </div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <button className={`p-2 rounded-full ${isPlaying ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Example</span>
          </div>
          <p className="text-lg text-gray-700 font-medium">"{text}"</p>
        </div>
        
        <div className="mt-4">
          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold">
            very {adjective}
          </span>
        </div>
      </div>
    </div>
  );
};

const ExamplesTab = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        <ListMusic className="w-5 h-5 text-indigo-600" />
        2️⃣ Examples in Context
      </h2>
      <span className="text-sm text-gray-500">Click cards to simulate listening</span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ExampleCard 
        icon={Heart}
        text="This song is very emotional."
        adjective="emotional"
        color="text-pink-500"
      />
      <ExampleCard 
        icon={Volume2}
        text="The melody is very slow."
        adjective="slow"
        color="text-blue-500"
      />
      <ExampleCard 
        icon={Music}
        text="I feel very happy when I hear this music."
        adjective="happy"
        color="text-yellow-500"
      />
      <ExampleCard 
        icon={Mic2}
        text="The lyrics are very sad."
        adjective="sad"
        color="text-purple-500"
      />
    </div>

    <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3">
      <div className="bg-blue-200 p-2 rounded-full text-blue-700">
        <Edit3 className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-bold text-blue-900">Nota Útil</h4>
        <p className="text-blue-800 text-sm">
          Remember: "Emotion" is a noun (sustantivo). "Emotional" is an adjective.
          <br />
          Always use <strong>Very Emotional</strong>, never <span className="line-through opacity-70">Very Emotion</span>.
        </p>
      </div>
    </div>
  </div>
);

const ExercisesTab = () => {
  // State for Part A
  const [partA, setPartA] = useState({ 0: '', 1: '', 2: '', 3: '' });
  const [partAChecked, setPartAChecked] = useState(false);
  
  // State for Part B
  const [partB, setPartB] = useState({ 0: null, 1: null, 2: null } as Record<number, string | null>);
  
  // State for Part C
  const [partC, setPartC] = useState({ 0: '', 1: '', 2: '' });
  const [partCChecked, setPartCChecked] = useState(false);

  // State for Part D
  const [partD, setPartD] = useState('');

  const questionsA = [
    { text: "This old song is ______ beautiful.", answer: "very" },
    { text: "The singer’s voice is ______ soft.", answer: "very" },
    { text: "I am ______ relaxed when I listen to jazz.", answer: "very" },
    { text: "The lyrics are ______ meaningful.", answer: "very" },
  ];

  const questionsB = [
    { q: "The song is ______ popular.", options: ["very", "very much"], answer: "very" },
    { q: "I feel ______ calm.", options: ["very", "very much"], answer: "very" },
    { q: "This melody is ______ simple.", options: ["very", "very much"], answer: "very" },
  ];

  const questionsC = [
    { original: "The song is emotional.", answer: "The song is very emotional." },
    { original: "I am happy today.", answer: "I am very happy today." },
    { original: "The music is slow.", answer: "The music is very slow." },
  ];

  const checkPartA = () => setPartAChecked(true);
  const checkPartC = () => setPartCChecked(true);

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      
      {/* Exercise A */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-lg text-gray-800 mb-4 border-b pb-2">A. Fill in the blanks</h3>
        <p className="text-sm text-gray-500 mb-4">Completa las frases con "very".</p>
        <div className="space-y-3">
          {questionsA.map((q, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-700">
              <span>{idx + 1}. {q.text.split('______')[0]}</span>
              <input 
                type="text" 
                className={`border-b-2 px-2 py-1 w-20 text-center outline-none transition-colors ${
                  partAChecked 
                    ? (partA[idx as keyof typeof partA].toLowerCase().trim() === 'very' ? 'border-green-500 text-green-600 bg-green-50' : 'border-red-500 text-red-600 bg-red-50')
                    : 'border-indigo-200 focus:border-indigo-500'
                }`}
                value={partA[idx as keyof typeof partA]}
                onChange={(e) => setPartA({...partA, [idx]: e.target.value})}
                placeholder="..."
              />
              <span>{q.text.split('______')[1]}</span>
              {partAChecked && partA[idx as keyof typeof partA].toLowerCase().trim() === 'very' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
            </div>
          ))}
        </div>
        <button onClick={checkPartA} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">Check Answers</button>
      </section>

      {/* Exercise B */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-lg text-gray-800 mb-4 border-b pb-2">B. Choose the correct option</h3>
        <div className="space-y-4">
          {questionsB.map((q, idx) => (
            <div key={idx} className="p-3 bg-gray-50 rounded-lg">
              <p className="mb-2 text-gray-700">{q.q.replace('______', '...')}</p>
              <div className="flex gap-2">
                {q.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setPartB({...partB, [idx]: opt})}
                    className={`px-3 py-1 rounded-full text-sm border transition-all ${
                      partB[idx] === opt 
                        ? (opt === q.answer ? 'bg-green-100 border-green-500 text-green-800' : 'bg-red-100 border-red-500 text-red-800')
                        : 'bg-white border-gray-300 hover:border-indigo-400'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {partB[idx] && partB[idx] !== q.answer && <p className="text-xs text-red-500 mt-2">Try again! "Very much" is usually for verbs.</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Exercise C */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-lg text-gray-800 mb-4 border-b pb-2">C. Transform</h3>
        <p className="text-sm text-gray-500 mb-4">Reescribe la frase completa usando <strong>very</strong>.</p>
        <div className="space-y-4">
          {questionsC.map((q, idx) => (
            <div key={idx}>
              <p className="text-sm font-medium text-gray-600 mb-1">{q.original}</p>
              <input 
                type="text"
                placeholder="Type the full sentence..."
                className={`w-full p-2 rounded border ${
                  partCChecked
                   ? (partC[idx as keyof typeof partC].toLowerCase().trim().replace('.', '') === q.answer.toLowerCase().trim().replace('.', '') ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')
                   : 'border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500'
                }`}
                value={partC[idx as keyof typeof partC]}
                onChange={(e) => setPartC({...partC, [idx]: e.target.value})}
              />
              {partCChecked && (
                <p className="text-xs text-gray-500 mt-1">Correct answer: {q.answer}</p>
              )}
            </div>
          ))}
        </div>
        <button onClick={checkPartC} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">Check Transformations</button>
      </section>

      {/* Exercise D */}
      <section className="bg-indigo-50 p-6 rounded-xl border-dashed border-2 border-indigo-200">
        <h3 className="font-bold text-lg text-indigo-900 mb-4 flex items-center gap-2">
          <PenTool className="w-5 h-5" />
          D. Write
        </h3>
        <p className="text-sm text-indigo-800 mb-3">Escribe 3 frases sobre música que te guste usando <strong>very + adjective</strong>.</p>
        <div className="flex gap-2 flex-wrap mb-4">
          {['happy', 'sad', 'relaxing', 'powerful', 'beautiful'].map(word => (
            <span key={word} className="text-xs bg-white px-2 py-1 rounded border border-indigo-100 text-indigo-600">{word}</span>
          ))}
        </div>
        <textarea 
          className="w-full h-32 p-4 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-300 outline-none resize-none"
          placeholder="Example: I like pop music because it is very energetic..."
          value={partD}
          onChange={(e) => setPartD(e.target.value)}
        ></textarea>
        {partD.length > 10 && (
          <p className="mt-2 text-sm text-green-600 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> Great writing practice!
          </p>
        )}
      </section>
    </div>
  );
};

// --- Main App Component ---

export default function MusicLessonApp() {
  const [activeTab, setActiveTab] = useState<Tab>('rule');

  const tabs = [
    { id: 'rule', label: '1. Rule', icon: BookOpen },
    { id: 'examples', label: '2. Examples', icon: ListMusic },
    { id: 'exercises', label: '3. Exercises', icon: Edit3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
        
        <Header />

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-100 bg-white sticky top-0 z-20">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-colors relative
                  ${isActive ? 'text-indigo-600 bg-indigo-50/50' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}
                `}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'animate-pulse' : ''}`} />
                {tab.label}
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-t-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-white/50">
          {activeTab === 'rule' && <RuleTab />}
          {activeTab === 'examples' && <ExamplesTab />}
          {activeTab === 'exercises' && <ExercisesTab />}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center text-xs text-gray-400 border-t border-gray-100">
          English Learning Module • Music & Emotions
        </div>

      </div>
    </div>
  );
}