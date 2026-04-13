import React, { useState } from 'react';
import { 
  Sun, Shirt, Briefcase, Utensils, Dumbbell, Moon, 
  CalendarDays, Users, Clock, Calendar, CheckCircle2, 
  BookOpen, PenTool, ChevronDown, ChevronUp, ArrowRight,
  MessageCircle, HelpCircle
} from 'lucide-react';

// --- COMPONENTES VISUALES ---
type GrammarCardProps ={
    title: string;
    structure: React.ReactNode;
    example: string;
    color: string;
    isNegative?: boolean;
    isQuestion?: boolean;
}
const GrammarCard:React.FC<GrammarCardProps> = ({ title, structure, example, color, isNegative, isQuestion }) => (
  <div className={`bg-white rounded-xl shadow-md border-t-4 ${color} p-6 flex flex-col h-full transform transition hover:-translate-y-1 hover:shadow-lg`}>
    <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
    <div className="bg-gray-50 p-4 rounded-lg mb-4 text-sm font-mono text-gray-700 border border-gray-100 flex-grow">
      {structure}
    </div>
    <div className="flex items-start gap-3 mt-auto">
      {isQuestion ? <HelpCircle className="w-5 h-5 text-purple-500 mt-1" /> : 
       isNegative ? <MessageCircle className="w-5 h-5 text-red-500 mt-1" /> :
       <MessageCircle className="w-5 h-5 text-green-500 mt-1" />}
      <p className="text-gray-700 italic">"{example}"</p>
    </div>
  </div>
);
type VocabCardProps = {
    icon: React.ElementType;
    english: string;
    spanish: string
}
const VocabCard:React.FC<VocabCardProps> = ({ icon: Icon, english, spanish }) => (
  <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow-md transition cursor-default group">
    <div className="bg-blue-50 text-blue-600 p-3 rounded-full group-hover:bg-blue-600 group-hover:text-white transition">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold text-gray-800">{english}</h4>
      <p className="text-sm text-gray-500">{spanish}</p>
    </div>
  </div>
);
type ScheduleItemProps = {
     time: string;
     task: string;
     day: string;
}
const ScheduleItem:React.FC<ScheduleItemProps>= ({ time, task, day }) => (
  <div className="flex gap-4 items-center bg-white p-3 rounded-lg border-l-4 border-indigo-500 shadow-sm mb-3">
    <div className="flex flex-col items-center justify-center bg-indigo-50 text-indigo-700 rounded-md p-2 min-w-[70px]">
      <span className="text-xs font-bold uppercase">{day}</span>
      <span className="text-sm font-bold">{time}</span>
    </div>
    <p className="text-gray-700 font-medium">{task}</p>
  </div>
);
type Question = {
  question: string;
  answer: string;
};
type ExerciseBlockProps = {
    title: string;
    questions: Question[];
}
const ExerciseBlock : React.FC<ExerciseBlockProps> = ({ title, questions }) => {
  const [showAnswers, setShowAnswers] = useState<Record<number, boolean>>({});

  const toggleAnswer = (idx: number) => {
    setShowAnswers(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="mb-8">
      <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <PenTool className="text-orange-500 w-5 h-5" />
        {title}
      </h4>
      <div className="space-y-3">
        {questions.map((q, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 flex justify-between items-center bg-gray-50 cursor-pointer" onClick={() => toggleAnswer(idx)}>
              <span className="text-gray-800 font-medium">{q.question}</span>
              <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-full transition">
                {showAnswers[idx] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            {showAnswers[idx] && (
              <div className="p-4 border-t border-gray-200 bg-white flex items-center gap-3 text-green-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                {q.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- APLICACIÓN PRINCIPAL ---

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* HEADER / INTRO */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold tracking-wide">
              Lesson 12
            </span>
          
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            It’s a Dog’s Life
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
            En esta lección aprenderás a usar el <strong>presente progresivo (present continuous)</strong> para hablar de planes y arreglos futuros. Además, ampliarás tu vocabulario relacionado con las rutinas diarias y actividades programadas.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-20">
        
        {/* SECCIÓN 1: GRAMÁTICA */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-700">
              <BookOpen size={28} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">1. Grammar: Present Progressive</h2>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 flex gap-4 items-start">
            <div className="bg-yellow-100 text-yellow-700 p-2 rounded-full shrink-0">
              <CalendarDays size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">Uso para el futuro</h3>
              <p className="text-gray-600">El presente progresivo no solo se usa para acciones que ocurren <em>ahora</em>, sino también para planes futuros ya organizados. Se utiliza cuando:</p>
              <ul className="list-disc ml-5 mt-2 text-gray-600 space-y-1">
                <li>Ya existe un plan o arreglo definido.</li>
                <li>Se menciona un tiempo específico (<em>tomorrow, tonight, next week</em>).</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GrammarCard 
              title="Afirmativa"
              structure={<>Sujeto + <strong>am/is/are</strong> + verbo+ing</>}
              example="I am meeting my friend tomorrow."
              color="border-green-500"
            />
            <GrammarCard 
              title="Negativa"
              structure={<>Sujeto + <strong>am/is/are + not</strong> + verbo+ing</>}
              example="She is not working this weekend."
              color="border-red-500"
              isNegative
            />
            <GrammarCard 
              title="Interrogativa"
              structure={<><strong>Am/Is/Are</strong> + sujeto + verbo+ing</>}
              example="Are they visiting their family tonight?"
              color="border-purple-500"
              isQuestion
            />
          </div>
        </section>

        {/* SECCIÓN 2: VOCABULARIO */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-100 p-3 rounded-lg text-green-700">
              <Users size={28} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">2. Vocabulary</h2>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-700 mb-6 border-b pb-2">Rutinas Diarias (Daily Routines)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <VocabCard icon={Sun} english="Wake up" spanish="Despertarse" />
              <VocabCard icon={Shirt} english="Get dressed" spanish="Vestirse" />
              <VocabCard icon={Briefcase} english="Go to work" spanish="Ir al trabajo" />
              <VocabCard icon={Utensils} english="Have lunch" spanish="Almorzar" />
              <VocabCard icon={Dumbbell} english="Exercise" spanish="Hacer ejercicio" />
              <VocabCard icon={Moon} english="Go to bed" spanish="Ir a dormir" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-6 border-b pb-2">Arreglos y Actividades (Arrangements)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <VocabCard icon={Users} english="Meeting" spanish="Reunión" />
              <VocabCard icon={Calendar} english="Appointment" spanish="Cita" />
              <VocabCard icon={Clock} english="Schedule" spanish="Horario" />
              <VocabCard icon={CheckCircle2} english="Plan" spanish="Plan" />
              <VocabCard icon={ArrowRight} english="Visit" spanish="Visitar" />
              <VocabCard icon={Utensils} english="Dinner" spanish="Cena" />
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: USO INTEGRADO */}
        <section className="bg-indigo-50 -mx-6 px-6 py-12 rounded-3xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-indigo-200 p-3 rounded-lg text-indigo-800">
                <Calendar size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">3. Uso Integrado en Contexto</h2>
            </div>
            <p className="text-gray-600 mb-8 text-lg">Estas estructuras permiten describir tanto rutinas como planes ya organizados de forma natural.</p>
            
            <div className="bg-gray-100 rounded-2xl p-6 shadow-inner max-w-2xl mx-auto border border-gray-200">
              <h3 className="text-center font-bold text-gray-500 uppercase tracking-widest mb-6">My Schedule</h3>
              <ScheduleItem day="Tomorrow" time="06:00 AM" task="I am waking up early tomorrow." />
              <ScheduleItem day="Today" time="10:00 AM" task="She is having a meeting at 10 am." />
              <ScheduleItem day="Today" time="03:00 PM" task="We are visiting the doctor this afternoon." />
              <ScheduleItem day="Today" time="06:00 PM" task="They are exercising after work." />
              <ScheduleItem day="Tonight" time="10:00 PM" task="He is going to bed early tonight." />
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: EJERCICIOS */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-100 p-3 rounded-lg text-orange-700">
              <PenTool size={28} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">4. Ejercicios Prácticos</h2>
          </div>
          <p className="text-gray-600 mb-8 text-lg">Haz clic en cada bloque para revelar las respuestas correctas.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <ExerciseBlock 
              title="A. Completa con presente progresivo"
              questions={[
                { question: "I ________ (meet) my friend tonight.", answer: "I am meeting my friend tonight." },
                { question: "She ________ (go) to work tomorrow.", answer: "She is going to work tomorrow." },
                { question: "They ________ (have) dinner at 7 pm.", answer: "They are having dinner at 7 pm." },
                { question: "We ________ (visit) the doctor next week.", answer: "We are visiting the doctor next week." },
                { question: "He ________ (exercise) this afternoon.", answer: "He is exercising this afternoon." }
              ]}
            />
            
            <ExerciseBlock 
              title="B. Convierte a forma negativa"
              questions={[
                { question: "She is working tomorrow. → She ________ working tomorrow.", answer: "She is not working tomorrow." },
                { question: "They are visiting us tonight. → They ________ visiting us tonight.", answer: "They are not visiting us tonight." },
                { question: "I am going to the meeting. → I ________ going to the meeting.", answer: "I am not going to the meeting." }
              ]}
            />

            <ExerciseBlock 
              title="C. Forma preguntas"
              questions={[
                { question: "you / meeting / are / your friend / tonight", answer: "Are you meeting your friend tonight?" },
                { question: "she / working / is / tomorrow", answer: "Is she working tomorrow?" },
                { question: "they / visiting / are / family / this weekend", answer: "Are they visiting their family this weekend?" }
              ]}
            />

            <ExerciseBlock 
              title="D. Traduce al inglés"
              questions={[
                { question: "Voy a tener una reunión mañana.", answer: "I am having a meeting tomorrow." },
                { question: "Ella está visitando a su familia esta noche.", answer: "She is visiting her family tonight." },
                { question: "Vamos a cenar a las 8 pm.", answer: "We are having dinner at 8 pm." },
                { question: "Él no está trabajando mañana.", answer: "He is not working tomorrow." }
              ]}
            />
          </div>
        </section>

      </main>

     
    </div>
  );
}