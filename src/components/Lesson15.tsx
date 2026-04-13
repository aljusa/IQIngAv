import React, { useState } from 'react';
import { 
  Zap, 
  MessageCircle, 
  Briefcase, 
  CheckCircle, 
  XCircle, 
  HandHeart, 
  BookOpen, 
  Lightbulb, 
  ArrowRight,
  HelpCircle,
  GraduationCap
} from 'lucide-react';

// --- Componente Visual: Espectro de Modalidades ---
// Sugerencia Visual: Un diagrama interactivo que muestra el nivel de formalidad y uso de cada verbo modal.
const ModalsDiagram = () => {
  const [activeModal, setActiveModal] = useState('will');

  const modalsData = {
    will: {
      title: 'Will',
      subtitle: 'Ofertas Espontáneas',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      color: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      activeColor: 'bg-yellow-500 text-white shadow-yellow-200',
      structure: 'I will + verbo base',
      explanation: 'Se usa cuando decides ayudar en el momento exacto en que ves la necesidad. No fue planeado.',
      examples: ['I will help you with your homework.', 'I’ll carry your bag.']
    },
    can: {
      title: 'Can',
      subtitle: 'Ofertas Informales',
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      color: 'bg-blue-50 border-blue-200 text-blue-800',
      activeColor: 'bg-blue-500 text-white shadow-blue-200',
      structure: 'Can I + verbo base...?',
      explanation: 'Se usa para ofrecer ayuda de forma directa, amistosa y casual. Ideal para amigos y familia.',
      examples: ['Can I help you?', 'Can I open the door for you?']
    },
    could: {
      title: 'Could',
      subtitle: 'Ofertas Formales o Amables',
      icon: <Briefcase className="w-8 h-8 text-indigo-500" />,
      color: 'bg-indigo-50 border-indigo-200 text-indigo-800',
      activeColor: 'bg-indigo-600 text-white shadow-indigo-200',
      structure: 'Could I + verbo base...?',
      explanation: 'Se usa para sonar mucho más educado, respetuoso o formal. Ideal para el trabajo o desconocidos.',
      examples: ['Could I help you with that?', 'Could I carry those boxes?']
    }
  };

  return (
    <div className="my-10 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="text-amber-500 w-6 h-6" />
        <h3 className="text-xl font-bold text-gray-800">Visualizador: El Espectro de la Ayuda</h3>
      </div>
      <p className="text-gray-600 mb-8">Haz clic en cada verbo modal para ver su explicación, estructura y ejemplos en el diagrama de formalidad.</p>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Selector de Modales */}
        <div className="flex md:flex-col gap-3 md:w-1/3">
          {Object.keys(modalsData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveModal(key)}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 border-2 ${
                activeModal === key 
                  ? `${modalsData[key].activeColor} border-transparent shadow-lg transform scale-105` 
                  : 'bg-white border-gray-100 hover:border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className={activeModal === key ? 'text-white' : ''}>
                {React.cloneElement(modalsData[key].icon, { className: 'w-6 h-6' })}
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">{modalsData[key].title}</div>
                <div className={`text-xs ${activeModal === key ? 'text-white/80' : 'text-gray-400'}`}>
                  {modalsData[key].subtitle}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Panel de Información Dinámica */}
        <div className={`md:w-2/3 p-6 rounded-xl border-2 transition-colors duration-500 ${modalsData[activeModal].color}`}>
          <div className="flex items-center gap-3 mb-4">
            <h4 className="text-2xl font-bold">{modalsData[activeModal].title}</h4>
            <span className="px-3 py-1 bg-white/50 rounded-full text-sm font-semibold">
              {modalsData[activeModal].structure}
            </span>
          </div>
          <p className="text-lg mb-6 opacity-90">{modalsData[activeModal].explanation}</p>
          
          <div className="bg-white/60 p-4 rounded-lg">
            <h5 className="font-bold flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4" /> Ejemplos:
            </h5>
            <ul className="space-y-2">
              {modalsData[activeModal].examples.map((ex, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 opacity-70" />
                  <span className="font-medium italic">"{ex}"</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Componente de Vocabulario ---
const VocabularySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
      <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 shadow-sm">
        <div className="flex items-center gap-2 text-emerald-700 mb-4">
          <HandHeart className="w-6 h-6" />
          <h4 className="font-bold text-lg">Ofrecer ayuda</h4>
        </div>
        <ul className="space-y-3 text-emerald-900">
          <li className="flex justify-between border-b border-emerald-200/50 pb-1"><b>Help</b> <span>ayudar</span></li>
          <li className="flex justify-between border-b border-emerald-200/50 pb-1"><b>Assist</b> <span>asistir</span></li>
          <li className="flex justify-between border-b border-emerald-200/50 pb-1"><b>Support</b> <span>apoyar</span></li>
          <li className="flex justify-between border-b border-emerald-200/50 pb-1"><b>Carry</b> <span>cargar</span></li>
          <li className="flex justify-between border-b border-emerald-200/50 pb-1"><b>Fix</b> <span>arreglar</span></li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
        <div className="flex items-center gap-2 text-blue-700 mb-4">
          <CheckCircle className="w-6 h-6" />
          <h4 className="font-bold text-lg">Aceptar ayuda</h4>
        </div>
        <ul className="space-y-3 text-blue-900">
          <li className="flex justify-between border-b border-blue-200/50 pb-1"><b>Yes, please</b> <span>sí, por favor</span></li>
          <li className="flex justify-between border-b border-blue-200/50 pb-1"><b>That would be great</b> <span className="text-right ml-2">eso sería genial</span></li>
          <li className="flex justify-between border-b border-blue-200/50 pb-1"><b>Thanks, I appreciate it</b> <span className="text-right ml-2">gracias, lo agradezco</span></li>
        </ul>
      </div>

      <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 shadow-sm">
        <div className="flex items-center gap-2 text-rose-700 mb-4">
          <XCircle className="w-6 h-6" />
          <h4 className="font-bold text-lg">Rechazar ayuda</h4>
        </div>
        <ul className="space-y-3 text-rose-900">
          <li className="flex justify-between border-b border-rose-200/50 pb-1"><b>No, thanks</b> <span>no, gracias</span></li>
          <li className="flex justify-between border-b border-rose-200/50 pb-1"><b>I’m okay</b> <span>estoy bien</span></li>
          <li className="flex justify-between border-b border-rose-200/50 pb-1"><b>I can manage</b> <span>puedo hacerlo</span></li>
        </ul>
      </div>
    </div>
  );
};

// --- Componente de Ejercicios ---
const Exercises = () => {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 my-10">
      <div className="flex justify-between items-center mb-8 pb-4 border-b">
        <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <HelpCircle className="w-6 h-6 text-indigo-500" /> Práctica Integradora
        </h3>
        <button 
          onClick={() => setShowAnswers(!showAnswers)}
          className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg font-medium hover:bg-indigo-100 transition-colors"
        >
          {showAnswers ? 'Ocultar Respuestas' : 'Ver Respuestas'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ejercicio A */}
        <div>
          <h4 className="font-bold text-lg text-gray-700 mb-4">A. Completa con “will”, “can” o “could”</h4>
          <ol className="space-y-3 list-decimal list-inside text-gray-600">
            <li><span className={showAnswers ? "font-bold text-indigo-600" : "underline"}>{showAnswers ? "Can/Could" : "________"}</span> I help you with your homework?</li>
            <li>I <span className={showAnswers ? "font-bold text-indigo-600" : "underline"}>{showAnswers ? "will" : "________"}</span> carry that for you.</li>
            <li><span className={showAnswers ? "font-bold text-indigo-600" : "underline"}>{showAnswers ? "Can/Could" : "________"}</span> I open the window?</li>
            <li>I <span className={showAnswers ? "font-bold text-indigo-600" : "underline"}>{showAnswers ? "can/will" : "________"}</span> help you right now.</li>
          </ol>
        </div>

        {/* Ejercicio B */}
        <div>
          <h4 className="font-bold text-lg text-gray-700 mb-4">B. Elige la opción correcta</h4>
          <ol className="space-y-3 list-decimal list-inside text-gray-600">
            <li>(<span className={showAnswers ? "font-bold text-indigo-600" : ""}>Will / {showAnswers ? "" : "Could"}</span>{showAnswers ? "Could" : ""}) I help you? <span className="text-sm italic text-gray-400">(más formal)</span></li>
            <li>I (<span className={showAnswers ? "font-bold text-indigo-600" : ""}>{showAnswers ? "will" : "will / can"}</span>) help you! <span className="text-sm italic text-gray-400">(decisión espontánea)</span></li>
            <li>(<span className={showAnswers ? "font-bold text-indigo-600" : ""}>{showAnswers ? "Could" : "Can / Could"}</span>) I assist you? <span className="text-sm italic text-gray-400">(más educado)</span></li>
          </ol>
        </div>

        {/* Ejercicio C */}
        <div>
          <h4 className="font-bold text-lg text-gray-700 mb-4">C. Completa la respuesta</h4>
          <ol className="space-y-3 list-decimal list-inside text-gray-600">
            <li>Can I help you? → <span className={showAnswers ? "font-bold text-indigo-600" : "underline"}>{showAnswers ? "Yes" : "________"}</span>, please.</li>
            <li>Could I carry that? → No, <span className={showAnswers ? "font-bold text-indigo-600" : "underline"}>{showAnswers ? "thanks" : "________"}</span>.</li>
            <li>I’ll help you. → <span className={showAnswers ? "font-bold text-indigo-600" : "underline"}>{showAnswers ? "That would be great" : "________"}</span>, thank you!</li>
          </ol>
        </div>

        {/* Ejercicio D */}
        <div>
          <h4 className="font-bold text-lg text-gray-700 mb-4">D. Traduce al inglés</h4>
          <ol className="space-y-3 list-decimal list-inside text-gray-600">
            <li>¿Puedo ayudarte? (formal) <br/><span className={showAnswers ? "font-bold text-indigo-600 block mt-1" : "text-transparent block mt-1 border-b border-gray-300 w-full"}>{showAnswers ? "Could I help you?" : "espacio"}</span></li>
            <li>Te ayudaré. <br/><span className={showAnswers ? "font-bold text-indigo-600 block mt-1" : "text-transparent block mt-1 border-b border-gray-300 w-full"}>{showAnswers ? "I will help you." : "espacio"}</span></li>
            <li>¿Puedo cargar eso? <br/><span className={showAnswers ? "font-bold text-indigo-600 block mt-1" : "text-transparent block mt-1 border-b border-gray-300 w-full"}>{showAnswers ? "Can I carry that?" : "espacio"}</span></li>
            <li>No, gracias, estoy bien. <br/><span className={showAnswers ? "font-bold text-indigo-600 block mt-1" : "text-transparent block mt-1 border-b border-gray-300 w-full"}>{showAnswers ? "No, thanks, I'm okay." : "espacio"}</span></li>
          </ol>
        </div>
      </div>
    </div>
  );
};


// --- Aplicación Principal ---
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header / Hero Section */}
      <header className="bg-indigo-600 text-white py-16 px-6 shadow-md">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 bg-indigo-500 rounded-full text-sm font-semibold tracking-wider mb-4 uppercase">
            Lesson 15
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">A Helping Hand</h1>
          <p className="text-xl text-indigo-100 leading-relaxed max-w-2xl">
            Aprende a ofrecer ayuda utilizando los verbos modales <strong>“will”</strong>, <strong>“can”</strong> y <strong>“could”</strong>, e incorpora vocabulario esencial para interactuar de manera natural.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Section 1: Grammar */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-indigo-600 w-8 h-8" />
            <h2 className="text-3xl font-bold text-gray-800">1. Grammar: Modals of Offers</h2>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Los modales <strong>“will”</strong>, <strong>“can”</strong> y <strong>“could”</strong> son tus herramientas principales para ofrecer asistencia. Su elección depende de qué tan formal quieres ser o si la oferta fue espontánea.
          </p>
          
          <ModalsDiagram />
        </section>

        {/* Section 2: Vocabulary */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-6">2. Vocabulary: Helping Expressions</h2>
          <p className="text-lg text-gray-600">
            Conocer cómo ofrecer ayuda es solo la mitad del trabajo. Aquí tienes las expresiones clave para ofrecer, aceptar o declinar gentilmente cuando alguien te ofrece una mano.
          </p>
          
          <VocabularySection />
        </section>

        {/* Section 3: Integrated Use */}
        <section className="mt-16 bg-slate-800 text-white p-8 rounded-2xl shadow-lg bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
          <h2 className="text-2xl font-bold mb-6 text-indigo-300">3. Uso Integrado en Conversación</h2>
          <div className="grid md:grid-cols-2 gap-6 text-lg">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="font-semibold text-slate-300 mb-3 text-sm uppercase tracking-wider">Ofreciendo Ayuda</h3>
              <ul className="space-y-3">
                <li><span className="text-yellow-400 font-bold">I will</span> help you with your project.</li>
                <li><span className="text-blue-400 font-bold">Can I</span> assist you with your bags?</li>
                <li><span className="text-indigo-400 font-bold">Could I</span> help you fix this problem?</li>
              </ul>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="font-semibold text-slate-300 mb-3 text-sm uppercase tracking-wider">Respondiendo</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-400"/> That would be great, thank you.</li>
                <li className="flex items-center gap-2"><XCircle className="w-5 h-5 text-rose-400"/> No thanks, I can manage.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Exercises */}
        <section className="mt-16">
          <Exercises />
        </section>



      </main>

    </div>
  );
}