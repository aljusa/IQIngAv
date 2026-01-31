import React, { useState } from 'react';
import { 
  Clock, 
  Briefcase, 
  Coins, 
  Smile, 
  List, 
  Mail, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  BookOpen, 
  Edit3, 
  HelpCircle,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

const L1S3App = () => {
  const [activeTab, setActiveTab] = useState('intro');

  const tabs = [
    { id: 'intro', label: 'Regla Central', icon: <BookOpen size={18} /> },
    { id: 'little', label: 'A Little', icon: <Clock size={18} /> },
    { id: 'few', label: 'A Few', icon: <List size={18} /> },
    { id: 'compare', label: 'Comparación', icon: <ArrowRight size={18} /> },
    { id: 'practice', label: 'Ejercicios', icon: <Edit3 size={18} /> },
    { id: 'reflection', label: 'Reflexión', icon: <Lightbulb size={18} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'intro': return <IntroSection />;
      case 'little': return <ALittleSection />;
      case 'few': return <AFewSection />;
      case 'compare': return <ComparisonSection />;
      case 'practice': return <PracticeSection />;
      case 'reflection': return <ReflectionSection />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-800 pb-10">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">LESSON 1 – DELICIOUS SANDWICHES</h1>
          <h2 className="text-xl text-indigo-100 flex items-center gap-2">
            <span className="bg-indigo-500 px-3 py-1 rounded text-sm font-semibold uppercase tracking-wider">Sección 3</span>
            A Little vs A Few (Time, Work & Daily Life)
          </h2>
         
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow sticky top-0 z-10 overflow-x-auto">
        <div className="max-w-4xl mx-auto flex space-x-1 p-2 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                activeTab === tab.id
                  ? 'bg-indigo-100 text-indigo-700 shadow-sm'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto mt-8 p-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 min-h-[500px] border border-gray-100">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

// --- Sub-components for each section ---

const IntroSection = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-bold text-indigo-800">Idea Clave</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Ambas expresiones se usan para hablar de cantidades pequeñas, pero tienen reglas gramaticales diferentes.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-blue-800">A Little</h3>
          <Clock className="text-blue-500" size={32} />
        </div>
        <p className="text-blue-900 font-medium mb-2">+ Uncountable Nouns</p>
        <p className="text-sm text-gray-600">Para cosas que no se cuentan individualmente (tiempo, dinero, ayuda).</p>
      </div>

      <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-green-800">A Few</h3>
          <List className="text-green-500" size={32} />
        </div>
        <p className="text-green-900 font-medium mb-2">+ Countable Nouns (Plural)</p>
        <p className="text-sm text-gray-600">Para cosas que se pueden contar en unidades (minutos, tareas, emails).</p>
      </div>
    </div>

    <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 flex items-start gap-4">
      <div className="bg-yellow-100 p-2 rounded-full text-yellow-600 mt-1">
        <Smile size={24} />
      </div>
      <div>
        <h4 className="font-bold text-yellow-800 text-lg">Nota Positiva</h4>
        <p className="text-yellow-900">
          Ambas expresiones indican que hay <strong>suficiente</strong>, aunque no mucho. Son optimistas.
        </p>
      </div>
    </div>
  </div>
);

const ALittleSection = () => (
  <div className="space-y-6 animate-fade-in">
    <h3 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
      <Clock /> A Little (Incontables)
    </h3>
    
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h4 className="font-semibold text-gray-700 mb-3">Se usa con:</h4>
      <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
        <li>Cosas que no se cuentan individualmente.</li>
        <li>Cantidades generales o abstractas.</li>
      </ul>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ExampleCard 
        icon={<Clock className="text-blue-500" />} 
        word="Time" 
        sentence="I have a little time before work." 
      />
      <ExampleCard 
        icon={<Coins className="text-yellow-500" />} 
        word="Money" 
        sentence="We have a little money left." 
      />
      <ExampleCard 
        icon={<HelpCircle className="text-red-400" />} 
        word="Help" 
        sentence="She needs a little help with the project." 
      />
    </div>

    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mt-6">
      <div className="flex items-start gap-3">
        <AlertTriangle className="text-red-500 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-red-800">⚠️ Importante: El matiz cambia</h4>
          <div className="mt-2 grid md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded shadow-sm">
              <span className="font-bold text-green-600">A little time</span>
              <p className="text-sm text-gray-600">Algo de tiempo (Positivo: tengo suficiente).</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm opacity-75">
              <span className="font-bold text-gray-500">Little time</span>
              <p className="text-sm text-gray-600">Casi nada de tiempo (Negativo: no es suficiente).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AFewSection = () => (
  <div className="space-y-6 animate-fade-in">
    <h3 className="text-2xl font-bold text-green-700 flex items-center gap-2">
      <List /> A Few (Contables)
    </h3>

    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h4 className="font-semibold text-gray-700 mb-3">Se usa con:</h4>
      <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
        <li>Cosas contables en <strong>plural</strong>.</li>
        <li>Un número pequeño de unidades específicas.</li>
      </ul>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ExampleCard 
        icon={<Clock className="text-green-500" />} 
        word="Minutes" 
        sentence="I have a few minutes." 
      />
      <ExampleCard 
        icon={<Mail className="text-indigo-500" />} 
        word="Emails" 
        sentence="She sent a few emails." 
      />
      <ExampleCard 
        icon={<Briefcase className="text-orange-500" />} 
        word="Problems" 
        sentence="There are a few problems to solve." 
      />
    </div>

    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 mt-6">
      <div className="flex items-start gap-3">
        <AlertTriangle className="text-orange-500 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-orange-800">⚠️ Comparación clave</h4>
          <div className="mt-2 space-y-2">
            <p className="text-sm text-gray-800">
              <span className="font-bold text-green-700">a few problems</span> → Hay algunos (se puede trabajar con ellos, manejable).
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-bold">few problems</span> → Casi no hay (énfasis en la escasez).
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ComparisonSection = () => (
  <div className="space-y-6 animate-fade-in">
    <h3 className="text-2xl font-bold text-gray-800 mb-6">Comparación Clara</h3>
    
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-sm font-bold text-gray-600 uppercase">Expresión</th>
            <th className="p-4 text-sm font-bold text-gray-600 uppercase">Tipo de Sustantivo</th>
            <th className="p-4 text-sm font-bold text-gray-600 uppercase">Significado</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td className="p-4 font-bold text-blue-700 text-lg">A little</td>
            <td className="p-4 text-gray-700">Incontable</td>
            <td className="p-4 text-gray-600">Pequeña cantidad (positiva)</td>
          </tr>
          <tr className="bg-green-50 hover:bg-green-100 transition-colors">
            <td className="p-4 font-bold text-green-700 text-lg">A few</td>
            <td className="p-4 text-gray-700">Contable Plural</td>
            <td className="p-4 text-gray-600">Pequeño número (positivo)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-slate-800 rounded-xl text-white">
      <h4 className="font-bold text-lg mb-2">Resumen Visual</h4>
      <div className="flex flex-col md:flex-row gap-8 justify-around items-center pt-4">
        <div className="text-center">
          <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 text-2xl">💧</div>
          <p className="font-bold">Fluido / Abstracto</p>
          <p className="text-sm text-blue-200">A Little Time</p>
        </div>
        <div className="text-2xl text-gray-500">VS</div>
        <div className="text-center">
          <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 text-2xl">📦</div>
          <p className="font-bold">Unidades / Objetos</p>
          <p className="text-sm text-green-200">A Few Minutes</p>
        </div>
      </div>
    </div>
  </div>
);

const PracticeSection = () => {
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  const [showResults, setShowResults] = useState(false);
  const [showTransform, setShowTransform] = useState(false);

  const checkAnswers = () => setShowResults(true);
  const reset = () => {
    setAnswers({ q1: '', q2: '', q3: '', q4: '', q5: '' });
    setShowResults(false);
  };

  const getStyle = (q, correct) => {
    if (!showResults) return 'bg-white border-gray-300';
    return answers[q] === correct 
      ? 'bg-green-50 border-green-500 text-green-700 font-bold' 
      : 'bg-red-50 border-red-500 text-red-700';
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <h3 className="text-2xl font-bold text-gray-800">Ejercicios Guiados</h3>

      {/* Ejercicio 1 */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h4 className="text-lg font-bold text-indigo-700 mb-4 flex items-center gap-2">
          <Edit3 size={20}/> Ejercicio 1: Elige la opción correcta
        </h4>
        <div className="space-y-4">
          <QuizItem 
            question="1. I have ______ time before the meeting."
            options={['a little', 'a few']}
            name="q1"
            answer={answers.q1}
            setAnswer={(val) => setAnswers({...answers, q1: val})}
            style={getStyle('q1', 'a little')}
          />
          <QuizItem 
            question="2. She made ______ mistakes in the report."
            options={['a little', 'a few']}
            name="q2"
            answer={answers.q2}
            setAnswer={(val) => setAnswers({...answers, q2: val})}
            style={getStyle('q2', 'a few')}
          />
          <QuizItem 
            question="3. We need ______ patience."
            options={['a little', 'a few']}
            name="q3"
            answer={answers.q3}
            setAnswer={(val) => setAnswers({...answers, q3: val})}
            style={getStyle('q3', 'a little')}
          />
          <QuizItem 
            question="4. He asked ______ questions."
            options={['a little', 'a few']}
            name="q4"
            answer={answers.q4}
            setAnswer={(val) => setAnswers({...answers, q4: val})}
            style={getStyle('q4', 'a few')}
          />
          <QuizItem 
            question="5. There is ______ work to do."
            options={['a little', 'a few']}
            name="q5"
            answer={answers.q5}
            setAnswer={(val) => setAnswers({...answers, q5: val})}
            style={getStyle('q5', 'a little')}
          />
        </div>
        
        <div className="mt-6 flex gap-3">
          <button 
            onClick={checkAnswers} 
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
          >
            Verificar Respuestas
          </button>
          <button 
            onClick={reset}
            className="px-6 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition"
          >
            Reiniciar
          </button>
        </div>
      </div>

      {/* Ejercicio 2 */}
      <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-bold text-indigo-800 flex items-center gap-2">
            <ArrowRight size={20}/> Ejercicio 2: Transforma
          </h4>
          <button 
            onClick={() => setShowTransform(!showTransform)}
            className="text-sm text-indigo-600 underline font-medium"
          >
            {showTransform ? 'Ocultar Soluciones' : 'Ver Soluciones'}
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-4">Reescribe las frases mentalmente usando "a little" o "a few".</p>
        
        <div className="grid gap-3">
          <TransformItem original="I don't have much time." revealed={showTransform} answer="I have a little time." />
          <TransformItem original="There are some problems." revealed={showTransform} answer="There are a few problems." />
          <TransformItem original="She needs some help." revealed={showTransform} answer="She needs a little help." />
        </div>
      </div>

      {/* Ejercicio 3 */}
      <div className="bg-green-50 p-6 rounded-xl border border-green-100">
        <h4 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
           <Smile size={20}/> Ejercicio 3: Producción Personal
        </h4>
        <p className="text-gray-700 mb-3">Escribe en tu cuaderno o notas 3 frases reales sobre tu vida:</p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>2 frases con <strong>a little</strong></li>
          <li>1 frase con <strong>a few</strong></li>
        </ul>
        <div className="bg-white p-3 rounded border border-green-200 text-sm text-gray-500 italic">
          Ejemplo: I have a little time in the evening to relax.
        </div>
      </div>
    </div>
  );
};

const ReflectionSection = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-lg">
      <h3 className="text-3xl font-bold mb-4">Reflexión Final</h3>
      <p className="text-lg opacity-90 max-w-2xl mx-auto">
        La precisión del mensaje es clave. Dominar estas expresiones te permite sonar natural y educado.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <HelpCircle size={20} className="text-indigo-500"/>
          ¿Cómo cambia el mensaje?
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Decir <strong>"a few minutes"</strong> implica que tienes tiempo disponible (positivo). 
          Decir solo <strong>"few minutes"</strong> suena a que tienes prisa y es un problema (negativo).
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Smile size={20} className="text-green-500"/>
          Para sonar optimista
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Usa siempre el artículo <strong>"a"</strong> (a little / a few) cuando quieras indicar que los recursos (tiempo, dinero, ayuda) son suficientes para realizar la tarea.
        </p>
      </div>
    </div>

    <div className="bg-gray-100 p-6 rounded-xl text-center">
      <h4 className="font-bold text-gray-700 mb-2">Criterios de Evaluación</h4>
      <div className="flex flex-wrap justify-center gap-3">
        <Badge text="Selección correcta de estructura" color="bg-blue-100 text-blue-800" />
        <Badge text="Comprensión del matiz positivo" color="bg-green-100 text-green-800" />
        <Badge text="Producción clara y personal" color="bg-purple-100 text-purple-800" />
      </div>
    </div>
  </div>
);

// --- Helper Components ---

const ExampleCard = ({ icon, word, sentence }) => (
  <div className="bg-gray-50 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-white rounded-full shadow-sm">
        {icon}
      </div>
      <h5 className="font-bold text-lg text-gray-800">{word}</h5>
    </div>
    <p className="text-gray-600 text-sm italic">"{sentence}"</p>
  </div>
);

const QuizItem = ({ question, options, name, answer, setAnswer, style }) => {
  const parts = question.split('______');
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-2 rounded-lg transition-colors">
      <div className="flex-grow text-gray-700 font-medium">
        {parts[0]}
        <select 
          value={answer} 
          onChange={(e) => setAnswer(e.target.value)}
          className={`mx-2 p-1 rounded border-2 outline-none cursor-pointer transition-colors ${style}`}
        >
          <option value="">...</option>
          {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        {parts[1]}
      </div>
      {style.includes('green') && <CheckCircle size={20} className="text-green-500 animate-bounce" />}
      {style.includes('red') && <XCircle size={20} className="text-red-500" />}
    </div>
  );
};

const TransformItem = ({ original, answer, revealed }) => (
  <div className="bg-white p-3 rounded border border-indigo-100 flex flex-col md:flex-row justify-between items-center gap-2">
    <span className="text-gray-700 font-medium">{original}</span>
    <ArrowRight size={16} className="text-gray-400 hidden md:block"/>
    <div className={`transition-all duration-500 overflow-hidden ${revealed ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
      <span className="text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded">{answer}</span>
    </div>
    {!revealed && <span className="text-gray-300 text-sm italic">???</span>}
  </div>
);

const Badge = ({ text, color }) => (
  <span className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}>
    {text}
  </span>
);

export default L1S3App;