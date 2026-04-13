import React, { useState } from 'react';
import { 
  BookOpen, 
  BarChart, 
  MessageCircle, 
  Eye, 
  CheckCircle, 
  HelpCircle, 
  Layers, 
  ChevronRight,
  BrainCircuit
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-12">
      {/* Header Section */}
      <header className="bg-indigo-600 text-white py-12 px-6 shadow-md">
        <div className="max-w-4xl mx-auto">
          <span className="bg-indigo-500 text-indigo-50 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            Lesson 13
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">What Are the Chances?</h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl leading-relaxed">
            Aprende a expresar distintos <strong>grados de probabilidad</strong>. Descubre cómo usar palabras como "definitely", "probably", "maybe" y "possibly" para dar opiniones y hacer predicciones.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-10 space-y-12">
        
        {/* 1. Grammar: Degrees of Probability */}
        <section>
          <SectionTitle icon={<BarChart className="text-indigo-500" />} title="1. Grammar: Degrees of Probability" />
          <p className="text-slate-600 mb-8 text-lg">
            Los <strong>adverbios de probabilidad</strong> indican el nivel de certeza sobre una acción futura. Observa la siguiente escala visual para entender su fuerza:
          </p>

          {/* Visual Diagram: Probability Meter */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Escala de Probabilidad</h3>
            <div className="relative pt-6 pb-12">
              {/* Gradient Bar */}
              <div className="h-4 bg-gradient-to-r from-slate-200 via-blue-400 to-indigo-600 rounded-full w-full"></div>
              
              {/* Markers */}
              <div className="absolute w-full top-6 flex justify-between px-2">
                <ProbabilityMarker label="Possibly" sub="Baja" percent="~30%" align="left" color="text-slate-500" />
                <ProbabilityMarker label="Maybe" sub="Incierto" percent="~50%" align="center" color="text-blue-500" />
                <ProbabilityMarker label="Probably" sub="Alta" percent="~80%" align="center" color="text-indigo-500" />
                <ProbabilityMarker label="Definitely" sub="100% Seguro" percent="100%" align="right" color="text-indigo-700" />
              </div>
            </div>
          </div>

          {/* Visual Diagram: Sentence Structure */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Layers className="text-indigo-500 w-5 h-5" /> Orden en la Oración
            </h3>
            
            <div className="space-y-6">
              <StructureRule 
                title="Con 'will' (Afirmativo)" 
                rule="Después de will"
                blocks={['Subject', 'will', 'Adverb', 'Verb']}
                highlightIndex={2}
                example="I will probably buy a car."
              />
              <StructureRule 
                title="Forma Negativa" 
                rule="Antes del verbo principal"
                blocks={['Subject', 'Adverb', 'won\'t', 'Verb']}
                highlightIndex={1}
                example="She probably won't agree."
              />
              <StructureRule 
                title="Uso de 'maybe'" 
                rule="Al inicio (informal)"
                blocks={['Maybe', 'Subject', 'will', 'Verb']}
                highlightIndex={0}
                example="Maybe we will travel."
              />
            </div>
          </div>
        </section>

        {/* 2. Vocabulary: Opinions & Predictions */}
        <section>
          <SectionTitle icon={<MessageCircle className="text-teal-500" />} title="2. Vocabulary: Opinions & Predictions" />
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Opinions Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 border-t-4 border-t-teal-400">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-teal-50 rounded-full text-teal-600">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Expresiones de Opinión</h3>
              </div>
              <ul className="space-y-3">
                <VocabItem eng="I think" esp="creo que" />
                <VocabItem eng="I believe" esp="creo / considero" />
                <VocabItem eng="In my opinion" esp="en mi opinión" />
                <VocabItem eng="I guess" esp="supongo" />
                <VocabItem eng="I'm sure" esp="estoy seguro/a" />
              </ul>
            </div>

            {/* Predictions Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 border-t-4 border-t-purple-400">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-50 rounded-full text-purple-600">
                  <Eye size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Expresiones de Predicción</h3>
              </div>
              <ul className="space-y-3">
                <VocabItem eng="It will happen" esp="pasará" />
                <VocabItem eng="It won't happen" esp="no pasará" />
                <VocabItem eng="There is a chance" esp="hay una posibilidad" />
                <VocabItem eng="It's likely" esp="es probable" />
                <VocabItem eng="It's unlikely" esp="es poco probable" />
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Uso Integrado */}
        <section>
          <SectionTitle icon={<BrainCircuit className="text-orange-500" />} title="3. Uso Integrado: Gramática + Vocabulario" />
          <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
            <p className="text-orange-800 mb-4 font-medium">Estas estructuras te permiten expresar opiniones con diferentes niveles de certeza:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-orange-400 w-5 h-5 mt-0.5 shrink-0" />
                <span><strong className="text-slate-900">I think</strong> it <strong className="text-slate-900">will probably</strong> rain tomorrow.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-orange-400 w-5 h-5 mt-0.5 shrink-0" />
                <span>She <strong className="text-slate-900">definitely will</strong> succeed.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-orange-400 w-5 h-5 mt-0.5 shrink-0" />
                <span><strong className="text-slate-900">Maybe</strong> they <strong className="text-slate-900">will</strong> move to another city.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-orange-400 w-5 h-5 mt-0.5 shrink-0" />
                <span><strong className="text-slate-900">In my opinion</strong>, technology <strong className="text-slate-900">will definitely</strong> improve.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-orange-400 w-5 h-5 mt-0.5 shrink-0" />
                <span><strong className="text-slate-900">I guess</strong> we <strong className="text-slate-900">possibly won't</strong> finish on time.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 4. Ejercicios */}
        <section>
          <SectionTitle icon={<BookOpen className="text-blue-500" />} title="4. Practice Exercises" />
          
          <div className="grid md:grid-cols-2 gap-6">
            <ExerciseBox title="A. Completa con el adverbio correcto">
              <p className="text-sm text-slate-500 mb-4">(definitely / probably / maybe / possibly)</p>
              <ul className="space-y-4">
                <BlankExercise num="1" hint="100% seguro">I will <Blank/> go to the party.</BlankExercise>
                <BlankExercise num="2" hint="alta probabilidad">She will <Blank/> call you later.</BlankExercise>
                <BlankExercise num="3" hint="incierto"><Blank/> we will travel this year.</BlankExercise>
                <BlankExercise num="4" hint="baja probabilidad">They will <Blank/> win the game.</BlankExercise>
              </ul>
            </ExerciseBox>

            <ExerciseBox title="B. Ordena las palabras">
              <ul className="space-y-4">
                <OrderExercise num="1" words="will / definitely / I / go" />
                <OrderExercise num="2" words="probably / she / will / study" />
                <OrderExercise num="3" words="maybe / travel / we / will" />
                <OrderExercise num="4" words="possibly / they / will / come" />
              </ul>
            </ExerciseBox>

            <ExerciseBox title="C. Completa con una opinión">
              <ul className="space-y-4">
                <li className="text-slate-700">1. <Blank size="large" />, it will rain tomorrow.</li>
                <li className="text-slate-700">2. <Blank size="large" />, she will pass the exam.</li>
                <li className="text-slate-700">3. <Blank size="large" />, they won't arrive on time.</li>
              </ul>
            </ExerciseBox>

            <ExerciseBox title="D. Traduce al inglés">
              <ul className="space-y-4">
                <li className="text-slate-700 flex flex-col gap-1">
                  <span className="font-medium text-sm text-slate-500">1. Probablemente iré mañana.</span>
                  <div className="border-b border-dashed border-slate-300 h-6"></div>
                </li>
                <li className="text-slate-700 flex flex-col gap-1">
                  <span className="font-medium text-sm text-slate-500">2. Definitivamente tendrá éxito.</span>
                  <div className="border-b border-dashed border-slate-300 h-6"></div>
                </li>
                <li className="text-slate-700 flex flex-col gap-1">
                  <span className="font-medium text-sm text-slate-500">3. Quizás llueva hoy.</span>
                  <div className="border-b border-dashed border-slate-300 h-6"></div>
                </li>
                <li className="text-slate-700 flex flex-col gap-1">
                  <span className="font-medium text-sm text-slate-500">4. Posiblemente no terminemos.</span>
                  <div className="border-b border-dashed border-slate-300 h-6"></div>
                </li>
              </ul>
            </ExerciseBox>
          </div>
        </section>

      </main>

      
    </div>
  );
}

/* --- Subcomponents --- */

function SectionTitle({ icon, title }) {
  return (
    <h2 className="text-2xl font-extrabold text-slate-800 mb-6 flex items-center gap-3 border-b-2 border-slate-200 pb-3">
      {icon}
      {title}
    </h2>
  );
}

function ProbabilityMarker({ label, sub, percent, align, color }) {
  const getAlignClass = () => {
    if (align === 'left') return 'items-start -ml-2';
    if (align === 'right') return 'items-end -mr-2';
    return 'items-center -translate-x-1/2 left-1/2';
  };

  const isCenter = align === 'center';

  return (
    <div className={`flex flex-col ${getAlignClass()} ${isCenter ? 'absolute' : 'relative'}`}>
      <div className="w-4 h-4 bg-white border-4 border-slate-300 rounded-full mb-2 z-10 -mt-[3px]"></div>
      <span className={`font-bold ${color}`}>{label}</span>
      <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded mt-1">{percent}</span>
      <span className="text-xs text-slate-500 mt-1">{sub}</span>
    </div>
  );
}

function StructureRule({ title, rule, blocks, highlightIndex, example }) {
  return (
    <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <h4 className="font-bold text-slate-800">{title}</h4>
        <span className="text-sm font-medium text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">{rule}</span>
      </div>
      
      {/* Blocks Visual */}
      <div className="flex flex-wrap gap-2 mb-4">
        {blocks.map((block, idx) => (
          <div 
            key={idx} 
            className={`px-4 py-2 rounded-lg font-mono text-sm font-bold shadow-sm border
              ${idx === highlightIndex 
                ? 'bg-indigo-500 text-white border-indigo-600' 
                : 'bg-white text-slate-600 border-slate-200'}`}
          >
            {block}
          </div>
        ))}
      </div>
      
      <p className="text-slate-600 italic border-l-4 border-indigo-200 pl-3">
        "{example}"
      </p>
    </div>
  );
}

function VocabItem({ eng, esp }) {
  return (
    <li className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0 last:pb-0">
      <span className="font-bold text-slate-800">{eng}</span>
      <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">{esp}</span>
    </li>
  );
}

function ExerciseBox({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
        <HelpCircle className="w-5 h-5 text-indigo-400" />
        {title}
      </h3>
      {children}
    </div>
  );
}

function Blank({ size = "small" }) {
  const widthClass = size === "small" ? "w-24" : "w-32";
  return (
    <span className={`inline-block border-b-2 border-indigo-300 ${widthClass} mx-1 bg-indigo-50 h-6 translate-y-1`}></span>
  );
}

function BlankExercise({ num, hint, children }) {
  return (
    <li className="text-slate-700">
      <div className="flex justify-between items-center mb-1">
        <span>{num}. {children}</span>
      </div>
      <div className="text-xs text-indigo-400 font-medium ml-4">({hint})</div>
    </li>
  );
}

function OrderExercise({ num, words }) {
  return (
    <li className="text-slate-700">
      <div className="font-medium text-slate-500 text-sm mb-1">{num}. {words}</div>
      <div className="border-b border-dashed border-slate-300 h-6"></div>
    </li>
  );
}