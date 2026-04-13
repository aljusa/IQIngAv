import React, { useState } from 'react';
import { 
  Sun, CloudRain, Cloud, Wind, CloudLightning, Snowflake, 
  Thermometer, ThermometerSun, ThermometerSnowflake, 
  BrainCircuit, Binoculars, CalendarDays, ArrowRight,
  CheckCircle2, HelpCircle
} from 'lucide-react';

// --- COMPONENTS ---

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8 text-center">
    <h2 className="text-3xl font-extrabold text-blue-900 mb-2">{title}</h2>
    {subtitle && <p className="text-lg text-blue-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const GrammarCard = ({ title, usage, examples, visualSuggestion, Diagram }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
    <div className="bg-blue-600 text-white p-4">
      <h3 className="text-xl font-bold text-center">{title}</h3>
    </div>
    
    <div className="p-6 flex-grow flex flex-col gap-4">
      <div>
        <h4 className="font-semibold text-blue-800 border-b pb-1 mb-2">Explicación y Uso</h4>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          {usage.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl">
        <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
          <HelpCircle size={18} /> Ejemplos
        </h4>
        <ul className="space-y-2 text-gray-700 italic">
          {examples.map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-blue-400 font-bold">"</span>
              {item}
              <span className="text-blue-400 font-bold">"</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Sugerencia Visual Generada
        </h4>
        <p className="text-xs text-gray-400 mb-4">{visualSuggestion}</p>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 flex justify-center items-center shadow-inner">
          <Diagram />
        </div>
      </div>
    </div>
  </div>
);

const VocabularyItem = ({ word, translation, icon: Icon, colorClass }) => (
  <div className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 ${colorClass} bg-white shadow-sm hover:-translate-y-1 transition-transform cursor-pointer`}>
    <Icon size={40} className="mb-3" />
    <span className="font-bold text-lg text-gray-800">{word}</span>
    <span className="text-sm text-gray-500">{translation}</span>
  </div>
);

const ExerciseBox = ({ title, questions, type }) => {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-6">
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <button 
          onClick={() => setShowAnswers(!showAnswers)}
          className="px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-200 transition-colors text-sm flex items-center gap-2"
        >
          {showAnswers ? 'Ocultar Respuestas' : 'Ver Respuestas'}
          {showAnswers && <CheckCircle2 size={16} />}
        </button>
      </div>
      <ul className="space-y-4">
        {questions.map((q, idx) => (
          <li key={idx} className="flex flex-col md:flex-row md:items-center gap-2 text-gray-700">
            <span className="font-medium min-w-[24px] text-blue-500">{idx + 1}.</span>
            <span className="text-lg">{q.question}</span>
            {showAnswers && (
              <span className="ml-0 md:ml-auto inline-flex items-center gap-1 text-green-600 bg-green-50 px-3 py-1 rounded-full font-semibold animate-pulse">
                <ArrowRight size={16} /> {q.answer}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- MAIN APPLICATION ---

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800 selection:bg-blue-200">
      
      {/* HEADER HERO */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-4 shadow-lg text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none flex justify-around items-center">
           <Sun size={120} /> <CloudRain size={120} /> <Wind size={120} />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="bg-blue-800 text-blue-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
            Lesson 18
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Weather Wise</h1>
          <p className="text-xl md:text-2xl font-light text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Aprende a integrar el futuro (will, going to, present progressive) para describir, predecir y planear según el clima.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-12 px-4 space-y-20">
        
        {/* SECTION 1: GRAMMAR */}
        <section>
          <SectionHeader 
            title="1. Grammar: Future Forms with Weather" 
            subtitle="Diferentes estructuras según tu intención al hablar del clima." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Concept A */}
            <GrammarCard 
              title='A. "Will"'
              usage={["Predicciones basadas en opinión", "Pronósticos generales"]}
              examples={[
                "It will rain tomorrow.",
                "It will be sunny this weekend.",
                "I think it will be cold."
              ]}
              visualSuggestion="Diagrama que muestra un pensamiento (cerebro/nube) conectando hacia un icono de clima, indicando que es una opinión."
              Diagram={() => (
                <div className="flex items-center gap-4 text-blue-500">
                  <div className="flex flex-col items-center">
                    <BrainCircuit size={48} strokeWidth={1.5} />
                    <span className="text-xs font-bold mt-1">Opinión</span>
                  </div>
                  <ArrowRight size={24} className="text-gray-300" />
                  <Sun size={48} className="text-yellow-400" strokeWidth={1.5} />
                </div>
              )}
            />

            {/* Concept B */}
            <GrammarCard 
              title='B. "Going to"'
              usage={["Predicciones con evidencia", "Hay señales claras (nubes, viento, etc.)"]}
              examples={[
                "It is going to rain. (hay nubes oscuras)",
                "It is going to be a hot day.",
                "Look at the sky! It's going to storm."
              ]}
              visualSuggestion="Diagrama que muestra binoculares observando nubes oscuras que resultan en lluvia, indicando evidencia visual."
              Diagram={() => (
                <div className="flex items-center gap-4 text-blue-500">
                  <div className="flex flex-col items-center">
                    <Binoculars size={48} strokeWidth={1.5} />
                    <span className="text-xs font-bold mt-1">Evidencia</span>
                  </div>
                  <ArrowRight size={24} className="text-gray-300" />
                  <CloudLightning size={48} className="text-slate-600" strokeWidth={1.5} />
                </div>
              )}
            />

            {/* Concept C */}
            <GrammarCard 
              title='C. Present Progressive'
              usage={["Planes relacionados con el clima", "Actividades ya organizadas"]}
              examples={[
                "We are going to the beach tomorrow.",
                "I am staying home tonight.",
                "They are traveling this weekend."
              ]}
              visualSuggestion="Diagrama de un calendario marcado enlazado con una actividad, indicando organización previa."
              Diagram={() => (
                <div className="flex items-center gap-4 text-blue-500">
                  <div className="flex flex-col items-center">
                    <CalendarDays size={48} strokeWidth={1.5} />
                    <span className="text-xs font-bold mt-1">Plan Organizado</span>
                  </div>
                  <ArrowRight size={24} className="text-gray-300" />
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Sun size={32} className="text-yellow-500" strokeWidth={2} />
                  </div>
                </div>
              )}
            />
          </div>
        </section>

        {/* SECTION 2: VOCABULARY */}
        <section>
          <SectionHeader 
            title="2. Vocabulary: Weather & Temperature" 
            subtitle="Palabras esenciales para describir las condiciones atmosféricas." 
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
            <VocabularyItem word="Sunny" translation="Soleado" icon={Sun} colorClass="border-yellow-200 text-yellow-500" />
            <VocabularyItem word="Rainy" translation="Lluvioso" icon={CloudRain} colorClass="border-blue-200 text-blue-500" />
            <VocabularyItem word="Cloudy" translation="Nublado" icon={Cloud} colorClass="border-gray-200 text-gray-500" />
            <VocabularyItem word="Windy" translation="Ventoso" icon={Wind} colorClass="border-teal-200 text-teal-500" />
            <VocabularyItem word="Stormy" translation="Tormentoso" icon={CloudLightning} colorClass="border-purple-200 text-purple-600" />
            <VocabularyItem word="Snowy" translation="Nevado" icon={Snowflake} colorClass="border-cyan-200 text-cyan-500" />
            <VocabularyItem word="Hot" translation="Caluroso" icon={ThermometerSun} colorClass="border-red-200 text-red-500" />
            <VocabularyItem word="Warm" translation="Templado" icon={Thermometer} colorClass="border-orange-200 text-orange-400" />
            <VocabularyItem word="Cool" translation="Fresco" icon={Thermometer} colorClass="border-green-200 text-green-500" />
            <VocabularyItem word="Cold" translation="Frío" icon={ThermometerSnowflake} colorClass="border-blue-300 text-blue-600" />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
            <h4 className="text-lg font-bold text-gray-700 mb-4">Expresiones Comunes</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-gray-100 px-4 py-2 rounded-full font-medium">It’s raining (está lloviendo)</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full font-medium">It’s sunny (está soleado)</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full font-medium">The weather is nice (el clima es agradable)</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full font-medium">The temperature is high (la temperatura es alta)</span>
            </div>
          </div>
        </section>

        {/* SECTION 3: INTEGRATION */}
        <section className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 opacity-20">
            <Sun size={200} />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-6">3. Uso Integrado</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Estos ejemplos muestran cómo hablar del clima y tomar decisiones basadas en él:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-700/50 p-6 rounded-xl backdrop-blur-sm border border-blue-500/30">
                <ul className="space-y-4 text-lg font-medium">
                  <li className="flex items-start gap-3"><ArrowRight className="mt-1 flex-shrink-0 text-blue-300" /> It will probably rain tomorrow.</li>
                  <li className="flex items-start gap-3"><ArrowRight className="mt-1 flex-shrink-0 text-blue-300" /> It is going to be very hot today.</li>
                  <li className="flex items-start gap-3"><ArrowRight className="mt-1 flex-shrink-0 text-blue-300" /> I think it will be sunny.</li>
                </ul>
              </div>
              <div className="bg-blue-700/50 p-6 rounded-xl backdrop-blur-sm border border-blue-500/30">
                <ul className="space-y-4 text-lg font-medium">
                  <li className="flex items-start gap-3"><ArrowRight className="mt-1 flex-shrink-0 text-yellow-300" /> We are going to stay home because it’s cold.</li>
                  <li className="flex items-start gap-3"><ArrowRight className="mt-1 flex-shrink-0 text-yellow-300" /> They are going to the beach because it’s sunny.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: EXERCISES */}
        <section>
          <SectionHeader 
            title="4. Práctica interactiva" 
            subtitle="Pon a prueba lo que has aprendido. Intenta responder antes de revelar las soluciones." 
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <ExerciseBox 
              title='A. Completa con "will" o "going to"'
              questions={[
                { question: "It ________ rain tomorrow. (predicción)", answer: "will" },
                { question: "Look at the clouds! It ________ rain.", answer: "is going to" },
                { question: "I think it ________ be sunny.", answer: "will" },
                { question: "It ________ be cold tonight.", answer: "will" }
              ]}
            />
            
            <ExerciseBox 
              title="B. Elige la opción correcta"
              questions={[
                { question: "It (will / is going to) be hot. (opinión)", answer: "will" },
                { question: "Look! It (will / is going to) snow. (evidencia)", answer: "is going to" },
                { question: "I think it (will / is going to) rain.", answer: "will" }
              ]}
            />

            <ExerciseBox 
              title="C. Completa con vocabulario"
              questions={[
                { question: "It’s very ________ (soleado).", answer: "sunny" },
                { question: "It’s ________ (lluvioso) today.", answer: "rainy" },
                { question: "The weather is ________ (frío).", answer: "cold" },
                { question: "It’s ________ (ventoso).", answer: "windy" }
              ]}
            />

            <ExerciseBox 
              title="D. Traduce al inglés"
              questions={[
                { question: "Va a llover mañana.", answer: "It is going to rain tomorrow." },
                { question: "Creo que hará calor.", answer: "I think it will be hot." },
                { question: "Está nublado hoy.", answer: "It is cloudy today." },
                { question: "Nos quedamos en casa porque hace frío.", answer: "We are staying home because it's cold." }
              ]}
            />
          </div>
        </section>

      </main>


    </div>
  );
}