import { useState } from "react"

import L1S1App from "./components/Lesson1/Session1"
import L1S2App from "./components/Lesson1/Session2"
import L1S3App from "./components/Lesson1/Session3"
import L1S4App from "./components/Lesson1/Session4"

import L2S1App from "./components/Lesson2/Session1"
import L2S2App from "./components/Lesson2/Session2"
import L2S3App from "./components/Lesson2/Session3"
import L2S4App from "./components/Lesson2/Session4"

import L3S1App from "./components/Lesson3/Session1"
import L3S2App from "./components/Lesson3/Session2"
import L3S3App from "./components/Lesson3/Session3"
import L3S4App from "./components/Lesson3/Session4"

import L4S1App from "./components/Lesson4/Session1"
import L4S2App from "./components/Lesson4/Session2"
import L4S3App from "./components/Lesson4/Session3"
import L4S4App from "./components/Lesson4/Session4"

import L5S1App from "./components/Lesson5/Session1"
import L5S2App from "./components/Lesson5/Session2"
import L5S3App from "./components/Lesson5/Session3"
import L5S4App from "./components/Lesson5/Session4"

function App() {
  const [selectedApp, setSelectedApp] = useState("L1S1")

  const renderApp = () => {
    switch (selectedApp) {
      case "L1S1":
        return <L1S1App />
      case "L1S2":
        return <L1S2App />
      case "L1S3":
        return <L1S3App />
      case "L1S4":
        return <L1S4App />
      case "L2S1":
        return <L2S1App />
      case "L2S2":
        return <L2S2App />
      case "L2S3":
        return <L2S3App />
      case "L2S4":
        return <L2S4App />
      case "L3S1":
        return <L3S1App />
      case "L3S2":
        return <L3S2App />
      case "L3S3":
        return <L3S3App />
      case "L3S4":
        return <L3S4App />
      case "L4S1":
        return <L4S1App />
      case "L4S2":
        return <L4S2App />
      case "L4S3":
        return <L4S3App />
      case "L4S4":
        return <L4S4App />
      case "L5S1":
        return <L5S1App />
      case "L5S2":
        return <L5S2App />
      case "L5S3":
        return <L5S3App />
      case "L5S4":
        return <L5S4App />
      default:
        return null
    }
  }

  return (
    <div>
      <select
        value={selectedApp}
        onChange={(e) => setSelectedApp(e.target.value)}
      >
        <option value="L1S1">Lesson 1 - Session 1</option>
        <option value="L1S2">Lesson 1 - Session 2</option>
        <option value="L1S3">Lesson 1 - Session 3</option>
        <option value="L1S4">Lesson 1 - Session 4</option>
        <option value="L2S1">Lesson 2 - Session 1</option>
        <option value="L2S2">Lesson 2 - Session 2</option>
        <option value="L2S3">Lesson 2 - Session 3</option>
        <option value="L2S4">Lesson 2 - Session 4</option>
        <option value="L3S1">Lesson 3 - Session 1</option>
        <option value="L3S2">Lesson 3 - Session 2</option>
        <option value="L3S3">Lesson 3 - Session 3</option>
        <option value="L3S4">Lesson 3 - Session 4</option>
        <option value="L4S1">Lesson 4 - Session 1</option>
        <option value="L4S2">Lesson 4 - Session 2</option>
        <option value="L4S3">Lesson 4 - Session 3</option>
        <option value="L4S4">Lesson 4 - Session 4</option>
        <option value="L5S1">Lesson 5 - Session 1</option>
        <option value="L5S2">Lesson 5 - Session 2</option>
        <option value="L5S3">Lesson 5 - Session 3</option>
        <option value="L5S4">Lesson 5 - Session 4</option>
      
      </select>

      <hr />

      {renderApp()}
    </div>
  )
}

export default App
