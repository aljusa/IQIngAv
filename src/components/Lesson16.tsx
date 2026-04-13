import React, { useState } from 'react';
import { 
  Plane, 
  CalendarClock, 
  Map, 
  Briefcase, 
  Ticket, 
  Sun, 
  Building2, 
  Bus, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight,
  Eye,
  EyeOff
} from 'lucide-react';

export default function App() {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* 1. HERO & INTRODUCCIÓN */}
      <header className="bg-gradient-to-br from-indigo-600 to-blue-500 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 text-indigo-50 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
              Lesson 16
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 flex items-center gap-4">
            Holidays <Plane className="w-10 h-10 md:w-12 md:h-12 text-blue-200" />
          </h1>
          <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-3xl">
            Aprende a usar el <strong>presente simple (simple present)</strong> para hablar del futuro cuando te refieres a <strong>horarios, itinerarios y programas establecidos</strong>. Además, amplía tu vocabulario relacionado con viajes y vacaciones.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* 2. GRAMMAR: SIMPLE PRESENT WITH FUTURE MEANING */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
              <CalendarClock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              Grammar: Simple Present with Future Meaning
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-8">
            <p className="text-lg text-slate-600 mb-6">
              El <strong>presente simple</strong> se usa para hablar del futuro cuando se trata de horarios oficiales (transportes, eventos), programas fijos o itinerarios.
            </p>

            {/* Sugerencia Visual: Diagramas de Estructura */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Afirmativa */}
              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                </div>
                <h3 className="font-bold text-emerald-800 mb-2">Afirmativa</h3>
                <div className="flex items-center gap-2 text-sm font-mono bg-white p-2 rounded text-slate-600 mb-3 shadow-sm">
                  Sujeto + Verbo (Presente)
                </div>
                <p className="text-emerald-700 italic">"The flight leaves at 8 pm."</p>
              </div>

              {/* Negativa */}
              <div className="bg-rose-50 rounded-xl p-5 border border-rose-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                  <span className="text-5xl font-bold text-rose-500">-</span>
                </div>
                <h3 className="font-bold text-rose-800 mb-2">Negativa</h3>
                <div className="flex items-center gap-2 text-sm font-mono bg-white p-2 rounded text-slate-600 mb-3 shadow-sm">
                  Sujeto + do/does not + Verbo
                </div>
                <p className="text-rose-700 italic">"The bus does not arrive at noon."</p>
              </div>

              {/* Interrogativa */}
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                  <HelpCircle className="w-12 h-12 text-amber-500" />
                </div>
                <h3 className="font-bold text-amber-800 mb-2">Interrogativa</h3>
                <div className="flex items-center gap-2 text-sm font-mono bg-white p-2 rounded text-slate-600 mb-3 shadow-sm">
                  Do/Does + Sujeto + Verbo?
                </div>
                <p className="text-amber-700 italic">"Does the train leave at 6 am?"</p>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <h4 className="font-bold text-blue-900 mb-2">Uso Común (Expresiones de tiempo específicas):</h4>
              <ul className="space-y-1 text-blue-800">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4" /> The plane arrives <strong>tomorrow</strong>.</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4" /> The tour starts <strong>at 9 am</strong>.</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4" /> The hotel opens <strong>next week</strong>.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. VOCABULARY: TRAVEL & HOLIDAYS */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-sky-100 p-3 rounded-xl text-sky-600">
              <Map className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              Vocabulary: Travel & Holidays
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Travel Column */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-700 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5 text-sky-500" /> Viajes (Travel)
              </h3>
              <ul className="space-y-3">
                <VocabItem icon={<Plane />} word="Flight" translation="Vuelo" />
                <VocabItem icon={<Ticket />} word="Ticket" translation="Boleto" />
                <VocabItem icon={<Building2 />} word="Airport" translation="Aeropuerto" />
                <VocabItem icon={<Briefcase />} word="Luggage" translation="Equipaje" />
                <VocabItem icon={<Map />} word="Passport" translation="Pasaporte" />
              </ul>
            </div>

            {/* Holidays Column */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-700 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
                <Sun className="w-5 h-5 text-amber-500" /> Vacaciones (Holidays)
              </h3>
              <ul className="space-y-3">
                <VocabItem icon={<CalendarClock />} word="Holiday / Vacation" translation="Vacaciones" />
                <VocabItem icon={<Briefcase />} word="Trip" translation="Viaje" />
                <VocabItem icon={<Building2 />} word="Hotel" translation="Hotel" />
                <VocabItem icon={<Sun />} word="Beach" translation="Playa" />
                <VocabItem icon={<Bus />} word="Tour" translation="Tour / Recorrido" />
              </ul>
            </div>
          </div>
        </section>

        {/* 4. USO INTEGRADO (Visualización de Pizarrón de Salidas) */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              Uso Integrado
            </h2>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 shadow-lg text-slate-300 font-mono">
            <div className="text-center text-slate-500 text-sm mb-4 tracking-widest uppercase border-b border-slate-700 pb-2">
              Itinerary & Schedule Board
            </div>
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-sky-400">FLIGHT 204</span>
                <span className="text-white">The flight leaves at 10 am.</span>
              </li>
              <li className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-amber-400">CITY TOUR</span>
                <span className="text-white">The tour starts tomorrow.</span>
              </li>
              <li className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-emerald-400">SUMMER TRIP</span>
                <span className="text-white">Our trip begins next week.</span>
              </li>
              <li className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-purple-400">GRAND HOTEL</span>
                <span className="text-white">The hotel opens in June.</span>
              </li>
              <li className="flex flex-col md:flex-row md:items-center justify-between">
                <span className="text-rose-400">AIRPORT BUS</span>
                <span className="text-white">The bus arrives at the airport at 6 pm.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 5. EJERCICIOS */}
        <section className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10 relative overflow-hidden">
          {/* Decoración */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-bl-full -z-10 opacity-50"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-100 pb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Práctica</h2>
              <p className="text-slate-500">Aplica lo que has aprendido en estos ejercicios.</p>
            </div>
            <button 
              onClick={() => setShowAnswers(!showAnswers)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors shadow-sm"
            >
              {showAnswers ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              {showAnswers ? 'Ocultar Respuestas' : 'Ver Respuestas'}
            </button>
          </div>

          <div className="space-y-10">
            {/* Ejercicio A */}
            <div>
              <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">A</span>
                Completa con el verbo correcto en presente simple
              </h3>
              <ul className="space-y-3 pl-4 md:pl-10">
                <ExerciseItem q="1. The flight ________ (leave) at 9 am." a="leaves" showAnswer={showAnswers} />
                <ExerciseItem q="2. The tour ________ (start) tomorrow." a="starts" showAnswer={showAnswers} />
                <ExerciseItem q="3. The bus ________ (arrive) at noon." a="arrives" showAnswer={showAnswers} />
                <ExerciseItem q="4. The hotel ________ (open) next month." a="opens" showAnswer={showAnswers} />
              </ul>
            </div>

            {/* Ejercicio B */}
            <div>
              <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">B</span>
                Forma oraciones correctas
              </h3>
              <ul className="space-y-3 pl-4 md:pl-10">
                <ExerciseItem q="1. the / leaves / plane / at 8 pm" a="The plane leaves at 8 pm." showAnswer={showAnswers} />
                <ExerciseItem q="2. starts / the / tour / tomorrow" a="The tour starts tomorrow." showAnswer={showAnswers} />
                <ExerciseItem q="3. arrives / the / train / at 6 am" a="The train arrives at 6 am." showAnswer={showAnswers} />
              </ul>
            </div>

            {/* Ejercicio C */}
            <div>
              <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">C</span>
                Forma preguntas
              </h3>
              <ul className="space-y-3 pl-4 md:pl-10">
                <ExerciseItem q="1. the flight / leave / at 7 pm" a="Does the flight leave at 7 pm?" showAnswer={showAnswers} />
                <ExerciseItem q="2. the tour / start / tomorrow" a="Does the tour start tomorrow?" showAnswer={showAnswers} />
                <ExerciseItem q="3. the bus / arrive / at 5 pm" a="Does the bus arrive at 5 pm?" showAnswer={showAnswers} />
              </ul>
            </div>

            {/* Ejercicio D */}
            <div>
              <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">D</span>
                Traduce al inglés
              </h3>
              <ul className="space-y-3 pl-4 md:pl-10">
                <ExerciseItem q="1. El vuelo sale a las 8 pm." a="The flight leaves at 8 pm." showAnswer={showAnswers} />
                <ExerciseItem q="2. El tour empieza mañana." a="The tour starts tomorrow." showAnswer={showAnswers} />
                <ExerciseItem q="3. El hotel abre la próxima semana." a="The hotel opens next week." showAnswer={showAnswers} />
                <ExerciseItem q="4. El autobús llega al aeropuerto a las 6 pm." a="The bus arrives at the airport at 6 pm." showAnswer={showAnswers} />
              </ul>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  );
}

// Componentes Auxiliares
function VocabItem({ icon, word, translation }) {
  return (
    <li className="flex items-center gap-4 bg-slate-50 hover:bg-indigo-50 transition-colors p-3 rounded-lg group">
      <div className="text-slate-400 group-hover:text-indigo-500 transition-colors">
        {React.cloneElement(icon, { className: "w-5 h-5" })}
      </div>
      <div className="flex-1 flex justify-between items-center">
        <span className="font-semibold text-slate-800">{word}</span>
        <span className="text-slate-500 text-sm">{translation}</span>
      </div>
    </li>
  );
}

function ExerciseItem({ q, a, showAnswer }) {
  return (
    <li className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-3 transition-all">
      <span className="text-slate-700 font-medium">{q}</span>
      {showAnswer ? (
        <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg font-bold text-sm shadow-inner transition-all duration-300 transform scale-100 opacity-100">
          {a}
        </span>
      ) : (
        <span className="bg-slate-200 text-slate-400 px-4 py-2 rounded-lg text-sm italic transition-all duration-300 transform scale-95 opacity-50">
          Oculto
        </span>
      )}
    </li>
  );
}