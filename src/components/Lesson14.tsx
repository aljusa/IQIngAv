import React, { useState } from 'react';
import { Zap, Brain, CalendarCheck, ArrowRight, CheckCircle2, Clock, Check, X } from 'lucide-react';

export default function App() {
  const [showAnswers, setShowAnswers] = useState(false);
  const [quizScores, setQuizScores] = useState({});

  const handleQuizAnswer = (questionId, isCorrect) => {
    setQuizScores(prev => ({ ...prev, [questionId]: isCorrect }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16">
      {/* Header Section */}
      <header className="bg-indigo-600 text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-3 py-1 bg-indigo-500 rounded-full text-sm font-semibold tracking-wider mb-4">
            Lesson 14
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Plans vs Predictions</h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl leading-relaxed">
            En esta lección aprenderás a diferenciar claramente tres formas de hablar del futuro en inglés: <strong>“will”</strong>, <strong>“going to”</strong> y el <strong>presente progresivo</strong>. Cada una se usa en contextos distintos: predicciones, planes e intenciones, o arreglos ya organizados.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-12 mt-12 space-y-16">
        
        {/* Visual Diagram: Escala de Certeza */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Zap className="text-amber-500" />
            Diagrama: La Escala de Certeza del Futuro
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 mb-8 text-center">A medida que avanzamos de izquierda a derecha, el nivel de organización y certeza del evento aumenta.</p>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>
              
              {/* Point 1: Will */}
              <div className="relative z-10 flex flex-col items-center w-full md:w-1/3 p-4 bg-white">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4 shadow-sm border-4 border-white">
                  <Zap size={32} />
                </div>
                <h3 className="font-bold text-lg mb-1 text-blue-700">Will</h3>
                <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded-full mb-2">Decisión espontánea / Opinión</span>
                <p className="text-sm text-center text-slate-600 italic">"I think it will rain."</p>
              </div>

              {/* Point 2: Going to */}
              <div className="relative z-10 flex flex-col items-center w-full md:w-1/3 p-4 bg-white">
                <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-4 shadow-sm border-4 border-white">
                  <Brain size={32} />
                </div>
                <h3 className="font-bold text-lg mb-1 text-orange-700">Going to</h3>
                <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded-full mb-2">Plan / Intención pensada</span>
                <p className="text-sm text-center text-slate-600 italic">"I am going to travel."</p>
              </div>

              {/* Point 3: Present Progressive */}
              <div className="relative z-10 flex flex-col items-center w-full md:w-1/3 p-4 bg-white">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4 shadow-sm border-4 border-white">
                  <CalendarCheck size={32} />
                </div>
                <h3 className="font-bold text-lg mb-1 text-green-700">Present Progr.</h3>
                <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded-full mb-2">Arreglo Confirmado</span>
                <p className="text-sm text-center text-slate-600 italic">"I am traveling tomorrow."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Grammar Explanations */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b pb-4">1. Grammar: Estructuras y Usos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card A */}
            <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
              <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
                <h3 className="text-xl font-bold text-blue-800 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">A</span>
                  “Will”
                </h3>
                <p className="text-blue-600 text-sm font-medium">Predicciones y decisiones espontáneas</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-1">Se usa cuando:</h4>
                  <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1">
                    <li>Haces predicciones</li>
                    <li>Decides en el momento</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg text-sm font-mono text-slate-700">
                  Sujeto + will + verbo base
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-1">Ejemplos:</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex gap-2"><ArrowRight size={16} className="text-blue-500 shrink-0 mt-0.5"/> <i>I will travel next year.</i></li>
                    <li className="flex gap-2"><ArrowRight size={16} className="text-blue-500 shrink-0 mt-0.5"/> <i>She will probably study later.</i></li>
                    <li className="flex gap-2"><ArrowRight size={16} className="text-blue-500 shrink-0 mt-0.5"/> <i>I think it will rain.</i></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card B */}
            <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden">
              <div className="bg-orange-50 px-6 py-4 border-b border-orange-100">
                <h3 className="text-xl font-bold text-orange-800 flex items-center gap-2">
                  <span className="bg-orange-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">B</span>
                  “Going to”
                </h3>
                <p className="text-orange-600 text-sm font-medium">Planes e intenciones</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-1">Se usa cuando:</h4>
                  <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1">
                    <li>Ya tienes una intención previa</li>
                    <li>Has pensado el plan antes de hablar</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg text-sm font-mono text-slate-700">
                  Sujeto + am/is/are + going to + verbo base
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-1">Ejemplos:</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex gap-2"><ArrowRight size={16} className="text-orange-500 shrink-0 mt-0.5"/> <i>I am going to start a new job.</i></li>
                    <li className="flex gap-2"><ArrowRight size={16} className="text-orange-500 shrink-0 mt-0.5"/> <i>They are going to save money.</i></li>
                    <li className="flex gap-2"><ArrowRight size={16} className="text-orange-500 shrink-0 mt-0.5"/> <i>We are going to buy a house.</i></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card C */}
            <div className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden">
              <div className="bg-green-50 px-6 py-4 border-b border-green-100">
                <h3 className="text-xl font-bold text-green-800 flex items-center gap-2">
                  <span className="bg-green-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">C</span>
                  Present Prog.
                </h3>
                <p className="text-green-600 text-sm font-medium">Arreglos confirmados</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-1">Se usa cuando:</h4>
                  <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1">
                    <li>El plan ya está organizado (hora, lugar, etc.)</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg text-sm font-mono text-slate-700">
                  Sujeto + am/is/are + verbo + ing
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-1">Ejemplos:</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex gap-2"><ArrowRight size={16} className="text-green-500 shrink-0 mt-0.5"/> <i>I am meeting my boss tomorrow.</i></li>
                    <li className="flex gap-2"><ArrowRight size={16} className="text-green-500 shrink-0 mt-0.5"/> <i>She is traveling next week.</i></li>
                    <li className="flex gap-2"><ArrowRight size={16} className="text-green-500 shrink-0 mt-0.5"/> <i>We are having dinner at 8 pm.</i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Table */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">2. Diferencias Clave</h2>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="p-4 border-b font-semibold">Uso</th>
                  <th className="p-4 border-b font-semibold">Estructura</th>
                  <th className="p-4 border-b font-semibold">Ejemplo</th>
                  <th className="p-4 border-b font-semibold">Nivel de certeza</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600">
                <tr className="border-b hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-800 flex items-center gap-2"><Zap size={16} className="text-blue-500"/> Predicción</td>
                  <td className="p-4 font-mono">will</td>
                  <td className="p-4 italic">It will rain.</td>
                  <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">Opinión</span></td>
                </tr>
                <tr className="border-b hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-800 flex items-center gap-2"><Brain size={16} className="text-orange-500"/> Plan</td>
                  <td className="p-4 font-mono">going to</td>
                  <td className="p-4 italic">I am going to travel.</td>
                  <td className="p-4"><span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-semibold">Intención</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-800 flex items-center gap-2"><CalendarCheck size={16} className="text-green-500"/> Arreglo</td>
                  <td className="p-4 font-mono">present progressive</td>
                  <td className="p-4 italic">I am traveling tomorrow.</td>
                  <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Confirmado</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Vocabulary & Integration Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
              <Clock className="text-indigo-600" />
              3. Vocabulary: Time Expressions
            </h2>
            <p className="text-indigo-800 mb-6">Estas expresiones ayudan a ubicar acciones en el futuro:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { en: "Next week", es: "la próxima semana" },
                { en: "Tomorrow", es: "mañana" },
                { en: "Soon", es: "pronto" },
                { en: "Later", es: "más tarde" },
                { en: "Tonight", es: "esta noche" },
                { en: "This weekend", es: "este fin de semana" }
              ].map((word, idx) => (
                <div key={idx} className="bg-white border border-indigo-200 px-4 py-2 rounded-lg shadow-sm flex flex-col">
                  <span className="font-bold text-indigo-900">{word.en}</span>
                  <span className="text-xs text-indigo-500">{word.es}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Uso Integrado</h2>
            <p className="text-slate-600 mb-6">Observa cómo cambia el significado de una misma acción dependiendo de la estructura:</p>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start bg-white p-3 rounded-lg shadow-sm">
                <Zap className="text-blue-500 shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-slate-800">I will call you later.</p>
                  <p className="text-sm text-slate-500">Decisión tomada en el momento.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start bg-white p-3 rounded-lg shadow-sm">
                <Brain className="text-orange-500 shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-slate-800">I am going to call you later.</p>
                  <p className="text-sm text-slate-500">Ya lo tenía planeado.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start bg-white p-3 rounded-lg shadow-sm">
                <CalendarCheck className="text-green-500 shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-slate-800">I am calling you later.</p>
                  <p className="text-sm text-slate-500">Ya está acordado con la otra persona.</p>
                </div>
              </li>
            </ul>
          </section>
        </div>

        {/* Exercises Section */}
        <section className="bg-white p-8 rounded-3xl shadow-md border border-slate-200">
          <div className="flex justify-between items-center mb-8 border-b pb-4">
            <h2 className="text-3xl font-bold text-slate-800">5. Ejercicios Prácticos</h2>
            <button 
              onClick={() => setShowAnswers(!showAnswers)}
              className="px-4 py-2 bg-indigo-100 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-200 transition-colors"
            >
              {showAnswers ? "Ocultar Respuestas" : "Mostrar Respuestas"}
            </button>
          </div>

          <div className="space-y-10">
            {/* Exercise A */}
            <div>
              <h3 className="text-xl font-bold text-slate-700 mb-4">A. Elige la opción correcta</h3>
              <div className="space-y-3">
                {[
                  { q: "1. I (will / am going to) study tonight.", hint: "decisión previa", a: "am going to" },
                  { q: "2. She (is meeting / will meet) her friend at 6 pm.", hint: "arreglo", a: "is meeting" },
                  { q: "3. I think it (will / is going to) rain.", hint: "predicción", a: "will" },
                  { q: "4. We (are going to / will) buy a car.", hint: "plan", a: "are going to" },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="text-slate-800 font-medium">{item.q}</p>
                      <p className="text-xs text-slate-500 italic">Pista: {item.hint}</p>
                    </div>
                    {showAnswers && (
                      <div className="mt-2 sm:mt-0 px-3 py-1 bg-green-100 text-green-700 rounded-md font-semibold text-sm flex items-center gap-1">
                        <CheckCircle2 size={16} />
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Exercise C */}
              <div>
                <h3 className="text-xl font-bold text-slate-700 mb-4">C. Identifica el uso</h3>
                <div className="space-y-3 text-slate-700">
                  <p>1. I am visiting my grandma tomorrow. <br/>
                    {showAnswers ? <span className="text-green-600 font-bold">→ Present Progressive (Arreglo)</span> : "→ ________"}
                  </p>
                  <p>2. I will help you. <br/>
                    {showAnswers ? <span className="text-blue-600 font-bold">→ Will (Decisión espontánea)</span> : "→ ________"}
                  </p>
                  <p>3. I am going to study medicine. <br/>
                    {showAnswers ? <span className="text-orange-600 font-bold">→ Going to (Plan/Intención)</span> : "→ ________"}
                  </p>
                  <p>4. She is having dinner tonight. <br/>
                    {showAnswers ? <span className="text-green-600 font-bold">→ Present Progressive (Arreglo)</span> : "→ ________"}
                  </p>
                </div>
              </div>

              {/* Exercise D */}
              <div>
                <h3 className="text-xl font-bold text-slate-700 mb-4">D. Traduce al inglés</h3>
                <div className="space-y-3 text-slate-700">
                  <p className="border-b pb-2">1. Voy a estudiar mañana.<br/>
                    {showAnswers && <span className="text-indigo-600 font-bold">I am going to study tomorrow.</span>}
                  </p>
                  <p className="border-b pb-2">2. Nos vemos esta noche (arreglo).<br/>
                    {showAnswers && <span className="text-indigo-600 font-bold">We are meeting tonight.</span>}
                  </p>
                  <p className="border-b pb-2">3. Creo que lloverá.<br/>
                    {showAnswers && <span className="text-indigo-600 font-bold">I think it will rain.</span>}
                  </p>
                  <p className="border-b pb-2">4. Probablemente viajaré pronto.<br/>
                    {showAnswers && <span className="text-indigo-600 font-bold">I will probably travel soon.</span>}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      
      </main>
    </div>
  );
}