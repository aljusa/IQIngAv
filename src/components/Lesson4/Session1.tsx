import React, { useState } from 'react';
import { BookOpen, Music, Star, Edit3, CheckCircle, AlertCircle, Volume2, ArrowRight } from 'lucide-react';

// --- Types & Interfaces ---
type TabId = 'vocab' | 'grammar' | 'context' | 'exercises' | 'summary';

interface VocabCardProps {
  word: string;
  definition: string;
  example: string;
  icon: React.ReactNode;
}

interface ExerciseProps {
  id: number;
  question: string;
  type: 'select' | 'input' | 'textarea';
  options?: string[];
  correctAnswer?: string | string[]; // Can accept multiple correct forms for flexibility
  placeholder?: string;
}

// --- Components ---

const VocabCard: React.FC<VocabCardProps> = ({ word, definition, example, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800">{word}</h3>
    </div>
    <p className="text-slate-600 mb-4 text-sm font-medium">{definition}</p>
    <div className="bg-slate-50 p-3 rounded-lg border-l-4 border-indigo-400">
      <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Example</p>
      <p className="text-indigo-900 font-medium italic">"{example}"</p>
    </div>
  </div>
);

// --- Main Application ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('vocab');

  // Exercise State Management
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [feedback, setFeedback] = useState<{ [key: number]: 'correct' | 'incorrect' | null }>({});

  const handleCheckAnswer = (id: number, correct: string | string[]) => {
    const userAnswer = answers[id]?.trim().toLowerCase();
    
    let isCorrect = false;
    if (Array.isArray(correct)) {
      isCorrect = correct.some(c => c.toLowerCase() === userAnswer);
    } else {
      isCorrect = userAnswer === correct.toLowerCase();
    }

    setFeedback(prev => ({ ...prev, [id]: isCorrect ? 'correct' : 'incorrect' }));
  };

  const tabs = [
    { id: 'vocab', label: '1. Vocabulario', icon: <BookOpen size={18} /> },
    { id: 'grammar', label: '2. Gramática', icon: <Star size={18} /> },
    { id: 'context', label: '3. Música y Comparación', icon: <Music size={18} /> },
    { id: 'summary', label: 'Resumen', icon: <CheckCircle size={18} /> },
    { id: 'exercises', label: 'Práctica', icon: <Edit3 size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Expressing & Intensifying Emotions</h1>
          <p className="text-indigo-100 opacity-90">
            Lección: Aprende a usar <strong>very</strong> y <strong>really</strong> para expresar sentimientos en inglés.
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className=" top-0 z-10 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <nav className="flex space-x-1 p-2 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabId)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto p-6">
        
        {/* TAB 1: VOCABULARIO */}
        {activeTab === 'vocab' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Vocabulario Clave</h2>
              <p className="text-slate-600 mb-6">
                Conoce los adjetivos básicos para describir cómo te sientes o qué transmite algo (como una canción).
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <VocabCard 
                  word="happy" 
                  definition="Sentir alegría." 
                  example="I feel happy." 
                  icon={<span className="text-2xl">😊</span>} 
                />
                <VocabCard 
                  word="sad" 
                  definition="Sentir tristeza." 
                  example="The movie was sad." 
                  icon={<span className="text-2xl">😢</span>} 
                />
                <VocabCard 
                  word="excited" 
                  definition="Sentir entusiasmo o emoción positiva." 
                  example="I am excited about the trip." 
                  icon={<span className="text-2xl">🤩</span>} 
                />
                <VocabCard 
                  word="calm" 
                  definition="Sentirse tranquilo o en paz." 
                  example="The ocean is very calm." 
                  icon={<span className="text-2xl">😌</span>} 
                />
                <VocabCard 
                  word="emotional" 
                  definition="Que expresa o provoca emociones fuertes." 
                  example="This song is emotional." 
                  icon={<span className="text-2xl">🥺</span>} 
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: GRAMATICA */}
        {activeTab === 'grammar' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Gramática: Intensificadores</h2>
              
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-indigo-700 mb-2">La Estructura</h3>
                  <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200 flex items-center justify-center gap-2 text-lg font-mono text-indigo-900">
                    <span className="font-bold bg-white px-3 py-1 rounded shadow-sm">very / really</span>
                    <span>+</span>
                    <span className="font-bold bg-white px-3 py-1 rounded shadow-sm">adjective</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-500">
                    <AlertCircle className="inline w-4 h-4 mr-1 mb-0.5" />
                    <strong>Nota:</strong> Se colocan ANTES del adjetivo, nunca después.
                  </p>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <span className="font-bold text-slate-800 block">very</span>
                    <span className="text-slate-600 text-sm">Común y neutral. Formal o informal.</span>
                    <div className="mt-1 text-slate-800 bg-slate-100 px-3 py-1 rounded-md inline-block">"Very happy"</div>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">really</span>
                    <span className="text-slate-600 text-sm">Muy frecuente, suena más expresivo/natural.</span>
                    <div className="mt-1 text-slate-800 bg-slate-100 px-3 py-1 rounded-md inline-block">"Really excited"</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h3 className="font-bold text-slate-800 mb-3">Ejemplos en Oraciones</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span>I am <strong className="text-indigo-600">very happy</strong> today.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span>She is <strong className="text-indigo-600">really excited</strong> about the concert.</span>
                  </li>
                  <li className="flex items-center gap-3 opacity-50">
                    <AlertCircle className="text-red-400 w-5 h-5 flex-shrink-0" />
                    <span className="line-through decoration-red-400 decoration-2">I am happy very.</span> 
                    <span className="text-red-500 text-sm ml-2 font-bold">(Incorrecto)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CONTEXTO */}
        {activeTab === 'context' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Sección Música */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Music className="w-8 h-8 opacity-80" />
                <h2 className="text-2xl font-bold">Emociones y Música</h2>
              </div>
              <p className="text-indigo-100 mb-6 max-w-2xl">
                La música es un contexto perfecto para practicar estos adjetivos. A menudo describimos tanto la canción como nuestros sentimientos al escucharla.
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                  <p className="font-medium">"This song is <span className="text-yellow-300 font-bold">really emotional</span>."</p>
                  <p className="text-sm text-indigo-200 mt-2">Describe la canción.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                  <p className="font-medium">"I feel <span className="text-yellow-300 font-bold">really relaxed</span> when I listen to this."</p>
                  <p className="text-sm text-indigo-200 mt-2">Describe tu sentimiento.</p>
                </div>
              </div>
            </div>

            {/* Sección Comparación */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Comparando Niveles</h2>
              <p className="text-slate-600 mb-6">
                Podemos contrastar una emoción simple con una intensificada para mostrar la diferencia de grado.
              </p>

              <div className="flex flex-col items-center space-y-4 py-4">
                {/* Level 1 */}
                <div className="w-full flex items-center gap-4">
                  <div className="w-24 text-right font-medium text-slate-500">Nivel 1</div>
                  <div className="flex-1 bg-slate-100 p-3 rounded-lg flex items-center gap-2">
                    <span className="text-2xl">🙂</span>
                    <span>I feel <strong>happy</strong>.</span>
                  </div>
                </div>
                
                <ArrowRight className="text-slate-400 rotate-90 md:rotate-0" />

                {/* Level 2 */}
                <div className="w-full flex items-center gap-4">
                  <div className="w-24 text-right font-bold text-indigo-600">Nivel 2</div>
                  <div className="flex-1 bg-indigo-50 border border-indigo-200 p-3 rounded-lg flex items-center gap-2 shadow-sm">
                    <span className="text-3xl">😄</span>
                    <span>But this song makes me <strong className="text-indigo-700">very happy</strong>.</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg mt-4 text-center text-slate-600 italic">
                "The music is emotional, but the final part is <strong>really emotional</strong>."
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SUMMARY */}
        {activeTab === 'summary' && (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center animate-fadeIn">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Resumen Clave</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Edit3 size={24} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Adjetivos</h3>
                <p className="text-sm text-slate-600">Describen emociones (happy, sad, calm).</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Volume2 size={24} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Intensificadores</h3>
                <p className="text-sm text-slate-600"><strong>Very</strong> y <strong>really</strong> aumentan la intensidad.</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star size={24} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Orden</h3>
                <p className="text-sm text-slate-600">Siempre van antes del adjetivo (<em>really happy</em>).</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-slate-50 rounded-lg text-slate-500 text-sm">
              <strong>Tip Pro:</strong> Usa "really" para sonar más natural y expresivo en conversaciones informales.
            </div>
          </div>
        )}

        {/* TAB 5: EJERCICIOS */}
        {activeTab === 'exercises' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Práctica Interactiva</h2>
              <p className="text-slate-600 mb-6">Pon a prueba lo aprendido. Completa los ejercicios abajo.</p>

              {/* Ejercicio 1 */}
              <div className="mb-8 border-b border-slate-100 pb-8">
                <h3 className="text-lg font-bold text-indigo-700 mb-4">1. Completar (Básico)</h3>
                <p className="text-sm text-slate-500 mb-4">Selecciona el intensificador adecuado (en este contexto, ambos son gramaticalmente correctos, pero practicaremos la estructura).</p>
                
                <div className="space-y-4">
                  {[
                    { id: 1, text: "I am ___ happy today.", correct: ["very", "really"] },
                    { id: 2, text: "This song is ___ emotional.", correct: ["very", "really"] },
                    { id: 3, text: "She feels ___ calm.", correct: ["very", "really"] },
                  ].map((q) => (
                    <div key={q.id} className="flex flex-wrap items-center gap-3 bg-slate-50 p-3 rounded-lg">
                      <span className="flex-1 font-medium text-slate-700">
                        {q.text.split('___')[0]}
                        <select 
                          className="mx-2 p-1 rounded border border-slate-300 focus:ring-2 focus:ring-indigo-500"
                          value={answers[q.id] || ""}
                          onChange={(e) => {
                            setAnswers({...answers, [q.id]: e.target.value});
                            setFeedback(prev => ({...prev, [q.id]: null})); // Reset feedback on change
                          }}
                        >
                          <option value="">Select...</option>
                          <option value="very">very</option>
                          <option value="really">really</option>
                        </select>
                        {q.text.split('___')[1]}
                      </span>
                      
                      <button 
                        onClick={() => handleCheckAnswer(q.id, q.correct)}
                        className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition"
                      >
                        Check
                      </button>
                      
                      {feedback[q.id] === 'correct' && <span className="text-green-600 flex items-center text-sm"><CheckCircle size={16} className="mr-1"/> Correct!</span>}
                      {feedback[q.id] === 'incorrect' && <span className="text-red-500 flex items-center text-sm"><AlertCircle size={16} className="mr-1"/> Try again</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Ejercicio 2 */}
              <div className="mb-8 border-b border-slate-100 pb-8">
                <h3 className="text-lg font-bold text-indigo-700 mb-4">2. Reescribir (Intermedio)</h3>
                <p className="text-sm text-slate-500 mb-4">Reescribe la oración agregando 'really' o 'very' antes del adjetivo.</p>

                <div className="space-y-6">
                  {[
                    { id: 4, q: "The music is calm.", correct: ["The music is very calm", "The music is really calm", "The music is very calm.", "The music is really calm."] },
                    { id: 5, q: "I feel excited.", correct: ["I feel very excited", "I feel really excited", "I feel very excited.", "I feel really excited."] },
                  ].map((item) => (
                    <div key={item.id} className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800 mb-2">{item.q}</p>
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          className="flex-1 p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                          placeholder="Escribe la oración completa..."
                          value={answers[item.id] || ""}
                          onChange={(e) => {
                            setAnswers({...answers, [item.id]: e.target.value});
                            setFeedback(prev => ({...prev, [item.id]: null}));
                          }}
                        />
                        <button 
                          onClick={() => handleCheckAnswer(item.id, item.correct)}
                          className="px-4 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700"
                        >
                          Check
                        </button>
                      </div>
                      {feedback[item.id] === 'correct' && <p className="text-green-600 text-sm mt-2 flex items-center"><CheckCircle size={16} className="mr-1"/> ¡Excelente!</p>}
                      {feedback[item.id] === 'incorrect' && <p className="text-red-500 text-sm mt-2 flex items-center"><AlertCircle size={16} className="mr-1"/> Revisa la ortografía o el orden.</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Ejercicio 3 */}
              <div>
                <h3 className="text-lg font-bold text-indigo-700 mb-4">3. Comparación (Avanzado)</h3>
                <p className="text-sm text-slate-500 mb-4">
                  Crea tu propia oración comparativa usando "emotional".
                  <br /><em>Modelo: "I feel happy, but this song makes me very happy."</em>
                </p>
                <textarea 
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none h-24 mb-2"
                  placeholder="Escribe tu oración aquí..."
                />
                <p className="text-xs text-slate-400">Este ejercicio es de práctica libre. Intenta leerlo en voz alta.</p>
              </div>

            </div>
          </div>
        )}
      </main>

    </div>
  );
}