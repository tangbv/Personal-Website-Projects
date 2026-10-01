import { useState } from 'react'
import './App.css'
import ResortCard from './components/ResortCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ResortCard resort={{name: "massanutten", open_date: "1973"}}></ResortCard>
     <ResortCard resort={{name: "Timberline", open_date: "1987"}}></ResortCard>
    </>
  )
}

export default App
