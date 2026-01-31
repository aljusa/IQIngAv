import React, { useState } from 'react';
import { 
  BookOpen, 
  Gamepad2, 
  Code, 
  Headphones, 
  Film, 
  Wifi, 
  CheckCircle2, 
  HelpCircle,
  Lightbulb,
  ArrowRight,
  MonitorPlay,
  Menu,
  X
} from 'lucide-react';

// --- Types ---

type Tab = 'intro' | 'lesson' | 'practice' | 'wrapup';

interface VocabCardProps {
  icon: React.ReactNode;
  term: string;
  definition: string;
}

// --- Components ---

const VocabCard: React.FC<VocabCardProps> = ({ icon, term, definition }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-start gap-4 transition-transform hover:-translate-y-1 hover:shadow-md">
    <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-lg text-slate-800 capitalize">{term}</h3>
      <p className="text-slate-600 text-sm mt-1">{definition}</p>
    </div>
  </div>
);

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-8">
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{title}</h2>
    {subtitle && <p className="text-slate-600 text-lg">{subtitle}</p>}
  </div>
);

// --- Main Application ---

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exercise State
  const [ex1Answers, setEx1Answers] = useState<{ [key: string]: string }>({});
  const [ex1Feedback, setEx1Feedback] = useState<{ [key: string]: boolean | null }>({});
  
  const [ex2Answers, setEx2Answers] = useState<{ [key: number]: string }>({});
  
  const [ex3Inputs, setEx3Inputs] = useState<{ [key: number]: string }>({ 1: '', 2: '', 3: '' });
  const [ex3Revealed, setEx3Revealed] = useState<{ [key: number]: boolean }>({});

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'intro', label: '1. Overview', icon: <BookOpen size={18} /> },
    { id: 'lesson', label: '2. The Lesson', icon: <Lightbulb size={18} /> },
    { id: 'practice', label: '3. Practice', icon: <CheckCircle2 size={18} /> },
    { id: 'wrapup', label: '4. Wrap-Up', icon: <ArrowRight size={18} /> },
  ];

  // --- Logic for Exercises ---

  const checkEx1 = () => {
    const correctAnswers = {
      'coding': 'c',
      'podcasts': 'a',
      'online courses': 'b'
    };
    
    const newFeedback: any = {};
    Object.keys(correctAnswers).forEach((key) => {
      newFeedback[key] = ex1Answers[key] === correctAnswers[key as keyof typeof correctAnswers];
    });
    setEx1Feedback(newFeedback);
  };

  const handleEx2Click = (questionId: number, answer: string) => {
    setEx2Answers(prev => ({ ...prev, [questionId]: answer }));
  };

  // --- Render Functions ---

  const renderIntro = () => (
    <div className="space-y-8 animate-fadeIn">
      <SectionHeader 
        title="Lesson Overview" 
        subtitle="Technological & Entertainment Hobbies: Making Suggestions in English" 
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
            <BookOpen size={20} /> Description
          </h3>
          <p className="text-slate-700 leading-relaxed">
            In this lesson, you will learn how to suggest technological and entertainment hobbies in English using flexible and friendly structures. These forms allow you to propose ideas without pressure, ideal for informal conversations.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-teal-700 mb-4 flex items-center gap-2">
            <CheckCircle2 size={20} /> Learning Objectives
          </h3>
          <ul className="space-y-2 text-slate-700">
            <li className="flex gap-2 items-start"><span className="text-teal-500 mt-1">•</span> Recognize vocabulary related to technology and entertainment.</li>
            <li className="flex gap-2 items-start"><span className="text-teal-500 mt-1">•</span> Understand how <strong>we could</strong> and <strong>maybe we can</strong> are used.</li>
            <li className="flex gap-2 items-start"><span className="text-teal-500 mt-1">•</span> Identify the meaning of possibility and openness.</li>
          </ul>
        </div>
      </div>

      <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
        <h3 className="font-bold text-indigo-900 mb-3">Prerequisites</h3>
        <p className="text-indigo-800">You should already have basic knowledge of verbs in base form and an elementary understanding of the modal verb <em>can</em>.</p>
      </div>

      <div className="flex justify-end">
        <button 
          onClick={() => setActiveTab('lesson')}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          Start Lesson <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );

  const renderLesson = () => (
    <div className="space-y-10 animate-fadeIn">
      <SectionHeader 
        title="Lesson Development" 
        subtitle="Explore vocabulary and grammar structures."
      />

      {/* Vocabulary Section */}
      <section>
        <h3 className="text-xl font-bold text-slate-800 mb-6 border-l-4 border-indigo-500 pl-4">
          5.2 Key Vocabulary
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <VocabCard 
            icon={<Gamepad2 size={24} />} 
            term="Video Games" 
            definition="Digital games for fun" 
          />
          <VocabCard 
            icon={<Code size={24} />} 
            term="Coding" 
            definition="Writing computer programs" 
          />
          <VocabCard 
            icon={<Headphones size={24} />} 
            term="Podcasts" 
            definition="Audio programs on different topics" 
          />
          <VocabCard 
            icon={<Film size={24} />} 
            term="Movies" 
            definition="Films for entertainment" 
          />
          <VocabCard 
            icon={<MonitorPlay size={24} />} 
            term="Online Courses" 
            definition="Classes taken on the internet" 
          />
        </div>
      </section>

      {/* Grammar Section 1 */}
      <section className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-500">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          5.3 Form 1: We could + base verb
        </h3>
        <p className="text-slate-600 mb-6">
          Used to make a soft suggestion, showing that the idea is one option among many.
        </p>

        <div className="bg-blue-50 p-4 rounded-xl mb-6">
          <p className="text-sm uppercase tracking-wide text-blue-800 font-bold mb-1">Structure</p>
          <p className="text-xl text-blue-900 font-mono">We could + <span className="border-b-2 border-blue-400">base verb</span></p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <h4 className="font-bold text-slate-700 mb-2">Example:</h4>
            <div className="bg-slate-100 p-4 rounded-lg border-l-4 border-slate-400">
              <p className="text-lg">"We could <strong className="text-blue-600">learn</strong> coding together."</p>
            </div>
          </div>
          <div className="flex-1 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
            <ul className="list-disc pl-5 space-y-1">
              <li>The speaker proposes an idea, but it is not a fixed plan.</li>
              <li>The verb is always in base form (learn, play, watch).</li>
              <li>The suggestion is optional and flexible.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Grammar Section 2 */}
      <section className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-purple-500">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          5.4 Form 2: Maybe we can + base verb
        </h3>
        <p className="text-slate-600 mb-6">
          Introduces a suggestion in an even more open way, using "maybe" to soften the proposal.
        </p>

        <div className="bg-purple-50 p-4 rounded-xl mb-6">
          <p className="text-sm uppercase tracking-wide text-purple-800 font-bold mb-1">Structure</p>
          <p className="text-xl text-purple-900 font-mono">Maybe we can + <span className="border-b-2 border-purple-400">base verb</span></p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <h4 className="font-bold text-slate-700 mb-2">Example:</h4>
            <div className="bg-slate-100 p-4 rounded-lg border-l-4 border-slate-400">
              <p className="text-lg">"Maybe we can <strong className="text-purple-600">watch</strong> a movie tonight."</p>
            </div>
          </div>
          <div className="flex-1 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
            <ul className="list-disc pl-5 space-y-1">
              <li>Shows openness and flexibility.</li>
              <li>Ideally for informal plans.</li>
              <li>Less direct than "Let's".</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-end">
        <button 
          onClick={() => setActiveTab('practice')}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          Go to Practice <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );

  const renderPractice = () => (
    <div className="space-y-12 animate-fadeIn">
      <SectionHeader 
        title="Practice Exercises" 
        subtitle="Test your knowledge." 
      />

      {/* Exercise 1 */}
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-800">Exercise 1 – Vocabulary Recognition</h3>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Easy</span>
        </div>
        <p className="mb-6 text-slate-600">Match the activity with the correct description.</p>

        <div className="grid gap-4 max-w-2xl">
          {[
            { id: 'coding', label: 'Coding' },
            { id: 'podcasts', label: 'Podcasts' },
            { id: 'online courses', label: 'Online courses' }
          ].map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="font-bold text-indigo-700 w-32 flex items-center gap-2">
                {item.id === 'coding' && <Code size={16}/>}
                {item.id === 'podcasts' && <Headphones size={16}/>}
                {item.id === 'online courses' && <MonitorPlay size={16}/>}
                {item.label}
              </div>
              <select 
                className={`flex-1 p-2 rounded border ${ex1Feedback[item.id] === true ? 'border-green-500 bg-green-50' : ex1Feedback[item.id] === false ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                value={ex1Answers[item.id] || ''}
                onChange={(e) => {
                  setEx1Answers({...ex1Answers, [item.id]: e.target.value});
                  setEx1Feedback({...ex1Feedback, [item.id]: null}); // reset feedback on change
                }}
              >
                <option value="" disabled>Select a definition...</option>
                <option value="a">a) Audio programs you listen to</option>
                <option value="b">b) Learning through the internet</option>
                <option value="c">c) Writing computer programs</option>
              </select>
              {ex1Feedback[item.id] === true && <CheckCircle2 className="text-green-500" />}
              {ex1Feedback[item.id] === false && <X className="text-red-500" />}
            </div>
          ))}
        </div>
        <button 
          onClick={checkEx1}
          className="mt-6 bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-900 transition-colors"
        >
          Check Answers
        </button>
      </div>

      {/* Exercise 2 */}
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-800">Exercise 2 – Choose the Structure</h3>
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Medium</span>
        </div>
        <p className="mb-6 text-slate-600">Choose <strong>we could</strong> or <strong>maybe we can</strong> to complete the sentence. (Both are grammatically correct suggestions, but try to vary them!)</p>

        <div className="space-y-4">
          {[
            { id: 1, text: "___ play video games tonight." },
            { id: 2, text: "___ watch a movie after work." },
            { id: 3, text: "___ learn coding together this month." },
            { id: 4, text: "___ listen to podcasts during the trip." },
          ].map((q) => (
            <div key={q.id} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex flex-wrap gap-2 items-center">
                <div className="flex gap-2">
                   <button 
                    onClick={() => handleEx2Click(q.id, 'We could')}
                    className={`px-3 py-1 rounded text-sm transition-all ${ex2Answers[q.id] === 'We could' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white border hover:bg-slate-100'}`}
                   >
                     We could
                   </button>
                   <button 
                    onClick={() => handleEx2Click(q.id, 'Maybe we can')}
                    className={`px-3 py-1 rounded text-sm transition-all ${ex2Answers[q.id] === 'Maybe we can' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white border hover:bg-slate-100'}`}
                   >
                     Maybe we can
                   </button>
                </div>
                <span className="text-lg text-slate-800 ml-2">
                  {q.text.replace('___', '...')}
                </span>
              </div>
              {ex2Answers[q.id] && (
                <p className="mt-2 text-indigo-600 text-sm font-medium animate-fadeIn">
                  Sentence: {q.text.replace('___', ex2Answers[q.id])}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Exercise 3 */}
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-800">Exercise 3 – Make a Suggestion</h3>
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Challenging</span>
        </div>
        <p className="mb-6 text-slate-600">Use the words given to write a full suggestion sentence using either structure.</p>

        <div className="space-y-6">
          {[
            { id: 1, prompt: "(online courses / weekend)", suggestion: "We could take online courses on the weekend." },
            { id: 2, prompt: "(video games / after dinner)", suggestion: "Maybe we can play video games after dinner." },
            { id: 3, prompt: "(watch / movies)", suggestion: "We could watch movies." }
          ].map((item) => (
            <div key={item.id} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
              <p className="font-bold text-slate-700 mb-2">{item.prompt}</p>
              <input 
                type="text" 
                placeholder="Type your sentence here..." 
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none mb-3"
                value={ex3Inputs[item.id]}
                onChange={(e) => setEx3Inputs({...ex3Inputs, [item.id]: e.target.value})}
              />
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setEx3Revealed({...ex3Revealed, [item.id]: !ex3Revealed[item.id]})}
                  className="text-sm text-indigo-600 hover:underline flex items-center gap-1"
                >
                  <HelpCircle size={14} /> {ex3Revealed[item.id] ? 'Hide' : 'Show'} Suggested Answer
                </button>
              </div>
              {ex3Revealed[item.id] && (
                <div className="mt-2 p-3 bg-green-50 text-green-800 rounded-lg text-sm border border-green-200 animate-fadeIn">
                  <strong>Possible Answer:</strong> {item.suggestion}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end">
        <button 
          onClick={() => setActiveTab('wrapup')}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          Finish Lesson <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );

  const renderWrapUp = () => (
    <div className="space-y-8 animate-fadeIn text-center max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-indigo-100 mt-8">
        <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} className="text-indigo-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Lesson Complete!</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-8">
          In this lesson, you learned how to suggest technological and entertainment hobbies using <strong>we could</strong> and <strong>maybe we can</strong>. Along with vocabulary related to digital leisure, these structures help you propose activities in a polite, flexible, and collaborative way.
        </p>

        <div className="grid grid-cols-2 gap-4 text-left bg-slate-50 p-6 rounded-xl mb-8">
            <div>
              <h4 className="font-bold text-slate-800 mb-2">Vocabulary</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Video games</li>
                <li>• Coding</li>
                <li>• Podcasts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-2">Grammar</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• We could...</li>
                <li>• Maybe we can...</li>
                <li>• Flexible suggestions</li>
              </ul>
            </div>
        </div>

        <button 
          onClick={() => {
            setActiveTab('intro');
            setEx1Answers({});
            setEx1Feedback({});
            setEx2Answers({});
            setEx3Inputs({1:'',2:'',3:''});
            setEx3Revealed({});
            window.scrollTo(0,0);
          }}
          className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 hover:shadow-lg transition-all"
        >
          Restart Lesson
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 font-bold text-xl text-indigo-600">
              <Wifi className="text-indigo-500" /> EnglishTech
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                    activeTab === tab.id 
                      ? 'bg-indigo-50 text-indigo-700' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-500 hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-4 shadow-lg">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium mb-1 flex items-center gap-3 ${
                  activeTab === tab.id 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {activeTab === 'intro' && renderIntro()}
        {activeTab === 'lesson' && renderLesson()}
        {activeTab === 'practice' && renderPractice()}
        {activeTab === 'wrapup' && renderWrapUp()}
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 py-8 text-center text-slate-400 text-sm border-t border-slate-200 mt-12">
        <p>English Lesson Module • React + TypeScript + Tailwind</p>
      </footer>
    </div>
  );
}