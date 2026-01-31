import React, { useState } from 'react';
import { BookOpen, CheckCircle, XCircle, MessageCircle, Users, Frown, Award, Mic, RefreshCw, ChevronRight } from 'lucide-react';

// --- Types ---

type TabId = 'intro' | 'lesson' | 'practice' | 'summary';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

// --- Components ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('intro');

  const tabs: Tab[] = [
    { id: 'intro', label: 'Introduction', icon: <BookOpen size={18} /> },
    { id: 'lesson', label: 'Grammar & Vocab', icon: <Users size={18} /> },
    { id: 'practice', label: 'Exercises', icon: <CheckCircle size={18} /> },
    { id: 'summary', label: 'Wrap-Up', icon: <Award size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-indigo-200 text-sm font-semibold uppercase tracking-wider mb-2">
            <Frown size={16} />
            Communicative Focus
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Audience Reactions to Group Activities
          </h1>
          <p className="text-indigo-100 text-lg opacity-90">
            Expressing negative reactions using "hate" and "can't stand"
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto p-4 md:p-6">
        
        {/* Mobile Tab Navigation (Dropdown style could be added, but stacking is fine for now) */}
        {/* Desktop/Tablet Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-t-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white text-indigo-600 border-b-2 border-indigo-600 shadow-sm'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 min-h-[400px]">
          {activeTab === 'intro' && <IntroSection changeTab={setActiveTab} />}
          {activeTab === 'lesson' && <LessonContent />}
          {activeTab === 'practice' && <PracticeSection />}
          {activeTab === 'summary' && <SummarySection />}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-slate-400 py-8 text-sm">
        <p>Lesson Developed for React + TypeScript Practice</p>
      </footer>
    </div>
  );
}

// --- Sub-Components ---

function IntroSection({ changeTab }: { changeTab: (t: TabId) => void }) {
  return (
    <div className="space-y-8 animate-fadeIn">
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-indigo-500 pl-4">1. Lesson Description</h2>
        <p className="text-lg leading-relaxed text-slate-600">
          In this lesson, you will learn how to express negative reactions or strong dislike toward activities done in groups. Using vocabulary related to collective dynamics, you will understand how the verbs <span className="font-bold text-indigo-600">hate</span> and <span className="font-bold text-indigo-600">can’t stand</span> help communicate personal opinions clearly and directly in English.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
          <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
            <CheckCircle size={18} /> 2. Learning Objectives
          </h3>
          <ul className="space-y-2 text-blue-900 text-sm md:text-base">
            <li className="flex gap-2"><span className="text-blue-500">•</span> Recognize vocabulary related to group activities.</li>
            <li className="flex gap-2"><span className="text-blue-500">•</span> Understand how <em>hate</em> and <em>can’t stand</em> are used.</li>
            <li className="flex gap-2"><span className="text-blue-500">•</span> Identify the use of nouns and -ing verbs.</li>
            <li className="flex gap-2"><span className="text-blue-500">•</span> Interpret audience reactions.</li>
          </ul>
        </div>

        <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
          <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
            <BookOpen size={18} /> 4. Prerequisites
          </h3>
          <ul className="space-y-2 text-purple-900 text-sm md:text-base">
            <li className="flex gap-2"><span className="text-purple-500">•</span> Basic knowledge of simple present tense.</li>
            <li className="flex gap-2"><span className="text-purple-500">•</span> Elementary familiarity with verbs in -ing form.</li>
          </ul>
        </div>
      </div>
      
      <div className="flex justify-end pt-4">
        <button 
          onClick={() => changeTab('lesson')}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          Start Lesson <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

function LessonContent() {
  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">5.1 Context Introduction</h2>
        <p className="text-slate-600">
          Group activities are common in educational and professional settings. However, people react differently. 
          In English, <span className="font-bold text-pink-600">hate</span> and <span className="font-bold text-pink-600">can’t stand</span> are used to express strong negative feelings.
        </p>
      </section>

      {/* Vocabulary */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">5.2 Key Vocabulary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <VocabCard word="Group Games" def="Games played in teams" icon={<Users className="text-indigo-500" />} />
          <VocabCard word="Discussions" def="Group conversations or debates" icon={<MessageCircle className="text-green-500" />} />
          <VocabCard word="Presentations" def="Speaking in front of others" icon={<Mic className="text-orange-500" />} />
          <VocabCard word="Competitions" def="Contests between individuals" icon={<Award className="text-yellow-500" />} />
          <VocabCard word="Teamwork" def="Working together as a group" icon={<Users className="text-blue-500" />} />
        </div>
      </section>

      {/* Grammar Rule 1 */}
      <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <div className="flex items-start gap-4">
          <div className="bg-white p-3 rounded-full shadow-sm text-red-500">
            <Frown size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">5.3 The Verb "Hate"</h3>
            <p className="text-slate-600 mb-4">Used to express strong dislike.</p>
            
            <div className="bg-white border-l-4 border-red-400 p-4 rounded shadow-sm mb-4">
              <p className="font-mono text-sm text-slate-500 mb-1">STRUCTURE:</p>
              <p className="text-lg font-semibold">hate + <span className="text-blue-600">noun</span></p>
              <p className="text-lg font-semibold">hate + <span className="text-green-600">verb-ing</span></p>
            </div>

            <p className="text-slate-700 italic">"Some students <span className="font-bold">hate working</span> in groups."</p>
          </div>
        </div>
      </section>

      {/* Grammar Rule 2 */}
      <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <div className="flex items-start gap-4">
          <div className="bg-white p-3 rounded-full shadow-sm text-red-700">
            <Frown size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">5.4 The Expression "Can't Stand"</h3>
            <p className="text-slate-600 mb-4">Expresses an even stronger feeling, often emotional. Common in spoken English.</p>
            
            <div className="bg-white border-l-4 border-red-600 p-4 rounded shadow-sm mb-4">
              <p className="font-mono text-sm text-slate-500 mb-1">STRUCTURE:</p>
              <p className="text-lg font-semibold">can't stand + <span className="text-blue-600">noun</span></p>
              <p className="text-lg font-semibold">can't stand + <span className="text-green-600">verb-ing</span></p>
            </div>

            <p className="text-slate-700 italic">"I <span className="font-bold">can't stand waiting</span> during competitions."</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function PracticeSection() {
  return (
    <div className="space-y-12 animate-fadeIn">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">6. Practice Exercises</h2>
        <p className="text-slate-500 mb-6">Test your knowledge with these interactive tasks.</p>
      </div>

      <Exercise1 />
      <hr className="border-slate-200" />
      <Exercise2 />
      <hr className="border-slate-200" />
      <Exercise3 />
    </div>
  );
}

function SummarySection() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 animate-fadeIn space-y-6">
      <div className="bg-green-100 p-6 rounded-full text-green-600">
        <CheckCircle size={64} />
      </div>
      <h2 className="text-3xl font-bold text-slate-800">Lesson Complete!</h2>
      <p className="max-w-xl text-lg text-slate-600">
        In this lesson, you learned how to express negative reactions using <strong>hate</strong> and <strong>can’t stand</strong>, 
        followed by nouns or verbs in the <strong>-ing</strong> form. 
      </p>
      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 max-w-lg w-full text-left">
        <h3 className="font-bold text-slate-700 mb-3">Recap:</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">✅ <strong>Presentations:</strong> Speaking in front of others.</li>
          <li className="flex items-center gap-2">✅ <strong>Hate + ing:</strong> "I hate losing."</li>
          <li className="flex items-center gap-2">✅ <strong>Can't stand + noun:</strong> "I can't stand the noise."</li>
        </ul>
      </div>
    </div>
  );
}

// --- Exercises Components ---

function Exercise1() {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    { id: 'q1', label: 'Presentations', correct: 'b' },
    { id: 'q2', label: 'Competitions', correct: 'c' },
    { id: 'q3', label: 'Teamwork', correct: 'a' },
  ];

  const options = [
    { value: 'a', text: 'Working together as a group' },
    { value: 'b', text: 'Speaking in front of an audience' },
    { value: 'c', text: 'Contests between people or teams' },
  ];

  const checkAnswers = () => setShowResult(true);
  const reset = () => { setAnswers({}); setShowResult(false); };

  const isCorrect = (id: string, correct: string) => answers[id] === correct;

  return (
    <div className="bg-white">
      <h3 className="text-xl font-bold text-indigo-700 mb-4">Exercise 1 – Vocabulary Recognition</h3>
      <p className="mb-4 text-sm text-slate-500">Match the activity with the correct description.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {questions.map((q) => (
            <div key={q.id} className="flex items-center justify-between bg-slate-50 p-3 rounded border border-slate-200">
              <span className="font-semibold text-slate-700">{q.label}</span>
              <select
                disabled={showResult}
                className={`ml-4 p-2 rounded border ${showResult ? (isCorrect(q.id, q.correct) ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500') : 'border-slate-300'}`}
                value={answers[q.id] || ''}
                onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
              >
                <option value="">Select...</option>
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
              </select>
            </div>
          ))}
        </div>
        <div className="bg-slate-100 p-4 rounded text-sm text-slate-700 space-y-2 h-fit">
          <p><strong>a)</strong> Working together as a group</p>
          <p><strong>b)</strong> Speaking in front of an audience</p>
          <p><strong>c)</strong> Contests between people or teams</p>
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        {!showResult ? (
          <button onClick={checkAnswers} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Check Answers</button>
        ) : (
          <button onClick={reset} className="flex items-center gap-2 text-indigo-600 font-medium hover:underline"><RefreshCw size={16} /> Try Again</button>
        )}
      </div>
    </div>
  );
}

