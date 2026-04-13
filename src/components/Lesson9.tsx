import React, { useState } from 'react';
import { 
  Wallet, 
  ShoppingCart, 
  Receipt, 
  CreditCard, 
  Banknote, 
  Tags, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  Eye,
  EyeOff
} from 'lucide-react';

export default function App() {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-16">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4 text-emerald-100 font-semibold tracking-wider uppercase text-sm">
            <BookOpen size={20} />
            <span>Lesson 9</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Money Mania</h1>
          <p className="text-lg md:text-xl text-emerald-50 leading-relaxed max-w-3xl">
            En esta lección aprenderás a hablar sobre planes futuros utilizando la estructura <strong className="text-white bg-emerald-500/30 px-2 py-1 rounded">“going to”</strong>, mientras amplías tu vocabulario relacionado con el dinero, las compras y los gastos. Esto te permitirá expresar intenciones como comprar, ahorrar o gastar dinero de forma clara y natural.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-12 space-y-16">
        
        {/* Section 1: Grammar */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-lg">1</span>
              Grammar: “Going to” (Planes futuros)
            </h2>
            <p className="text-slate-600 mt-3 text-lg">
              La estructura “going to” se utiliza para hablar de planes o intenciones futuras.
            </p>
          </div>

          {/* Grammar Visual Diagram */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              
              {/* Afirmativa */}
              <div className="p-6 bg-green-50/50">
                <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                  <CheckCircle2 size={18} /> Afirmativa
                </h3>
                <div className="flex flex-wrap gap-2 text-sm font-medium mb-6">
                  <span className="bg-slate-200 text-slate-700 px-3 py-1.5 rounded-md">Sujeto</span>
                  <span className="text-slate-400 py-1.5">+</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-md">am/is/are</span>
                  <span className="text-slate-400 py-1.5">+</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-md">going to</span>
                  <span className="text-slate-400 py-1.5">+</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1.5 rounded-md">verbo base</span>
                </div>
                <div className="bg-white border-l-4 border-green-500 p-3 rounded text-slate-700 italic shadow-sm">
                  "I <span className="text-blue-600">am</span> <span className="text-purple-600">going to</span> <span className="text-orange-600">buy</span> a new phone."
                </div>
              </div>

              {/* Negativa */}
              <div className="p-6 bg-red-50/50">
                <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                  <span className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">-</span> Negativa
                </h3>
                <div className="flex flex-wrap gap-2 text-sm font-medium mb-6">
                  <span className="bg-slate-200 text-slate-700 px-3 py-1.5 rounded-md">Sujeto</span>
                  <span className="text-slate-400 py-1.5">+</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-md">am/is/are</span>
                  <span className="text-slate-400 py-1.5">+</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1.5 rounded-md">not</span>
                  <span className="text-slate-400 py-1.5">+</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-md">going to</span>
                </div>
                <div className="bg-white border-l-4 border-red-500 p-3 rounded text-slate-700 italic shadow-sm">
                  "She <span className="text-blue-600">is</span> <span className="text-red-600 font-bold">not</span> <span className="text-purple-600">going to</span> <span className="text-orange-600">spend</span> money today."
                </div>
              </div>

              {/* Interrogativa */}
              <div className="p-6 bg-blue-50/50">
                <h3 className="font-bold text-blue-700 mb-4 flex items-center gap-2">
                  <span className="font-bold text-lg">?</span> Interrogativa
                </h3>
                <div className="flex flex-wrap gap-2 text-sm font-medium mb-6">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-md">Am/Is/Are</span>
                  <span className="text-slate-400 py-1.5">+</span>
                  <span className="bg-slate-200 text-slate-700 px-3 py-1.5 rounded-md">Sujeto</span>
                  <span className="text-slate-400 py-1.5">+</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-md">going to</span>
                  <span className="text-slate-400 py-1.5">+</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1.5 rounded-md">verbo</span>
                </div>
                <div className="bg-white border-l-4 border-blue-500 p-3 rounded text-slate-700 italic shadow-sm">
                  "<span className="text-blue-600">Are</span> you <span className="text-purple-600">going to</span> <span className="text-orange-600">save</span> money this month?"
                </div>
              </div>

            </div>
          </div>

          <div className="mt-6 bg-slate-100 p-4 rounded-xl flex flex-wrap gap-4 items-center justify-between">
            <div className="text-sm"><strong>Usos comunes:</strong></div>
            <div className="flex-1 flex flex-wrap gap-3">
              <span className="bg-white px-3 py-1 rounded-full text-sm shadow-sm border border-slate-200 text-slate-600">Planes personales</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm shadow-sm border border-slate-200 text-slate-600">Intenciones</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm shadow-sm border border-slate-200 text-slate-600">Decisiones ya pensadas</span>
            </div>
          </div>
        </section>


        {/* Section 2: Vocabulary */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
              <span className="bg-emerald-100 text-emerald-600 p-2 rounded-lg">2</span>
              Vocabulary: Money, Shopping, Expenses
            </h2>
          </div>

          {/* Vocabulary Cards Visual Suggestion */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dinero */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Wallet size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Dinero <span className="text-slate-400 font-normal text-sm ml-2">(Money)</span></h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center"><span className="font-semibold text-emerald-700">Money</span> <span className="text-slate-500">dinero</span></li>
                <li className="flex justify-between items-center"><span className="font-semibold text-emerald-700">Cash</span> <span className="text-slate-500">efectivo</span></li>
                <li className="flex justify-between items-center"><span className="font-semibold text-emerald-700">Credit card</span> <span className="text-slate-500">tarjeta de crédito</span></li>
                <li className="flex justify-between items-center"><span className="font-semibold text-emerald-700">Savings</span> <span className="text-slate-500">ahorros</span></li>
                <li className="flex justify-between items-center"><span className="font-semibold text-emerald-700">Budget</span> <span className="text-slate-500">presupuesto</span></li>
              </ul>
            </div>

            {/* Compras */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <ShoppingCart size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Compras <span className="text-slate-400 font-normal text-sm ml-2">(Shopping)</span></h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center"><span className="font-semibold text-blue-700">Buy</span> <span className="text-slate-500">comprar</span></li>
                <li className="flex justify-between items-center"><span className="font-semibold text-blue-700">Sell</span> <span className="text-slate-500">vender</span></li>
                <li className="flex justify-between items-center"><span className="font-semibold text-blue-700">Store</span> <span className="text-slate-500">tienda</span></li>
                <li className="flex justify-between items-center"><span className="font-semibold text-blue-700">Price</span> <span className="text-slate-500">precio</span></li>
                <li className="flex justify-between items-center"><span className="font-semibold text-blue-700">Discount</span> <span className="text-slate-500">descuento</span></li>
              </ul>
            </div>

            {/* Gastos */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6">
                <Receipt size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Gastos <span className="text-slate-400 font-normal text-sm ml-2">(Expenses)</span></h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center"><span className="font-semibold text-rose-700">Spend</span> <span className="text-slate-500">gastar</span></li>
                <li className="flex justify-between items-center"><span className="font-semibold text-rose-700">Bill</span> <span className="text-slate-500">factura</span></li>
                <li className="flex justify-between items-center"><span className="font-semibold text-rose-700">Rent</span> <span className="text-slate-500">renta</span></li>
                <li className="flex justify-between items-center"><span className="font-semibold text-rose-700">Groceries</span> <span className="text-slate-500">supermercado</span></li>
                <li className="flex justify-between items-center"><span className="font-semibold text-rose-700">Expensive</span> <span className="text-slate-500">caro</span></li>
                <li className="flex justify-between items-center"><span className="font-semibold text-rose-700">Cheap</span> <span className="text-slate-500">barato</span></li>
              </ul>
            </div>
          </div>
        </section>


        {/* Section 3: Integration */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
              <span className="bg-purple-100 text-purple-600 p-2 rounded-lg">3</span>
              Uso integrado: Gramática + Vocabulario
            </h2>
            <p className="text-slate-600 mt-3 text-lg">
              Aquí combinamos la estructura de futuro con el nuevo vocabulario de dinero:
            </p>
          </div>

          {/* Integration Visual Diagram */}
          <div className="bg-slate-800 rounded-2xl p-6 md:p-8 shadow-lg text-white">
            <div className="space-y-4">
              
              <div className="flex items-center gap-3 bg-slate-700/50 p-4 rounded-xl">
                <ArrowRight className="text-emerald-400 flex-shrink-0" />
                <p className="text-lg">
                  I <span className="text-blue-300">am</span> <span className="text-purple-300">going to</span> <span className="text-orange-300">spend</span> <span className="bg-emerald-500/30 text-emerald-200 px-2 rounded">money</span> on clothes.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-slate-700/50 p-4 rounded-xl">
                <ArrowRight className="text-emerald-400 flex-shrink-0" />
                <p className="text-lg">
                  She <span className="text-blue-300">is</span> <span className="text-purple-300">going to</span> <span className="text-orange-300">save</span> her <span className="bg-emerald-500/30 text-emerald-200 px-2 rounded">salary</span>.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-slate-700/50 p-4 rounded-xl">
                <ArrowRight className="text-emerald-400 flex-shrink-0" />
                <p className="text-lg">
                  We <span className="text-blue-300">are</span> <span className="text-purple-300">going to</span> <span className="text-orange-300">buy</span> <span className="bg-blue-500/30 text-blue-200 px-2 rounded">groceries</span> tomorrow.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-slate-700/50 p-4 rounded-xl">
                <ArrowRight className="text-emerald-400 flex-shrink-0" />
                <p className="text-lg">
                  They <span className="text-blue-300">are</span> <span className="text-purple-300">going to</span> <span className="text-orange-300">use</span> a <span className="bg-rose-500/30 text-rose-200 px-2 rounded">credit card</span>.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* Section 4: Exercises */}
        <section>
          <div className="mb-8 flex justify-between items-end border-b-2 border-slate-200 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                <span className="bg-orange-100 text-orange-600 p-2 rounded-lg">4</span>
                Ejercicios Prácticos
              </h2>
              <p className="text-slate-600 mt-2">Pon a prueba lo que has aprendido. Intenta resolverlos antes de ver las respuestas.</p>
            </div>
            <button 
              onClick={() => setShowAnswers(!showAnswers)}
              className="hidden md:flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors shadow-sm"
            >
              {showAnswers ? <EyeOff size={18}/> : <Eye size={18}/>}
              {showAnswers ? "Ocultar respuestas" : "Mostrar respuestas"}
            </button>
          </div>

          {/* Mobile Button */}
          <button 
            onClick={() => setShowAnswers(!showAnswers)}
            className="w-full mb-6 md:hidden flex justify-center items-center gap-2 bg-slate-800 text-white px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors shadow-sm"
          >
            {showAnswers ? <EyeOff size={18}/> : <Eye size={18}/>}
            {showAnswers ? "Ocultar respuestas" : "Mostrar respuestas"}
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Part A */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg text-slate-800 mb-4 bg-slate-100 inline-block px-3 py-1 rounded">A. Completa con "going to"</h3>
              <ul className="space-y-4">
                <li className="flex flex-col gap-1">
                  <span>1. I ________ (buy) a new laptop.</span>
                  {showAnswers && <span className="text-emerald-600 font-semibold bg-emerald-50 p-2 rounded text-sm animate-fade-in">I <span className="underline">am going to buy</span> a new laptop.</span>}
                </li>
                <li className="flex flex-col gap-1">
                  <span>2. She ________ (save) money this month.</span>
                  {showAnswers && <span className="text-emerald-600 font-semibold bg-emerald-50 p-2 rounded text-sm animate-fade-in">She <span className="underline">is going to save</span> money this month.</span>}
                </li>
                <li className="flex flex-col gap-1">
                  <span>3. They ________ (not/spend) too much money.</span>
                  {showAnswers && <span className="text-emerald-600 font-semibold bg-emerald-50 p-2 rounded text-sm animate-fade-in">They <span className="underline">are not going to spend</span> too much money.</span>}
                </li>
                <li className="flex flex-col gap-1">
                  <span>4. We ________ (go) shopping tomorrow.</span>
                  {showAnswers && <span className="text-emerald-600 font-semibold bg-emerald-50 p-2 rounded text-sm animate-fade-in">We <span className="underline">are going to go</span> shopping tomorrow.</span>}
                </li>
                <li className="flex flex-col gap-1">
                  <span>5. He ________ (pay) the bill later.</span>
                  {showAnswers && <span className="text-emerald-600 font-semibold bg-emerald-50 p-2 rounded text-sm animate-fade-in">He <span className="underline">is going to pay</span> the bill later.</span>}
                </li>
              </ul>
            </div>

            {/* Part B */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg text-slate-800 mb-4 bg-slate-100 inline-block px-3 py-1 rounded">B. Ordena las palabras</h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex flex-col gap-1">
                  <span className="italic text-slate-500 text-sm">going / is / buy / she / to / clothes</span>
                  {showAnswers && <span className="text-blue-600 font-semibold bg-blue-50 p-2 rounded text-sm animate-fade-in">She is going to buy clothes.</span>}
                </li>
                <li className="flex flex-col gap-1">
                  <span className="italic text-slate-500 text-sm">are / save / we / money / going / to</span>
                  {showAnswers && <span className="text-blue-600 font-semibold bg-blue-50 p-2 rounded text-sm animate-fade-in">We are going to save money.</span>}
                </li>
                <li className="flex flex-col gap-1">
                  <span className="italic text-slate-500 text-sm">not / going / I / am / spend / to / money</span>
                  {showAnswers && <span className="text-blue-600 font-semibold bg-blue-50 p-2 rounded text-sm animate-fade-in">I am not going to spend money.</span>}
                </li>
                <li className="flex flex-col gap-1">
                  <span className="italic text-slate-500 text-sm">going / they / groceries / are / buy / to</span>
                  {showAnswers && <span className="text-blue-600 font-semibold bg-blue-50 p-2 rounded text-sm animate-fade-in">They are going to buy groceries.</span>}
                </li>
              </ul>
            </div>

            {/* Part C */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg text-slate-800 mb-4 bg-slate-100 inline-block px-3 py-1 rounded">C. Traduce al inglés</h3>
              <ul className="space-y-4">
                <li className="flex flex-col gap-1">
                  <span>1. Voy a comprar comida.</span>
                  {showAnswers && <span className="text-purple-600 font-semibold bg-purple-50 p-2 rounded text-sm animate-fade-in">I am going to buy groceries.</span>}
                </li>
                <li className="flex flex-col gap-1">
                  <span>2. Ella va a gastar mucho dinero.</span>
                  {showAnswers && <span className="text-purple-600 font-semibold bg-purple-50 p-2 rounded text-sm animate-fade-in">She is going to spend a lot of money.</span>}
                </li>
                <li className="flex flex-col gap-1">
                  <span>3. Nosotros vamos a ahorrar dinero.</span>
                  {showAnswers && <span className="text-purple-600 font-semibold bg-purple-50 p-2 rounded text-sm animate-fade-in">We are going to save money.</span>}
                </li>
                <li className="flex flex-col gap-1">
                  <span>4. Ellos no van a pagar la cuenta.</span>
                  {showAnswers && <span className="text-purple-600 font-semibold bg-purple-50 p-2 rounded text-sm animate-fade-in">They are not going to pay the bill.</span>}
                </li>
              </ul>
            </div>

            {/* Part D */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg text-slate-800 mb-4 bg-slate-100 inline-block px-3 py-1 rounded">D. Vocabulario</h3>
              <ul className="space-y-4">
                <li className="flex flex-col gap-1">
                  <span>1. I pay with my ________ (tarjeta de crédito).</span>
                  {showAnswers && <span className="text-rose-600 font-semibold bg-rose-50 p-2 rounded text-sm animate-fade-in">I pay with my <span className="underline">credit card</span>.</span>}
                </li>
                <li className="flex flex-col gap-1">
                  <span>2. The ________ is very high (precio).</span>
                  {showAnswers && <span className="text-rose-600 font-semibold bg-rose-50 p-2 rounded text-sm animate-fade-in">The <span className="underline">price</span> is very high.</span>}
                </li>
                <li className="flex flex-col gap-1">
                  <span>3. I need to buy ________ (comida).</span>
                  {showAnswers && <span className="text-rose-600 font-semibold bg-rose-50 p-2 rounded text-sm animate-fade-in">I need to buy <span className="underline">groceries</span>.</span>}
                </li>
                <li className="flex flex-col gap-1">
                  <span>4. This product is very ________ (caro).</span>
                  {showAnswers && <span className="text-rose-600 font-semibold bg-rose-50 p-2 rounded text-sm animate-fade-in">This product is very <span className="underline">expensive</span>.</span>}
                </li>
              </ul>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}