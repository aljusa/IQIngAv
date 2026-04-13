import React, { useState } from 'react';
import { 
  Zap, 
  CalendarDays, 
  Car, 
  Bus, 
  TrainFront, 
  Plane, 
  Bike, 
  TramFront,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Map
} from 'lucide-react';

export default function App() {
  const [showAnswersA, setShowAnswersA] = useState(false);
  const [showAnswersB, setShowAnswersB] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Encabezado Principal */}
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white shadow-xl">
          <div className="uppercase tracking-widest text-blue-200 font-semibold text-sm mb-4">
            Lesson 17
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Getting Around in the Future
          </h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl">
            En esta lección reforzaremos el uso de <strong className="text-white">“will”</strong> y <strong className="text-white">“going to”</strong> para hablar del futuro, aplicándolos específicamente al tema del <strong>transporte</strong>. Aprenderás a diferenciar entre decisiones espontáneas y planes previos mientras utilizas vocabulario relacionado con cómo nos moveremos en el futuro.
          </p>
        </header>

        {/* 1. Grammar Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">1. Grammar: Will vs Going to</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Ambas estructuras se usan para hablar del futuro, pero tienen usos diferentes. Descubre cuándo usar cada una con la siguiente tabla visual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Will Card */}
            <div className="bg-white rounded-2xl p-8 border-t-8 border-amber-400 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                  <Zap size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-800">"Will"</h3>
              </div>
              <p className="text-slate-600 mb-6 font-medium">Decisiones espontáneas y predicciones</p>
              
              <div className="bg-slate-50 p-4 rounded-xl mb-6">
                <p className="text-sm text-slate-500 font-bold mb-2">SE USA CUANDO:</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-amber-500 mr-2" /> Decides en el momento</li>
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-amber-500 mr-2" /> Haces predicciones generales</li>
                </ul>
              </div>

              <div className="bg-amber-50 text-amber-900 p-4 rounded-xl border border-amber-200">
                <p className="text-xs font-bold uppercase tracking-wider mb-2 opacity-70">Estructura</p>
                <p className="font-mono bg-white px-3 py-2 rounded-md border border-amber-200 shadow-sm mb-4">
                  Sujeto + <span className="font-bold text-amber-600">will</span> + verbo base
                </p>
                <p className="text-xs font-bold uppercase tracking-wider mb-2 opacity-70">Ejemplos</p>
                <ul className="space-y-3 font-medium">
                  <li>• <span className="text-amber-700">I will take</span> a taxi. <span className="text-sm font-normal opacity-75">(decisión en el momento)</span></li>
                  <li>• <span className="text-amber-700">People will use</span> electric cars. <span className="text-sm font-normal opacity-75">(predicción)</span></li>
                  <li>• <span className="text-amber-700">We will travel</span> faster in the future.</li>
                </ul>
              </div>
            </div>

            {/* Going to Card */}
            <div className="bg-white rounded-2xl p-8 border-t-8 border-emerald-500 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                  <CalendarDays size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-800">"Going to"</h3>
              </div>
              <p className="text-slate-600 mb-6 font-medium">Planes e intenciones</p>
              
              <div className="bg-slate-50 p-4 rounded-xl mb-6">
                <p className="text-sm text-slate-500 font-bold mb-2">SE USA CUANDO:</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-emerald-500 mr-2" /> Ya tienes un plan previo</li>
                  <li className="flex items-center"><CheckCircle2 size={16} className="text-emerald-500 mr-2" /> Has decidido antes de hablar</li>
                </ul>
              </div>

              <div className="bg-emerald-50 text-emerald-900 p-4 rounded-xl border border-emerald-200">
                <p className="text-xs font-bold uppercase tracking-wider mb-2 opacity-70">Estructura</p>
                <p className="font-mono bg-white px-3 py-2 rounded-md border border-emerald-200 shadow-sm mb-4">
                  Sujeto + am/is/are + <span className="font-bold text-emerald-600">going to</span> + verbo base
                </p>
                <p className="text-xs font-bold uppercase tracking-wider mb-2 opacity-70">Ejemplos</p>
                <ul className="space-y-3 font-medium">
                  <li>• <span className="text-emerald-700">I am going to take</span> the bus tomorrow.</li>
                  <li>• <span className="text-emerald-700">They are going to buy</span> a new car.</li>
                  <li>• <span className="text-emerald-700">We are going to travel</span> by train.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Key Differences Visual Flowchart */}
        <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <Lightbulb size={200} />
          </div>
          <h2 className="text-3xl font-bold mb-8 relative z-10">2. Diferencias clave en acción</h2>
          
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start justify-between">
                  <p className="text-lg">"I <span className="text-amber-400 font-bold">will take</span> the bus."</p>
                  <span className="bg-amber-400/20 text-amber-300 text-xs py-1 px-3 rounded-full border border-amber-400/30">Decisión en el momento</span>
                </div>
                <div className="h-px bg-slate-700 w-full my-2"></div>
                <div className="flex items-start justify-between">
                  <p className="text-lg">"She <span className="text-amber-400 font-bold">will travel</span> by plane."</p>
                  <span className="bg-amber-400/20 text-amber-300 text-xs py-1 px-3 rounded-full border border-amber-400/30">Predicción futura</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
               <div className="flex flex-col space-y-4">
                <div className="flex items-start justify-between">
                  <p className="text-lg">"I <span className="text-emerald-400 font-bold">am going to take</span> the bus."</p>
                  <span className="bg-emerald-400/20 text-emerald-300 text-xs py-1 px-3 rounded-full border border-emerald-400/30">Plan ya pensado</span>
                </div>
                <div className="h-px bg-slate-700 w-full my-2"></div>
                <div className="flex items-start justify-between">
                  <p className="text-lg">"She <span className="text-emerald-400 font-bold">is going to travel</span> by plane."</p>
                  <span className="bg-emerald-400/20 text-emerald-300 text-xs py-1 px-3 rounded-full border border-emerald-400/30">Plan personal</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Vocabulary */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">3. Vocabulary: Transportation</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Car', es: 'carro', icon: <Car size={40} /> },
              { name: 'Bus', es: 'autobús', icon: <Bus size={40} /> },
              { name: 'Train', es: 'tren', icon: <TrainFront size={40} /> },
              { name: 'Plane', es: 'avión', icon: <Plane size={40} /> },
              { name: 'Bicycle', es: 'bicicleta', icon: <Bike size={40} /> },
              { name: 'Subway', es: 'metro', icon: <TramFront size={40} /> },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition-colors group cursor-default">
                <div className="text-slate-400 group-hover:text-blue-600 transition-colors mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-800">{item.name}</h4>
                <p className="text-slate-500">{item.es}</p>
              </div>
            ))}
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 md:p-8 mt-8">
            <h3 className="text-xl font-bold text-indigo-900 mb-6 flex items-center">
              <Map className="mr-3" /> Expresiones útiles
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex items-center"><ArrowRight size={16} className="text-indigo-400 mr-2"/> <strong>Take a bus</strong> <span className="ml-2 text-indigo-700/70">(tomar un autobús)</span></li>
                <li className="flex items-center"><ArrowRight size={16} className="text-indigo-400 mr-2"/> <strong>Drive a car</strong> <span className="ml-2 text-indigo-700/70">(manejar un carro)</span></li>
                <li className="flex items-center"><ArrowRight size={16} className="text-indigo-400 mr-2"/> <strong>Ride a bike</strong> <span className="ml-2 text-indigo-700/70">(andar en bicicleta)</span></li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center"><ArrowRight size={16} className="text-indigo-400 mr-2"/> <strong>Catch a train</strong> <span className="ml-2 text-indigo-700/70">(tomar un tren)</span></li>
                <li className="flex items-center"><ArrowRight size={16} className="text-indigo-400 mr-2"/> <strong>Miss a flight</strong> <span className="ml-2 text-indigo-700/70">(perder un vuelo)</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Uso integrado */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Uso integrado (Ejemplos combinados)</h2>
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-slate-50 rounded-xl">
               <Zap className="text-amber-500 mr-4 flex-shrink-0 mt-1" />
               <p className="text-lg">I <strong>will take</strong> a taxi because I’m late.</p>
            </div>
            <div className="flex items-start p-4 bg-slate-50 rounded-xl">
               <CalendarDays className="text-emerald-500 mr-4 flex-shrink-0 mt-1" />
               <p className="text-lg">I <strong>am going to take</strong> the bus tomorrow.</p>
            </div>
            <div className="flex items-start p-4 bg-slate-50 rounded-xl">
               <Zap className="text-amber-500 mr-4 flex-shrink-0 mt-1" />
               <p className="text-lg">They <strong>will</strong> probably <strong>travel</strong> by plane.</p>
            </div>
            <div className="flex items-start p-4 bg-slate-50 rounded-xl">
               <CalendarDays className="text-emerald-500 mr-4 flex-shrink-0 mt-1" />
               <p className="text-lg">We <strong>are going to ride</strong> a bike this weekend.</p>
            </div>
            <div className="flex items-start p-4 bg-slate-50 rounded-xl">
               <Zap className="text-amber-500 mr-4 flex-shrink-0 mt-1" />
               <p className="text-lg">People <strong>will use</strong> more public transportation.</p>
            </div>
          </div>
        </section>

        {/* 5. Exercises */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">5. Ejercicios Prácticos</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ejercicio A */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-4 text-blue-700">A. Elige la opción correcta</h3>
              <ul className="space-y-4 mb-6">
                <li>1. I <span className={`font-bold ${showAnswersA ? 'text-amber-600' : 'text-slate-400'}`}>{showAnswersA ? 'will' : '(will / am going to)'}</span> take a taxi. <br/><span className="text-sm text-slate-500 italic">decisión en el momento</span></li>
                <li>2. She <span className={`font-bold ${showAnswersA ? 'text-emerald-600' : 'text-slate-400'}`}>{showAnswersA ? 'is going to' : '(will / is going to)'}</span> travel by train tomorrow. <br/><span className="text-sm text-slate-500 italic">plan</span></li>
                <li>3. We <span className={`font-bold ${showAnswersA ? 'text-amber-600' : 'text-slate-400'}`}>{showAnswersA ? 'will' : '(will / are going to)'}</span> probably use electric cars. <br/><span className="text-sm text-slate-500 italic">predicción</span></li>
                <li>4. They <span className={`font-bold ${showAnswersA ? 'text-emerald-600' : 'text-slate-400'}`}>{showAnswersA ? 'are going to' : '(will / are going to)'}</span> buy a new car next week. <br/><span className="text-sm text-slate-500 italic">plan</span></li>
              </ul>
              <button 
                onClick={() => setShowAnswersA(!showAnswersA)}
                className="w-full py-3 bg-blue-50 text-blue-700 font-bold rounded-xl hover:bg-blue-100 transition-colors"
              >
                {showAnswersA ? 'Ocultar Respuestas' : 'Ver Respuestas'}
              </button>
            </div>

            {/* Ejercicio B */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-4 text-blue-700">B. Completa con "will" o "going to"</h3>
              <ul className="space-y-4 mb-6">
                <li>1. I <span className={`font-bold border-b-2 border-slate-300 px-2 min-w-[80px] inline-block text-center ${showAnswersB ? 'text-emerald-600 border-emerald-500' : 'text-transparent'}`}>am going to</span> take the bus later.</li>
                <li>2. She <span className={`font-bold border-b-2 border-slate-300 px-2 min-w-[80px] inline-block text-center ${showAnswersB ? 'text-emerald-600 border-emerald-500' : 'text-transparent'}`}>is going to</span> travel by plane next month.</li>
                <li>3. They <span className={`font-bold border-b-2 border-slate-300 px-2 min-w-[80px] inline-block text-center ${showAnswersB ? 'text-amber-600 border-amber-500' : 'text-transparent'}`}>will</span> probably use bikes more.</li>
                <li>4. We <span className={`font-bold border-b-2 border-slate-300 px-2 min-w-[80px] inline-block text-center ${showAnswersB ? 'text-emerald-600 border-emerald-500' : 'text-transparent'}`}>are going to</span> drive to the city tomorrow.</li>
              </ul>
              <button 
                onClick={() => setShowAnswersB(!showAnswersB)}
                className="w-full py-3 bg-blue-50 text-blue-700 font-bold rounded-xl hover:bg-blue-100 transition-colors"
              >
                {showAnswersB ? 'Ocultar Respuestas' : 'Ver Respuestas'}
              </button>
            </div>
          </div>

        </section>


      </div>
    </div>
  );
}