import React, { useState } from 'react';
import { 
  Coffee, 
  CarTaxiFront, 
  ConciergeBell, 
  Utensils, 
  Briefcase, 
  Info, 
  MessageSquare, 
  CheckCircle2, 
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function App() {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-12">
      {/* Header */}
      <header className="bg-blue-700 text-white py-12 px-6 shadow-md">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-200 font-semibold tracking-wider uppercase text-sm mb-2">Lesson 20</p>
          <h1 className="text-4xl font-bold mb-4">Requests and Offers in Real Life</h1>
          <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
            Aprende a hacer peticiones y ofrecimientos de manera educada utilizando estructuras como 
            <span className="font-mono bg-blue-800 px-2 py-1 rounded ml-1 text-sm">Can you...?</span>, 
            <span className="font-mono bg-blue-800 px-2 py-1 rounded mx-1 text-sm">Could you...?</span> y 
            <span className="font-mono bg-blue-800 px-2 py-1 rounded mr-1 text-sm">Would you...?</span> 
            Fundamentales en situaciones cotidianas como restaurantes, viajes o servicios.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-8 space-y-12">
        
        {/* Diagrama Visual: Escala de Formalidad */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <CheckCircle2 className="text-blue-600" />
              1. Gramática: Peticiones y Ofrecimientos
            </h2>
            <p className="text-slate-600 mt-2">
              Observa el siguiente diagrama para entender el nivel de cortesía y formalidad de cada estructura.
            </p>
          </div>

          {/* Componente Visual: Escala */}
          <div className="relative py-8">
            <div className="absolute top-1/2 left-0 w-full h-3 bg-gradient-to-r from-green-300 via-blue-400 to-indigo-600 rounded-full transform -translate-y-1/2"></div>
            
            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
              {/* Can */}
              <div className="bg-white border-2 border-green-300 rounded-xl p-4 w-64 shadow-md text-center transform transition hover:-translate-y-1">
                <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide mb-2">Informal / Cotidiano</span>
                <h3 className="text-xl font-bold text-slate-800">"Can you...?"</h3>
                <p className="text-sm text-slate-600 mt-2">Amigos y personas de confianza.</p>
                <div className="mt-3 bg-slate-50 p-2 rounded text-sm text-slate-700 italic">
                  "Can you help me?"
                </div>
              </div>

              {/* Could */}
              <div className="bg-white border-2 border-blue-400 rounded-xl p-4 w-64 shadow-md text-center transform transition hover:-translate-y-1">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide mb-2">Educado / Formal</span>
                <h3 className="text-xl font-bold text-slate-800">"Could you...?"</h3>
                <p className="text-sm text-slate-600 mt-2">Respetuoso, uso general.</p>
                <div className="mt-3 bg-slate-50 p-2 rounded text-sm text-slate-700 italic">
                  "Could you open the door?"
                </div>
              </div>

              {/* Would */}
              <div className="bg-white border-2 border-indigo-600 rounded-xl p-4 w-64 shadow-md text-center transform transition hover:-translate-y-1">
                <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide mb-2">Muy Formal / Amable</span>
                <h3 className="text-xl font-bold text-slate-800">"Would you...?"</h3>
                <p className="text-sm text-slate-600 mt-2">Contextos de servicio y cortesía.</p>
                <div className="mt-3 bg-slate-50 p-2 rounded text-sm text-slate-700 italic">
                  "Would you help me, please?"
                </div>
              </div>
            </div>
          </div>

          {/* Ofrecimientos */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-4">
            <Coffee className="text-amber-600 w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-amber-900 text-lg">Ofrecimientos Especiales</h3>
              <p className="text-amber-800 mt-1">Para ofrecer algo utilizamos <span className="font-semibold bg-amber-200 px-1 rounded">Would you like + sustantivo/verbo...?</span></p>
              <ul className="mt-2 list-disc list-inside text-amber-800 text-sm">
                <li><em>Would you like a drink?</em></li>
                <li><em>Would you like to sit here?</em></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vocabulario */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <MessageSquare className="text-blue-600" />
            2. Vocabulario: Situaciones Diarias
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Restaurante */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-4 border-b pb-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Utensils className="text-orange-600 w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">Restaurante</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between"><span className="font-medium">Menu</span> <span className="text-slate-500">menú</span></li>
                <li className="flex justify-between"><span className="font-medium">Order</span> <span className="text-slate-500">ordenar/pedir</span></li>
                <li className="flex justify-between"><span className="font-medium">Waiter</span> <span className="text-slate-500">mesero</span></li>
                <li className="flex justify-between"><span className="font-medium">Bill</span> <span className="text-slate-500">cuenta</span></li>
                <li className="flex justify-between"><span className="font-medium">Table</span> <span className="text-slate-500">mesa</span></li>
              </ul>
            </div>

            {/* Viaje */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-4 border-b pb-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Briefcase className="text-blue-600 w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">Viaje</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between"><span className="font-medium">Ticket</span> <span className="text-slate-500">boleto</span></li>
                <li className="flex justify-between"><span className="font-medium">Taxi</span> <span className="text-slate-500">taxi</span></li>
                <li className="flex justify-between"><span className="font-medium">Reservation</span> <span className="text-slate-500">reservación</span></li>
                <li className="flex justify-between"><span className="font-medium">Luggage</span> <span className="text-slate-500">equipaje</span></li>
              </ul>
            </div>

            {/* Servicio */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-4 border-b pb-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <ConciergeBell className="text-purple-600 w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">Servicio</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between"><span className="font-medium">Help</span> <span className="text-slate-500">ayuda</span></li>
                <li className="flex justify-between"><span className="font-medium">Service</span> <span className="text-slate-500">servicio</span></li>
                <li className="flex justify-between"><span className="font-medium">Problem</span> <span className="text-slate-500">problema</span></li>
                <li className="flex justify-between"><span className="font-medium">Information</span> <span className="text-slate-500">información</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Uso Integrado (Ejemplos Reales) */}
        <section className="bg-slate-800 text-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Info className="text-blue-400" />
            3. Uso Integrado (Contextos Reales)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-700 p-4 rounded-xl border border-slate-600 shadow-inner">
              <p className="italic text-slate-200">"Could you bring the menu, please?"</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-xl border border-slate-600 shadow-inner">
              <p className="italic text-slate-200">"Can you help me with my luggage?"</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-xl border border-slate-600 shadow-inner">
              <p className="italic text-slate-200">"Would you call a taxi, please?"</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-xl border border-slate-600 shadow-inner">
              <p className="italic text-slate-200">"Would you like a table by the window?"</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-xl border border-slate-600 shadow-inner sm:col-span-2 text-center">
              <p className="italic text-slate-200">"Could you give me some information?"</p>
            </div>
          </div>
        </section>

        {/* Ejercicios */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-blue-50 px-8 py-6 flex justify-between items-center border-b border-blue-100">
            <h2 className="text-2xl font-bold text-slate-800">4. Ejercicios Prácticos</h2>
            <button 
              onClick={() => setShowAnswers(!showAnswers)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {showAnswers ? (
                <><ChevronUp className="w-4 h-4"/> Ocultar Respuestas</>
              ) : (
                <><ChevronDown className="w-4 h-4"/> Mostrar Respuestas</>
              )}
            </button>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ejercicio A */}
            <div>
              <h3 className="font-bold text-lg text-blue-800 mb-4 border-b pb-2">A. Completa con “can”, “could” o “would”</h3>
              <ul className="space-y-4">
                <li>
                  1. <span className="inline-block w-16 border-b-2 border-slate-300 text-center font-bold text-blue-600">{showAnswers ? "Could" : ""}</span> you help me, please?
                </li>
                <li>
                  2. <span className="inline-block w-16 border-b-2 border-slate-300 text-center font-bold text-blue-600">{showAnswers ? "Can" : ""}</span> you bring the bill?
                </li>
                <li>
                  3. <span className="inline-block w-16 border-b-2 border-slate-300 text-center font-bold text-blue-600">{showAnswers ? "Could" : ""}</span> you call a taxi?
                </li>
                <li>
                  4. <span className="inline-block w-16 border-b-2 border-slate-300 text-center font-bold text-blue-600">{showAnswers ? "Would" : ""}</span> you like some coffee?
                </li>
              </ul>
              <p className="text-xs text-slate-400 mt-2 italic">*Nota: Las opciones en la 1, 2 y 3 pueden variar según el nivel de formalidad deseado.</p>
            </div>

            {/* Ejercicio B */}
            <div>
              <h3 className="font-bold text-lg text-blue-800 mb-4 border-b pb-2">B. Elige la opción correcta</h3>
              <ul className="space-y-4">
                <li>
                  1. ( <span className={`font-semibold ${showAnswers ? 'text-green-600' : ''}`}>Would</span> / Can ) you like a drink?
                </li>
                <li>
                  2. ( <span className={`font-semibold ${showAnswers ? 'text-green-600' : ''}`}>Could</span> / Can ) you help me? <span className="text-sm text-slate-500">(más formal)</span>
                </li>
                <li>
                  3. ( <span className={`font-semibold ${showAnswers ? 'text-green-600' : ''}`}>Would</span> / Can ) you open the door? <span className="text-sm text-slate-500">(más educado)</span>
                </li>
              </ul>
            </div>

            {/* Ejercicio C */}
            <div>
              <h3 className="font-bold text-lg text-blue-800 mb-4 border-b pb-2">C. Completa con vocabulario</h3>
              <ul className="space-y-4">
                <li>
                  1. Can you bring the <span className="inline-block w-20 border-b-2 border-slate-300 text-center font-bold text-blue-600">{showAnswers ? "menu" : ""}</span>? <span className="text-sm text-slate-500">(menú)</span>
                </li>
                <li>
                  2. Could you call a <span className="inline-block w-20 border-b-2 border-slate-300 text-center font-bold text-blue-600">{showAnswers ? "taxi" : ""}</span>? <span className="text-sm text-slate-500">(taxi)</span>
                </li>
                <li>
                  3. I want to pay the <span className="inline-block w-20 border-b-2 border-slate-300 text-center font-bold text-blue-600">{showAnswers ? "bill" : ""}</span> <span className="text-sm text-slate-500">(cuenta)</span>
                </li>
                <li>
                  4. Can you help me with my <span className="inline-block w-20 border-b-2 border-slate-300 text-center font-bold text-blue-600">{showAnswers ? "luggage" : ""}</span>? <span className="text-sm text-slate-500">(equipaje)</span>
                </li>
              </ul>
            </div>

            {/* Ejercicio D */}
            <div>
              <h3 className="font-bold text-lg text-blue-800 mb-4 border-b pb-2">D. Traduce al inglés</h3>
              <ul className="space-y-4">
                <li>
                  1. ¿Podrías ayudarme? <br/>
                  <span className={`text-blue-600 font-medium ${showAnswers ? 'block' : 'hidden'} mt-1`}>Could you help me?</span>
                </li>
                <li>
                  2. ¿Te gustaría un café? <br/>
                  <span className={`text-blue-600 font-medium ${showAnswers ? 'block' : 'hidden'} mt-1`}>Would you like a coffee?</span>
                </li>
                <li>
                  3. ¿Puedes traer la cuenta? <br/>
                  <span className={`text-blue-600 font-medium ${showAnswers ? 'block' : 'hidden'} mt-1`}>Can you bring the bill?</span>
                </li>
                <li>
                  4. ¿Podrías llamar un taxi? <br/>
                  <span className={`text-blue-600 font-medium ${showAnswers ? 'block' : 'hidden'} mt-1`}>Could you call a taxi?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

       </div>
  );
}