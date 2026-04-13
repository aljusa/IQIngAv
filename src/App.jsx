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

import L6S1App from "./components/Lesson6/Session1"
import L6S2App from "./components/Lesson6/Session2"
import L6S3App from "./components/Lesson6/Session3"
import L6S4App from "./components/Lesson6/Session4"

import L7S1App from "./components/Lesson7/Session1"
import L7S2App from "./components/Lesson7/Session2"
import L7S3App from "./components/Lesson7/Session3"
import L7S4App from "./components/Lesson7/Session4"

import L8S1App from "./components/Lesson8/Session1"
import L8S2App from "./components/Lesson8/Session2"
import L8S3App from "./components/Lesson8/Session3"
import L8S4App from "./components/Lesson8/Session4"

import Lesson9 from "./components/Lesson9"
import Lesson10 from "./components/Lesson10"
import Lesson11 from "./components/Lesson11"
import Lesson12 from "./components/Lesson12"
import Lesson13 from "./components/Lesson13"
import Lesson14 from "./components/Lesson14"
import Lesson15 from "./components/Lesson15"
import Lesson16 from "./components/Lesson16"
import Lesson17 from "./components/Lesson17"
import Lesson18 from "./components/Lesson18"
import Lesson19 from "./components/Lesson19"
import Lesson20 from "./components/Lesson20"

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

      case "L6S1":
        return <L6S1App />
      case "L6S2":
        return <L6S2App />
      case "L6S3":
        return <L6S3App />
      case "L6S4":
        return <L6S4App />

      case "L7S1":
        return <L7S1App />
      case "L7S2":
        return <L7S2App />
      case "L7S3":
        return <L7S3App />
      case "L7S4":
        return <L7S4App />

      case "L8S1":
        return <L8S1App />
      case "L8S2":
        return <L8S2App />
      case "L8S3":
        return <L8S3App />
      case "L8S4":
        return <L8S4App />
      case "Lesson9":
        return <Lesson9 />
      case "Lesson10":
        return <Lesson10 />
      case "Lesson11":
        return <Lesson11 />
      case "Lesson12":
        return <Lesson12 />
      case "Lesson13":
        return <Lesson13 />
      case "Lesson14":
        return <Lesson14 />
      case "Lesson15":
        return <Lesson15 />
      case "Lesson16":
        return <Lesson16 />
      case "Lesson17":
        return <Lesson17 />
      case "Lesson18":
        return <Lesson18 />
      case "Lesson19":
        return <Lesson19 />
      case "Lesson20":
        return <Lesson20 />
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

        <option value="L6S1">Lesson 6 - Session 1</option>
        <option value="L6S2">Lesson 6 - Session 2</option>
        <option value="L6S3">Lesson 6 - Session 3</option>
        <option value="L6S4">Lesson 6 - Session 4</option>

        <option value="L7S1">Lesson 7 - Session 1</option>
        <option value="L7S2">Lesson 7 - Session 2</option>
        <option value="L7S3">Lesson 7 - Session 3</option>
        <option value="L7S4">Lesson 7 - Session 4</option>

        <option value="L8S1">Lesson 8 - Session 1</option>
        <option value="L8S2">Lesson 8 - Session 2</option>
        <option value="L8S3">Lesson 8 - Session 3</option>
        <option value="L8S4">Lesson 8 - Session 4</option>
        <option value="Lesson9">Lesson 9</option>

        <option value="Lesson10">Lesson 10</option>
        <option value="Lesson11">Lesson 11</option>
        <option value="Lesson12">Lesson 12</option>
        <option value="Lesson13">Lesson 13</option>
        <option value="Lesson14">Lesson 14</option>
        <option value="Lesson15">Lesson 15</option>
        <option value="Lesson16">Lesson 16</option>
        <option value="Lesson17">Lesson 17</option>
        <option value="Lesson18">Lesson 18</option>
        <option value="Lesson19">Lesson 19</option>
        <option value="Lesson20">Lesson 20</option>

      </select>

      <hr />

      {renderApp()}
    </div>
  )
}

export default App
