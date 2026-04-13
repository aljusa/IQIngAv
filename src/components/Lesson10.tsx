import React, { useState } from 'react';
import { 
  Rocket, 
  TrendingUp, 
  Globe, 
  Briefcase, 
  Cpu, 
  Leaf, 
  Home, 
  CheckCircle2, 
  XCircle, 
  BookOpen,
  Eye,
  EyeOff
} from 'lucide-react';

export default function App() {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-200">
      
      {/* Header / Introducción */}
      <header className="bg-indigo-900 text-white py-16 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-800 rounded-full">
              <Rocket className="w-8 h-8 text-indigo-300" />
            </div>
            <h2 className="text-xl font-semibold text-indigo-300 uppercase tracking-wider">Lesson 10</h2>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Seeing into the Future</h1>
          <p className="text-lg md:text-xl text-indigo-100 leading-relaxed max-w-3xl">
            En esta lección aprenderás a hacer predicciones sobre el futuro utilizando <strong>“will”</strong> y <strong>“won’t”</strong>, junto con los adverbios <strong>“definitely”</strong> y <strong>“probably”</strong>. También ampliarás tu vocabulario relacionado con la vida futura para expresar tus ideas sobre lo que ocurrirá.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* Sección 1: Grammar */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-800">1. Grammar: Will / Won’t + Definitely / Probably</h2>
          </div>

          <p className="text-lg text-slate-600 mb-8">
            El auxiliar <strong>“will”</strong> se usa para hacer predicciones, decisiones espontáneas o expresar creencias sobre el futuro.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-emerald-500">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                <h3 className="text-xl font-bold text-slate-800">Afirmativa</h3>
              </div>
              <p className="text-sm font-mono bg-slate-100 p-3 rounded mb-4 text-slate-700">
                Sujeto + <span className="text-emerald-600 font-bold">will</span> + verbo base
              </p>
              <p className="text-lg italic text-slate-600">"I <span className="text-emerald-500 font-semibold">will travel</span> in the future."</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-rose-500">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-6 h-6 text-rose-500" />
                <h3 className="text-xl font-bold text-slate-800">Negativa</h3>
              </div>
              <p className="text-sm font-mono bg-slate-100 p-3 rounded mb-4 text-slate-700">
                Sujeto + <span className="text-rose-600 font-bold">will not (won't)</span> + verbo base
              </p>
              <p className="text-lg italic text-slate-600">"She <span className="text-rose-500 font-semibold">won't live</span> in the city."</p>
            </div>
          </div>

          {/* Sugerencia Visual: Escala de Certeza */}
          <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
            <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">Niveles de Certeza (Certainty Levels)</h3>
            
            <div className="relative pt-8 pb-12 px-4 md:px-12">
              <div className="absolute top-1/2 left-4 md:left-12 right-4 md:right-12 h-3 bg-gradient-to-r from-slate-300 via-indigo-300 to-indigo-600 rounded-full -translate-y-1/2"></div>
              
              <div className="relative flex justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-slate-400 border-4 border-white shadow z-10 mb-2"></div>
                  <span className="font-bold text-slate-700">Probably won't</span>
                  <span className="text-sm text-slate-500">Posibilidad baja</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-indigo-400 border-4 border-white shadow z-10 mb-2"></div>
                  <span className="font-bold text-indigo-700">Probably will</span>
                  <span className="text-sm text-indigo-500">Posibilidad media</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-indigo-700 border-4 border-white shadow z-10 mb-2"></div>
                  <span className="font-bold text-indigo-900">Definitely will</span>
                  <span className="text-sm text-indigo-700">Alta certeza</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl mt-6">
              <h4 className="font-bold text-slate-800 mb-4">Posición en la oración:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-sm font-bold shrink-0">Afirmativo</span>
                  <span className="text-slate-700">Después de "will": <br/><span className="italic text-slate-500">I will <strong className="text-indigo-600">definitely</strong> study abroad.</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded text-sm font-bold shrink-0">Negativo</span>
                  <span className="text-slate-700">Antes de "won't": <br/><span className="italic text-slate-500">She <strong className="text-indigo-600">probably</strong> won't buy a house.</span></span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sección 2: Vocabulary */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <Globe className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-800">2. Vocabulary: Predictions & Future Life</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Predicciones */}
            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-4">Predicciones (Predictions)</h3>
              <ul className="space-y-3">
                {[
                  { en: 'Predict', es: 'predecir' },
                  { en: 'Future', es: 'futuro' },
                  { en: 'Change', es: 'cambiar' },
                  { en: 'Improve', es: 'mejorar' },
                  { en: 'Develop', es: 'desarrollarse' }
                ].map((word, i) => (
                  <li key={i} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-slate-100 hover:border-indigo-300 transition-colors">
                    <span className="font-bold text-slate-800 text-lg">{word.en}</span>
                    <span className="text-slate-500">{word.es}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vida Futura Visual Cards */}
            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-4">Vida futura (Future Life)</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <TrendingUp size={20}/>, en: 'Career', es: 'carrera' },
                  { icon: <Briefcase size={20}/>, en: 'Job', es: 'trabajo' },
                  { icon: <Globe size={20}/>, en: 'Travel', es: 'viajar' },
                  { icon: <Cpu size={20}/>, en: 'Technology', es: 'tecnología' },
                  { icon: <Leaf size={20}/>, en: 'Environment', es: 'medio ambiente' },
                  { icon: <Home size={20}/>, en: 'House', es: 'casa' },
                ].map((item, i) => (
                  <div key={i} className="bg-indigo-50 flex flex-col items-center justify-center p-4 rounded-lg text-center hover:bg-indigo-100 transition-colors border border-indigo-100">
                    <div className="text-indigo-600 mb-2">{item.icon}</div>
                    <span className="font-bold text-slate-800">{item.en}</span>
                    <span className="text-xs text-slate-500">{item.es}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sección 3: Uso Integrado */}
        <section className="bg-slate-800 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Cpu className="w-48 h-48" />
          </div>
          <h2 className="text-3xl font-bold mb-6 relative z-10">3. Uso integrado: Gramática + Vocabulario</h2>
          <p className="text-slate-300 mb-8 relative z-10">Ejemplos de cómo combinar las estructuras para expresar opiniones y predicciones:</p>
          
          <div className="space-y-4 relative z-10 text-lg">
            <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 backdrop-blur-sm">
              I <span className="text-emerald-400 font-bold">will definitely have</span> a good career.
            </div>
            <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 backdrop-blur-sm">
              People <span className="text-emerald-400 font-bold">will probably travel</span> more in the future.
            </div>
            <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 backdrop-blur-sm">
              Technology <span className="text-emerald-400 font-bold">will definitely improve</span>.
            </div>
            <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 backdrop-blur-sm">
              We <span className="text-rose-400 font-bold">probably won't live</span> in big cities.
            </div>
            <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 backdrop-blur-sm">
              The environment <span className="text-emerald-400 font-bold">will change</span>.
            </div>
          </div>
        </section>

        {/* Sección 4: Ejercicios */}
        <section>
          <div className="flex items-center justify-between mb-8 border-b pb-4">
            <div className="flex items-center gap-3">
               <BookOpen className="w-8 h-8 text-indigo-600" />
               <h2 className="text-3xl font-bold text-slate-800">4. Ejercicios Prácticos</h2>
            </div>
            <button 
              onClick={() => setShowAnswers(!showAnswers)}
              className="flex items-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-full font-semibold transition-colors"
            >
              {showAnswers ? <EyeOff size={18} /> : <Eye size={18} />}
              {showAnswers ? "Ocultar Respuestas" : "Ver Respuestas"}
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ejercicio A */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg text-indigo-900 mb-4">A. Completa con "will" o "won't"</h3>
              <ol className="list-decimal list-inside space-y-4 text-slate-700">
                <li>I <span className="font-mono text-indigo-600 border-b-2 border-indigo-200 px-2">{showAnswers ? "will" : "________"}</span> travel next year.</li>
                <li>She <span className="font-mono text-indigo-600 border-b-2 border-indigo-200 px-2">{showAnswers ? "will" : "________"}</span> work in a big company.</li>
                <li>They <span className="font-mono text-indigo-600 border-b-2 border-indigo-200 px-2">{showAnswers ? "will / won't" : "________"}</span> live in another country.</li>
                <li>We <span className="font-mono text-indigo-600 border-b-2 border-indigo-200 px-2">{showAnswers ? "will" : "________"}</span> have a better future.</li>
                <li>He <span className="font-mono text-indigo-600 border-b-2 border-indigo-200 px-2">{showAnswers ? "won't / will" : "________"}</span> change his job.</li>
              </ol>
            </div>

            {/* Ejercicio B */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg text-indigo-900 mb-4">B. Completa con "definitely" o "probably"</h3>
              <ol className="list-decimal list-inside space-y-4 text-slate-700">
                <li>I will <span className="font-mono text-emerald-600 border-b-2 border-emerald-200 px-2">{showAnswers ? "definitely" : "________"}</span> study English.</li>
                <li>She will <span className="font-mono text-emerald-600 border-b-2 border-emerald-200 px-2">{showAnswers ? "probably" : "________"}</span> become a doctor.</li>
                <li>They will <span className="font-mono text-emerald-600 border-b-2 border-emerald-200 px-2">{showAnswers ? "definitely" : "________"}</span> travel abroad.</li>
                <li>He will <span className="font-mono text-emerald-600 border-b-2 border-emerald-200 px-2">{showAnswers ? "probably" : "________"}</span> buy a house.</li>
              </ol>
            </div>

            {/* Ejercicio C */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg text-indigo-900 mb-4">C. Reescribe la oración</h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <p className="text-sm text-slate-500 mb-1">I am sure she will pass the exam.</p>
                  <p>→ She <span className="font-mono text-indigo-600 border-b-2 border-indigo-200 px-2">{showAnswers ? "will definitely" : "________"}</span> pass the exam.</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">I think they will not move.</p>
                  <p>→ They <span className="font-mono text-indigo-600 border-b-2 border-indigo-200 px-2">{showAnswers ? "probably won't" : "________"}</span> move.</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">I am sure he will not fail.</p>
                  <p>→ He <span className="font-mono text-indigo-600 border-b-2 border-indigo-200 px-2">{showAnswers ? "definitely won't" : "________"}</span> fail.</p>
                </div>
              </div>
            </div>

            {/* Ejercicio D */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg text-indigo-900 mb-4">D. Traduce al inglés</h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Probablemente viajaré en el futuro.</p>
                  {showAnswers && <p className="text-indigo-600 font-medium bg-indigo-50 p-2 rounded">I will probably travel in the future.</p>}
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Definitivamente tendré un buen trabajo.</p>
                  {showAnswers && <p className="text-indigo-600 font-medium bg-indigo-50 p-2 rounded">I will definitely have a good job.</p>}
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Ellos no vivirán en la ciudad.</p>
                  {showAnswers && <p className="text-indigo-600 font-medium bg-indigo-50 p-2 rounded">They won't live in the city.</p>}
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">La tecnología mejorará.</p>
                  {showAnswers && <p className="text-indigo-600 font-medium bg-indigo-50 p-2 rounded">Technology will improve.</p>}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

    
    </div>
  );
}