function Exercise2() {
  // Simple structure for multiple choice - Note: In real grammar, often both fit, but we'll simulate the prompt's implied exercise style
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  
  const questions = [
    { id: 1, text: "I ___ group games in class.", options: ["hate", "can't stand"] },
    { id: 2, text: "She ___ working under pressure.", options: ["hate", "can't stand"] },
    { id: 3, text: "They ___ long discussions.", options: ["hate", "can't stand"] },
  ];

  const handleSelect = (qId: number, val: string) => {
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  return (
    <div>
      <h3 className="text-xl font-bold text-indigo-700 mb-4">Exercise 2 – Choose the Expression</h3>
      <p className="mb-4 text-sm text-slate-500">Click the button to fill in the blank.</p>
      
      <div className="space-y-4">
        {questions.map((q) => (
          <div key={q.id} className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="text-lg mb-3">
              {q.text.split('___')[0]} 
              <span className="font-bold text-indigo-600 border-b-2 border-indigo-400 px-2 min-w-[80px] inline-block text-center">
                {answers[q.id] || "?"}
              </span> 
              {q.text.split('___')[1]}
            </p>
            <div className="flex gap-2">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelect(q.id, opt)}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    answers[q.id] === opt 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-white border border-indigo-200 text-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Exercise3() {
  const [inputs, setInputs] = useState<{ [key: number]: string }>({});
  const [feedback, setFeedback] = useState<{ [key: number]: boolean | null }>({});

  const questions = [
    { id: 1, prompt: "(can’t stand / teamwork)", validParts: ["can't stand", "teamwork"], hint: "Subject + can't stand + noun" },
    { id: 2, prompt: "(hate / work / in groups)", validParts: ["hate", "working", "groups"], hint: "Subject + hate + verb-ing..." },
    { id: 3, prompt: "(can’t stand / participate / competitions)", validParts: ["can't stand", "participating", "competitions"], hint: "Subject + can't stand + verb-ing..." },
  ];

  const checkLine = (id: number, required: string[]) => {
    const userText = (inputs[id] || "").toLowerCase();
    // Simple check: does it contain the core phrases?
    const isCorrect = required.every(part => userText.includes(part));
    setFeedback(prev => ({ ...prev, [id]: isCorrect }));
  };

  return (
    <div>
      <h3 className="text-xl font-bold text-indigo-700 mb-4">Exercise 3 – Express a Reaction</h3>
      <p className="mb-4 text-sm text-slate-500">Write a complete sentence using the words given. Use "I" as the subject. Watch out for <strong>-ing</strong> forms!</p>

      <div className="space-y-6">
        {questions.map((q) => (
          <div key={q.id}>
            <label className="block font-medium text-slate-700 mb-1">{q.prompt}</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your sentence here..."
                className="flex-1 p-2 border border-slate-300 rounded focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 outline-none"
                value={inputs[q.id] || ''}
                onChange={(e) => {
                  setInputs({ ...inputs, [q.id]: e.target.value });
                  setFeedback({ ...feedback, [q.id]: null });
                }}
                onKeyDown={(e) => e.key === 'Enter' && checkLine(q.id, q.validParts)}
              />
              <button 
                onClick={() => checkLine(q.id, q.validParts)}
                className="bg-indigo-100 text-indigo-700 px-4 rounded font-medium hover:bg-indigo-200"
              >
                Check
              </button>
            </div>
            
            {feedback[q.id] === true && (
              <p className="text-green-600 text-sm mt-1 flex items-center gap-1"><CheckCircle size={14} /> Great job!</p>
            )}
            {feedback[q.id] === false && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <XCircle size={14} /> Try again. Hint: {q.hint}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function VocabCard({ word, def, icon }: { word: string, def: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h4 className="font-bold text-slate-800">{word}</h4>
      </div>
      <p className="text-sm text-slate-500">{def}</p>
    </div>
  );
}