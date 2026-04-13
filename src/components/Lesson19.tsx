import React, { useState } from 'react';
import { 
  CalendarCheck, 
  Clock, 
  Briefcase, 
  Stethoscope, 
  MessageCircle, 
  CheckCircle2, 
  BookOpen,
  Edit3,
  CalendarDays,
  ChevronRight,
  Eye,
  EyeOff
} from 'lucide-react';

export default function App() {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      {/* Encabezado / Hero Section */}
      <header className="bg-blue-600 text-white py-12 px-6 shadow-md">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-blue-200 mb-4 text-sm font-semibold tracking-wider uppercase">
            <BookOpen size={18} />
            <span>Lesson 19</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Making Arrangements</h1>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            Aprende a usar el <strong>presente continuo (present continuous)</strong> para hablar de planes futuros ya organizados. Domina el vocabulario clave para agendas y reuniones.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        
        {/* SECCIÓN 1: Gramática */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
              <CalendarDays size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-800">1. Gramática: Present Continuous para Planes Fijos</h2>
          </div>
          
          <p className="text-lg text-slate-600 mb-8">
            El presente continuo se usa para expresar <strong>planes definitivos</strong> en el futuro, especialmente cuando ya hay un acuerdo previo, un horario o lugar definido, y es un compromiso real.
          </p>

          {/* DIAGRAMA VISUAL: Fórmulas Gramaticales */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
            <div className="bg-slate-100 px-6 py-4 border-b border-slate-200">
              <h3 className="font-semibold text-slate-700">Estructura Gramatical</h3>
            </div>
            <div className="p-6 space-y-6">
              {/* Afirmativa */}
              <div>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-3">Afirmativa</span>
                <div className="flex flex-wrap items-center gap-2 md:gap-4 font-mono text-sm md:text-base">
                  <div className="bg-slate-100 px-4 py-2 rounded border border-slate-300 font-semibold text-slate-700">Sujeto</div>
                  <span className="text-slate-400">+</span>
                  <div className="bg-blue-50 px-4 py-2 rounded border border-blue-200 text-blue-700 font-semibold">am / is / are</div>
                  <span className="text-slate-400">+</span>
                  <div className="bg-purple-50 px-4 py-2 rounded border border-purple-200 text-purple-700 font-semibold">verbo + ing</div>
                </div>
                <p className="mt-2 text-slate-500 italic flex items-center gap-2">
                  <ChevronRight size={16} className="text-green-500" /> "I am meeting my boss tomorrow."
                </p>
              </div>

              {/* Negativa */}
              <div>
                <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-3">Negativa</span>
                <div className="flex flex-wrap items-center gap-2 md:gap-4 font-mono text-sm md:text-base">
                  <div className="bg-slate-100 px-4 py-2 rounded border border-slate-300 font-semibold text-slate-700">Sujeto</div>
                  <span className="text-slate-400">+</span>
                  <div className="bg-blue-50 px-4 py-2 rounded border border-blue-200 text-blue-700 font-semibold">am/is/are + not</div>
                  <span className="text-slate-400">+</span>
                  <div className="bg-purple-50 px-4 py-2 rounded border border-purple-200 text-purple-700 font-semibold">verbo + ing</div>
                </div>
                <p className="mt-2 text-slate-500 italic flex items-center gap-2">
                  <ChevronRight size={16} className="text-red-500" /> "She is not attending the meeting."
                </p>
              </div>

              {/* Interrogativa */}
              <div>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-3">Interrogativa</span>
                <div className="flex flex-wrap items-center gap-2 md:gap-4 font-mono text-sm md:text-base">
                  <div className="bg-blue-50 px-4 py-2 rounded border border-blue-200 text-blue-700 font-semibold">Am / Is / Are</div>
                  <span className="text-slate-400">+</span>
                  <div className="bg-slate-100 px-4 py-2 rounded border border-slate-300 font-semibold text-slate-700">Sujeto</div>
                  <span className="text-slate-400">+</span>
                  <div className="bg-purple-50 px-4 py-2 rounded border border-purple-200 text-purple-700 font-semibold">verbo + ing</div>
                  <span className="text-slate-400">?</span>
                </div>
                <p className="mt-2 text-slate-500 italic flex items-center gap-2">
                  <ChevronRight size={16} className="text-amber-500" /> "Are you seeing the doctor today?"
                </p>
              </div>
            </div>
          </div>

          {/* Clave de uso */}
          <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500 flex items-start gap-4">
            <Clock className="text-blue-500 shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Uso Clave: Expresiones de Tiempo</h4>
              <p className="text-blue-800 text-sm mb-3">Siempre se acompaña de expresiones de tiempo futuras específicas para indicar que el plan ya está confirmado:</p>
              <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm italic">
                <li>I am having an appointment <strong>at 3 pm</strong>.</li>
                <li>We are meeting clients <strong>tomorrow</strong>.</li>
                <li>They are visiting us <strong>this weekend</strong>.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: Vocabulario */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600">
              <BookOpen size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-800">2. Vocabulario: Meetings & Appointments</h2>
          </div>

          {/* SUGERENCIA VISUAL: Tarjetas de Vocabulario */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Reuniones */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4 text-indigo-600">
                <Briefcase size={28} />
                <h3 className="text-xl font-bold text-slate-800">Reuniones (Meetings)</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">Meeting</span>
                  <span className="text-slate-500">reunión</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">Conference</span>
                  <span className="text-slate-500">conferencia</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">Client</span>
                  <span className="text-slate-500">cliente</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">Team</span>
                  <span className="text-slate-500">equipo</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Schedule</span>
                  <span className="text-slate-500">agenda / horario</span>
                </li>
              </ul>
            </div>

            {/* Citas */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4 text-teal-600">
                <Stethoscope size={28} />
                <h3 className="text-xl font-bold text-slate-800">Citas (Appointments)</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">Appointment</span>
                  <span className="text-slate-500">cita</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">Doctor</span>
                  <span className="text-slate-500">doctor</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">Dentist</span>
                  <span className="text-slate-500">dentista</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">Interview</span>
                  <span className="text-slate-500">entrevista</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Visit</span>
                  <span className="text-slate-500">visita</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: Uso Integrado */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
              <MessageCircle size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-800">3. Uso Integrado</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
            <p className="text-slate-600 mb-6">Observa cómo combinamos el vocabulario y la gramática para hablar con claridad sobre compromisos ya organizados:</p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-3">
                <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                <p className="text-slate-700">I <strong className="text-blue-600">am meeting</strong> a client <span className="text-purple-600 font-medium">at 10 am</span>.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-3">
                <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                <p className="text-slate-700">She <strong className="text-blue-600">is having</strong> a doctor’s appointment <span className="text-purple-600 font-medium">tomorrow</span>.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-3">
                <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                <p className="text-slate-700">We <strong className="text-blue-600">are attending</strong> a conference <span className="text-purple-600 font-medium">next week</span>.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-3">
                <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                <p className="text-slate-700">They <strong className="text-blue-600">are visiting</strong> their team <span className="text-purple-600 font-medium">this afternoon</span>.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-3 md:col-span-2">
                <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                <p className="text-slate-700">He <strong className="text-blue-600">is having</strong> an interview <span className="text-purple-600 font-medium">later</span>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: Ejercicios */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                <Edit3 size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">4. Ejercicios Prácticos</h2>
            </div>
            
            <button 
              onClick={() => setShowAnswers(!showAnswers)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showAnswers ? 'bg-slate-200 text-slate-700 hover:bg-slate-300' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {showAnswers ? <EyeOff size={18} /> : <Eye size={18} />}
              {showAnswers ? 'Ocultar Respuestas' : 'Mostrar Respuestas'}
            </button>
          </div>

          <div className="space-y-8">
            
            {/* Ejercicio A */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">A. Completa con la forma correcta del presente continuo</h3>
              <ol className="list-decimal list-inside space-y-4 text-slate-700">
                <li className="pl-2">
                  I <span className="inline-block min-w-[100px] border-b-2 border-slate-300 mx-2 text-center text-blue-600 font-semibold">{showAnswers ? "am meeting" : "(meet)"}</span> my boss tomorrow.
                </li>
                <li className="pl-2">
                  She <span className="inline-block min-w-[100px] border-b-2 border-slate-300 mx-2 text-center text-blue-600 font-semibold">{showAnswers ? "is having" : "(have)"}</span> an appointment at 4 pm.
                </li>
                <li className="pl-2">
                  They <span className="inline-block min-w-[100px] border-b-2 border-slate-300 mx-2 text-center text-blue-600 font-semibold">{showAnswers ? "are visiting" : "(visit)"}</span> a client today.
                </li>
                <li className="pl-2">
                  We <span className="inline-block min-w-[100px] border-b-2 border-slate-300 mx-2 text-center text-blue-600 font-semibold">{showAnswers ? "are attending" : "(attend)"}</span> a conference next week.
                </li>
              </ol>
            </div>

            {/* Ejercicio B & C */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Ejercicio B */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">B. Forma oraciones correctas</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="text-slate-500 text-sm mb-1 italic">meeting / I / am / a client / tomorrow</p>
                    <div className={`p-3 rounded bg-slate-50 border ${showAnswers ? 'border-green-300 text-green-800' : 'border-slate-200 text-slate-300'}`}>
                      {showAnswers ? "I am meeting a client tomorrow." : "Tu respuesta aquí..."}
                    </div>
                  </li>
                  <li>
                    <p className="text-slate-500 text-sm mb-1 italic">is / she / having / appointment / an</p>
                    <div className={`p-3 rounded bg-slate-50 border ${showAnswers ? 'border-green-300 text-green-800' : 'border-slate-200 text-slate-300'}`}>
                      {showAnswers ? "She is having an appointment." : "Tu respuesta aquí..."}
                    </div>
                  </li>
                  <li>
                    <p className="text-slate-500 text-sm mb-1 italic">are / we / attending / conference / a</p>
                    <div className={`p-3 rounded bg-slate-50 border ${showAnswers ? 'border-green-300 text-green-800' : 'border-slate-200 text-slate-300'}`}>
                      {showAnswers ? "We are attending a conference." : "Tu respuesta aquí..."}
                    </div>
                  </li>
                </ul>
              </div>

              {/* Ejercicio C */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">C. Forma preguntas</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="text-slate-500 text-sm mb-1 italic">you / meeting / are / your boss / tomorrow</p>
                    <div className={`p-3 rounded bg-slate-50 border ${showAnswers ? 'border-amber-300 text-amber-800' : 'border-slate-200 text-slate-300'}`}>
                      {showAnswers ? "Are you meeting your boss tomorrow?" : "Tu respuesta aquí..."}
                    </div>
                  </li>
                  <li>
                    <p className="text-slate-500 text-sm mb-1 italic">she / having / is / appointment / an</p>
                    <div className={`p-3 rounded bg-slate-50 border ${showAnswers ? 'border-amber-300 text-amber-800' : 'border-slate-200 text-slate-300'}`}>
                      {showAnswers ? "Is she having an appointment?" : "Tu respuesta aquí..."}
                    </div>
                  </li>
                  <li>
                    <p className="text-slate-500 text-sm mb-1 italic">they / visiting / are / client / a</p>
                    <div className={`p-3 rounded bg-slate-50 border ${showAnswers ? 'border-amber-300 text-amber-800' : 'border-slate-200 text-slate-300'}`}>
                      {showAnswers ? "Are they visiting a client?" : "Tu respuesta aquí..."}
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ejercicio D */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">D. Traduce al inglés</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
                  <p className="font-medium text-slate-700 mb-2">1. Tengo una reunión mañana.</p>
                  {showAnswers && <p className="text-blue-600 font-semibold animate-pulse">I am having a meeting tomorrow.</p>}
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
                  <p className="font-medium text-slate-700 mb-2">2. Ella tiene una cita con el doctor hoy.</p>
                  {showAnswers && <p className="text-blue-600 font-semibold animate-pulse">She is having a doctor's appointment today.</p>}
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
                  <p className="font-medium text-slate-700 mb-2">3. Vamos a asistir a una conferencia.</p>
                  {showAnswers && <p className="text-blue-600 font-semibold animate-pulse">We are attending a conference.</p>}
                </div>
                <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
                  <p className="font-medium text-slate-700 mb-2">4. Ellos están visitando a un cliente.</p>
                  {showAnswers && <p className="text-blue-600 font-semibold animate-pulse">They are visiting a client.</p>}
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

    </div>
  );
}