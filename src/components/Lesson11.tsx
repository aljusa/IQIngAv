import React, { useState } from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  GitBranch, 
  MessageCircle, 
  CheckCircle, 
  AlertCircle,
  Lightbulb,
  Check
} from 'lucide-react';

export default function App() {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header Section */}
      <header className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white py-16 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-indigo-200" />
            <span className="text-indigo-200 font-semibold tracking-wider uppercase text-sm">Lesson 11</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Making Up Your Mind
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl leading-relaxed">
            Aprende a expresar posibilidad e incertidumbre utilizando los verbos modales <strong className="text-white">“might”</strong> y <strong className="text-white">“may”</strong>. Adquiere vocabulario útil para comunicar dudas, opciones y planes poco definidos de manera natural.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1: Grammar */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">1. Grammar: Modals of Possibility</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 md:p-8">
              <p className="text-slate-600 mb-8">
                Los modales <strong>“might”</strong> y <strong>“may”</strong> se utilizan para expresar posibilidad en el presente o futuro.
              </p>

              {/* Visual Suggestion: Probability Scale */}
              <div className="mb-10 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Escala de Probabilidad</h3>
                <div className="relative pt-8 pb-2">
                  <div className="h-3 bg-slate-200 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-slate-400 via-blue-400 to-green-400 w-3/4"></div>
                  </div>
                  <div className="absolute top-0 left-[30%] -translate-x-1/2 flex flex-col items-center">
                    <span className="bg-white border-2 border-blue-400 text-blue-600 font-bold px-3 py-1 rounded-full shadow-sm text-sm">Might</span>
                    <div className="h-3 w-0.5 bg-blue-400 mt-1"></div>
                    <span className="text-xs text-slate-500 mt-5 w-32 text-center">Posibilidad más incierta</span>
                  </div>
                  <div className="absolute top-0 left-[60%] -translate-x-1/2 flex flex-col items-center">
                    <span className="bg-white border-2 border-green-400 text-green-600 font-bold px-3 py-1 rounded-full shadow-sm text-sm">May</span>
                    <div className="h-3 w-0.5 bg-green-400 mt-1"></div>
                    <span className="text-xs text-slate-500 mt-5 w-32 text-center">Un poco más probable / formal</span>
                  </div>
                </div>
              </div>

              {/* Visual Suggestion: Formula Blocks */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                  <h3 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Afirmativa
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-sm bg-white p-3 rounded-lg border border-emerald-200 mb-3">
                    <span className="bg-slate-100 px-2 py-1 rounded">Sujeto</span>
                    <span className="text-slate-400">+</span>
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-bold">might / may</span>
                    <span className="text-slate-400">+</span>
                    <span className="bg-slate-100 px-2 py-1 rounded">verbo base</span>
                  </div>
                  <ul className="space-y-2 text-sm text-emerald-900 mt-4">
                    <li className="flex gap-2"><span className="text-emerald-500 font-bold">»</span> I <strong>might study</strong> tonight.</li>
                    <li className="flex gap-2"><span className="text-emerald-500 font-bold">»</span> She <strong>may take</strong> a new job.</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                  <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" /> Negativa
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-sm bg-white p-3 rounded-lg border border-red-200 mb-3">
                    <span className="bg-slate-100 px-2 py-1 rounded">Sujeto</span>
                    <span className="text-slate-400">+</span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded font-bold">might not / may not</span>
                    <span className="text-slate-400">+</span>
                    <span className="bg-slate-100 px-2 py-1 rounded">verbo base</span>
                  </div>
                  <ul className="space-y-2 text-sm text-red-900 mt-4">
                    <li className="flex gap-2"><span className="text-red-500 font-bold">»</span> They <strong>might not go</strong> out.</li>
                    <li className="flex gap-2"><span className="text-red-500 font-bold">»</span> He <strong>may not accept</strong> the offer.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Vocabulary */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 p-2 rounded-lg">
              <MessageCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">2. Vocabulary: Decisions & Uncertainty</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Decisions Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <GitBranch className="w-6 h-6 text-indigo-500" />
                <h3 className="text-xl font-bold text-slate-800">Decisiones (Decisions)</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { word: 'Decide', trans: 'decidir' },
                  { word: 'Choice', trans: 'elección' },
                  { word: 'Option', trans: 'opción' },
                  { word: 'Plan', trans: 'plan' },
                  { word: 'Opportunity', trans: 'oportunidad' },
                ].map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-lg transition-colors group cursor-default">
                    <span className="font-semibold text-indigo-700 text-lg group-hover:translate-x-1 transition-transform">{item.word}</span>
                    <span className="text-slate-500 text-sm bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm">{item.trans}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Uncertainty Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <HelpCircle className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-bold text-slate-800">Incertidumbre (Uncertainty)</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { word: 'Maybe', trans: 'quizás' },
                  { word: 'Perhaps', trans: 'tal vez' },
                  { word: 'I’m not sure', trans: 'no estoy seguro/a' },
                  { word: 'It depends', trans: 'depende' },
                  { word: 'I guess', trans: 'supongo' },
                ].map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-lg transition-colors group cursor-default">
                    <span className="font-semibold text-orange-600 text-lg group-hover:translate-x-1 transition-transform">{item.word}</span>
                    <span className="text-slate-500 text-sm bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm">{item.trans}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Integrated Use */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-teal-100 p-2 rounded-lg">
              <GitBranch className="w-6 h-6 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">3. Uso integrado: Gramática + Vocabulario</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
            <p className="text-slate-600 mb-6">Estas estructuras ayudan a expresar decisiones no definitivas. Observa cómo se combinan en la práctica:</p>
            
            {/* Visual Suggestion: Chat Bubbles */}
            <div className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
              
              <div className="flex flex-col gap-2 max-w-[80%]">
                <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm border border-slate-200">
                  <p className="text-slate-700">I <strong className="text-blue-600">might</strong> change my <strong className="text-indigo-600">plans</strong>.</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 max-w-[80%] self-end ml-auto">
                <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-tr-sm shadow-sm">
                  <p>She <strong className="text-green-300">may</strong> choose a different <strong className="text-indigo-200">option</strong>.</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 max-w-[80%]">
                <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm border border-slate-200">
                  <p><strong className="text-orange-500">Maybe</strong> we <strong className="text-blue-600">might</strong> travel this weekend.</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 max-w-[80%] self-end ml-auto">
                <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-tr-sm shadow-sm">
                  <p><strong className="text-orange-300">I'm not sure</strong>, I <strong className="text-green-300">may</strong> accept the <strong className="text-indigo-200">opportunity</strong>.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Exercises */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-100 p-2 rounded-lg">
              <CheckCircle className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">4. Ejercicios (Práctica Interactiva)</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative">
            <div className="p-6 md:p-8 space-y-10">
              
              {/* Exercise A & B combined in a grid */}
              <div className="grid md:grid-cols-2 gap-10">
                {/* Part A */}
                <div>
                  <h3 className="font-bold text-lg text-slate-800 mb-4 pb-2 border-b border-slate-100">A. Completa con "might" o "may"</h3>
                  <ul className="space-y-4">
                    {[
                      { text: "I {blank} go to the party tonight.", ans: "might / may" },
                      { text: "She {blank} accept the job.", ans: "might / may" },
                      { text: "They {blank} travel this summer.", ans: "might / may" },
                      { text: "We {blank} not finish the project today.", ans: "might / may" },
                      { text: "He {blank} change his decision.", ans: "might / may" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700">
                        <span>{i+1}.</span>
                        {item.text.split('{blank}').map((part, j, arr) => (
                          <React.Fragment key={j}>
                            {part}
                            {j !== arr.length - 1 && (
                              <span className={`inline-block px-3 py-1 min-w-[80px] text-center rounded border border-slate-300 bg-slate-50 transition-all ${showAnswers ? 'text-green-600 font-bold border-green-300 bg-green-50' : ''}`}>
                                {showAnswers ? item.ans : '......'}
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Part B */}
                <div>
                  <h3 className="font-bold text-lg text-slate-800 mb-4 pb-2 border-b border-slate-100">B. Elige la opción correcta</h3>
                  <ul className="space-y-4">
                    {[
                      { pre: "I", opts: "(might / will)", post: "go out, I'm not sure.", ans: "might" },
                      { pre: "She", opts: "(may / definitely)", post: "take the opportunity.", ans: "may" },
                      { pre: "They", opts: "(might / won't)", post: "come, it depends.", ans: "might" },
                      { pre: "We", opts: "(may / did)", post: "travel next year.", ans: "may" }
                    ].map((item, i) => (
                      <li key={i} className="text-slate-700">
                        <span>{i+1}. {item.pre} </span>
                        <span className={`font-semibold ${showAnswers ? 'text-green-600' : 'text-blue-600'}`}>
                          {showAnswers ? item.ans : item.opts}
                        </span>
                        <span> {item.post}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Part C & D */}
              <div className="grid md:grid-cols-2 gap-10">
                {/* Part C */}
                <div>
                  <h3 className="font-bold text-lg text-slate-800 mb-4 pb-2 border-b border-slate-100">C. Expresiones de incertidumbre</h3>
                  <ul className="space-y-4">
                    {[
                      { post: ", I will go to the meeting.", ans: "Maybe / Perhaps" },
                      { post: ", she will study medicine.", ans: "Maybe / Perhaps" },
                      { post: ", we can go later.", ans: "I'm not sure / It depends" },
                      { post: ", I might stay home.", ans: "I guess / It depends" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700">
                         <span>{i+1}.</span>
                        <span className={`inline-block px-3 py-1 min-w-[120px] text-center rounded border border-slate-300 bg-slate-50 ${showAnswers ? 'text-green-600 font-bold border-green-300 bg-green-50' : ''}`}>
                          {showAnswers ? item.ans : '......'}
                        </span>
                        <span>{item.post}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Part D */}
                <div>
                  <h3 className="font-bold text-lg text-slate-800 mb-4 pb-2 border-b border-slate-100">D. Traduce al inglés</h3>
                  <ul className="space-y-4">
                    {[
                      { text: "Quizás cambie de trabajo.", ans: "Maybe I will change jobs / I might change jobs." },
                      { text: "Puede que acepten la oferta.", ans: "They may/might accept the offer." },
                      { text: "No estoy seguro, podría ir.", ans: "I'm not sure, I might go." },
                      { text: "Depende, tal vez viajemos.", ans: "It depends, maybe we will travel / we might travel." }
                    ].map((item, i) => (
                      <li key={i} className="flex flex-col gap-1 text-slate-700">
                        <span className="font-medium">{i+1}. {item.text}</span>
                        {showAnswers && (
                          <div className="flex gap-2 items-start mt-1 bg-green-50 text-green-800 p-2 rounded border border-green-200 text-sm">
                            <Check className="w-4 h-4 mt-0.5 shrink-0 text-green-600" />
                            <span>{item.ans}</span>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
            
            {/* Action Bar for Exercises */}
            <div className="bg-slate-50 border-t border-slate-200 p-4 md:p-6 flex justify-center">
              <button 
                onClick={() => setShowAnswers(!showAnswers)}
                className={`px-6 py-3 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 ${showAnswers ? 'bg-slate-200 text-slate-700 hover:bg-slate-300' : 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-md'}`}
              >
                {showAnswers ? 'Ocultar Respuestas' : 'Ver Respuestas Sugeridas'}
              </button>
            </div>
          </div>
        </section>
      </main>

    
    </div>
  );
}