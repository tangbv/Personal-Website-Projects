import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
		<MovieCard movie={{title: "Interstellar", release_date: "2014"}}/>
		<MovieCard movie={{title: "Cars", release_date: "2006"}}/>
	</>
  )
}

export default App
