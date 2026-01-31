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

// import L9S1App from "./components/Lesson9/Session1"
// import L9S2App from "./components/Lesson9/Session2"
// import L9S3App from "./components/Lesson9/Session3"
// import L9S4App from "./components/Lesson9/Session4"

// import L10S1App from "./components/Lesson10/Session1"
// import L10S2App from "./components/Lesson10/Session2"
// import L10S3App from "./components/Lesson10/Session3"
// import L10S4App from "./components/Lesson10/Session4"

// import L11S1App from "./components/Lesson11/Session1"
// import L11S2App from "./components/Lesson11/Session2"
// import L11S3App from "./components/Lesson11/Session3"
// import L11S4App from "./components/Lesson11/Session4"

// import L12S1App from "./components/Lesson12/Session1"
// import L12S2App from "./components/Lesson12/Session2"
// import L12S3App from "./components/Lesson12/Session3"
// import L12S4App from "./components/Lesson12/Session4"

// import L13S1App from "./components/Lesson13/Session1"
// import L13S2App from "./components/Lesson13/Session2"
// import L13S3App from "./components/Lesson13/Session3"
// import L13S4App from "./components/Lesson13/Session4"

// import L14S1App from "./components/Lesson14/Session1"
// import L14S2App from "./components/Lesson14/Session2"
// import L14S3App from "./components/Lesson14/Session3"
// import L14S4App from "./components/Lesson14/Session4"

// import L15S1App from "./components/Lesson15/Session1"
// import L15S2App from "./components/Lesson15/Session2"
// import L15S3App from "./components/Lesson15/Session3"
// import L15S4App from "./components/Lesson15/Session4"

// import L16S1App from "./components/Lesson16/Session1"
// import L16S2App from "./components/Lesson16/Session2"
// import L16S3App from "./components/Lesson16/Session3"
// import L16S4App from "./components/Lesson16/Session4"

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

// case "L9S1":
// return <L9S1App />
// case "L9S2":
// return <L9S2App />
// case "L9S3":
// return <L9S3App />
// case "L9S4":
// return <L9S4App />

// case "L10S1":
// return <L10S1App />
// case "L10S2":
// return <L10S2App />
// case "L10S3":
// return <L10S3App />
// case "L10S4":
// return <L10S4App />

// case "L11S1":
// return <L11S1App />
// case "L11S2":
// return <L11S2App />
// case "L11S3":
// return <L11S3App />
// case "L11S4":
// return <L11S4App />

// case "L12S1":
// return <L12S1App />
// case "L12S2":
// return <L12S2App />
// case "L12S3":
// return <L12S3App />
// case "L12S4":
// return <L12S4App />

// case "L13S1":
// return <L13S1App />
// case "L13S2":
// return <L13S2App />
// case "L13S3":
// return <L13S3App />
// case "L13S4":
// return <L13S4App />

// case "L14S1":
// return <L14S1App />
// case "L14S2":
// return <L14S2App />
// case "L14S3":
// return <L14S3App />
// case "L14S4":
// return <L14S4App />

// case "L15S1":
// return <L15S1App />
// case "L15S2":
// return <L15S2App />
// case "L15S3":
// return <L15S3App />
// case "L15S4":
// return <L15S4App />

// case "L16S1":
// return <L16S1App />
// case "L16S2":
// return <L16S2App />
// case "L16S3":
// return <L16S3App />
// case "L16S4":
// return <L16S4App />
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
{/* 
        <option value="L9S1">Lesson 9 - Session 1</option>
        <option value="L9S2">Lesson 9 - Session 2</option>
        <option value="L9S3">Lesson 9 - Session 3</option>
        <option value="L9S4">Lesson 9 - Session 4</option>

        <option value="L10S1">Lesson 10 - Session 1</option>
        <option value="L10S2">Lesson 10 - Session 2</option>
        <option value="L10S3">Lesson 10 - Session 3</option>
        <option value="L10S4">Lesson 10 - Session 4</option>

        <option value="L11S1">Lesson 11 - Session 1</option>
        <option value="L11S2">Lesson 11 - Session 2</option>
        <option value="L11S3">Lesson 11 - Session 3</option>
        <option value="L11S4">Lesson 11 - Session 4</option>

        <option value="L12S1">Lesson 12 - Session 1</option>
        <option value="L12S2">Lesson 12 - Session 2</option>
        <option value="L12S3">Lesson 12 - Session 3</option>
        <option value="L12S4">Lesson 12 - Session 4</option>

        <option value="L13S1">Lesson 13 - Session 1</option>
        <option value="L13S2">Lesson 13 - Session 2</option>
        <option value="L13S3">Lesson 13 - Session 3</option>
        <option value="L13S4">Lesson 13 - Session 4</option>

        <option value="L14S1">Lesson 14 - Session 1</option>
        <option value="L14S2">Lesson 14 - Session 2</option>
        <option value="L14S3">Lesson 14 - Session 3</option>
        <option value="L14S4">Lesson 14 - Session 4</option>

        <option value="L15S1">Lesson 15 - Session 1</option>
        <option value="L15S2">Lesson 15 - Session 2</option>
        <option value="L15S3">Lesson 15 - Session 3</option>
        <option value="L15S4">Lesson 15 - Session 4</option>

        <option value="L16S1">Lesson 16 - Session 1</option>
        <option value="L16S2">Lesson 16 - Session 2</option>
        <option value="L16S3">Lesson 16 - Session 3</option>
        <option value="L16S4">Lesson 16 - Session 4</option> */}
      
      </select>

      <hr />

      {renderApp()}
    </div>
  )
}

export default App
