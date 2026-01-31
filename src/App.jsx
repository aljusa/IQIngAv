import { useState, Suspense, lazy } from "react"

// función que devuelve el componente dinámico
const loadComponent = (lesson, session) =>
  lazy(() =>
    import(`./components/Lesson${lesson}/Session${session}`)
  )

function App() {
  const [selectedApp, setSelectedApp] = useState("L1S1")

  const lesson = selectedApp[1]
  const session = selectedApp[3]

  const SelectedComponent = loadComponent(lesson, session)

  return (
    <div>
      <select
        value={selectedApp}
        onChange={(e) => setSelectedApp(e.target.value)}
      >
        {Array.from({ length: 4 }, (_, i) => i + 1).map((l) =>
          Array.from({ length: 4 }, (_, i) => i + 1).map((s) => (
            <option key={`L${l}S${s}`} value={`L${l}S${s}`}>
              Lesson {l} - Session {s}
            </option>
          ))
        )}
      </select>

      <hr />

      <Suspense fallback={<div>Cargando sesión...</div>}>
        <SelectedComponent />
      </Suspense>
    </div>
  )
}

export default App
