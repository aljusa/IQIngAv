import React, { useState } from 'react';
import { 
  Dumbbell, 
  Clock, 
  Footprints, 
  Coffee, 
  Activity, 
  Heart, 
  CheckCircle, 
  XCircle, 
  ChevronRight, 
  BookOpen,
  Edit3,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

// --- Types ---

type Tab = 'rule' | 'vocabulary' | 'examples' | 'practice';

interface VocabItem {
  word: string;
  translation: string;
  icon: React.ReactNode;
  example: string;
}

interface QuizQuestion {
  id: number;
  question: string;
  type: 'fill' | 'choice' | 'transform';
  options?: string[];
  correctAnswer: string | string[];
  hint?: string;
}

// --- Data ---

const vocabList: VocabItem[] = [
  { word: 'hours', translation: 'horas', icon: <Clock className="w-6 h-6" />, example: 'We have fewer hours of sunlight in winter.' },
  { word: 'exercises', translation: 'ejercicios', icon: <Dumbbell className="w-6 h-6" />, example: 'Do fewer exercises, but do them correctly.' },
  { word: 'steps', translation: 'pasos', icon: <Footprints className="w-6 h-6" />, example: 'Taking fewer steps can affect your health.' },
  { word: 'workouts', translation: 'entrenamientos', icon: <Activity className="w-6 h-6" />, example: 'He did fewer workouts this month.' },
  { word: 'breaks', translation: 'descansos', icon: <Coffee className="w-6 h-6" />, example: 'Try taking fewer breaks during work.' },
  { word: 'habits', translation: 'hábitos', icon: <Heart className="w-6 h-6" />, example: 'Develop fewer bad habits.' },
];

const practiceQuestions: QuizQuestion[] = [
  // A. Fill in the blanks
  { id: 1, type: 'fill', question: 'To stay active, spend _____ hours on the sofa.', correctAnswer: 'fewer', hint: 'Usa la palabra clave de la lección.' },
  { id: 2, type: 'fill', question: 'He wants to have _____ unhealthy habits.', correctAnswer: 'fewer', hint: 'Hábitos es contable.' },
  { id: 3, type: 'fill', question: 'This routine has _____ exercises.', correctAnswer: 'fewer', hint: 'Ejercicios se pueden contar.' },
  { id: 4, type: 'fill', question: 'Office workers should take _____ long breaks.', correctAnswer: 'fewer', hint: 'Breaks es plural.' },
  // B. Choose correct option
  { id: 5, type: 'choice', question: 'Choose the correct form:', options: ['fewer hour', 'fewer hours'], correctAnswer: 'fewer hours' },
  { id: 6, type: 'choice', question: 'Choose the correct form:', options: ['fewer activity', 'fewer activities'], correctAnswer: 'fewer activities' },
  { id: 7, type: 'choice', question: 'Choose the correct form:', options: ['fewer workout', 'fewer workouts'], correctAnswer: 'fewer workouts' },
  // C. Transform
  { id: 8, type: 'transform', question: 'Do not do many unhealthy habits.', correctAnswer: 'Do fewer unhealthy habits', hint: 'Reemplaza "not do many" con "Do fewer..."' },
  { id: 9, type: 'transform', question: 'I spend many hours sitting.', correctAnswer: 'I spend fewer hours sitting', hint: 'Lo opuesto de "many hours" es...' },
];

// --- Components ---

const Header = () => (
  <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-b-3xl shadow-lg mb-8">
    <div className="flex items-center gap-3">
      <Activity className="w-8 h-8 text-emerald-200" />
      <div>
        <h1 className="text-2xl font-bold">Physical Activity & Lifestyle</h1>
        <p className="text-emerald-100 text-sm">Grammar Focus: Fewer + Plural Countable Nouns</p>
      </div>
    </div>
  </header>
);

const TabButton = ({ active, label, onClick, icon }: { active: boolean; label: string; onClick: () => void; icon: React.ReactNode }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-3 rounded-t-xl transition-all duration-300 font-medium ${
      active
        ? 'bg-white text-emerald-600 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t-4 border-emerald-500'
        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
    }`}
  >
    {icon}
    <span className="hidden sm:inline">{label}</span>
  </button>
);

// --- Section 1: Core Rule ---
const CoreRuleSection = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">La Regla de Oro</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <div className="bg-emerald-50 p-6 rounded-xl border-2 border-emerald-200 w-full md:w-auto">
            <span className="text-4xl font-extrabold text-emerald-600 block mb-2">FEWER</span>
            <span className="text-sm text-emerald-800 uppercase tracking-wider font-semibold">Menor Cantidad</span>
          </div>
          <div className="text-4xl text-gray-300 font-light">+</div>
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 w-full md:w-auto">
            <span className="text-xl font-bold text-blue-800 block mb-2">PLURAL COUNTABLE NOUNS</span>
            <div className="flex justify-center gap-2 text-blue-600">
              <span className="text-xs bg-white px-2 py-1 rounded border border-blue-200">Apples</span>
              <span className="text-xs bg-white px-2 py-1 rounded border border-blue-200">Steps</span>
              <span className="text-xs bg-white px-2 py-1 rounded border border-blue-200">Hours</span>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg text-left border-l-4 border-yellow-400">
          <h3 className="flex items-center gap-2 font-bold text-yellow-800 mb-2">
            <Lightbulb className="w-5 h-5" />
            ¿Cómo saber si es contable?
          </h3>
          <p className="text-yellow-900">
            La prueba rápida: Si puedes poner un número delante (one, two, three...), ¡es contable!
            <br />
            <span className="font-mono text-sm mt-2 block bg-yellow-100 p-2 rounded w-fit">
              ✅ One hour, Two hours → Usamos <strong>Fewer</strong>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Section 2: Vocabulary ---
const VocabularySection = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {vocabList.map((item, index) => (
        <div 
          key={item.word}
          className="relative group h-48 cursor-pointer perspective-1000"
          onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
        >
          <div className={`absolute inset-0 w-full h-full transition-all duration-500 preserve-3d ${flippedIndex === index ? 'rotate-y-180' : ''}`}>
            {/* Front */}
            <div className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center backface-hidden hover:shadow-md transition-shadow">
              <div className="bg-emerald-100 p-4 rounded-full text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 capitalize">{item.word}</h3>
              <p className="text-gray-400 text-sm mt-1">{item.translation}</p>
              <span className="absolute bottom-4 text-xs text-emerald-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Click para ejemplo</span>
            </div>

            {/* Back */}
            <div className="absolute inset-0 w-full h-full bg-emerald-600 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center backface-hidden rotate-y-180 text-white text-center">
              <p className="font-medium text-lg leading-relaxed">"{item.example}"</p>
              <div className="mt-4 flex items-center gap-2 text-emerald-200 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Usando fewer</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- Section 3: Examples ---
const ExamplesSection = () => {
  const examples = [
    { text: "People with active lifestyles spend fewer hours sitting.", noun: "hours" },
    { text: "Try to do fewer unhealthy habits.", noun: "unhealthy habits" },
    { text: "This week, I did fewer workouts than last week.", noun: "workouts" },
    { text: "Walking more means taking fewer breaks.", noun: "breaks" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3 text-blue-800 mb-6">
        <BookOpen className="w-6 h-6 shrink-0 mt-1" />
        <div>
          <h3 className="font-bold">Análisis Gramatical</h3>
          <p className="text-sm">Observa cómo <span className="font-bold bg-emerald-200 px-1 rounded text-emerald-900">fewer</span> siempre precede al <span className="font-bold bg-indigo-200 px-1 rounded text-indigo-900">sustantivo plural</span>.</p>
        </div>
      </div>

      <div className="grid gap-4">
        {examples.map((ex, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-4 hover:border-emerald-200 transition-colors">
            <div className="bg-gray-100 p-3 rounded-full text-gray-500 font-bold text-lg w-12 h-12 flex items-center justify-center shrink-0">
              {idx + 1}
            </div>
            <div className="text-lg text-gray-700 flex-grow text-center md:text-left">
              {ex.text.split(' ').map((word, i) => {
                 const cleanWord = word.replace(/[.,]/g, '');
                 if (cleanWord.toLowerCase() === 'fewer') {
                   return <span key={i} className="font-bold text-emerald-600 bg-emerald-50 px-1 rounded mx-0.5">{word}</span>;
                 }
                 if (ex.noun.includes(cleanWord.toLowerCase())) {
                   return <span key={i} className="font-bold text-indigo-600 bg-indigo-50 px-1 rounded mx-0.5 border-b-2 border-indigo-200">{word}</span>;
                 }
                 return <span key={i} className="mx-0.5">{word}</span>;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Section 4: Guided Practice ---
const PracticeSection = () => {
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [feedback, setFeedback] = useState<{[key: number]: boolean | null}>({});
  const [personalNotes, setPersonalNotes] = useState<string[]>([]);
  const [currentNote, setCurrentNote] = useState("");

  const checkAnswer = (id: number, type: string) => {
    const q = practiceQuestions.find(q => q.id === id);
    if (!q) return;

    const userAns = answers[id]?.trim().toLowerCase();
    const correctAns = Array.isArray(q.correctAnswer) 
      ? q.correctAnswer.map(a => a.toLowerCase()) 
      : [q.correctAnswer.toLowerCase()];

    // Simple fuzzy check for sentences (removing punctuation)
    const normalize = (str: string) => str.replace(/[.,]/g, '').trim();
    
    const isCorrect = correctAns.some(c => normalize(c) === normalize(userAns || ''));
    
    setFeedback(prev => ({ ...prev, [id]: isCorrect }));
  };

  const addNote = () => {
    if (currentNote.trim()) {
      setPersonalNotes([...personalNotes, currentNote]);
      setCurrentNote("");
    }
  };

  const getStatusIcon = (status: boolean | null | undefined) => {
    if (status === true) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (status === false) return <XCircle className="w-5 h-5 text-red-500" />;
    return null;
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Part A: Fill in blanks */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-sm">A</span>
          Fill in the blanks (fewer + noun)
        </h3>
        <div className="space-y-4">
          {practiceQuestions.filter(q => q.type === 'fill').map(q => (
            <div key={q.id} className="flex flex-col sm:flex-row sm:items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <div className="flex-grow font-medium text-gray-700">
                {q.question.split('_____').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <input 
                        type="text" 
                        className={`mx-2 border-b-2 bg-transparent focus:outline-none w-24 text-center ${
                            feedback[q.id] === true ? 'border-green-500 text-green-700' : 
                            feedback[q.id] === false ? 'border-red-300 text-red-700' : 'border-gray-300 focus:border-emerald-500'
                        }`}
                        placeholder="..."
                        value={answers[q.id] || ''}
                        onChange={(e) => setAnswers({...answers, [q.id]: e.target.value})}
                        onBlur={() => checkAnswer(q.id, 'fill')}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="w-6">{getStatusIcon(feedback[q.id])}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Part B: Multiple Choice */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-sm">B</span>
          Choose the correct option
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {practiceQuestions.filter(q => q.type === 'choice').map(q => (
            <div key={q.id} className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-500 text-sm mb-2">{q.question}</p>
              <div className="space-y-2">
                {q.options?.map(opt => (
                  <button
                    key={opt}
                    onClick={() => {
                        setAnswers({...answers, [q.id]: opt});
                        // Immediate check for multiple choice
                        const isCorrect = opt === q.correctAnswer;
                        setFeedback({...feedback, [q.id]: isCorrect});
                    }}
                    className={`w-full p-2 rounded text-left transition-all ${
                      answers[q.id] === opt 
                        ? (feedback[q.id] ? 'bg-green-100 border-green-300 text-green-800' : 'bg-red-100 border-red-300 text-red-800')
                        : 'bg-white hover:bg-gray-100 border border-gray-200'
                    } border`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Part C: Transformation */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-sm">C</span>
          Rewrite the sentence
        </h3>
        <div className="space-y-6">
          {practiceQuestions.filter(q => q.type === 'transform').map(q => (
            <div key={q.id}>
              <p className="text-gray-600 mb-2 italic">"{q.question}"</p>
              <div className="flex gap-2">
                <ArrowRight className="text-gray-400 mt-3 w-4 h-4" />
                <div className="w-full">
                    <input 
                        type="text" 
                        className={`w-full p-2 border-2 rounded-lg focus:outline-none transition-colors ${
                            feedback[q.id] === true ? 'border-green-400 bg-green-50' :
                            feedback[q.id] === false ? 'border-red-300 bg-red-50' :
                            'border-gray-200 focus:border-emerald-500'
                        }`}
                        placeholder="Type the full sentence here..."
                        value={answers[q.id] || ''}
                        onChange={(e) => setAnswers({...answers, [q.id]: e.target.value})}
                    />
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-400">{q.hint}</span>
                        <button 
                            onClick={() => checkAnswer(q.id, 'transform')}
                            className="bg-emerald-600 text-white text-xs px-3 py-1 rounded hover:bg-emerald-700"
                        >
                            Check
                        </button>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Part D: Personal Production */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl shadow-sm border border-indigo-100">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-200 text-indigo-700 px-2 py-1 rounded text-sm">D</span>
          Personal Production Journal
        </h3>
        <p className="text-indigo-600 mb-4 text-sm">Escribe 3 frases sobre tu estilo de vida usando <strong>fewer</strong>.</p>
        
        <div className="flex gap-2 mb-6">
            <input 
                value={currentNote}
                onChange={(e) => setCurrentNote(e.target.value)}
                placeholder="E.g., I want to spend fewer hours checking emails..."
                className="flex-grow p-3 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onKeyDown={(e) => e.key === 'Enter' && addNote()}
            />
            <button 
                onClick={addNote}
                className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition-colors"
            >
                <Edit3 className="w-5 h-5" />
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {personalNotes.length === 0 && (
                <div className="text-center text-indigo-300 col-span-full py-8 border-2 border-dashed border-indigo-200 rounded-xl">
                    Tus frases aparecerán aquí...
                </div>
            )}
            {personalNotes.map((note, i) => (
                <div key={i} className="bg-yellow-100 p-4 rounded-xl shadow-md rotate-1 transform transition-transform hover:-rotate-1 text-gray-700 font-handwriting">
                    <span className="text-2xl text-yellow-500 absolute -top-2 -left-2">"</span>
                    {note}
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};

// --- Main App ---

const App = () => {
  const [activeTab, setActiveTab] = useState<Tab>('rule');

  const renderContent = () => {
    switch (activeTab) {
      case 'rule': return <CoreRuleSection />;
      case 'vocabulary': return <VocabularySection />;
      case 'examples': return <ExamplesSection />;
      case 'practice': return <PracticeSection />;
      default: return <CoreRuleSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto pb-12">
        <Header />
        
        {/* Navigation */}
        <div className="px-4 sm:px-8">
          <div className="flex overflow-x-auto gap-1 border-b border-gray-200 mb-8 scrollbar-hide">
            <TabButton 
              active={activeTab === 'rule'} 
              label="1. Regla Central" 
              onClick={() => setActiveTab('rule')}
              icon={<Lightbulb className="w-4 h-4" />}
            />
            <TabButton 
              active={activeTab === 'vocabulary'} 
              label="2. Vocabulario" 
              onClick={() => setActiveTab('vocabulary')}
              icon={<BookOpen className="w-4 h-4" />}
            />
            <TabButton 
              active={activeTab === 'examples'} 
              label="3. Ejemplos" 
              onClick={() => setActiveTab('examples')}
              icon={<CheckCircle className="w-4 h-4" />}
            />
            <TabButton 
              active={activeTab === 'practice'} 
              label="4. Práctica" 
              onClick={() => setActiveTab('practice')}
              icon={<Edit3 className="w-4 h-4" />}
            />
          </div>

          {/* Dynamic Content */}
          <main className="min-h-[400px]">
            {renderContent()}
          </main>
          
          <div className="mt-12 text-center text-gray-400 text-sm">
            Exercise Module: Fewer + Countable Nouns
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;